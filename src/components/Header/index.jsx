

import { NavLink, useNavigate } from 'react-router-dom';
import './style.css'

function Header() {
    const navigate  = useNavigate()
    return ( 
        <header className='container' >
            <img onClick={()=>navigate('/')}  src="https://cdn.pixabay.com/photo/2014/08/24/07/26/marketing-426012_640.png" alt="" />
            <NavLink to={'/admin'} ><button>Sign In</button></NavLink>
        </header>
     );
}

export default Header;