const Btn =document.querySelector('.btn1');
const InPut=document.getElementById('email');
const Container = document.querySelector('.container');



Btn.addEventListener('click',()=>{
  let Value = InPut.value;
   Container.classList.add('active');
   document.querySelector('.box-page').innerHTML="We sent a confirmation link to: "+Value;
});


 document.querySelector('.icon1').addEventListener('click',()=>{
  Container.classList.remove('active');
 }) 
