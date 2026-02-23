let currentMuscle = null;
let currentMode = 'gym';

const database = {
    chest: {
        title: "Гърди", latin: "Pectoralis Major",
        gym: [
            { name: "Бенч преса с щанга", equip: "barbell", diff: 3, synergy: ["triceps", "shoulders_front"], gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VndXNidGphZHR5NnN6czl3ZW5hYTBzN25nZGNvYng3Y3J6eG5reSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKVUn7iM8FMEU24/giphy.gif" },
            { name: "Наклонена лежанка (Дъмбели)", equip: "dumbbell", diff: 2, synergy: ["triceps", "shoulders_front"], gif: "" },
            { name: "Кросоувър на кабели", equip: "machine", diff: 1, synergy: [], gif: "" }
        ],
        home: [
            { name: "Класически лицеви опори", equip: "body", diff: 2, synergy: ["triceps"], gif: "" },
            { name: "Широки лицеви опори", equip: "body", diff: 2, synergy: ["triceps"], gif: "" }
        ],
        stretch: [{ name: "Разтягане на врата (Chest Stretch)", gif: "" }],
        stats: { strength: 95, volume: 92 },
        tips: ["Свийте лопатките назад и надолу.", "Контролирайте спускането на тежестта."],
        mistakes: ["Отскачане на лоста от гърдите.", "Прекалено широк хват."]
    },
    lats: {
        title: "Гръб (Широк мускул)", latin: "Latissimus Dorsi",
        gym: [
            { name: "Вертикален скрипец", equip: "machine", diff: 1, synergy: ["biceps", "forearms"], gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VndXNidGphZHR5NnN6czl3ZW5hYTBzN25nZGNvYng3Y3J6eG5reSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6oO302DqY9D1e/giphy.gif" },
            { name: "Гребане с щанга", equip: "barbell", diff: 3, synergy: ["lowerback", "biceps", "traps"], gif: "" }
        ],
        home: [{ name: "Набирания (ако имате лост)", equip: "body", diff: 3, synergy: ["biceps"], gif: "" }],
        stretch: [{ name: "Висящо разтягане (Dead Hang)", gif: "" }],
        stats: { strength: 90, volume: 88 },
        tips: ["Водете с лактите, а не с дланите.", "Мислете за 'затваряне' на мишницата към тялото."],
        mistakes: ["Люлеене (кипинг).", "Прекалено малка амплитуда."]
    },
    traps: {
        title: "Трапец", latin: "Musculus Trapezius",
        gym: [{ name: "Шраг с дъмбели", equip: "dumbbell", diff: 1, synergy: ["forearms"], gif: "" }],
        home: [{ name: "Y-Raises на земя", equip: "body", diff: 2, synergy: ["shoulders_front"], gif: "" }],
        stretch: [{ name: "Страничен наклон на врата", gif: "" }],
        stats: { strength: 80, volume: 70 },
        tips: ["Движете само раменете нагоре-надолу.", "Задръжте пикова контракция."],
        mistakes: ["Въртене на раменете в кръг."]
    },
    triceps: {
        title: "Трицепс", latin: "Triceps Brachii",
        gym: [
            { name: "Разгъване на скрипец", equip: "machine", diff: 1, synergy: [], gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp1NHN1bnJpOWp0bmJqZ2xxeGZ3eXNxcnhqbmx3eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/vA3p9p3n4zSVO/giphy.gif" },
            { name: "Френска преса", equip: "barbell", diff: 2, synergy: ["shoulders_front"], gif: "" }
        ],
        home: [{ name: "Диамантени опори", equip: "body", diff: 3, synergy: ["chest"], gif: "" }],
        stretch: [{ name: "Трицепс стреч зад глава", gif: "" }],
        stats: { strength: 75, volume: 90 },
        tips: ["Заключете лактите неподвижно до тялото.", "Пълно разгъване."],
        mistakes: ["Разтваряне на лактите встрани."]
    },
    biceps: {
        title: "Бицепс", latin: "Biceps Brachii",
        gym: [{ name: "Сгъване с щанга", equip: "barbell", diff: 2, synergy: ["forearms"], gif: "" }],
        home: [{ name: "Сгъване с ластик или туби", equip: "body", diff: 1, synergy: ["forearms"], gif: "" }],
        stretch: [{ name: "Стреч на бицепс на стена", gif: "" }],
        stats: { strength: 65, volume: 95 },
        tips: ["Не люлейте тялото.", "Дръжте китките прави."],
        mistakes: ["Използване на инерция."]
    },
    hamstrings: {
        title: "Задно бедро", latin: "Biceps Femoris",
        gym: [
            { name: "Румънска мъртва тяга", equip: "barbell", diff: 3, synergy: ["lowerback", "glutes"], gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHY1Ym5nZ3VqZDFlYTM0NTRzYjF6Nmxtbm56Z3BqcW8yc3FqazN5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3orieRjO5A3MAnB6M0/giphy.gif" },
            { name: "Сгъване на машина", equip: "machine", diff: 1, synergy: [], gif: "" }
        ],
        home: [{ name: "Нордик сгъване", equip: "body", diff: 3, synergy: ["glutes"], gif: "" }],
        stretch: [{ name: "Наклон напред (Hamstring Stretch)", gif: "" }],
        stats: { strength: 90, volume: 85 },
        tips: ["Бутайте таза назад, докато почувствате разтягане.", "Гърбът трябва да е 'бетон'."],
        mistakes: ["Свиване на коленете.", "Отпускане на кръста."]
    },
    quads: {
        title: "Квадрицепс", latin: "Quadriceps Femoris",
        gym: [{ name: "Клек с щанга", equip: "barbell", diff: 3, synergy: ["glutes", "lowerback"], gif: "" }],
        home: [{ name: "Български клек", equip: "body", diff: 3, synergy: ["glutes"], gif: "" }],
        stretch: [{ name: "Стреч на квадрицепс (от стоеж)", gif: "" }],
        stats: { strength: 100, volume: 90 },
        tips: ["Цялото стъпало е на земята.", "Гърдите сочат напред."],
        mistakes: ["Петите се отделят от пода."]
    },
    lowerback: {
        title: "Кръст", latin: "Erector Spinae",
        gym: [{ name: "Хиперекстензии", equip: "machine", diff: 2, synergy: ["glutes", "hamstrings"], gif: "" }],
        home: [{ name: "Супермен (от лег)", equip: "body", diff: 1, synergy: [], gif: "" }],
        stretch: [{ name: "Поза Котка-Крава", gif: "" }],
        stats: { strength: 95, volume: 60 },
        tips: ["Контролирано движение.", "Не се извивайте прекалено назад."],
        mistakes: ["Резки движения."]
    },
    abs: {
        title: "Корем", latin: "Rectus Abdominis",
        gym: [{ name: "Повдигане на крака от вис", equip: "body", diff: 3, synergy: ["forearms"], gif: "" }],
        home: [{ name: "Коремни преси", equip: "body", diff: 1, synergy: [], gif: "" }],
        stretch: [{ name: "Поза Кобра", gif: "" }],
        stats: { strength: 60, volume: 75 },
        tips: ["Издишайте при контракцията.", "Притискайте кръста към пода."],
        mistakes: ["Дърпане на врата с ръце."]
    }
};

function selectMuscle(id) {
    currentMuscle = id;
    updateUI();
}

function updateUI() {
    const m = database[currentMuscle];
    if (!m) return;

    resetModel();
    const targetElement = document.getElementById(currentMuscle);
    if (targetElement) targetElement.classList.add('active-muscle');

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
                    <span>${ex.diff ? "⚡".repeat(ex.diff) : "🧘"}</span>
                 </div>`;
    });
    document.getElementById('list-holder').innerHTML = html || "<p>Няма намерени упражнения за този филтър.</p>";

    document.getElementById('tips-list').innerHTML = m.tips.map(t => `<li>${t}</li>`).join('');
    document.getElementById('error-list').innerHTML = m.mistakes.map(e => `<li>${e}</li>`).join('');
    
    // Анимация на баровете
    setTimeout(() => {
        document.getElementById('bar-strength').style.width = m.stats.strength + '%';
        document.getElementById('bar-volume').style.width = m.stats.volume + '%';
    }, 50);
}

function showExercise(idx) {
    const m = database[currentMuscle];
    const equip = document.getElementById('equip-filter').value;
    let list = currentMode === 'stretch' ? m.stretch : 
               (currentMode === 'gym' ? m.gym : m.home).filter(ex => equip === 'all' || ex.equip === equip);
    
    const ex = list[idx];
    const gifImg = document.getElementById('main-gif');
    gifImg.src = ex.gif || "https://via.placeholder.com/300x200?text=No+GIF+Available";
    
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

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}
