import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventCreation from '../pages/eventCreation/EventCreation'
import Landing from '../pages/landing/Landing'
import Home from '../pages/home/Home'
import Event from '../pages/event/Event'
import UserProfile from '../pages/userProfile/UserProfile'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<Event />} />
        <Route path='/event-create' element={<EventCreation />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter