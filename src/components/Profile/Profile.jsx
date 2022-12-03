import React from 'react'
import user from '../../imgs/user.jpg'

export default function Profile({userData}) {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center text-center vh-100'>
        <div className='p-4'>
            <img src={user} alt="" className='w-50 mx-auto rounded-circle'/>
        <h2><span style={{'color':'#ef074b'}}>Name:</span> {userData?.first_name} {userData?.last_name}</h2>
        <h2><span style={{'color':'#ef074b'}}>Age:</span> {userData?.age}</h2>
        <h2><span style={{'color':'#ef074b'}}>Email:</span> {userData?.email}</h2>
        </div>
    </div>
    </>
  )
}
