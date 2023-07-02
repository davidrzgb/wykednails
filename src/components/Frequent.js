import './Frequent.css';
import './frequent1.png';
import '../images/frequentlyAquestions/frequent.png';

export default function Frequent () {
    
    const styles= {
        container: {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            paddingBottom: '10px'
        },
        jumbotron: {
            fontSize: '22px',
            font: 'serif',
            color: '#b11818',
            textAlign: 'center',
            height: '100%'
        },
        font5:{
            fontSize: '20px',
            fontFamily: 'cinzel, serif'
        },
        font6 : {
            lineHeight: 'normal',
            fontSize: '14px',
            marginLeft: '25%',
            marginRight: '25%',
            fontFamily: 'serif',
            textAlign: 'left',
            verticalAlign: 'baseline'
        },
          
    }
    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("deactivate");
    
    //add new code here
    var contents = document.querySelectorAll('div.content')
    contents.forEach((content) => {
    	content.style.display = "none"
    })
    
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

    return (
        
        <body>
        <div>
            <div style={styles.container} class="container">
                <div class="jumbotron2">
                    <h2 class="font5" style={styles.font5}>FREQUENLY ASKED QUESTIONS</h2>
                </div>
       
<button type="button" className="collapsible">How do I measure my nail sizes?</button>
<div class="content">
  <p>Instructions on how to measure your nail size for press-on nails:</p>
  <p>1. Use a measuring tape or ruler to measure the width of your natural nail bed. Measure from 
   one side to the other, at the widest part of your nail bed. (See the image below for an 
   example)
   <br/>
   2. Record the measurement in millimeters (mm). 
   <br/>
   3. Choose the size that matches your measurement or is slightly larger for a better fit.
   </p>
   <div class='container'>
        <div class="mySlides">
            <div class="numbertext">1 / 2</div>
            <img src="https://static.wixstatic.com/media/8e97c5_148bc6bf1de341999e16cc25de591905~mv2.png/v1/fill/w_1800,h_1200,al_c,q_90/8e97c5_148bc6bf1de341999e16cc25de591905~mv2.webp"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 2</div>
    <img src="img_5terre_wide.jpg"/>
  </div>
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  <div class="row">
    <div class="column">
    
      <img class="demo cursor" src="https://static.wixstatic.com/media/8e97c5_33bbec20e7da4dd19d557410835cc3fc~mv2.png" onclick="currentSlide(1)" alt="frequent" />
    </div>
    <div class="column">
      <img class="demo cursor" src="https://static.wixstatic.com/media/8e97c5_148bc6bf1de341999e16cc25de591905~mv2.png/v1/fill/w_1800,h_1200,al_c,q_90/8e97c5_148bc6bf1de341999e16cc25de591905~mv2.webp" onclick="currentSlide(2)" alt="frequent1" />
    </div>
    </div>
    <p class='nailKIT'> Nail Sizing Kit: </p>
    <p>
        We offer nail sizing kits for $2.00 that will be sent to you immediately upon payment. Just add it to your cart along with your purchase. The kit will include the nail shape you're ordering. 

As soon as you have measured your nails and put them on the sizing card, take a picture of the card and email it to me. Then the creation begins!
    </p>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.wykeddesiresnailbrand.com%2Ffaq-1%3FquestionId%3D661a0f51-4857-433a-b7d8-0e5769ce59ea&appDefId=14c92d28-031e-7910-c9a8-a670011e062d" target="_blank" title="Facebook">   
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
        </svg>      
      </a>
   </div>
</div>
<hr class="featurette-divider" ></hr>
<button type="button" align='center' class="collapsible">How long do press-on nails last?</button>
<div class="content" aling='center'>
  <p>When applied correctly using the instructions included with the order, press-on nails usually last up to 1 week or more with the adhesive tabs. When they are applied using nail glue, the nails can last up to 2 weeks or more.</p>
  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.wykeddesiresnailbrand.com%2Ffaq-1%3FquestionId%3D951b61c7-8a64-4b4d-b580-f6d6a452b6b6&appDefId=14c92d28-031e-7910-c9a8-a670011e062d" target="_blank" title="Facebook">   
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
        </svg>      
      </a>
      </div>
      <hr class="featurette-divider" ></hr>
<button type="button" class="collapsible">How do I make a Custom Order?</button>
<div class="content">
<p>
To have a set made specifically for you, all you need to do is email me with the information below and I'll contact you so we can begin the process:
    </p>
    <p>
    1. Provide very specific details for your custom set: 

nail shape, length, color, special design you would like (you can send me a picture to 
website email), any additional accents such as glitter/rhinestones, etc.
<br/>
2. Specify the size of your nails in millimeters by measuring the widest part of each nail bed 
 from the thumb nail to the pinky nail and which hand the measurements are for. 
<br/>
3. Provide your name, shipping address and email address.
<br/>
4. I will send you an email after I receive the information with the final price of the nail set. 
    </p>
    <p>** Custom nail sets usually range from $40 and up.</p>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.wykeddesiresnailbrand.com%2Ffaq-1%3FquestionId%3D1a31f4b8-c99b-47ba-a8cb-d5652f4e32d0&appDefId=14c92d28-031e-7910-c9a8-a670011e062d" target="_blank" title="Facebook">   
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
        </svg>      
      </a>
    </div>
    
    <hr class="featurette-divider" ></hr>
<button type="button" class="collapsible">Where do you ship to?</button>
<div class="content">
<p>Currently we only ship in the US. International shipping will be added at a later date</p>
<a href="" target="_blank" title="Facebook">   
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
        </svg>      
      </a>
</div>
<hr class="featurette-divider" ></hr>
<button type="button" class="collapsible">What is included with the nail sets?</button>
<div class="content">
  <p>Each set comes with 10 nails, Apply/Remove instructions and an application kit that includes everything you'll need to apply your new nail set: (alcohol swabs, mini nail file, wooden cuticle stick, adhesive tabs and nail glue.
</p>
<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.wykeddesiresnailbrand.com/faq-1?questionId=ade7c07a-4132-4ecc-b63a-4afc090b72e1&appDefId=14c92d28-031e-7910-c9a8-a670011e062d" target="_blank" title="Facebook">   
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
        </svg>      
      </a>
</div>
<hr class="featurette-divider" ></hr>
            </div>
            <div class="slider">
      <span id="slide-1"></span>
      <span id="slide-2"></span>
      <span id="slide-3"></span>
      
    </div>
        </div>
        
        </body>
    )
}

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }