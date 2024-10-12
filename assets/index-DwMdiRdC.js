(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function d(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=d(s);fetch(s.href,i)}})();function p(){return`
    <div class="search-container d-none">
   
    <i class="fa-solid fa-xmark"></i>
    <div class="input">
    <input type="text" placeholder="Search.." class="search-input">
     <i class="fa-solid fa-search"></i>
    
    </div>
  
</div>
    `}function v(){return`
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="src/assets/logo.png"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor04">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
           
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link pages-link" href="#">Pages <i class="fa-solid fa-plus "></i></a>
          <div class="drive-links pages">
          <ul>
          <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Our Team</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">FAQ's</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Booking</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Register/Login</a>
          </li>
          </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link services-link" href="#">Services <i class="fa-solid fa-plus "></i></a>
           <div class="drive-links services">
          <ul>
          <li class="nav-item">
          <a class="nav-link" href="#">Service</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Service Details</a>
          </li>
          
          </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link blogs-link" href="#">Blogs <i class="fa-solid fa-plus "></i></a>
           <div class="drive-links blogs">
          <ul>
          <li class="nav-item">
          <a class="nav-link" href="#">Blogs</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Blog details</a>
          </li>
          
          </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
       
      </ul>
      <form class="d-flex">
      <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
        <input class="form-control me-sm-2 d-none" type="search" id="search" placeholder="Search">
      
      </form>
    </div>
  </div>
</nav>
    `}let t=document.getElementById("search-icon");console.log(t);t==null||t.addEventListener("click",()=>{console.log("cliceg");let a=document.querySelector("#search");a==null||a.classList.toggle("d-none")});function m(){return`
      <div class="home">
        <div class="container">
        <div class="row">
         <div class="col-12 col-md-6 home-description position-relative">
         <p>We Provide All Health Care Solution</p>
         <h1>Protect Your Health And Take Care To Of Your Health</h1>
           <button type="button" class="btn btn-warning" fdprocessedid="t602xmh">Read more</button>
          <img src="src/assets/medic.png" class="home-img medic"/>
         </div>
         <div class="col-12 col-md-6 position-relative">
         <img src="src/assets/doctor-home.png" class="w-100 home-img"/>
         </div>
        </div>
        </div>
      </div>
    `}function u(){return`
     <div class="about py-5">
         <div class="container ">
             <div class="row ">
                 <div class="col-12 col-md-6 row gap-3 position-relative">
                     <div class="col-5 pic-1">
                     <img src="src/assets/pic-1.jpg"/>
                     </div>
                     <div class="col-5 pic-2">
                     <img src="src/assets/pic-2.jpg"/>
                     </div>
                     <div class="col-5 pic-3">
                     <img src="src/assets/pic-3.jpg"/>
                     </div>
                     <div class="col-5 pic-4">
                     <span>20</span>
                     <p>Year Experience</p>
                     </div>
                     <img src="src/assets/wave.png" class="wave"/>
                 </div>
                 <div class="col-12 col-md-6 position-relative z-2">
                 <div class="animation"></div>
                 <div class="animation-border"></div>
                    <span>About Us</span>
                    <h1>The Great Place Of Medical Hospital Center</h1>
                    <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                    <div class="row gap-2 stats">
                        <div class="col-5 d-flex state  state-1">
                            <div class="icon me-3"><i class="fa-solid fa-truck-medical"></i></div>
                            <p>Emergency Help</p>
                        </div>
                        <div class="col-5 d-flex state state-2">
                            <div class="icon me-3"><i class="fa-solid fa-bed-pulse"></i></div>
                            <p>Qualified Doctors</p>
                        </div>
                        <div class="col-5 d-flex state state-3">
                            <div class="icon me-3"><i class="fa-solid fa-briefcase-medical"></i></i></div>
                            <p>Best Professionals</p>
                        </div>
                        <div class="col-5 d-flex state state-4">
                            <div class="icon me-3"><i class="fa-solid fa-syringe"></i></div>
                            <p>Medical Treatment</p>
                        </div>
                    
                    </div>
                    <button type="button" class="btn btn-primary my-2" fdprocessedid="mttqks">Read more</button>
                    <div class="animation-circle"></div>
                    <img src="src/assets/about.png" class="about-animation"/>
                 </div>
                 
             </div>
         </div>
     </div>
    `}function g(){return`
    
    <div class="container text-center py-2 work">
    <p>Working Process</p>
    <h1>How we works?</h1>

    <div class="works row gap-3  justify-content-center mt-5 position-relative">
    <div class="col-10 col-sm-3">
    <div class="card border-secondary mb-3 card-1" style="max-width: 20rem;">
  <div class="pt-3 header">01</div>
  <div class="card-body">
    <h4 class="card-title">Make Appointmnet</h4>
    <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of.</p>
  </div>
  <a class="btn my-2 w-75 mx-3 py-2">View More <i class="fa-solid fa-forward ms-2"></i></a>
</div></div>

    <div class="col-10 col-sm-3">
    <div class="card border-secondary mb-3 card-2" style="max-width: 20rem;">
  <div class="pt-3 header">02</div>
  <div class="card-body">
    <h4 class="card-title">Take Treatment</h4>
    <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of.</p>
  </div>
  <a class="btn my-2 w-75 mx-3 py-2">View More <i class="fa-solid fa-forward ms-2"></i></a>
</div></div>

    <div class="col-10 col-sm-3">
    <div class="card border-secondary mb-3 card-3" style="max-width: 20rem;">
  <div class="pt-3 header">03</div>
  <div class="card-body">
    <h4 class="card-title">Registration</h4>
    <p class="card-text">
It is a long established fact that a reader will be distracted by the readable content of.

</p>
  </div>
  <a class="btn my-2 w-75 mx-3 py-2">View More <i class="fa-solid fa-forward ms-2"></i></a>
</div></div>

 <img src="src/assets/about.png" class="works-animation"/>
    </div>



    </div>
    
    `}function h(){return`
    <div class="container py-5 booking">
        <div class="row pt-3">
             <div class="col-12 col-md-6">
            <form>
<select class="form-select my-2" aria-label="Default select example">
  <option selected>Select Department</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select my-2" aria-label="Default select example">
  <option selected>Select Doctor</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  <input type="text" class="form-control my-2" placeholder="First name" aria-label="First name">
  <input type="text" class="form-control my-2" placeholder="Phone Number" aria-label="Phone Number">
              <button class="btn btn-warning my-3">Appointment Now</button>
            </form>
             </div>
             <div class="col-12 col-md-6 d-flex my-3 position-relative">
                <img src="src/assets/mobile.png" class="w-100"/>
                <img src="src/assets/women.png" class="women"/>
                <img src="src/assets/sitting.png" class="sitting"/>
                <img src="src/assets/like.png" class="like"/>
                <img src="src/assets/done.png" class="done"/>
             
             
             </div>

        </div>
    </div>
    `}function f(){return`
    <div class="container-fluid py-3">
        <div class="row">
         <div class="col-12 col-md-4 service-info">
            <span>Services</span>
            <h1>We Cover A Big Variety Of Medical Services</h1>
            <p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
            <button class="btn btn-warning">All Services</button>
         </div>
         <div class="col-12 col-md-7 services-cards">
         <div class="bg-effect"></div>
        <div class="service-card">
        <div class="service-icon">
        <i class="fa-solid fa-stethoscope"></i>
        </div>
        <div class="service-description">
        <h3>Diagonstics</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus at lectus suscipit pulvinar. Nulla facilisi.</p>
        </div>
                <button class="btn btn-outline-primary mb-3">View more</button>
        </div>
        <div class="service-card">
        <div class="service-icon"><i class="fa-solid fa-pump-medical"></i></div>
        <div class="service-description">
        <h3>Treatment</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus at lectus suscipit pulvinar. Nulla facilisi.</p>
        </div>
            <button class="btn btn-outline-primary mb-3">View more</button>
        </div>
        <div class="service-card">
        <div class="service-icon"><i class="fa-solid fa-briefcase-medical"></i></div>
        <div class="service-description">
        <h3>Surgery</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus at lectus suscipit pulvinar. Nulla facilisi.</p>
        </div>
            <button class="btn btn-outline-primary mb-3">View more</button>
        </div>

         </div>


         
         </div>
    </div>
    `}function b(){return`
    <div class="container py-5 my-5">
        <div class="row text-center my-3">
        <p>Testimonial</p>
        <h1>See What Are The Patients
Saying About us</h1>
        </div>
        <div class="row">
            <div class="col-12 col-md-5 my-3">
            <div class="doctors">
            <div>
                
            </div>
            <img src="/pharmacy/public/P1.jpeg" class="p1" alt="p1"/>
            <img src="/pharmacy/public/P2.jpeg" class="p2" alt="p1"/>
            <img src="/pharmacy/public/P3.jpeg" class="p3" alt="p1"/>
            <img src="/pharmacy/public/P4.jpeg" class="p4" alt="p1"/>
            <img src="/pharmacy/public/P5.jpeg" class="p5" alt="p1"/>
            <img src="/pharmacy/public/P6.jpeg" class="p6" alt="p1"/>
            </div>
            
            </div>
            <div class="col-12 col-md-7 test-cards p-3">

                <div class="card" style="min-width:250px; scroll-snap-align: center; margin-top: 20 border-radius: 15px;">
                    <div class="card-body">
                        <h5 class="card-title">Patient 1 Name</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisi eget eleifend dignissim, nisi velit semper arcu, vel consectetur velit nisi vitae nisi.</p>
            <a href="#" class="btn btn-primary">Read More</a>
            </div>
            </div>
            
                <div class="card" style="min-width:250px; scroll-snap-align: center; margin-top: 20 border-radius: 15px;">
                    <div class="card-body">
                        <h5 class="card-title">Patient 1 Name</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisi eget eleifend dignissim, nisi velit semper arcu, vel consectetur velit nisi vitae nisi.</p>
            <a href="#" class="btn btn-primary">Read More</a>
            </div>
            </div>
                <div class="card" style="min-width:250px; scroll-snap-align: center; margin-top: 20 border-radius: 15px;">
                    <div class="card-body">
                        <h5 class="card-title">Patient 1 Name</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisi eget eleifend dignissim, nisi velit semper arcu, vel consectetur velit nisi vitae nisi.</p>
            <a href="#" class="btn btn-primary">Read More</a>
            </div>
            </div>

            </div>
        </div>
    </div>
    `}function y(){return`
    <div class="news py-5">
    <div class="container">
    <div class="header text-center">
    <p>Latest News</p>
    <h1>Latest News &amp; Updates</h1>
    </div>
    <div class="news-cards">

    <div class="card">
    <img class="card-img-top" src="src/assets/pic1.jpg" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">
     <img class="card-img-top" src="src/assets/p1.jpeg" alt="Card image cap">
     <span>mary jean</span>
     <span>2022-12-12</span>

    </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Read More</a>
    </div>
    </div>
    
    
    <div class="card">
    <img class="card-img-top" src="src/assets/pic2.jpg" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">
     <img class="card-img-top" src="src/assets/p2.jpeg" alt="Card image cap">
     <span>mary jean</span>
     <span>2022-12-12</span>
    </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Read More</a>
    </div>
    </div>
    
    
    <div class="card">
    <img class="card-img-top" src="src/assets/pic3.jpg" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">
     <img class="card-img-top" src="src/assets/p3.jpeg" alt="Card image cap">
     <span>mary jean</span>
     <span>2022-12-12</span>
    </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Read More</a>
    </div>
    </div>
    
    
    <div class="card">
    <img class="card-img-top" src="src/assets/pic1.jpg" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">
     <img class="card-img-top" src="src/assets/p4.jpeg" alt="Card image cap">
     <span>mary jean</span>
     <span>2022-12-12</span>
    </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Read More</a>
    </div>
    </div>
    
    
    
    </div>
    </div>
    
    </div>
    `}function w(){return`
            <div class="footer container-fluid py-3">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3">
                         <img class="my-3" src="src/images/logo.png" alt="Card image cap">
                         <p class="my-2">Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                         <ul class="contact">
                         <li class="">Phone: 123-456-7890</li>
                         <li class="">Email:  info@example.com</li>
                         <li class="">Address: 123 Main St, Anytown, USA</li>
                         </ul>
                    </div>

                    <div class="col-12 col-sm-6 col-md-3">
                        <p class="my-3">Quick Links</p>
                        <ul class="Quick-Links">
                         <li class=""><a href="#">Home</a></li>
                         <li class=""><a href="#">About Us</a></li>
                         <li class=""><a href="#">Services</a></li>
                         <li class=""><a href="#">Contact Us</a></li>
                         </ul>
                    </div>

                    <div class="col-12 col-sm-6 col-md-3">
                        <p class="my-3">Our Services</p>
                        <ul class="Our-Services">
                         <li class=""><a href="#">Dental Services</a></li>
                         <li class=""><a href="#">Cosmetic Dentistry</a></li>
                         <li class=""><a href="#">Orthodontics</a></li>
                         <li class=""><a href="#">Dental Implants</a></li
                         </ul>
                    </div>

                    <div class="col-12 col-sm-6 col-md-3">
                        <p class="my-3">Subscribe to our Newsletter</p>
                         <form class="d-flex">
                         <input type="email" class="form-control me-2" placeholder="Enter your email" aria-label="Email">
                         <button class="btn btn-primary" type="submit">Subscribe</button>
                         </form>
                    <div class="d-flex social">
  <button class="Btn">
    <span class="svgContainer">
      <svg
        viewBox="0 0 496 512"
        height="1.6em"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <path
          d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
          fill="white"
        ></path>
      </svg>
    </span>
    <span class="BG"></span>
  </button>

  <button class="Btntwit">
    <span class="svgContainertwit">
      <svg
        viewBox="0 0 512 512"
        height="1.7em"
        xmlns="http://www.w3.org/2000/svg"
        class="svgIcontwit"
        fill="white"
      >
        <path
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        ></path>
      </svg>
    </span>
    <span class="BGtwit"></span>
  </button>

  <button class="Btninsta">
    <span class="svgContainerinsta">
      <svg
        fill="white"
        class="svgIconinsta"
        viewBox="0 0 448 512"
        height="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        ></path>
      </svg>
    </span>
    <span class="BGinsta"></span>
  </button>

  <button class="Btnstock">
    <span class="svgContainerstock">
      <svg
        viewBox="0 0 384 512"
        fill="white"
        height="1.6em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
        ></path>
      </svg>
    </span>
    <span class="BGstock"></span>
  </button>
</div>

                    </div>
                </div>
            
            </div>
    `}const e=document.getElementById("app");if(e)e.innerHTML+=v();else throw new Error('The element with id "app" does not exist.');e.innerHTML+=m();e.innerHTML+=u();e.innerHTML+=g();e.innerHTML+=h();e.innerHTML+=f();e.innerHTML+=b();e.innerHTML+=y();e.innerHTML+=w();e.innerHTML+=p();let r=document.getElementById("search-icon"),n=document.querySelector(".fa-xmark");r==null||r.addEventListener("click",()=>{let a=document.querySelector(".search-container");a==null||a.classList.toggle("d-none")});n==null||n.addEventListener("click",()=>{let a=document.querySelector(".search-container");a==null||a.classList.toggle("d-none")});
