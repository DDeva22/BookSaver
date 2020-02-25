import axios from "axios";


const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

const APIKEY = "&key=AIzaSyCpi5XqNj_Pct9yX5-AacPfJgV4CgHHY28";

export default {
    search: function(query) {
        console.log(query);
        return axios.get(BASEURL + query + APIKEY);
    }
};


