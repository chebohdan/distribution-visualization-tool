import axios, { type AxiosInstance, type AxiosResponse } from "axios";
import { snakeToCamel } from "../helpers/caseConverter";

export const api: AxiosInstance = axios.create({
  baseURL: "https://opentdb.com/",
});

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.data) {
      response.data = snakeToCamel(response.data);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
