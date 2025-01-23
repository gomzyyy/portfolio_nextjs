"use client"
import React from 'react'
import { ToastContainer } from 'react-toastify'

function Notification() {
  return (
    <ToastContainer stacked autoClose={4000} style={{cursor:"grab"}} draggable theme="dark" />
  )
}

export default Notification