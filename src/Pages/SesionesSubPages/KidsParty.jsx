import SesionsLayout from '../../Components/SesionsBackground';
import PhotosLayout from '../../Components/PhotosLayout'
import { infantilPartyData } from '../../Const/SesionsConst';
import kidsPartyData from '../../Const/ConstSubPages/KidsPartyData';

const KidsParty = () => {
  return (
    <div>
        <SesionsLayout photos={infantilPartyData}/>
        <PhotosLayout pictures={kidsPartyData}/>
    </div>
  )
}

export default KidsParty
