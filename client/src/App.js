import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { List } from 'semantic-ui-react';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  graphql,
} from 'react-apollo';


const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  networkInterface,
});


const classesQuery = gql`
  query {
    classes(credits: 3.0) {
      id
      name
    }
  }
`;

const ClassList = ({ data: { loading, classes, error }}) => (
  <div>
    <List>
    { loading ?
        <p>Loading... </p>
        : classes.map(cls => 
          <List.Item>{cls.name} ({cls.id})</List.Item>
        )
    }
    </List>
  </div>
);

const ClassListWithData = graphql(classesQuery)(ClassList);


class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <ClassListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
