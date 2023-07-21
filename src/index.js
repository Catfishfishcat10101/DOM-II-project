import './less/index.less'

// LOAD EVENT
window.onload = function (evt) {
  console.log('event ${evt.type} fired! REady to go!')
  const heading = document.querySelector('h1')
  heading.textContent = 'READY TO GO!!'

  //COPY EVENT
  window.addEventListener('copy', () => {
      navigator.clipboard.readText()
      .then(text => {
        heading.textContent += text
      })
  }) 

  //CLICK EVENT
  document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')  
  })

  //DOUBLE CLICK EVENT
  document.body.addEventListener('dblclick', evt => {
      evt.target.innerHTML = ''
  })
  //KEYDOWN EVENT
  window.addEventListener('keydown', evt => {
      if (evt.key === 6) {
        document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
      }
  })
  //MOUSE-MOVE EVENT
  document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY } = evt
    //console.log(`mouse is at ${evt.clientX}, ${evt.clientY}`)
  })
  //MOUSE ENTER EVENT
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