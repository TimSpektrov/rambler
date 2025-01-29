const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);
        const targetBlock = document.getElementById(blockID);

        // Получаем позицию блока относительно верхней части документа
        const blockPosition = targetBlock.getBoundingClientRect().top + window.pageYOffset;

        // Прокручиваем к позиции блока с учетом отступа в 100px
        window.scrollTo({
            top: blockPosition - 90,
            behavior: 'smooth'
        });
    });
}