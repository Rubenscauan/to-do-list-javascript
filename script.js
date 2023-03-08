const localstoreEscola = 'pendenteEscola';
const concluidosEscola = 'concluidosEscola';


//Confere se a task ja esta contida 
function validaTaskEscola() {
    let values = JSON.parse(localStorage.getItem(localstoreEscola) || "[]");
    let inputValue = document.getElementById('new_taskEscola').value;
    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true;
}

//Cria task
function newTaskEscola() {
    let input = document.getElementById('new_taskEscola');
    if (!input.value) {
        alert("Insira Alguma Tarefa!");
        input.value = '';

    }
    else if (validaTaskEscola()) {
        alert("Ja existe uma tarefa com esse nome!");
        input.value = '';
    }

    else {
        //Armazena diretamente no localstorage
        let values = JSON.parse(localStorage.getItem(localstoreEscola) || "[]");
        values.push({ name: input.value });
        localStorage.setItem(localstoreEscola, JSON.stringify(values));
        showEscola();
    }
    input.value = '';
    showEscola();
}

function showEscola() {

    //Mostra as 2 listas sempre que chamado
    let values = JSON.parse(localStorage.getItem(localstoreEscola) || "[]");
    let values2 = JSON.parse(localStorage.getItem(concluidosEscola) || "[]");

    let lista = document.getElementById('listaPendenteEscola');
    let element = document.getElementById('listaConcluidaEscola');

    element.innerHTML = "";
    lista.innerHTML = "";
    
    lista.innerHTML = '';
    //Percorre a lista de valores adicionados
    for (let i = 0; i < values.length; i++) {
        lista.innerHTML += `<li>${values[i]['name']}
        <button id='removerEscola' onclick='removeItemEscola("${values[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
        </button>
        </li>`
    }
    //Percorre a lista de valores removidos
    for (let i = 0; i < values2.length; i++) {
        if(values2[i].name)
        element.innerHTML += `<li>${values2[i].name}
        <button id='adicionarEscola' onclick='removeItemConcluidoEscola("${values2[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        </button>
        </li>`
    }
}
//auxilia na adição de uma tarefa na lista de concluidos
function concluiItemEscola(data) {
    let values = JSON.parse(localStorage.getItem(concluidosEscola) || "[]");
    values.push(...data);
    localStorage.setItem(concluidosEscola, JSON.stringify(values));
    showEscola();
}
//Adiciona uma tarefa na lista de concluidos
function removeItemEscola(data) {
    let values = JSON.parse(localStorage.getItem(localstoreEscola) || "[]");
    let index = values.findIndex(x => x.name == data);
    var aux = values.splice(index, 1);
    localStorage.setItem(localstoreEscola, JSON.stringify(values));
    concluiItemEscola(aux);
    showEscola()
}
//Remove um item da lista de concluidos
function removeItemConcluidoEscola(data) {
    let values = JSON.parse(localStorage.getItem(concluidosEscola) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1);
    localStorage.setItem(concluidosEscola, JSON.stringify(values));
    showEscola();
} 

//////////////////////////////////////////////////////////////////////////
const localstoreTrabalho = 'pendentePessoalTrabalho';
const concluidosTrabalho = 'concluidosPessoalTrabalho';

//Confere se a task ja esta contida 
function validaTaskTrabalho() {
    let values = JSON.parse(localStorage.getItem(localstoreTrabalho) || "[]");
    let inputValue = document.getElementById('new_taskTrabalho').value;
    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true;
}

//Cria task
function newTaskTrabalho() {
    let input = document.getElementById('new_taskTrabalho');
    if (!input.value) {
        alert("Insira Alguma Tarefa!");
        input.value = '';

    }
    else if (validaTaskTrabalho()) {
        alert("Ja existe uma tarefa com esse nome!");
        input.value = '';
    }

    else {
        //Armazena diretamente no localstorage
        let values = JSON.parse(localStorage.getItem(localstoreTrabalho) || "[]");
        values.push({ name: input.value });
        localStorage.setItem(localstoreTrabalho, JSON.stringify(values));
        showTrabalho();
    }
    input.value = '';
    showTrabalho();
}

