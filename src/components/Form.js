
import './Form.css'
import React from 'react';
import axios from 'axios';


class Form extends React.Component {

    state = { userName: '' };

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    };

    render() {
        const profile = this.props;
        return (
            <div className="space">
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.userName}
                            onChange={event => this.setState({ userName: event.target.value })}
                            placeholder="GitHub username"
                            required
                        />
                        <button className="button">Add card</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;