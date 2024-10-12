export default function navbar() {
  return `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="/assets/logo.png"/>
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
    `
}
let search = document.getElementById("search-icon")
console.log(search)
search?.addEventListener("click", () => {
  console.log("cliceg")
 let input=document.querySelector("#search")
  input?.classList.toggle("d-none")
})
