import React, { useContext, useEffect } from 'react';
import { authProvider } from '../Provider/Provider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { config } from 'localforage';

const useAxiosSecure = () => {
    const { logout } = useContext(authProvider);
    const navigate = useNavigate();
    const axiosSecure = axios.create({
        baseURL: 'https://dance-school-server-senior9.vercel.app/'
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.statusCode === 401 || error.response.statusCode === 403)) {
                    await logout();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logout, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;
