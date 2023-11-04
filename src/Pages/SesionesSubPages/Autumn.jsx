import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import autumnData from '../../Const/ConstSubPages/AutumnData'
import { otonoData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Autumn = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={otonoData}/>
        <PhotosLayout pictures={autumnData}/>c
      </div>
    </PageTransition>
  )
}

export default Autumn
