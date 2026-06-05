// ═══════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════
const TEXTS = {
  BÁSICO: [
    "as de sal das fadas falas solas lidas delas",
    "sol sal las das fala sala dela lado sola fado",
    "casa mola fala sala loja dedo bolo cola base logo",
    "pato gato rato mato bato fato nato vato zato",
    "mesa rosa cama pele foco dedo lobo cana boca"
  ],
  INICIANTE: [
    "O dia estava claro e o vento soprava suavemente pelas janelas abertas da escola.",
    "Maria comprou pão, leite e ovos no mercado próximo à sua casa no centro da cidade.",
    "O computador é uma ferramenta essencial para o trabalho e o estudo nos dias de hoje.",
    "Aprender a digitar rápido é uma habilidade muito valiosa no mercado de trabalho atual.",
    "Hoje o céu estava azul e as nuvens brancas passavam devagar pelo horizonte distante."
  ],
  INTERMEDIÁRIO: [
    "A digitalização do trabalho transformou completamente a maneira como as empresas operam, exigindo novas habilidades dos profissionais.",
    "Desenvolver a técnica de digitação sem olhar para o teclado requer prática constante, paciência e dedicação diária ao treinamento.",
    "Os avanços tecnológicos dos últimos anos trouxeram mudanças significativas na forma como nos comunicamos e compartilhamos informações.",
    "A inteligência artificial está revolucionando setores como saúde, educação e finanças, criando novas oportunidades e desafios.",
    "Programação, análise de dados e comunicação digital são competências fundamentais para profissionais do século XXI."
  ],
  AVANÇADO: [
    "A transformação digital impõe às organizações contemporâneas um imperativo de adaptação contínua, onde a velocidade na comunicação e o domínio das ferramentas digitais — incluindo a digitação fluente — tornam-se diferenciais competitivos determinantes.",
    "Neurocientistas identificaram que a prática repetitiva e deliberada da digitação tátil promove a consolidação de padrões motores no córtex cerebral, resultando em automatização progressiva e libertação da atenção consciente para tarefas cognitivas superiores.",
    "O mercado de tecnologia demanda profissionais capazes de traduzir pensamentos complexos em texto com precisão e velocidade, pois a lentidão na comunicação escrita representa um gargalo crítico no fluxo de trabalho colaborativo e na produtividade individual."
  ]
};

const TEXTS_EN = {
  tech: [
    "Machine learning algorithms are transforming how we process and analyze large datasets.",
    "The deployment pipeline ensures that code changes are automatically tested before reaching production.",
    "Application programming interfaces allow different software systems to communicate seamlessly.",
    "Cloud computing has fundamentally changed the infrastructure requirements for modern software development.",
    "Containerization with Docker simplifies application deployment across different environments."
  ],
  business: [
    "Quarterly earnings reports provide investors with insight into the company's financial performance.",
    "Strategic planning requires careful analysis of market trends and competitive landscape.",
    "Effective leadership involves clear communication, delegation, and empowering team members.",
    "Customer retention is often more cost-effective than acquiring new clients in competitive markets.",
    "Data-driven decision making enables organizations to optimize operations and reduce risk."
  ],
  common: [
    "The quick brown fox jumps over the lazy dog near the riverbank.",
    "Practice makes perfect, especially when learning new skills like typing.",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "She sells seashells by the seashore on sunny summer afternoons.",
    "To be or not to be, that is the question everyone must eventually answer."
  ]
};

