let currentMuscle = null;
let currentMode = 'gym';
let timerInterval;

const data = {
    chest: {
        title: "Гърди (Pectoralis Major)",
        desc: "Големият гръден мускул е основен за хоризонталното изтласкване и аддукцията на ръцете.",
        funcs: ["Хоризонтална аддукция", "Вътрешна ротация", "Антефлексия"],
        risk: "Среден Риск",
        gym: [
            { name: "Бенч преса с лост", diff: 2, secondary: ["triceps", "shoulders_front"] },
            { name: "Наклонена лежанка с дъмбели", diff: 2, secondary: ["shoulders_front"] },
            { name: "Кросоувър (Горен скрипец)", diff: 1, secondary: [] },
            { name: "Кофички за гърди", diff: 3, secondary: ["triceps"] },
            { name: "Пек Дек Машина", diff: 1, secondary: [] }
        ],
        home: [
            { name: "Лицеви опори (Класически)", diff: 1, secondary: ["triceps"] },
            { name: "Лицеви опори с крака на високо", diff: 2, secondary: ["shoulders_front"] },
            { name: "Широки лицеви опори", diff: 2, secondary: [] }
        ],
        stretching: [{ name: "Разтягане на врата/касата", goal: "30-45 секунди" }],
        stats: { strength: 90, volume: 85 },
        tips: ["Прибирайте лопатките назад.", "Не заключвайте рязко лактите.", "Мислете за събиране на лактите един към друг."],
        mistakes: ["Твърде голям наклон на лактите (90°).", "Отскачане на тежестта от гърдите.", "Плитки повторения."]
    },
    lats: {
        title: "Гръб (Latissimus Dorsi)",
        desc: "Най-широкият мускул на гърба, отговорен за дърпащите движения и V-образната форма.",
        funcs: ["Аддукция", "Екстензия на рамото", "Дърпане назад"],
        risk: "Нисък Риск",
        gym: [
            { name: "Набирания (Широк хват)", diff: 3, secondary: ["biceps", "forearms"] },
            { name: "Вертикален скрипец", diff: 1, secondary: ["biceps"] },
            { name: "Гребане с щанга", diff: 3, secondary: ["lowerback", "biceps"] },
            { name: "Гребане на долен скрипец", diff: 2, secondary: ["traps"] }
        ],
        home: [
            { name: "Австралийски набирания", diff: 2, secondary: ["biceps"] },
            { name: "Гребане с раница/туби", diff: 1, secondary: ["biceps"] }
        ],
        stretching: [{ name: "Поза 'Дете' (Child's Pose)", goal: "60 секунди" }],
        stats: { strength: 95, volume: 90 },
        tips: ["Дърпайте с лактите, не с дланите.", "Стискайте гърба в края на движението."],
        mistakes: ["Използване на инерция (люлеене).", "Прекалено много бицепс при дърпане."]
    },
    quads: {
        title: "Предно бедро (Quadriceps)",
        desc: "Четириглав мускул, отговорен за екстензията на коляното и стабилността.",
        funcs: ["Екстензия на коляното", "Флексия на таза"],
        risk: "Висок Риск",
        gym: [
            { name: "Клек с щанга", diff: 3, secondary: ["glutes", "lowerback"] },
            { name: "Лег преса", diff: 2, secondary: ["glutes"] },
            { name: "Хакен клек", diff: 2, secondary: [] },
            { name: "Бедрено разгъване", diff: 1, secondary: [] }
        ],
        home: [
            { name: "Български клек", diff: 3, secondary: ["glutes"] },
            { name: "Клек със собствено тегло", diff: 1, secondary: [] },
            { name: "Напади", diff: 2, secondary: ["glutes"] }
        ],
        stretching: [{ name: "Класическо разтягане на квадрицепс", goal: "45 секунди на крак" }],
        stats: { strength: 100, volume: 95 },
        tips: ["Дръжте гърба изправен.", "Тежестта е на цялото стъпало."],
        mistakes: ["Коленете влизат навътре.", "Вдигане на петите от пода."]
    },
    abs: {
        title: "Коремни мускули (Core)",
        desc: "Стабилизира ядрото и предпазва гръбначния стълб.",
        funcs: ["Флексия на гръбнака", "Стабилизация"],
        risk: "Нисък Риск",
        gym: [{ name: "Повдигане на крака от вис", diff: 3, secondary: [] }],
        home: [
            { name: "Планк", diff: 2, secondary: ["shoulders_front"] },
            { name: "Коремни преси", diff: 1, secondary: [] },
            { name: "Руско извиване (Russian Twist)", diff: 2, secondary: [] }
        ],
        stretching: [{ name: "Поза 'Кобра'", goal: "30 секунди" }],
        stats: { strength: 80, volume: 70 },
        tips: ["Дишайте при контракция.", "Не дърпайте врата си с ръце."],
        mistakes: ["Извиване на кръста при планк.", "Твърде бързи повторения."]
    },
    biceps: {
        title: "Бицепс (Biceps Brachii)",
        desc: "Двуглав мускул на ръката.",
        funcs: ["Сгъване в лакътя", "Супинация"],
        risk: "Нисък Риск",
        gym: [
            { name: "Сгъване с щанга (прав лост)", diff: 2, secondary: ["forearms"] },
            { name: "Чуково сгъване", diff: 1, secondary: ["forearms"] },
            { name: "Скотово сгъване", diff: 2, secondary: [] }
        ],
        home: [{ name: "Сгъване с раница/ластик", diff: 1, secondary: [] }],
        stretching: [{ name: "Разтягане на бицепс на стена", goal: "30 секунди" }],
        stats: { strength: 60, volume: 100 },
        tips: ["Не мърдайте лактите напред-назад.", "Пълен обсег."],
        mistakes: ["Люлеене на тялото (Cheating)."]
    },
    triceps: {
        title: "Трицепс (Triceps Brachii)",
        desc: "Триглав мускул, заемащ 2/3 от ръката.",
        funcs: ["Екстензия в лакътя"],
        risk: "Нисък Риск",
        gym: [
            { name: "Разгъване на скрипец", diff: 1, secondary: [] },
            { name: "Френско разгъване", diff: 3, secondary: [] },
            { name: "Тясна лежанка", diff: 2, secondary: ["chest"] }
        ],
        home: [{ name: "Диамантени опори", diff: 2, secondary: ["chest"] }],
        stretching: [{ name: "Разтягане зад глава", goal: "30 секунди" }],
        stats: { strength: 75, volume: 95 },
        tips: ["Дръжте лактите близо до главата."],
        mistakes: ["Разтваряне на лактите встрани."]
    }
    // Добави останалите (shoulders, hamstrings, glutes, calves) по същия шаблон ако желаеш!
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
    if (m.risk.includes("Висок")) riskBadge.style.background = "#ff4d4d";
    else if (m.risk.includes("Среден")) riskBadge.style.background = "#ff9800";
    else riskBadge.style.background = "#4caf50";

    if (currentMode === 'info') {
        extraCard.style.display = 'block';
        extraCard.innerHTML = `
            <h2>${m.title} - Анатомия</h2>
            <p>${m.desc}</p>
            <div style="margin-top:10px;">
                <strong>Основни функции:</strong><br>
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
                <span>ТАЙМЕР ЗА РАЗТЯГАНЕ</span>
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
            alert("Времето за разтягане приключи!");
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
