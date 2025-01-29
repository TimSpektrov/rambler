const content = document.querySelector('.hero .title')
const text = ['Все ', 'об\u00A0онлайн-', 'голосовании ', 'в\u00A0Москве']
// content.textContent = ''

for (let i in text) {
    let letter = document.createElement('span')
    letter.textContent = text[i]
    if (text[i].at(-1) === ' ') {
        letter.style.marginRight = '0.2em';
    }
    letter.style.animationDelay = (1 + (+i * 0.2)) + 's';
    content.appendChild(letter)
}