const btnNav = document.getElementsByClassName('nav__item');


function navItemActive(){
    
    for (let i = 0; i < btnNav.length; i++) {
        btnNav[i].addEventListener('click',()=>{
            for (let index = 0; index < btnNav.length; index++) {
                btnNav[index].classList.remove('page_active')
                
            }
            btnNav[i].classList.add('page_active')
        })
        
    }

}

export default navItemActive();