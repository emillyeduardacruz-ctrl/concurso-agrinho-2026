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
