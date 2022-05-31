const Star = document.getElementsByClassName('card__rated-item')


function activeStar() {
    for (let j = 0; j < Star.length; j++) {
        Star[j].classList.remove('card__rated-item-active')
        
    }
    for (let index = 0; index < Star.length; index++) {
        Star[index].addEventListener('click',()=>{
            for (let i = 0; i <= index; i++) {
                Star[i].classList.add('card__rated-item-active')
                
            }
        })
        
    }
}
function activeLike(){
    
}
export default activeStar();