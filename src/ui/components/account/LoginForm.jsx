/** @jsx jsx */
import { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { jsx, css } from '@emotion/core'

import { fetchAuth, logout } from '../../../actions'
// import { fetchUsers } from './actions'
// import TopNavigation from './ui/components/TopNavigation'

// import {
//   useHistory
// } from "react-router-dom"

function LoginForm() {
  const [validationError, setValidationError] = useState('')
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  const apiError = useSelector(state => state.errors)

  const handleSubmit = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()

      if (!event.target.checkValidity()) {
        // set local validation error
        setValidationError('Invalid email and/or password')
      } else {
        // collect data, make a auth call
        const data = new FormData(event.target)
        dispatch(fetchAuth(data))
      }
    },
    [dispatch]
  )

  const handleSingout = useCallback(event => {
    event.preventDefault()

    dispatch(logout())
  })

  if (user.name) {
    return (
      <div>
        Already signed in as {user.name}.
        <button onClick={handleSingout}>Sign out</button>
      </div>
    )
  }

  const formStyle = css`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: white;
    border-radius: 4px;
    box-shadow: 1px 1px 1px #ccc;

    align-items: flex-end;
  `

  const inputLabelStyle = css`
    font-size: 1rem;
    font-weight: bold;
    padding: 4px;
  `

  const inputStyle = css`
    border: 1px solid #ccc;
    line-height: 2rem;
    border-radius: 5px;
    color: #444;
    font-size: 1.2rem;
    padding: 5px;
    margin-bottom: 10px;
  `

  const reminderStyle = css`
    font-weight: bold;
    align-self: flex-end;
    ${'' /* color: #e77200; */}
    font-size: 1rem;
    padding: 5px;
  `

  const errorStyle = css`
    color: #dc143c;
    align-self: center;
    font-size: 1.4rem;
  `

  const buttonStyle = css`
    border: 2px solid white;
    font-size: 1.3rem;
    ${'' /* background-color: #e88e27; */}
    background-color: #595959;
    padding: 10px 25px;
    margin: 20px 0;
    color: white;
    transition: all 0.2s ease-in-out;
    text-align: center;
    border-radius: 5px;

    :hover {
      background: #c4771f;
    }
  `

  // const history = useHistory()
  // after login push back to the main page

  console.log('RENDER')
  console.log('API ERROR', apiError)

  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <label css={inputLabelStyle} htmlFor="login_username">
        Email address
      </label>
      <input
        css={inputStyle}
        id="login_email"
        name="email"
        type="text"
        tabIndex="1"
        required
      />

      <label css={inputLabelStyle} htmlFor="login_password">
        Password
      </label>
      <input
        css={inputStyle}
        id="login_password"
        name="password"
        type="password"
        tabIndex="2"
        required
      />

      <div css={reminderStyle}>Forgot password?</div>

      {validationError && <span css={errorStyle}>{validationError}</span>}
      {apiError.error && <span css={errorStyle}>{apiError.error}</span>}

      <input css={buttonStyle} type="submit" value="Sign in" tabIndex="3" />
    </form>
  )
}

export default LoginForm
