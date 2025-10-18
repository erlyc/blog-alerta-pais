// SISTEMA DE CRÉDITOS - VERSÃO DEFINITIVA
class CreditSystem {
    constructor() {
        this.init();
    }

    init() {
        this.updateCreditsDisplay();
        this.bindEvents();
        console.log('Sistema de créditos inicializado. Créditos atuais:', this.getCredits());
    }

    getCredits() {
        return parseInt(localStorage.getItem('userCredits')) || 0;
    }

    setCredits(credits) {
        localStorage.setItem('userCredits', credits);
        this.updateCreditsDisplay();
        return credits;
    }

    updateCreditsDisplay() {
        const creditsElement = document.getElementById('userCredits');
        if (creditsElement) {
            const currentCredits = this.getCredits();
            creditsElement.textContent = `${currentCredits} créditos disponíveis`;
        }
    }

    bindEvents() {
        // Botão comprar créditos
        document.getElementById('buyCreditsBtn')?.addEventListener('click', () => {
            this.showCreditsModal();
        });

        // Botão pré-visualização
        document.getElementById('previewBtn')?.addEventListener('click', () => {
            window.location.href = 'preview.html';
        });

        // Botão desbloquear conteúdo
        document.getElementById('unlockBtn')?.addEventListener('click', () => {
            this.unlockContent();
        });

        // Modal events
        const modal = document.getElementById('creditsModal');
        const closeBtn = document.querySelector('.close');
        
        closeBtn?.addEventListener('click', () => {
            this.hideCreditsModal();
        });

        modal?.addEventListener('click', (event) => {
            if (event.target === modal) {
                this.hideCreditsModal();
            }
        });

        // Botões de compra no modal
        document.querySelectorAll('.credit-option .btn-primary').forEach(button => {
            button.addEventListener('click', (event) => {
                const amount = parseInt(event.target.getAttribute('data-amount'));
                this.buyCredits(amount);
            });
        });
    }

    showCreditsModal() {
        const modal = document.getElementById('creditsModal');
        if (modal) modal.style.display = 'block';
    }

    hideCreditsModal() {
        const modal = document.getElementById('creditsModal');
        if (modal) modal.style.display = 'none';
    }

    buyCredits(amount) {
        const price = this.getPrice(amount);
        
        if(confirm(`Confirmar compra de ${amount} crédito(s) por R$ ${price}?`)) {
            const currentCredits = this.getCredits();
            const newCredits = this.setCredits(currentCredits + amount);
            
            this.hideCreditsModal();
            alert(`✅ Compra realizada! Agora você tem ${newCredits} créditos.`);
            
            // Força atualização imediata
            this.updateCreditsDisplay();
        }
    }

    getPrice(amount) {
        const prices = {1: '9,90', 3: '24,90', 5: '34,90'};
        return prices[amount];
    }

    unlockContent() {
        const currentCredits = this.getCredits();
        console.log('Tentando desbloquear. Créditos disponíveis:', currentCredits);
        
        if(currentCredits >= 1) {
            // Primeiro decrementa os créditos
            this.setCredits(currentCredits - 1);
            
            // Depois redireciona
            setTimeout(() => {
                window.location.href = 'full-content.html';
            }, 100);
        } else {
            alert('❌ Créditos insuficientes! Compre créditos para acessar o conteúdo completo.');
            this.showCreditsModal();
        }
    }
}

// INICIALIZAÇÃO GLOBAL
let creditSystem;

document.addEventListener('DOMContentLoaded', function() {
    creditSystem = new CreditSystem();
});

// Funções globais para os botões do modal
window.buyCredits = function(amount) {
    if (creditSystem) {
        creditSystem.buyCredits(amount);
    }
};