// ===================== DATA =====================

const VOCAB_4 = [
  { en: "Primary school",       kz: "Бастауыш мектеп" },
  { en: "Secondary school",     kz: "Орта мектеп" },
  { en: "Higher education",     kz: "Жоғары білім" },
  { en: "GCSE",                 kz: "Жалпы орта білім сертификаты" },
  { en: "A-levels",             kz: "Жоғары деңгей емтиханы" },
  { en: "Compulsory",           kz: "Міндетті" },
  { en: "Curriculum",           kz: "Оқу бағдарламасы" },
  { en: "Boarding school",      kz: "Интернат мектебі" },
  { en: "Tuition fee",          kz: "Оқу ақысы" },
  { en: "Scholarship",          kz: "Стипендия / грант" },
  { en: "State school",         kz: "Мемлекеттік мектеп" },
  { en: "Private school",       kz: "Жеке мектеп" },
];

const VOCAB_5 = [
  { en: "Adaptor",          kz: "Бейімделгіш адам" },
  { en: "Workaholic",       kz: "Жұмысқа тәуелді адам" },
  { en: "Procrastinator",   kz: "Іс-әрекетті кейінге қалдырушы" },
  { en: "Multitasker",      kz: "Бір мезгілде бірнеше іс атқарушы" },
  { en: "Delegator",        kz: "Тапсырма бөлуші" },
  { en: "Yes-man",          kz: "Барлығына «иә» деуші" },
  { en: "Hazardous",        kz: "Қауіпті" },
  { en: "Unpredictable",    kz: "Болжауға болмайтын" },
  { en: "Stressful",        kz: "Стресс тудыратын" },
  { en: "Secure",           kz: "Тұрақты" },
  { en: "Rewarding",        kz: "Пайдалы / қанағаттандыратын" },
  { en: "Demanding",        kz: "Қиын, талапшыл" },
  { en: "Stimulating",      kz: "Қызықтыратын" },
  { en: "Tiring",           kz: "Шаршататын" },
  { en: "Mind-numbing",     kz: "Жалықтыратын" },
  { en: "Arduous",          kz: "Өте қиын" },
];

const PROFESSIONS = [
  { name: "Doctor",            icon: "🩺" },
  { name: "Architect",         icon: "🏛️" },
  { name: "Marine Biologist",  icon: "🐠" },
  { name: "Electrician",       icon: "⚡" },
  { name: "Journalist",        icon: "📰" },
  { name: "Chef",              icon: "👨‍🍳" },
  { name: "Software Developer",icon: "💻" },
  { name: "Pilot",             icon: "✈️" },
  { name: "Veterinarian",      icon: "🐾" },
  { name: "Businessman",       icon: "💼" },
  { name: "Fashion Designer",  icon: "👗" },
  { name: "Firefighter",       icon: "🚒" },
  { name: "Musician",          icon: "🎵" },
  { name: "Teacher",           icon: "📚" },
];

// ===================== QUIZ DATA =====================

const MC_W4 = [
  {
    q: "What is a 'gnomon'?",
    opts: ["A water clock", "The central rod of a sundial", "An ancient hourglass", "A stone obelisk"],
    ans: 1
  },
  {
    q: "Which device uses falling sand to measure time?",
    opts: ["Clepsydra", "Atomic clock", "Hourglass", "Sundial"],
    ans: 2
  },
  {
    q: "What does 'evolved' mean in the context of timekeeping?",
    opts: ["Stayed the same", "Disappeared", "Changed and developed over time", "Became less accurate"],
    ans: 2
  },
  {
    q: "The word 'precise' means:",
    opts: ["Fast", "Exact and accurate", "Old and broken", "Beautiful"],
    ans: 1
  },
  {
    q: "A 'clepsydra' is:",
    opts: ["A mechanical clock", "An atomic device", "An ancient water clock", "A type of calendar"],
    ans: 2
  },
];

const TF_W4 = [
  { q: "The atomic clock was invented in the year 1349.", answer: false },
  { q: "Ancient Egyptians used water to track time when there was no sun.", answer: true },
  { q: "The hourglass became popular before the sundial was invented.", answer: false },
];

