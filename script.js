let currentMuscle = null;
let currentMode = 'gym';

const data = {
    chest: {
        title: "Chest (Гърди)",
        description: "The chest is a primary focus for building upper body power and aesthetics. In fitness, it is trained to create the 'alpha' look and improve pushing strength.",
        gym: ["Barbell Bench Press (Бенч преса)", "Incline Dumbbell Press (Полулег с дъмбели)", "Cable Flyes (Кросоувър)"],
        home: ["Standard Push-ups (Лицеви опори)", "Decline Push-ups (Лицеви опори с крака на високо)"]
    },
    upperback: {
        title: "Upper Back & Traps (Трапец)",
        description: "A thick upper back provides stability for heavy lifts and creates a powerful silhouette. It is crucial for posture and preventing shoulder injuries.",
        gym: ["Face Pulls (Фейс пул)", "Barbell Shrugs (Повдигане на рамене)", "Seated Row (Гребане)"],
        home: ["Superman (Гръбни екстензии)", "Band Shrugs (Трапец с ластик)"]
    },
    lats: {
        title: "Lats / Middle Back (Латове)",
        description: "The Latissimus Dorsi are responsible for the 'V-taper' shape. Developing width in the lats makes the waist appear smaller and the back wider.",
        gym: ["Lat Pulldown (Вертикален скрипец)", "Pull-ups (Набирания)", "Dumbbell Row (Гребане с дъмбел)"],
        home: ["Pull-ups (Набирания на лост)", "Backpack Rows (Гребане с раница)"]
    },
    lowerback: {
        title: "Lower Back (Кръст)",
        description: "Known as the 'core pillar', a strong lower back is vital for heavy squats and deadlifts. It supports the spine and ensures functional longevity.",
        gym: ["Deadlift (Мъртва тяга)", "Back Extensions (Хиперекстензии)", "Good Mornings (Добро утро)"],
        home: ["Superman Extensions (Супермен)", "Bird-Dog (Птица-куче)"]
    },
    shoulders: {
        title: "Shoulders (Рамене)",
        description: "Shoulders are the most mobile joint. In bodybuilding, full 3D deltoids are sought after to widen the upper body frame.",
        gym: ["Military Press (Военна преса)", "Lateral Raises (Разтваряне встрани)"],
        home: ["Pike Push-ups (Пийк лицеви опори)", "Bottle Side Raises (Разтваряне с бутилки)"]
    },
    biceps: {
        title: "Biceps (Бицепс)",
        description: "The most famous 'show muscle'. Fitness enthusiasts train biceps specifically for peak height and arm thickness.",
        gym: ["Barbell Curls (Сгъване с щанга)", "Hammer Curls (Чуково сгъване)"],
        home: ["Chin-ups (Набирания с подхват)", "Backpack Curls (Сгъване с раница)"]
    },
    forearms: {
        title: "Forearms (Предмишници)",
        description: "Forearm strength dictates your grip. Without strong forearms, you cannot hold heavy weights for back or leg days.",
        gym: ["Wrist Curls (Свиване на китките)", "Farmer's Walk (Фермерска разходка)"],
        home: ["Towel Wringing (Изстискване на кърпа)", "Hammer Curls with bottles"]
    },
    triceps: {
        title: "Triceps (Трицепс)",
        description: "Triceps make up 2/3 of your arm mass. If you want big arms, you must prioritize tricep extension movements.",
        gym: ["Pushdowns (Разгъване на скрипец)", "Skull Crushers (Френско разгъване)"],
        home: ["Bench Dips (Кофички на пейка)", "Diamond Push-ups (Диамантени опори)"]
    },
    abs: {
        title: "Abs (Корем)",
        description: "Visible abs are the ultimate sign of low body fat and core discipline. They protect the organs and stabilize the entire body.",
        gym: ["Hanging Leg Raises (Повдигане на крака)", "Cable Crunches (Коремни на скрипец)"],
        home: ["Plank (Планк)", "V-ups (V-преси)"]
    },
    quads: {
        title: "Quads (Предно бедро)",
        description: "The powerhouse of the lower body. Quads are trained for explosive power, massive size, and overall metabolic health.",
        gym: ["Back Squats (Клек с щанга)", "Leg Press (Лег преса)"],
        home: ["Bodyweight Squats (Клякания)", "Bulgarian Split Squat (Български клек)"]
    },
    hamstrings: {
        title: "Hamstrings (Задно бедро)",
        description: "Often neglected, strong hamstrings balance the knee joint and provide the 'sweep' seen from the side profile.",
        gym: ["Leg Curls (Бедрено сгъване)", "Romanian Deadlift (Румънска тяга)"],
        home: ["Glute Bridges (Глутеус мост)", "Nordic Hamstring Curls"]
    },
    glutes: {
        title: "Glutes (Седалище)",
        description: "The largest muscle in the human body. Glutes are the engine for running, jumping, and heavy lifting.",
        gym: ["Hip Thrusts (Хип тръст)", "Abductor Machine (Абдуктор машина)"],
        home: ["Donkey Kicks (Донки кик)", "Sumo Squats (Сумо клек)"]
    },
    calves: {
        title: "Calves (Прасци)",
        description: "Known for being hard to grow, calves require high volume. They are the shock absorbers for every step you take.",
        gym: ["Standing Calf Raises (Калф машина)", "Seated Calf Raises"],
        home: ["Stair Calf Raises (Прасци на стъпало)", "Jumping Jacks"]
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
    
    // ДОБАВЯМЕ DESCRIPTION ТУК
    html += `<div class="description-box">${muscleData.description}</div>`;
    
    html += `<p style="color: #555; font-size: 18px; font-weight: bold; margin-top: 25px;">TRAINING PROGRAM:</p><ul>`;
    exercises.forEach(ex => html += `<li>${ex}</li>`);
    html += `</ul>`;
    display.innerHTML = html;
}
