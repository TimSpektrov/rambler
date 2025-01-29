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
