function validarProduto() {
    var txt = document.getElementById('prod').innerHTML+'Informe um nome para o produto'
    if (produto.value.trim() === '') {
        document.getElementById('prod').innerHTML = txt ;
        produto.style.background = 'yellow';
        console.log('Nome vazio');
        return false;
    }
    else
        produto.style.background = 'white';
        console.log("Validate product success")
        return true;
}

function validarUnitario() {
    
    var txtUnitario = document.getElementById('unitario').innerHTML + 'Informe um valor válido' 
    if (valorun.value.trim() === '') {
        document.getElementById('unitario').innerHTML = txtUnitario;
        valorun.style.background = 'yellow';
        console.log('vazio')
        return false;
    }
    else if (isNaN(valorun.value.replace(',','.')) === true) {
        valorun.style.background = 'yellow';
        console.log('not a number')
        return false;
    }
    else if (valorun.value.replace(',','.') <= 0.0) {
        valorun.style.background = 'yellow';
        console.log('menor que zero')
        return false;
    }
    else 
        valorun.style.background = 'white';
        valorun.value = parseFloat(valorun.value.replace(',','.'));
        console.log('Validate unitario Succcess')
        return true;
}

function validarQtd() {
    if (qtd.value.trim() === '') {
        qtd.style.background = 'yellow';
        console.log('Vazio');
        return false;
    } 
    else if (qtd.value.replace(',','.') <= 0.0) {
        qtd.style.background = 'yellow';
        console.log('Qtd menor que zero');
        return false;
    }
    else if (isNaN(qtd.value.replace(',','.')) === true) {
        qtd.style.background = 'yellow';
        console.log('Qtd não é um número')
        return false;
    }
    else 
        qtd.value = parseFloat(qtd.value.replace(',','.'));
        console.log('Qtd Sucesso');
        return true;
}

function calcular() {
    if (validarProduto() && validarUnitario() && validarQtd()) {
        total.value = valorun.value * qtd.value 
    }
    else
        alert('Reveja os valores informados nos campos destacados em amarelo')
}

function resetar() {
    produto.value = '';
    produto.style.background = 'white';
    valorun.value = '';
    valorun.style.background = 'white';
    qtd.value = '';
    qtd.style.background = 'white';
    total.value = '';
}