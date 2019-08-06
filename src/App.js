import React, { Component } from "react";
import "./App.css";

class App extends Component {
 
  render() { 
     
    return (
     
    <div>
<div class="fixed-navbar">
<div class="page-wrapper">
 {/* <!-- START HEADER-->*/}
            
  <header class="header">
    <div class="page-brand">

      <form class="navbar-search mb-0" action="/">

        <div class="rel">
          <span class="search-icon"><i class="ti-filter"></i></span>
          <input class="form-control  border rounded border-light " id="colorfix" placeholder="filter navigator"/>
        </div>
      </form>

    </div>
    <div class="flexbox flex-1 bg-light h-10">
    {/* <!-- START TOP-LEFT TOOLBAR-->*/}
      <ul class="nav navbar-toolbar ">
        <li>
          <a class="nav-link sidebar-toggler js-sidebar-toggler" href="/"><i class="ti-menu"></i></a>
        </li>
        <li class="heading font-strong text-black ml-0">clinical Device Category</li>
   
      <button class="btn btn-success h-2 ml-2 btnnew" type="submit">New</button>
       
        <span class="font-strong ml-4">search</span>
        <li>
          <form class=" ml-2" action="/">
            <div class="rel">

              
           
         
          
                <select class="form-control dropdown" id="gender">
                  <option>Name</option>
                  
                </select>
           

            </div>

          </form>
        </li>
        <li>
          <form class=" ml-1 mr-0" action="/">
            <div class="rel">

             
              <input class="form-control ml-0 mr-0" placeholder="Search"/>

            </div>

          </form>
        </li>


        <i class="ti-pulse font-strong ml-4 mr-2 move"></i>

        <i class="fa fa-backward text-muted mr-2 move"></i>
      
        <input type="text"  value="1" class="form-control col-1 p-0,m-0 move"/>
      
        <span class="move ml-2 mr-2">to 20 of 2,497</span>
        <i class="fa fa-play color-black mr-2 move"></i>
        <i class="fa fa-play color-black move"></i>
        <i class="fa fa-play color-black mr-2 move"></i>

      </ul>

     {/* <!-- END TOP-LEFT TOOLBAR-->*/}
      {/*<!-- START TOP-RIGHT TOOLBAR-->*/}
</div>
  </header>
 
    {/*<!-- END HEADER-->*/}
            {/*<!-- START SIDEBAR-->*/}
  <nav class="page-sidebar vertical-menu " id="sidebar">
    <div id="sidebar-collapse">
      <div class="admin-block d-flex">
        <div>
          <i class="ti-calendar bg-white ml-1"></i>
          <i class="fa fa-star  color-white "></i>
          <i class="ti-time color-white"></i>
        </div>
   
      </div>
      <ul class="side-menu" id="scroll">
       
        <li class="heading text-white h-10 p-3 addbg">Clinical Assessment Management</li>
        <li class="heading text-white p-3 ">My Work Order Boards<i class="ti-star color-white ml-5 mr-0"></i> </li>


    <li class="heading text-white h-10 p-3 addbg"><i class="fa fa-play color-white mr-2"></i>Inventory</li>

<li>
  <a href="/">
    <span class="nav-label  text-white"><i class="fa fa-play color-white mr-2"></i>Work Orders</span></a>

</li>
        <li>
          <a href="/">
            <span class="nav-label  text-white"><i class="fa fa-play color-white mr-2"></i>Contacts</span></a>
  
        </li>
        <li>
          <a href="/">
            <span class="nav-label  text-white"><i class="fa fa-play color-white mr-2"></i>Purchase Order</span></a>
  
        </li>
        <li>
          <a href="/">
            <span class="nav-label text-white ml-0 emgrg"><i class="fa fa-play color-white mr-2"></i>Emergency Events & Contacts</span></a>
  
        </li>
        
        <li class="heading text-white addbg p-3 ">EAM Integrations </li>
  
  
        <li>
          <a href="/">
                      <span class="nav-label  text-white">intergitions credtinal</span>
                      </a>
            </li>
        <li>
          <a href="/">
            <span class="nav-label  text-white">Outbound Transactions</span></a>
        </li>
        <li>
          <a href="/">
            <span class="nav-label  text-white"><i class="fa fa-play color-white mr-2"></i>Parts source Configurations</span></a>
  
        </li>
        <li class="heading text-white ml-0 p-3 addbg">Groups</li>
        <li class="heading text-white p-3 addbg">KPI Report</li>
        <li>
          <a href="/">
            <span class="nav-label  text-white">KPI Report Metrics</span></a>
        </li>
        <li>
          <a href="/">
            <span class="nav-label  text-white">KPI Reports</span> </a>
        </li>
        <li>
          <a href="/">
            <span class="nav-label  text-white">KPI Report Metrics</span></a>
        </li>
        <li>
          <a href="/">
            <span class="nav-label  text-white">KPI Metrics Instances</span></a>
        </li>
        <li>
          <a href="/">
            <span class="nav-label  text-white">KPI Metrics Defintions</span></a>
        </li>
        <li class="heading text-white addbg p-3 ">Reservations Management</li>
        <li>
          <a href="/">
            <span class="nav-label  text-white"><i class="fa fa-play color-white mr-2"></i>Reservations Request</span></a>
  
        </li>
  
      
      </ul>
      
      
    </div>
  </nav>
            {/*<!-- END SIDEBAR-->*/}

  <div class="content-wrapper">
              {/* <!-- START PAGE CONTENT-->*/}
    <div class="page-content fade-in-up">
      <div class="row">
        <i class="ti-filter mt-0 mr-4 text-success mb-2"><span class="ml-2 text-success mb-2">All</span></i>
        <table class="table table-striped">
          <thead>
            <tr>
              <th><i class="ti-settings text-success mr-0"></i></th>
              <th><i class="ti-search text-success ml-0"></i></th>
              <th><i class="ti-menu text-success ml-0 mr-1"></i>Number</th>
              <th><i class="ti-menu text-success ml-0 mr-1"></i>Name</th>
              <th><i class="ti-menu text-black ml-0 mr-1"></i>Category</th>
              <th><i class="ti-menu text-black ml-0 mr-1"></i>sub-Category</th>
              <th><i class="ti-menu text-black ml-0 mr-1"></i>Group</th>
              <th><i class="ti-menu text-black ml-0 mr-1"></i>Active</th>
              <th><i class="ti-menu text-black ml-0 mr-1"></i>imaging Category</th>
  
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i></th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i></th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i></th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i></th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i></th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i></th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i></th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i></th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i>
              </th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i>
              </th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
              <tr>
                <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i>
                </th>
                <td><i class="ti-info-alt text-success"></i></td>
                <td>ASTP0001056</td>
                <td>CHARGER,BATTERY</td>
                <td>CHARGER</td>
                <td>BATTERY</td>
                <td>BOMED</td>
                <td>True</td>
                <td></td>
              </tr>
                <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i>
              </th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
              <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i>
              </th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
              <tr>
              <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i>
              </th>
              <td><i class="ti-info-alt text-success"></i></td>
              <td>ASTP0001056</td>
              <td>CHARGER,BATTERY</td>
              <td>CHARGER</td>
              <td>BATTERY</td>
              <td>BOMED</td>
              <td>True</td>
              <td></td>
            </tr>
              <tr>
                <th scope="row" class="Text Muted"><i class="ti-layout-width-full bg-white"></i>
                </th>
                <td><i class="ti-info-alt text-success"></i></td>
                <td>ASTP0001056</td>
                <td>CHARGER,BATTERY</td>
                <td>CHARGER</td>
                <td>BATTERY</td>
                <td>BOMED</td>
                <td>True</td>
                <td></td>
              </tr>
          </tbody>
        </table>
  
      </div>
    </div>
  </div>
 
        
        
  </div>



        
</div>
        


        
        
        


        









        
        

        

        
        
        
        

        

        
        
    </div>
    );
 }
}
             
export default App;
