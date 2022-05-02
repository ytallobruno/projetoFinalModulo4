class Validador {
  static checaEmail(email) {
    let RegExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (RegExEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }
}

export default Validador;
