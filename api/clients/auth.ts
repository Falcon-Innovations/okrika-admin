import { authServerConfig, uiConfig } from "api/config";
import axios from "axios";
import { useNotificationStore } from "contexts/notifications";

export const auth = axios.create({
  baseURL: authServerConfig.url,
  headers: {
    "X-TENANT-AUTH": `Basic ${btoa(uiConfig.email + ":" + uiConfig.password)}`,
  },
});

auth.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotificationStore.getState().addNotification({
      type: "error",
      title: "Error",
      message,
    });

    return Promise.reject(error);
  },
);
