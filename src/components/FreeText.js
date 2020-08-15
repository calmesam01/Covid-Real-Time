import React from "react";
import FreeTextWithoutLoading from "./FreeTextWithoutLoading";

function FreeText (props) {
    return (
        <div>
            {props.loading === false && <FreeTextWithoutLoading />}
        </div>
    )
}

export default FreeText;