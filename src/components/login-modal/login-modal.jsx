import Modal from "../../containers/modal.jsx";
import styles from "./login-modal.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginButton from "./login-button.jsx";
import { changeForm, loginRequest, validate } from "./../../lib/auth.js";
import scratchLogo from "../menu-bar/nomoLogo.png";
import logoRobot from "../gui/mono.png";
import classNames from "classnames";
// import validate from './validationInfo.js';

const LoginModal = ({
    title,
    closeLoginModalButtonClick,
    debugState,
    form,
    changeForm,
    login,
    loading,
    validate,
    errors,
    submit,
}) => {
    const handleChangeText = (e) => {
        changeForm({ value: e.target.value, inputType: e.target.id });
    };

    const auth = () => {
        validate(form);
        if (submit) {
            login(form);
        }
    };

    return (
        <Modal
            className={styles.modalContent}
            contentLabel={title}
            id="loginModal"
            closeButtonVisible={false}
        >
            <img
                className={styles.headerImage}
                src={logoRobot}
                height={300}
                width={300}
            />
            {errors.login ? (
                <div className={styles.error}>{errors.login}</div>
            ) : (
                <div style={{ marginBottom: "1.0rem" }}></div>
            )}
            <input
                className={styles.minInput}
                id="username"
                placeholder="Username"
                type="text"
                onChange={handleChangeText}
                value={form.username}
            />
            {errors.username ? (
                <div className={styles.error}>{errors.username}</div>
            ) : (
                <div style={{ marginBottom: "1.0rem" }}></div>
            )}
            <input
                className={styles.minInput}
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChangeText}
                value={form.password}
            />
            {errors.password ? (
                <div className={styles.error}>{errors.password}</div>
            ) : (
                <div style={{ marginBottom: "1.0rem" }}></div>
            )}
            <LoginButton
                title={loading ? "Loading..." : "LOGIN"}
                className={classNames(
                    styles.btnSubmit,
                    loading ? styles.disable : null
                )}
                onClick={() => auth()}
            />
        </Modal>
    );
};
LoginModal.propTypes = {
    onCencel: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    onRequestClose: PropTypes.func,
    closeLoginModalButtonClick: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    debugState: state,
    form: state.auth.form,
    loading: state.auth.isLoading,
    errors: state.auth.formErrors,
    submit: state.auth.submit,
});
const mapDispatchToProps = (dispatch) => ({
    onCancel: () => dispatch(closeLoginModal()),
    changeForm: (data) => dispatch(changeForm(data)),
    login: (data) => dispatch(loginRequest(data)),
    validate: (data) => dispatch(validate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
