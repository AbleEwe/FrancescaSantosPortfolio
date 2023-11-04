import SesionsLayout from '../../Components/SesionsBackground';
import PhotosLayout from '../../Components/PhotosLayout'
import { infantilExteriorData } from '../../Const/SesionsConst';
import kidsExteriorData from '../../Const/ConstSubPages/KidsExteriorData';

const KidsExterior = () => {
  return (
    <div>
        <SesionsLayout photos={infantilExteriorData}/>
        <PhotosLayout pictures={kidsExteriorData}/>
    </div>
  )
}

export default KidsExterior
