let currentMuscle = null;
let currentMode = 'gym';

const database = {
    chest: {
        title: "Гърди", latin: "Pectoralis Major",
        gym: [
            { name: "Бенч преса", equip: "barbell", diff: 3, synergy: ["triceps", "shoulders"], gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VndXNidGphZHR5NnN6czl3ZW5hYTBzN25nZGNvYng3Y3J6eG5reSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKVUn7iM8FMEU24/giphy.gif" },
            { name: "Флайс с дъмбели", equip: "dumbbell", diff: 2, synergy: [], gif: "" },
            { name: "Пек-дек машина", equip: "machine", diff: 1, synergy: [], gif: "" }
        ],
        home: [{ name: "Лицеви опори", equip: "body", diff: 2, synergy: ["triceps"], gif: "" }],
        stretch: [{ name: "Стреч на каса на врата", gif: "" }],
        stats: { strength: 95, volume: 90 },
        tips: ["Приберете лопатките назад.", "Лактите на 45 градуса."],
        mistakes: ["Отскачане на лоста.", "Прекалено голям арх."]
    },
    lats: {
        title: "Гръб (Латове)", latin: "Latissimus Dorsi",
        gym: [
            { name: "Вертикален скрипец", equip: "machine", diff: 1, synergy: ["biceps"], gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VndXNidGphZHR5NnN6czl3ZW5hYTBzN25nZGNvYng3Y3J6eG5reSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6oO302DqY9D1e/giphy.gif" },
            { name: "Гребане с щанга", equip: "barbell", diff: 3, synergy: ["biceps", "lowerback", "traps"], gif: "" }
        ],
        home: [{ name: "Набирания", equip: "body", diff: 3, synergy: ["biceps"], gif: "" }],
        stretch: [{ name: "Висящо разтягане", gif: "" }],
        stats: { strength: 90, volume: 85 },
        tips: ["Дърпайте с лактите.", "Пълна амплитуда горе."],
        mistakes: ["Люлеене на тялото.", "Прекалено много тежест."]
    },
    hamstrings: {
        title: "Задно бедро", latin: "Biceps Femoris",
        gym: [
            { name: "Румънска мъртва тяга", equip: "barbell", diff: 3, synergy: ["lowerback", "glutes"], gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHY1Ym5nZ3VqZDFlYTM0NTRzYjF6Nmxtbm56Z3BqcW8yc3FqazN5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orieRjO5A3MAnB6M0/giphy.gif" },
            { name: "Сгъване от лег", equip: "machine", diff: 1, synergy: [], gif: "" }
        ],
        home: [{ name: "Глутеус мост (1 крак)", equip: "body", diff: 2, synergy: ["glutes"], gif: "" }],
        stretch: [{ name: "Наклон напред от седеж", gif: "" }],
        stats: { strength: 88, volume: 80 },
        tips: ["Бутайте таза назад.", "Дръжте лоста до краката."],
        mistakes: ["Свиване на коленете.", "Изгърбване."]
    },
    triceps: {
        title: "Трицепс", latin: "Triceps Brachii",
        gym: [{ name: "Разгъване на скрипец", equip: "machine", diff: 1, synergy: [], gif: "" }],
        home: [{ name: "Кофички на пейка", equip: "body", diff: 1, synergy: ["shoulders"], gif: "" }],
        stretch: [{ name: "Стреч над глава", gif: "" }],
        stats: { strength: 70, volume: 95 },
        tips: ["Лактите неподвижни.", "Пълно заключване долу."],
        mistakes: ["Разтваряне на лактите."]
    },
    quads: {
        title: "Квадрицепс", latin: "Quadriceps Femoris",
        gym: [{ name: "Клек с щанга", equip: "barbell", diff: 3, synergy: ["lowerback", "glutes"], gif: "" }],
        home: [{ name: "Български клек", equip: "body", diff: 3, synergy: [], gif: "" }],
        stretch: [{ name: "Квадрицепс стреч", gif: "" }],
        stats: { strength: 100, volume: 90 },
        tips: ["Цяло стъпало на земята.", "Дълбок клек."],
        mistakes: ["Пети във въздуха."]
    },
    abs: {
        title: "Корем", latin: "Rectus Abdominis",
        gym: [{ name: "Повдигане на крака", equip: "body", diff: 2, synergy: [], gif: "" }],
        home: [{ name: "Планк", equip: "body", diff: 1, synergy: [], gif: "" }],
        stretch: [{ name: "Кобра", gif: "" }],
        stats: { strength: 60, volume: 70 },
        tips: ["Стягайте ядрото.", "Дишайте равномерно."],
        mistakes: ["Напрежение във врата."]
    },
    traps: {
        title: "Трапец", latin: "Trapezius",
        gym: [{ name: "Шраг с дъмбели", equip: "dumbbell", diff: 1, synergy: ["forearms"], gif: "" }],
        home: [{ name: "Y-raises", equip: "body", diff: 2, synergy: [], gif: "" }],
        stretch: [{ name: "Наклон на врата", gif: "" }],
        stats: { strength: 85, volume: 60 },
        tips: ["Не въртете раменете.", "Задръжте горе."],
        mistakes: ["Прекалено голяма тежест."]
    },
    calves: {
        title: "Прасец", latin: "Gastrocnemius",
        gym: [{ name: "Повдигане на пръсти", equip: "machine", diff: 1, synergy: [], gif: "" }],
        home: [{ name: "Повдигане на стълби", equip: "body", diff: 1, synergy: [], gif: "" }],
        stretch: [{ name: "Стреч на стена", gif: "" }],
        stats: { strength: 80, volume: 100 },
        tips: ["Пълна амплитуда до долу.", "Експлозивно нагоре."],
        mistakes: ["Твърде бързо темпо."]
    }
};



[Image of full human muscular anatomy front and back views]


function selectMuscle(id) {
    currentMuscle = id;
    updateUI();
}

function updateUI() {
    const m = database[currentMuscle];
    if (!m) return;

    resetModel();
    document.getElementById(currentMuscle).classList.add('active-muscle');

    document.getElementById('intro-msg').style.display = 'none';
    document.getElementById('exercise-content').style.display = 'block';
    document.getElementById('stats-panel').style.display = 'block';
    
    document.getElementById('lat-title').innerText = m.latin;
    
    const equip = document.getElementById('equip-filter').value;
    let list = currentMode === 'stretch' ? m.stretch : 
               (currentMode === 'gym' ? m.gym : m.home).filter(ex => equip === 'all' || ex.equip === equip);

    let html = `<h2>${m.title}</h2>`;
    list.forEach((ex, i) => {
        html += `<div class="ex-item" onclick="showExercise(${i})">
                    <span>${ex.name}</span>
                    <span>⚡${ex.diff || 'S'}</span>
                 </div>`;
    });
    document.getElementById('list-holder').innerHTML = html;

    document.getElementById('tips-list').innerHTML = m.tips.map(t => `<li>${t}</li>`).join('');
    document.getElementById('error-list').innerHTML = m.mistakes.map(e => `<li>❌ ${e}</li>`).join('');
    
    document.getElementById('bar-strength').style.width = m.stats.strength + '%';
    document.getElementById('bar-volume').style.width = m.stats.volume + '%';
}

function showExercise(idx) {
    const m = database[currentMuscle];
    const equip = document.getElementById('equip-filter').value;
    let list = currentMode === 'stretch' ? m.stretch : 
               (currentMode === 'gym' ? m.gym : m.home).filter(ex => equip === 'all' || ex.equip === equip);
    
    const ex = list[idx];
    document.getElementById('main-gif').src = ex.gif || "";
    
    resetModel();
    document.getElementById(currentMuscle).classList.add('active-muscle');
    if (ex.synergy) {
        ex.synergy.forEach(s => {
            const el = document.getElementById(s);
            if (el) el.classList.add('synergy-muscle');
        });
    }
}

function resetModel() {
    document.querySelectorAll('.muscle-segment').forEach(el => el.classList.remove('active-muscle', 'synergy-muscle'));
}

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${mode}`).classList.add('active');
    updateUI();
}

function toggleTheme() { document.body.classList.toggle('light-theme'); }
