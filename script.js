let currentMuscle = null;
let currentMode = 'gym';

// ПЪЛНА БАЗА ДАННИ (Всички 14+ мускулни групи са тук, снимките са плейсхолдъри)
const db = {
    chest: {
        title: "Гърди", latin: "Pectoralis Major",
        gym: [
            { name: "Лежанка (Bench Press)", secondary: ["triceps", "shoulders_front"], img: "https://placehold.co/600x400/222/FFF?text=Bench+Press" },
            { name: "Кофички (Dips)", secondary: ["triceps", "shoulders_front"], img: "https://placehold.co/600x400/222/FFF?text=Dips" }
        ],
        home: [{ name: "Лицеви опори", secondary: ["triceps", "shoulders_front"], img: "https://placehold.co/600x400/222/FFF?text=Push+Ups" }],
        stretch: [{ name: "Стреч на касата на врата", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Doorway+Stretch" }],
        stats: { strength: 95, volume: 90 },
        tips: ["Съберете и свалете лопатките надолу и назад.", "Спускайте тежестта контролирано до гърдите."],
        mistakes: ["Отскачане на лоста от гърдите.", "Лактите са разперени на 90 градуса (води до травми)."]
    },
    shoulders_front: {
        title: "Предно рамо", latin: "Anterior Deltoid",
        gym: [{ name: "Раменна преса с дъмбели", secondary: ["triceps"], img: "https://placehold.co/600x400/222/FFF?text=Dumbbell+Press" }],
        home: [{ name: "Пийк опори (Pike Push-ups)", secondary: ["triceps"], img: "https://placehold.co/600x400/222/FFF?text=Pike+Push-ups" }],
        stretch: [{ name: "Стреч с ръце зад гърба", secondary: ["chest"], img: "https://placehold.co/600x400/222/FFF?text=Front+Delt+Stretch" }],
        stats: { strength: 80, volume: 75 },
        tips: ["Дръжте ядрото стегнато.", "Движението трябва да е леко пред тялото, не точно над главата."],
        mistakes: ["Прекомерно извиване на кръста (хиперекстензия)."]
    },
    shoulders_side: {
        title: "Средно рамо", latin: "Lateral Deltoid",
        gym: [{ name: "Разтваряне с дъмбели встрани", secondary: ["traps"], img: "https://placehold.co/600x400/222/FFF?text=Lateral+Raises" }],
        home: [{ name: "Разтваряне с тренировъчен ластик", secondary: ["traps"], img: "https://placehold.co/600x400/222/FFF?text=Band+Raises" }],
        stretch: [{ name: "Cross-body раменен стреч", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Cross+Body+Stretch" }],
        stats: { strength: 50, volume: 100 },
        tips: ["Мислете за вдигане на лактите, не на дланите.", "Леко наклонете торса напред."],
        mistakes: ["Използване на инерция (люлеене на тялото).", "Вдигане на ръцете над нивото на раменете."]
    },
    shoulders_rear: {
        title: "Задно рамо", latin: "Posterior Deltoid",
        gym: [{ name: "Фейс пул (Face Pull)", secondary: ["traps", "biceps"], img: "https://placehold.co/600x400/222/FFF?text=Face+Pull" }],
        home: [{ name: "Разтваряне от наклон (Reverse Fly)", secondary: ["traps"], img: "https://placehold.co/600x400/222/FFF?text=Reverse+Fly" }],
        stretch: [{ name: "Задно рамо стреч на пода", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Rear+Delt+Stretch" }],
        stats: { strength: 45, volume: 85 },
        tips: ["Стискайте лопатките в края на движението.", "Дръжте лактите леко сгънати."],
        mistakes: ["Използване на твърде голяма тежест, която прехвърля натоварването върху гърба."]
    },
    lats: {
        title: "Гръб (Широк гръбен мускул)", latin: "Latissimus Dorsi",
        gym: [{ name: "Вертикален скрипец", secondary: ["biceps", "forearms"], img: "https://placehold.co/600x400/222/FFF?text=Lat+Pulldown" }],
        home: [{ name: "Набирания (Pull-ups)", secondary: ["biceps", "forearms"], img: "https://placehold.co/600x400/222/FFF?text=Pull-ups" }],
        stretch: [{ name: "Висене на лост (Dead Hang)", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Dead+Hang" }],
        stats: { strength: 90, volume: 95 },
        tips: ["Инициирайте дърпането чрез сваляне на лопатките.", "Дърпайте с лактите, не с китките."],
        mistakes: ["Дърпане зад врата.", "Повдигане на раменете към ушите."]
    },
    traps: {
        title: "Трапец", latin: "Trapezius",
        gym: [{ name: "Шраг с дъмбели/щанга", secondary: ["forearms"], img: "https://placehold.co/600x400/222/FFF?text=Shrugs" }],
        home: [{ name: "Шраг с ластици или тежки туби", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Home+Shrugs" }],
        stretch: [{ name: "Накланяне на главата встрани", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Neck+Stretch" }],
        stats: { strength: 85, volume: 75 },
        tips: ["Движението е право нагоре и надолу.", "Задръжте 1 секунда в най-горната точка."],
        mistakes: ["Въртене (ротация) на раменете – уврежда ставите."]
    },
    lowerback: {
        title: "Кръст (Еректори)", latin: "Erector Spinae",
        gym: [{ name: "Мъртва тяга (Deadlift)", secondary: ["glutes", "hamstrings", "forearms"], img: "https://placehold.co/600x400/222/FFF?text=Deadlift" }],
        home: [{ name: "Супермен", secondary: ["glutes"], img: "https://placehold.co/600x400/222/FFF?text=Superman" }],
        stretch: [{ name: "Детска поза (Child's Pose)", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Childs+Pose" }],
        stats: { strength: 100, volume: 60 },
        tips: ["Поддържайте гръбнака в неутрална позиция през цялото време.", "Стягайте корема ( bracing ), за да предпазите кръста."],
        mistakes: ["Кръглене на гърба ('котешки гръб') по време на тяга."]
    },
    biceps: {
        title: "Бицепс", latin: "Biceps Brachii",
        gym: [{ name: "Сгъване с щанга/дъмбели", secondary: ["forearms"], img: "https://placehold.co/600x400/222/FFF?text=Bicep+Curls" }],
        home: [{ name: "Сгъване с ластик", secondary: ["forearms"], img: "https://placehold.co/600x400/222/FFF?text=Band+Curls" }],
        stretch: [{ name: "Бицепс стреч на стена", secondary: ["chest"], img: "https://placehold.co/600x400/222/FFF?text=Bicep+Stretch" }],
        stats: { strength: 65, volume: 95 },
        tips: ["Дръжте лактите прилепени плътно до торса.", "Спускайте тежестта бавно (ексцентрична фаза)."],
        mistakes: ["Използване на кръста за залюляване на тежестта.", "Непълен обхват на движение (къси повторения)."]
    },
    triceps: {
        title: "Трицепс", latin: "Triceps Brachii",
        gym: [{ name: "Разгъване на горен скрипец", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Tricep+Pushdown" }],
        home: [{ name: "Диамантени лицеви опори", secondary: ["chest", "shoulders_front"], img: "https://placehold.co/600x400/222/FFF?text=Diamond+Push-ups" }],
        stretch: [{ name: "Стреч с ръка зад главата", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Overhead+Stretch" }],
        stats: { strength: 80, volume: 90 },
        tips: ["Заключвайте лакътя в края на движението за пълна контракция.", "Дръжте раменете статични."],
        mistakes: ["Движение на лакътя напред-назад по време на изпълнението."]
    },
    forearms: {
        title: "Предмишница", latin: "Brachioradialis",
        gym: [{ name: "Фермерска разходка", secondary: ["traps", "core"], img: "https://placehold.co/600x400/222/FFF?text=Farmers+Walk" }],
        home: [{ name: "Висене на лост / Кърпа", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Towel+Hang" }],
        stretch: [{ name: "Стреч на китките (длани към пода)", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Wrist+Stretch" }],
        stats: { strength: 90, volume: 60 },
        tips: ["Стискайте лоста/дъмбела максимално силно.", "Тренирайте хвата в края на тренировката."],
        mistakes: ["Използване на фитили за абсолютно всяко упражнение за гръб."]
    },
    abs: {
        title: "Корем (Ядро)", latin: "Rectus Abdominis / Core",
        gym: [{ name: "Повдигане на краката от вис", secondary: ["forearms"], img: "https://placehold.co/600x400/222/FFF?text=Leg+Raises" }],
        home: [{ name: "Планк (Дъска)", secondary: ["lowerback", "shoulders_front"], img: "https://placehold.co/600x400/222/FFF?text=Plank" }],
        stretch: [{ name: "Поза Кобра", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Cobra+Stretch" }],
        stats: { strength: 75, volume: 60 },
        tips: ["Мислете за 'навиване' на таза към гърдите, не просто за сгъване от кръста.", "Издишайте въздуха при контракция."],
        mistakes: ["Дърпане на врата с ръце при коремни преси.", "Увисване на кръста по време на планк."]
    },
    quads: {
        title: "Квадрицепс (Предно бедро)", latin: "Quadriceps Femoris",
        gym: [{ name: "Клек с щанга (Squat)", secondary: ["glutes", "lowerback"], img: "https://placehold.co/600x400/222/FFF?text=Barbell+Squat" }],
        home: [{ name: "Български клек (Bulgarian Split Squat)", secondary: ["glutes"], img: "https://placehold.co/600x400/222/FFF?text=Bulgarian+Squat" }],
        stretch: [{ name: "Квадрицепс стреч от стоеж", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Quad+Stretch" }],
        stats: { strength: 100, volume: 95 },
        tips: ["Спускайте се поне до паралел (бедрата успоредни на пода).", "Тежестта трябва да е разпределена на цялото стъпало."],
        mistakes: ["Събиране на коленете навътре (Valgus) при изправяне.", "Вдигане на петите от пода."]
    },
    hamstrings: {
        title: "Задно бедро", latin: "Biceps Femoris",
        gym: [{ name: "Румънска мъртва тяга (RDL)", secondary: ["glutes", "lowerback"], img: "https://placehold.co/600x400/222/FFF?text=RDL" }],
        home: [{ name: "Нордик сгъване (Nordic Curl)", secondary: ["glutes"], img: "https://placehold.co/600x400/222/FFF?text=Nordic+Curl" }],
        stretch: [{ name: "Наклон напред с прави крака", secondary: ["lowerback"], img: "https://placehold.co/600x400/222/FFF?text=Hamstring+Stretch" }],
        stats: { strength: 95, volume: 85 },
        tips: ["Инициирайте движението чрез бутане на таза назад, не чрез клякане.", "Дръжте гърба идеално прав."],
        mistakes: ["Прекалено сгъване в коленете (превръща упражнението в клек)."]
    },
    glutes: {
        title: "Седалище", latin: "Gluteus Maximus",
        gym: [{ name: "Хип Тръст (Hip Thrust)", secondary: ["hamstrings"], img: "https://placehold.co/600x400/222/FFF?text=Hip+Thrust" }],
        home: [{ name: "Глутеус мост (Glute Bridge)", secondary: ["hamstrings"], img: "https://placehold.co/600x400/222/FFF?text=Glute+Bridge" }],
        stretch: [{ name: "Поза Гълъб (Pigeon Pose)", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Pigeon+Pose" }],
        stats: { strength: 100, volume: 100 },
        tips: ["Дръжте брадичката прибрана към гърдите.", "Стискайте максимално в най-горната точка."],
        mistakes: ["Извиване на кръста (хиперекстензия) вместо използване на глутеуса."]
    },
    calves: {
        title: "Прасци", latin: "Gastrocnemius & Soleus",
        gym: [{ name: "Повдигане на пръсти на машина", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Calf+Raises" }],
        home: [{ name: "Повдигане на пръсти на стълба (на един крак)", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Single+Leg+Calf+Raise" }],
        stretch: [{ name: "Стреч на прасец към стена", secondary: [], img: "https://placehold.co/600x400/222/FFF?text=Calf+Stretch" }],
        stats: { strength: 80, volume: 70 },
        tips: ["Използвайте пълна амплитуда: максимално разтягане долу, максимална контракция горе.", "Задържайте по 2 секунди във всяка крайна точка."],
        mistakes: ["Бързо 'пружиниране' без контрол (използва ахилесовото сухожилие, не мускула)."]
    }
};

// Логика за избиране на мускул
function selectMuscle(id) {
    currentMuscle = id;
    updateInterface();
}

// Логика за обновяване на екрана
function updateInterface() {
    const muscleData = db[currentMuscle];
    if (!muscleData) return;

    // Изчистване на всички цветове от модела
    document.querySelectorAll('.muscle-segment').forEach(el => el.classList.remove('active-muscle', 'synergy-muscle'));
    
    // Оцветяване на избрания мускул
    document.querySelectorAll(`[id^="${currentMuscle}"]`).forEach(el => el.classList.add('active-muscle'));

    // Скриване на снимката
    document.getElementById('exercise-preview-panel').style.display = 'none';

    // Избиране на списъка спрямо таба
    let exerciseList = [];
    if (currentMode === 'gym') exerciseList = muscleData.gym;
    else if (currentMode === 'home') exerciseList = muscleData.home;
    else if (currentMode === 'stretch') exerciseList = muscleData.stretch;

    // Генериране на списък с упражнения
    let htmlContent = `<h1>${muscleData.title}</h1><p class="latin-name">${muscleData.latin}</p>`;
    
    if (exerciseList && exerciseList.length > 0) {
        exerciseList.forEach((ex, index) => {
            htmlContent += `<div class="exercise-item" onclick="showExerciseDetails(${index})">▶ ${ex.name}</div>`;
        });
    } else {
        htmlContent += `<p style="color: #888;">Няма налични упражнения за този режим.</p>`;
    }
    
    document.getElementById('info-card').innerHTML = htmlContent;

    // Обновяване на статистиките (баровете)
    document.getElementById('stats-panel').style.display = 'block';
    setTimeout(() => {
        document.getElementById('bar-strength').style.width = muscleData.stats.strength + '%';
        document.getElementById('bar-volume').style.width = muscleData.stats.volume + '%';
    }, 50);

    // Обновяване на съвети и грешки
    document.getElementById('tips-list').innerHTML = muscleData.tips.map(t => `<p>✔️ ${t}</p>`).join('');
    document.getElementById('errors-list').innerHTML = muscleData.mistakes.map(e => `<p>❌ ${e}</p>`).join('');
}

// Логика при клик върху конкретно упражнение (Показва Снимка + Синергия)
function showExerciseDetails(index) {
    const muscleData = db[currentMuscle];
    let exerciseList = currentMode === 'gym' ? muscleData.gym : (currentMode === 'home' ? muscleData.home : muscleData.stretch);
    const exercise = exerciseList[index];

    // Показване на панела със снимката
    document.getElementById('exercise-preview-panel').style.display = 'flex';
    document.getElementById('ex-title').innerText = exercise.name;
    document.getElementById('exercise-image').src = exercise.img;

    // Обновяване на модела за синергия
    document.querySelectorAll('.muscle-segment').forEach(el => el.classList.remove('synergy-muscle'));
    if (exercise.secondary && exercise.secondary.length > 0) {
        exercise.secondary.forEach(secondaryMuscle => {
            document.querySelectorAll(`[id^="${secondaryMuscle}"]`).forEach(el => el.classList.add('synergy-muscle'));
        });
    }
}

// Логика за смяна на табовете (Зала, Вкъщи, Стречинг)
function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${mode}`).classList.add('active');
    
    if (currentMuscle) {
        updateInterface();
    }
}

// Тъмна/Светла тема
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}
