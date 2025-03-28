import React, { useState } from 'react'

export const LogIn = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const onChangeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        const tmpObject = formData;
        tmpObject[property] = value;
        setFormData(tmpObject);
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const endPoint = '/user/login'
        const baseUrl = import.meta.env.VITE_BASE_URL
        const newUrl = `${baseUrl}${endPoint}`
        const result = await fetch(newUrl, {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'Authorization': token
            },
            body: JSON.stringify(capstone4)
        }
        )

        if (response.ok) {
            token = localStorage.getItem('task-credential')
        } else {
            console.log("wrong credintial")
        }
    };

    return (
        <form onSubmit={handlesubmit}>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" onChange={onChangeHandler} />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={onChangeHandler} />
            </div>
            <button className='btn btn-primary' type="submit">login</button>
        </form>
    );
}
