
import React from 'react'
import { Triangle } from  'react-loader-spinner'

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Triangle
  height="150"
  width="150"
  color="#ef074b"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
    </div>
  )
}