function showTrabalho() {

    //Mostra as 2 listas sempre que chamado
    let values = JSON.parse(localStorage.getItem(localstoreTrabalho) || "[]");
    let values2 = JSON.parse(localStorage.getItem(concluidosTrabalho) || "[]");

    let lista = document.getElementById('listaPendenteTrabalho');
    let element = document.getElementById('listaConcluidaTrabalho');

    element.innerHTML = "";
    lista.innerHTML = "";
    
    lista.innerHTML = '';
    //Percorre a lista de valores adicionados
    for (let i = 0; i < values.length; i++) {
        lista.innerHTML += `<li>${values[i]['name']}
        <button id='removerTrabalho' onclick='removeItemTrabalho("${values[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
        </button>
        </li>`
    }
    //Percorre a lista de valores removidos
    for (let i = 0; i < values2.length; i++) {
        if(values2[i].name)
        element.innerHTML += `<li>${values2[i].name}
        <button id='adicionarTrabalho' onclick='removeItemConcluidoTrabalho("${values2[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        </button>
        </li>`
    }
}
//auxilia na adição de uma tarefa na lista de concluidos
function concluiItemTrabalho(data) {
    let values = JSON.parse(localStorage.getItem(concluidosTrabalho) || "[]");
    values.push(...data);
    localStorage.setItem(concluidosTrabalho, JSON.stringify(values));
    showPessoal();
}
//Adiciona uma tarefa na lista de concluidos
function removeItemTrabalho(data) {
    let values = JSON.parse(localStorage.getItem(localstoreTrabalho) || "[]");
    let index = values.findIndex(x => x.name == data);
    var aux = values.splice(index, 1);
    localStorage.setItem(localstoreTrabalho, JSON.stringify(values));
    concluiItemTrabalho(aux);
    showTrabalho()
}
//Remove um item da lista de concluidos
function removeItemConcluidoTrabalho(data) {
    let values = JSON.parse(localStorage.getItem(concluidosTrabalho) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1);
    localStorage.setItem(concluidosTrabalho, JSON.stringify(values));
    showTrabalho();
}   

//////////////////////////////////////////////////////////////////////////
const localstorePessoal = 'pendentePessoal';
const concluidosPessoal = 'concluidosPessoal';

//Confere se a task ja esta contida 
function validaTaskPessoal() {
    let values = JSON.parse(localStorage.getItem(localstorePessoal) || "[]");
    let inputValue = document.getElementById('new_taskPessoal').value;
    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true;
}

//Cria task
function newTaskPessoal() {
    let input = document.getElementById('new_taskPessoal');
    if (!input.value) {
        alert("Insira Alguma Tarefa!");
        input.value = '';

    }
    else if (validaTaskPessoal()) {
        alert("Ja existe uma tarefa com esse nome!");
        input.value = '';

    }

    else {
        //Armazena diretamente no localstorage
        let values = JSON.parse(localStorage.getItem(localstorePessoal) || "[]");
        values.push({ name: input.value });
        localStorage.setItem(localstorePessoal, JSON.stringify(values));
        showPessoal();
    }
    input.value = '';
    showPessoal();
}

