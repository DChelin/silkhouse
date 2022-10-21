$(document).ready(function() {

    const body = document.querySelector('body');

/* 
*  ==================================================
*  ======= Shop Sidebar Filter Category =================
*  ================================================== 
*/
    if(body.classList.contains('woocommerce-page')) {
        const catItem = document.querySelectorAll('.cat-parent');
        const catChildren = document.querySelectorAll('ul.children');
        catItem.forEach((i, index) => {
            // console.log(catItem[index]);
            const dropDown = document.createElement('span');
            dropDown.classList.add('sym');
            dropDown.innerText = '+';
            i.appendChild(dropDown);
            
            
            dropDown.addEventListener('click', () => {
                if(catChildren[index].classList.contains('active-category')) {
                    catChildren[index].classList.remove('active-category');
                    dropDown.innerText = '+';
                } else {
                    catChildren[index].classList.add('active-category');
                    dropDown.innerText = '>';
                }
                // catChildren[index].classList.toggle('active-category');
            })

            
        })
        

    }


});

document.addEventListener('DOMContentLoaded', function () {
    
    if(document.querySelector('.woocommerce-wishlist')) {
        change_wishlist_to_moodboard();
    }

}, false);

function change_wishlist_to_moodboard() {

    const nameChange = document.querySelector('.wishlist-name span')
    const backNameChange = document.querySelector('.back-to-all-wishlists a')

    if(nameChange) {
        nameChange.innerHTML = 'Moodboard'
    } 
    if(backNameChange) { 
        backNameChange.innerHTML = '‹ Back to all moodboards'
    }

}
