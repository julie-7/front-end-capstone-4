import { useEffect, useState } from "react";

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

        const response = await fetch(newUrl, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }

        )
        if (response.ok) {
            const result = await response.json()
            const token = result.token

            window.localStorage.setItem("task-Credential", token)
            window.location.href = "/dashboard"

        } else {
            console.log("Invalid credential")
        }
    }
    return (
        <>
            <div className='parent'>
                <div className="card bg-light mb-3" style={{ maxWidth: "400x" }}>
                    <div className="card-headers">Log in</div>
                    <div className="card-body">

                        <form onSubmit={submitHandler}>
                            <div>
                                <label className="form-label mt-4">Email</label>
                                <input type="email" name="email" className="form-control" onChange={onChangeHandler} />
                            </div>
                            <div>
                                <label className="form-label mt-4">password</label>
                                <input type="password" name="password" className="form-control" onChange={onChangeHandler} />
                            </div>
                            <div className='row mt-3'>
                                <div className='col'>
                                    <button onClick={register} type='button' className="btn btn-primary w-100">sign in</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </>
    )
}
