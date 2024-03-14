const tablinks = document.querySelectorAll('.tab-links')
const tabContents = document.querySelectorAll('.tab-contents')
const sidemenu = document.getElementById('sidemenu')
const closeMenu = document.querySelector('ul').lastElementChild
const openeMenu = document.querySelector('nav').lastElementChild


openeMenu.addEventListener('click', ()=>{
    sidemenu.style.right = "0"; 
})

closeMenu.addEventListener('click',()=>{
    sidemenu.style.right = "-200px"
})

tablinks.forEach((tablink, index)=>{
   tablink.addEventListener('click', ()=>{
    tablinks.forEach(tablink=>{
        tablink.classList.remove('active-link');
    });
    tablink.classList.add('active-link');

    tabContents.forEach(tabContent=>{
        tabContent.classList.remove('active-tab');
    });
    tabContents[index].classList.add('active-tab');
});
});
