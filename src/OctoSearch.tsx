import * as React from 'react';
import {InputBase, Paper, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
import {useState} from "react";

export default function OctoSearch() {
    const navigate = useNavigate();
    const [querySearch, setQuerySearch] = useState<string>("");
    const handleDocumentSearch = () => {
        if (querySearch) {
            navigate(`/document?q=${querySearch}`);
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
            <IconButton type="submit" sx={{p: '10px'}} aria-label="search" onClick={handleDocumentSearch}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}