const MC_W5L1 = [
  {
    q: "A person who always delays tasks is called a:",
    opts: ["Workaholic", "Delegator", "Procrastinator", "Adaptor"],
    ans: 2
  },
  {
    q: "Which word means 'brings satisfaction and is worth doing'?",
    opts: ["Stressful", "Rewarding", "Tiring", "Hazardous"],
    ans: 1
  },
  {
    q: "A 'multitasker' is someone who:",
    opts: ["Works very slowly", "Does only one job", "Handles several tasks at once", "Never finishes tasks"],
    ans: 2
  },
  {
    q: "The opposite of 'secure' in a job context is:",
    opts: ["Demanding", "Stimulating", "Unstable / risky", "Rewarding"],
    ans: 2
  },
  {
    q: "'Arduous' describes a job that is:",
    opts: ["Very easy and fun", "Extremely difficult and tiring", "Well-paid and exciting", "Flexible and relaxed"],
    ans: 1
  },
];

const TF_W5L1 = [
  { q: "A 'yes-man' always disagrees with their manager's decisions.", answer: false },
  { q: "A hazardous job involves physical or health risks.", answer: true },
  { q: "A stimulating job makes you feel bored and unmotivated.", answer: false },
];

const MC_W5L2 = [
  {
    q: "Which job quality means 'causes a lot of stress'?",
    opts: ["Secure", "Stimulating", "Stressful", "Rewarding"],
    ans: 2
  },
  {
    q: "If a job is 'demanding', it means:",
    opts: ["Easy to do", "Requires a lot of effort and skill", "Involves travel", "Is well-paid"],
    ans: 1
  },
  {
    q: "A 'workaholic' typically:",
    opts: ["Avoids work at all costs", "Works excessively long hours", "Delegates all tasks", "Finishes work early"],
    ans: 1
  },
  {
    q: "'Mind-numbing' describes work that is:",
    opts: ["Exciting and creative", "Physically dangerous", "Extremely repetitive and boring", "Well-organised"],
    ans: 2
  },
  {
    q: "Which word means the same as 'dangerous'?",
    opts: ["Unpredictable", "Secure", "Hazardous", "Tiring"],
    ans: 2
  },
];

const TF_W5L2 = [
  { q: "A secure job means you are likely to keep it for a long time.", answer: true },
  { q: "An 'adaptor' is someone who finds it very hard to change or adjust.", answer: false },
  { q: "Writing 'why should the company hire you' is an important part of a job application.", answer: true },
];

// ===================== STATE =====================

const state = {
  vocab4: { idx: 0, flipped: false },
  vocab5: { idx: 0, flipped: false },
};

// ===================== NAVIGATION =====================

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ===================== BUILD MODULES GRIDS =====================

function buildVocabGrid() {
  const grid = document.getElementById('vocab-modules-grid');
  const mods = [
    { n: 1, title: "Greetings & Introductions", desc: "Basic phrases", locked: true },
    { n: 2, title: "Family & Home",              desc: "Household vocabulary", locked: true },
    { n: 3, title: "Daily Routines",             desc: "Time expressions", locked: true },
    { n: 4, title: "Educational Systems",        desc: "01 April lesson", locked: false, featured: true, page: 'page-vocab-4' },
    { n: 5, title: "The World of Work",          desc: "Lessons 3 & 4", locked: false, featured: true, page: 'page-vocab-5' },
    { n: 6, title: "Travel & Transport",         desc: "Coming soon", locked: true },
    { n: 7, title: "Food & Culture",             desc: "Coming soon", locked: true },
    { n: 8, title: "Environment",                desc: "Coming soon", locked: true },
    { n: 9, title: "Technology",                 desc: "Coming soon", locked: true },
    { n: 10, title: "Health & Medicine",         desc: "Coming soon", locked: true },
  ];
  grid.innerHTML = mods.map(m => `
    <div class="module-card ${m.locked ? 'locked' : ''} ${m.featured ? 'featured' : ''}"
         onclick="${m.locked ? '' : `showPage('${m.page}')`}">
      <div class="module-num">Module ${m.n}</div>
      <div class="module-title">${m.title}</div>
      <div class="module-desc">${m.desc}</div>
      ${!m.locked ? `<div class="module-badge">Active</div>` : `<div class="module-badge coming">🔒 Coming soon</div>`}
    </div>
  `).join('');
}

