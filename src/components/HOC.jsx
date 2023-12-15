import React, { useState } from 'react'
import LikeImage from './LikeImage copy';

function HOC(OriginalComponents) {


    const newComponent=()=>{

    const [likeImageCounter, setLikeImageCounter] = useState(0);

    const handleLikeImageCount = ()=>{
    setLikeImageCounter(likeImageCounter+1);
    }
  return (
    <div>
      <OriginalComponents likeImageCounter={likeImageCounter} handleLikeImageCount={handleLikeImageCount}/>
    </div>
  )
}
return newComponent
}

export default HOC
