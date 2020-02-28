import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import Jumbotron from "../components/jumbotron.js";
import Card from "../components/card.js";
import Navbar from "../components/navbar.js";
import Search from "../components/searchForm.js";

const AddBook = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([]);

    useEffect(() => {
        
        console.log(results)
    }, [results]);


    const setChange = (event) => setSearch(event.target.value)


    const handleFormSubmit = (event) => {
        event.preventDefault();
        API.search(search)
        .then(res => (
            
            setResults(res.data.items))
        )
        .catch(error => console.log(error));

    }


    const validate = (input) => {
        if(typeof input === 'undefined' || typeof input === undefined || typeof input === null) {
            return "String of Undefined"
        } else{
            return input;

        }
        





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

            <ul>
                {results.map((result, i) => (
                    <li key = {i}>
                        <Card 
                            
                            bookTitle = {result.volumeInfo.title}
                            subTitle = {result.volumeInfo.authors}
                            synopsis = {result.volumeInfo.description}
                            view = {result.volumeInfo.infoLink}
                            image = {result.volumeInfo.imageLinks === undefined
                                ? ""
                                : `${result.volumeInfo.imageLinks.thumbnail}`
                            }

                        />
                    </li>
                ))}
            </ul>
            



        </div>
    );
}

export default AddBook;