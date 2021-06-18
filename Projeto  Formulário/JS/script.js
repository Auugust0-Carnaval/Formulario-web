function nomeComplete(nome)
{
    if(nome == '')
    {
        alert("Nome está em branco!");
        return('');
    }
    else
    {
        if(nome == nome)
        {
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

function validCodigo(n)
{
    if(n == '')
    {
        alert("Código em branco!");
        return('');
    }
    else if(isNaN(n))
    {
        alert(n+ ' Não é um número!');
        return('');
    }
    else
    {
        return(n);
    }
}
function campoEstado(n)
{
    var size = campo.length;
    if(size < 1)
    {
        alert("Insira ao menos dois caracteres. EX = [BH]");
        return('');
    }
    else if(size == '')
    {
        alert("Estado em branco!");
        return('');
    }
    else
    {
        return(size);
    }
    
}
    