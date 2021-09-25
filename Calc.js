function abrirCalc() {
    window.open('Calc.html','Calculadora','toolbar=no, \ location=no, directories=no, status=no, menubar=no,\ top=250, left=250, width=200,height=300');
}

function retornar() {
    window.opener.valor.value = result.value;
    window.close();
}

function resetar() {
    result.value = '0';
    valor1.value = '0';
    totalOp.value = '0';
    ope.value = '0';
}

function separador() {
    result.value = result.value + '.';
}

function digitar(numb) {
    if (result.value === "0")
        result.value = numb;
        else 
            result.value = result.value + numb;
}

function operacao(op) {
    ope.value = op; 
    valor1.value = result.value;
    result.value = '0';   
}

function totalizador() {
    if (ope.value === '+') {
        result.value = parseFloat(valor1.value) + parseFloat(result.value);
        totalOp.value = result.value;
    }
        
    else if (ope.value === '-') {
        result.value = parseFloat(valor1.value) - parseFloat(result.value);
        totalOp.value = result.value;
    }

    else if (ope.value === '/') {
        result.value = parseFloat(valor1.value) / parseFloat(result.value);
        totalOp.value = result.value;
    }

    else if (ope.value === 'x') {
        result.value = parseFloat(valor1.value) * parseFloat(result.value);
        totalOp.value = result.value;
    }
}