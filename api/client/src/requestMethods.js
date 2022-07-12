import axios from "axios";
import { axiosInstance } from "./config";

const BASE_URL = "https://acrossshop.herokuapp.com/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axiosInstance.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});