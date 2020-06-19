

let subList =document.querySelector(".subList")
let list = document.querySelectorAll(".collapsible")
let navlinks = document.querySelector(".navLinks")
let mobileBtn = document.querySelector(".mobile")
let ico = document.querySelector(".fa-caret-down")
let h = window.scrollY;
let index = 0;

function drop(e, icon){
 e.classList.toggle("active")
 icon.classList.toggle("active")
}
let headerContent = {
  title: `  Spending too <br> much time on HR, <br>
  not your business ? , <br> 
  <p id="subTitle"> We can fix that.</p>`,

  formTxt: 'Streamline onboarding benefits, payroll, PTO, and more with our simple, intuitive platform.',

  formCaption: `
  <span><i class='fa fa-check'></i>Free 14-day Demo </span>
  <span><i class='fa fa-check'></i>No setup </span>
  <span><i class='fa fa-check'></i> No credit card needed</span>
  `,
}
$(document).ready(function(){
  let email = document.querySelector("#mail")
  let mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let viewWidth = window.innerWidth
  $("#headerTitle").html(headerContent.title)
$("#formTxt").html(headerContent.formTxt)
$('.ads').html(headerContent.formCaption)
$('form').submit(function(){
  $(this).preventDefault
  if(email.value == "" || email.value.match(mailFormat)){
 return false
  }
  else{
    alert("thanks for registering with us")
  }
})
$('#submit').on({
  mouseover : function(){
    if(email.value== ""){
      $(this).css("cursor", "not-allowed")
      return false
    }else{
      $(this).css("cursor", "pointer")
      return true
    }
  }
})
$(email).on({
input: function(){
  if(email.value.match(mailFormat)){
    $(".fa-envelope").css("color", "rgb(40, 190, 40)")
  }
  else{
    $(".fa-envelope").css("color", "red")
  }
}, 
})
$(window).scroll(function(){
  Navfunction()
  if(Math.ceil(viewWidth) >= 1300){
    imgFunction()
  }
  ScrollOut({
    targets: ".more-section--animation" 
  })
})
})
//Nav TRigger
function Navfunction(){
  let Scrollheight = window.scrollY;
  let nav = document.querySelector("nav")
  if(Math.ceil(Scrollheight) >= 200){
   nav.classList.add("active")
  }else{
    nav.classList.remove("active")
  }
}

//Img Scroll Magic
function imgFunction(){
  let imgContainer = document.querySelector("#headerImg")
  let svg = document.querySelector("svg")
  let container = document.querySelector(".imgContainer")
  let Scrollheight = window.scrollY;

  if(Math.ceil(Scrollheight) >= 40){
    imgContainer.style.borderRadius =Scrollheight + "px"
    svg.style.display =  "none"
    container.style.borderRadius=  Math.ceil(Scrollheight) + "px"
    container.style.position="relative"
    container.style.top =  Math.ceil(Scrollheight) + "px"
    container.style.right =  Math.ceil(Scrollheight) + "px"
    container.style.height =  "300" + "px"
    container.style.width =  "300" + "px"
    container.style.overflow =  "hidden"
  }
  else{
    imgContainer.style.borderRadius ="0"
    container.style.position="static";
    svg.style.display =  "block"
    container.style.height =  "initial"
    container.style.width =  "40" + "vw"
  }
  if(Math.ceil(Scrollheight) >= 650){
    container.style.height =  "100" + "px"
    container.style.width =  "100" + "px"
    container.classList.add("fade-away")
 
  }else{
    container.classList.remove("fade-away")
  }
}
