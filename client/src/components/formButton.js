import React from "react";






const Button = (props) => (
    <button type="button" value = {props.value} onClick = {props.click} className="btn-primary">Save</button>
)


export default Button;