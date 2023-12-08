function capturarInfo(event) {
    const roteiroViagem = event.target.closest('.roteiros-viagens');

    const destino = roteiroViagem.querySelector('.destino').innerText;
    const roteiroItems = Array.from(roteiroViagem.querySelectorAll('.roteiro li'))
        .map(item => item.innerText);
    const preco = roteiroViagem.querySelector('.preco').innerText;
    const informacoes = roteiroViagem.querySelector('.informacoes').innerText;
    const parcelamento = roteiroViagem.querySelector('.parcelamento').innerText;

    const pacoteTuristico = {
        Destino: destino,
        Roteiro: roteiroItems,
        Preco: preco,
        Informacoes: informacoes,
        Parcelamento: parcelamento
    };

    console.log(JSON.stringify(pacoteTuristico, null, 2));
}

const botoesComprar = document.querySelectorAll('button');
botoesComprar.forEach(botao => {
    botao.addEventListener('click', capturarInfo);
});