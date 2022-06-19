import * as React from "react";
import {useEffect} from "react";
import DocumentApi from "../../api/DocumentApi";
import {useLocation, useParams, useSearchParams} from "react-router-dom";

function DocumentPage(props:any)  {
    const location = useLocation();
    console.log(location)
   /* useEffect(() => {
        DocumentApi.search("")
            .then((res) => {
                console.log("test")
            })
    })*/

    return (
        <div>
            <h2>DocumentPage</h2>
        </div>
    );
}

export default DocumentPage;