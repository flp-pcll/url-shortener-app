import React from "react";
import ShortenerForm from "./ShortenerForm/ShortenerForm";

//store the links array in localStorage;
//add items to links list and pass it to list as props;


function ShortenerArea() {
    return (
        <section>
            <ShortenerForm />
            <div>List</div>
        </section>
    );
};

export default ShortenerArea;