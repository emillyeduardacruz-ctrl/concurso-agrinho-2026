/* Configurações Globais (Sem uso de Frameworks) */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f9f4;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background-color: #2e7d32;
    color: white;
    text-align: center;
    padding: 2rem 1rem;
}

header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.container {
    flex: 1;
    max-width: 800px;
    width: 100%;
    margin: 2rem auto;
    padding: 0 1rem;
}

.card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    margin-bottom: 1.5rem;
}

.card h2 {
    color: #1b5e20;
    margin-bottom: 1rem;
}

.opcoes {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

button {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
}

#btn-sustentavel {
    background-color: #4caf50;
    color: white;
}

#btn-sustentavel:hover {
    background-color: #388e3c;
}

#btn-intensivo {
    background-color: #ff9800;
    color: white;
}

#btn-intensivo:hover {
    background-color: #f57c00;
}

.indicador {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    font-size: 1.1rem;
}

#mensagem-status {
    margin-top: 1rem;
    font-style: italic;
    color: #555;
}

footer {
    background-color: #1b5e20;
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 0.9rem;
}
/* Reset Geral e Variáveis de Cores Modernas */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, sans-serif;
}

body {
    background-color: #0b110e; /* Fundo dark ultra moderno */
    color: #e3ebd5;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background: linear-gradient(135deg, #132219 0%, #08120c 100%);
    border-bottom: 2px solid #2e7d32;
    text-align: center;
    padding: 2.5rem 1rem;
}

.logo {
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: #ffffff;
}

.logo span {
    color: #4caf50; /* Destaque verde gamer */
}

.tagline {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #a2bfa6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.main-container {
    flex: 1;
    max-width: 850px;
    width: 100%;
    margin: 2rem auto;
    padding: 0 1.5rem;
}

/* Estilização dos Cards como Interfaces */
.game-card {
    background: #141f19;
    border: 1px solid #25382b;
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

.game-card h2 {
    font-size: 1.4rem;
    color: #ffffff;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.instrucoes {
    color: #a2bfa6;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
}

/* Grid de Botões de Decisão */
.actions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

@media (max-width: 600px) {
    .actions-grid {
        grid-template-columns: 1fr;
    }
}

.btn-choice {
    padding: 1.2rem;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.25s ease-in-out;
}

.btn-choice strong {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
}

.btn-choice span {
    font-size: 0.8rem;
    opacity: 0.8;
}

/* Cores dos Botões com Efeito de Hover/Ativo */
.positive {
    background-color: #1e3d23;
    color: #a6ffb2;
    border-color: #2e7d32;
}

.positive:hover {
    background-color: #2e7d32;
    color: #ffffff;
    box-shadow: 0 0 15px rgba(46, 125, 50, 0.4);
}

.negative {
    background-color: #3d2c1e;
    color: #ffca99;
    border-color: #d87d26;
}

.negative:hover {
    background-color: #d87d26;
    color: #ffffff;
    box-shadow: 0 0 15px rgba(216, 125, 38, 0.4);
}

/* HUD / Barras de Progresso Dinâmicas */
.hud-bar {
    margin-bottom: 1.5rem;
}

.hud-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.95rem;
    color: #c4d4c7;
    margin-bottom: 0.5rem;
}

.stat-number {
    font-weight: bold;
    color: #ffffff;
}

.bar-container {
    background-color: #0b110e;
    width: 100%;
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #25382b;
}

.bar-fill {
    height: 100%;
    background-color: #4caf50;
    width: 50%;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Caixa de Resposta / Feedback */
.feedback-box {
    background-color: #0b110e;
    border-left: 4px solid #4caf50;
    padding: 1rem;
    border-radius: 0 8px 8px 0;
    margin-top: 1.5rem;
}

#mensagem-status {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #a2bfa6;
}

footer {
    background-color: #08120c;
    border-top: 1px solid #141f19;
    color: #617567;
    text-align: center;
    padding: 1.5rem;
    font-size: 0.85rem;
}
