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
        document.body.innerHTML = 'YOU RAN ORDER 66'
      }
  })
}

