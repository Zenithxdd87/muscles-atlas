let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Chest (Гърди)",
        gym: ["Barbell Bench Press (Бенч преса)", "Incline Dumbbell Press (Полулег с дъмбели)", "Cable Flyes (Кросоувър)", "Pec Deck (Пек-дек машина)"],
        home: ["Standard Push-ups (Лицеви опори)", "Decline Push-ups (Лицеви опори с крака на високо)", "Dips (Кофички)"]
    },
    upperback: {
        title: "Upper Back & Traps (Горна част и Трапец)",
        gym: ["Face Pulls (Фейс пул)", "Barbell Shrugs (Повдигане на рамене)", "Seated Row (Гребане на долен скрипец)", "Reverse Flyes (Обратен флайс)"],
        home: ["Superman (Гръбни екстензии)", "Band Shrugs (Повдигане на рамене с ластик)", "Reverse Snow Angels (Обратни снежни ангели)"]
    },
    lats: {
        title: "Lats / Middle Back (Латове и Широк гръб)",
        gym: ["Lat Pulldown (Вертикален скрипец)", "Pull-ups (Набирания)", "One Arm Dumbbell Row (Гребане с дъмбел)", "T-Bar Row (Т-образно гребане)"],
        home: ["Pull-ups (Набирания на лост)", "Backpack Rows (Гребане с раница)", "Doorway Rows (Гребане на врата)"]
    },
    lowerback: {
        title: "Lower Back (Кръст)",
        gym: ["Deadlift (Мъртва тяга)", "Back Extensions (Хиперекстензии)", "Good Mornings (Добро утро)"],
        home: ["Superman Extensions (Супермен)", "Bird-Dog (Птица-куче)", "Bridge (Мост)"]
    },
    shoulders: {
        title: "Shoulders (Рамене)",
        gym: ["Military Press (Военна преса)", "Lateral Raises (Разтваряне встрани)", "Arnold Press (Арнолд преси)"],
        home: ["Pike Push-ups (Пийк лицеви опори)", "Bottle Side Raises (Разтваряне с бутилки)"]
    },
    biceps: {
        title: "Biceps (Бицепс)",
        gym: ["Barbell Curls (Сгъване с щанга)", "Hammer Curls (Чуково сгъване)", "Scott Curl (Скотово сгъване)"],
        home: ["Chin-ups (Набирания с подхват)", "Backpack Curls (Сгъване с раница)"]
    },
    forearms: {
        title: "Forearms (Предмишници)",
        gym: ["Wrist Curls (Свиване на китките)", "Reverse Curls (Обратно сгъване)", "Farmer's Walk (Фермерска разходка)"],
        home: ["Towel Wringing (Изстискване на кърпа)", "Hammer Curls with bottles (Чуково сгъване с бутилки)"]
    },
    triceps: {
        title: "Triceps (Трицепс)",
        gym: ["Tricep Pushdowns (Разгъване на скрипец)", "Skull Crushers (Френско разгъване)", "Close Grip Press (Тесен хват)"],
        home: ["Bench Dips (Кофички на пейка)", "Diamond Push-ups (Диамантени опори)"]
    },
    abs: {
        title: "Abs (Корем)",
        gym: ["Hanging Leg Raises (Повдигане на крака от вис)", "Cable Crunches (Коремни на скрипец)"],
        home: ["Plank (Планк)", "V-ups (V-преси)", "Bicycle Crunches (Велосипедни преси)"]
    },
    quads: {
        title: "Quads (Предно бедро)",
        gym: ["Back Squats (Клек с щанга)", "Leg Press (Лег преса)", "Leg Extensions (Бедрено разгъване)"],
        home: ["Bodyweight Squats (Клякания)", "Bulgarian Split Squat (Български клек)"]
    },
    hamstrings: {
        title: "Hamstrings (Задно бедро)",
        gym: ["Leg Curls (Бедрено сгъване)", "Romanian Deadlift (Румънска тяга)"],
        home: ["Glute Bridges (Глутеус мост)", "Nordic Hamstring Curls (Нордическо сгъване)"]
    },
    glutes: {
        title: "Glutes (Седалище)",
        gym: ["Hip Thrusts (Хип тръст)", "Abductor Machine (Абдуктор машина)"],
        home: ["Donkey Kicks (Донки кик)", "Sumo Squats (Сумо клек)"]
    },
    calves: {
        title: "Calves (Прасци)",
        gym: ["Standing Calf Raises (Калф машина)", "Seated Calf Raises (Прасци от седеж)"],
        home: ["Stair Calf Raises (Прасци на стъпало)", "Jumping Jacks (Джампинг джак)"]
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

    let html = `<h1 style="color: #00d2ff; text-transform: uppercase;">${muscleData.title}</h1>`;
    html += `<p style="color: #555; font-size: 18px; font-weight: bold; margin-bottom: 20px;">TRAINING PROGRAM:</p><ul>`;
    exercises.forEach(ex => html += `<li>${ex}</li>`);
    html += `</ul>`;
    display.innerHTML = html;
}