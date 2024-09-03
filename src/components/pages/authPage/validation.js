import * as Yup from "yup"

export const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, "Слишком короткое имя")
        .max(15, "Слишком длинное имя")
        .required(""),
    email: Yup.string().email("Неверный email").required(""),
    password: Yup.string()
        .min(8, "Слишком короткий пароль")
        .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
        .matches(/\d/, "Пароль должен содержать хотя бы одну цифру")
        .required(""),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
});

export const LoginSchema = Yup.object().shape({
    name: Yup.string()
        .required(""),
    email: Yup.string().email("Неверный email").required(""),
    password: Yup.string()
        .min(8, "Пароль не может быть таким коротким")
        .required("")
})