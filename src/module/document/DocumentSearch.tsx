import * as React from 'react';
import {InputBase, Paper, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import InputProps from "../../utils/InputProps";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function DocumentSearch(props : InputProps) {

    const navigate = useNavigate();
    const currentQuery = props.value;
    const [querySearch, setQuerySearch] = useState<string>(currentQuery);
    const handleDocumentSearch = () => {
        if (!!querySearch ) {
            navigate({
                pathname: "/document",
                search: `q=${querySearch}`
            });
        }

    };
    return (
        <Paper
            elevation={0}
            variant="outlined" square
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search Doc"
                inputProps={{'aria-label': 'search document'}}
                value={querySearch}
                onChange={e => setQuerySearch(e.target.value)}
            />
            <IconButton sx={{p: '10px'}} aria-label="search" onClick={handleDocumentSearch}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}
