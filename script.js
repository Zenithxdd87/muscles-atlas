let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Гърди / Chest",
        desc: "Основната група за изтласкващи движения.",
        gym: ["Бенч преса / Bench Press", "Наклонена лежанка / Incline DB Press", "Кросоувър / Cable Flyes", "Пек-дек / Pec Deck", "Кофички / Chest Dips"],
        home: ["Лицеви опори / Push-ups", "Диамантени опори / Diamond Push-ups", "Широки опори / Wide Push-ups", "Флайс на земя / Floor Flyes"],
        gymEquip: ["Щанга / Barbell", "Дъмбели / Dumbbells", "Скрипец / Cables"],
        homeEquip: ["Bodyweight", "Бутилки / Bottles"],
        tips: ["Дръжте лопатките събрани назад.", "Не разтваряйте лактите твърде много встрани.", "Контролирайте негативната фаза на движението."]
    },
    abs: {
        title: "Корем / Abs",
        desc: "Стабилизира ядрото и гръбнака.",
        gym: ["Коремни на скрипец / Cable Crunches", "Повдигане на крака от вис / Hanging Leg Raises", "Руски туист / Russian Twist"],
        home: ["Коремни преси / Crunches", "Планк / Plank", "Велосипед / Bicycle Crunches", "Планински катерач / Mountain Climbers"],
        gymEquip: ["Скрипец / Cable", "Лост / High Bar"],
        homeEquip: ["Bodyweight", "Постелка / Mat"],
        tips: ["Свивайте мускула, не дърпайте врата.", "Дишайте дълбоко при всяко повторение.", "Дръжте кръста залепен за пода при преси."]
    },
    shoulders_front: {
        title: "Предно рамо / Front Delts",
        desc: "Отговаря за повдигането на ръката напред.",
        gym: ["Военна преса / Military Press", "Раменна преса / Shoulder Press", "Предно повдигане / Front Raises"],
        home: ["Пийк опори / Pike Push-ups", "Предно повдигане с туби / Front Raises (Bottles)"],
        gymEquip: ["Щанга", "Дъмбели"],
        homeEquip: ["Bodyweight", "Туби / Bottles"],
        tips: ["Дръжте тялото изправено без люлеене.", "Не вдигайте по-високо от нивото на очите.", "Стягайте корема за стабилност."]
    },
    shoulders_side: {
        title: "Средно рамо / Side Delts",
        desc: "Осигурява широчина на раменете.",
        gym: ["Разтваряне встрани / Lateral Raises", "Разтваряне на скрипец / Cable Lateral Raises"],
        home: ["Разтваряне с бутилки / Side Raises (Bottles)", "Разтваряне с ластик / Band Side Raises"],
        gymEquip: ["Дъмбели", "Скрипец"],
        homeEquip: ["Бутилки", "Ластик / Resistance Band"],
        tips: ["Водете с лактите, не с китките.", "Леко наклонете торса напред.", "Дръжте ръцете леко свити в лактите."]
    },
    shoulders_rear: {
        title: "Задно рамо / Rear Delts",
        desc: "Важно за 3D визията и здравето на ставите.",
        gym: ["Фейс пул / Face Pulls", "Обратен флайс / Reverse Pec Deck", "Разтваряне от наклон / Bent-over Lateral Raises"],
        home: ["Обратни снежни ангели / Reverse Snow Angels", "Разтваряне от наклон с бутилки"],
        gymEquip: ["Скрипец", "Дъмбели", "Машина"],
        homeEquip: ["Bodyweight", "Бутилки"],
        tips: ["Стискайте лопатките в горна точка.", "Не използвайте тежест, която не можете да контролирате.", "Дръжте врата в неутрална позиция."]
    },
    upperback: {
        title: "Трапец / Upper Back",
        desc: "Дава плътност на горния гръб.",
        gym: ["Шръгове / Shrugs", "Гребане с Т-образна щанга / T-Bar Row", "Вертикално гребане / Upright Row"],
        home: ["Шръгове с раница / Shrugs (Backpack)", "Гребане с раница / Backpack Rows"],
        gymEquip: ["Щанга", "Дъмбели"],
        homeEquip: ["Раница / Backpack"],
        tips: ["Не въртете раменете, само нагоре-надолу.", "Задръжте за секунда в най-високата точка.", "Дръжте гърба напълно прав."]
    },
    lats: {
        title: "Латове / Lats",
        desc: "Мускулът, който прави гърба широк.",
        gym: ["Вертикален скрипец / Lat Pulldown", "Набирания / Pull-ups", "Гребане с щанга / Barbell Row"],
        home: ["Набирания / Pull-ups", "Гребане под маса / Inverted Rows", "Дърпане с кърпа / Towel Rows"],
        gymEquip: ["Скрипец", "Лост", "Щанга"],
        homeEquip: ["Лост / Pull-up Bar", "Маса / Table"],
        tips: ["Дърпайте с лактите, не с бицепса.", "Разширете гърба максимално при спускане.", "Не използвайте инерция от кръста."]
    },
    lowerback: {
        title: "Кръст / Lower Back",
        desc: "Най-важният стабилизатор на тялото.",
        gym: ["Мъртва тяга / Deadlift", "Хиперекстензии / Hyperextensions", "Румънска тяга / Romanian Deadlift"],
        home: ["Супермен / Superman", "Глутеус мост / Glute Bridge", "Птица-куче / Bird-Dog"],
        gymEquip: ["Щанга", "Пейка за хиперекстензии"],
        homeEquip: ["Bodyweight", "Постелка"],
        tips: ["Никога не извивайте гърба в дъга!", "Дръжте щангата плътно до краката си.", "Стягайте ядрото преди всяко повдигане."]
    },
    biceps: {
        title: "Бицепс / Biceps",
        desc: "За сила и обем на ръцете.",
        gym: ["Сгъване с щанга / Barbell Curl", "Чуково сгъване / Hammer Curls", "Скотово сгъване / Preacher Curls"],
        home: ["Сгъване с раница / Backpack Curls", "Набирания подхват / Chin-ups", "Сгъване с туба"],
        gymEquip: ["Щанга / Barbell", "Дъмбели / Dumbbells"],
        homeEquip: ["Раница", "Лост", "Туба"],
        tips: ["Не люлейте тялото назад.", "Дръжте лактите фиксирани до тялото.", "Стискайте мускула в горна точка."]
    },
    triceps: {
        title: "Трицепс / Triceps",
        desc: "Дава реалния обем на ръката.",
        gym: ["Разгъване на скрипец / Cable Pushdowns", "Френско разгъване / Skull Crushers", "Кофички / Dips"],
        home: ["Диамантени опори / Diamond Push-ups", "Кофички на стол / Chair Dips"],
        gymEquip: ["Скрипец", "Щанга", "Успоредка"],
        homeEquip: ["Стол / Chair", "Bodyweight"],
        tips: ["Дръжте лактите прибрани.", "Разгъвайте до пълен стоп.", "Не използвайте инерция от раменете."]
    },
    forearms: {
        title: "Предмишници / Forearms",
        desc: "За здрав захват и мощни предмишници.",
        gym: ["Свиване на китки / Wrist Curls", "Фермерска разходка / Farmer's Walk"],
        home: ["Изстискване на кърпа / Towel Squeeze", "Задържане на тежки туби"],
        gymEquip: ["Щанга", "Дъмбели"],
        homeEquip: ["Кърпа", "Туби"],
        tips: ["Използвайте пълен обхват на движение.", "Правете бавни, контролирани повторения.", "Тренирайте ги в края на тренировката."]
    },
    quads: {
        title: "Предно бедро / Quads",
        desc: "Двигателят на краката.",
        gym: ["Клек с щанга / Squat", "Лег преса / Leg Press", "Екстензии / Leg Extensions"],
        home: ["Клякания / Air Squats", "Български клек / Bulgarian Split Squat", "Напади / Lunges"],
        gymEquip: ["Щанга", "Лег преса", "Машина"],
        homeEquip: ["Bodyweight", "Стол"],
        tips: ["Дръжте петите залепени за пода.", "Гърбът трябва да е винаги изправен.", "Колената трябва да сочат в посока на пръстите."]
    },
    hamstrings: {
        title: "Задно бедро / Hamstrings",
        desc: "Стабилизира коленете и дава мощ.",
        gym: ["Румънска тяга / Romanian Deadlift", "Бедрено сгъване / Leg Curls"],
        home: ["Мост с един крак / Single Leg Bridge", "Напади назад / Reverse Lunges"],
        gymEquip: ["Щанга", "Машина за сгъване"],
        homeEquip: ["Bodyweight"],
        tips: ["Чувствайте разтягането в задната част.", "Не заключвайте коленете напълно.", "Движете се бавно надолу."]
    },
    glutes: {
        title: "Седалище / Glutes",
        desc: "Най-мощният мускул в тялото.",
        gym: ["Хип Тръст / Hip Thrust", "Сумо клек / Sumo Squat", "Кикбек / Cable Kickbacks"],
        home: ["Глутеус мост / Glute Bridge", "Магарешки ритници / Donkey Kicks"],
        gymEquip: ["Щанга", "Скрипец", "Пейка"],
        homeEquip: ["Bodyweight", "Ластик"],
        tips: ["Стискайте силно в най-високата точка.", "Бутайте през петите.", "Дръжте ядрото стегнато."]
    },
    calves: {
        title: "Прасци / Calves",
        desc: "Изискват високо повторение и натоварване.",
        gym: ["Повдигане на калф машина / Standing Calf Raises", "Повдигане от лег / Leg Press Calf Raises"],
        home: ["Повдигане на пръсти на стъпало / Stair Calf Raises"],
        gymEquip: ["Калф машина", "Лег преса"],
        homeEquip: ["Стъпало", "Bodyweight"],
        tips: ["Задръжте за секунда в горно и долно положение.", "Не пружинирайте бързо.", "Използвайте пълен обхват."]
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
    if (!currentMuscle || !data[currentMuscle]) return;
    const m = data[currentMuscle];
    const ex = currentMode === 'gym' ? m.gym : m.home;
    const eq = currentMode === 'gym' ? m.gymEquip : m.homeEquip;

    // Center UI
    let html = `<h1>${m.title}</h1><div class="desc-box">${m.desc}</div><h3>УПРАЖНЕНИЯ / EXERCISES:</h3><ul>`;
    ex.forEach(item => html += `<li>${item}</li>`);
    html += `</ul><div class="equip-container"><h3>НЕОБХОДИМО / EQUIPMENT:</h3>`;
    eq.forEach(item => html += `<span class="equip-tag">${item}</span>`);
    html += `</div>`;
    document.getElementById('info-card').innerHTML = html;

    // Right Sidebar UI (Tips)
    let tipsHtml = "";
    m.tips.forEach(t => tipsHtml += `<div class="tip-item">${t}</div>`);
    document.getElementById('tips-container').innerHTML = tipsHtml;
}
