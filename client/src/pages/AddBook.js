import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import Jumbotron from "../components/jumbotron.js";
import Card from "../components/card.js";
import Navbar from "../components/navbar.js";
import Search from "../components/searchForm.js";


const AddBook = () => {
   


    


    return (
        <div>
            <Jumbotron
                header = {"Add A Book!"}
                sentence = {"Enter By Title or Author"}
                
            />
            
            <Search
                
            
            />



        </div>
    );
}

export default AddBook;