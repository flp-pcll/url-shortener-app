import React, { useCallback } from "react";
import ShortenerForm from "./ShortenerForm/ShortenerForm";

function ShortenerArea() {
    const getLinkObjectHandler = linkObj => console.log(linkObj);

    return(
        <section>
            <ShortenerForm onHttpRequest={getLinkObjectHandler} />
            <div>List</div>
        </section>
    );
};

export default ShortenerArea;