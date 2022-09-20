import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';
import styles from './login-modal.css';
const SubmitLoginButton = ({
    className,
    onClick
}) => {
    // const onInputChange = (value, inputType) => {
    //     dispatch({type: 'SET_FORM', inputType: inputType, inputValue: value});
    // }
    const test = () => {
        console.log('ok');
    }
    return (
    <div>
        <Button
            className={classNames(
                className,
                styles.SubmitLoginButton
            )}
            onClick={() => this.test()}
        >
            <FormattedMessage
                defaultMessage="LOGIN"
                description="Label for submit login"
                id="gui.loginModal.submitLogin"
            />
        </Button>
    </div>
)
            };
SubmitLoginButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};
SubmitLoginButton.defaultProps = {
    onClick: () => {}
};
export default SubmitLoginButton;