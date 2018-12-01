import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Dogs } from './Dogs';
import { DogPhoto } from './DogPhoto';
import './App.css';


const client = new ApolloClient ({
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
});

class App extends Component {
  state = { selectedDog: null };

   onDogSelected = ({ target }) => {
     this.setState(() => ({ selectedDog: target.value }));
   };

  render() {
    const {onDogSelected, selectedDog} = this.props;
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Dogs onDogSelected={onDogSelected} />
        <DogPhoto breed />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
