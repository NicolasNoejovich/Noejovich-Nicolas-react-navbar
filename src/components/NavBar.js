
import Widget from "./CartWidget/CartWidget";




const NavBar = () => {
    return(
        <ul className="navbar"> 
        <Widget/>
            <li><a className="deco" href="#">HOME</a></li>
            <li><a className="deco" href="#">SHOP</a></li>
            <li><a className="deco" href="#">ABOUT US</a></li>
            <li><a className="deco" href="#">CONTACT</a></li>

   </ul>
        
    )
}

export default NavBar;

