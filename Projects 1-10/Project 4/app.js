const button = document.querySelector('.button');

button.addEventListener('click', () => {
   if(button.classList.contains('button')) {
    (document.body.style.background = 'green');
   }
})

button.addEventListener('click', () => {
    if(button.classList.contains('button')) {
     (document.body.style.background = 'green');
    }
 })

 button.addEventListener('click', () => {
    if(button.classList.contains('button')) {
     (document.body.style.background = 'pink');
    }
 })