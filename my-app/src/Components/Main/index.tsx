import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import ResultBox from '../ResultBox';
import { Box } from '@material-ui/core';
import EmptyResult from '../EmptyResult';
import Error from '../ErrorSystem';

const Main = () => {
  const [query, setQuery] = useState('');

  return (
    <main>
      <Box my={2}>
        <SearchBox onChange={(value) => { setQuery(value) }} value={query} />
      </Box>
      <Error>
        {query && query !== '' ? <ResultBox query={query} /> : <EmptyResult />}
      </Error>

    </main>
  );
}

export default Main;