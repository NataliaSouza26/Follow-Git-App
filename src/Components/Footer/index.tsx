import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ElevationScroll from '../ElevationScroll';

interface FooterProps {
    window?: () => Window;
}

const Footer = (props: FooterProps) => {
    return (
        <>

            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6">Direitos reservados NT</Typography>
                </Toolbar>
            </AppBar>

            <Toolbar />
        </>
    )
}

export default Footer;