const RESOURCES = [
  { type: 'course', title: 'Typing.com — Curso Completo', meta: 'Gratuito · Certificado · Inglês/PT', url: 'https://typing.com' },
  { type: 'course', title: 'Keybr.com — Treino Adaptativo', meta: 'Gratuito · Algoritmo de aprendizado', url: 'https://keybr.com' },
  { type: 'youtube', title: 'Learn Touch Typing in 1 Hour', meta: 'YouTube · 1.2M views · Inglês', url: '#' },
  { type: 'youtube', title: 'Curso Digitação — Aula 1 a 30', meta: 'YouTube PT-BR · Playlist completa', url: '#' },
  { type: 'book', title: 'Mavis Beacon Teaches Typing', meta: 'Digital · Clássico do treino de digitação', url: '#' },
  { type: 'bootcamp', title: 'TypeRacer — Competitivo Online', meta: 'Gratuito · Multiplayer · Inglês/PT', url: 'https://typeracer.com' },
  { type: 'course', title: 'Ratatype — Curso Estruturado', meta: 'Gratuito · 35 lições · Certificado', url: 'https://ratatype.com' },
  { type: 'doc', title: 'Monkeytype — Prática Avançada', meta: 'Open Source · 200+ idiomas', url: 'https://monkeytype.com' },
  { type: 'youtube', title: '10fastfingers Speed Test', meta: 'Online · Ranking Global · Gratuito', url: 'https://10fastfingers.com' },
  { type: 'book', title: 'O Toque do Sucesso — Digitação', meta: 'Livro PT-BR · Método completo', url: '#' },
  { type: 'bootcamp', title: 'Nitro Type — Gamificado', meta: 'Gratuito · Multiplayer · Corrida de carros', url: 'https://nitrotype.com' },
  { type: 'doc', title: 'Typing Club — Academia Completa', meta: 'Freemium · 700+ lições', url: 'https://typingclub.com' },
];

const DICTATION_TEXTS_PT = [
  "O Brasil é o maior país da América do Sul.",
  "Programação é a arte de resolver problemas com código.",
  "A inteligência artificial está mudando o mundo rapidamente.",
  "Aprender a digitar rápido economiza horas de trabalho.",
  "São Paulo é a maior metrópole do hemisfério sul.",
  "Comunicação clara é fundamental para o sucesso profissional.",
  "Dados são o petróleo do século vinte e um.",
  "Machine learning transforma dados em decisões inteligentes.",
];

const AGENT_RESPONSES = [
  "Analisando seus padrões... detectei que você erra 23% mais em teclas com acentuação. Recomendo 5 minutos de treino específico com: ã, ô, é, ú.",
  "Seu WPM está 15% acima da sua média da semana passada. Progresso excelente! Continue no ritmo atual.",
  "Identifiquei que sua velocidade cai ao digitar números. Sugiro praticar a linha numérica por 10 minutos hoje.",
  "Meta desta semana: 45 WPM com 95% de precisão. Você está a 8 WPM da meta. Continue! 🎯",
  "Hora de descanso! Você praticou por mais de 30 minutos. Pausa de 5 minutos melhora a retenção.",
  "Dica cognitiva: Tente visualizar as teclas sem olhar por 3 segundos antes de cada sessão. Isso ativa a memória muscular.",
];

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
let state = {
  level: 'BÁSICO',
  currentText: '',
  typed: '',
  wpm: 0,
  accuracy: 100,
  errors: 0,
  chars: 0,
  timerActive: false,
  timerSeconds: 60,
  timerLeft: 60,
  timerInterval: null,
  practiceActive: false,
  sessionHistory: [],
  bestWpm: 0,
  streak: 0,
  currentTextEN: '',
  dictationIndex: 0,
  agentRespIdx: 0,
};

// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
function showSection(idx, tabEl) {
  document.querySelectorAll('.section-panel').forEach((p,i) => p.classList.toggle('active', i===idx));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tabEl.classList.add('active');
  if(idx===7) renderResources();
  if(idx===0||idx===1) {}
  if(idx===8) { newEngText(); }
  if(idx===3) syncPanel4();
}

// ═══════════════════════════════════════════════
// SECTION 1: PRACTICE
// ═══════════════════════════════════════════════
function getRandomText(level) {
  const arr = TEXTS[level];
  return arr[Math.floor(Math.random() * arr.length)];
}

function renderText(displayId, text, typed) {
  const el = document.getElementById(displayId);
  let html = '';
  for(let i=0; i<text.length; i++) {
    let cls = 'pending';
    if(i < typed.length) {
      cls = typed[i] === text[i] ? 'correct' : 'wrong';
    } else if(i === typed.length) {
      cls = 'current';
    }
    const ch = text[i] === ' ' ? '&nbsp;' : text[i];
    html += `<span class="char ${cls}">${ch}</span>`;
  }
  el.innerHTML = html;
}

