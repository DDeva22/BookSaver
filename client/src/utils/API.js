import axios from "axios";


const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

const APIKEY = "&key=AIzaSyCpi5XqNj_Pct9yX5-AacPfJgV4CgHHY28";

export default {

    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    },

    getBooks: function() {
        return axios.get("/api/books");
    },

    saveBook: function(data) {

        return axios.post("/api/books", data);
    },


    deleteBook: function(id) {
        
        return axios.delete("/api/books/" + id);
    }




};


