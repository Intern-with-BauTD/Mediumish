import axios from 'axios';

const config = {
  baseURL: `${process.env.REACT_APP_API}/v1.0`,
  validateStatus: (status) => status >= 200 && status < 400,
  timeout: 60000,
};

const axiosClient = axios.create(config);

export default axiosClient;
