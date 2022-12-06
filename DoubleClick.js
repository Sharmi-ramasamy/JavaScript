    let aside=document.querySelector("aside");
    
    size=false;

    aside.addEventListener('dblclick',()=> {
        if (size===false) {
            aside.style.height="300px";
            aside.style.width="300px"
            size=true;
        }
        else if (size===true) {
            aside.style.height="250px";
            aside.style.width="250px"
            size=false;
        }

    })


    