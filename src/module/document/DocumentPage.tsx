import * as React from "react";
import {useEffect} from "react";
import DocumentApi from "../../api/DocumentApi";
import useQuery from "../../utils/Hook";

function DocumentPage(props: any) {
    const queryParams = useQuery()
    useEffect(() => {
        console.log("Execute request")
        const qParam = queryParams.get("q");
        if (!qParam)
            return
        DocumentApi.search(qParam)
            .then((res) => {
                console.log("test")
            })
    })

    return (
        <div>
            <h2>DocumentPage</h2>
        </div>
    );
}

export default DocumentPage;