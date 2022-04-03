const popup = document.querySelector(".popup");
const body = document.querySelector('body');
const headerContact = document.querySelector('.header_btn-phone');


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

headerContact.addEventListener('click', (e) => {
    document.querySelector('.phone-number').classList.toggle('active')
})