function newText() {
  state.currentText = getRandomText(state.level);
  state.typed = '';
  state.errors = 0;
  state.chars = 0;
  document.getElementById('typing-input').value = '';
  document.getElementById('typing-input').focus();
  renderText('typing-display', state.currentText, '');
  updateMetrics();
  highlightKey('');
}

function processTyping() {
  const inp = document.getElementById('typing-input');
  state.typed = inp.value;
  state.chars = state.typed.length;

  // Count errors
  let errs = 0;
  for(let i=0; i<state.typed.length; i++) {
    if(state.typed[i] !== state.currentText[i]) errs++;
  }
  state.errors = errs;

  // Accuracy
  state.accuracy = state.chars > 0 ? Math.round(((state.chars - errs) / state.chars) * 100) : 100;

  renderText('typing-display', state.currentText, state.typed);
  updateMetrics();

  // Highlight current key
  const pos = state.typed.length;
  if(pos < state.currentText.length) {
    highlightKey(state.currentText[pos]);
  }

  // Auto next
  if(state.typed.length >= state.currentText.length) {
    flashSuccess();
    setTimeout(newText, 800);
  }
}

function handleKeyDown(e) {
  if(e.key === 'Tab') { e.preventDefault(); newText(); }
}

function updateMetrics() {
  const elapsed = (state.timerSeconds - state.timerLeft) || 1;
  const words = state.typed.split(' ').length;
  state.wpm = Math.round((words / elapsed) * 60);

  document.getElementById('wpm-live').textContent = state.wpm;
  document.getElementById('acc-live').textContent = state.accuracy + '%';
  document.getElementById('errors-live').textContent = state.errors;
  document.getElementById('chars-live').textContent = state.chars;

  document.getElementById('hdr-wpm').textContent = state.wpm;
  document.getElementById('hdr-acc').textContent = state.accuracy + '%';

  if(state.wpm > state.bestWpm) state.bestWpm = state.wpm;

  const prog = Math.min(100, (state.typed.length / (state.currentText.length || 1)) * 100);
  document.getElementById('prog-bar').style.width = prog + '%';
}

function setLevel(lvl, card, target) {
  state.level = lvl;
  document.querySelectorAll('#levelCards .level-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  document.getElementById('hdr-lvl').textContent = lvl;
  newText();
}

function togglePractice() {
  const btn = document.getElementById('startStopBtn');
  if(!state.practiceActive) {
    state.practiceActive = true;
    btn.textContent = '⏸ PAUSAR';
    btn.className = 'btn btn-danger btn-sm';
    newText();
    startTimer(state.timerSeconds);
  } else {
    state.practiceActive = false;
    btn.textContent = '▶ INICIAR';
    btn.className = 'btn btn-primary btn-sm';
    stopTimer();
    saveSession();
  }
}

function toggleTimer(min) {
  const secs = (min || 1) * 60;
  state.timerSeconds = secs;
  state.timerLeft = secs;
  if(!state.practiceActive) {
    document.getElementById('s1-timer').textContent = formatTime(secs);
    document.getElementById('time-live').textContent = secs + 's';
  }
}

function startTimer(secs) {
  clearInterval(state.timerInterval);
  state.timerLeft = secs;
  state.timerInterval = setInterval(() => {
    state.timerLeft--;
    document.getElementById('s1-timer').textContent = formatTime(state.timerLeft);
    document.getElementById('time-live').textContent = state.timerLeft + 's';
    if(state.timerLeft <= 0) {
      stopTimer();
      saveSession();
      flashSuccess();
    }
  }, 1000);
}

function stopTimer() { clearInterval(state.timerInterval); }

function formatTime(s) {
  const m = Math.floor(s/60).toString().padStart(2,'0');
  const sec = (s%60).toString().padStart(2,'0');
  return m+':'+sec;
}

function resetAll() {
  stopTimer();
  state.practiceActive = false;
  state.timerLeft = state.timerSeconds;
  document.getElementById('startStopBtn').textContent = '▶ INICIAR';
  document.getElementById('startStopBtn').className = 'btn btn-primary btn-sm';
  document.getElementById('s1-timer').textContent = formatTime(state.timerSeconds);
  document.getElementById('typing-input').value = '';
  state.typed = '';
  state.wpm = 0;
  state.accuracy = 100;
  state.errors = 0;
  state.chars = 0;
  updateMetrics();
  if(state.currentText) renderText('typing-display', state.currentText, '');
}

function saveSession() {
  const sess = {
    time: new Date().toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'}),
    wpm: state.wpm,
    acc: state.accuracy,
    level: state.level,
  };
  state.sessionHistory.push(sess);
  if(state.wpm > state.bestWpm) { state.bestWpm = state.wpm; state.streak++; }
  document.getElementById('hdr-streak').textContent = state.streak;
  syncPanel4();
}

function flashSuccess() {
  const el = document.getElementById('result-flash');
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 400);
}

