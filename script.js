let currentMuscle = null;
let currentMode = 'gym';
let currentEquipFilter = 'all';
let fatiguedMuscles = {}; 
let timerInterval;

// БАЗА ДАННИ С АБСОЛЮТНО ВСИЧКИ ГРУПИ И НОВИТЕ ТАГОВЕ ЗА ОБОРУДВАНЕ
const data = {
    chest: {
        title: "Гърди (Pectoralis Major)",
        desc: "Основна мускулна група за бутане.",
        risk: "Среден Риск",
        gym: [
            { name: "Бенч преса с лост", equip: "barbell", diff: 3, secondary: ["triceps", "shoulders_front"] },
            { name: "Наклонена лежанка с дъмбели", equip: "dumbbell", diff: 2, secondary: ["shoulders_front"] },
            { name: "Кросоувър на скрипец", equip: "machine", diff: 1, secondary: [] },
            { name: "Кофички", equip: "bodyweight", diff: 3, secondary: ["triceps"] }
        ],
        home: [
            { name: "Лицеви опори", equip: "bodyweight", diff: 1, secondary: ["triceps"] },
            { name: "Широки лицеви опори", equip: "bodyweight", diff: 2, secondary: [] }
        ],
        stretching: [{ name: "Разтягане на каса на врата", goal: "30 сек" }],
        stats: { strength: 90, volume: 85 },
        tips: ["Свийте лопатките.", "Лактите на 45 градуса."],
        mistakes: ["Отскачане на лоста.", "Прекалено разтворени лакти."]
    },
    traps: {
        title: "Трапец",
        desc: "Горна част на гърба и врата.",
        risk: "Нисък Риск",
        gym: [{ name: "Повдигане на рамене с лост", equip: "barbell", diff: 1, secondary: ["forearms"] }],
        home: [{ name: "Повдигане на раница", equip: "bodyweight", diff: 1, secondary: [] }],
        stretching: [{ name: "Наклон на главата", goal: "20 сек" }],
        stats: { strength: 80, volume: 70 },
        tips: ["Не въртете раменете."],
        mistakes: ["Твърде голяма тежест."]
    },
    shoulders_front: {
        title: "Предно рамо",
        desc: "Предната част на делтавидния мускул.",
        risk: "Среден Риск",
        gym: [{ name: "Военна преса", equip: "barbell", diff: 3, secondary: ["triceps"] }],
        home: [{ name: "Пийк опори", equip: "bodyweight", diff: 3, secondary: ["triceps"] }],
        stretching: [{ name: "Ръце зад гърба", goal: "30 сек" }],
        stats: { strength: 85, volume: 80 },
        tips: ["Стягайте ядрото."],
        mistakes: ["Извиване на кръста."]
    },
    lats: {
        title: "Гръб (Широк)",
        desc: "Най-големият мускул на гърба.",
        risk: "Нисък Риск",
        gym: [
            { name: "Набирания", equip: "bodyweight", diff: 3, secondary: ["biceps"] },
            { name: "Вертикален скрипец", equip: "machine", diff: 1, secondary: ["biceps"] },
            { name: "Гребане с дъмбел", equip: "dumbbell", diff: 2, secondary: [] }
        ],
        home: [{ name: "Набирания на лост", equip: "bodyweight", diff: 3, secondary: ["biceps"] }],
        stretching: [{ name: "Поза Дете", goal: "60 сек" }],
        stats: { strength: 95, volume: 90 },
        tips: ["Дърпайте с лактите."],
        mistakes: ["Люлеене на тялото."]
    },
    biceps: {
        title: "Бицепс",
        desc: "Сгъвач на ръката.",
        risk: "Нисък Риск",
        gym: [{ name: "Сгъване с EZ лост", equip: "barbell", diff: 2, secondary: [] }],
        home: [{ name: "Сгъване с туби", equip: "bodyweight", diff: 1, secondary: [] }],
        stretching: [{ name: "Стена-стреч", goal: "30 сек" }],
        stats: { strength: 65, volume: 95 },
        tips: ["Лактите до тялото."],
        mistakes: ["Използване на кръста."]
    },
    triceps: {
        title: "Трицепс",
        desc: "Заема 2/3 от ръката.",
        risk: "Нисък Риск",
        gym: [{ name: "Френско разгъване", equip: "barbell", diff: 3, secondary: [] }],
        home: [{ name: "Диамантени опори", equip: "bodyweight", diff: 2, secondary: ["chest"] }],
        stretching: [{ name: "Ръка зад глава", goal: "30 сек" }],
        stats: { strength: 75, volume: 90 },
        tips: ["Дръжте лактите прибрани."],
        mistakes: ["Разтваряне на лактите."]
    },
    abs: {
        title: "Корем",
        desc: "Централна част на тялото.",
        risk: "Нисък Риск",
        gym: [{ name: "Молитва на скрипец", equip: "machine", diff: 2, secondary: [] }],
        home: [{ name: "Коремни преси", equip: "bodyweight", diff: 1, secondary: [] }],
        stretching: [{ name: "Поза Кобра", goal: "30 сек" }],
        stats: { strength: 80, volume: 75 },
        tips: ["Дишайте при сгъване."],
        mistakes: ["Дърпане на врата."]
    },
    quads: {
        title: "Предно бедро (Quadriceps)",
        desc: "Основа за силата на краката.",
        risk: "Висок Риск",
        gym: [
            { name: "Клек с лост", equip: "barbell", diff: 3, secondary: ["glutes"] },
            { name: "Лег преса", equip: "machine", diff: 2, secondary: [] },
            { name: "Български клек с дъмбели", equip: "dumbbell", diff: 3, secondary: ["glutes"] }
        ],
        home: [{ name: "Клек със собствено тегло", equip: "bodyweight", diff: 1, secondary: [] }],
        stretching: [{ name: "Пета към седалище", goal: "45 сек" }],
        stats: { strength: 100, volume: 95 },
        tips: ["Натиск на цяло стъпало."],
        mistakes: ["Колене навътре."]
    },
    glutes: {
        title: "Глутеус",
        desc: "Най-големият мускул.",
        risk: "Нисък Риск",
        gym: [{ name: "Хип Тръст с лост", equip: "barbell", diff: 2, secondary: ["hamstrings"] }],
        home: [{ name: "Глутеус мост", equip: "bodyweight", diff: 1, secondary: [] }],
        stretching: [{ name: "Поза Гълъб", goal: "45 сек" }],
        stats: { strength: 100, volume: 85 },
        tips: ["Стискайте силно."],
        mistakes: ["Прекален наклон."]
    },
    hamstrings: {
        title: "Задно бедро",
        desc: "Важни за стабилност.",
        risk: "Среден Риск",
        gym: [{ name: "Римска тяга", equip: "barbell", diff: 3, secondary: ["lowerback"] }],
        home: [{ name: "Нордик сгъване", equip: "bodyweight", diff: 3, secondary: [] }],
        stretching: [{ name: "Наклон напред", goal: "45 сек" }],
        stats: { strength: 85, volume: 80 },
        tips: ["Бутайте таза назад."],
        mistakes: ["Изгърбване."]
    },
    calves: {
        title: "Прасци",
        desc: "Долна част на краката.",
        risk: "Нисък Риск",
        gym: [{ name: "Повдигане на калф машина", equip: "machine", diff: 1, secondary: [] }],
        home: [{ name: "Повдигане на пръсти", equip: "bodyweight", diff: 1, secondary: [] }],
        stretching: [{ name: "Разтягане на стена", goal: "30 сек" }],
        stats: { strength: 70, volume: 50 },
        tips: ["Пълен обсег."],
        mistakes: ["Подскачане."]
    },
    forearms: {
        title: "Предмишници",
        desc: "За силен хват.",
        risk: "Нисък Риск",
        gym: [{ name: "Фермерска разходка", equip: "dumbbell", diff: 2, secondary: ["traps"] }],
        home: [{ name: "Висене на лост", equip: "bodyweight", diff: 2, secondary: [] }],
        stretching: [{ name: "Разтягане на китки", goal: "20 сек" }],
        stats: { strength: 70, volume: 60 },
        tips: ["Стискайте силно."],
        mistakes: ["Претоварване на китката."]
    }
};

