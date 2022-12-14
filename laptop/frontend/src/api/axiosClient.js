import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
  // paramsSerializer: (params) => queryString.stringify(params),
  paramsSerializer: function(params) {
    return queryString.stringify(params, {arrayFormat: 'brackets'})
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;