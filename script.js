const panels = document.querySelectorAll('.panel');
const saibaMaisBtns = document.querySelectorAll('.saiba-mais');

// Dados dos jogos (pode ser movido para um arquivo JSON separado)
const jogosInfo = {
    minecraft: {
        descricao: "Minecraft: Um jogo de construção e aventura sandbox, Minecraft permite aos jogadores criar e explorar mundos ilimitados.  A liberdade criativa é ilimitada: construa castelos imponentes, explore cavernas perigosas, crie ferramentas e armas, e sobreviva à noite enfrentando criaturas hostis.  A simplicidade aparente esconde uma profundidade incrível, com infinitas possibilidades de construção, exploração e criação",
        download: "https://www.minecraft.net/pt-pt/download"
    },
    valorant: {
        descricao: "Valorant:Um jogo de tiro tático em primeira pessoa, Valorant combina o ritmo frenético de um FPS com elementos estratégicos profundos.  Agentes com habilidades únicas trabalham em conjunto para conquistar objetivos, exigindo coordenação e precisão. O jogo se destaca por sua jogabilidade competitiva, personagens carismáticos e um sistema de habilidades bem balanceado.  A combinação de ação e estratégia faz de Valorant um jogo emocionante e desafiador. ",
        download: "https://playvalorant.com/pt-br/download/"
    },
    cs: {
        descricao: "Counter-Strike: Global Offensive (CS:GO): Um clássico dos jogos de tiro em primeira pessoa (FPS), CS:GO coloca duas equipes – terroristas e contra-terroristas – em uma luta tensa e estratégica.  Precisão, comunicação e trabalho em equipe são essenciais para o sucesso. O jogo se destaca por seu ritmo frenético, mapas icônicos e uma comunidade competitiva altamente dedicada. A combinação de estratégia e ação visceral faz do CS:GO um jogo incrivelmente viciante.",
        download: "https://store.steampowered.com/app/730/CounterStrike_2/"
    },
    lol: {
        descricao: "League of Legends (LoL):  LoL é um jogo de estratégia em tempo real (MOBA) onde duas equipes de cinco jogadores competem para destruir a base inimiga.  A estratégia, o trabalho em equipe e a habilidade individual são cruciais para a vitória.  Com um vasto universo de campeões, cada um com habilidades únicas, LoL oferece uma jogabilidade profunda e infinitamente rejogável. A comunidade vibrante e competitiva contribui para a longevidade e popularidade do jogo.",
        download: "https://www.leagueoflegends.com/pt-br/download/"
    }
};

// Função para abrir a nova guia com informações do jogo
function abrirInfoJogo(game) {
    const info = jogosInfo[game];
    if (!info) return;
    
    const novaJanela = window.open('', '_blank');
    novaJanela.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Detalhes do ${game}</title>
            <style>
                body {
                   font-family: Arial, sans-serif;
        padding: 20px;
        background-color:rgb(7, 7, 7); /* Aqui você define a nova cor de fundo */
        color: #FFFFFF
    }
    h1 { color: white; }
    p { line-height: 1.6; }
    .download-btn {
        display: inline-block;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 20px;
    } 
                    
                
                
                
                
            </style>
        </head>
        <body>
            <h1>${game.charAt(0).toUpperCase() + game.slice(1)}</h1>
            <p>${info.descricao}</p>
            <a href="${info.download}" class="download-btn" target="_blank">Download</a>
        </body>
        </html>
    `);
    novaJanela.document.close();
}

// Configuração dos cards expansivos
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

// Configuração dos botões Saiba Mais
saibaMaisBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique no botão ative o card
        const game = btn.getAttribute('data-game');
        abrirInfoJogo(game);
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}