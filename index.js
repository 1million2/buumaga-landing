// маска для формы
import './inputmask.js'


(function () {
    const headerContact = document.querySelector('.header_btn-phone');
    let orderName;

    // modal
    var modal = new tingle.modal({
        footer: false,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Закрыть",
        cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function() {
            //  создаем маску для формы
            const selector = document.getElementById("tel");
            Inputmask({mask: "+(375) 99-999-99-99"}).mask(selector);
        },
        onClose: function() {
            modal.setContent(`
                    <div class="">
                    <form action="./mail.php" class="form">
                        <p class="popup_text form-text">Оставьте свой номер телефона и мы перезвоним в ближайшее время:</p>
                        <input type="tel" name="tel" id="tel" required placeholder="+(375)">
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


    // send form
    document.addEventListener('click', (e) => {
    
        if(e.target.closest(".buy")) {
    
            orderName = e.target.parentNode.parentNode.querySelector('.item_title').textContent;
            modal.setContent(`
                    <div>
                    <form action="./mail.php" class="form">
                        <p class="popup_text form-text">Оставьте свой номер телефона и мы перезвоним в ближайшее время:</p>
                        <h4 class="popup__order-text">Ваш заказ:<br> <span>${orderName}</span></h4>
                        <div class="amount-body">
                            <h4>Колличество:</h4>
                            <input type="number" name="amount" id="amount" value="1">
                            <span>шт.</span>
                        </div>
                        <input type="tel" name="tel" id="tel" required placeholder="+(375)">
                        <input type="submit" value="Заказать">
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
            e.preventDefault()
            modal.open();
            const form = document.querySelector('.form');
            form.addEventListener('submit' , sendForm)
        }
        if (e.target.closest(".order-btn")) {
    
            modal.setContent(`
                     <div class="">
                     <form action="./mail.php" class="form">
                         <p class="popup_text form-text">Оставьте свой номер телефона и мы перезвоним в ближайшее время:</p>
                         <input type="tel" name="tel" id="tel" required placeholder="+(375)">
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
            e.preventDefault()
            modal.open();
            const form = document.querySelector('.form');
            form.addEventListener('submit' , sendForm)
        }
        
    })
    async function sendForm(e) {
        e.preventDefault()
        const form = document.querySelector('.form');
        const formData = new FormData(form);
        // добавляем в форму название товара из катрочки товара для отправки 
        formData.append('order_name', orderName)
        modal.setContent(`<div class="loadind"><img src="./assets/img/ZZ5H.gif" alt="loading"></div>`)
    
        const response = await fetch('mail.php', {
            method: 'POST',
            body: formData
        });
    
        if (response.ok) {
            const result = await response.json();
            orderName = null;
            modal.setContent(
                `<p class="popup_text">Спасибо за заявку!</p>
                <p class="popup_text">Наш менеджер скоро с вами свяжется!</p>
            `)
            const t = setTimeout(() => {
                modal.close()
            }, 3000)
        }
    }
    
    
    headerContact.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.phone-number').classList.toggle('active')
    });
}())



