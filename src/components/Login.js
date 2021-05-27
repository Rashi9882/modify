import React from 'react';
import LoginCard from './LoginCard';
import {Navbar,NavbarBrand} from 'reactstrap';

export class Login extends React.Component {
     render() {
         return (
            <div className="App">
            <Navbar dark color="info">
                <div className="container">
                    <NavbarBrand href="/">
                        HelloMusic
                    </NavbarBrand>
                </div>
            </Navbar>
            <LoginCard/>
            </div>
         );
     }
}

export default Login;