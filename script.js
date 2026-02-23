let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Гърди", latin: "Pectoralis Major",
        gym: [
            { name: "Лежанка / Bench Press", diff: 2, secondary: ["triceps", "shoulders_front"], gif: "https://media.giphy.com/media/3o7TKVUn7iM8FMEU24/giphy.gif" },
            { name: "Кофички / Dips", diff: 3, secondary: ["triceps", "shoulders_front"], gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHlxODFpM215eDZ5N3R5Y3YydXN3bm56bmNndHByYjN4ZXR4ZXRxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKv6lS8THTD7X7a/giphy.gif" }
        ],
        home: [{ name: "Лицеви опори", diff: 1, secondary: ["triceps"], gif: "" }],
        stretch: [{ name: "Стреч на каса", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 95, volume: 90 },
        tips: ["Лопатките назад.", "Контролирано спускане."],
        mistakes: ["Отскачане от гърдите.", "Разперени лакти."]
    },
    shoulders_front: {
        title: "Предно рамо", latin: "Anterior Deltoid",
        gym: [{ name: "Раменна преса", diff: 3, secondary: ["triceps"], gif: "" }],
        home: [{ name: "Пийк опори", diff: 3, secondary: ["triceps"], gif: "" }],
        stretch: [{ name: "Стреч зад гърба", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 80, volume: 75 },
        tips: ["Дръжте ядрото стегнато.", "Не заключвайте рязко горе."],
        mistakes: ["Извиване на кръста."]
    },
    shoulders_side: {
        title: "Средно рамо", latin: "Lateral Deltoid",
        gym: [{ name: "Разтваряне встрани", diff: 1, secondary: ["traps"], gif: "" }],
        home: [{ name: "Разтваряне с ластик", diff: 1, secondary: [], gif: "" }],
        stretch: [{ name: "Cross-body стреч", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 50, volume: 95 },
        tips: ["Водете с лактите.", "Малък пръст нагоре."],
        mistakes: ["Люлеене на тялото."]
    },
    shoulders_rear: {
        title: "Задно рамо", latin: "Posterior Deltoid",
        gym: [{ name: "Фейс пул / Face Pull", diff: 2, secondary: ["traps"], gif: "" }],
        home: [{ name: "Разтваряне наведен", diff: 2, secondary: [], gif: "" }],
        stretch: [{ name: "Задно рамо стреч", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 45, volume: 85 },
        tips: ["Стискайте лопатките.", "Леко сгънати лакти."],
        mistakes: ["Прекалено тежка тежест."]
    },
    lats: {
        title: "Гръб (Латове)", latin: "Latissimus Dorsi",
        gym: [{ name: "Вертикален скрипец", diff: 1, secondary: ["biceps"], gif: "" }],
        home: [{ name: "Набирания", diff: 3, secondary: ["biceps", "forearms"], gif: "" }],
        stretch: [{ name: "Висене на лост", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 90, volume: 95 },
        tips: ["Дърпайте към гърдите.", "Мислете за лактите."],
        mistakes: ["Дърпане зад врат."]
    },
    triceps: {
        title: "Трицепс", latin: "Triceps Brachii",
        gym: [{ name: "Разгъване на скрипец", diff: 1, secondary: [], gif: "" }],
        home: [{ name: "Диамантени опори", diff: 2, secondary: ["chest"], gif: "" }],
        stretch: [{ name: "Стреч зад глава", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 85, volume: 95 },
        tips: ["Лактите до тялото.", "Пълно заключване."],
        mistakes: ["Движение в раменете."]
    },
    biceps: {
        title: "Бицепс", latin: "Biceps Brachii",
        gym: [{ name: "Сгъване с щанга", diff: 2, secondary: ["forearms"], gif: "" }],
        home: [{ name: "Сгъване с ластик", diff: 1, secondary: [], gif: "" }],
        stretch: [{ name: "Стреч на стена", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 60, volume: 98 },
        tips: ["Без залюляване.", "Бавно спускане."],
        mistakes: ["Къси повторения."]
    },
    quads: {
        title: "Квадрицепс", latin: "Quadriceps",
        gym: [{ name: "Клек / Squat", diff: 3, secondary: ["glutes", "lowerback"], gif: "" }],
        home: [{ name: "Напади", diff: 2, secondary: ["glutes"], gif: "" }],
        stretch: [{ name: "Квадрицепс стреч", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 100, volume: 90 },
        tips: ["Дълбок клек.", "Тежест на цяло стъпало."],
        mistakes: ["Колене навътре."]
    },
    glutes: {
        title: "Седалище", latin: "Gluteus Maximus",
        gym: [{ name: "Хип Тръст", diff: 2, secondary: ["hamstrings"], gif: "" }],
        home: [{ name: "Глутеус мост", diff: 1, secondary: [], gif: "" }],
        stretch: [{ name: "Поза Гълъб", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 100, volume: 100 },
        tips: ["Стискайте горе.", "Брадичка към гърди."],
        mistakes: ["Хиперекстензия."]
    },
    hamstrings: {
        title: "Задно бедро", latin: "Biceps Femoris",
        gym: [{ name: "Румънска тяга", diff: 3, secondary: ["lowerback", "glutes"], gif: "" }],
        home: [{ name: "Нордик сгъване", diff: 3, secondary: [], gif: "" }],
        stretch: [{ name: "Наклон напред", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 95, volume: 80 },
        tips: ["Бутайте таза назад.", "Права гръб."],
        mistakes: ["Свиване на колене."]
    },
    abs: {
        title: "Корем", latin: "Core",
        gym: [{ name: "Повдигане на крака", diff: 3, secondary: [], gif: "" }],
        home: [{ name: "Планк", diff: 2, secondary: [], gif: "" }],
        stretch: [{ name: "Поза Кобра", diff: 1, secondary: [], gif: "" }],
        stats: { strength: 70, volume: 60 },
        tips: ["Навивайте таза.", "Издишайте горе."],
        mistakes: ["Дърпане на врата."]
    },
    traps: { title: "Трапец", latin: "Trapezius", gym: [{ name: "Шраг", diff: 1, secondary: [] }], home: [], stretch: [], stats: { strength: 80, volume: 70 }, tips: ["Нагоре към ушите."], mistakes: ["Въртене на рамене."] },
    lowerback: { title: "Кръст", latin: "Erector Spinae", gym: [{ name: "Тяга", diff: 3, secondary: ["glutes"] }], home: [], stretch: [], stats: { strength: 100, volume: 50 }, tips: ["Прав гръб."], mistakes: ["Котешки гръб."] },
    forearms: { title: "Предмишница", latin: "Brachioradialis", gym: [{ name: "Фермерска разходка", diff: 2, secondary: [] }], home: [], stretch: [], stats: { strength: 90, volume: 60 }, tips: ["Здрав хват."], mistakes: ["Фитили на всичко."] },
    calves: { title: "Прасци", latin: "Gastrocnemius", gym: [{ name: "Повдигане на пръсти", diff: 1, secondary: [] }], home: [], stretch: [], stats: { strength: 75, volume: 85 }, tips: ["Пълна амплитуда."], mistakes: ["Бързи повторения."] }
};

function selectMuscle(id) {
    currentMuscle = id;
    updateUI();
}

function updateUI() {
    const m = data[currentMuscle];
    if (!m) return;

    resetModel();
    document.querySelectorAll(`[id^="${currentMuscle}"]`).forEach(el => el.classList.add('active-muscle'));

    document.getElementById('exercise-preview-panel').style.display = 'none';
    document.getElementById('info-card').innerHTML = `<h1>${m.title}</h1><p class="latin-name">${m.latin}</p>`;

    let list = currentMode === 'gym' ? m.gym : (currentMode === 'home' ? m.home : m.stretch);
    let html = "";
    list.forEach((ex, i) => {
        html += `<div class="exercise-item" onclick="activateExercise(${i})">
                    <span>${ex.name}</span>
                    <span style="color:var(--primary)">${"⚡".repeat(ex.diff)}</span>
                 </div>`;
    });
    document.getElementById('info-card').innerHTML += html || "<p>Няма добавени упражнения за този режим.</p>";

    document.getElementById('stats-panel').style.display = 'block';
    document.getElementById('bar-strength').style.width = m.stats.strength + '%';
    document.getElementById('bar-volume').style.width = m.stats.volume + '%';

    document.getElementById('tips-list').innerHTML = m.tips.map(t => `<p>• ${t}</p>`).join('');
    document.getElementById('errors-list').innerHTML = m.mistakes.map(e => `<p>• ${e}</p>`).join('');
}

function activateExercise(idx) {
    const m = data[currentMuscle];
    let list = currentMode === 'gym' ? m.gym : (currentMode === 'home' ? m.home : m.stretch);
    const ex = list[idx];

    document.getElementById('exercise-preview-panel').style.display = 'flex';
    document.getElementById('ex-title').innerText = ex.name;
    document.getElementById('ex-latin').innerText = m.latin;
    document.getElementById('exercise-gif').src = ex.gif || "https://via.placeholder.com/220x150?text=No+GIF";

    resetModel();
    document.querySelectorAll(`[id^="${currentMuscle}"]`).forEach(el => el.classList.add('active-muscle'));
    if (ex.secondary) {
        ex.secondary.forEach(s => {
            document.querySelectorAll(`[id^="${s}"]`).forEach(el => el.classList.add('synergy-muscle'));
        });
    }
}

function resetModel() {
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
