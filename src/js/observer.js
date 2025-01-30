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