// --- ОСНОВНИ ФУНКЦИИ ---

function selectMuscle(mId) {
    currentMuscle = mId;
    updateUI();
}

function updateUI() {
    const m = data[currentMuscle];
    if (!m) return;

    resetModelColors();
    applyFatigueStyles();
    highlightBodyParts(currentMuscle, 'active-muscle');

    // Калкулатор
    document.getElementById('calculator-container').style.display = (currentMode === 'gym') ? 'block' : 'none';

    const infoCard = document.getElementById('info-card');
    const extraCard = document.getElementById('extra-info');
    const statsCard = document.getElementById('stats-container');
    const riskBadge = document.getElementById('risk-badge');

    infoCard.style.display = 'none';
    extraCard.style.display = 'none';
    statsCard.style.display = 'none';

    riskBadge.innerText = m.risk;
    riskBadge.style.background = m.risk.includes("Висок") ? "#ff4d4d" : (m.risk.includes("Среден") ? "#ff9800" : "#4caf50");

    if (currentMode === 'info') {
        extraCard.style.display = 'block';
        extraCard.innerHTML = `<h2>${m.title} - Анатомия</h2><p>${m.desc}</p>`;
    } 
    else if (currentMode === 'stretch') {
        extraCard.style.display = 'block';
        extraCard.innerHTML = `
            <h2 style="color:var(--stretch)">Стречинг🧘</h2>
            ${m.stretching.map(s => `<div class="stretch-card"><strong>${s.name}</strong><br><small>Цел: ${s.goal}</small></div>`).join('')}
            <div class="timer-box">
                <div id="timer-display">30</div>
                <button class="timer-btn" onclick="startTimer(30)">СТАРТ</button>
            </div>`;
    }
    else {
        infoCard.style.display = 'block';
        statsCard.style.display = 'block';
        
        const exList = (currentMode === 'gym' ? m.gym : m.home);
        const filteredEx = exList.filter(ex => currentEquipFilter === 'all' || ex.equip === currentEquipFilter);

        infoCard.innerHTML = `<h1>${m.title}</h1>` + 
            (filteredEx.length > 0 ? filteredEx.map((ex, i) => `
                <div class="exercise-item" onclick="markFatigued('${currentMuscle}'); activateSynergy(${i})">
                    <span>${ex.name}</span>
                    <span class="diff-badge">${"⚡".repeat(ex.diff)}</span>
                </div>
            `).join('') : "<p>Няма намерени упражнения за това оборудване.</p>");
        
        setTimeout(() => {
            document.getElementById('bar-strength').style.width = m.stats.strength + '%';
        }, 50);
    }

    document.getElementById('tips-container').innerHTML = m.tips.map(t => `<div class="tip-item">💡 ${t}</div>`).join('');
    document.getElementById('mistakes-container').innerHTML = m.mistakes.map(mis => `<div class="mistake-item">🛑 ${mis}</div>`).join('');
}

