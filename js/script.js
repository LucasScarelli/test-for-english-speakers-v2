const englishWords = ['Hair', 'Forehead', 'Eyebrow', 'Eyes', 'Nose', 'Cheek', 'Beard', 'Mouth', 'Lip', 'Teeth', 'Tongue', 'Jaw', 'Neck', 'Throat', 'Shoulder', 'Arm', 'Muscle', 'Elbow', 'Fist', 'Hand', 'Veins', 'Fingers', 'Nails', 'Chest', 'Belly', 'Hip', 'Leg', 'Thigh', 'Knee', 'Foot']
const ptbrWords = ['Cabelo', 'Testa', 'Sobrancelha', 'Olhos', 'Nariz', 'Bochecha', 'Barba', 'Boca', 'Lábio', 'Dentes', 'Língua', 'Mandíbula', 'Pescoço', 'Garganta', 'Ombro', 'Braço', 'Músculo', 'Cotovelo', 'Punho', 'Mão', 'Veias', 'Dedos', 'Unhas', 'Peito', 'Barriga', 'Quadril', 'Perna', 'Coxa', 'Joelho', 'Pé']

const mainContents = document.querySelector('.main-contents')

const list = document.createElement('ul')

list.classList = 'words-list'
mainContents.appendChild(list)
const wordsList = document.querySelector('.words-list')

for (let i = 0; i < englishWords.length; i++) {

    const li = document.createElement('li')

    const label = document.createElement('label')
    label.textContent = englishWords[i]
    label.setAttribute('for', `word-${i}`)
    li.appendChild(label)

    const input = document.createElement('input')
    input.id = `word-${i}`
    li.appendChild(input)

    wordsList.appendChild(li)
}

const submitBtn = document.querySelector('#submit-btn')
submitBtn.addEventListener('click', function() {
    const resp = document.getElementsByTagName('input')

    for (let i = 0; i < resp.length; i++) {
        const parent = resp[i].parentNode
        if (resp[i].value.trim() === ptbrWords[i]){
            resp[i].setAttribute('disabled', 'disabled')
            resp[i].style.cssText = 'border: 0.1em solid #03A63C; border-bottom: none;'
            parent.style.cssText = 'border-bottom: 1px solid #03A63C;'
        } else {
            if (resp[i].value !== ''){
                resp[i].style.cssText = 'border: 0.1em solid #D92B04; border-bottom: none;'
                parent.style.cssText = 'border-bottom: 1px solid #D92B04;'
            }
        }
    }})