function buildWritingGrid() {
  const grid = document.getElementById('writing-modules-grid');
  const mods = [
    { n: 1, title: "Describing Yourself",    desc: "Personal statements", locked: true },
    { n: 2, title: "My Home City",           desc: "Descriptive writing", locked: true },
    { n: 3, title: "An Unforgettable Day",   desc: "Narrative writing", locked: true },
    { n: 4, title: "Timekeeping Devices",    desc: "01 April — Essay challenge", locked: false, featured: true, page: 'page-writing-4' },
    { n: 5, title: "The World of Work",      desc: "Professions + Resume builder", locked: false, featured: true, page: 'page-writing-5' },
    { n: 6, title: "My Dream School",        desc: "Coming soon", locked: true },
    { n: 7, title: "Environment & Future",   desc: "Coming soon", locked: true },
    { n: 8, title: "Technology in Life",     desc: "Coming soon", locked: true },
    { n: 9, title: "Opinion Essay",          desc: "Coming soon", locked: true },
    { n: 10, title: "Final Portfolio",       desc: "Coming soon", locked: true },
  ];
  grid.innerHTML = mods.map(m => `
    <div class="module-card ${m.locked ? 'locked' : ''} ${m.featured ? 'featured' : ''}"
         onclick="${m.locked ? '' : `showPage('${m.page}')`}">
      <div class="module-num">Module ${m.n}</div>
      <div class="module-title">${m.title}</div>
      <div class="module-desc">${m.desc}</div>
      ${!m.locked ? `<div class="module-badge">Active</div>` : `<div class="module-badge coming">🔒 Coming soon</div>`}
    </div>
  `).join('');
}

// ===================== WORD LISTS =====================

function buildWordList(vocab, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = vocab.map(w => `
    <div class="word-card">
      <span class="word-en">${w.en}</span>
      <span class="word-kz">${w.kz}</span>
    </div>
  `).join('');
}

// ===================== FLASHCARDS =====================

function renderFlashcard(key) {
  const map = { vocab4: { vocab: VOCAB_4, front: 'fc4-front', back: 'fc4-back', counter: 'fc4-counter', card: 'fc4' },
                vocab5: { vocab: VOCAB_5, front: 'fc5-front', back: 'fc5-back', counter: 'fc5-counter', card: 'fc5' } };
  const d = map[key];
  const item = d.vocab[state[key].idx];
  document.getElementById(d.front).textContent = item.en;
  document.getElementById(d.back).textContent = item.kz;
  document.getElementById(d.counter).textContent = `${state[key].idx + 1} / ${d.vocab.length}`;
  const card = document.getElementById(d.card);
  card.classList.remove('flipped');
  state[key].flipped = false;
}

function flipCard(cardId) {
  document.getElementById(cardId).classList.toggle('flipped');
}

function nextCard(key) {
  const vocab = key === 'vocab4' ? VOCAB_4 : VOCAB_5;
  state[key].idx = (state[key].idx + 1) % vocab.length;
  renderFlashcard(key);
}

function prevCard(key) {
  const vocab = key === 'vocab4' ? VOCAB_4 : VOCAB_5;
  state[key].idx = (state[key].idx - 1 + vocab.length) % vocab.length;
  renderFlashcard(key);
}

// ===================== MULTIPLE CHOICE =====================

