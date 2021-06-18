function nomeComplete(nome)
{
    if(nome == '')
    {
        alert("[Nome] está em branco!");
        return('');
    }
    else
    {
        if(nome == nome)
        {
            alert("[Nome] Preenchido!");
            return(nome)
        }
    }   
}
 function AnosdeVida(anos)
{
    if(anos == '')
    {
        alert("Insira alguma idade!");
        return('');
    }
    else if(anos <= 0)
    {
        alert("Idade inserida inválida!");
        return('');
    }
    else
    {
        return(anos);
    }
}
function validarSenha()
    {
        senha = document.f1.senha.value
        confirma = document.f1.validacao.value
        if(senha == confirma)
        {
            alert("Senhas correspondentes!");
        }
        else
        {
            alert("Senhas distintas!");
        }
    }