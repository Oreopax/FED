

//script to change navbar to dark when scrolling down
var nav = document.querySelector('nav');

        window.addEventListener('scroll', function () {
            if(window.pageYOffset > 100){
                nav.classList.add('bg-dark','shadow');
            }else{
                nav.classList.remove('bg-dark', 'shadow')
            }
        });


//script for countdown in splife page
var x = setInterval(function() {
    //setting up date to countdown to 
    countdowndate = new Date(2025,4,1,0,0,0)

    //finding current date
    currentdate = new Date()

    //calculating days,hours,minutes and seconds left
    daysleft = (countdowndate.getFullYear() - currentdate.getFullYear()) * 365
    hoursleft = (24 - currentdate.getHours()) 
    minutesleft = (60 - currentdate.getMinutes()) 
    secondsleft = (60 - currentdate.getSeconds()) 
 
    //Display results
    document.getElementById("timer").innerHTML = 
    daysleft + " days " + hoursleft + "hrs " + minutesleft + "min " + secondsleft + "s until NS!";
}, 1000);