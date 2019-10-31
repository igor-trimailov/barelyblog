/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import icons from '../emotion/icons'

// will need to track logged in status here somehow and show appropriate logged in status
// logo on the left, menu on the right

function Logo() {
  const logoStyle = css`
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 20px 0 20px 30px;
    ::before {
      font-weight: 700;
      margin-right: 3px;
      font-family: 'icomoon';
      content: "${icons.glass}"
    }
  `
  return <div css={logoStyle}>BarelyBlog</div>
}

function Button(props) {
  const buttonStyle = css`
    border: 2px solid white;
    font-size: 14px;
    background-color: #e88e27;
    padding: 10px 25px;
    margin: 20px 0;
    color: white;
    transition: all 0.2s ease-in-out;
    text-align: center;
    border-radius: 10px;

    :hover {
      background: #c4771f;
    }
  `

  return (
    <button
      css={buttonStyle}
      onClick={e => {
        e.preventDefault()
        alert("can't do that yet")
      }}
    >
      {props.text}
    </button>
  )
}

function Menu() {
  const menuStyle = css`
    font-family: 'Avenir', Helvetica, sans-serif;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    align-items: center;
    color: white;
    > li {
      position: relative;
      padding: 10px 10px 0 5px;
      :hover {
        ::after {
          display: block;
          content: '';
          width: 100%;
          height: 2px;
          background: white;
          position: absolute;
          bottom: -4px;
          left: 0;
        }
      }
    }
  `
  return (
    <React.Fragment>
      <ul css={menuStyle}>
        <li>Features</li>
        <li>Blog</li>
        <li>Login</li>
        <li>
          <Button text="Sign Up" />
        </li>
      </ul>
    </React.Fragment>
  )
}

function TopNavigation() {
  const navigationStyle = css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: #6852a8;
  `
  return (
    <div css={navigationStyle}>
      <Logo />
      <Menu />
    </div>
  )
}

export default TopNavigation
