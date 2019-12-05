import React from 'react'
import userimg from '../../assets/images/usericon.png'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = props => {

    const headerstyle={
        width:"100%",
        background:"black",
        position:"fixed",
        top:0,
        left:0,
        height:"60px"
    };
    const navstyle = {
        display:"flex",
        float:"right",
        height:"100%",
        padding:"0 1rem"
    };

    return (
        <header style={headerstyle}>
            <nav style={navstyle}>
                <div >
                    <ul style={{ display:"flex", listStyle:"none",  margin:0, padding:0 }}>
                        <li className="px-5 py-3" style={{ padding:"0 3.5rem" }}>
                            <a href="/" style={{textDecoration:"none"}}>
                                <i class="fa fa-bell"></i>
                            </a>
                        </li>
                        <li className="pt-1" style={{ padding:"0 1.5rem"}}>
                            <a href="/" style={{textDecoration:"none"}}>
                                <img src={userimg}/></a>
                        </li>
                        <li className="pt-2 pr-5">
                            <Dropdown>
                                <Dropdown.Toggle className="dropdown-toggle" style={{backgroundColor:"black", borderColor:"black", border:"none"}}>
                                    UserName
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="">Designation</Dropdown.Item>
                                    <Dropdown.Item href="/">LogOut</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar