import React from 'react'
import LoginForm from './LoginForm';

export default function LoginPage() {
  const subClick = (name, password) => {
    
  }
  return (
    <div className="row mt-5">
    <div className="col-sm-3"></div>
    <div className="col-sm-6">
    <LoginForm subClick={subClick}/>
    </div>
    <div className="col-sm-3"></div>
    </div>
  )
}
