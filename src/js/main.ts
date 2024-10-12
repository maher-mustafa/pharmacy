import '../css/style.css'
// import "../css/bootstrap.min (1).css";
import searchModule from './search';
import navbar from './navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Working from './components/Working';
import Booking from './components/booking';
import services from './components/services';
import testimonial from './components/testimonial';
import news from './components/news';
import footer from './components/footer';
const app = document.getElementById("app")
if (!app) {
  throw new Error('The element with id "app" does not exist.')
}
else
  app.innerHTML += navbar()
  app.innerHTML +=Home()
  app.innerHTML +=AboutUs()
  app.innerHTML +=Working()
  app.innerHTML +=Booking()
  app.innerHTML +=services()
  app.innerHTML +=testimonial()
  app.innerHTML +=news()
  app.innerHTML +=footer()
 app.innerHTML+=searchModule()

let search = document.getElementById("search-icon")
let search_close = document.querySelector(".fa-xmark")
search?.addEventListener("click", () => {
 let search_container = document.querySelector(".search-container");
  search_container?.classList.toggle("d-none")
})

search_close?.addEventListener("click", () => {
  
  let search_container = document.querySelector(".search-container");
  search_container?.classList.toggle("d-none")
})