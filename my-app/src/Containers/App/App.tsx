import React from 'react';

import NavBar from '../../Components/NavBar';
import Main from '../../Components/Main';
import Footer from '../../Components/Footer';

import { Box } from '@material-ui/core';
import { StyledContainer, StyledContent } from './style';

function App() {
  return (
    <StyledContainer>
      <Box id='header'>
        <NavBar />
      </Box>
      <StyledContent>
        <Box id='content'>
          <Main />
        </Box>
        <Box id='footer'>
          <Footer />
        </Box>
      </StyledContent>
    </StyledContainer>
  );
}

export default App;
