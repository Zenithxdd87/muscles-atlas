let currentMuscle = null;
let currentMode = 'gym';
let timerInterval;

const data = {
    // ГЪРДИ
    chest: {
        title: "Гърди (Pectoralis Major)",
        desc: "Основен мускул за бутане. Състои се от горна, средна и долна част.",
        funcs: ["Хоризонтална аддукция", "Вътрешна ротация"],
        risk: "Среден Риск",
        gym: [
            { name: "Бенч преса с лост", diff: 2, secondary: ["triceps", "shoulders_front"] },
            { name: "Наклонена лежанка с дъмбели", diff: 2, secondary: ["shoulders_front"] },
            { name: "Кофички (Chest Focus)", diff: 3, secondary: ["triceps"] }
        ],
        home: [{ name: "Лицеви опори", diff: 1, secondary: ["triceps"] }],
        stretching: [{ name: "Разтягане на касата на врата", goal: "30 сек." }],
        stats: { strength: 90, volume: 85 },
        tips: ["Свийте лопатките.", "Лактите на 45 градуса."],
        mistakes: ["Отскачане на лоста.", "Прекалено разтворени лакти."]
    },
    // ГРЪБ - ШИРОК
    lats: {
        title: "Широк гръбен мускул (Lats)",
        desc: "Най-големият мускул в горната част на тялото.",
        funcs: ["Аддукция на рамото", "Дърпане"],
        risk: "Нисък Риск",
        gym: [
            { name: "Набирания", diff: 3, secondary: ["biceps"] },
            { name: "Вертикален скрипец", diff: 1, secondary: ["biceps"] }
        ],
        home: [{ name: "Австралийски набирания", diff: 2, secondary: ["biceps"] }],
        stretching: [{ name: "Поза 'Дете'", goal: "60 сек." }],
        stats: { strength: 95, volume: 90 },
        tips: ["Дърпайте с лактите."],
        mistakes: ["Люлеене на тялото."]
    },
    // ТРАПЕЦ
    traps: {
        title: "Трапецовиден мускул",
        desc: "Стабилизира лопатките и врата.",
        funcs: ["Елевация", "Ретракция на лопатките"],
        risk: "Нисък Риск",
        gym: [{ name: "Повдигане на рамене (Shrugs)", diff: 1, secondary: ["forearms"] }],
        home: [{ name: "Повдигане на раница", diff: 1, secondary: [] }],
        stretching: [{ name: "Наклон на главата встрани", goal: "20 сек. на страна" }],
        stats: { strength: 80, volume: 70 },
        tips: ["Не въртете раменете в кръг."],
        mistakes: ["Твърде голяма тежест."]
    },
    // РАМЕНЕ - ПРЕДНО
    shoulders_front: {
        title: "Предно рамо (Anterior Deltoid)",
        desc: "Участва активно във всички бутащи движения.",
        funcs: ["Антефлексия на рамото"],
        risk: "Среден Риск",
        gym: [{ name: "Военна преса", diff: 3, secondary: ["triceps"] }],
        home: [{ name: "Пийк опори (Pike Pushups)", diff: 3, secondary: ["triceps"] }],
        stretching: [{ name: "Ръце зад гърба", goal: "30 сек." }],
        stats: { strength: 85, volume: 80 },
        tips: ["Стягайте ядрото (core)."],
        mistakes: ["Прекомерно извиване на кръста."]
    },
    // РАМЕНЕ - СРЕДНО
    shoulders_side: {
        title: "Средно рамо (Lateral Deltoid)",
        desc: "Отговаря за ширината на раменете.",
        funcs: ["Абдукция встрани"],
        risk: "Нисък Риск",
        gym: [{ name: "Разтваряне встрани с дъмбели", diff: 1, secondary: ["traps"] }],
        home: [{ name: "Разтваряне с ластик/туби", diff: 1, secondary: [] }],
        stretching: [{ name: "Ръка пред гърдите", goal: "30 сек." }],
        stats: { strength: 50, volume: 95 },
        tips: ["Водете с лактите нагоре."],
        mistakes: ["Използване на инерция."]
    },
    // РАМЕНЕ - ЗАДНО
    shoulders_rear: {
        title: "Задно рамо (Posterior Deltoid)",
        desc: "Важно за стойката и здравето на раменната става.",
        funcs: ["Хоризонтална абдукция"],
        risk: "Нисък Риск",
        gym: [{ name: "Face Pulls", diff: 2, secondary: ["traps"] }],
        home: [{ name: "Разтваряне от наклон", diff: 2, secondary: [] }],
        stretching: [{ name: "Кръстосване на ръце", goal: "30 сек." }],
        stats: { strength: 40, volume: 85 },
        tips: ["Контролирайте тежестта."],
        mistakes: ["Твърде голяма тежест."]
    },
    // БИЦЕПС
    biceps: {
        title: "Бицепс (Biceps Brachii)",
        desc: "Сгъвач на ръката.",
        funcs: ["Флексия", "Супинация"],
        risk: "Нисък Риск",
        gym: [{ name: "Сгъване с щанга", diff: 2, secondary: ["forearms"] }],
        home: [{ name: "Сгъване с раница", diff: 1, secondary: [] }],
        stretching: [{ name: "Разтягане на стена", goal: "30 сек." }],
        stats: { strength: 60, volume: 95 },
        tips: ["Лактите до тялото."],
        mistakes: ["Люлеене на тялото."]
    },
    // ТРИЦЕПС
    triceps: {
        title: "Трицепс (Triceps Brachii)",
        desc: "Заема по-голямата част от ръката.",
        funcs: ["Екстензия"],
        risk: "Нисък Риск",
        gym: [{ name: "Разгъване на скрипец", diff: 1, secondary: [] }],
        home: [{ name: "Диамантени опори", diff: 2, secondary: ["chest"] }],
        stretching: [{ name: "Ръка зад главата", goal: "30 сек." }],
        stats: { strength: 75, volume: 90 },
        tips: ["Дръжте лактите прибрани."],
        mistakes: ["Разтваряне на лактите."]
    },
    // КОРЕМ
    abs: {
        title: "Корем (Core)",
        desc: "Центърът на стабилността.",
        funcs: ["Стабилизация", "Флексия на торса"],
        risk: "Нисък Риск",
        gym: [{ name: "Повдигане на крака от вис", diff: 3, secondary: [] }],
        home: [{ name: "Планк", diff: 2, secondary: [] }],
        stretching: [{ name: "Поза 'Кобра'", goal: "30 сек." }],
        stats: { strength: 80, volume: 70 },
        tips: ["Стягайте корема, не врата."],
        mistakes: ["Извиване на кръста."]
    },
    // КРЪСТ
    lowerback: {
        title: "Кръст (Lower Back)",
        desc: "Мускули около гръбначния стълб.",
        funcs: ["Екстензия на гръбнака"],
        risk: "Висок Риск",
        gym: [{ name: "Мъртва тяга", diff: 3, secondary: ["hamstrings", "glutes"] }],
        home: [{ name: "Супермен", diff: 1, secondary: ["glutes"] }],
        stretching: [{ name: "Котешки гръб", goal: "30 сек." }],
        stats: { strength: 100, volume: 60 },
        tips: ["Гърбът винаги прав!"],
        mistakes: ["Изгърбване под тежест."]
    },
    // ПРЕДНО БЕДРО
    quads: {
        title: "Предно бедро (Quadriceps)",
        desc: "Най-мощната група мускули.",
        funcs: ["Екстензия на коляното"],
        risk: "Висок Риск",
        gym: [{ name: "Клек с щанга", diff: 3, secondary: ["glutes"] }],
        home: [{ name: "Български клек", diff: 3, secondary: ["glutes"] }],
        stretching: [{ name: "Пета към седалище", goal: "45 сек." }],
        stats: { strength: 100, volume: 100 },
        tips: ["Натискайте на цяло стъпало."],
        mistakes: ["Вдигане на петите."]
    },
    // ГЛУТЕУС
    glutes: {
        title: "Седалище (Glutes)",
        desc: "Най-големият мускул в тялото.",
        funcs: ["Екстензия на таза"],
        risk: "Нисък Риск",
        gym: [{ name: "Хип Тръст", diff: 2, secondary: ["hamstrings"] }],
        home: [{ name: "Глутеус мост", diff: 1, secondary: ["hamstrings"] }],
        stretching: [{ name: "Поза 'Гълъб'", goal: "45 сек." }],
        stats: { strength: 100, volume: 90 },
        tips: ["Стискайте силно в пика."],
        mistakes: ["Прекалено извиване на кръста."]
    },
    // ЗАДНО БЕДРО
    hamstrings: {
        title: "Задно бедро (Hamstrings)",
        desc: "Важни за бягане и стабилност на коляното.",
        funcs: ["Флексия на коляното"],
        risk: "Среден Риск",
        gym: [{ name: "Римска тяга", diff: 3, secondary: ["glutes", "lowerback"] }],
        home: [{ name: "Нордик сгъване", diff: 3, secondary: [] }],
        stretching: [{ name: "Наклон напред", goal: "45 сек." }],
        stats: { strength: 85, volume: 80 },
        tips: ["Бутайте таза назад."],
        mistakes: ["Извиване на гърба."]
    },
    // ПРАСЦИ
    calves: {
        title: "Прасци (Calves)",
        desc: "Мускулите на долната част на крака.",
        funcs: ["Плантарна флексия"],
        risk: "Нисък Риск",
        gym: [{ name: "Повдигане на пръсти (машина)", diff: 1, secondary: [] }],
        home: [{ name: "Повдигане на пръсти на стъпало", diff: 1, secondary: [] }],
        stretching: [{ name: "Разтягане на стена", goal: "30 сек." }],
        stats: { strength: 80, volume: 50 },
        tips: ["Задръжте в горна точка."],
        mistakes: ["Подскачане (инерция)."]
    },
    // ПРЕДМИШНИЦА
    forearms: {
        title: "Предмишници",
        desc: "Отговарят за силата на хвата.",
        funcs: ["Хват", "Движение на китката"],
        risk: "Нисък Риск",
        gym: [{ name: "Фермерска разходка", diff: 2, secondary: ["traps"] }],
        home: [{ name: "Висене на лост", diff: 2, secondary: ["lats"] }],
        stretching: [{ name: "Разтягане на китките", goal: "20 сек." }],
        stats: { strength: 70, volume: 60 },
        tips: ["Стискайте лоста силно."],
        mistakes: ["Прекалено натоварване на китката."]
    }
};

