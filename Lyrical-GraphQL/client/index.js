import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, HashRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div className='ui container'>
          <Routes>
            <Route exact path="/" element={<SongList />} />
            <Route exact path="/songs/new" element={<SongCreate />} />
          </Routes>
        </div>
      </HashRouter>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
