const popup = document.querySelector(".popup");
const body = document.querySelector('body');

document.addEventListener('click', (e) => {
    if (e.target.closest(".order-btn") || e.target.closest(".buy")) {
        e.preventDefault()
        popup.classList.add('active');
        body.style.overflow = 'hidden';
    }
    
})

document.addEventListener('click', (e) => {
    if (e.target.closest(".close")) {
        e.preventDefault()
        popup.classList.remove('active');
        body.style.overflow = 'auto';
    } 
})


