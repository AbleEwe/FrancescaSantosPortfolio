import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import dataDocumental from '../../Const/ConstSubPages/DocumentalData'
import { documentalData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Documental = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={documentalData}/>
        <PhotosLayout pictures={dataDocumental}/>
      </div>
    </PageTransition>
  )
}

export default Documental
