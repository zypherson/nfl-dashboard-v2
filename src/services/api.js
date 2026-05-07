import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // temp for now

export const api = axios.create({
  baseURL: "https://v1.american-football.api-sports.io/",
  headers: {
    "x-apisports-key": API_KEY,
  },
});