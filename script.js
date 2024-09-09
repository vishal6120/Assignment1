   

   
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

  
    const image = document.getElementById('houseImage');
    image.classList.add('fullscreen');

   
    document.querySelector('.login-container').style.display = 'none';

   
    setTimeout(() => {
        window.location.href = "page.html"; 
    }, 3000);
});


