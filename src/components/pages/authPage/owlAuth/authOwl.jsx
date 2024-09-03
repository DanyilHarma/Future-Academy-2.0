import classes from "./authOwl.module.css"



const AuthOwl = () => {

    return (
        <div className={classes.owlContainer}>
            <img src="https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/images-form-registration/owl.png?raw=true" alt="" />
            <div className={classes.unionText}>
                Войдите в систему <br />
                или зарегистрируйтесь, <br />
                если у вас ещё нет аккаунта
            </div>
            <img src="https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/images-form-registration/Union.png?raw=true" alt="" />
        </div>
    )
}

export default AuthOwl;