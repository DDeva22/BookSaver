import React from "react";






const Card = (prop) => (

    <div className="card flex-row flex-wrap">
        
        <div className="card-body">
            <div className = "card-header border-0">
                <img src = {prop.image}></img>
            </div>
            <div className = "card-block px-2">
                <h5 className="card-title">{prop.bookTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{prop.subTitle}</h6>
                <p className="card-text">{prop.synopsis}</p>
                <a href = {prop.view} className="card-link">View</a>
                

            </div>
            
        </div>
    </div>

);


export default Card;