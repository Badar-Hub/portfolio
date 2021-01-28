<template>
<div>
  <bar/>
    <hr style="margin:0px; color:black"/>
  <HeaderView/>
  <hr style="margin:0px; color:black"/>
  <sub-page-bar/>
  <hr style="margin:0px; color:black"/>
  <div class="about">
    <h4>OUR HISTORY</h4> 
      <p>
        We started our business in 2008. With professionals having vast dentistry experience behind us, we have managed to tailor the needs of 
        our clients for specific dentistry needs.
      </p>
      <p>
        Our comprehensive public relations and introduction of quality brand names in the field of dentistry, we have established our name among our clients
        which includes Government and Military institutions.
      </p>

      <p>
        We have now offices in all major cities of Pakistan:
      </p> 

      <div class="smrow">

      <h4>Islamabad / Rawalpindi</h4>           <h4> Karachi </h4>        <h4> Lahore </h4>          <h4>  Peshawar</h4>
      </div>

      <h4>OUR MERITS</h4> 
      <p>
        Team work based on the implementation of progressive communication including working disciplines.
      </p> 
      <p>
        Professional quality of services provided by a highly motivated team.
      </p> 
      <p>
      Strong background in technical field in order to provide best After Sales services.
      </p> 
      <h4>OUR PORTFOLIO</h4> 
      <p>
        We have distribution channels through which we are successfully marketing dental products and other products which includes multivitamin & food 
        supplements, food items, footwear & apparel and watches as we are in this business for a long time. These includes Military Hospitals, Government and
        Private Hospitals and institutes.
      </p> 

      <strong> We are proud distributors of the famous companies which includes:</strong> 
      <div class="bulet">
        <li>Natrol</li>
        <li>Astra</li>
        <li>Sega</li>
        <li>Floslek</li>
        <li>Pro Balance</li>
      </div>

      <div class="grrow"> 
        <img src="@/assets/img/brand-logo/natrol.png" alt="natrol">
        <img src="@/assets/img/brand-logo/astra.jpg" alt="orthofeet">
        <img src="@/assets/img/brand-logo/sega.jpg" alt="casa">
      </div>
      <div class="grrow"> 
        <img src="@/assets/img/brand-logo/floslek.svg" alt="birkenstock">
        <img src="@/assets/img/brand-logo/probalance.png" alt="birkenstock">
      </div>
  </div>
  <footerview />
</div>
</template>

<script>
import HeaderView from "../components/Layout/Header-View"
import bar from "../components/Layout/bar"
import SubPageBar from '../components/Layout/subPageBar.vue'
import footerview from '../components/Layout/footer.vue'
export default {
    components:{
      HeaderView,
      bar,
      SubPageBar,
      footerview
    }
}
</script>
 <style scoped>
 .about {
   max-width: 1200px;
   margin: auto;
 }
 li{
   padding: 5px 20px;
 }
 .bulet{
   margin: 15px 0;
   padding-bottom: 3%;
 }
 </style>