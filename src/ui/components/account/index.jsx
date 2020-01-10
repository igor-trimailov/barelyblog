import React from 'react'
import LoginForm from './LoginForm'

// check at this point if user is logged in?
// sort of you are already logged in as "Bla", <a>log in as different user?</a>
function Login() {
  return (
    <article>
      <LoginForm />
    </article>
  )
}

export default Login
