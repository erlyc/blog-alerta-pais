<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alerta para Pais - Cyberbullying e Autoestima Adolescente</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1>🚨 Alerta para Pais</h1>
            <p>Seu filho pode estar pedindo socorro nas redes sociais</p>
        </div>
    </header>

    <main class="main-content">
        <section class="hero">
            <div class="container">
                <h2>"EU NÃO SABIA QUE MEU FILHO ESTAVA CAINDO AOS PEDACOS ENQUANTO ROLAVA A TELA DO CELULAR"</h2>
                <div class="credits-display">
                    <span id="userCredits">0 créditos disponíveis</span>
                    <button id="buyCreditsBtn" class="btn-primary">Comprar Créditos</button>
                </div>
            </div>
        </section>

        <section class="preview-section">
            <div class="container">
                <h3>🔍 PRÉ-VISUALIZAÇÃO GRATUITA</h3>
                
                <article class="preview-content">
                    <h4>VOCÊ JÁ SE FEZ ESTAS PERGUNTAS?</h4>
                    <ul>
                        <li>Quando seu filho diz "tudo bem", você consegue distinguir se é a verdade ou apenas uma máscara?</li>
                        <li>Você sabe a diferença entre a timidez normal e um sinal de sofrimento mental?</li>
                    </ul>
                    
                    <div class="preview-alert">
                        <p>📖 <strong>Continuação disponível com 1 crédito</strong></p>
                        <button id="previewBtn" class="btn-secondary">Ver Pré-visualização Completa</button>
                        <button id="unlockBtn" class="btn-primary">Desbloquear Conteúdo (1 crédito)</button>
                    </div>
                </article>
            </div>
        </section>

        <section class="features">
            <div class="container">
                <h3>🎯 O QUE VOCÊ VAI ENCONTRAR NO CONTEÚDO COMPLETO</h3>
                <div class="features-grid">
                    <div class="feature-card">
                        <h4>🚨 Sinais de Alerta</h4>
                        <p>Lista completa dos comportamentos que indicam sofrimento</p>
                    </div>
                    <div class="feature-card">
                        <h4>🛡️ Manual de Sobrevivência</h4>
                        <p>Estratégias práticas para abordar seu filho</p>
                    </div>
                    <div class="feature-card">
                        <h4>📞 Quando Buscar Ajuda</h4>
                        <p>Guia de emergência para situações críticas</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Alerta para Pais. Desenvolvido com base em pesquisa científica.</p>
        </div>
    </footer>

<!-- Modal de Créditos -->
<div id="creditsModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h3>🎫 Comprar Créditos</h3>
        <div class="credit-options">
            <div class="credit-option">
                <h4>1 Crédito</h4>
                <p>R$ 9,90</p>
                <button class="btn-primary" data-amount="1">Comprar</button>
            </div>
            <div class="credit-option">
                <h4>3 Créditos</h4>
                <p>R$ 24,90</p>
                <button class="btn-primary" data-amount="3">Comprar</button>
            </div>
            <div class="credit-option">
                <h4>5 Créditos</h4>
                <p>R$ 34,90</p>
                <button class="btn-primary" data-amount="5">Comprar</button>
            </div>
        </div>
    </div>
</div>

    <script src="scripts/auth.js"></script>
    <script src="scripts/credits.js"></script>
</body>
</html>