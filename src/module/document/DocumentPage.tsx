import * as React from "react";
import {useEffect} from "react";
import DocumentApi from "../../api/DocumentApi";
import useQuery from "../../utils/Hook";
import {Grid} from "@mui/material";
import DocumentSearch from "./DocumentSearch";
import DocumentList from "./DocumentList";

function DocumentPage(props: any) {
    const queryParams = useQuery()
    const qParam : string = queryParams.get("q") ?? "";
    useEffect(() => {
        console.log("Execute request")

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
            padding={2}
            spacing={2}
        >
            <Grid item xs={4}><DocumentSearch value={qParam}/></Grid>
            <Grid item xs={12}><DocumentList/></Grid>
        </Grid>
    );
}

export default DocumentPage;