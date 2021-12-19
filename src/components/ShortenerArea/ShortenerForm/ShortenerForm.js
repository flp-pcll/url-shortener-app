import React from "react";
import axios from "axios";
import Button from "../../UI/Button/Button";


//validate input value;
//make http request for shortener api (axios);
//pass the object with the response to Shortener Area in a prop function;

function ShortenerForm() {
    return (
        <form>
            <fieldset>
                <label htmlFor="linkToShort">
                    <span>Please enter a valid link...</span>
                </label>
                <input id="linkToShort" placeholder="Add a link here..."></input>
            </fieldset>
            <fieldset>
                <Button>Shorten It!</Button>
            </fieldset>
        </form>
    );
};

export default ShortenerForm;