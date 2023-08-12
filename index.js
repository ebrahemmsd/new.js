var input = document.querySelector('input')
var btn = document.querySelector('#form > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.keycode === 13 ? addList(e) : null);
})

function addList(e){
    e.preventDefault();
    var notCompleted = document.querySelector('.notcompleted');
    var Completed = document.querySelector('.completed');

    var newLi = document.createElement('li');
    var checkBtn = document.createElement('button');
    var delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = ' <i class="fa fa-trash"></i>';

    // checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    // delBtn.innerHTML = ' <i class="fa-solid fa-trash"></i>';

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn)

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
 

