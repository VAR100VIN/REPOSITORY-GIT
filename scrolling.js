var navbar =document.getElementById('navbar');
window.addEventListener('scroll', function() {
    if (window.pageYOffset>1){navbar.classList.add('void')} 
    if (window.pageYOffset<1){navbar.classList.remove('void')}

 
})
    
 
