import classes from "./loginForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { LoginSchema } from "../../validation.js"
import Society from "../society/society.jsx"

const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Submitted data:', values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (

                <Form className={classes.loginForm}>
                    <div className={classes.inputGroup}>
                        <Field type="text" name="name" placeholder="Введите имя" className={classes.input} />
                        <ErrorMessage name="name" component="div" className={classes.error} />
                    </div>
                    <div className={classes.inputGroup}>
                        <Field type="email" name="email" placeholder="Введите свой email" className={classes.input} />
                        <ErrorMessage name="email" component="div" className={classes.error} />
                    </div>
                    <div className={classes.inputGroup}>
                        <Field type="password" name="password" placeholder="Введите свой пароль" className={classes.input} />
                        <ErrorMessage name="password" component="div" className={classes.error} />
                    </div>
                    <Society />
                    <button type="submit" disabled={isSubmitting} className={classes.submitButton}>Войти</button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;