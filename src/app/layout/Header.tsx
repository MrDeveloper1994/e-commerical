import {AppBar, Toolbar, Typography, Switch} from "@mui/material";
import React from "react";

const Header: React.FC<{ darkMode: boolean, handleThemeChange: () => void }> = ({darkMode, handleThemeChange}) => {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">E-Commerce App</Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}
export default Header;