function showPessoal() {

    //Mostra as 2 listas sempre que chamado
    let values = JSON.parse(localStorage.getItem(localstorePessoal) || "[]");
    let values2 = JSON.parse(localStorage.getItem(concluidosPessoal) || "[]");

    let lista = document.getElementById('listaPendentePessoal');
    let element = document.getElementById('listaConcluidaPessoal');

    element.innerHTML = "";
    lista.innerHTML = "";
    
    lista.innerHTML = '';
    //Percorre a lista de valores adicionados
    for (let i = 0; i < values.length; i++) {
        lista.innerHTML += `<li>${values[i]['name']}
        <button id='removerPessoal' onclick='removeItemPessoal("${values[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
        </button>
        </li>`
    }
    //Percorre a lista de valores removidos
    for (let i = 0; i < values2.length; i++) {
        if(values2[i].name)
        element.innerHTML += `<li>${values2[i].name}
        <button id='adicionarPessoal' onclick='removeItemConcluidoPessoal("${values2[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        </button>
        </li>`
    }
}
//auxilia na adição de uma tarefa na lista de concluidos
function concluiItemPessoal(data) {
    let values = JSON.parse(localStorage.getItem(concluidosPessoal) || "[]");
    values.push(...data);
    localStorage.setItem(concluidosPessoal, JSON.stringify(values));
    showPessoal();
}
//Adiciona uma tarefa na lista de concluidos
function removeItemPessoal(data) {
    let values = JSON.parse(localStorage.getItem(localstorePessoal) || "[]");
    let index = values.findIndex(x => x.name == data);
    var aux = values.splice(index, 1);
    localStorage.setItem(localstorePessoal, JSON.stringify(values));
    concluiItemPessoal(aux);
    showPessoal()
}
//Remove um item da lista de concluidos
function removeItemConcluidoPessoal(data) {
    let values = JSON.parse(localStorage.getItem(concluidosPessoal) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1);
    localStorage.setItem(concluidosPessoal, JSON.stringify(values));
    showPessoal();
}   

//////////////////////////////////////////////////////////////////////////
const localstoreOutros = 'pendenteOutros';
const concluidosOutros = 'concluidosOutros';

//Confere se a task ja esta contida 
function validaTaskOutros() {
    let values = JSON.parse(localStorage.getItem(localstoreOutros) || "[]");
    let inputValue = document.getElementById('new_taskOutros').value;
    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true;
}

//Cria task
function newTaskOutros() {
    let input = document.getElementById('new_taskOutros');
    if (!input.value) {
        alert("Insira Alguma Tarefa!");
        input.value = '';

    }
    else if (validaTaskOutros()) {
        alert("Ja existe uma tarefa com esse nome!");
        input.value = '';
    }

    else {
        //Armazena diretamente no localstorage
        let values = JSON.parse(localStorage.getItem(localstoreOutros) || "[]");
        values.push({ name: input.value });
        localStorage.setItem(localstoreOutros, JSON.stringify(values));
        showOutros();
    }
    input.value = '';
    showOutros();
}

function showOutros() {

    //Mostra as 2 listas sempre que chamado
    let values = JSON.parse(localStorage.getItem(localstoreOutros) || "[]");
    let values2 = JSON.parse(localStorage.getItem(concluidosOutros) || "[]");

    let lista = document.getElementById('listaPendenteOutros');
    let element = document.getElementById('listaConcluidaOutros');

    element.innerHTML = "";
    lista.innerHTML = "";
    
    lista.innerHTML = '';
    //Percorre a lista de valores adicionados
    for (let i = 0; i < values.length; i++) {
        lista.innerHTML += `<li>${values[i]['name']}
        <button id='removerOutros' onclick='removeItemOutros("${values[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>
        </button>
        </li>`
    }
    //Percorre a lista de valores removidos
    for (let i = 0; i < values2.length; i++) {
        if(values2[i].name)
        element.innerHTML += `<li>${values2[i].name}
        <button id='adicionarOutros' onclick='removeItemConcluidoOutros("${values2[i]['name']}")'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        </button>
        </li>`
    }
}
//auxilia na adição de uma tarefa na lista de concluidos
function concluiItemOutros(data) {
    let values = JSON.parse(localStorage.getItem(concluidosOutros) || "[]");
    values.push(...data);
    localStorage.setItem(concluidosOutros, JSON.stringify(values));
    showOutros();
}
//Adiciona uma tarefa na lista de concluidos
function removeItemOutros(data) {
    let values = JSON.parse(localStorage.getItem(localstoreOutros) || "[]");
    let index = values.findIndex(x => x.name == data);
    var aux = values.splice(index, 1);
    localStorage.setItem(localstoreOutros, JSON.stringify(values));
    concluiItemOutros(aux);
    showOutros()
}
//Remove um item da lista de concluidos
function removeItemConcluidoOutros(data) {
    let values = JSON.parse(localStorage.getItem(concluidosOutros) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1);
    localStorage.setItem(concluidosOutros, JSON.stringify(values));
    showOutros();
}

showEscola();
showOutros();
showPessoal();
showTrabalho();