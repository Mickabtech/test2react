import React from 'react'

const UserInfo = (props) => {
  return (
    <>
    <div>First Name: {props.fullname}</div>
    <div>Last Name: {props.lastname}</div>
    <div>Email Address: {props.email}</div>
    <div>Phone Number: {props.pnum}</div>
    </>
  )
}

export default UserInfo