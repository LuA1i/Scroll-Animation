const hiddenClass = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('its intersecting')
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

hiddenClass.forEach((el) => observer.observe(el))
