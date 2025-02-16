import axios from "axios";
import { toast } from "sonner";

const BASE_URL = "http://0.0.0.0:4000"; // Backend server manzili

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// LOGIN - Foydalanuvchi tizimga kirishi
export async function login(data) {
  try {
    const response = await api.post("/user/login", data);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Login amalga oshmadi";
    toast.error(`Xatolik: ${errorMessage}`);
    console.error(error);
    throw new Error(errorMessage);
  }
}

// GET - Ma'lumotlarni olish
export async function getDataFn(endpoint) {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Xatolik yuz berdi!";
    toast.error(errorMessage);
    console.error(error);
    throw new Error(errorMessage);
  }
}

// POST - Yangi ma'lumot qo‘shish
export async function postDataFn(endpoint, data) {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Xatolik yuz berdi!";
    toast.error(errorMessage);
    console.error(error);
    throw new Error(errorMessage);
  }
}

export default api;