var count =0;
function reject(){
    let pic = document.getElementById('pic');
    let sad = document.getElementById('sad');
    count++;
    if(count%4===1){
        pic.src='sad.gif';
        sad.textContent='Houy o eng hrrrr !😥';
    }else if(count%4==2){
        pic.src='really.gif';
        sad.textContent='Te min pit te !😭';
    }else if(count%4==3){
        pic.src='due.gif';
        sad.textContent='Jam merl chop slanh !😠';
    }else{
        pic.src='angry.gif';
        sad.textContent='stop pleam!😡';
    }
    
}

function agree(){
    let pic = document.getElementById('pic');
    let sad = document.getElementById('sad');

    pic.src='happy.gif';
    sad.textContent='yayyyyyyy!!!!!!😝😝😜😜';
}