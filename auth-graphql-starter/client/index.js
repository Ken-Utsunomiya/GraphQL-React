import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client"
import { Route, Routes, HashRouter } from 'react-router-dom'

import App from './components/App'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

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
                    <Route exact path="/" element={<App children={<div />} />} />
                    <Route exact path="login" element={<App children={<LoginForm />} />} />
                    <Route exact path="signup" element={<App children={<SignupForm />} />} />
                </Routes>
            </HashRouter>
        </ApolloProvider>
    )
};

ReactDOM.render(<Root />, document.querySelector('#root'));
