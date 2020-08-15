import { LocalStorage } from 'quasar'
import axios from 'axios'
let $http = axios.create({
  baseURL: 'https://api.hospital.demo.cloudware.com.kh/'
  // baseURL: 'http://localhost:3030/'
});
let token = LocalStorage.getItem("userInfo");
if (token) {
  $http.defaults.headers.common['Authorization'] = `Bearer ${token.access_token}`;
}
export default $http;
