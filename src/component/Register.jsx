import React , {useState} from 'react'


export const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const onChangeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        const tmpObject = formData;
        tmpObject[property] = value;
        setFormData(tmpObject);
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const newUrl = `https://to-do-list-app-capstone4.onrender.com/api/users/register`
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
        <form onSubmit={handlesubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" onChange={onChangeHandler} />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" onChange={onChangeHandler} />
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" onChange={onChangeHandler} />
            </div>
            <button className='btn btn-primary' type="submit">register</button>
        </form>
    );
}
