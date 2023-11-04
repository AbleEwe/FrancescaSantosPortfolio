import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import dataWedings from '../../Const/ConstSubPages/WedingsData'
import { bodasData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Wedings = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={bodasData}/>
        <PhotosLayout pictures={dataWedings}/>
      </div>
    </PageTransition>
  )
}

export default Wedings
