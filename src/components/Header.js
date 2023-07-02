import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import '../main.css';
import { PersonCircle } from "react-bootstrap-icons";
import { BagFill } from 'react-bootstrap-icons';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import ShippingReturn from './ShippingReturns';
import StorePolicy from './StorePolicy';
import Frequent from './Frequent';


export default function Header() {
    

    const [caption, setCaption] = useState(0);
    const [showCaption, setShowCaption] = useState(true);

    const styles = {
        header: {
            backgroundColor: '#9c0404',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'cinzel, Sans-Serif',
        },
        banner: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
        logo: {
            width: '100px',
            height: '100px',
            
        },
        logoContainer: {    
            width: '33.33%',
        },
        revolvingCaption: {
            width: '33.33%',
        },
       
        loginCart: {
            display: 'flex',
            alignItems: 'center',
            width: '33.33%',
        },
        login: {
            display: 'inline-flex',
            margin : '0 25px',
        },
        shoppingFunctions: {
            display: 'inline-flex',
            alignItems: 'center',
            marginLeft: 'auto',
        },
        accountIcon: {
            height: '25px',
            width: '25px',
            marginRight: '5px',
            marginBottom: 'auto',
            marginTop: 'auto',
        },
        nav: {
            backgroundColor: 'black',
            
        },
        navContainer: {
            color: 'white',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '50px',
            width: '40%',
            margin: 'auto',
            hover: "true",
            
        },

        dropdownContent: {
            display: "none",
            position: 'absolute',
            backgroundColor: '#f9f9f9',
            minWidth: '160px',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            zIndex: '1'
        },
        links: {
        float: 'none',
        color: 'black',
        padding: '12px 16px',
        textDecoration: 'none',
        display: 'block',
        textAlign: 'left',
        },
        dropdown: {
            float: 'left',
            overflow: 'hidden',
          },
          
        dropdown: {
            cursor: 'pointer',
            fontSize: '16px',
            border: 'none',
            outline: 'none',
            color: 'white',
            padding: '14px 16px',
            backgroundColor: 'inherit',
            fontFamily: 'inherit',
            margin: '0',
          },
          
        dropbtn: {
            cursor: 'pointer',
            fontSize: '16px',
            border: 'none',
            outline: 'none',
            color: 'white',
            padding: '14px 16px',
            backgroundColor: 'inherit',
            fontFamily: 'inherit',
            margin: '0',
        },
        show: {
            display: 'block'
        },
        

    };

    const revolvingCaptions = [
        'FREE SHIPPING ON US ORDERS',
        'UNIQUE NAIL DESIGNS',
        'NEW DESIGNS MONTHLY',
    ];

    const changeCaption = () => {
        if (caption < revolvingCaptions.length - 1) {
            setCaption(caption + 1);
        } else {
            setCaption(0);
        }
    };

    useEffect(() => {
        
        const interval = setInterval(() => {
            changeCaption();
        }, 3000);
        return () => clearInterval(interval);
    }, [caption]);





    return (
        <div>
            <Router>
                <head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
                </head>
                <header style={styles.header}>
                    <div className='banner' style={styles.banner}>
                        <div className='logo' style={styles.logoContainer}>
                            <img src={logo} alt='logo' style={styles.logo}/>
                        </div>
                        <div className='revolving-caption' style={styles.revolvingCaption}>
                            <p className={`caption ${showCaption ? '' : 'fade-out'}`}>{revolvingCaptions[caption]}</p>
                        </div>
                        <div className='login-cart' style={styles.loginCart}>
                            <div className='shopping-functions' style={styles.shoppingFunctions}>
                            <div className='login' style={styles.login}>
                                <PersonCircle style={styles.accountIcon}/>
                                <p>Log in</p>    
                                
                            </div>
                            <div className='cart'>
                                <BagFill style={styles.accountIcon}/>
                            </div>
                        </div>
                        </div>
                    </div>    
                </header>
                <div className='nav-bar' style={styles.nav}>
                    <div className='nav-container' style={styles.navContainer}>
                        <Link to='/home' className='nav-link'>Home</Link>
                        <div style={styles.dropdown} className="dropdown">
                            <button style={styles.dropbtn} class="dropbtn" onclick="myFunction()">Shop
    <i class="fa fa-caret-down"></i>
  </button>
  <div style={styles.dropdownContent} class="dropdownContent" id="myDropdown">
    <a className='links' style={styles.links} href="#">Link 1</a>
    <a  className='links' style={styles.links} href="#">Link 2</a>
    <a className='links' style={styles.links} href="#">Link 3</a>
  </div>
  </div> 
                        <Link to='/shop' className='nav-link'>Shop</Link>
                        <Link to='/about' className='nav-link'>About</Link>
                        <Link to='/contact' className='nav-link'>Contact</Link>
                        <Link to='/' className='nav-link'>More</Link>
                        <Link to='/shipping&returns' className='nav-link'>Shipping & Returns</Link>
                    
                    </div>
                </div>    
                <Routes>
                    <Route path='/' element={<Navigate to='/home'/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/shipping&returns' element={<ShippingReturn/>} />
                    <Route path='/storepolicy' element={<StorePolicy/>}/>
                    <Route path='/frequentlyAskedQuestions' element={<Frequent/>}/>
                </Routes>
            </Router>
        </div>
    );
    }