function highlightKey(ch) {
  document.querySelectorAll('.kb-key').forEach(k => k.classList.remove('active'));
  const key = ch.toLowerCase();
  const el = document.querySelector(`.kb-key[data-key="${key}"]`);
  if(el) el.classList.add('active');
}

// ═══════════════════════════════════════════════
// SECTION 2: BLIND TYPING
// ═══════════════════════════════════════════════
function newTextBlind() {
  const all = [...TEXTS.BÁSICO, ...TEXTS.INICIANTE];
  state.currentText = all[Math.floor(Math.random() * all.length)];
  state.typed = '';
  document.getElementById('typing-input-2').value = '';
  document.getElementById('typing-input-2').focus();
  renderText('typing-display-2', state.currentText, '');
}

function processTyping2() {
  const inp = document.getElementById('typing-input-2');
  state.typed = inp.value;
  renderText('typing-display-2', state.currentText, state.typed);
  highlightKey(state.currentText[state.typed.length] || '');
  if(state.typed.length >= state.currentText.length) {
    flashSuccess();
    setTimeout(newTextBlind, 600);
  }
}

function toggleBlind(el) {
  el.classList.toggle('on');
  const kb = document.getElementById('kb-visual');
  kb.style.display = el.classList.contains('on') ? 'none' : 'flex';
}

function showFingerGuide() {}

// ═══════════════════════════════════════════════
// SECTION 3: IMPORT
// ═══════════════════════════════════════════════
function importText() {
  const txt = document.getElementById('import-textarea').value.trim();
  if(!txt) return;
  const truncated = txt.substring(0, 500);
  state.currentText = truncated;
  addImportedItem('Texto colado', truncated.substring(0,60) + '...');
  showSection(0, document.querySelectorAll('.tab')[0]);
  renderText('typing-display', state.currentText, '');
}

function clearImport() { document.getElementById('import-textarea').value = ''; }

function addImportedItem(name, preview) {
  const list = document.getElementById('imported-list');
  if(list.querySelector('div[style*="text-align:center"]')) list.innerHTML = '';
  const item = document.createElement('div');
  item.style.cssText = 'background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 14px;cursor:pointer;display:flex;justify-content:space-between;align-items:center';
  item.innerHTML = `<div><div style="font-size:13px;font-weight:600">${name}</div><div style="font-size:11px;color:var(--text3);font-family:'Fira Code',monospace;margin-top:3px">${preview}</div></div><span class="tag tag-cyan">USAR</span>`;
  list.appendChild(item);
}

function handleFileUpload(ev) {
  const file = ev.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const txt = e.target.result;
    document.getElementById('import-textarea').value = txt;
    addImportedItem(file.name, txt.substring(0,60) + '...');
  };
  reader.readAsText(file);
}

function generateText() {
  const cats = [...document.querySelectorAll('.chip.active')].map(c => c.dataset.cat);
  const allTexts = [...TEXTS.INTERMEDIÁRIO, ...TEXTS.AVANÇADO];
  state.currentText = allTexts[Math.floor(Math.random() * allTexts.length)];
  addImportedItem('Texto Gerado — ' + (cats[0]||'geral'), state.currentText.substring(0,60)+'...');
}

