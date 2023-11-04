import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import birthdayData from '../../Const/ConstSubPages/BirthdayData'
import { cumpleData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Birthday = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={cumpleData}/>
        <PhotosLayout pictures={birthdayData}/>
      </div>
    </PageTransition>
  )
}

export default Birthday
