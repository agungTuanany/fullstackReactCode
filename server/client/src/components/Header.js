/**
@param className whenever you work with react component we do not pass in css clasess as the class property we instead use className
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                    Emaily
                    </a>
                    <ul className="right">
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps) (Header);