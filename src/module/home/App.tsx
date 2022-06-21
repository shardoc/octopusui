import * as React from 'react';
import DocumentSearch from "../document/DocumentSearch";
import {Grid} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../../theme';
import MainMenuBar from "./MainMenuBar";
import {Routes, Route, Outlet, Link} from "react-router-dom";

const DocumentPage = React.lazy(() => import("../document/DocumentPage"));
const ProfilePage = React.lazy(() => import("../profile/ProfilePage"));


export default function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <MainMenuBar/>

            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route
                        path="about"
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <ProfilePage/>
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="document"
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <DocumentPage/>
                            </React.Suspense>
                        }
                    />
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

function Home() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '70vh'}}
        >

            <Grid item xs={3}>
                <DocumentSearch/>
            </Grid>

        </Grid>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}