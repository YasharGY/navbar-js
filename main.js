let dropbtn = document.querySelectorAll(".dropbtn")
let dropdown = document.querySelectorAll(".dropdown-content")

dropbtn.forEach((btn, index) => {
  let open = false

  btn.addEventListener('click', ()=>{
    if(!open){
      dropdown[index].style.display='block'
    }
    else{
      dropdown[index].style.display='none'
    }
    open = !open
  })

})
window.addEventListener('click', (event) => {
  dropbtn.forEach((btn, index) => {
    if (event.target !== btn && event.target !== dropdown[index]) {
      dropdown[index].style.display = 'none'
      open = false
    }
  })
})