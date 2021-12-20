import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";

import styles from "./ShortenerForm.module.css";


//validate input value;
//make http request for shortener api (axios);
//pass the object with the response to Shortener Area in a prop function;

function ShortenerForm() {
    const inputRef = useRef(null);

    //set state to make http request;
    const formSubmitHandler = event => {
        event.preventDefault();
        console.log(`Submitted: ${inputRef.current.value}`);

        inputRef.current.value = null;
    };

    return (
        <Card className={styles['shortener-form_card']}>
            <form className={styles['shortener-form_container']} id="shortenLinkForm" autoComplete="off" noValidate onSubmit={formSubmitHandler}>
                <fieldset className={styles['shortener-form_controls']} name="Form Controls">
                    <label style={{display: 'block'}} htmlFor="linkToShort">
                        {/* <span name="error message">Please enter a valid link...</span> */}
                    </label>
                    <Input inputref={inputRef} id="linkToShort" type="text" placeholder="Shorten a link here..." />
                </fieldset>
                <fieldset className={styles['shortener-form_actions']} name="Form Actions">
                    <Button type="submit" isPrimary={false}>Shorten It!</Button>
                </fieldset>
            </form>
        </Card>
    );
};

export default ShortenerForm;