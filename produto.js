function validarDescricao(){
    if(descricao.value.trim() === ""){
        descricao.style.background = 'red';
        alert('Informe uma descrição.')
        return false;
    }

    else if(descricao.value.length < 3){
        descricao.style.background = 'red';
        alert('Informe uma descrição válida.')
        return false;
    }
    else {
        descricao.style.background =   'orange';
        descricao.style.color = 'white';
        return true;
    }
}

function validarQtd(){
    if(qtd.value.trim() === ""){
        qtd.style.background = 'red';
        alert('Informe um valor.')
        return false;
    }
    else {
        if(parseInt(qtd.value) < 1 || parseInt(qtd.value) > 999){
            qtd.style.background = 'yellow';
            alert('Informe um valor entre 1 e 999.')
            return false;
        }
        else {
            qtd.style.background = 'white';
            return true;
        }
    }
}

function validarPrecoUn(){
    if(precoUn.value.trim() === ""){
        precoUn.style.background = 'red';
        alert('Preço inválido');
        return false;
    }
    
    else if (isNaN(precoUn.value) === true){
            precoUn.style.background = 'yellow';
            alert('Preço inválido.');
            return false;
        }
    
    else if(precoUn.value <= 0){
        precoUn.style.background = 'yellow';
        alert('Preço deve ser acima de zero.');
        return false;
    }

    else {
        precoUn.style.background = 'white';
        return true;

    }
}

function calcular(){
    var nPrecoUn = parseFloat(precoUn.value)
    var nQtd = parseInt(qtd.value)
    if(validarDescricao() && validarQtd() && validarPrecoUn()){
        nTotal = nPrecoUn * nQtd;
        total.value = nTotal.toFixed(2);
        total.style.background = 'blue';
        total.style.color = 'white';
    }
}