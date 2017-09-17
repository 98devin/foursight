import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  graphql,
} from 'react-apollo';

import LeftSidebar from './components/sidebar/LeftSidebar';
import ScheduleView from './components/scheduleview/ScheduleView';

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


class App extends React.Component {

  state = {
    priors: [
      {name: "Intro to Foology", id: "Foo.199.101", credits: 2.3, creditKinds: ['ENGINEERING']},
      {name: "Advanced BarQuxing", id: "Bar.929.301", credits: 100, creditKinds: ['ENGINEERING', 'QUANTITATIVE']},
    ],
    semesters: [
      { 
        classes: [ 
          {name: "Intro to Foology", id: "Foo.199.101", credits: 2.3, creditKinds: ['ENGINEERING']},
          {name: "Advanced BarQuxing", id: "Bar.929.301", credits: 100, creditKinds: ['ENGINEERING', 'QUANTITATIVE']},
        ] 
      },
      {
        classes: []
      },
      {
        classes: []
      },
      {
        classes: []
      },
      {
        classes: []
      },
      {
        classes: []
      },
      {
        classes: []
      },
      {
        classes: []
      }
    ]
  };

  render() {

    const { priors, semesters } = this.state;

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <ScheduleView semesters={semesters}/>
          <LeftSidebar
            priors={priors}
          />
        </div>
      </ApolloProvider>
    );
  }

}

export default App;
