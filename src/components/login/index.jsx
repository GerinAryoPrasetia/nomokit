import React, { useState } from "react";
import styles from "./login.css";

const Login = () => {
    const [us, setUs] = useState("");
    const [pas, setPas] = useState("");

    return (
        <div>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <span className={styles.close}>&times;</span>
                    <input
                        className={styles.minInput}
                        name="account"
                        placeholder="Username"
                        type="text"
                        onChange={(e) => setUs(e.target.value)}
                        value={us}
                    />
                    <br />
                    <input
                        className={styles.minInput}
                        name="password"
                        placeholder="Password"
                        type="text"
                        onChange={(e) => setPas(e.target.value)}
                        value={pas}
                    />
                    <br />
                    <button
                        className={(styles.SubmitLoginButton, styles.btnSubmit)}
                        onClick={() => test()}
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
