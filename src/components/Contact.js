import React from 'react';
export default function Contact() { 
    const styles = {
        body: {
            backgroundColor: 'black',
        },
        contact: {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'cinzel, Sans-Serif',
            position: 'relative',
        },
        image: {
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
        contactInfo: {
            textAlign: 'center',
            color: 'white',
        },
        line: {
            border: '.5px solid white',
            backgroundColor: 'white',
            display: 'block',
            margin: 'auto',
            
        },
        contactForm: {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'cinzel, Sans-Serif',
            width: '55%',
            margin: 'auto',
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
        },
        formName: {
            width: '50%',
            padding: '20px',
            display: 'flex',
        },
        formPhoneEmail: {
            width: '50%',
            padding: '20px',
            display: 'flex',
        },
        formMessage: {
            width: '100%',
            padding: '20px',
        },
        messageArea: {
            width: '100%',
            height: '200px',
        },

    }
    return (
        <div style={styles.body}>
            <div className="contact-img" style={styles.contact}>
                <img alt=" " style={styles.image} src="https://static.wixstatic.com/media/634c82_0426726c3a5b43b9858f41132af9293b~mv2.jpg/v1/fill/w_1441,h_392,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/634c82_0426726c3a5b43b9858f41132af9293b~mv2.jpg" />
                <h1 style={styles.overlayText}>CONTACT US</h1>
            </div>
            <div className="contact-info" style={styles.contactInfo}>
                <h3>CUSTOMER SERVICE</h3>
                <p>Feel free to contact us by email or live chat <br /> wykeddesiresnailbrand@gmail.com</p>
            </div>
            <canvas id="myCanvas" width="200" height="1" style={styles.line}></canvas>
            <div className="contact-form" style={styles.contactForm}>
                <form>
                    <div className="form-title">
                        <p>You can also send us a message using the contact form below:</p>
                    </div>
                    <div className="form-name" style={styles.formName}>
                        <div>
                        <label for="fname">First Name</label>
                        <br />
                        <input type="text" id="fname" name="firstname" />
                        </div>
                        <div>
                        <label for="lname">Last Name</label>
                        <br />
                        <input type="text" id="lname" name="lastname" />
                        </div>
                    </div>
                    <div className="form-email-phone" style={styles.formPhoneEmail}>
                        <div>
                        <label for="email">Email</label>
                        <br />  
                        <input type="text" id="email" name="email" />
                        <br />
                        </div>
                        <div>
                        <label for="phone">Phone</label>
                        <br />
                        <input type="text" id="phone" name="phone" />
                        </div>
                    </div>
                    <div className="form-message" style={styles.formMessage}>
                        <label for="subject">Message</label>
                        <br />
                        <textarea style={styles.messageArea} id="subject" name="subject" placeholder="Write something.." ></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>    

                
        </div>
    )
}