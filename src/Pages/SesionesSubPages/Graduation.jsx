import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'
import PageTransition from '../../Components/PageTransition'

import dataGraduation from '../../Const/ConstSubPages/GraduationData'
import { graducacionesData } from '../../Const/SesionsConst'

const Graduation = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={graducacionesData}/>
        <PhotosLayout pictures={dataGraduation}/>
      </div>
    </PageTransition>
  )
}

export default Graduation
