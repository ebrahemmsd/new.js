var input = document.querySelector('input')
var btn = document.querySelector('#form > button');


btn.addEventListener('click', addList);


function addList(e){
    e.preventDefault();
    var notCompleted = document.querySelector('.notcompleted');
    var Completed = document.querySelector('.completed');

    var newLi = document.createElement('li');
    var checkBtn = document.createElement('button');
    var delBtn = document.createElement('button');
   

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = ' <i class="fa fa-trash"></i>';

   

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
       
    }

    checkBtn.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    })

    delBtn.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
        
    })
}
 
function getDate(){
    var date = new Date()
    var datee = document.createElement('dt')
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
    newLi.appendChild(`${getDate}`);
}

// getDate()




function getTime(){
    var date=new Date()
    var hrs=(date.getHours() < 10)? `0${date.getHours()}`:date.getHours()
    var mins=(date.getMinutes() < 10)?`0${date.getMinutes()}`:date.getMinutes()
    var secs=(date.getSeconds() < 10)?`0${date.getSeconds()}`:date.getSeconds()
    console.log(`${hrs}:${mins}:${secs}`)
    newLi.appendChild(`${hrs}:${mins}:${secs}`)
    var timee = document.createElement('tm')
}
// getTime()

// function checkItem(input){
    // if(input.value.includes(input)){
    //     console.log("Repeated!!!!!");
    //     errorRepeated()
    // }else if(input ==""){
    //     errorEmpty()
    // }
    // else {
    //     pushToArray(input)
    // }
// }




// function errRepeated(){
//     var error=document.querySelector("#err");
//     error.textContent="Sorry this item is already exist, you have to add a new item!"
// }



// function errEmpty(){
//     var err=document.querySelector("#err");
//     error.textContent="Sorry, you can not add an empty item!"
// }
