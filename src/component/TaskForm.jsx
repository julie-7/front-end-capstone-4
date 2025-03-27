import React, { useEffect, useState } from 'react'
import { Await } from 'react-router-dom'

export const TaskForm = () => {

  const [formData, setFormData] = useState("")({
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

  return (
    <div>TaskForm</div>
  )
}
