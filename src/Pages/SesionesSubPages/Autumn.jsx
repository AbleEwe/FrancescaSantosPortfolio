import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'
import ceremonies from '../../Const/PicturesLayoutConst'
import { otonoData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Autumn = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={otonoData}/>
        <PhotosLayout pictures={ceremonies}/>
      </div>
    </PageTransition>
  )
}

export default Autumn