function toggleChip(el) { el.classList.toggle('active'); }

// ═══════════════════════════════════════════════
// SECTION 4: PANEL
// ═══════════════════════════════════════════════
function syncPanel4() {
  document.getElementById('p4-wpm').textContent = state.wpm;
  document.getElementById('p4-acc').textContent = state.accuracy > 0 ? state.accuracy + '%' : '—';
  document.getElementById('p4-err').textContent = state.errors;
  document.getElementById('p4-best').textContent = state.bestWpm;

  const log = document.getElementById('session-log');
  if(state.sessionHistory.length > 0) {
    log.innerHTML = '';
    [...state.sessionHistory].reverse().slice(0,10).forEach(s => {
      const d = document.createElement('div');
      d.style.cssText = 'display:flex;justify-content:space-between;align-items:center;background:var(--surface2);border-radius:6px;padding:6px 10px;font-family:\'Fira Code\',monospace;font-size:11px';
      d.innerHTML = `<span style="color:var(--text3)">${s.time}</span><span style="color:var(--accent)">${s.wpm} WPM</span><span style="color:var(--accent3)">${s.acc}%</span><span class="tag tag-cyan">${s.level}</span>`;
      log.appendChild(d);
    });
  }

  // WPM bars
  if(state.sessionHistory.length > 0) {
    const wrap = document.getElementById('wpm-bars');
    wrap.innerHTML = '';
    const maxW = Math.max(...state.sessionHistory.map(s=>s.wpm), 1);
    state.sessionHistory.slice(-10).forEach(s => {
      const bar = document.createElement('div');
      const pct = Math.round((s.wpm / maxW) * 100);
      bar.style.cssText = `flex:1;background:linear-gradient(0deg,var(--accent),var(--accent2));border-radius:4px 4px 0 0;height:${pct}%;min-height:4px;position:relative;cursor:default`;
      bar.title = `${s.wpm} WPM`;
      wrap.appendChild(bar);
    });
  }
}

// ═══════════════════════════════════════════════
// SECTION 5: METHOD
// ═══════════════════════════════════════════════
function selectMethod(type, card) {
  document.querySelectorAll('#s4 .level-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  const methodTexts = {
    letras: "asdf asdf jkl; jkl; asdf jkl; jkl; asdf asdfjkl; jkl;asdf",
    palavras: "casa sala bola mesa fala dedo sala foco base cena roda",
    frases: "A casa é bonita. O sol brilha forte. O dia está lindo.",
    acentuação: "ação função atenção coração campeão educação solução versão",
    numerais: "1234567890 12 34 56 78 90 100 200 500 1000 2023 2024"
  };
  state.currentText = methodTexts[type] || state.currentText;
}

function applyMethod() {
  document.getElementById('typing-input').value = '';
  state.typed = '';
  document.querySelectorAll('.tab')[0].click();
  showSection(0, document.querySelectorAll('.tab')[0]);
  renderText('typing-display', state.currentText, '');
}

function updateDuration(v) {
  document.getElementById('duration-val').textContent = v + 's';
  state.timerSeconds = parseInt(v);
  state.timerLeft = parseInt(v);
}

function updateWpmGoal(v) {
  document.getElementById('wpm-goal-val').textContent = v + ' WPM';
}

// ═══════════════════════════════════════════════
// SECTION 6: EXERCISES
// ═══════════════════════════════════════════════
function runExercise(n) {
  const exTexts = {
    1: "asdf jkl; asdf jkl; fdsa ;lkj fdsa ;lkj asdf jkl;",
    2: "qwer uiop qwer uiop rewq poiu rewq poiu qwer uiop",
    3: "zxcv nm,. zxcv nm,. vcxz .,mn vcxz .,mn zxcv nm,."
  };
  state.currentText = exTexts[n];
  state.typed = '';
  document.getElementById('typing-input').value = '';
  showSection(0, document.querySelectorAll('.tab')[0]);
  renderText('typing-display', state.currentText, '');
}

