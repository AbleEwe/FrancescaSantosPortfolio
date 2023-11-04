import SesionsLayout from '../../Components/SesionsBackground'
import PhotosLayout from '../../Components/PhotosLayout'

import dataProduct from '../../Const/ConstSubPages/ProductData'
import { productoData } from '../../Const/SesionsConst'
import PageTransition from '../../Components/PageTransition'

const Product = () => {
  return (
    <PageTransition>
      <div>
        <SesionsLayout photos={productoData}/>
        <PhotosLayout pictures={dataProduct}/>
      </div>
    </PageTransition>
  )
}

export default Product
