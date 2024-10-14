function findUser() {
    return new Promise((res, quit) => {
        setTimeout(() => {
            const foi = Math.random() > 0.5;

            if (foi) {
                res("Exibe o nome doUsuário");
            } else {
                quit("Erro: Não achamos o nome do Usuário.");
            }
        }, 2000);
    });
}


findUser()
    .then((nome) => {
        console.log("Usuário encontrado:", nome);
    })
    .catch((erro) => {
        console.error(erro);
    });
