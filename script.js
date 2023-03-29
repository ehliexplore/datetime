function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hour_now = data.getHours()
    var minutes_now = data.getMinutes()
    var day_now = data.getDate()
    var month_now = data.getMonth()
    var year_now = data.getFullYear()
    
    msg.innerHTML = `<p>Now is ${hour_now}:${minutes_now}</p>`
    msg.innerHTML += `<p>${day_now}/${month_now}/${year_now}</p>`
    if (hour_now >= 0 && hour_now < 12) {
        // good morning
        img.src = 'morning.png'
        document.body.style.background = '#fee3b4'
    } else if (hour_now >= 12 && hour_now < 18) {
        // good afternoon
        document.body.style.background = '#4fa777'
        img.src = 'afternoon.png'
    } else {
        // good night
        img.src = 'night.png'
        document.body.style.background = '#001834'
    }
}
