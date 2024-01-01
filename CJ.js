
const hourArr = querySelectorAll('.time-block')

for (let i=0; i< hoursArr.length; i++) {

}



const hoursArr = document.querySelectorAll('.time-block')

const now = dayjs().format('H')

// color code the squares - done

for (let i = 0; i < hoursArr.length; i++){
    const hour = hoursArr[i].id.substring(5)

    if(now === hour){
        hoursArr[i].setAttribute('class', 'row time-block present')
    }
}

// save data to local storage - done

const buttonArr = document.querySelectorAll('button')
const textAreaArr = document.querySelectorAll('.description')

for (let i = 0; i < buttonArr.length; i++){
    const clickHandler = () => {
        const text = textAreaArr[i].value;
        localStorage.setItem(i, text)

    }

    buttonArr[i].addEventListener('click', clickHandler)
}


// get data from local storage

// loop

// localStorage.getItem()

// textAreaArr[i].value = whatever came back from local