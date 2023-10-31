import React from 'react' //eslint-disable-line
import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'
import ceremonies from '../../Const/PicturesLayoutConst'
import { ceremoniesData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Birthday = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={ceremoniesData}/>
        <PhotosLayout pictures={ceremonies}/>
      </div>
    </PageTransition>
  )
}

export default Birthday
