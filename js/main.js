var topBtn = document.getElementById('topBtn')
window.onscroll = function(){
    if (document.documentElement.scrollTop > 700){
        topBtn.style.display = 'block'
    }    
    else {
        topBtn.style.display = 'none' 
    }

}
topBtn.addEventListener('click' , function(){
    window.scroll({
        top :0 ,
        left :0 ,
        behavior :"smooth"
    })
})