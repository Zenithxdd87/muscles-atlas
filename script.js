let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Гърди (Chest)",
        desc: "Основна мускулна група за изтласкващи движения. Тренира се за мощна визия и сила в горната част.",
        gym: ["Бенч преса с щанга", "Полулег с дъмбели", "Кросоувър на скрипец", "Пек-дек машина", "Кофички на успоредка"],
        home: ["Класически лицеви опори", "Лицеви опори на един стол", "Широки опори", "Диамантени опори"],
        gymEquip: ["Щанга (Barbell)", "Дъмбели (Dumbbells)", "Скрипец (Cables)"],
        homeEquip: ["Собствено тегло (Bodyweight)", "Столове (Chairs)"]
    },
    abs: {
        title: "Корем (Abs)",
        desc: "Ядрото на тялото. Стабилизира гръбнака и е символ на нисък процент мазнини.",
        gym: ["Повдигане на крака от вис", "Коремни преси на скрипец", "Планк с тежест", "Руски туист"],
        home: ["Коремни преси", "Планк", "V-преси", "Велосипедни преси"],
        gymEquip: ["Лост", "Скрипец", "Тежести (Plates)"],
        homeEquip: ["Собствено тегло (Bodyweight)"]
    },
    shoulders_front: {
        title: "Предно рамо (Front Delts)",
        desc: "Отговаря за повдигането на ръцете напред и участва във всички преси.",
        gym: ["Военна преса", "Раменна преса с дъмбели", "Предно повдигане с диск"],
        home: ["Пийк лицеви опори", "Предно повдигане с туби", "Стенна опора"],
        gymEquip: ["Щанга", "Дъмбели"],
        homeEquip: ["Бутилки / Туби", "Bodyweight"]
    },
    shoulders_side: {
        title: "Средно рамо (Side Delts)",
        desc: "Това е мускулът, който прави раменете широки и тялото V-образно.",
        gym: ["Разтваряне встрани с дъмбели", "Разтваряне на скрипец", "Машина за рамо"],
        home: ["Разтваряне с ластик", "Разтваряне с бутилки", "Изометрично задържане"],
        gymEquip: ["Дъмбели", "Скрипец"],
        homeEquip: ["Бутилки / Туби", "Ластици"]
    },
    shoulders_rear: {
        title: "Задно рамо (Rear Delts)",
        desc: "Ключово за здравето на раменната става и плътната визия отзад.",
        gym: ["Фейс пул (Face Pulls)", "Обратен флайс на машина", "Разтваряне от наклон"],
        home: ["Обратни снежни ангели", "Гребане с ластик към лицето", "Y-W повдигания"],
        gymEquip: ["Скрипец", "Дъмбели"],
        homeEquip: ["Bodyweight", "Ластик"]
    },
    upperback: {
        title: "Трапец (Upper Back / Traps)",
        desc: "Осигурява плътност в горната част на гърба и контролира движението на лопатките.",
        gym: ["Шръгове с щанга", "Гребане с Т-образна щанга", "Шръгове на машина"],
        home: ["Шръгове с раница", "Гребане с ластик отгоре", "Superman"],
        gymEquip: ["Щанга", "Машини"],
        homeEquip: ["Раница (Backpack)", "Bodyweight"]
    },
    lats: {
        title: "Латове (Lats)",
        desc: "Най-големият мускул на гърба. Отговаря за широчината.",
        gym: ["Вертикален скрипец", "Набирания с тежест", "Гребане с щанга", "Пулоувър"],
        home: ["Набирания на лост", "Гребане под маса", "Дърпане на кърпа"],
        gymEquip: ["Скрипец", "Лост", "Щанга"],
        homeEquip: ["Лост (Pull-up bar)", "Маса", "Кърпа"]
    },
    lowerback: {
        title: "Кръст (Lower Back)",
        desc: "Основата на гръбначния стълб. Изключително важен за силовите постижения.",
        gym: ["Мъртва тяга (Deadlift)", "Хиперекстензии", "Румънска тяга", "Добро утро"],
        home: ["Супермен екстензии", "Птица-куче", "Мост", "Котешки гръб"],
        gymEquip: ["Щанга", "Пейка (Bench)"],
        homeEquip: ["Bodyweight"]
    },
    biceps: {
        title: "Бицепс (Biceps)",
        desc: "Мускулът на ръката за сгъване. Важен за захвата и дърпащите движения.",
        gym: ["Сгъване с щанга", "Чуково сгъване", "Скотово сгъване", "Концентрирано сгъване"],
        home: ["Сгъване с раница", "Набирания подхват", "Сгъване с туба"],
        gymEquip: ["Щанга", "Дъмбели", "EZ Лост"],
        homeEquip: ["Раница", "Лост", "Туби"]
    },
    triceps: {
        title: "Трицепс (Triceps)",
        desc: "Заема 2/3 от обема на ръката. Отговаря за разгъването.",
        gym: ["Френско разгъване", "Разгъване на скрипец", "Кофички", "Тесен хват"],
        home: ["Диамантени опори", "Кофички на стол", "Разгъване зад глава"],
        gymEquip: ["Щанга", "Скрипец", "Успоредка"],
        homeEquip: ["Стол", "Bodyweight", "Бутилка"]
    },
    forearms: {
        title: "Предмишници (Forearms)",
        desc: "Контролират силата на стискане. Без тях не можеш да държиш тежко.",
        gym: ["Свиване на китки", "Фермерска разходка", "Обърнато сгъване"],
        home: ["Изстискване на кърпа", "Въртене на бутилка", "Задържане на туби"],
        gymEquip: ["Щанга", "Дъмбели"],
        homeEquip: ["Кърпа", "Бутилки"]
    },
    quads: {
        title: "Предно бедро (Quads)",
        desc: "Най-силният мускул на краката. Двигател на всяко движение.",
        gym: ["Клек с щанга", "Лег преса", "Бедрено разгъване", "Хакен клек"],
        home: ["Клякания", "Български клек", "Напади", "Стенен клек"],
        gymEquip: ["Щанга", "Лег преса", "Машина"],
        homeEquip: ["Bodyweight", "Стол"]
    },
    hamstrings: {
        title: "Задно бедро (Hamstrings)",
        desc: "Балансира силата на краката и предпазва коленете.",
        gym: ["Румънска тяга", "Бедрено сгъване", "Тяга с прави крака"],
        home: ["Глутеус мост", "Нордическо сгъване", "Напади назад"],
        gymEquip: ["Щанга", "Скрипец"],
        homeEquip: ["Bodyweight", "Постелка"]
    },
    glutes: {
        title: "Седалище (Glutes)",
        desc: "Най-мощният единичен мускул. Важен за експлозивността.",
        gym: ["Хип Тръст", "Клек", "Кикбек на скрипец", "Абдуктор"],
        home: ["Мост", "Магарешки ритници", "Сумо клек", "Пожарен кран"],
        gymEquip: ["Щанга", "Скрипец"],
        homeEquip: ["Bodyweight", "Ластик"]
    },
    calves: {
        title: "Прасци (Calves)",
        desc: "Осигуряват стабилност и отскок. Изискват много повторения.",
        gym: ["Повдигане на калф машина", "Повдигане на пръсти от лег"],
        home: ["Повдигане на пръсти на стълба", "Подскоци на пръсти"],
        gymEquip: ["Машина за прасци"],
        homeEquip: ["Стъпало (Step)", "Bodyweight"]
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
    const muscleData = data[currentMuscle];
    const exercises = currentMode === 'gym' ? muscleData.gym : muscleData.home;
    const equipment = currentMode === 'gym' ? muscleData.gymEquip : muscleData.homeEquip;

    let html = `<h1 style="color:var(--primary)">${muscleData.title}</h1>`;
    html += `<div class="desc-box"><strong>ИНФО:</strong> ${muscleData.desc}</div>`;
    html += `<h3>ПЛАН УПРАЖНЕНИЯ:</h3><ul>`;
    exercises.forEach(ex => html += `<li>${ex}</li>`);
    html += `</ul>`;
    
    html += `<div class="equip-container"><h3>НЕОБХОДИМО / EQUIPMENT:</h3>`;
    equipment.forEach(e => html += `<span class="equip-tag">${e}</span>`);
    html += `</div>`;
    
    document.getElementById('info-card').innerHTML = html;
}
