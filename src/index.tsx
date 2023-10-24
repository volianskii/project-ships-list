import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new ApolloClient({
  uri: 'https://vortex.korabli.su/api/graphql/glossary/',
  cache: new InMemoryCache()
})
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
