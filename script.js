let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Гърди / Chest",
        desc: "Големият гръден мускул е основен за всички бутащи движения и хоризонтално привеждане на ръцете.",
        funcs: ["Хоризонтална аддукция", "Вътрешна ротация", "Флексия"],
        gym: [
            { name: "Бенч преса / Bench Press", diff: 2, secondary: ["triceps", "shoulders_front"] },
            { name: "Наклонена лежанка / Incline DB Press", diff: 2, secondary: ["shoulders_front", "triceps"] },
            { name: "Кросоувър / Cable Flys", diff: 1, secondary: ["shoulders_front"] }
        ],
        home: [{ name: "Лицеви опори / Push-ups", diff: 1, secondary: ["triceps"] }],
        stretching: [{ name: "Разтягане на каса на врата", goal: "Отваряне на гръдния кош" }],
        stats: { strength: 90, volume: 85 },
        tips: ["Свийте лопатките назад.", "Дръжте лактите под ъгъл 45-60 градуса."],
        mistakes: ["Отскачане на лоста.", "Прекалено разтворени лакти."]
    },
    traps: {
        title: "Трапец / Traps",
        desc: "Мускулът, който покрива горната част на гърба и врата. Отговаря за движението на лопатките.",
        funcs: ["Елевация на лопатките", "Ретракция"],
        gym: [{ name: "Повдигане на рамене с щанга / Shrugs", diff: 1, secondary: ["forearms"] }],
        home: [{ name: "Повдигане на раници / Bag Shrugs", diff: 1, secondary: ["forearms"] }],
        stretching: [{ name: "Странично накланяне на главата", goal: "Освобождаване на напрежението във врата" }],
        stats: { strength: 80, volume: 70 },
        tips: ["Дърпайте право нагоре.", "Не въртете раменете."],
        mistakes: ["Прекалено тежка щанга и малък обсег."]
    },
    lats: {
        title: "Гръб (Широк) / Lats",
        desc: "Най-широкият мускул на гърба. Придава V-образната форма.",
        funcs: ["Дърпане", "Аддукция на рамото"],
        gym: [
            { name: "Набирания / Pull-ups", diff: 3, secondary: ["biceps", "forearms"] },
            { name: "Вертикален скрипец / Lat Pulldown", diff: 1, secondary: ["biceps"] }
        ],
        home: [{ name: "Австралийски набирания", diff: 2, secondary: ["biceps"] }],
        stretching: [{ name: "Поза 'Дете'", goal: "Удължаване на гръбнака" }],
        stats: { strength: 95, volume: 90 },
        tips: ["Водете с лактите.", "Изпъчете гърдите горе."],
        mistakes: ["Люлеене на тялото."]
    },
    shoulders_front: {
        title: "Предно рамо / Front Delts",
        desc: "Отговаря за вдигането на ръката напред.",
        funcs: ["Антефлексия", "Вътрешна ротация"],
        gym: [{ name: "Военна преса / Military Press", diff: 3, secondary: ["triceps"] }],
        home: [{ name: "Пийк опори / Pike Push-ups", diff: 3, secondary: ["triceps"] }],
        stretching: [{ name: "Ръце зад гърба със заключени пръсти", goal: "Разтягане на предното рамо" }],
        stats: { strength: 85, volume: 80 },
        tips: ["Стягайте корема и седалището."],
        mistakes: ["Прекалено извиване на кръста назад."]
    },
    shoulders_side: {
        title: "Средно рамо / Lateral Delts",
        desc: "Осигурява ширината на раменете.",
        funcs: ["Абдукция на ръката (встрани)"],
        gym: [{ name: "Разтваряне встрани / Lateral Raises", diff: 1, secondary: ["traps"] }],
        home: [{ name: "Разтваряне с ластик или туби", diff: 1, secondary: ["traps"] }],
        stretching: [{ name: "Привеждане на ръката пред гърдите", goal: "Разтягане на делтовидния мускул" }],
        stats: { strength: 50, volume: 95 },
        tips: ["Дръжте малкия пръст по-високо."],
        mistakes: ["Използване на инерция."]
    },
    shoulders_rear: {
        title: "Задно рамо / Rear Delts",
        desc: "Малък, но важен мускул за стойката и здравето на рамото.",
        funcs: ["Хоризонтална абдукция"],
        gym: [{ name: "Фейс пул / Face Pulls", diff: 2, secondary: ["traps"] }],
        home: [{ name: "Разтваряне от наклон с тежест", diff: 2, secondary: ["traps"] }],
        stretching: [{ name: "Кръстосване на ръцете пред тялото", goal: "Разтягане на задното рамо" }],
        stats: { strength: 40, volume: 85 },
        tips: ["Концентрирайте се върху задната част."],
        mistakes: ["Твърде голяма тежест."]
    },
    biceps: {
        title: "Бицепс / Biceps",
        desc: "Двуглав мускул на мишницата.",
        funcs: ["Флексия в лакътя", "Супинация"],
        gym: [{ name: "Сгъване с щанга / Barbell Curls", diff: 2, secondary: ["forearms"] }],
        home: [{ name: "Сгъване с ластик / Band Curls", diff: 1, secondary: ["forearms"] }],
        stretching: [{ name: "Разтягане на бицепса на стена", goal: "Удължаване на мускула" }],
        stats: { strength: 60, volume: 95 },
        tips: ["Лактите неподвижни до тялото."],
        mistakes: ["Люлеене на тялото."]
    },
    triceps: {
        title: "Трицепс / Triceps",
        desc: "Триглав мускул, заемащ 2/3 от обема на ръката.",
        funcs: ["Екстензия в лакътя"],
        gym: [{ name: "Разгъване на скрипец", diff: 1, secondary: ["shoulders_front"] }],
        home: [{ name: "Диамантени опори", diff: 2, secondary: ["chest"] }],
        stretching: [{ name: "Ръка зад главата (лакът нагоре)", goal: "Разтягане на дългата глава" }],
        stats: { strength: 75, volume: 90 },
        tips: ["Пълно заключване на лакътя."],
        mistakes: ["Разтваряне на лактите встрани."]
    },
    forearms: {
        title: "Предмишници / Forearms",
        desc: "Отговарят за хвата и движенията в китката.",
        funcs: ["Флексия/Екстензия на китката", "Хват"],
        gym: [{ name: "Фермерска разходка", diff: 2, secondary: ["traps"] }],
        home: [{ name: "Висене на лост", diff: 2, secondary: ["lats"] }],
        stretching: [{ name: "Разтягане на китките (длани напред)", goal: "Превенция на тунелен синдром" }],
        stats: { strength: 65, volume: 75 },
        tips: ["Стискайте лоста силно."],
        mistakes: ["Прекомерна употреба на фитили."]
    },
    abs: {
        title: "Корем / Abs",
        desc: "Ядрото на тялото. Стабилизира гръбнака.",
        funcs: ["Флексия на торса", "Стабилизация"],
        gym: [{ name: "Повдигане на крака от вис", diff: 3, secondary: ["forearms"] }],
        home: [{ name: "Планк / Plank", diff: 2, secondary: ["lowerback"] }],
        stretching: [{ name: "Поза 'Кобра'", goal: "Разтягане на коремната стена" }],
        stats: { strength: 75, volume: 65 },
        tips: ["Дишайте диафрагмено."],
        mistakes: ["Дърпане на врата при коремни преси."]
    },
    lowerback: {
        title: "Кръст / Lower Back",
        desc: "Еректорните мускули на гръбнака.",
        funcs: ["Екстензия на гръбнака"],
        gym: [{ name: "Мъртва тяга / Deadlift", diff: 3, secondary: ["hamstrings", "glutes"] }],
        home: [{ name: "Супермен / Superman", diff: 1, secondary: ["glutes"] }],
        stretching: [{ name: "Котешки гръб", goal: "Мобилност на гръбнака" }],
        stats: { strength: 100, volume: 60 },
        tips: ["Пазете гръбнака неутрален."],
        mistakes: ["Изгърбване (котешки гръб)."]
    },
    quads: {
        title: "Предно бедро / Quads",
        desc: "Най-голямата мускулна група в тялото.",
        funcs: ["Екстензия на коляното"],
        gym: [{ name: "Клек / Squat", diff: 3, secondary: ["glutes", "lowerback"] }],
        home: [{ name: "Български клек", diff: 3, secondary: ["glutes"] }],
        stretching: [{ name: "Пета към седалище (от стоеж)", goal: "Разтягане на квадрицепса" }],
        stats: { strength: 100, volume: 95 },
        tips: ["Тежестта на цялото стъпало."],
        mistakes: ["Колене пред пръстите (прекомерно)."]
    },
    hamstrings: {
        title: "Задно бедро / Hamstrings",
        desc: "Важни за спринтиране и сгъване на крака.",
        funcs: ["Флексия на коляното", "Екстензия на таза"],
        gym: [{ name: "Римска тяга / RDL", diff: 3, secondary: ["glutes"] }],
        home: [{ name: "Нордик сгъване / Nordic Curls", diff: 3, secondary: ["glutes"] }],
        stretching: [{ name: "Наклон напред (докосване на пръсти)", goal: "Удължаване на задното бедро" }],
        stats: { strength: 90, volume: 85 },
        tips: ["Бутайте таза максимално назад."],
        mistakes: ["Прекалено свиване на коленете."]
    },
    glutes: {
        title: "Седалище / Glutes",
        desc: "Най-силният мускул за екстензия на таза.",
        funcs: ["Екстензия на таза", "Абдукция"],
        gym: [{ name: "Хип тръст / Hip Thrust", diff: 2, secondary: ["hamstrings"] }],
        home: [{ name: "Глутеус мост", diff: 1, secondary: ["hamstrings"] }],
        stretching: [{ name: "Поза 'Гълъб'", goal: "Дълбоко разтягане на седалището" }],
        stats: { strength: 100, volume: 95 },
        tips: ["Стискайте силно горе."],
        mistakes: ["Прекалено извиване на кръста."]
    },
    calves: {
        title: "Прасци / Calves",
        desc: "Изградени от гастрокнемиус и солеус.",
        funcs: ["Плантарна флексия"],
        gym: [{ name: "Повдигане на прасци от стоеж", diff: 1, secondary: [] }],
        home: [{ name: "Повдигане на един крак на стъпало", diff: 1, secondary: [] }],
        stretching: [{ name: "Опиране в стена (пета на пода)", goal: "Разтягане на прасеца" }],
        stats: { strength: 80, volume: 60 },
        tips: ["Пауза в долна и горна точка."],
        mistakes: ["Подскачане вместо контролирано движение."]
    }
};

