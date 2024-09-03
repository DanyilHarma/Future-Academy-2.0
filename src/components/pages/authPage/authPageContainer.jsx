import AuthPage from "./authPage/authPage";
import classes from "./authPageContainer.module.css"
import AuthOwl from "./owlAuth/authOwl";

const AuthPageContainer = () => {
    return (
        <div className={classes.formContainer}>
            <AuthOwl />
            <AuthPage />
        </div>
    )
}

export default AuthPageContainer;