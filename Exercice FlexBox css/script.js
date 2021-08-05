document.addEventListener('DOMContentLoaded', () =>{
    
    const sectionTwo = document.querySelector('.section-two');
    sectionTwo.addEventListener('click', event =>{

        if(event.target !== event.currentTarget){

            if(event.target.classList.contains('selected')){
                event.target.classList.remove('selected');
            }else{
              const selectedIdItem =  document.querySelector('.selected');
              selectedIdItem && selectedIdItem.removeAttribute('class');

              event.target.classList.add('selected');
            }
        }
    })
})