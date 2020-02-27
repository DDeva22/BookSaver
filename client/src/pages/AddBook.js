import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import Jumbotron from "../components/jumbotron.js";
import Card from "../components/card.js";
import Navbar from "../components/navbar.js";
import Search from "../components/searchForm.js";


const AddBook = () => {
    const [search, setSearch] = useState("")




    const setChange = (event) => setSearch(event.target.value)


    const handleFormSubmit = (event) => {
        
        API.search(search)
        .then(res => (
            setSearch(res.data.message),
            console.log(res))
        )
        .catch(error => console.log(error));
    }













    


    return (
        <div>
            <Jumbotron
                header = {"Add A Book!"}
                sentence = {"Enter By Title or Author"}
                
            />
            
            <Search
            setChange = {setChange}
            submit = {handleFormSubmit}
            
            />



        </div>
    );
}

export default AddBook;