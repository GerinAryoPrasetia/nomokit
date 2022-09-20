import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';
import connect from 'react-redux/es/connect/connect';
import styles from './login-modal.css';

const LoginButton = ({
    className,
    onClick,
    title
}) => {
return (
    
    <Button
        className={classNames(
            className,
            styles.SubmitLoginButton
        )}
        onClick={onClick}
    >
        <FormattedMessage
            defaultMessage="{title}"
            description="Label for login"
            id="gui.loginModal.submitLogin"
            values={{title: title}}
        />  


    </Button>
    )
};
LoginButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    form: PropTypes.object
};

LoginButton.defaultProps = {
    onClick: () => {
        //message()
      
    }
};
const message = () => {
    console.log("Hello World!") 
   }
export default LoginButton;