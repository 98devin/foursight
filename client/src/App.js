import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { List } from 'semantic-ui-react';
import RightSidebar from './RightSidebar';

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

  state = {
    majors : [],
    maxCredits : 18,
    minCredits : 12,
    creditOverload : false,
    exceedGradDate : false,
    gradMonth : '',
    gradYear : 0
  }

  handleCheckboxChange = (preferenceName) => (e, data) => {
    this.setState(s =>
      s[preferenceName] = data.checked
    );
  }

  handleTextField = (preferenceName) => (e, data) => {
    this.setState(s =>
      s[preferenceName] = data.value
    );
  }

  addMajor = (str) => (e, data) =>{
    console.log(str);
    this.setState(s =>
      this.state.majors.push(data.value)
    );
  }


  render() {
    console.log(this.state.maxCredits)
    return (
      <ApolloProvider client={client}>
        <div>
          <RightSidebar
            callbacks={{
              creditOverloadHandler: this.handleCheckboxChange('creditOverload'),
              exceedGradHandler: this.handleCheckboxChange('exceedGradDate'),
              gradMonthHandler: this.handleTextField('gradMonth'),
              gradYearHandler: this.handleTextField('gradYear'),
              minCreditsHandler: this.handleTextField('minCredits'),
              maxCreditsHandler: this.handleTextField('maxCredits')
            }} addMajor={{addMajor: this.addMajor}}
          />
          RightSidebar.style.fontStyle='italic'
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
