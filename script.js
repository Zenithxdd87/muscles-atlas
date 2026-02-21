let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Гърди (Chest)",
        desc: "Гръдните мускули са основни за всяко избутващо движение. Във фитнес индустрията те са символ на сила и добре развита горна част. Тренировката им подобрява общата тяга и визията на торса.",
        gym: ["Бенч преса с щанга (Bench Press)", "Наклонена лежанка с дъмбели (Incline Press)", "Кросоувър на скрипец (Cable Flyes)", "Машина за гърди (Chest Press Machine)", "Флайс с дъмбели (Dumbbell Flyes)"],
        home: ["Класически лицеви опори (Push-ups)", "Лицеви опори с крака на високо (Decline Push-ups)", "Широки лицеви опори (Wide Push-ups)", "Кофички на столове (Chair Dips)"],
        gymEquip: ["Щанга (Barbell)", "Дъмбели (Dumbbells)", "Скрипец (Cable Machine)"],
        homeEquip: ["Собствено тегло (Bodyweight)", "Столове (Chairs)"]
    },
    lowerback: {
        title: "Кръст (Lower Back / Erector Spinae)",
        desc: "Кръстът е 'мостът' между горната и долната част на тялото. Силният кръст е жизненоважен за здравето на гръбнака и за изпълнението на тежки многоставни движения като клек и тяга.",
        gym: ["Мъртва тяга (Deadlift)", "Хиперекстензии (Back Extensions)", "Добро утро с щанга (Good Mornings)", "Румънска тяга (Romanian Deadlift)"],
        home: ["Супермен (Superman)", "Птица-куче (Bird-Dog)", "Гръбни екстензии от под (Floor Extensions)", "Мост (Glute Bridge)"],
        gymEquip: ["Щанга (Barbell)", "Пейка за екстензии (Extension Bench)"],
        homeEquip: ["Собствено тегло (Bodyweight)", "Постелка (Mat)"]
    },
    upperback: {
        title: "Трапец и Горна част (Upper Back & Traps)",
        desc: "Този сектор отговаря за правилната стойка и плътността на гърба. Добре развитият трапец предпазва раменете и врата от контузии.",
        gym: ["Повдигане на рамене с щанга (Shrugs)", "Фейс пул на скрипец (Face Pulls)", "Гребане с щанга (Barbell Row)", "Високо гребане на скрипец"],
        home: ["Гребане с раница (Backpack Row)", "Обратни снежни ангели", "Y-W повдигания с бутилки"],
        gymEquip: ["Щанга (Barbell)", "Скрипец (Cables)", "Дъмбели"],
        homeEquip: ["Раница с книги (Backpack)", "Бутилки с вода (Water Bottles)"]
    },
    lats: {
        title: "Латове / Широк гръб (Lats)",
        desc: "Латовете създават характерната 'V-образна' форма. Те са най-големият мускул в горната част на тялото и са отговорни за всички дърпащи движения.",
        gym: ["Вертикален скрипец (Lat Pulldown)", "Набирания (Pull-ups)", "Гребане с дъмбел с една ръка", "Т-образно гребане (T-Bar Row)"],
        home: ["Набирания на лост (Pull-ups)", "Гребане под маса (Inverted Rows)", "Дърпане на кърпа (Towel Row)"],
        gymEquip: ["Вертикален скрипец", "Лост за набиране", "Дъмбели"],
        homeEquip: ["Лост за врата", "Кърпа (Towel)", "Стабилна маса"]
    },
    shoulders: {
        title: "Рамене (Shoulders / Deltoids)",
        desc: "Раменете са най-мобилната става. Във фитнеса се търси 3D ефект чрез трениране на предната, средната и задната част на делтата за ширина.",
        gym: ["Раменна преса с щанга (Military Press)", "Разтваряне встрани с дъмбели", "Арнолд преси", "Предно повдигане на дъмбели"],
        home: ["Пийк лицеви опори (Pike Push-ups)", "Разтваряне с бутилки", "Предно повдигане с раница"],
        gymEquip: ["Щанга", "Дъмбели"],
        homeEquip: ["Bodyweight", "Бутилки с вода"]
    },
    biceps: {
        title: "Бицепс (Biceps)",
        desc: "Най-разпознаваемият мускул. Тренира се за 'връх' и обем, като е важен за силата на захвата и всички дърпащи движения.",
        gym: ["Сгъване с щанга (Barbell Curl)", "Чуково сгъване (Hammer Curl)", "Сгъване на Скотова пейка", "Концентрирано сгъване"],
        home: ["Сгъване с раница (Backpack Curls)", "Набирания с подхват (Chin-ups)", "Сгъване с туба вода"],
        gymEquip: ["EZ Лост", "Дъмбели", "Скотова пейка"],
        homeEquip: ["Раница", "Лост", "Туби с вода"]
    },
    triceps: {
        title: "Трицепс (Triceps)",
        desc: "Трицепсът заема 2/3 от обема на ръката. Ако искате големи ръце, трябва да наблегнете на него. Той отговаря за разгъването на лакътя.",
        gym: ["Разгъване на скрипец (Pushdowns)", "Френско разгъване (Skull Crushers)", "Кофички на успоредка", "Тесен хват от лег"],
        home: ["Диамантени лицеви опори", "Кофички на диван/пейка", "Разгъване зад глава с бутилка"],
        gymEquip: ["Скрипец", "Щанга", "Успоредка"],
        homeEquip: ["Диван/Стол", "Bodyweight", "Бутилки"]
    },
    abs: {
        title: "Корем (Abs / Core)",
        desc: "Коремната мускулатура стабилизира целия торс. Силният център подобрява баланса и предпазва кръста от натоварване.",
        gym: ["Повдигане на крака от вис", "Коремни преси на скрипец (Crunches)", "Планк с тежест", "Машина за корем"],
        home: ["Планк (Plank)", "V-преси (V-ups)", "Велосипедни коремни преси", "Планински катерач"],
        gymEquip: ["Лост за вис", "Скрипец", "Диск (Weight)"],
        homeEquip: ["Собствено тегло (Bodyweight)"]
    },
    quads: {
        title: "Бедра (Quads / Quadriceps)",
        desc: "Най-голямата и мощна мускулна група. Краката са двигателят на тялото и тренирането им изгаря най-много калории.",
        gym: ["Клек с щанга (Back Squats)", "Лег преса (Leg Press)", "Бедрено разгъване на машина", "Хакен клек"],
        home: ["Клякания (Squats)", "Български клек на стол", "Напади (Lunges)", "Стенен клек (Wall Sit)"],
        gymEquip: ["Щанга", "Лег преса", "Машина за разгъване"],
        homeEquip: ["Bodyweight", "Стол (Chair)"]
    },
    glutes: {
        title: "Седалище (Glutes)",
        desc: "Глутеусите са най-силният мускул. Те са отговорни за експлозивността, бягането и стабилизацията на таза.",
        gym: ["Хип тръст с щанга (Hip Thrust)", "Кикбек на скрипец", "Сумо клек с дъмбел", "Абдуктор машина"],
        home: ["Глутеус мост (Glute Bridge)", "Магарешки ритник (Donkey Kicks)", "Сумо клек", "Пожарен кран (Fire Hydrants)"],
        gymEquip: ["Щанга", "Пейка", "Скрипец"],
        homeEquip: ["Собствено тегло (Bodyweight)", "Ластик (ако имате)"]
    }
};

function selectMuscle(muscle) {
    currentMuscle = muscle;
    // Премахваме активния клас от всички части
    document.querySelectorAll('.muscle-segment').forEach(el => el.classList.remove('active-muscle'));
    // Добавяме го към избраната (включително ако е от две части като латове/крака)
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

    let html = `<h1 style="color: var(--primary); text-transform: uppercase;">${muscleData.title}</h1>`;
    
    // Българското описание
    html += `<div class="description-box"><strong>За мускула:</strong> ${muscleData.desc}</div>`;
    
    // Списък с упражнения (повече на брой)
    html += `<h3>Упражнения (${currentMode === 'gym' ? 'Зала' : 'Вкъщи'}):</h3><ul>`;
    exercises.forEach(ex => html += `<li>${ex}</li>`);
    html += `</ul>`;

    // Секция оборудване
    html += `<div class="equipment-section">`;
    html += `<h3>Оборудване / Equipment:</h3>`;
    equipment.forEach(item => {
        html += `<span class="equip-tag">${item}</span>`;
    });
    html += `</div>`;
    
    display.innerHTML = html;
}
