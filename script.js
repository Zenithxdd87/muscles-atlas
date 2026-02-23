let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Гърди / Chest",
        gym: [
            { name: "Лежанка / Bench Press", diff: 2, secondary: ["triceps", "shoulders_front"] },
            { name: "Флайс / Cable Flyes", diff: 1, secondary: ["shoulders_front"] }
        ],
        home: [{ name: "Лицеви опори", diff: 1, secondary: ["triceps"] }],
        stats: { strength: 90, volume: 85 },
        tips: ["Стиснете лопатките.", "Лактите на 45 градуса."],
        mistakes: ["Отскачане на лоста.", "Прекалено широки лакти."]
    },
    lats: {
        title: "Гръб / Lats",
        gym: [
            { name: "Скрипец / Lat Pulldown", diff: 1, secondary: ["biceps", "forearms"] },
            { name: "Гребане с щанга", diff: 3, secondary: ["biceps", "abs"] }
        ],
        home: [{ name: "Набирания на лост", diff: 3, secondary: ["biceps"] }],
        stats: { strength: 95, volume: 90 },
        tips: ["Дърпайте с лактите.", "Пълно разтягане горе."],
        mistakes: ["Използване на инерция.", "Дърпане само с бицепс."]
    },
    traps: {
        title: "Трапец / Traps",
        gym: [{ name: "Повдигане на рамене", diff: 1, secondary: ["forearms"] }],
        home: [{ name: "Y-повдигания", diff: 2, secondary: ["shoulders_front"] }],
        stats: { strength: 80, volume: 70 },
        tips: ["Не въртете раменете.", "Задръжте горе."],
        mistakes: ["Прекалено тежка щанга.", "Въртене на врата."]
    },
    shoulders_front: {
        title: "Предно рамо / Front Delts",
        gym: [{ name: "Раменна преса", diff: 2, secondary: ["triceps"] }],
        home: [{ name: "Пийк опори", diff: 3, secondary: ["triceps"] }],
        stats: { strength: 85, volume: 80 },
        tips: ["Тялото е право.", "Контролирано спускане."],
        mistakes: ["Архиране на гърба.", "Прекалено голяма тежест."]
    },
    biceps: {
        title: "Бицепс / Biceps",
        gym: [{ name: "Сгъване с щанга", diff: 2, secondary: ["forearms"] }],
        home: [{ name: "Сгъване с ластик", diff: 1, secondary: ["forearms"] }],
        stats: { strength: 60, volume: 95 },
        tips: ["Лактите до тялото.", "Без люлеене."],
        mistakes: ["Люлеене на кръста.", "Непълно спускане."]
    },
    triceps: {
        title: "Трицепс / Triceps",
        gym: [{ name: "Френско разгъване", diff: 2, secondary: ["chest"] }],
        home: [{ name: "Кофички на пейка", diff: 1, secondary: ["chest"] }],
        stats: { strength: 70, volume: 90 },
        tips: ["Фиксирани лакти.", "Пълно заключване."],
        mistakes: ["Разтваряне на лактите.", "Прекалено бързо темпо."]
    },
    quads: {
        title: "Квадрицепс / Quads",
        gym: [{ name: "Клек / Squat", diff: 3, secondary: ["glutes", "abs"] }],
        home: [{ name: "Напади / Lunges", diff: 2, secondary: ["glutes"] }],
        stats: { strength: 100, volume: 95 },
        tips: ["Гърбът е изправен.", "Колената следват пръстите."],
        mistakes: ["Повдигане на петите.", "Колена навътре."]
    },
    hamstrings: {
        title: "Задно бедро / Hamstrings",
        gym: [{ name: "Римска тяга", diff: 3, secondary: ["glutes", "traps"] }],
        home: [{ name: "Глутеус мост (1 крак)", diff: 2, secondary: ["glutes"] }],
        stats: { strength: 90, volume: 85 },
        tips: ["Бутайте таза назад.", "Леко свити колена."],
        mistakes: ["Изгърбване.", "Прекалено много свиване в коляното."]
    },
    glutes: {
        title: "Седалище / Glutes",
        gym: [{ name: "Хип Тръст", diff: 2, secondary: ["hamstrings", "abs"] }],
        home: [{ name: "Махове назад", diff: 1, secondary: ["hamstrings"] }],
        stats: { strength: 100, volume: 100 },
        tips: ["Стиснете в горна точка.", "Брадичката към гърдите."],
        mistakes: ["Прекалено голям арх в кръста."]
    },
    calves: {
        title: "Прасец / Calves",
        gym: [{ name: "Повдигане на калф машина", diff: 1, secondary: [] }],
        home: [{ name: "Повдигане на един крак", diff: 2, secondary: [] }],
        stats: { strength: 80, volume: 60 },
        tips: ["Пълно разтягане долу.", "Задръжте горе."],
        mistakes: ["Бързи и насечени движения."]
    },
    abs: {
        title: "Корем / Abs",
        gym: [{ name: "Повдигане на крака", diff: 2, secondary: ["quads"] }],
        home: [{ name: "Коремни преси", diff: 1, secondary: [] }],
        stats: { strength: 70, volume: 60 },
        tips: ["Издишайте при свиване.", "Бавно темпо."],
        mistakes: ["Дърпане на врата.", "Извиване на кръста."]
    }
};



function selectMuscle(mId) {
    currentMuscle = mId;
    updateUI();
}

function updateUI() {
    const m = data[currentMuscle];
    if (!m) return;

    resetModel();
    highlight(currentMuscle, 'active-muscle');

    const exList = currentMode === 'gym' ? m.gym : m.home;
    let html = `<h1>${m.title}</h1><p style="font-size:11px;color:#888;">Кликни упражнение за синергия</p>`;
    
    exList.forEach((ex, i) => {
        html += `<div class="exercise-item" onclick="activateSynergy(${i})">
                    ${ex.name} <span class="diff-badge diff-${ex.diff}">${"⚡".repeat(ex.diff)}</span>
                 </div>`;
    });
    
    document.getElementById('info-card').innerHTML = html;
    document.getElementById('stats-container').style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('bar-strength').style.width = m.stats.strength + '%';
        document.getElementById('bar-volume').style.width = m.stats.volume + '%';
    }, 50);

    document.getElementById('tips-container').innerHTML = m.tips.map(t => `<div class="tip-item">${t}</div>`).join('');
    document.getElementById('mistakes-container').innerHTML = m.mistakes.map(mis => `<div class="mistake-item">${mis}</div>`).join('');
}

function activateSynergy(idx) {
    const m = data[currentMuscle];
    const ex = (currentMode === 'gym' ? m.gym : m.home)[idx];
    resetModel();
    highlight(currentMuscle, 'active-muscle');
    if (ex.secondary) ex.secondary.forEach(s => highlight(s, 'synergy-muscle'));
    
    document.querySelectorAll('.exercise-item').forEach(el => el.classList.remove('active-ex'));
    event.currentTarget.classList.add('active-ex');
}

function highlight(id, cls) {
    document.querySelectorAll(`[id^="${id}"]`).forEach(el => el.classList.add(cls));
}

function resetModel() {
    document.querySelectorAll('.muscle-segment').forEach(el => el.classList.remove('active-muscle', 'synergy-muscle'));
}

function setMode(mode) {
    currentMode = mode;
    document.getElementById('btn-gym').classList.toggle('active', mode === 'gym');
    document.getElementById('btn-home').classList.toggle('active', mode === 'home');
    if (currentMuscle) updateUI();
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}
