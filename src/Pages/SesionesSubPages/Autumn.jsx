import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import ceremonies from '../../Const/PicturesLayoutConst'
import { otonoData } from '../../Const/SesionsConst'

const Autumn = () => {
  return (
    <div>
      <SesionsLayout photos={otonoData}/>
      <PhotosLayout pictures={ceremonies}/>
    </div>
  )
}

export default Autumn
