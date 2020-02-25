import React from "react";


const Card = (prop) => (

    <div className="card" style={{width: "18rem"}}>
        
        <div className="card-body">
            <h5 className="card-title">{prop.bookTitle}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{prop.subTitle}</h6>
            <p className="card-text">{prop.synopsis}</p>
            <a href= {prop.view} className="card-link">View</a>
            <a href="#" className="card-link">Save</a>
        </div>
    </div>

);


export default Card;