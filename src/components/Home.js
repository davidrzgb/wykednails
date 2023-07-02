import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {

    const [addToCart, setAddToCart] = useState(false);

    const styles = {
        videoContainer: {
            position: 'relative',
            width: '100%',
            height: 'auto',
            overflow: 'hidden',
            backgroundColor: 'black',
        },
        video: {
            width: '100%',
            height: 'auto',
            zIndex: '1',
            
        },
        overlayLogo: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '50%',
            height: 'auto',
            zIndex: '2',
        },
        homeContent: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'space-evenly',
            height: '37vh',
            color: 'white',
            backgroundColor: 'black',
        },
        homeContentTitle: {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '2rem',
        },
        homeContentAbout: {
            color: 'white',
            fontSize: '1.2rem',
        },
        homeContentInfo: {
            width: '60%',
            margin: '0 auto',
            fontSize: '1.2rem',
        },
        redCaption: {   
            color: 'red',
            padding: '0 7px',
        },
        showcase: {
            display: 'inline-flex',
            width: '100%',
        },
        showcaseContainer1: {
            width: '50%',
            height: '50vh',
            overflow: 'hidden',
            backgroundImage: 'url("https://static.wixstatic.com/media/634c82_a4498f3367fe4a61a73d86d5013f6132~mv2.jpg/v1/fill/w_719,h_697,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/634c82_a4498f3367fe4a61a73d86d5013f6132~mv2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
        },
        showcaseContainer2: {
            width: '50%',
            height: '50vh',
            overflow: 'hidden',
            backgroundImage: 'url("https://static.wixstatic.com/media/634c82_3208a48292e047a4b7240661f8944f45~mv2.jpg/v1/fill/w_719,h_697,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/634c82_3208a48292e047a4b7240661f8944f45~mv2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
        },
        showcaseContent1: {
            height: '20vh',
            width: '30vh',
            backgroundColor: 'rgba(0,0,0,0.2)',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            fontSize: '1.7rem',
            textAlign: 'center',

            
        },
        showcaseContent2: {
            height: '20vh',
            width: '30vh',
            backgroundColor: 'rgba(0,0,0,0.2)',
            marginRight: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            color: 'white',
            fontSize: '1.7rem',
            textAlign: 'center',
        },
        buttonShop1: {
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1.2rem',
            width: '45%',
        },
        buttonShop2: {
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1.2rem',
            width: '45%',
        },
        bestSellers: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto',
            height: 'auto',
            backgroundColor: 'black',
            color: 'white',
            padding: '20px 20px',
        },
        bsTitle: {
            fontSize: '2rem',
        },
        bestSellersContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            width: '90%',
            height: '100%',
            justifyContent: 'center',
        },
        
        product: { 
            position: 'relative',
            display: 'inline-block',
            width: '25%',
            height: '23vh',
            overflow: 'hidden',
            margin: '10px 10px',
            textAlign: 'center',
        },
        bsImage: {
            width: '100%',
            height: 'auto',
        },
        tag: {
            color: 'white',
            position: 'absolute',
            padding: '5px',
            marginLeft: '5px', 
            top: '0',
            left: '0',
            zIndex: '3',
            border: '1px solid red',
            backgroundColor: 'red',
        },
        shopAll: {
            width: '12%',
            height: '2vh',
            fontSize: '1.2rem',
            marginTop: '20px',
        },
        addToCart: {
            display: addToCart,
            width: '100%',
            height: '2vh',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            fontSize: '1.2rem',
        },

    }
    
    function showCart (event) {
        setAddToCart(true);
    }
    function hideCart (event) {
        setAddToCart(false);
    }
    /*
    const showAddToCart = () => {
        if (addToCart) {
            return (
                <button style={styles.addToCart}>Add to Cart</button>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    */
    
    return (
        <div>
            <div className="video-container" style={styles.videoContainer}>
                <video style={styles.video} src="https://video.wixstatic.com/video/634c82_385ed295999645839f3f9ecd4fadd358/720p/mp4/file.mp4" autoPlay loop muted />
                <img style={styles.overlayLogo} src="https://wykednails.nyc3.digitaloceanspaces.com/transparentLogo.png" />
            </div>
            <div className="home-content" style={styles.homeContent}>
                <div style={styles.homeContentTitle}>
                    <h3>UNIQUE AND BEAUTIFUL </h3> <h3 style={styles.redCaption}> PRESS-ON NAIL DESIGNS</h3>
                </div>
                <p style={styles.homeContentInfo}>Wyked Desires Nail Brand is a press-on nail store that provides customers with personally hand-crafted, high-quality, and custom-made press-on nails. We believe that our press-on nails should not only be stylish and fashionable, but also long-lasting and comfortable. Our goal is to provide unique and beautiful nail designs that can be easily applied at home saving you valuable time and money! </p>
                <Link to='/about' style={styles.homeContentAbout}>Learn More</Link>
            </div>
            <div style={styles.showcase}>
                <div style={styles.showcaseContainer1}>
                    <div style={styles.showcaseContent1}>
                        <p>BOOK INSPIRED <br /> NAIL SETS</p>
                        <button style={styles.buttonShop1}>Shop Now</button>
                    </div>
                </div>
                <div style={styles.showcaseContainer2}>
                    <div style={styles.showcaseContent2}>
                        <p>UNIQUE <br/> NAILS</p>
                        <button style={styles.buttonShop2}>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="best-sellers" style={styles.bestSellers}>
                <h3 style={styles.bsTitle}>BEST SELLERS</h3>
                <div className="best-sellers-container" style={styles.bestSellersContainer}>
                    
                    <div className='bs-product' style={styles.product} onMouseEnter={showCart} onMouseLeave={hideCart}>
                        <img style={styles.bsImage} src="https://static.wixstatic.com/media/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg" />
                        <p style={styles.tag}>Square-Limited Edition</p>
                        <p>Purple Swirls</p>
                        <p>$25.00</p>
                        {addToCart && (
                            <button className='add-to-cart-button'>Add to Cart</button>
                        )}
                        
                    </div>
                    <div className='bs-product' style={styles.product} onMouseEnter={showCart} onMouseLeave={hideCart}>
                        <img style={styles.bsImage} src="https://static.wixstatic.com/media/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg" />
                        <p style={styles.tag}>Square-Limited Edition</p>
                        <p>Purple Swirls</p>
                        <p>$25.00</p>
                        {addToCart && (
                            <button className='add-to-cart-button'>Add to Cart</button>
                        )}
                        
                    </div>
                    <div className='bs-product' style={styles.product} onMouseEnter={showCart} onMouseLeave={hideCart}>
                        <img style={styles.bsImage} src="https://static.wixstatic.com/media/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg" />
                        <p style={styles.tag}>Square-Limited Edition</p>
                        <p>Purple Swirls</p>
                        <p>$25.00</p>
                        {addToCart && (
                            <button className='add-to-cart-button'>Add to Cart</button>
                        )}
                        
                    </div>
                    <div className='bs-product' style={styles.product} onMouseEnter={showCart} onMouseLeave={hideCart}>
                        <img style={styles.bsImage} src="https://static.wixstatic.com/media/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg" />
                        <p style={styles.tag}>Square-Limited Edition</p>
                        <p>Purple Swirls</p>
                        <p>$25.00</p>
                        {addToCart && (
                            <button className='add-to-cart-button'>Add to Cart</button>
                        )}
                        
                    </div>
                    <div className='bs-product' style={styles.product} onMouseEnter={showCart} onMouseLeave={hideCart}>
                        <img style={styles.bsImage} src="https://static.wixstatic.com/media/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg" />
                        <p style={styles.tag}>Square-Limited Edition</p>
                        <p>Purple Swirls</p>
                        <p>$25.00</p>
                        {addToCart && (
                            <button className='add-to-cart-button'>Add to Cart</button>
                        )}
                        
                    </div>
                    <div className='bs-product' style={styles.product} onMouseEnter={showCart} onMouseLeave={hideCart}>
                        <img style={styles.bsImage} src="https://static.wixstatic.com/media/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e97c5_a8d46bc741eb46998ab2009ab02b09c4~mv2.jpeg" />
                        <p style={styles.tag}>Square-Limited Edition</p>
                        <p>Purple Swirls</p>
                        <p>$25.00</p>
                        {addToCart && (
                            <button className='add-to-cart-button'>Add to Cart</button>
                        )}
                        
                    </div>
                </div>
                <button style={styles.shopAll}>SHOP ALL</button>
            </div>
        </div>
    )
}