const timer = () => {
  const countdown = () => {
    const countDate = new Date('May 6, 2030 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.hours').innerText = textHour
    document.querySelector('.minutes').innerText = textMinute
    document.querySelector('.seconds').innerText = textSecond
  }

  setInterval(countdown, 1000)
}

export default timer
