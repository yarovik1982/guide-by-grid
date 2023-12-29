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