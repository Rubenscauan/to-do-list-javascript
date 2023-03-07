const localstore = 'to-do-list'

function validaTask(){
    let values = JSON.parse(localStorage.getItem(localstore) || "[]")
    let inputValue = document.getElementById('new_task').value
    let exists= values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask(){
    let input = document.getElementById('new_task')
    if(!input.value){
        alert("Insira Alguma Tarefa!")
    }
    else if(validaTask()){
        alert("Ja existe uma tarefa com esse nome!")
    }

    else{
        let values = JSON.parse(localStorage.getItem(localstore) || "[]")
        values.push({name: input.value})
        localStorage.setItem(localstore,JSON.stringify(values))
        show()
    }
    input.value = ''
}

function show(){
    let values = JSON.parse(localStorage.getItem(localstore) || "[]")
    let lista = document.getElementById('listaPendente')
    lista.innerHTML = ''
    for(let i = 0; i < values.length; i++){
        
        lista.innerHTML += `<li>${values[i]['name']}
        <button id='remover' onclick='removeItem("${values[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
        </button>
        </li>`
    }    
}

function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localstore) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localstore,JSON.stringify(values))
    show()
    

}

show()
