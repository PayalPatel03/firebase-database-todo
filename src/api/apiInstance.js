

import axios from "axios";

export const apiInstance = axios.create({
    // baseURL:import.meta.env.VITE_FIREBASE_DB_URL,
     baseURL: "https://fir-database-todo-default-rtdb.firebaseio.com",
})