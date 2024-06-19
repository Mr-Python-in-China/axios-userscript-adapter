declare module "axios/unsafe/helpers/buildURL.js" {
  const buildURL: (url: string, params: any, options?: any) => string;
  export default buildURL;
}

declare module "axios/unsafe/core/buildFullPath.js" {
  const buildFullPath: (baseURL?: string, requestedURL?: string) => string;
  export default buildFullPath;
}
