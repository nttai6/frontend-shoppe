
import axios from "axios";

const instance = axios.create({
    baseURL: "https://backend-shoppe.onrender.com/api",
});

instance.interceptors.response.use(
    function (response) {
        console.log(response);
        return response.data;
    },
    function (error) {

        if (error.response.status == 401) {
            console.log(error);
        }
        return Promise.reject(error);
    }
);
export default instance;


export const PORT_APIS = "https://backend-shoppe.onrender.com/api";