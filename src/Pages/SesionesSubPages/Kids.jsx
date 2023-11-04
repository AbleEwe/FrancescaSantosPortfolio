import PageTransition from '../../Components/PageTransition'
import { NavLink } from 'react-router-dom'
import SesionsLayout from '../../Components/SesionsBackground';
import { infantilData } from '../../Const/SesionsConst';

const Kids = () => {
  const imgContainerStyles = {
    width: '600px',
    height: '400px',
    padding: '20px',
    position: 'relative',
    breakInside: 'avoid'
  };

  const imgStyles = {
      width: '100%',
      height: '100%', 
      display: 'block',
      objectFit: 'cover',
      borderRadius: '5px',
      transition: 'all 0.3s ease',
  }

  const imgSpanStlyes = {
    position: 'absolute',
    bottom: '15%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(177, 149, 142, 0.7)',
    color: '#fff',
    padding: '10px',
    width: '60%',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: '900',
  }

  return (
    <PageTransition>
      <SesionsLayout photos={infantilData}/>
      <div style={{
        margin: '5rem',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={imgContainerStyles}>
          <NavLink className='navlink-hover' to="/infantil-interior">
            <img style={imgStyles} src="./Images/FotosSubSesiones/infantil-mini/miniint.jpg" alt="" loading='lazy'/>
            <span style={imgSpanStlyes}>Infantil interior</span>
          </NavLink>  
        </div>   
        <div style={imgContainerStyles}>
          <NavLink className='navlink-hover' to="/infantil-exterior">
            <img style={imgStyles} src="./Images/FotosSubSesiones/infantil-mini/miniexterior.jpg" alt="" loading='lazy'/>
            <span style={imgSpanStlyes}>Infantil exterior</span>
          </NavLink>  
        </div>
        <div style={imgContainerStyles}>
          <NavLink className='navlink-hover' to="/fiesta-infantil">
            <img style={imgStyles} src="./Images/FotosSubSesiones/infantil-mini/1.jpg" alt="" loading='lazy'/>
            <span style={imgSpanStlyes}>Fiesta infantil</span>
          </NavLink>  
        </div>      
      </div>
    </PageTransition>
  )
}

export default Kids
