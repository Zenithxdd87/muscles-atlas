let currentMuscle = null;
let currentMode = 'gym';

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

const data = {
    chest: {
        title: "Гърди / Chest",
        gym: [
            { name: "Бенч преса / Bench Press", diff: 2 },
            { name: "Наклонена лежанка / Incline Press", diff: 2 },
            { name: "Кросоувър / Cable Flyes", diff: 1 },
            { name: "Кофички / Chest Dips", diff: 3 }
        ],
        home: [
            { name: "Лицеви опори / Push-ups", diff: 1 },
            { name: "Диамантени опори / Diamond Push-ups", diff: 2 }
        ],
        synergy: ["triceps", "shoulders_front"],
        stats: { strength: 95, volume: 85 },
        tips: ["Стиснете лопатките назад.", "Контролирайте лоста при спускане."],
        mistakes: ["Отскачане на тежестта от гърдите.", "Прекалено широко разтворени лакти."]
    },
    abs: {
        title: "Корем / Abs",
        gym: [{ name: "Коремни на скрипец / Cable Crunches", diff: 1 }, { name: "Повдигане на крака от вис", diff: 3 }],
        home: [{ name: "Планк / Plank", diff: 2 }, { name: "Велосипед / Bicycle Crunches", diff: 1 }],
        synergy: ["lowerback"],
        stats: { strength: 75, volume: 65 },
        tips: ["Издишвайте при свиване.", "Стягайте корема през цялото време."],
        mistakes: ["Дърпане на врата.", "Извиване на кръста при планк."]
    },
    shoulders_front: {
        title: "Предно рамо / Front Delts",
        gym: [{ name: "Военна преса / Military Press", diff: 3 }, { name: "Предно повдигане", diff: 1 }],
        home: [{ name: "Пийк опори / Pike Push-ups", diff: 2 }],
        synergy: ["triceps", "chest"],
        stats: { strength: 80, volume: 75 },
        tips: ["Не люлейте тялото.", "Дръжте ядрото стегнато."],
        mistakes: ["Прекалено голяма тежест.", "Архиране на гърба."]
    },
    lats: {
        title: "Гръб (Латове) / Lats",
        gym: [{ name: "Вертикален скрипец / Lat Pulldown", diff: 1 }, { name: "Набирания / Pull-ups", diff: 3 }],
        home: [{ name: "Гребане под маса / Inverted Rows", diff: 2 }],
        synergy: ["biceps", "forearms", "upperback"],
        stats: { strength: 90, volume: 90 },
        tips: ["Дърпайте с лактите.", "Пълен обхват на движение."],
        mistakes: ["Използване на инерция.", "Непълно разтягане."]
    },
    biceps: {
        title: "Бицепс / Biceps",
        gym: [{ name: "Сгъване с щанга / Barbell Curl", diff: 2 }, { name: "Чукове / Hammer Curls", diff: 1 }],
        home: [{ name: "Сгъване с раница / Backpack Curls", diff: 1 }],
        synergy: ["forearms"],
        stats: { strength: 65, volume: 95 },
        tips: ["Лактите до тялото.", "Без залюляване."],
        mistakes: ["Люлеене на тялото.", "Непълно спускане."]
    },
    triceps: {
        title: "Трицепс / Triceps",
        gym: [{ name: "Разгъване на скрипец / Pushdowns", diff: 1 }, { name: "Френско / Skull Crushers", diff: 2 }],
        home: [{ name: "Кофички на стол / Bench Dips", diff: 1 }],
        synergy: ["chest", "shoulders_front"],
        stats: { strength: 75, volume: 85 },
        tips: ["Фиксирани лакти.", "Пълно разгъване."],
        mistakes: ["Разтваряне на лактите встрани."]
    },
    quads: {
        title: "Предно бедро / Quads",
        gym: [{ name: "Клек / Squat", diff: 3 }, { name: "Лег преса / Leg Press", diff: 2 }],
        home: [{ name: "Български клек / Bulgarian Squat", diff: 3 }],
        synergy: ["glutes", "lowerback", "calves"],
        stats: { strength: 100, volume: 95 },
        tips: ["Тежестта на петите.", "Изправен гръб."],
        mistakes: ["Колената навътре.", "Повдигане на петите."]
    },
    glutes: {
        title: "Седалище / Glutes",
        gym: [{ name: "Хип Тръст / Hip Thrust", diff: 2 }, { name: "Сумо тяга", diff: 3 }],
        home: [{ name: "Глутеус мост / Glute Bridge", diff: 1 }],
        synergy: ["hamstrings", "lowerback"],
        stats: { strength: 100, volume: 100 },
        tips: ["Стиснете в горна точка.", "Бутайте през петите."],
        mistakes: ["Недостатъчна амплитуда."]
    }
    // Тук могат да се добавят останалите групи: forearms, upperback, lowerback, shoulders_side, shoulders_rear, hamstrings, calves по същия модел.
};

function selectMuscle(muscle) {
    currentMuscle = muscle;
    document.querySelectorAll('.muscle-segment').forEach(el => el.classList.remove('active-muscle', 'synergy-muscle'));

    const mData = data[muscle];
    if (!mData) return;

    // Активен мускул
    document.querySelectorAll(`[id^="${muscle}"]`).forEach(part => part.classList.add('active-muscle'));

    // Синергия
    if (mData.synergy) {
        mData.synergy.forEach(s => {
            document.querySelectorAll(`[id^="${s}"]`).forEach(p => p.classList.add('synergy-muscle'));
        });
    }

    updateUI();
}

function updateUI() {
    const m = data[currentMuscle];
    const exList = currentMode === 'gym' ? m.gym : m.home;
    
    let html = `<h1>${m.title}</h1><ul>`;
    exList.forEach(ex => {
        html += `<li>${ex.name} <span class="diff-badge diff-${ex.diff}">${"⚡".repeat(ex.diff)}</span></li>`;
    });
    html += `</ul>`;
    document.getElementById('info-card').innerHTML = html;

    document.getElementById('stats-container').style.display = 'block';
    setTimeout(() => {
        document.getElementById('bar-strength').style.width = m.stats.strength + '%';
        document.getElementById('bar-volume').style.width = m.stats.volume + '%';
    }, 50);

    document.getElementById('tips-container').innerHTML = m.tips.map(t => `<div class="tip-item">${t}</div>`).join('');
    document.getElementById('mistakes-container').innerHTML = m.mistakes.map(mis => `<div class="mistake-item">❌ ${mis}</div>`).join('');
}

function setMode(mode) {
    currentMode = mode;
    document.getElementById('btn-gym').classList.toggle('active', mode === 'gym');
    document.getElementById('btn-home').classList.toggle('active', mode === 'home');
    if (currentMuscle) updateUI();
}
