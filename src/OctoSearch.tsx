import * as React from 'react';
import {InputBase, Paper, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';


export default function OctoSearch() {
  return (
      <Paper
          elevation={0}
          variant="outlined" square
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Doc"
            inputProps={{ 'aria-label': 'search document' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
  );
}
