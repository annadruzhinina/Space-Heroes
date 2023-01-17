import axios from axios

let apiUrl;

const apiUrls = {
    production: 'www.my-backend-api.raiway.com/',
    development: 'http://localhost:4000/api'
};

if(window.location.hostname === 'localhost'){
    apiUrl = apiUrls.development;
}else{
    apiUrl = apiUrls.production
} 

const api = axios.create({
    baseUrl: apiUrl,
});

export default api;