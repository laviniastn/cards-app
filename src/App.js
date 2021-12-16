import './App.css';
import React from 'react';
import CardList from './components/CardList'
import Form from './components/Form'

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

class App extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state={
  //       profiles:testData
  //   };
  // }

  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };

  render(){
    return(
      <div>
    <div className="App-header">{this.props.title}</div>
    <Form onSubmit={this.addNewProfile}/>
    <CardList profiles={this.state.profiles}/>
    </div>
    );
  }
}

export default App;
