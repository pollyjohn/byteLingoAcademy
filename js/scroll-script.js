document.addEventListener("scroll", function() {
    const screenTop = window.innerHeight;
    const button = document.querySelector('#slogan-Btn');
    const buttonTop = button.getBoundingClientRect();
    const buttonOffsetTop = button.offsetTop;
    if (window.scrollY > buttonOffsetTop * 3) {
        // quando o usuário começa a scrollar para baixo, suma a logo
        document.querySelector(".logo-desktop ").classList.add("sumido");
    } else {
        // quando o usuário não está scrollando para baixo, remove a classe "sumido" da logo
        document.querySelector(".logo-desktop").classList.remove("sumido");
    }
      });
      