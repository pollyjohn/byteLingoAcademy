// Seleciona o formulário
const form = document.querySelector('form');

// Adiciona listener para o evento de submit
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Coleta os dados do formulário
    const formData = {
        fullName: form.querySelector('input[placeholder="Nome completo/Full name"]').value,
        email: form.querySelector('input[placeholder="Email"]').value,
        tel: form.querySelector('input[placeholder="Tel"]').value, 
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        // Envia os dados para o Firestore
        await db.collection('contacts').add(formData);
        
        // Limpa o formulário
        form.reset();
        
        // Mostra mensagem de sucesso
        alert('Mensagem enviada com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
});