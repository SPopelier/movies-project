import axios from "axios";

export function axiosRequest() {
    axios.get('http://localhost:8000/api/movies?page1&itemsPerPage=12')
        .then(function (response) {
            console.log(response);
        })
}