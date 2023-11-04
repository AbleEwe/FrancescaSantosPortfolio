import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import dataPortrait from '../../Const/ConstSubPages/PortraitData'
import { retratosData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Portrait = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={retratosData}/>
        <PhotosLayout pictures={dataPortrait}/>
      </div>
    </PageTransition>
  )
}

export default Portrait
