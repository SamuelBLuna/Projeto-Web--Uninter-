const btnContato = document.getElementById('contact')
const btnModal = document.querySelector('.close')
const btnEnviar = document.getElementById('enviar')
const container = document.querySelector('.container')
const classContato = document.querySelector('.contato')

btnContato.addEventListener('click', openModal)
btnModal.addEventListener('click', closeModal)
btnEnviar.addEventListener('click', meuForm)

function openModal() {
    container.classList.toggle('hiden')
    classContato.classList.toggle('hiden')
}
function closeModal() {
    container.classList.toggle('hiden')
    classContato.classList.toggle('hiden')
}

function meuForm(e) {
    e.preventDefault()
    const nome = document.querySelector('#nome')
    const email = document.querySelector('#email')
    const assunto = document.querySelector('#assunto')
    const mensagem = document.querySelector('#mensagem')
    let itsOk = confirm(
        `
        Verifique se os dados estão corretos

        Nome: ${nome.value}
        E-mail: ${email.value}`
    )

    if(itsOk) {
        alert('Muito obrigado por entrar em contato')
    }
    nome.value = ''
    email.value = ''
    assunto.value = ''
    mensagem.value = ''
}