function buildMC(questions, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = questions.map((q, qi) => `
    <div class="mc-question" id="mc-q-${containerId}-${qi}">
      <p>${qi + 1}. ${q.q}</p>
      <div class="mc-options">
        ${q.opts.map((opt, oi) => `
          <label class="mc-opt" id="mc-opt-${containerId}-${qi}-${oi}">
            <input type="radio" name="mc-${containerId}-${qi}" value="${oi}">
            ${opt}
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function checkMC(prefix, nextStep) {
  const mcData = { w4: MC_W4, w5l1: MC_W5L1, w5l2: MC_W5L2 };
  const questions = mcData[prefix];
  const containerId = `${prefix}-mc-area`;
  let score = 0;
  let allAnswered = true;

  questions.forEach((q, qi) => {
    const selected = document.querySelector(`input[name="mc-${containerId}-${qi}"]:checked`);
    if (!selected) { allAnswered = false; return; }
    const val = parseInt(selected.value);
    // Clear previous
    q.opts.forEach((_, oi) => {
      const el = document.getElementById(`mc-opt-${containerId}-${qi}-${oi}`);
      el.classList.remove('correct', 'incorrect');
    });
    const correctEl = document.getElementById(`mc-opt-${containerId}-${qi}-${q.ans}`);
    correctEl.classList.add('correct');
    if (val !== q.ans) {
      document.getElementById(`mc-opt-${containerId}-${qi}-${val}`).classList.add('incorrect');
    } else {
      score++;
    }
  });

  const resultEl = document.getElementById(`${prefix}-mc-result`);
  if (!allAnswered) {
    resultEl.textContent = '⚠️ Please answer all questions before checking!';
    resultEl.className = 'result-msg show bad';
    return;
  }

  const pct = Math.round((score / questions.length) * 100);
  if (pct >= 60) {
    resultEl.textContent = `✅ Great job! You scored ${score}/${questions.length} (${pct}%). Moving to the next task...`;
    resultEl.className = 'result-msg show good';
    setTimeout(() => {
      resultEl.className = 'result-msg';
      showStep(nextStep, prefix);
    }, 1800);
  } else {
    resultEl.textContent = `❌ You scored ${score}/${questions.length} (${pct}%). Try again — review the correct answers highlighted above!`;
    resultEl.className = 'result-msg show bad';
  }
}

// ===================== TRUE / FALSE =====================

function buildTF(questions, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = questions.map((q, qi) => `
    <div class="tf-question" id="tf-q-${containerId}-${qi}">
      <p>${qi + 1}. ${q.q}</p>
      <div class="tf-options">
        <button class="tf-btn true-btn" onclick="selectTF(this, '${containerId}', ${qi}, true)">✅ True</button>
        <button class="tf-btn false-btn" onclick="selectTF(this, '${containerId}', ${qi}, false)">❌ False</button>
      </div>
    </div>
  `).join('');
}

function selectTF(btn, containerId, qi, val) {
  const parent = document.getElementById(`tf-q-${containerId}-${qi}`);
  parent.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  btn.dataset.val = val;
}

function checkTF(prefix, nextStep) {
  const tfData = { w4: TF_W4, w5l1: TF_W5L1, w5l2: TF_W5L2 };
  const questions = tfData[prefix];
  const containerId = `${prefix}-tf-area`;
  let score = 0;
  let allAnswered = true;

  questions.forEach((q, qi) => {
    const selected = document.querySelector(`#tf-q-${containerId}-${qi} .tf-btn.selected`);
    if (!selected) { allAnswered = false; return; }
    const val = selected.dataset.val === 'true';
    const parent = document.getElementById(`tf-q-${containerId}-${qi}`);
    parent.querySelectorAll('.tf-btn').forEach(b => {
      b.classList.remove('correct', 'wrong');
      const bVal = b.classList.contains('true-btn');
      if (bVal === q.answer) b.classList.add('correct');
    });
    if (val === q.answer) score++;
    else selected.classList.add('wrong');
  });

  const resultEl = document.getElementById(`${prefix}-tf-result`);
  if (!allAnswered) {
    resultEl.textContent = '⚠️ Please answer all questions!';
    resultEl.className = 'result-msg show bad';
    return;
  }

  if (score >= 2) {
    resultEl.textContent = `✅ Well done! ${score}/${questions.length} correct. Moving on...`;
    resultEl.className = 'result-msg show good';
    setTimeout(() => {
      resultEl.className = 'result-msg';
      showStep(nextStep, prefix);
      if (nextStep === 'w5l1-step3') generateProfessions();
    }, 1800);
  } else {
    resultEl.textContent = `❌ ${score}/${questions.length} correct. Check the highlighted answers and try again!`;
    resultEl.className = 'result-msg show bad';
  }
}

// ===================== STEP MANAGEMENT =====================

function showStep(stepId, prefix) {
  // Hide all steps for this prefix
  const stepNums = ['step1', 'step2', 'step3'];
  stepNums.forEach((s, i) => {
    const el = document.getElementById(`${prefix}-${s}`);
    if (el) {
      el.classList.add('hidden');
    }
    const dot = document.getElementById(`${prefix}-${s}-dot`);
    if (dot) dot.classList.remove('active', 'done');
  });

  document.getElementById(stepId).classList.remove('hidden');

  // Update dots
  const activeStep = stepId.replace(`${prefix}-`, '');
  const idx = stepNums.indexOf(activeStep);
  stepNums.forEach((s, i) => {
    const dot = document.getElementById(`${prefix}-${s}-dot`);
    if (!dot) return;
    if (i < idx) dot.classList.add('done');
    else if (i === idx) dot.classList.add('active');
  });
}

// ===================== PROFESSIONS =====================

function generateProfessions() {
  const shuffled = [...PROFESSIONS].sort(() => Math.random() - 0.5);
  const chosen = shuffled.slice(0, 2);
  const display = document.getElementById('w5-professions-display');
  if (display) {
    display.innerHTML = chosen.map(p => `<div class="prof-chip">${p.icon} ${p.name}</div>`).join('');
  }
}

// ===================== LESSON TABS =====================

function switchLesson(n) {
  document.getElementById('w5-lesson1').classList.toggle('hidden', n !== 1);
  document.getElementById('w5-lesson2').classList.toggle('hidden', n !== 2);
  document.getElementById('ltab1').classList.toggle('active', n === 1);
  document.getElementById('ltab2').classList.toggle('active', n === 2);
}

// ===================== WORD COUNTS =====================

function attachWordCount(textareaId, counterId) {
  const ta = document.getElementById(textareaId);
  const counter = document.getElementById(counterId);
  if (!ta || !counter) return;
  ta.addEventListener('input', () => {
    const words = ta.value.trim() === '' ? 0 : ta.value.trim().split(/\s+/).length;
    counter.textContent = `Words: ${words}`;
  });
}

// ===================== EMAIL SUBMISSION =====================

async function submitEssay(essayId, nameId, subject) {
  const essay = document.getElementById(essayId).value.trim();
  const name = document.getElementById(nameId).value.trim();
  const msgId = essayId.split('-').slice(0, -1).join('-') + '-submit-msg'
               .replace('w4-essay', 'w4')
               .replace('w5l1-essay', 'w5l1');

  // Find the right submit msg element
  const submitMsgEl = findSubmitMsg(essayId);

  if (!name) { showSubmitMsg(submitMsgEl, 'err', '⚠️ Please enter your name before submitting.'); return; }
  if (!essay || essay.length < 50) { showSubmitMsg(submitMsgEl, 'err', '⚠️ Please write a longer essay before submitting (minimum 50 characters).'); return; }

  const words = essay.split(/\s+/).length;
  const body = `Student: ${name}\nModule: ${subject}\nWord count: ${words}\n\n--- ESSAY ---\n\n${essay}`;

  sendEmail(subject, body, name, submitMsgEl);
}

async function submitResume() {
  const name    = document.getElementById('r-name').value.trim();
  const age     = document.getElementById('r-age').value.trim();
  const city    = document.getElementById('r-city').value.trim();
  const email   = document.getElementById('r-email').value.trim();
  const job     = document.getElementById('r-job').value.trim();
  const person  = document.getElementById('r-personality').value.trim();
  const school  = document.getElementById('r-school').value.trim();
  const years   = document.getElementById('r-years').value.trim();
  const spec    = document.getElementById('r-specialty').value.trim();
  const lang1   = document.getElementById('r-lang1').value.trim();
  const lang2   = document.getElementById('r-lang2').value.trim();
  const achieve = document.getElementById('r-achievements').value.trim();
  const why     = document.getElementById('r-why').value.trim();
  const sName   = document.getElementById('w5l2-student-name').value.trim();

  const skills = [...document.querySelectorAll('#skills-checkboxes input:checked')].map(cb => cb.value);
  const extraSkills = document.getElementById('r-skills-extra').value.trim();
  const allSkills = [...skills, ...(extraSkills ? [extraSkills] : [])].join(', ');

  const submitEl = document.getElementById('w5l2-submit-msg');

  if (!name || !job || !why) {
    showSubmitMsg(submitEl, 'err', '⚠️ Please fill in at least your name, job and the "Why hire you" section.');
    return;
  }

  if (why.length < 40) {
    showSubmitMsg(submitEl, 'err', '⚠️ Please write more in the "Why should the company hire you?" section.');
    return;
  }

  const body = `
STUDENT RESUME — Module 5, Lesson 2
Submitted by: ${sName || name}

============================
PERSONAL INFORMATION
============================
Full Name  : ${name}
Age        : ${age}
City       : ${city}
Email      : ${email}

============================
JOB APPLIED FOR
============================
${job}

============================
ABOUT ME — PERSONALITY
============================
${person}

============================
EDUCATION
============================
School/College : ${school}
Years          : ${years}
Specialty      : ${spec}

============================
SKILLS
============================
${allSkills || '(not filled)'}

============================
LANGUAGES
============================
${lang1}
${lang2}

============================
ACHIEVEMENTS / HOBBIES
============================
${achieve}

============================
WHY SHOULD THE COMPANY HIRE ME?
============================
${why}
`.trim();

  sendEmail(`Resume: ${name} — ${job}`, body, name, submitEl);
}

function findSubmitMsg(essayId) {
  const map = {
    'w4-essay': 'w4-submit-msg',
    'w5l1-essay': 'w5l1-submit-msg',
  };
  return document.getElementById(map[essayId] || 'w4-submit-msg');
}

async function sendEmail(subject, body, studentName, submitEl) {
  showSubmitMsg(submitEl, 'ok', '⏳ Sending your work...');

  // Use EmailJS free tier (no backend needed)
  // We use a mailto fallback that opens email client
  // For real sending: integrate EmailJS

  try {
    const params = new URLSearchParams({
      to: 'meruert.tursynova2004@gmail.com',
      subject: `[English Hub] ${subject} — ${studentName}`,
      body: body
    });

    // Try EmailJS first (if configured), fallback to mailto
    if (typeof emailjs !== 'undefined') {
      await emailjs.send('service_id', 'template_id', {
        to_email: 'meruert.tursynova2004@gmail.com',
        subject: `[English Hub] ${subject} — ${studentName}`,
        message: body,
        student_name: studentName
      });
      showSubmitMsg(submitEl, 'ok', `✅ Submitted successfully! Your essay has been sent to the teacher. Well done, ${studentName}! 🌟`);
    } else {
      // Fallback: open mailto
      const mailtoLink = `mailto:meruert.tursynova2004@gmail.com?subject=${encodeURIComponent('[English Hub] ' + subject + ' — ' + studentName)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');
      showSubmitMsg(submitEl, 'ok', `✅ Your email app has opened with your work ready to send. Please click "Send" in your email to submit to the teacher! 📧`);
    }
  } catch (err) {
    // Mailto fallback
    const mailtoLink = `mailto:meruert.tursynova2004@gmail.com?subject=${encodeURIComponent('[English Hub] ' + subject + ' — ' + studentName)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    showSubmitMsg(submitEl, 'ok', `✅ Your email app has opened! Please press Send to submit to the teacher. 📧`);
  }
}

function showSubmitMsg(el, type, text) {
  if (!el) return;
  el.textContent = text;
  el.className = `submit-msg show ${type}`;
}

// ===================== TOAST =====================

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 3000);
}

// ===================== INIT =====================

document.addEventListener('DOMContentLoaded', () => {
  buildVocabGrid();
  buildWritingGrid();

  buildWordList(VOCAB_4, 'wordlist-4');
  buildWordList(VOCAB_5, 'wordlist-5');

  renderFlashcard('vocab4');
  renderFlashcard('vocab5');

  buildMC(MC_W4,   'w4-mc-area');
  buildTF(TF_W4,   'w4-tf-area');
  buildMC(MC_W5L1, 'w5l1-mc-area');
  buildTF(TF_W5L1, 'w5l1-tf-area');
  buildMC(MC_W5L2, 'w5l2-mc-area');
  buildTF(TF_W5L2, 'w5l2-tf-area');

  generateProfessions();

  attachWordCount('w4-essay',   'w4-wc');
  attachWordCount('w5l1-essay', 'w5l1-wc');
  attachWordCount('r-why',      'r-why-wc');
});
