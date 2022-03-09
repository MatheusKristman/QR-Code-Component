$(document).ready(()=>{
    if(screen.width <= 375){
        $('.container a').on('click', (event) =>{
            event.preventDefault();
        })
    }
});