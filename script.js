let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Гърди (Chest)",
        desc: "Гръдните мускули са символ на сила и мощ. Във фитнеса те са приоритет за изграждане на масивна горна част на тялото и подобряване на бутащата сила.",
        gym: ["Бенч преса с щанга", "Полулег с дъмбели", "Кросоувър на скрипец"],
        home: ["Класически лицеви опори", "Лицеви опори на един крак"],
        gymEquip: ["Щанга", "Дъмбели", "Скрипец"],
        homeEquip: ["Bodyweight (Собствено тегло)"]
    },
    lowerback: {
        title: "Кръст (Lower Back)",
        desc: "Кръстът е основата на гръбначния стълб. Силният кръст предпазва от контузии при тежки клекове и тяга и е ключов за правилната стойка.",
        gym: ["Мъртва тяга", "Хиперекстензии", "Добро утро с щанга"],
        home: ["Супермен", "Птица-куче (Bird-dog)"],
        gymEquip: ["Щанга", "Хиперекстензия пейка"],
        homeEquip: ["Bodyweight (Собствено тегло)"]
    },
    upperback: {
        title: "Трапец (Upper Back)",
        desc: "Горната част на гърба придава плътност и ширина. Тя е отговорна за стабилността на раменете при вдигане на тежести.",
        gym: ["Повдигане на рамене с щанга", "Гребане на долен скрипец"],
        home: ["Гребане с раница", "Гръбни екстензии"],
        gymEquip: ["Щанга", "Скрипец"],
        homeEquip: ["Bodyweight", "Раница/Бутилки"]
    },
    lats: {
        title: "Латове (Lats)",
        desc: "Широкият гръбен мускул създава 'V-образната' форма. Това е най-големият мускул в горната част на тялото.",
        gym: ["Вертикален скрипец", "Набирания", "Гребане с дъмбел"],
        home: ["Набирания на лост", "Гребане с туби с вода"],
        gymEquip: ["Скрипец", "Лост", "Дъмбели"],
        homeEquip: ["Лост", "Bodyweight"]
    },
    shoulders: {
        title: "Рамене (Shoulders)",
        desc: "Раменете осигуряват завършен вид на тялото. Силните делтоиди са жизненоважни за всяко движение на ръцете.",
        gym: ["Раменна преса", "Разтваряне встрани"],
        home: ["Пийк лицеви опори", "Разтваряне с бутилки"],
        gymEquip: ["Дъмбели", "Щанга"],
        homeEquip: ["Bodyweight", "Бутилки"]
    },
    biceps: {
        title: "Бицепс (Biceps)",
        desc: "Любимият мускул за тренировка. Фокусира се върху върха и дебелината на ръката.",
        gym: ["Сгъване с щанга", "Чуково сгъване"],
        home: ["Сгъване с раница", "Набирания с подхват"],
        gymEquip: ["EZ Лост", "Дъмбели"],
        homeEquip: ["Раница", "Лост за набиране"]
    },
    abs: {
        title: "Корем (Abs)",
        desc: "Коремните мускули стабилизират торса. Видимите плочки са резултат от нисък процент мазнини и редовно натоварване.",
        gym: ["Повдигане на крака от вис", "Молитва на скрипец"],
        home: ["Планк", "Коремни преси", "V-преси"],
        gymEquip: ["Лост за вис", "Скрипец"],
        homeEquip: ["Bodyweight (Собствено тегло)"]
    },
    quads: {
        title: "Бедра (Quads)",
        desc: "Най-мощната мускулна група. Краката са основата на цялата физика и метаболизъм.",
        gym: ["Клек с щанга", "Лег преса", "Бедрено разгъване"],
        home: ["Клякания", "Български клек", "Напади"],
        gymEquip: ["Щанга", "Лег преса машина"],
        homeEquip: ["Bodyweight", "Стол (за опора)"]
    }
};

function selectMuscle(muscle) {
    currentMuscle = muscle;
    document.querySelectorAll('.muscle-segment').forEach(el => el.classList.remove('active-muscle'));
    document.querySelectorAll(`[id^="${muscle}"]`).forEach(part => part.classList.add('active-muscle'));
    updateUI();
}

function setMode(mode) {
    currentMode = mode;
    document.getElementById('btn-gym').classList.toggle('active', mode === 'gym');
    document.getElementById('btn-home').classList.toggle('active', mode === 'home');
    updateUI();
}

function updateUI() {
    if (!currentMuscle) return;
    const display = document.getElementById('info-card');
    const muscleData = data[currentMuscle];
    const exercises = currentMode === 'gym' ? muscleData.gym : muscleData.home;
    const equipment = currentMode === 'gym' ? muscleData.gymEquip : muscleData.homeEquip;

    let html = `<h1 style="color: var(--primary);">${muscleData.title}</h1>`;
    html += `<div class="desc-box">${muscleData.desc}</div>`;
    
    html += `<h3>Упражнения:</h3><ul>`;
    exercises.forEach(ex => html += `<li>${ex}</li>`);
    html += `</ul>`;

    html += `<h3>Необходимо оборудване:</h3>`;
    equipment.forEach(item => html += `<span class="equip-tag">${item}</span>`);
    
    display.innerHTML = html;
}
