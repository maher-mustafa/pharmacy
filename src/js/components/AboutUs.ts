export default function AboutUs() {
    return `
     <div class="about py-5">
         <div class="container ">
             <div class="row ">
                 <div class="col-12 col-md-6 row gap-3 position-relative">
                     <div class="col-5 pic-1">
                     <img src="/assets/pic-1.jpg"/>
                     </div>
                     <div class="col-5 pic-2">
                     <img src="/assets/pic-2.jpg"/>
                     </div>
                     <div class="col-5 pic-3">
                     <img src="/assets/pic-3.jpg"/>
                     </div>
                     <div class="col-5 pic-4">
                     <span>20</span>
                     <p>Year Experience</p>
                     </div>
                     <img src="/assets/wave.png" class="wave"/>
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
                    <img src="/assets/about.png" class="about-animation"/>
                 </div>
                 
             </div>
         </div>
     </div>
    `
}