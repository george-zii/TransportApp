import axios from "axios";
import { Platform } from "react-native";

export const BASE_API_URL = Platform.OS === 'ios' ? "http://localhost:3000" : "http://10.0.2.2:3000";

export const yMapsAPIKey = "ac118a0f-edb0-4ee4-9836-dc67e14501d2";

export const languages = {
    ru: 'Russian',
    en: 'Английский'
}

export const apiInstance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 10000,
});