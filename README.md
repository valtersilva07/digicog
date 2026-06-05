# ⌨️ DIGICOG — Painel Evolutivo de Digitação Cognitiva

> Treinamento cognitivo de digitação com 10 módulos completos — HTML, CSS e JavaScript separados.

![HTML](https://img.shields.io/badge/HTML5-estrutura-00e5ff?style=flat-square&logo=html5)
![CSS](https://img.shields.io/badge/CSS3-estilos-ff3d6e?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-lógica-ffb300?style=flat-square&logo=javascript)
![License](https://img.shields.io/badge/licença-MIT-a8ff3e?style=flat-square)

---

## 🚀 Demo — GitHub Pages

```
https://<seu-usuario>.github.io/digicog/
```

---

## 📁 Estrutura do Projeto

```
digicog/
├── index.html      ← Estrutura HTML (928 linhas)
├── style.css       ← Estilos CSS (990 linhas)
├── script.js       ← Lógica JavaScript (686 linhas)
├── README.md       ← Documentação
├── LICENSE         ← MIT License
└── .gitignore      ← Arquivos ignorados
```

### O que cada arquivo faz

| Arquivo | Linguagem | Responsabilidade |
|---------|-----------|-----------------|
| `index.html` | HTML5 | Estrutura de todas as 10 seções, navegação, formulários |
| `style.css` | CSS3 | Visual cyberpunk, variáveis de cor, animações, responsividade |
| `script.js` | JavaScript | Lógica de treino, WPM, timer, voz, agents, estado da aplicação |

---

## 📋 Seções do Painel

| # | Seção | Descrição |
|---|-------|-----------|
| §1 | **Prática Evolutiva** | 4 níveis, textos adaptativos, timer, WPM ao vivo |
| §2 | **Método Toque-Cego** | Teclado visual interativo, destaque por mão |
| §3 | **Importar Tarefas** | Colar texto, upload `.txt`/`.md`, gerador por categoria |
| §4 | **Painel Resposta** | Histórico WPM em gráfico, log de sessões, análise de erros |
| §5 | **Organizar Método** | Letras, frases, acentuação, numerais — metas e sliders |
| §6 | **Posicionamento** | Mapa dedos × teclas, curvas de aprendizado, exercícios |
| §7 | **Voz → Texto** | Ditado real (SpeechRecognition API), Text-to-Speech |
| §8 | **Recursos** | Cursos, YouTube, livros, plataformas filtráveis |
| §9 | **Inglês** | Textos por tema, áudio TTS, tradução PT-BR |
| §10 | **IA Agents** | 5 agentes especializados com chat interativo |

---

## ⚡ Como Usar

### Abrir localmente
```bash
git clone https://github.com/<seu-usuario>/digicog.git
cd digicog
# Abra index.html no navegador (duplo clique)
```

> ⚠️ **Importante:** A Web Speech API (voz) requer servidor HTTP.
> Para ativar a voz localmente, use:
> ```bash
> # Python 3
> python -m http.server 8000
> # Acesse: http://localhost:8000
> ```

### Publicar no GitHub Pages
1. Suba o repositório no GitHub
2. **Settings → Pages → Source:** `main` / `/ (root)`
3. Acesse `https://<seu-usuario>.github.io/digicog/`

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica, Web APIs
- **CSS3** — variáveis custom, Grid, Flexbox, animações, media queries
- **JavaScript Vanilla** — sem frameworks, sem dependências
- **Web Speech API** — reconhecimento de voz e síntese de fala
- **Google Fonts** — Syne, Space Mono, Fira Code

---

## 🗺️ Roadmap

- [ ] Persistência via `localStorage`
- [ ] Modo multiplayer (WebSockets)
- [ ] Geração dinâmica de textos por IA
- [ ] Tema claro
- [ ] PWA — instalável como app
- [ ] Exportar relatório PDF

---

## 🤝 Contribuições

```bash
git checkout -b feature/minha-melhoria
git commit -m "feat: descrição da melhoria"
git push origin feature/minha-melhoria
# Abra um Pull Request
```

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja [`LICENSE`](LICENSE).

---

<div align="center">
  Feito com ⌨️ e ☕ em <strong>Curitiba, PR — Brasil</strong>
</div>
