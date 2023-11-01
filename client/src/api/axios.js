import axios from "axios";
import { BASE_URL } from "../utils/config";

const axiosInstance = axios.create({BASE_URL})

export default axiosInstance