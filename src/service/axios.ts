import axios, { AxiosError } from "axios";

const BaseService = axios.create({
  timeout: 60000,
  baseURL: "http://localhost:5001/api",
});

// BaseService.interceptors.request.use(
//   (config) => {
//     const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME)
//     const persistData = deepParseJson(rawPersistData)

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     let accessToken = (persistData as any)?.auth?.session?.token

//     if (!accessToken) {
//       const { auth } = store.getState()
//       accessToken = auth.session.token
//     }

//     if (accessToken) {
//       config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`
//     }

//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

BaseService.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response.data.status && response.data.status >= 400) {
      return Promise.reject(response.data);
    }
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default BaseService;
