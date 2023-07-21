import './less/index.less'

// LOAD EVENT 1
window.onload = function (evt) {
  console.log('event ${evt.type} fired! REady to go!')
  const heading = document.querySelector('h1')
  heading.textContent = 'READY TO GO!!'

  //COPY EVENT 2
  window.addEventListener('copy', () => {
      navigator.clipboard.readText()
      .then(text => {
        heading.textContent += text
      })
  }) 

  //CLICK EVENT 3
  document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')  
  })

  //DOUBLE CLICK EVENT 4
  document.body.addEventListener('dblclick', evt => {
      evt.target.innerHTML = ''
  })
  //KEYDOWN EVENT 5
  window.addEventListener('keydown', evt => {
      if (evt.key === 6) {
        document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
      }
  })
  //MOUSE-MOVE EVENT 6
  document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY } = evt
    //console.log(`mouse is at ${evt.clientX}, ${evt.clientY}`)
  })
  //MOUSE ENTER EVENT 7
  const destinations = document.querySelectorAll('.destination')
  for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.computedStyleMap.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
        destination.computedStyleMap.fontWeight = 'initial'
    }, 500)
  })
  }
}