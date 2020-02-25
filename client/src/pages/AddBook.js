import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import Jumbotron from "../components/jumbotron.js";
import Card from "../components/card.js";
import Navbar from "../components/navbar.js";
import Search from "../components/searchForm.js";


const AddBook = () => {
    const [search, setSearch] = useState({})


    const submit = (event) => {
        event.preventDefault();

        API.search(search)
        .then(res => {(
            setSearch(res))
            console.log(res.data.items[0])
        })
        .catch(error => console.log(error));
    };















    return (
        <div>
            <Jumbotron
                header = {"Add A Book!"}
                sentence = {"Enter By Title or Author"}
            />
            
            <Search
            submit = {submit}
            setSearch = {setSearch}
            />









        </div>
    );
}

export default AddBook;