// ═══════════════════════════════════════════════
// SECTION 7: VOICE
// ═══════════════════════════════════════════════
let voiceAnimInterval = null;

function animVoice(on) {
  const bars = document.querySelectorAll('.voice-bar');
  clearInterval(voiceAnimInterval);
  if(on) {
    voiceAnimInterval = setInterval(() => {
      bars.forEach(b => { b.style.height = (Math.random() * 90 + 10) + '%'; });
    }, 100);
  } else {
    bars.forEach(b => b.style.height = '10%');
  }
}

function startVoice() {
  document.getElementById('voice-status').textContent = '🎙 Gravando...';
  document.getElementById('voice-status').style.color = 'var(--accent2)';
  animVoice(true);
  if('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SR();
    rec.lang = 'pt-BR'; rec.continuous = false; rec.interimResults = false;
    rec.onresult = e => {
      const txt = e.results[0][0].transcript;
      document.getElementById('voice-display').textContent = txt;
      document.getElementById('voice-status').textContent = '✓ Texto capturado!';
      animVoice(false);
    };
    rec.onerror = () => { document.getElementById('voice-status').textContent = 'Erro ao capturar voz'; animVoice(false); };
    rec.start();
    setTimeout(() => rec.stop(), 8000);
  } else {
    setTimeout(() => {
      document.getElementById('voice-display').textContent = 'A inteligência artificial está transformando o mercado de trabalho.';
      document.getElementById('voice-status').textContent = '✓ Texto capturado!';
      animVoice(false);
    }, 2000);
  }
}

function stopVoice() {
  document.getElementById('voice-status').textContent = 'Parado.';
  document.getElementById('voice-status').style.color = 'var(--text3)';
  animVoice(false);
}

function clearVoice() { document.getElementById('voice-display').textContent = 'O texto ditado aparecerá aqui automaticamente...'; }

function useVoiceText() {
  const txt = document.getElementById('voice-display').textContent;
  if(txt && txt.length > 20) {
    state.currentText = txt;
    showSection(0, document.querySelectorAll('.tab')[0]);
    renderText('typing-display', state.currentText, '');
  }
}

function newDictation() {
  state.dictationIndex = (state.dictationIndex + 1) % DICTATION_TEXTS_PT.length;
  document.getElementById('voice-target-text').textContent = DICTATION_TEXTS_PT[state.dictationIndex];
  document.getElementById('voice-typing-input').value = '';
}

function speakText() {
  const txt = document.getElementById('voice-target-text').textContent;
  const speed = parseFloat(document.getElementById('dictation-speed').value);
  const utt = new SpeechSynthesisUtterance(txt);
  utt.lang = 'pt-BR'; utt.rate = speed;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utt);
}

function checkDictation() {
  const typed = document.getElementById('voice-typing-input').value;
  const target = document.getElementById('voice-target-text').textContent;
  if(typed.length >= target.length) {
    const correct = typed.toLowerCase().trim() === target.toLowerCase().trim();
    if(correct) { flashSuccess(); setTimeout(newDictation, 600); }
  }
}

// ═══════════════════════════════════════════════
// SECTION 8: RESOURCES
// ═══════════════════════════════════════════════
function renderResources(filter='all') {
  const grid = document.getElementById('resources-grid');
  const items = filter === 'all' ? RESOURCES : RESOURCES.filter(r => r.type === filter);
  grid.innerHTML = items.map(r => `
    <div class="course-card" onclick="window.open('${r.url}','_blank')">
      <span class="course-type type-${r.type}">${r.type.toUpperCase()}</span>
      <div class="course-title">${r.title}</div>
      <div class="course-meta">${r.meta}</div>
    </div>
  `).join('');
}

function filterResources(filter, chipEl) {
  document.querySelectorAll('#s7 .chip').forEach(c => c.classList.remove('active'));
  chipEl.classList.add('active');
  renderResources(filter);
}

