import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const httpLink = new HttpLink({
//   uri: 'http://127.0.0.1:5000/graphql',
// });

// const wsLink = new WebSocketLink({
//   uri: 'ws://127.0.0.1:5000/graphql',
//   options: {
//     reconnect: true,
//   },
// });

// const link = split(
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return kind === 'OperationDefinition' && operation === 'subscription';
//   },
//   wsLink,
// );

// const client = new ApolloClient({
//   httpLink,
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