// ФИЛТЪР
function filterEquip(equip) {
    currentEquipFilter = equip;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateUI();
}

// 1RM КАЛКУЛАТОР
function calculate1RM() {
    const w = parseFloat(document.getElementById('calc-weight').value);
    const r = parseFloat(document.getElementById('calc-reps').value);
    if (w && r) {
        const oneRM = Math.round(w * (1 + r / 30));
        document.getElementById('1rm-result').innerText = `Твоят 1RM: ${oneRM} кг`;
    }
}

// УМОРА
function markFatigued(muscleId) {
    fatiguedMuscles[muscleId] = true;
    applyFatigueStyles();
}

function applyFatigueStyles() {
    for (let mId in fatiguedMuscles) {
        highlightBodyParts(mId, 'fatigued-muscle');
    }
}

// СИНЕРГИЯ
function activateSynergy(idx) {
    const m = data[currentMuscle];
    const exList = (currentMode === 'gym' ? m.gym : m.home);
    const filtered = exList.filter(ex => currentEquipFilter === 'all' || ex.equip === currentEquipFilter);
    const ex = filtered[idx];
    if (ex && ex.secondary) {
        ex.secondary.forEach(sId => highlightBodyParts(sId, 'synergy-muscle'));
    }
}

// ПОМОЩНИ
function searchExercises() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let items = document.getElementsByClassName('exercise-item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = items[i].innerText.toLowerCase().includes(input) ? "flex" : "none";
    }
}

function startTimer(seconds) {
    clearInterval(timerInterval);
    let timeLeft = seconds;
    const display = document.getElementById('timer-display');
    timerInterval = setInterval(() => {
        timeLeft--;
        display.innerText = timeLeft;
        if (timeLeft <= 0) { clearInterval(timerInterval); alert("Времето изтече!"); }
    }, 1000);
}

function highlightBodyParts(id, cls) {
    document.querySelectorAll(`[id^="${id}"]`).forEach(el => el.classList.add(cls));
}

function resetModelColors() {
    document.querySelectorAll('.muscle-segment').forEach(el => el.classList.remove('active-muscle', 'synergy-muscle', 'fatigued-muscle'));
}

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${mode}`).classList.add('active');
    if (currentMuscle) updateUI();
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}
