const toggleBtn = document.getElementById('toggle-btn')

const white = document.querySelectorAll('.white')

const dark = document.querySelectorAll('.dark')

const darkMode = document.getElementById('mode-text')

const content = document.getElementById('container')

toggleBtn.addEventListener('change', ()=>{

    if(toggleBtn.checked == true){

        darkMode.innerHTML = 'Light Mode'

        content.classList.remove('container')
        content.classList.add('container-2')

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
        content.classList.add('container')
        content.classList.remove('container-2')

        darkMode.innerHTML = 'Dark Mode'

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
