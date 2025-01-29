function updateCount() {
    const message = document.getElementById("message").value;
    const remaining =  300 - message.length;
    document.getElementById("Count").textContent = `Máximo de ${remaining} caracteres restantes.`;
}