class Validador {
    static checkRazao(razao_social){
            if (razao_social <= 5) {
            return false
        } else{
            return true
            }
        }  

    static checkTelefone(telefone){
        if (telefone < 11){
            return false
        } else {
            return true
        }
    }

}

export default Validador
