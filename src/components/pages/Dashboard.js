import React from 'react';
import '../../static/Dashboard.css';
export default function Dashboard () {
  
    return (
<div class='container'>
<div class="col-4">
  <h1 class="h2">Your Account</h1>
</div>

    
<div class="col-4 d-flex justify-content-between">
    <div>Manage your <b>orders</b> and personal details</div>
</div>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  <div class="col">
    <a href="/userorders" class="text text-decoration-none" role="button">
      <div class="card bg-warning mb-3">
        <div class="row g-0">
          <div class="col-2">
            <svg class="bi bi-gift top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg"
             fill="currentColr" viewBox="0 0 16 16">
              <path
                d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
            </svg>
        </div>
        </div>
          <div class="col-10">
            <div class="card-body ps-0 ps-md-1">
              <h1 class="h5">Orders</h1>
              <p class="card small text-muted">View, Track, Change or buy again</p>
            </div>
          </div>
        </div>
    </a>
  </div>
  </div>
  <div class="col">
    <a href="editdetails" class="text text-decoration-none" role="button">
      <div class="card bg-warning mb-3">
        <div class="row g-0">
          <div class="col-2 position-relative">
            <svg class="bi bi-shield-lock position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg"
 fill="black" viewBox="0 0 16 16">
              <path
                d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
              <path
                d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
            </svg>
          </div>
          
          <div class="col-10">
            <div class="card-body ps-0 ps-md-1">
              <h1 class="h5">Login & Security</h1>
              <p class="card small text-muted">Edit login, email and phone number</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>

  <div class="col">
    <a href="/addresses" class="text text-decoration-none" role="button">
      <div class="card bg-warning mb-3">
        <div class="row g-0">
          <div class="col-2 position-relative">
            <svg class="bi bi-truck position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg"
              width="30" height="30" fill="black" viewBox="0 0 16 16">
              <path
                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
          <div class="col-10">
            <div class="card-body ps-0 ps-md-1">
              <h1 class="h5">Your Addresses</h1>
              <p class="card small text-muted">Add or edit your shipping addresses</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>




  <div class="col-4">
    <a href="/userwishlist" class="text text-decoration-none" role="button">
      <div class="card bg-warning mb-3">
        <div class="row g-0">
          <div class="col-2 position-relative">
            <svg class="bi position-absolute top-50 start-50 translate-middle" xmlns="http://www.w3.org/2000/svg"
              width="30" height="30" fill="black" viewBox="0 0 16 16">
              <path
                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path
                d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <div class="col-10">
            <div class="card-body ps-0 ps-md-1">
              <h1 class="h5">Your Wish List</h1>
              <p class="card small text-muted">View your Wish List</p>
            </div>
          </div>
        </div>
      </div>
    </a>
</div>
</div>
    )

}