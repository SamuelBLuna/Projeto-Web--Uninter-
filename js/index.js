// criação de variaveis
const btnContato = document.getElementById('contact')
const btnModal = document.querySelector('.close')
const btnEnviar = document.getElementById('enviar')
const container = document.querySelector('.container')
const classContato = document.querySelector('.contato')

// atribuindo evento à algumas variaveis
btnContato.addEventListener('click', openModal)
btnModal.addEventListener('click', closeModal)
btnEnviar.addEventListener('click', meuForm)

// abrindo o modal de contatos
function openModal() {
    container.classList.toggle('hiden')
    classContato.classList.toggle('hiden')
}

// fechamendo do modal
function closeModal() {
    container.classList.toggle('hiden')
    classContato.classList.toggle('hiden')
}

// verificação se os dados foram digiados correntamente
function meuForm() {
    const nome = document.querySelector('#nome')
    const email = document.querySelector('#email')

    let itsOk = confirm(
        `
        Verifique se os dados estão corretos

        Nome: ${nome.value}
        E-mail: ${email.value}`
    )

    if(itsOk) {
        alert('Muito obrigado por entrar em contato')
        closeModal()
    }
}