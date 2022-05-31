const btn_menu = document.querySelector('.header_menu-btn')
const btn_Xmark = document.querySelector('.header_menu-xmark')
const block_menu = document.querySelector('.menu_navbar')
const block_menu2 = document.querySelector('.menu_navbar2')

const btnNav = document.getElementsByClassName('nav_item');


function menu(){
    btn_menu.addEventListener("click",()=>{
        btn_menu.style.display = 'none'
        btn_Xmark.style.display = 'block'
        block_menu2.style.display = 'none'
        block_menu.style.display = 'block'
      
    })
    btn_Xmark.addEventListener("click",()=>{
        btn_menu.style.display = 'block'
        btn_Xmark.style.display = 'none'
    
        block_menu.style.display = 'none'
        block_menu2.style.display = 'block'
        
    })
}

export default menu();