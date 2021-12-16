import './Card.css'
import React from 'react';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="space">
                <div className="card">
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img className="img" src={profile.avatar_url} alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <div className="name">{profile.name}</div>
                            <div className="company">{profile.company}</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Card;