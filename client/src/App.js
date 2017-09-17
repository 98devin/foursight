import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { List } from 'semantic-ui-react';
import RightSidebar from './components/sidebar/RightSidebar';
import MainHeader from './components/MainHeader.js';


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


class App extends React.Component {


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




  state = {
    priors: [
      {name: "Intro to Foology", id: "Foo.199.101", credits: 2.3, creditKinds: ['ENGINEERING']},
      {name: "Advanced BarQuxing", id: "Bar.929.301", credits: 100, creditKinds: ['QUANTITATIVE']},

    ],
    semesters: [
      {
        classes: [
          {name: "Intro to Foology", id: "Foo.199.101", credits: 2.3, creditKinds: ['ENGINEERING']},
          {name: "Advanced BarQuxing", id: "Bar.929.301", credits: 100, creditKinds: ['QUANTITATIVE']},
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
    ],
    majors : [],
    maxCredits : 18,
    minCredits : 12,
    creditOverload : false,
    exceedGradDate : false,
    gradMonth : '',
    gradYear : 0
  };

  render() {
    const { priors, semesters } = this.state;
    console.log(this.state.maxCredits)
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <MainHeader/>
          <LeftSidebar
            priors={priors}
            semesters={semesters}
          />
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
        </div>
      </ApolloProvider>
    );
  }
}


export default App;
