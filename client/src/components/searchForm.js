import React, { useState, useEffect } from "react";
import API from "../utils/API.js";


const Search = (props) => {
    const [search, setSearch] = useState("")

    const submit = (event) => {
        event.preventDefault();

        API.search(search)
        .then(res => (
            
            console.log(res.data.items[0])
        ))
        .catch(error => console.log(error));
    };

    



    return(
        <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
                <form className="card card-sm">
                    <div className="card-body row no-gutters align-items-center">
                        <div className="col-auto">
                            <i className="fas fa-search h4 text-body"></i>
                        </div>
                        
                        <div className="col">
                            <input 
                            className="form-control form-control-lg form-control-borderless" 
                            type="text" 
                            placeholder="Search Title or Author" 
                            value = {search} 
                            onChange = {(e)=> setSearch(e.target.value)} ></input>
                        </div>
                        
                        <div className="col-auto">
                            <button className="btn btn-lg btn-success" type="submit" onClick = {submit}>Search</button>
                        </div>
                    
                    </div>
                </form>
                
                
            </div>
        </div>






    );





};

export default Search;