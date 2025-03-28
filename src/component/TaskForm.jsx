import React, { useEffect, useState } from 'react'
import { Await } from 'react-router-dom'

export const TaskForm = () => {

  const [formData, setFormData] = useState({
    taskId: "",
    task: "",
    description: ""
  })
  const [notification, setNotification] = useState("")
  const [task, settask] = useState([])

  const baseUrl = import.meta.env.VITE_BASE_URL

  const onChangeHandler = (event) => {
    const property = event.target.name
    const value = event.target.value
    const tmpObject = formData
    tmpObject[property] = value
    setFormData(tmpObject)
  }
  const submitHandler = async (event) => {
    const token = window.localStorage.getItem("task-credential")

    event.preventDefault()

    const endpoint = 'task'
    const newUrl = `${baseUrl}${endpoint}`

    console.log(newUrl)
    console.log(formData)

    const response = await fetch(newUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      setNotification("Task Created")

      setTimeout(() => {
        window.location.href = "/task"
      }, 2000)
    } else {
      const errMessage = await response.json()
      console.log(errMessage)
      setNotification(errMessage.error)
    }

  }

  const gettask = async () => {
    const token = window.localStorage.getItem("task-credential")
    const endpoint = 'task'
    const newUrl = `${baseUrl}${endpoint}`


    const response = await fetch(newUrl, {
      method: "GET",
      headers: {
        'content-Type': 'application/json',
        'Authorization': token
      }

    })

    if (response.ok) {
      const data = await response.json()
      settask(data)
    } else {
      setNotification("Error on fetching task")
    }
  }

  useEffect(() => {
    gettask()
  }, [])

  return (
    <>
      <p className='display-2 text-center'>Task Form</p>

      <div className='card bg-light mb-3 mx-5'>
        <div className="card header">Log in</div>
        <div className='card-body'>

          <form onSubmit={submitHandler}>

            <div>
              <label className='form-label mt-4'>Task</label>
              <input type='text' name='task' onChange={onChangeHandler}>
              </input>

              <label className='form-label mt-4'>description</label>
              <input type='text' name='description' onChange={onChangeHandler}>
              </input>
            </div>

            <button className='btn btn-primary w-100 mt-3'>create</button>
          </form>
          <p className='mt-3'>{notification}</p>
        </div>
      </div>
    </>
  )


}
