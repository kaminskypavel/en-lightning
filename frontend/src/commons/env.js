export const isDev = () => process.env.NODE_ENV === 'development' || process.env.NODE_ENV === null;
export const isProd = () => !isDev()

export const getServerURL = () => isDev() ? "http://localhost:5005" : "TBD";
