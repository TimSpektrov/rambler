

const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
const body = document.body
const toggleMenu = (e) => {
    const target = e.target;
    const itsBurger = burger === target;
    const itsMenu = menu.contains(target) && e.target === menu ;

    if (itsBurger) {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        body.classList.toggle('lock');
    } else if ( !itsBurger && !itsMenu) {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        body.classList.remove('lock');
        document.removeEventListener('click', toggleMenu);
    }
}

burger.addEventListener("click", () => {
    if (!burger.classList.contains('is-active')) {
        document.addEventListener('click', toggleMenu);
    }
})


const sections = document.querySelectorAll('section')

const navLinks = document.querySelectorAll('#menu .nav__link')

if (sections && navLinks) {
    const options = {
        rootMargin: "0px",
        threshold: 0.4,
    };

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const linkId = entry.target.id
                navLinks.forEach(link => {
                    if (linkId) {
                        if (`#${linkId}` === link.getAttribute('href')) {
                            link.classList.add('is-active')
                        } else {
                            link.classList.remove('is-active')
                        }
                    }

                })

            }
        });
    };


    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section)
    })

}

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtZW51LmpzIiwib2JzZXJ2ZXIuanMiLCJzY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIlxyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJylcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuY29uc3QgdG9nZ2xlTWVudSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGl0c0J1cmdlciA9IGJ1cmdlciA9PT0gdGFyZ2V0O1xyXG4gICAgY29uc3QgaXRzTWVudSA9IG1lbnUuY29udGFpbnModGFyZ2V0KSAmJiBlLnRhcmdldCA9PT0gbWVudSA7XHJcblxyXG4gICAgaWYgKGl0c0J1cmdlcikge1xyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbG9jaycpO1xyXG4gICAgfSBlbHNlIGlmICggIWl0c0J1cmdlciAmJiAhaXRzTWVudSkge1xyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCFidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG4iLCJjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKVxyXG5cclxuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVudSAubmF2X19saW5rJylcclxuXHJcbmlmIChzZWN0aW9ucyAmJiBuYXZMaW5rcykge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICByb290TWFyZ2luOiBcIjBweFwiLFxyXG4gICAgICAgIHRocmVzaG9sZDogMC40LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rSWQgPSBlbnRyeS50YXJnZXQuaWRcclxuICAgICAgICAgICAgICAgIG5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYCMke2xpbmtJZH1gID09PSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcclxuXHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbilcclxuICAgIH0pXHJcblxyXG59XHJcbiIsImNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xyXG5cclxuZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBibG9ja0lEID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cigxKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJsb2NrSUQpO1xyXG5cclxuICAgICAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INC/0L7Qt9C40YbQuNGOINCx0LvQvtC60LAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INCy0LXRgNGF0L3QtdC5INGH0LDRgdGC0Lgg0LTQvtC60YPQvNC10L3RgtCwXHJcbiAgICAgICAgY29uc3QgYmxvY2tQb3NpdGlvbiA9IHRhcmdldEJsb2NrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgLy8g0J/RgNC+0LrRgNGD0YfQuNCy0LDQtdC8INC6INC/0L7Qt9C40YbQuNC4INCx0LvQvtC60LAg0YEg0YPRh9C10YLQvtC8INC+0YLRgdGC0YPQv9CwINCyIDEwMHB4XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiBibG9ja1Bvc2l0aW9uIC0gOTAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iXX0=
