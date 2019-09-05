#!/usr/bin/env ruby
$:.unshift(File.dirname(__FILE__))

require 'sinatra'
require 'grpc'
require 'rpc_services_pb'
require 'json'
require 'pry-remote'
require 'sinatra/cross_origin'

# Due to updated ECDSA generated tls.cert we need to let gprc know that
# we need to use that cipher suite otherwise there will be a handhsake
# error when we communicate with the lnd rpc server.
ENV['GRPC_SSL_CIPHER_SUITES'] = "HIGH+ECDSA"

class MyApp < Sinatra::Base
  certificate = File.read(File.expand_path("/Users/boris/Library/Application Support/Lnd/tls.cert"))
  credentials = GRPC::Core::ChannelCredentials.new(certificate)
  stub = Lnrpc::Lightning::Stub.new('127.0.0.1:10009', credentials)

  set :bind, 'localhost'

  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end

  get '/add' do
    content_type :json

    response = stub.add_invoice(Lnrpc::Invoice.new({ memo: params[:note], value: params[:value].to_i }))

    {
        r_hash: response.r_hash.unpack1('H*'),
        request: response.payment_request
    }.to_json
  end

  get '/check' do
    content_type :json

    begin
      response = stub.lookup_invoice(Lnrpc::PaymentHash.new({ r_hash_str: params[:id] }))
    rescue GRPC::Unknown
      return { ready: false }.to_json
    end

    if response.settled
      {
          ready: true,
          value: response.value,
          memo: response.memo,
          secret: "#{ response.value },#{ Time.now.to_i }"
      }.to_json
    else
      { ready: false }.to_json
    end
  end
end

run MyApp.run!

