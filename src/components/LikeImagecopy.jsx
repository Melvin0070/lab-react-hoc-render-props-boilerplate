import React, { useState } from 'react'

export default function LikeImagecopy(props) {
  const {count, handleCount} = props;


  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  )
}
