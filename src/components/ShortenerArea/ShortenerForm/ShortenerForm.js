import React from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";

import styles from "./ShortenerForm.module.css";

function ShortenerForm() {
    return (
        <Card className={styles['shortener-form_card']}>
            <form className={styles['shortener-form']} id="shortenerForm" noValidate autoComplete="off">
                <fieldset className={styles['shortener-form_form-controls']} name="Form Controls">
                    <Input type="text" ariaLabel="Add a link here" placeholder="Shorten a Link here..." />
                    <small style={{display: 'none'}} title="Error Message">Please add a valid link...</small>
                </fieldset>
                <fieldset className={styles['shortener-form_form-actions']} name="Form Actions">
                    <Button type="submit" >Shorten it!</Button>
                </fieldset>
            </form>
        </Card>
    );
};

export default ShortenerForm;