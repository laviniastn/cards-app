import React from 'react';
import Card from './Card'

class CardList extends React.Component {
    constructor(props){
    super(props);
   
  }


    render() {
        return (<div>{this.props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}</div>)
    }
}

export default CardList;