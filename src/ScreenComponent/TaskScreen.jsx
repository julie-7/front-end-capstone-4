import React from 'react'
import { TaskForm } from '../component/TaskForm'
import { TaskTable } from '../component/TaskTable'

export const TaskScreen = () => {
  return (
    <>
        <TaskForm/>
        <TaskTable />
    </>
  )
}
