import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import dataSetUps from '../../Const/ConstSubPages/SetUpsData'
import { montajesData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Setups = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={montajesData}/>
        <PhotosLayout pictures={dataSetUps}/>
      </div>
    </PageTransition>
  )
}

export default Setups
