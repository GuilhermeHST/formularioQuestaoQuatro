
function submit(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    let confirmarSenha = document.getElementById("confirmarSenha").value
    let data = document.getElementById("dataNascimento").value
    console.log(usuario)
    console.log(senha)
    console.log(confirmarSenha) 
    console.log(data)
    confirmacaoSenha(senha, confirmarSenha)
    dezoitoAnos(data)
}

function confirmacaoSenha(senha, confSenha){
    if(senha === confSenha){
        alert("Senha correta!")
    }else{
        alert("senha Incorreta!")
    }
}

function ano(){
    var ano = new Date()
    return ano.getFullYear()
}

function dezoitoAnos(anoInformado){
    var AtualAno = ano();
    var dataSeparada = anoInformado.split("-")
    var anoNascimento = dataSeparada[0]

    console.log(AtualAno)
    console.log(anoNascimento);

    var anoAtual = parseInt(AtualAno)
    var anoDeNascimento = parseInt(anoNascimento)

    if((anoAtual - anoDeNascimento) < 18 ){
        console.log("voce nao tem 18 anos!")
    } 
    
    if((anoAtual - anoDeNascimento) > 18){
        console.log("voce tem 18 anos!")
    }

}

