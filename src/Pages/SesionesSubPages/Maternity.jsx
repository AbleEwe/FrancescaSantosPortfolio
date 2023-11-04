import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import dataMaternity from '../../Const/ConstSubPages/MaternityData'
import { maternidadData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Maternity = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={maternidadData}/>
        <PhotosLayout pictures={dataMaternity}/>
      </div>
    </PageTransition>
  )
}

export default Maternity
