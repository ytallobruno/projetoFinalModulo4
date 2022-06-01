class Validador {
  static checaEmail(email, senha) {
    let RegExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let RegExSenha = (/[A-Z]/ && /[a-z]/ && /[0-9]/ && /[!|@|#|$|%|^|&|*|(|)|-|_]/);
    if (RegExEmail.test(email) && RegExSenha.test(senha)) {
      return true;
    } else {
      return false;
    }
  }
}

export default Validador;
