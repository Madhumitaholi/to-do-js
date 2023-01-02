let arr_of_obj = new Set();
let value_id;
let card_item;
let flag = false;
let subtask = new Map;

function modal(){
    document.getElementById("modaldiv").style.display = "block";
    document.getElementById("modaldiv").style.backdropFilter = "blur(5px)";

};
  

function addCard(){
    let card_title = document.getElementById("inputM-box").value;
    createObj(card_title);
    closeModal();
}

function closeModal(){
    document.getElementById("modaldiv").style.display = "none";
}

function createObj(title){
    document.getElementById("emptyList").style.display = "none";
    let card_of_obj ={
        title: title,
        id: Date.now(),
        subtask
    };
    arr_of_obj.add(card_of_obj);
    createCard(card_of_obj.id);

}


function addList(){
    let List_of_item = document.querySelector(".this-list-element").cloneNode(true);
    let card_of_item = document.getElementById("inputM-box-card").value;
    console.log(value_id);
    List_of_item.innerText =  card_of_item ;
    List_of_item.style.display = "block";
    List_of_item.setAttribute('id',`${Date.now()}`);
    List_of_item.setAttribute('value',`${Date.now()}`);
    List_of_item.setAttribute('style',"margin-left: 10px;");
    let done_button = document.createElement('button');
    done_button.setAttribute('id',`check-done-${Date.now()}`);
    done_button.setAttribute('class','completed');
    done_button.setAttribute('value',`${Date.now()}`);
    done_button.setAttribute('onclick','completedTask(this.value)');
    done_button.innerText = 'Mark as Done';
    done_button.setAttribute('style','font-size:15px; cursor:pointer; height:18px; border-radius:10px;');

    List_of_item.appendChild(done_button);

    List_of_item.setAttribute('onclick',"completedTask(this.value)");

    for(obj of arr_of_obj){
        for(prop in obj){
            if(obj.id == value_id){
                obj.subtask.set(`${card_item}`,`${Date.now()}`);
                break;
            }
        }
    }

    document.getElementById(`${value_id}`).getElementsByClassName('add-list')[0].appendChild(List_of_item).appendChild(done_button);
    closeCardModal();

}

function closeCardModal(){
    document.getElementById('modalDiv_card').style.display = "none";
}

function addSubtask(val) {
    document.getElementById("modalDiv_card").style.display = "block";
    value_id = val;
};


function deleteCard(val){
    var delete_div = document.getElementById(`${val}`);
    
    for(obj of arr_of_obj){
        for(prop in obj){
            if (obj.id==val)
            arr_of_obj.delete(obj);
            break;
        }
    }
    delete_div.parentNode.removeChild(delete_div);
    if(arr_of_obj.size==0){
        document.getElementById('emptyList').style.display = 'block';
    }
    
   
};

function createCard(){
    let first_card = document.querySelector('.card').cloneNode(true);
    display(first_card);
};


function completedTask(value){
    document.getElementById(`${value}`).style.textDecoration = 'line-through';
    document.getElementById(`${value}`).style.color = 'gray';
    document.getElementById(`check-done-${value}`).remove();
    
}


function display(card){
    document.getElementById('emptyList').style.display = 'none'
    arr_of_obj.forEach(element => {
        card.id = element.id;
        card.querySelector(".card-head").innerHTML = element.title;
        card.querySelector(".card-head").setAttribute('value',`${element.id}`);
        card.setAttribute("value",`${element.id}`);
        card.setAttribute("display","block");
        card.setAttribute("min-height","300px");
        card.querySelector(".delete-button-in-card").setAttribute("value",`${element.id}`);
        card.querySelector(".delete-button-in-card").setAttribute("onclick","deleteCard(this.value)");
        card.querySelector(".add-button-in-card").setAttribute("value",`${element.id}`);
        card.querySelector(".add-button-in-card").setAttribute("onclick","addSubtask(this.value)");    
    });
    if(flag)
    card.style.display = 'none';
    else
    card.style.display = "block";
    document.getElementById("outer_container").appendChild(card);
}

function headerFunc(val){
        
    for(let ele of arr_of_obj){
        for(let id in ele){
            if(ele[id]==val){
                card_header = ele.title;
                break;
            };
        };
    };
    
    document.querySelector(".back-button").style.display = 'inline';
    document.querySelector("#name_of_head").style.display = 'none';
    document.querySelector("#button_text").style.display = 'none';    

    
    for(let ele of arr_of_obj){

            if(ele.id==val){
                document.getElementById(`${ele.id}`).style.display = 'block';
            }
            else {
                document.getElementById(`${ele.id}`).style.display = 'none';
            }
    };
    
};