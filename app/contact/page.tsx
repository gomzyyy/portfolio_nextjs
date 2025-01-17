"use client"
import React from 'react'
import { useRouter } from 'next/router'

function Contact() {
  const router = useRouter()
  const {hireAs} = router.query
  return (
    <div>Contact</div>
  )
}

export default Contact