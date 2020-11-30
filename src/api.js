import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

instance.interceptors.request.use(
    function (config) {
        config.headers = {
            ...config.headers,
            Authorization: "Bearer " + localStorage.getItem("jwt-token"),
        };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        if (response.data.token) {
            localStorage.setItem("jwt-token", response.data.token);
        }
        return response;
    },
    function (error) {
        if (error.response) {
            if (error.response.status) {
                if ([401,500].includes(error.response.status)) {
                    if (["Token is Invalid", "Token is Expired", "Token is empty"].includes(error.response.data.status)) {
                        localStorage.clear();
                        window.location.href = process.env.REACT_APP_URL+"/login/SessionExpired";
                        return;
                    }
                    if (["Token has expired and can no longer be refreshed"].includes(error.response.data.message)) {
                        localStorage.clear();
                        window.location.href = process.env.REACT_APP_URL+"/login/SessionExpired";
                        return;
                    }
                }
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
