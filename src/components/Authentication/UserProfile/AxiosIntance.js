import axios from 'axios';
import { Navigate } from 'react-router-dom';
 

const axiosInstance = axios.create({
    baseURL: "https://api.dressme.uz/api/user", // Replace with your API base URL
});

let isRefreshing = false;
let refreshSubscribers = [];
 
async function refreshToken() { 
    try {
        const headers = {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem("userRefresh")}`,
        };
        const data = {
            refresh_token: localStorage.getItem("userRefresh"),
        };
        const response = await axios.post(`https://api.dressme.uz/api/user/refresh-token`, data, { headers });
        if (response?.status >= 200 && response?.status < 300) {
            localStorage.setItem("userAccess", response?.data?.access_token);
            // Resolve all refresh subscribers with the new access token
            refreshSubscribers.forEach(callback => callback(response.data.access_token));
            // Clear refresh subscribers
            refreshSubscribers = [];
            return response.data.access_token;
        }
    } catch (error) {
        if (error?.response?.status === 401 || error?.response?.status === 403) {
            localStorage.removeItem("userAccess");
            <Navigate to="/sign_in" replace />;

            if (localStorage?.getItem("userAccess")) {
                window.location.reload();
            }
        }
        throw error; // Propagate the error for further handling
    }
}

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('userAccess');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
         if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (!isRefreshing) {
                isRefreshing = true;
                await refreshToken();
                isRefreshing = false;
            }
            return new Promise((resolve, reject) => {
                refreshSubscribers.push(() => {
                    resolve(axiosInstance(originalRequest));
                });
            });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
