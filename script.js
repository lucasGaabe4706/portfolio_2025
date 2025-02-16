document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card");
    const empresa = document.getElementById("empresa");
    const tempo = document.getElementById("tempo");
    const funcao = document.getElementById("funcao");
    const descricao = document.getElementById("descricao");
    const skills = document.getElementById("skills");

    if (!card || !empresa || !tempo || !funcao || !descricao || !skills) {
        console.error("Um ou mais elementos do DOM não foram encontrados.");
        return;
    }

    const checkpoints = document.querySelectorAll(".checkpoint");

    checkpoints.forEach((checkpoint) => {
        checkpoint.addEventListener("mouseover", (e) => {
            const info = JSON.parse(checkpoint.getAttribute("data-info"));
            empresa.textContent = info.empresa;
            tempo.textContent = info.tempo;
            funcao.textContent = info.funcao;
            descricao.textContent = info.descricao;
            skills.textContent = info.skills.join(", ");

            const rect = checkpoint.getBoundingClientRect();
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;


            const x = rect.left + rect.width / - 20 - cardWidth / 10000;
            const y = rect.top - cardHeight - -30;

            card.style.left = `${x}px`;
            card.style.top = `${y}px`;
            card.style.display = "block";
        });

        checkpoint.addEventListener("mouseout", () => {
            card.style.display = "none";
        });
    });
});

//Calculadora de Payback
const modalPayback = document.getElementById("modal-payback");
const paybackBtn = document.getElementById("calculadora-payback");
paybackBtn.addEventListener("click", function() {
    modalPayback.style.display = "flex";
});
window.addEventListener("click", function(event) {
    if (event.target === modalPayback) {
        modalPayback.style.display = "none";
    }
});

//LucasFlix
const modalLsflix = document.getElementById('modal-lsflix');
const lsfixBtn = document.getElementById('lsflix');
lsfixBtn.addEventListener("click",function(){
    modalLsflix.style.display = "flex";
})
window.addEventListener("click", function(event) {
    if (event.target === modalLsflix) {
        modalLsflix.style.display = "none";
    }
});

//Identificador de PN
const modalIdentificador = document.getElementById('modal-identificador');
const identificadorBtn = document.getElementById('identificador-produtos');
identificadorBtn.addEventListener("click",function(){
    modalIdentificador.style.display = "flex";
})
window.addEventListener("click", function(event) {
    if (event.target === modalIdentificador) {
        modalIdentificador.style.display = "none";
    }
});

//Conexão Brasil
const modalConexaoBrasil = document.getElementById ('modal-conexao');
const conexaoBtn = document.getElementById ('conexao-brasil');
conexaoBtn.addEventListener("click",function(){
    modalConexaoBrasil.style.display = "flex";
})
window.addEventListener("click", function(event) {
    if (event.target === modalConexaoBrasil) {
        modalConexaoBrasil.style.display = "none";
    }
});

//Calculadora de Recarga
const modalCalcRecarga = document.getElementById('modal-calculadoraRecarga');
const calculadoraRecargaBtn = document.getElementById('calculadora-recarga');
calculadoraRecargaBtn.addEventListener("click",function(){
    modalCalcRecarga.style.display = "flex";
})
window.addEventListener("click", function(event) {
    if (event.target === modalCalcRecarga) {
        modalCalcRecarga.style.display = "none";
    }
});























// Quando clicar no "X", fecha o modal
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});