import React from "react";

const Jumbotron = (prop) => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">{prop.header}</h1>
            <p className="lead">{prop.sentence}</p>
        </div>
    </div>

)


export default Jumbotron;