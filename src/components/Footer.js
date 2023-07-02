import React from 'react';
import logo from '../images/logo.png';


export default function Footer() {

    const styles = {
        footer: {
            backgroundColor: 'rgb(156, 4, 4)',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'cinzel, Sans-Serif',
        },
        subscriptionContainer: {
            backgroundColor: ''
        },
        font_4: {
            width: '60%',
            height: '40px;'
        },
        subForm: {
        margin: 'auto;',
        textAlign: 'center',
        },
        color_11: {
            color: 'black'
        },
        labelFoot: {
            color: 'black',
            textDecoration: 'none'
        },
        inputSubscribe: {
            width: '60%',
            height: '40px',
            marginRight: '.2%'
        },
        btn:{
            backgroundColor: '#b11818',
            height: '40px'

        },
        jumbotron :{
            backgroundColor: 'white'
        }
    

    }
    return (
<footer style={styles.footer}>
    <div style={styles.jumbotron} class="jumbtron">
        <div class="container footer" style={styles.subscriptionContainer}>
            <form style={styles.form} id="comp-k0eydgnz" class="subForm" />
            <p class="font_4">BE THE FIRST TO KNOW ABOUT SPECIAL SALES AND NEW ARRIVALS</p></div>
            <label style={styles.labelFoot} for="inputEmail" class="labelFoot">Enter Your Email Here *</label>
            <div class="pUnTVX">
                <input style={styles.inputSubscribe} type="email" autocomplete="True" name="email" id="inputEmail" class="inputSubscribe rounded" value="" placeholder="email" required="" aria-required="true" width="100%" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxlength="250" />
                <button style={styles.btn} aria-disabled="false" data-testid="buttonElement" class="btn btn"><span class="M3I7Z2 wixui-button__label">SUBSCRIBE</span>
                </button>
<br /><br>
</br><br /><br />
</div>


<a style={styles.labelFoot} href="/contact" target="_self" class="labelFoot">
    <p style={styles.labelFoot} class="labelFoot">Contact</p>
    </a>
    <a style={styles.labelFoot} href="/shipping&returns" target="_self" class="labelFoot">
    <p class="labelFoot">Shipping and Returns</p>
    </a>
    <a style={styles.labelFoot} href="/storepolicy" target="_self" class="labelFoot">Store Policy
    </a>
    <a style={styles.labelFoot} href="/frequentlyAskedQuestions" target="_self" class="labelFoot">
        <p class="labelFoot">FAQ</p></a>
    <br /> 
    </div>
    <div>
        <img src={logo} alt="logo" />
        <p>© 2023</p>
        </div>
            
        
        
            
        </footer>
    );
    }