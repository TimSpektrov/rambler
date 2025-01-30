

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
const header = document.querySelector('header')

if (sections && navLinks) {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
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
                if (linkId && linkId === 'online-voting') {
                    header.classList.add('orange');
                } else  {
                    header.classList.remove('orange');
                }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtZW51LmpzIiwib2JzZXJ2ZXIuanMiLCJzY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCJcclxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcicpXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XHJcbmNvbnN0IHRvZ2dsZU1lbnUgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBpdHNCdXJnZXIgPSBidXJnZXIgPT09IHRhcmdldDtcclxuICAgIGNvbnN0IGl0c01lbnUgPSBtZW51LmNvbnRhaW5zKHRhcmdldCkgJiYgZS50YXJnZXQgPT09IG1lbnUgO1xyXG5cclxuICAgIGlmIChpdHNCdXJnZXIpIHtcclxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2xvY2snKTtcclxuICAgIH0gZWxzZSBpZiAoICFpdHNCdXJnZXIgJiYgIWl0c01lbnUpIHtcclxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnUpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuIiwiY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJylcclxuXHJcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lbnUgLm5hdl9fbGluaycpXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpXHJcblxyXG5pZiAoc2VjdGlvbnMgJiYgbmF2TGlua3MpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgICByb290TWFyZ2luOiBcIjBweFwiLFxyXG4gICAgICAgIHRocmVzaG9sZDogMC4yNSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlua0lkID0gZW50cnkudGFyZ2V0LmlkXHJcbiAgICAgICAgICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGAjJHtsaW5rSWR9YCA9PT0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChsaW5rSWQgJiYgbGlua0lkID09PSAnb25saW5lLXZvdGluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnb3JhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3JhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcclxuXHJcbiAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbilcclxuICAgIH0pXHJcblxyXG59XHJcbiIsImNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpO1xyXG5cclxuZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBibG9ja0lEID0gYW5jaG9yLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cigxKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJsb2NrSUQpO1xyXG5cclxuICAgICAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INC/0L7Qt9C40YbQuNGOINCx0LvQvtC60LAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INCy0LXRgNGF0L3QtdC5INGH0LDRgdGC0Lgg0LTQvtC60YPQvNC10L3RgtCwXHJcbiAgICAgICAgY29uc3QgYmxvY2tQb3NpdGlvbiA9IHRhcmdldEJsb2NrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgLy8g0J/RgNC+0LrRgNGD0YfQuNCy0LDQtdC8INC6INC/0L7Qt9C40YbQuNC4INCx0LvQvtC60LAg0YEg0YPRh9C10YLQvtC8INC+0YLRgdGC0YPQv9CwINCyIDEwMHB4XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiBibG9ja1Bvc2l0aW9uIC0gOTAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iXX0=
