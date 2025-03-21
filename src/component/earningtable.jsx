import { useEffect, useState } from "react";
export const earningtable = () => {
    const [earnings, setEarning] = useState([])

    const baseurl = import.meta.env.VITE_BASE_URL
    let token = ""

    const getEarning = async () => {
        const endpoint = "earnings"
        const newUrl = `${baseurl}${endpoint}`

        const response = await fetch(newUrl, {
            method: "GET",
            headers: {
                'Authorization': token
            }
        }

        )
        if (respond.ok) {
            const result = await response.json()
            setEarning(result)
        } else {
            console.log("something went wrong")
        }
    }
    useEffect(() => {
        token = window.localStorage.getItem('to-do-list')
        getEarning()
    }, [])

    return (
        <>
            <table className='table mt-3'>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>description</th>
                        <th>status</th>
                        <th>due_date</th>
                        <th>email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        earnings.map((item) => (
                       <tr key={item.earningsid}>
                         <td>{item.title}</td>
                         <td>{item.description}</td>
                         <td>{item.status}</td>
                         <td>{item.due_date}</td>
                         <td>{item.email}</td>
                       </tr>
                    )
             )
            
                    }
                </tbody>
            </table>
        </>
    )
};