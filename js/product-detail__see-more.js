const btnSeeMore = document.querySelector('.container__description-see-more');
const btnSeeMoreClose = document.querySelector('.container__description-close');
const blockDescription = document.querySelector('.container__description');


function seeMoreDescription(){
    btnSeeMore.addEventListener('click',()=>{
        blockDescription.style.height = 'unset';
        btnSeeMore.style.display = 'none'
        btnSeeMoreClose.style.display = 'block'
    })
    btnSeeMoreClose.addEventListener('click',()=>{
        blockDescription.style.height = '500px';
        btnSeeMoreClose.style.display = 'none'
        btnSeeMore.style.display = 'block'
    })
    
}

export default seeMoreDescription();



