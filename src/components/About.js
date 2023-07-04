import React from 'react';
export default function About() {

    const styles = {
        about: {
            backgroundColor: 'black',
        },
        containerVideo: {
            position: 'relative',
            width: '100%',
            height: '32vh',
            overflow: 'hidden',
            backgroundColor: 'black',
        },
        video: {
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            objectFit: 'cover',
            zIndex: '1',
        },
        overlayText: {
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            color: 'red',
            height: 'auto',
            fontSize: '3rem',
            zIndex: '2',
            textAlign: 'center',
        },
        aboutText: {
            color: 'white',
            textAlign: 'center',
            fontFamily: 'cinzel, Sans-Serif',
            width: '55%',
            margin: 'auto',
            height: '70vh',
            backgroundColor: 'black',
        },
    }

    return (    
        <div style={styles.about}>
            <div style={styles.containerVideo}>
                <video style={styles.video} src="https://wykednails.nyc3.digitaloceanspaces.com/IMG_3028.MP4" muted autoPlay loop></video>
                <h1 style={styles.overlayText}>ABOUT THE <br /> BRAND</h1>
            </div>
            <div style={styles.aboutText}>
                <p>Wyked Desires Nail Brand is a press-on nail store that provides customers with personally hand-crafted, high-quality press-on nails. We believe that our press-on nails should not only be stylish and fashionable, but also long-lasting and comfortable. Our goal is to provide unique and beautiful nail designs that can be easily applied at home saving you valuable time and money! We use only the highest quality materials for our press on nails that come in a variety of styles and colors. </p>
                <p>From classic to One-of-a-Kinds, we have something for everyone. With our selection of unique, edgy and stylish designs added to your accessories, you’ll be sure to look and feel you’re best. </p>
                <p>We are committed to providing the highest level of customer service and satisfaction with every order. We want you to absolutely love your nails! Shop Wyked Desires Nail Brand today and get the perfect press-on nails that will help you express your individual style and you can be sure you are getting something that is truly special…Just like you!</p>
            </div>

        </div>
    )
}