// ═══════════════════════════════════════════════
// SECTION 9: ENGLISH
// ═══════════════════════════════════════════════
function newEngText() {
  const theme = document.getElementById('eng-theme')?.value || 'tech';
  const arr = TEXTS_EN[theme] || TEXTS_EN.tech;
  state.currentTextEN = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById('eng-input').value = '';
  document.getElementById('translation-box').style.display = 'none';
  renderText('eng-display', state.currentTextEN, '');
  document.getElementById('eng-wpm').textContent = '0';
  document.getElementById('eng-acc').textContent = '100%';
  document.getElementById('hard-words').innerHTML = '<span style="color:var(--text3);font-size:12px;font-family:\'Fira Code\',monospace">Nenhuma ainda...</span>';
}

function processEngTyping() {
  const typed = document.getElementById('eng-input').value;
  renderText('eng-display', state.currentTextEN, typed);
  let errs = 0;
  for(let i=0; i<typed.length; i++) if(typed[i]!==state.currentTextEN[i]) errs++;
  const acc = typed.length > 0 ? Math.round(((typed.length-errs)/typed.length)*100) : 100;
  const wpm = Math.round((typed.split(' ').length / 1) * 60 / 60);

  document.getElementById('eng-wpm').textContent = wpm;
  document.getElementById('eng-acc').textContent = acc + '%';
  document.getElementById('eng-wpm-bar').style.width = Math.min(100, wpm/1.2) + '%';
  document.getElementById('eng-acc-bar').style.width = acc + '%';

  if(typed.length >= state.currentTextEN.length) {
    flashSuccess();
    setTimeout(newEngText, 700);
  }
}

function speakEngText() {
  const utt = new SpeechSynthesisUtterance(state.currentTextEN);
  utt.lang = 'en-US'; utt.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utt);
}

function showTranslation() {
  const box = document.getElementById('translation-box');
  const translations = {
    "Machine learning algorithms are transforming how we process and analyze large datasets.": "Algoritmos de aprendizado de máquina estão transformando como processamos e analisamos grandes conjuntos de dados.",
    "The deployment pipeline ensures that code changes are automatically tested before reaching production.": "O pipeline de implantação garante que alterações de código sejam automaticamente testadas antes de chegar à produção.",
  };
  const tr = translations[state.currentTextEN] || "Tradução automática não disponível para este texto. Consulte o Google Translate para a tradução completa.";
  document.getElementById('translation-text').textContent = tr;
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

// ═══════════════════════════════════════════════
// SECTION 10: AGENTS
// ═══════════════════════════════════════════════
function sendAgentMsg() {
  const inp = document.getElementById('agent-input');
  const msg = inp.value.trim();
  if(!msg) return;
  const chat = document.getElementById('agent-chat');

  const userDiv = document.createElement('div');
  userDiv.style.cssText = 'margin-top:12px';
  userDiv.innerHTML = `<div style="color:var(--text2)">👤 Você:</div><div style="color:var(--text);margin-top:4px">${msg}</div>`;
  chat.appendChild(userDiv);

  setTimeout(() => {
    const resp = AGENT_RESPONSES[state.agentRespIdx % AGENT_RESPONSES.length];
    state.agentRespIdx++;
    const agentDiv = document.createElement('div');
    agentDiv.style.cssText = 'margin-top:12px';
    agentDiv.innerHTML = `<div style="color:var(--accent)">🤖 Agente IA:</div><div style="color:var(--text2);margin-top:4px">${resp}</div>`;
    chat.appendChild(agentDiv);
    chat.scrollTop = chat.scrollHeight;
  }, 600);

  inp.value = '';
  chat.scrollTop = chat.scrollHeight;
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
window.addEventListener('load', () => {
  newText();
  newTextBlind();
  newDictation();
  newEngText();
  renderResources();

  // Keyboard event highlight
  document.addEventListener('keydown', e => {
    const key = e.key.toLowerCase();
    document.querySelectorAll('.kb-key').forEach(k => k.classList.remove('active'));
    const el = document.querySelector(`.kb-key[data-key="${key}"]`);
    if(el) el.classList.add('active');
  });
  document.addEventListener('keyup', () => {
    document.querySelectorAll('.kb-key').forEach(k => k.classList.remove('active'));
  });
});
