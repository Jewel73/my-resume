import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeRounded from '@material-ui/icons/HomeRounded'
import {  Nav, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/CustomButton';
import { Telegram } from '@material-ui/icons';
import './Header.css'


export const Header = (props) => {
        const pathName= props?.location?.pathname;
        return (
                <Navbar className='navbar'  expand="lg">

                        <Nav.Link as={NavLink} to="/" className="home_div_padding">
                                <Navbar.Brand className='navbar_home'>
                                        <HomeRounded />
                                </Navbar.Brand>
                        </Nav.Link>

                        <Navbar.Toggle />
                        <Navbar.Collapse>
                                <Nav className='header_left'>
                                        {/* Resume */}
                                        <Nav.Link as={NavLink} to="/" 
                                        className={pathName==="/" ? "header_link_active": "header_link"}>
                                                Resume
                                        </Nav.Link>

                                        {/* Portfolio */}
                                        <Nav.Link as={NavLink} to="/portfolio" 
                                        className={pathName==="/portfolio"? "header_link_active": "header_link"}>
                                                Portfolio
                                        </Nav.Link>
                                </Nav>

                                <div className="header_right">
                                        <div className="social_link">
                                                {Object.keys(resumeData.socials).map(key=>(
                                                        <a href={resumeData.socials[key].link} target="_blank">
                                                                {resumeData.socials[key].icon}
                                                        </a>
                                                ))}
                                        </div>
                                        
                                        
                                </div>
                                <div className="button">
                                                <CustomButton text="Hire Me" icon={<Telegram/>} />
                                        </div>
                                
                        </Navbar.Collapse>
                        </Navbar>
                        
        )
}

export default withRouter(Header) ;
