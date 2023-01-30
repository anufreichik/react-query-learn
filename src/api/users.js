import axios from "axios";
export function getUsers() {
    return axios
        .get("https://reqres.in/api/users")
        .then(res => {
            return res.data;
        })
}

export function getSingleUser() {
    return axios
        .get("https://reqres.in/api/users/2")
        .then(res => {
            return res.data;
        })
}
