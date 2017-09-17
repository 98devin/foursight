import gql from 'graphql-tag';

const query = gql`
  query {
    classes {
      id
      name
      credits
      semester
      upperLevel
      creditKinds
    }
  }
`;

class Classes extends Component {
  state = {
    names : query
  }


}

export default graphql(query)