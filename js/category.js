const btnCategoryOn = document.querySelector('.category');
const blockCategory = document.querySelector('.container__left');
const btnCategoryOff = document.querySelector('.category-second');

function category(){
    btnCategoryOn.addEventListener('click',()=>{
        blockCategory.style.display = 'block'
        btnCategoryOn.style.display = 'none'
        btnCategoryOff.style.display = 'block'
    })
    btnCategoryOff.addEventListener('click',()=>{
        blockCategory.style.display = 'none'
        btnCategoryOn.style.display = 'block'
        btnCategoryOff.style.display = 'none'
    })
}export default category();