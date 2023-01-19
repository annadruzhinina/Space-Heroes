import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://finalspaceapi-production.up.railway.app",
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
