//rfce 
import "./Navbar.css";
import React , {useState , useEffect} from 'react'

function Navbar() {

    const [show , handleShow] = useState("");


    //ถ้ามีการ scroll ลง เกิน 100px จะให้แถบ navbar เป็นสีดำ  
    useEffect(() => {
        window.addEventListener("scroll" , ()=> {
            if(window.scrollY > 100) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${show && "nav__black" }`}>

            <img 
            className = "nav__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""    
            />
            
            <img 
            className = "nav__avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=""
            
            />
        </div>
    )
}

export default Navbar
