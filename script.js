const toggleBtn = document.getElementById('toggle-btn')

const white = document.querySelectorAll('.white')

const dark = document.querySelectorAll('.dark')


toggleBtn.addEventListener('change', ()=>{

    if(toggleBtn.checked == true){
       document.body.style.backgroundColor = "white"
      for(let i = 0; i<dark.length; i++){
          dark[i].classList.remove('dark')
          dark[i].classList.add('bright')
      }

      for(let i = 0 ; i<white.length; i++){
          white[i].classList.remove('white')
      }
    }
    else{
        document.body.style.backgroundColor = "#1d2029"
        for(let i = 0; i<dark.length; i++){
            dark[i].classList.add('dark')
            dark[i].classList.remove('bright')
           
        }
  
        for(let i = 0 ; i<white.length; i++){
            white[i].classList.add('white')
        }
    }

})
