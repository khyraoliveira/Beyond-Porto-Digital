function apizinha() {
    return new Promise((res, quit) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.8;

            if (sucesso) {
                res({ data: "Simulação de data pela API." });
            } else {
                quit("Erro: requisição falha.");
            }
        }, 2000);
    });
}

async function loadingData() {
    try {
        const response = await apizinha(); 
        console.log("dados obtidos pela API:", response.data);
    } catch (erro) {
        console.error(erro);
    } finally {
        console.log("Processo concluído");
    }
}

// Chamando a função
loadingData();
