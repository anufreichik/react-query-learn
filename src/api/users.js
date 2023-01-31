import axios from "axios";
export function getUsers() {
    return axios
        .get("https://reqres.in/api/users")
        .then(res => {
            return res.data;
        })
}

export function getSingleUser(id) {
    return axios
        .get(`https://reqres.in/api/users/${id}`)
        .then(res => {
            return res.data;
        })
}
