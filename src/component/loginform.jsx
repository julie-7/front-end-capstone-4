import react, { useState } from 'react';

export const LoginForm = () => {
    const [formData, setFormData] = useState({email: '',password:''});

    const onChangeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        const tmpObject = formData;
        tmpObject[property] = value;
        setFormData(tmpObject);
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const newUrl = `https://to-do-list-app-capstone4.onrender.com/api/users/login`
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

        } else {
        }
    };

    return (
        <form onsubmit={handlesubmit}>
            
                <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-control" onchange={handlechange}/>
            </div>
            
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" onchange={handlechange}/>
            </div>
            <button type="submit">login</button>
        </form>
    );
};