// --- LOGIC FUNCTIONS ---

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

    infoCard.style.display = 'none';
    extraCard.style.display = 'none';
    statsCard.style.display = 'none';

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
            <p style="font-size:13px; color:gray;">Задръжте всяка позиция за 30-40 сек.</p>
            ${m.stretching.map(s => `
                <div class="stretch-card">
                    <strong>${s.name}</strong><br>
                    <small>Цел: ${s.goal}</small>
                </div>
            `).join('')}
        `;
    }
    else {
        infoCard.style.display = 'block';
        statsCard.style.display = 'block';
        const exList = (currentMode === 'gym') ? m.gym : m.home;
        
        infoCard.innerHTML = `<h1>${m.title}</h1><p style="font-size:12px;color:gray;">Упражнения:</p>` + 
            exList.map((ex, i) => `
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

    document.getElementById('tips-container').innerHTML = m.tips.map(t => `<div class="tip-item">✔️ ${t}</div>`).join('');
    document.getElementById('mistakes-container').innerHTML = m.mistakes.map(mis => `<div class="mistake-item">❌ ${mis}</div>`).join('');
}

function activateSynergy(idx) {
    const m = data[currentMuscle];
    const ex = (currentMode === 'gym' ? m.gym : m.home)[idx];
    
    resetModelColors();
    highlightBodyParts(currentMuscle, 'active-muscle');
    
    if (ex.secondary) {
        ex.secondary.forEach(sId => highlightBodyParts(sId, 'synergy-muscle'));
    }
    
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
