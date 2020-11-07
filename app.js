function digitalClock(){
    let date = new Date()
    let hours = date.getHours()
    let minitues = date.getMinutes()
    let seconds = date.getSeconds()
    let timeFormat = 'AM'

    if (hours > 12) {
        hours = hours - 12
        timeFormat = 'PM'
    }
    if (hours < 10) {
        hours = '0' + hours
        
    }
    if (minitues < 10) {
        minitues = '0' + minitues
        
    }
    if (seconds < 10) {
        seconds = '0' + seconds
        
    }


    let fullTime = `${hours}:${minitues}:${seconds}`
    document.getElementById("time").innerText = fullTime
    document.querySelector("small").innerText = timeFormat


    setInterval(digitalClock, 1000)
    
}

digitalClock()