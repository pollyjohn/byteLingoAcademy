window.addEventListener("load", function () {
    setTimeout(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000); // Dá um tempo para o Calendly rolar antes de forçar a volta ao topo
});