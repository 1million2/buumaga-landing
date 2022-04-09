
const body = document.querySelector('body');
const headerContact = document.querySelector('.header_btn-phone');

var modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Закрыть",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {

    },
    onClose: function() {
        modal.setContent(`
                <div class="">
                <form action="./mail.php" class="form">
                    <p class="popup_text form-text">Оставьте свой номер телефона и мы перезвоним в ближайшее время:</p>
                    <input type="tel" name="tel" id="" required placeholder="Введите номер телефона (375)">
                    <input type="submit" value="Оставить заявку">
                </form>
                </div>
                <p class="popup_text">
                Колличество и наличие уточняйте по телефону:
                </p>
                <a class="popup_tel" href="tel:+375291579017">
                +375 (29) 157-90-17
                </a>
                <hr>
                <p class="popup_text"'>Пункты самовывоза:</p>
                <ul class="shop-list">
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfLxwLA">ул. В. Голубка 2 (ТЦ Bonus)</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPECpC">ул. Матусевича 66</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPQrKD">ул. Слободская 57</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPQLtD">ул. Сурганова 50 (ТЦ Рига)</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPEdkC">б-р Шевченко 12</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPah0A">ул. Связистов 11</a></li>
                </ul>`
        );
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});
modal.setContent(`
                <div class="">
                <form action="./mail.php" class="form">
                    <p class="popup_text form-text">Оставьте свой номер телефона и мы перезвоним в ближайшее время:</p>
                    <input type="tel" name="tel" id="" required placeholder="Введите номер телефона (375)">
                    <input type="submit" value="Оставить заявку">
                </form>
                </div>
                <p class="popup_text">
                Колличество и наличие уточняйте по телефону:
                </p>
                <a class="popup_tel" href="tel:+375291579017">
                +375 (29) 157-90-17
                </a>
                <hr>
                <p class="popup_text"'>Пункты самовывоза:</p>
                <ul class="shop-list">
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfLxwLA">ул. В. Голубка 2 (ТЦ Bonus)</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPECpC">ул. Матусевича 66</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPQrKD">ул. Слободская 57</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPQLtD">ул. Сурганова 50 (ТЦ Рига)</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPEdkC">б-р Шевченко 12</a></li>
                <li><a class="shop-link" target="_blank" href="https://yandex.by/maps/-/CCUBfPah0A">ул. Связистов 11</a></li>
                </ul>`
        );
document.addEventListener('click', (e) => {
    if (e.target.closest(".order-btn") || e.target.closest(".buy")) {
        e.preventDefault()
        modal.open();

        const form = document.querySelector('.form');

        async function sendForm(e) {
            e.preventDefault()
            const formData = new FormData(form);
            modal.setContent(`<div class="loadind"><img src="./assets/img/ZZ5H.gif" alt="loading"></div>`)

            const response = await fetch('mail.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const result = await response.json();

                modal.setContent(
                    `<p class="popup_text">Спасибо за заявку!</p>
                    <p class="popup_text">Наш менеджер скоро с вами свяжется!</p>
                `)
                // modal.open();
                const t = setTimeout(() => {
                    modal.close()
                }, 3000)
            }
            else {
                
            }
        }

        form.addEventListener('submit' , sendForm)
    }
    
})

headerContact.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.phone-number').classList.toggle('active')
})



