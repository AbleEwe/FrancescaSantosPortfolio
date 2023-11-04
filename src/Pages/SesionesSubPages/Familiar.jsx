import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import dataFamiliar from '../../Const/ConstSubPages/FamiliarData'
import { familiarData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Familiar = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={familiarData}/>
        <PhotosLayout pictures={dataFamiliar}/>
      </div>
    </PageTransition>
  )
}

export default Familiar
