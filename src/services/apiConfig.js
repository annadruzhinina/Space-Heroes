import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://finalspaceapi-production-42f7.up.railway.app/api",
  development: "http://localhost:4000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
