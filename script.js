const localstore = 'pendente';
const concluidos = 'concluidos';

//Confere se a task ja esta contida 
function validaTask() {
    let values = JSON.parse(localStorage.getItem(localstore) || "[]");
    let inputValue = document.getElementById('new_task').value;
    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true;
}

//Cria task
function newTask() {
    let input = document.getElementById('new_task');
    if (!input.value) {
        alert("Insira Alguma Tarefa!");
        input.value = '';

    }
    else if (validaTask()) {
        alert("Ja existe uma tarefa com esse nome!");
        input.value = '';
    }

    else {
        //Armazena diretamente no localstorage
        let values = JSON.parse(localStorage.getItem(localstore) || "[]");
        values.push({ name: input.value });
        localStorage.setItem(localstore, JSON.stringify(values));
        show();
    }
    input.value = '';
    show();
}

function show() {

    //Mostra as 2 listas sempre que chamado
    let values = JSON.parse(localStorage.getItem(localstore) || "[]");
    let values2 = JSON.parse(localStorage.getItem(concluidos) || "[]");

    let lista = document.getElementById('listaPendente');
    let element = document.getElementById('listaConcluida');

    element.innerHTML = "";
    lista.innerHTML = "";
    
    lista.innerHTML = '';
    //Percorre a lista de valores adicionados
    for (let i = 0; i < values.length; i++) {
        lista.innerHTML += `<li>${values[i]['name']}
        <button id='remover' onclick='removeItem("${values[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
        </button>
        </li>`
    }
    //Percorre a lista de valores removidos
    for (let i = 0; i < values2.length; i++) {
        if(values2[i].name)
        element.innerHTML += `<li>${values2[i].name}
        <button id='adicionar' onclick='removeItemConcluido("${values2[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        </button>
        </li>`
    }
}
//auxilia na adição de uma tarefa na lista de concluidos
function concluiItem(data) {
    let values = JSON.parse(localStorage.getItem(concluidos) || "[]");
    values.push(...data);
    localStorage.setItem(concluidos, JSON.stringify(values));
    show();
}
//Adiciona uma tarefa na lista de concluidos
function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localstore) || "[]");
    let index = values.findIndex(x => x.name == data);
    var aux = values.splice(index, 1);
    localStorage.setItem(localstore, JSON.stringify(values));
    concluiItem(aux);
    show()
}
//Remove um item da lista de concluidos
function removeItemConcluido(data) {
    let values = JSON.parse(localStorage.getItem(concluidos) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1);
    localStorage.setItem(concluidos, JSON.stringify(values));
    show();
}   
show()
