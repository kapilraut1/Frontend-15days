import React from 'react'
import '../styles/preview.css'
const Preview = ({value}) => {
  return (
   <div className="preview">
         <h2>Preview</h2>
        <p>{value}</p>
   </div>
  )
}

export default Preview