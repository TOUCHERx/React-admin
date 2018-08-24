import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';

class MyLoginPage extends Component {
    submit = (e) => {
        e.preventDefault();
        // gather your data/credentials here
        const credentials = { };

        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);
    }

    render() {
        return (
            <form onSubmit={this.submit}>
            ...
            </form>
        );
    }
};

export default connect(undefined, { userLogin })(MyLoginPage);

// in src/MyLogoutButton.js
import React from 'react';
import { connect } from 'react-redux';
import { Responsive, userLogout } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

const MyLogoutButton = ({ userLogout, ...rest }) => (
    <Responsive
        xsmall={
            <MenuItem
                onClick={userLogout}
                {...sanitizeRestProps(rest)}
            >
                <ExitIcon /> Logout
            </MenuItem>
        }
        medium={
            <Button
                onClick={userLogout}
                size="small"
                {...sanitizeRestProps(rest)}
            >
                <ExitIcon /> Logout
            </Button>
        }
    />
);
export default connect(undefined, { userLogout: userLogout() })(MyLogoutButton);

// in src/App.js
import MyLoginPage from './MyLoginPage';
import MyLogoutButton from './MyLogoutButton';

const App = () => (
    <Admin loginPage={MyLoginPage} logoutButton={MyLogoutButton} authProvider={authProvider}>
    ...
    </Admin>
);