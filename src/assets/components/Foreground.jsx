import React, { useRef, useState } from 'react'
import Caard from './Caard'


const Foreground = () => {

    const ref = useRef(null);

   const data = [
    {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis saepe eaque nulla.",
        filesize: ".9mb", close: true, tag: {isOpen: false, tagTitle: "Download Now", tagColor: "Blue"}
    },
    {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis saepe eaque nulla.",
        filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis saepe eaque nulla.",
        filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis saepe eaque nulla.",
        filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "Blue"}
    }
   ]
   
  return (
    
    <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5  '>
     {data.map((item, index) =>(
        <Caard data={item} reference={ref}/>
     ))}
     
    </div>
    
  )
}

export default Foreground