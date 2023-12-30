const showStyle = () => {
   const list = document.querySelectorAll('section')

   list.forEach(item => {
      item.addEventListener('click', e => {
         const curr = e.target
         if(curr.classList.contains('show-style')){
            item.querySelector('.style').classList.toggle('show')
         }
      })
   })
}
showStyle()

const showWidthDevise = () => {
   const el = document.createElement('div')
   el.classList.add('width-devise')
   const body = document.querySelector('body')
   const w = window.innerWidth
   el.innerHTML = `ширина экрана: ${w}`
   body.append(el)

}
showWidthDevise()