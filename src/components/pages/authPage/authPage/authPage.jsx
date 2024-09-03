import classes from "./authPage.module.css"
import RegistrationForm from "./registrationForm/registrationForm.jsx";
import LoginForm from "./loginForm/loginForm.jsx";
import { useState } from "react";

const AuthPage = () => {

    const [formLogin, setFormLogin] = useState(true)
    const [formRegistration, setFormRegistration] = useState(false)



    const handlerFormLogin = () => {
        setFormLogin(true)
        setFormRegistration(false)

    }
    const handlerFormRegistration = () => {
        setFormRegistration(true)
        setFormLogin(false)

    }

    return (
        <div className={classes.formTitle}>
            <div className={classes.titles}>
                <div><span className={classes.login} onClick={handlerFormLogin}>Вход</span></div>
                <div><span className={classes.registration} onClick={handlerFormRegistration}>Регистрация</span></div>
            </div>
            <div className={classes.indicatorContainer}>
                <hr className={classes.indicator} style={{
                    left: formLogin ? '0%' : '50%',
                    transition: 'left 0.3s ease'
                }} />
            </div>
            <hr />
            {formLogin ? <LoginForm /> : <RegistrationForm />}

        </div>
    )
}

export default AuthPage;