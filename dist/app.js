

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
                console.log(linkId)
                navLinks.forEach(link => {
                    if (linkId) {
                        if (`#${linkId}` === link.getAttribute('href')) {
                            link.classList.add('is-active')
                        } else {
                            link.classList.remove('is-active')
                        }
                    }
                })
                if (linkId && linkId === 're-vote') {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtZW51LmpzIiwib2JzZXJ2ZXIuanMiLCJzY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIlxyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2VyJylcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuY29uc3QgdG9nZ2xlTWVudSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGl0c0J1cmdlciA9IGJ1cmdlciA9PT0gdGFyZ2V0O1xyXG4gICAgY29uc3QgaXRzTWVudSA9IG1lbnUuY29udGFpbnModGFyZ2V0KSAmJiBlLnRhcmdldCA9PT0gbWVudSA7XHJcblxyXG4gICAgaWYgKGl0c0J1cmdlcikge1xyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbG9jaycpO1xyXG4gICAgfSBlbHNlIGlmICggIWl0c0J1cmdlciAmJiAhaXRzTWVudSkge1xyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCFidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG4iLCJjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKVxyXG5cclxuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVudSAubmF2X19saW5rJylcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJylcclxuXHJcbmlmIChzZWN0aW9ucyAmJiBuYXZMaW5rcykge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICByb290OiBudWxsLFxyXG4gICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXHJcbiAgICAgICAgdGhyZXNob2xkOiAwLjI1LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rSWQgPSBlbnRyeS50YXJnZXQuaWRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmtJZClcclxuICAgICAgICAgICAgICAgIG5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYCMke2xpbmtJZH1gID09PSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmtJZCAmJiBsaW5rSWQgPT09ICdyZS12b3RlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdvcmFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcmFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xyXG5cclxuICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKVxyXG4gICAgfSlcclxuXHJcbn1cclxuIiwiY29uc3QgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZio9XCIjXCJdJyk7XHJcblxyXG5mb3IgKGxldCBhbmNob3Igb2YgYW5jaG9ycykge1xyXG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2NrSUQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tJRCk7XHJcblxyXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L/QvtC30LjRhtC40Y4g0LHQu9C+0LrQsCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LLQtdGA0YXQvdC10Lkg0YfQsNGB0YLQuCDQtNC+0LrRg9C80LXQvdGC0LBcclxuICAgICAgICBjb25zdCBibG9ja1Bvc2l0aW9uID0gdGFyZ2V0QmxvY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyDQn9GA0L7QutGA0YPRh9C40LLQsNC10Lwg0Log0L/QvtC30LjRhtC40Lgg0LHQu9C+0LrQsCDRgSDRg9GH0LXRgtC+0Lwg0L7RgtGB0YLRg9C/0LAg0LIgMTAwcHhcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IGJsb2NrUG9zaXRpb24gLSA5MCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSJdfQ==
