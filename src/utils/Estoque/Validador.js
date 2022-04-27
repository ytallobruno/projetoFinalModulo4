 class Validador {
        static checaValidade(data){
        if (!/\d{4}-\d{2}-\d{2}$/.test(data)){
            throw new Error ('Data no formato inválido: Utilize o formato YYYY-MM-DD')
        } else {
        let dataDeValidade = new Date(data)
        let diaAtual = Date.now()
        let diferenca = Math.abs(dataDeValidade - diaAtual)
        let diasParaValidade = diferenca/(1000 * 3600 * 24)
        diasParaValidade = Math.round(diasParaValidade)
        diasParaValidade = diasParaValidade + 1
        if (diasParaValidade <= 30) {
            throw new Error (`
            O produto não pode ser inserido pois faltam apenas ${diasParaValidade} dia(s) para a sua validade acabar.
            Insira um produto com validade superior a 30 dias`)}
            else{
                return dataDeValidade
            }
        }
        }

    
}

export default Validador