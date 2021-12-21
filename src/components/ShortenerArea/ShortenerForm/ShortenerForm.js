import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";

import styles from "./ShortenerForm.module.css";
import Spinner from "../../UI/Spinner/Spinner";

function ShortenerForm({onHttpRequest}) {
    const inputRef = useRef(null);
    const [isInputValid, setIsInputValid] = useState(false);
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    const inputClickHandler = event => {
        event.preventDefault();
        setErrorAlert(false);
    };

    //validation:
    const formSubmitHandler = event => {
        event.preventDefault();
        const exp = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&\\=]*)/gm);
        if(exp.test(inputRef.current.value)) {
            setIsInputValid(true);
            setDataIsLoading(true);
        } else {
            console.log('invalid input text');
            setErrorAlert(true);
        };
    };

    //http request:
    useEffect(() => {
        if (!isInputValid) return;

        const url = `https://api.shrtco.de/v2/shorten?url=${inputRef.current.value}`;
        const getShortenedLink = async (url) => {
            try {
                const request = await axios.get(url);
                onHttpRequest({
                    id: request.data.result.code,
                    originalURL: request.data.result.original_link,
                    shortenedURL: request.data.result.short_link
                });
                inputRef.current.value = null;
                setDataIsLoading(false);
            } catch(err) {
                console.log(err);
            };
        };
        getShortenedLink(url);
        setIsInputValid(false);
    }, [isInputValid, onHttpRequest]);

    return (
        <Card className={styles['shortener-form_card']}>
            <form onSubmit={formSubmitHandler} className={styles['shortener-form']} id="shortenerForm" noValidate autoComplete="off">
                <fieldset className={styles['shortener-form_form-controls']} name="Form Controls">
                    <Input className={`${errorAlert ? styles['input-on-error'] : ""}`} inputref={inputRef} type="text" ariaLabel="Add a link here" placeholder="Shorten a Link here..." onClick={inputClickHandler} />
                    <small className={`${errorAlert ? styles['error-message_alert'] : styles['error-message_disabled']}`} title="Error Message">Please add a valid link...</small>
                </fieldset>
                <fieldset className={styles['shortener-form_form-actions']} name="Form Actions">
                    <Button type="submit">
                        {dataIsLoading ? <Spinner /> : "Shorten It!"}
                    </Button>
                </fieldset>
            </form>
        </Card>
    );
};

export default ShortenerForm;