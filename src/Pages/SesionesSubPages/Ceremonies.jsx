import React from 'react' //eslint-disable-line
import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'
import ceremonies from '../../Const/PicturesLayoutConst'
import pageData from '../../Const/SesionsConst'


const Ceremonies = () => {
  return (
    <div>
      <SesionsLayout photos={pageData}/>
      <PhotosLayout pictures={ceremonies}/>
    </div>
  )
}

export default Ceremonies
