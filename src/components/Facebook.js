import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
    state = {
        isLogged: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        this.setState({
            isLogged: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    componentClicked = () => console.log("Login Button Clicked");

    render() {
        let fbContent;

        if(this.state.isLogged){
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#000',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name} </h2>
                    Email: {this.state.email}
                </div>
            )
        }else{
            fbContent = (<FacebookLogin 
                appId="1497958993873714"
                autoLoad={false}
                fields="name, email, picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
