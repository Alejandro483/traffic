

// THis is the bulb.
let stopLight = document.getElementById('stop-light');
let stopButton = document.getElementById('stop-button');
let goButton = document.getElementById('go-button')
let slowButton = document.getElementById('slow-button')


stopButton.addEventListener("click", () => {
            // Here is the fucntion
    stopLight.classList.add('red')
   
    if(document.getElementById('slow-light').classList.contains('yellow')){
        document.getElementById('slow-light').classList.remove('yellow')
    }
    if(document.getElementById('go-light').classList.contains('green')){
        document.getElementById('go-light').classList.remove('green')
    }
    })
slowButton.addEventListener("click", () => {
    document.getElementById('slow-light').classList.add('yellow')
    if(document.getElementById('stop-light').classList.contains('red')){
        document.getElementById('stop-light').classList.remove('red')
    }
    if(document.getElementById('go-light').classList.contains('green')){
        document.getElementById('go-light').classList.remove('green')
    }   
        })
goButton.addEventListener("click", () => {
    document.getElementById('go-light').classList.add('green')
    if(document.getElementById('slow-light').classList.contains('yellow')){
        document.getElementById('slow-light').classList.remove('yellow')
    }
    if(document.getElementById('stop-light').classList.contains('red')){
        document.getElementById('stop-light').classList.remove('red')
    }
})
