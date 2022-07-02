import * as React from "react";
import {useEffect} from "react";
import DocumentApi from "../../api/DocumentApi";
import useQuery from "../../utils/Hook";
import {Grid} from "@mui/material";
import DocumentSearch from "./DocumentSearch";
import DocumentList from "./DocumentList";

function DocumentPage(props: any) {
    const queryParams = useQuery()
    useEffect(() => {
        console.log("Execute request")
        const qParam = queryParams.get("q");
        if (!qParam)
            return
        DocumentApi.search(qParam)
            .then((res) => {
                console.log("success search request")
            }).catch(function (error) {
            // handle error
            console.log(error);
        })
    })

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >

            <DocumentSearch/>
            <DocumentList/>

        </Grid>
    );
}

export default DocumentPage;