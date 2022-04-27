 class Validador {
        static checaValidade(data){
            let dataDeValidade = new Date(data)
            let diaAtual = Date.now()
            let diferenca = Math.abs(dataDeValidade - diaAtual)
            let diasParaValidade = diferenca/(1000 * 3600 * 24)
            diasParaValidade = Math.round(diasParaValidade)
            diasParaValidade = diasParaValidade + 1
            if (diasParaValidade <= 10) {
                return false
            } else{
                return true
                }
            }  

        static checaFormato(data){
            if (/\d{4}-\d{2}-\d{2}$/.test(data)){
                return true
            } else {
                return false
            }
        }
    
}

export default Validador