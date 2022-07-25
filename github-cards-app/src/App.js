import React from 'react';
import './App.css';
import CardList from './components/CardList';
import Form from './components/Form';

//github usernames: gaearon, sophiebits, sebmarkbage, bvaughn

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: [],
    };
  }

  addNewProfile = (profileData) => {
    //prevState is what was on the state previously
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  
  render() {
    return(
      <div>
        <div className='title'>{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
