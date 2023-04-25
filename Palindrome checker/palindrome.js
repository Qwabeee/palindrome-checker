const textInput = document.querySelector('.inputs input');
const checkBtn = document.querySelector('.inputs button');
const infoTxt = document.querySelector('.info-txt');
let filtered

checkBtn.addEventListener('click', () =>{
    let reverseInput = filtered.split('').reverse().join('');
    infoTxt.style.display = 'block';
    if(reverseInput != filtered){
        return infoTxt.innerHTML = `No, <span>'${textInput.value}'</span> isn't a Palindrome`
    }
    return infoTxt.innerHTML = `Yes, <span>'${textInput.value}'</span> is a Palindrome`
    
})

textInput.addEventListener('keyup', () => {
    infoTxt.style.display = 'block';
    filtered = textInput.value.replace(/[^A-Z0-9]/ig, '')
    if(filtered){
        return checkBtn.classList.add('active');
    }
    checkBtn.classList.remove('active');
})


//fix the issue about the symbols