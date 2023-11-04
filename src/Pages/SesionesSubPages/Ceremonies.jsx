import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import ceremonies from '../../Const/ConstSubPages/CeremoniesLayoutConst'
import { ceremoniesData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Ceremonies = () => {
  return (
   <PageTransition>
      <div>
        <SesionsLayout photos={ceremoniesData}/>
        <PhotosLayout pictures={ceremonies}/>
      </div>
   </PageTransition>
  )
}

export default Ceremonies
