import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client"
import { Route, Routes, HashRouter } from 'react-router-dom'

import App from './components/App'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    dataIdFromObject: o => o.id   // every time we query user_type, id should be included
})

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<App />} />
                </Routes>
            </HashRouter>
        </ApolloProvider>
    )
};

ReactDOM.render(<Root />, document.querySelector('#root'));
