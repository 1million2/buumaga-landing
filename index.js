
const popup = document.querySelector(".popup");
const body = document.querySelector('body');
const headerContact = document.querySelector('.header_btn-phone');

document.addEventListener('click', (e) => {
    if (e.target.closest(".order-btn") || e.target.closest(".buy")) {
        e.preventDefault()
        modal.open();
        // popup.classList.add('active');
        // body.style.overflow = 'hidden';
    }
    
})

document.addEventListener('click', (e) => {
    if (e.target.closest(".close")) {
        e.preventDefault()
        modal.close();
        // popup.classList.remove('active');
        // body.style.overflow = 'auto';
    } 
})

headerContact.addEventListener('click', (e) => {
    document.querySelector('.phone-number').classList.toggle('active')
})


// instanciate new modal
var modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Закрыть",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});


modal.setContent('<p class="popup_text">Колличество и наличие уточняйте по телефону</p> \n <a class="popup_tel" href="tel:+375291579017">+375 (29) 157-90-17</a>');

