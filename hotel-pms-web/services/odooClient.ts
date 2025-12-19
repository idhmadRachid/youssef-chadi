import axios from "axios";

export const odooClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ODOO_API_URL, // e.g. https://odoo.example.com/api/v1
  withCredentials: true, // cookies (access_token)
  headers: { "Content-Type": "application/json" },
  timeout: 30000,
});

// Optional: normalize errors
odooClient.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err?.response?.status;
    const data = err?.response?.data;
    const message =
      data?.error ||
      data?.message ||
      err?.message ||
      "Unexpected API error";
    return Promise.reject({ status, message, data });
  }
);
