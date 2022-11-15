/* const idadeDependente = Number(prompt("Solicitação de cartão adicional. \nQual a idade do dependente?"))

if (idadeDependente >= 13){
    if(idadeDependente < 18){
    console.log("Seu dependente já pode ter um cartão adicional vinculado ao seu.")
    }else{
    console.log("O dependente já pode ter seu próprio cartão.")
    }
}else{
    console.log("Consulte outras possibilidades com o Labank.")
}    

if (idadeDependente >=13 && idadeDependente<18){
    console.log("Seu dependente já pode ter um cartão adicional vinculado ao seu.")
}else if(idadeDependente > 17){
    console.log("O dependente já pode ter seu próprio cartão.")
}else{
    console.log("Consulte outras possibilidades com o Labank.")
}

idadeDependente ===13 ? console.log("A idade do dependente é 13 e ele já pode ter um cartão."):console.log("Consulte outras opções.") */

/* const escolhaCartao = Number(prompt("Solicitação de cartão de crédito: \nDigite a opção desejada: \n1 - Fácil \n2 - Black \n3 - Platinum \n4 - MasterGold"))
switch (escolhaCartao){
    case 1:
        console.log("Cartão Fácil adquirido.")
        break
    case 2:
        console.log("Cartão Black adquirido.")
        break
    case 3:
        console.log("Cartão Platinum adquirido.")
        break
    case 4:
        console.log("Cartão MasterGold adquirido.")
        break
    default:
        console.log("Escolha uma das opções disponíveis.")
} */

const numero = Number(prompt("Digite um número:"))


if(numero %2 ===0 && numero%3 ===0){
    //numero === 30 ? console.log("UFA ACERTEI!"):console.log("não foi dessa vez :(")
    console.log("o número é divisível por 2 e 3.")
    switch(numero){
        case 6:
            console.log("O número é 6.")
            break
        case 12:
            console.log("O número é 12.")
            break
        case 18:
            console.log("O número é 18.")
            break
        case 24:
            console.log("O número é 24.")
            break
        case 30:
            console.log("O número é 30.")
            break
        default:
            console.log("O número é maior que 30 ou menor que 6.")
        
    }
}else{
    console.log("o número não é divisível por 2 e 3.")
}

/* if(numero%2 ===0){
    console.log("O número é divisível por 2.")
}else if(numero%3 ===0){
    console.log("O número é divisível por 3.")
}else{
    console.log("O número não é divisível por 2 ou 3.")
} */