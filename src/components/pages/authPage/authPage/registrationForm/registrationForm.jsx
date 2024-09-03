import classes from "./registrationForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { RegistrationSchema } from "../../validation.js"
import Society from "../society/society.jsx"

const RegistrationForm = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                phoneNumber: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={RegistrationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Submitted data:', values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (

                <Form className={classes.registrationForm}>
                    <div className={classes.inputGroup}>
                        <Field type="text" name="name" placeholder="Введите имя" className={classes.input} />
                        <ErrorMessage name="name" component="div" className={classes.error} />
                    </div>
                    <div className={classes.inputGroup}>
                        <Field type="email" name="email" placeholder="Введите свой email" className={classes.input} />
                        <ErrorMessage name="email" component="div" className={classes.error} />
                    </div>
                    <div className={classes.inputGroup}>
                        <Field type="password" name="password" placeholder="Придумайте пароль" className={classes.input} />
                        <ErrorMessage name="password" component="div" className={classes.error} />
                    </div>
                    <div className={classes.inputGroup}>
                        <Field type="password" name="confirmPassword" placeholder="Подтвердите пароль" className={classes.input} />
                        <ErrorMessage name="confirmPassword" component="div" className={classes.error} />
                    </div>
                    <Society />
                    <button type="submit" disabled={isSubmitting} className={classes.submitButton}>Зарегестрироваться</button>
                </Form>
            )}
        </Formik>
    )
}

export default RegistrationForm;