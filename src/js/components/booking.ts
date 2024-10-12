export default function Booking(){
    return `
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
                <img src="/assets/mobile.png" class="w-100"/>
                <img src="/assets/women.png" class="women"/>
                <img src="/assets/sitting.png" class="sitting"/>
                <img src="/assets/like.png" class="like"/>
                <img src="/assets/done.png" class="done"/>
             
             
             </div>

        </div>
    </div>
    `
}