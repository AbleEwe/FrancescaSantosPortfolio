import SesionsLayout from '../../Components/SesionsBackground';
import PhotosLayout from '../../Components/PhotosLayout'
import {infantilInteriorData } from '../../Const/SesionsConst';
import kidsInteriorData from '../../Const/ConstSubPages/KidsInteriorData';

const KidsInterior = () => {
  return (
    <div>
        <SesionsLayout photos={infantilInteriorData}/>        
        <PhotosLayout pictures={kidsInteriorData}/>
    </div>
  )
}

export default KidsInterior
