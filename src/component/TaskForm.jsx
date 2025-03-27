import React, { useState } from 'react'
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

      }
    })


  }


  return (
    <div>TaskForm</div>
  )
}
