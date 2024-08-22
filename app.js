
let successMsg = document.querySelector('.success-msg');
let errorMshg = document.querySelector('.error-msg');
let warningMsg = document.querySelector('.warning-msg');
let buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
   button.addEventListener('click',(e) => {
      if(e.target.id === 'success'){
         successMsg.classList.add('toggle-s');

         setTimeout(() => {
            successMsg.classList.remove('toggle-s');
         },1700)
      }
      else if(e.target.id === 'error'){
         errorMshg.classList.add('toggle-e');

         setTimeout(() => {
            errorMshg.classList.remove('toggle-e');
         },1700)
      }
      else if(e.target.id === 'warning'){
         warningMsg.classList.add('toggle-w');

         setTimeout(() => {
            warningMsg.classList.remove('toggle-w');
         },1700)
      }
   })
})