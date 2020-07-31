import React from 'react';
import { Box, Typography } from '@material-ui/core';
import empty from '../../assets/empty.gif';


const EmptyResult = () => {

    return (
        <Box>
            <Typography variant="body1">Esperando conteudo a ser pesquisado...</Typography>
            <img src={empty} />
        </Box>

    );
}

export default EmptyResult;