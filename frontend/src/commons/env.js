export const isDev = () => process.env.NODE_ENV === 'DEVELOPMENT' || process.env.NODE_ENV === "";
export const isProd = () => !isDev()

export const getServerURL = () => isDev() ? "http://localhost:5005" : "TBD";
