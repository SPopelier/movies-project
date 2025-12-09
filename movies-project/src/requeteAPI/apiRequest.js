import axios from "axios";

const apiMovies = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export function axiosRequest() {
    apiMovies.get('/movies', {
        params: {
            page: 1,
            itemsPerPage: 12
        }
    }).then(function (response) {
        console.log(response);
    })


}