// --- ОСНОВНА ЛОГИКА ---

function selectMuscle(mId) {
    currentMuscle = mId;
    updateUI();
}

function updateUI() {
    const m = data[currentMuscle];
    if (!m) {
        console.error("Липсват данни за мускул с ID:", currentMuscle);
        return;
    }

    resetModelColors();
    highlightBodyParts(currentMuscle, 'active-muscle');

    const infoCard = document.getElementById('info-card');
    const extraCard = document.getElementById('extra-info');
    const statsCard = document.getElementById('stats-container');
    const riskBadge = document.getElementById('risk-badge');

    infoCard.style.display = 'none';
    extraCard.style.display = 'none';
    statsCard.style.display = 'none';

    // Риск индикатор
    riskBadge.innerText = m.risk;
    riskBadge.style.background = m.risk.includes("Висок") ? "#ff4d4d" : (m.risk.includes("Среден") ? "#ff9800" : "#4caf50");

    if (currentMode === 'info') {
        extraCard.style.display = 'block';
        extraCard.innerHTML = `
            <h2>${m.title} - Анатомия📖</h2>
            <p>${m.desc}</p>
            <div style="margin-top:10px;">
                <strong>Функции:</strong><br>
                ${m.funcs.map(f => `<span class="func-tag">${f}</span>`).join('')}
            </div>
        `;
    } 
    else if (currentMode === 'stretch') {
        extraCard.style.display = 'block';
        extraCard.innerHTML = `
            <h2 style="color:var(--stretch)">Стречинг🧘</h2>
            ${m.stretching.map(s => `
                <div class="stretch-card">
                    <strong>${s.name}</strong><br>
                    <small>Цел: ${s.goal}</small>
                </div>
            `).join('')}
            <div class="timer-box">
                <div id="timer-display">30</div>
                <button class="timer-btn" onclick="startTimer(30)">СТАРТ</button>
            </div>
        `;
    }
    else {
        infoCard.style.display = 'block';
        statsCard.style.display = 'block';
        const exList = (currentMode === 'gym') ? m.gym : m.home;
        
        infoCard.innerHTML = `<h1>${m.title}</h1>` + exList.map((ex, i) => `
            <div class="exercise-item" onclick="activateSynergy(${i})">
                <span>${ex.name}</span>
                <span class="diff-badge">${"⚡".repeat(ex.diff)}</span>
            </div>
        `).join('');
        
        setTimeout(() => {
            document.getElementById('bar-strength').style.width = m.stats.strength + '%';
            document.getElementById('bar-volume').style.width = m.stats.volume + '%';
        }, 50);
    }

    document.getElementById('tips-container').innerHTML = m.tips.map(t => `<div class="tip-item">💡 ${t}</div>`).join('');
    document.getElementById('mistakes-container').innerHTML = m.mistakes.map(mis => `<div class="mistake-item">🛑 ${mis}</div>`).join('');
}

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
    display.innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        display.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Времето изтече!");
        }
    }, 1000);
}

function activateSynergy(idx) {
    const m = data[currentMuscle];
    const ex = (currentMode === 'gym' ? m.gym : m.home)[idx];
    resetModelColors();
    highlightBodyParts(currentMuscle, 'active-muscle');
    if (ex.secondary) ex.secondary.forEach(sId => highlightBodyParts(sId, 'synergy-muscle'));
    
    document.querySelectorAll('.exercise-item').forEach(el => el.classList.remove('active-ex'));
    event.currentTarget.classList.add('active-ex');
}

function highlightBodyParts(id, cls) {
    // Търсим всички елементи, чието ID започва с това име (за L/R части)
    document.querySelectorAll(`[id^="${id}"]`).forEach(el => el.classList.add(cls));
}

function resetModelColors() {
    document.querySelectorAll('.muscle-segment').forEach(el => el.classList.remove('active-muscle', 'synergy-muscle'));
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
