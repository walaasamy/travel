$(document).ready(function() {
    $('#booking-form').on('submit', function(event) {
        event.preventDefault();

    
        let name = $('#name').val();
        let phone = $('#phone').val();
        let persons = $('#persons').val();
        let date = $('#date').val();
        let ticketType = $('#ticket-type').val();

        
        $('#name, #phone, #persons, #date, #ticket-type').css('border', '');

        let isValid = true;

        if (!name) {
            $('#name').css('border', '2px solid red');
            isValid = false;
        }
        if (!phone) {
            $('#phone').css('border', '2px solid red');
            isValid = false;
        }
        if (!persons) {
            $('#persons').css('border', '2px solid red');
            isValid = false;
        }
        if (!date) {
            $('#date').css('border', '2px solid red');
            isValid = false;
        }
        if (!ticketType) {
            $('#ticket-type').css('border', '2px solid red');
            isValid = false;
        }

        if (!isValid) {
            alert('يرجى ملء الحقول الفارغة.');
        } else {
            alert('تم التسجيل بنجاح!');

            let row = `<tr>
                        <td>${name}</td>
                        <td>${phone}</td>
                        <td>${persons}</td>
                        <td>${date}</td>
                        <td>${ticketType}</td>
                       </tr>`;

            $('#booking-details tbody').append(row);
            $('#booking-details').fadeIn();
        }
    });
});


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, 
    spaceBetween: 30, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, 
    slideToClickedSlide: true, 
    slidesPerGroup: 1, 
});


document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', function() {
        
        if (this.nextElementSibling.style.display === 'none' || this.nextElementSibling.style.display === '') {
            this.nextElementSibling.style.display = 'block';
        } else {
            this.nextElementSibling.style.display = 'none';
        }
    });
});



