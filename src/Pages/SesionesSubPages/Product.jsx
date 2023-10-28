import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'
import ceremonies from '../../Const/PicturesLayoutConst'
import { ceremoniesData } from '../../Const/SesionsConst'

const Product = () => {
  return (
    <div>
      <SesionsLayout photos={ceremoniesData}/>
      <PhotosLayout pictures={ceremonies}/>
    </div>
  )
}

export default Product
