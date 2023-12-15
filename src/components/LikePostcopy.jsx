import React, { useState } from 'react'

export default function LikePostcopy(props) {
  const {count, handleCount} = props

  return (
    <div>
      <button onClick={handleCount}>Like Post {count}</button>
    </div>
  )
}
