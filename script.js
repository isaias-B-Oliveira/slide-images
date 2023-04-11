const control = document.querySelectorAll(".control");
let currentiten = 0;
const items = document.querySelectorAll(".item");
const maxitem = items.length;

control.forEach(control => {
    control.addEventListener('click',() => {
        const isleft = control.classList.contains("arrow-left");

        if(isleft){
            currentiten -=1; 
        }else{
            currentiten +=1;
        }

        if(currentiten >= maxitem){
            currentiten = 0;
        }
        if(currentiten < 0){
            currentiten = maxitem -1;
        }

        items.forEach(item => item.classList.remove('currentiten'));
        items[currentiten].scrollIntoView({inline: "center", behavior:"smooth",});
        items[currentiten].classList.add("currentiten");


    })
})
