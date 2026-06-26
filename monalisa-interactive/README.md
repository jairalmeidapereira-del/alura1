# Monalisa Interativa com p5.js

## 📋 Descrição
Projeto interativo que recria a famosa pintura "Monalisa" de Leonardo da Vinci usando p5.js. A principal característica é que **os olhos acompanham o movimento do cursor do mouse**, criando uma experiência visual imersiva e interativa.

## 🎨 Características

### Interatividade
- ✨ **Olhos rastreiam o cursor**: As pupilas seguem o movimento do mouse em tempo real
- 📱 **Responsivo**: Funciona em diferentes tamanhos de tela
- 💫 **Brilho realista**: Efeito de luz nos olhos

### Cores Originais
O projeto utiliza a paleta de cores original da obra de Leonardo da Vinci:
- **Tons de pele**: RGB(219, 178, 143) - tom principal
- **Cabelo**: RGB(70, 50, 40) - castanho escuro
- **Olhos**: RGB(101, 67, 33) - íris castanha
- **Lábios**: RGB(180, 100, 90) - rosa acinzentado
- **Fundo**: RGB(100, 90, 70) - marrom neutro

## 🚀 Como Usar

### Opção 1: Localmente
1. Clone o repositório:
```bash
git clone https://github.com/jairalmeidapereira-del/alura1.git
cd alura1/monalisa-interactive
```

2. Abra `index.html` em um navegador moderno

### Opção 2: Com um servidor local
```bash
# Usando Python 3
python -m http.server 8000

# Ou usando Node.js (com http-server instalado)
http-server
```

Acesse `http://localhost:8000/monalisa-interactive/`

## 📁 Estrutura de Arquivos

```
monalisa-interactive/
├── index.html        # Arquivo HTML principal
├── sketch.js         # Lógica do p5.js com renderização da Monalisa
├── style.css         # Estilos da página
└── README.md         # Este arquivo
```

## 🧠 Linhas de Código Principais

### Rastreamento do Olho
```javascript
let dx = mouseTrack.x - x;
let dy = mouseTrack.y - y;
let angle = atan2(dy, dx);
let distance = constrain(sqrt(dx * dx + dy * dy) * 0.02, 0, 6);

let pupilX = x + cos(angle) * distance;
let pupilY = y + sin(angle) * distance;
```

### Paleta de Cores
```javascript
const COLORS = {
  skin: { r: 219, g: 178, b: 143 },
  skinLight: { r: 240, g: 200, b: 165 },
  skinDark: { r: 180, g: 140, b: 100 },
  // ... mais cores
};
```

## 🛠️ Tecnologias Utilizadas
- **p5.js**: Biblioteca JavaScript para criação de gráficos
- **HTML5**: Estrutura da página
- **CSS3**: Estilização com gradientes e sombras
- **JavaScript ES6+**: Lógica interativa

## 📱 Compatibilidade
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos mobile (com toque)

## 🎓 Conceitos Aprendidos
- Geometria 2D com p5.js
- Rastreamento de coordenadas do mouse
- Cálculo de ângulos e distâncias
- Animação em tempo real
- Paleta de cores realista
- Responsive design

## 💡 Melhorias Futuras
- [ ] Adicionar animações faciais (piscar)
- [ ] Implementar diferentes expressões faciais
- [ ] Adicionar história interativa sobre a Monalisa
- [ ] Efeito de zoom ao clicar
- [ ] Modo escuro

## 📚 Referências
- [Documentação p5.js](https://p5js.org/reference/)
- [Monalisa - Wikipedia](https://pt.wikipedia.org/wiki/Mona_Lisa)
- [Leonardo da Vinci](https://pt.wikipedia.org/wiki/Leonardo_da_Vinci)

## 📄 Licença
Este projeto está disponível sob a licença MIT.

## 👨‍💻 Autor
**Jair Almeida Pereira**
- GitHub: [@jairalmeidapereira-del](https://github.com/jairalmeidapereira-del)

---

**Divirta-se explorando a Monalisa Interativa! 🎨✨**