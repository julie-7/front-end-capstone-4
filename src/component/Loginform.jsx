import { useState } from "react";

export const LoginForm = () => {

    const [formData, setFormData] = useState({
        password: "",
        email: ""
    }
    )

    const baseUrl = import.meta.env.VITE_BASE_URL

    const onChangeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value
        tmpObject[property] = value
        setFormData(tmpObject)
    }
    const register = () => {
        Window.location.href = "/register"
    }
    const submitHandler = async () => {

        event.preventDefault()

        const endPoint = 'auth/logIn'
        const newUrl = `${baseUrl}${endPoint}`


    }
}