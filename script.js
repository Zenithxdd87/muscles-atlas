let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Гърди (Chest)",
        desc: "Гръдните мускули са двигател на всички избутващи движения. Тренират се за обем, сила и широчина на торса.",
        gym: ["Бенч преса (Bench Press)", "Наклонена лежанка с дъмбели", "Кросоувър (Cable Flyes)", "Кофички с тежест", "Пек-дек машина"],
        home: ["Лицеви опори (Push-ups)", "Decline лицеви опори", "Диамантени опори", "Флайс с бутилки на земя"],
        gymEquip: ["Щанга (Barbell)", "Дъмбели (Dumbbells)", "Скрипец (Cables)"],
        homeEquip: ["Собствено тегло (Bodyweight)", "Бутилки / Ластици"]
    },
    shoulders_front: {
        title: "Предно рамо (Front Delts)",
        desc: "Отговаря за повдигането на ръката напред. Участва активно в пресите за гърди.",
        gym: ["Военна преса (Military Press)", "Предно повдигане с дъмбели", "Преса на машина"],
        home: ["Пийк лицеви опори (Pike Push-ups)", "Предно повдигане с бутилки"],
        gymEquip: ["Щанга", "Дъмбели"],
        homeEquip: ["Bodyweight", "Бутилки"]
    },
    shoulders_side: {
        title: "Средно рамо (Side Delts)",
        desc: "Това е мускулът, който придава широчина на раменете и V-образната форма.",
        gym: ["Разтваряне встрани с дъмбели", "Разтваряне на скрипец", "Машина за средно рамо"],
        home: ["Разтваряне встрани с бутилки", "Разтваряне с ластик"],
        gymEquip: ["Дъмбели", "Скрипец"],
        homeEquip: ["Бутилки / Ластик"]
    },
    shoulders_rear: {
        title: "Задно рамо (Rear Delts)",
        desc: "Често пренебрегвано, но есенциално за 3D визията на рамото и здравето на ротаторния маншон.",
        gym: ["Фейс пул (Face Pulls)", "Обратен флайс на машина", "Разтваряне от наклон"],
        home: ["Обратни снежни ангели", "Разтваряне от наклон с бутилки"],
        gymEquip: ["Скрипец", "Дъмбели"],
        homeEquip: ["Бутилки", "Собствено тегло"]
    },
    lowerback: {
        title: "Кръст (Lower Back)",
        desc: "Критично важна зона за стабилизация на гръбнака. Силният кръст позволява тежки клекове.",
        gym: ["Мъртва тяга (Deadlift)", "Хиперекстензии", "Добро утро с щанга", "Румънска тяга"],
        home: ["Супермен (Superman)", "Птица-куче", "Мост от земя", "Екстензии от лег"],
        gymEquip: ["Щанга", "Пейка за екстензии"],
        homeEquip: ["Bodyweight"]
    },
    forearms: {
        title: "Предмишници (Forearms)",
        desc: "Основата на вашия захват. Без силни предмишници не можете да държите тежки тежести.",
        gym: ["Свиване на китки с щанга", "Чуково сгъване", "Фермерска разходка", "Обърнато сгъване"],
        home: ["Изстискване на кърпа", "Въртене на бутилка", "Задържане на тежки предмети"],
        gymEquip: ["Щанга", "Дъмбели"],
        homeEquip: ["Кърпа", "Тежки бутилки / Туби"]
    },
    lats: {
        title: "Латове (Lats)",
        desc: "Широкият гръбен мускул. Използва се за всички дърпащи движения отгоре.",
        gym: ["Набирания", "Вертикален скрипец", "Пулоувър на скрипец"],
        home: ["Набирания на лост", "Гребане под маса", "Дърпане на врата"],
        gymEquip: ["Скрипец", "Лост"],
        homeEquip: ["Лост", "Маса / Кърпа"]
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
    html += `<div class="desc-box"><strong>ИНФОРМАЦИЯ:</strong> ${muscleData.desc}</div>`;
    html += `<h3>УПРАЖНЕНИЯ:</h3><ul>`;
    exercises.forEach(ex => html += `<li>${ex}</li>`);
    html += `</ul>`;
    
    html += `<div class="equip-container"><h3>ОБОРУДВАНЕ (EQUIPMENT):</h3>`;
    equipment.forEach(e => html += `<span class="equip-tag">${e}</span>`);
    html += `</div>`;
    
    document.getElementById('info-card').innerHTML = html;
}
