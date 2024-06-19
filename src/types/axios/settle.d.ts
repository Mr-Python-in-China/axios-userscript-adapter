declare module "axios/unsafe/core/settle.js" {
  import { AxiosResponse } from "axios";
  const settle: <T>(
    resolve: (value: AxiosResponse<T>) => void,
    reject: (err: Error) => void,
    res: AxiosResponse<T>,
  ) => void;
  export default settle;
}
