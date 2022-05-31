const childImg = document.getElementsByClassName('child__item')
const descriptionProduct = document.getElementsByClassName('product__img')
const mainImg = document.querySelector('.main__img')

function selectImg(){
    for (let index = 0; index < childImg.length; index++) {
        mainImg.src = childImg[index].src;
        childImg[index].addEventListener('click',()=>{
            mainImg.src = childImg[index].src;
        })
        for (let i = 0; i < descriptionProduct.length; i++) {
            if(index == i){
                descriptionProduct[i].src = childImg[i].src;
            }
            
            
        }
    }
    // console.log(childImg)
    //     childImg.addEventListener('click',()=>{
    //         mainImg.src = childImg.src
            // console.log(childImg.src)
        // })
}
export default selectImg();