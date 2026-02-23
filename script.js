let currentMuscle = null;
let currentMode = 'gym';

// ПЪЛНАТА БАЗА ДАННИ - БЕЗ СЪКРАЩЕНИЯ
const data = {
chest: {
title: "Гърди / Chest",
gym: [
{ name: "Бенч преса с щанга / Barbell Bench Press", diff: 2, secondary: ["triceps", "shoulders_front"] },
{ name: "Наклонена лежанка с дъмбели / Incline DB Press", diff: 2, secondary: ["shoulders_front", "triceps"] },
{ name: "Кросоувър на скрипец / Cable Crossovers", diff: 1, secondary: ["shoulders_front"] },
{ name: "Кофички за гърди / Chest Dips", diff: 3, secondary: ["triceps", "shoulders_front", "abs"] }
],
home: [
{ name: "Класически лицеви опори / Push-ups", diff: 1, secondary: ["triceps", "shoulders_front", "abs"] },
{ name: "Широки лицеви опори / Wide Push-ups", diff: 2, secondary: ["shoulders_front"] }
],
stats: { strength: 90, volume: 85 },
tips: ["Съберете и свалете лопатките надолу и назад.", "Дръжте лактите прибрани към тялото (на около 45-60 градуса).", "Стъпете здраво на пода за стабилност."],
mistakes: ["Отскачане на щангата от гръдния кош.", "Разтваряне на лактите на 90 градуса (опасно за раменете).", "Повдигане на таза от лежанката."]
},
lats: {
title: "Широк гръбен мускул / Lats",
gym: [
{ name: "Набирания с широк хват / Pull-ups", diff: 3, secondary: ["biceps", "forearms", "abs"] },
{ name: "Вертикален скрипец / Lat Pulldown", diff: 1, secondary: ["biceps"] },
{ name: "Гребане с щанга / Barbell Row", diff: 3, secondary: ["lowerback", "biceps", "traps"] }
],
home: [
{ name: "Австралийски набирания / Inverted Rows", diff: 2, secondary: ["biceps", "traps"] },
{ name: "Плъзгане по пода (Towel Sliders)", diff: 2, secondary: ["abs"] }
],
stats: { strength: 95, volume: 90 },
tips: ["Инициирайте движението чрез дърпане на лактите надолу, а не със сгъване на ръцете.", "Изпъчете гърдите в края на движението.", "Използвайте фитили при много тежки серии."],
mistakes: ["Дърпане на лоста зад врат (натоварва ротаторния маншон).", "Използване на силна инерция от кръста.", "Непълно разтягане на мускула в горна фаза."]
},
traps: {
title: "Трапец / Traps",
gym: [
{ name: "Трапецовидно повдигане с щанга / Barbell Shrugs", diff: 1, secondary: ["forearms"] },
{ name: "Гребане към брадата / Upright Rows", diff: 2, secondary: ["shoulders_side", "shoulders_front"] }
],
home: [
{ name: "Повдигане с тежки раници / Heavy Bag Shrugs", diff: 1, secondary: ["forearms"] },
{ name: "Y-повдигания от лицев лег / Prone Y-Raises", diff: 2, secondary: ["shoulders_rear"] }
],
stats: { strength: 80, volume: 70 },
tips: ["Дърпайте раменете право нагоре към ушите.", "Задръжте пиковата контракция за 1-2 секунди."],
mistakes: ["Въртене (ротация) на раменете по време на повдигането.", "Прекалено сгъване на лактите."]
},
lowerback: {
title: "Кръст / Lower Back",
gym: [
{ name: "Мъртва тяга / Deadlift", diff: 3, secondary: ["glutes", "hamstrings", "traps", "quads"] },
{ name: "Хиперекстензии / Hyperextensions", diff: 1, secondary: ["glutes", "hamstrings"] }
],
home: [
{ name: "Супермен / Superman", diff: 1, secondary: ["glutes"] },
{ name: "Добро утро с ластик / Band Good Mornings", diff: 2, secondary: ["hamstrings"] }
],
stats: { strength: 100, volume: 60 },
tips: ["Дръжте гръбнака в неутрална позиция през цялото време.", "Стягайте корема, за да предпазите кръста."],
mistakes: ["Изгърбване (котешки гръб) при вдигане на тежест.", "Преразгъване (хиперекстензия) в горна точка."]
},
shoulders_front: {
title: "Предно рамо / Front Delts",
gym: [
{ name: "Военна преса с щанга / Overhead Press", diff: 3, secondary: ["triceps", "chest", "abs"] },
{ name: "Предно повдигане с дъмбели / Front Raises", diff: 1, secondary: ["chest"] }
],
home: [
{ name: "Пийк опори / Pike Push-ups", diff: 3, secondary: ["triceps", "chest"] },
{ name: "Преса с ластик / Band Shoulder Press", diff: 1, secondary: ["triceps"] }
],
stats: { strength: 85, volume: 80 },
tips: ["Стягайте седалището и корема по време на преси от стоеж.", "Спускайте тежестта бавно до нивото на брадичката."],
mistakes: ["Прекалено голям наклон назад (архиране на кръста).", "Използване на тласък от краката (ако не правите Push Press)."]
},
shoulders_side: {
title: "Средно рамо / Lateral Delts",
gym: [
{ name: "Разтваряне с дъмбели встрани / Lateral Raises", diff: 1, secondary: ["traps"] },
{ name: "Разтваряне на скрипец зад тялото", diff: 2, secondary: ["traps"] }
],
home: [
{ name: "Разтваряне с ластик / Band Lateral Raises", diff: 1, secondary: ["traps"] },
{ name: "Разтваряне с бутилки вода / Bottle Raises", diff: 1, secondary: [] }
],
stats: { strength: 50, volume: 95 },
tips: ["Мислете си, че изливате вода от кани (леко завъртане на китката).", "Водете движението с лактите, не с китките."],
mistakes: ["Повдигане на китките по-високо от лактите.", "Люлеене на тялото напред-назад."]
},
shoulders_rear: {
title: "Задно рамо / Rear Delts",
gym: [
{ name: "Фейс пул на скрипец / Face Pulls", diff: 2, secondary: ["traps"] },
{ name: "Обратен флайс на машина / Reverse Pec Deck", diff: 1, secondary: ["traps"] }
],
home: [
{ name: "Разтваряне наведени напред с ластик / Band Pull-aparts", diff: 1, secondary: ["traps"] }
],
stats: { strength: 40, volume: 85 },
tips: ["Дърпайте към нивото на очите.", "Концентрирайте се върху събирането на задните рамене."],
mistakes: ["Използване на прекалено голяма тежест.", "Повдигане на гръдния кош и включване на кръста."]
},
biceps: {
title: "Бицепс / Biceps",
gym: [
{ name: "Сгъване с права щанга / Barbell Curls", diff: 2, secondary: ["forearms"] },
{ name: "Чуково сгъване с дъмбели / Hammer Curls", diff: 1, secondary: ["forearms"] },
{ name: "Сгъване на Скот пейка / Preacher Curls", diff: 2, secondary: ["forearms"] }
],
home: [
{ name: "Сгъване с ластик / Band Curls", diff: 1, secondary: ["forearms"] },
{ name: "Изометрично задържане / Towel Isometric Curl", diff: 1, secondary: ["forearms"] }
],
stats: { strength: 60, volume: 95 },
tips: ["Дръжте лактите прилепени до ребрата.", "Отпускайте тежестта за 2-3 секунди (ексцентрична фаза)."],
mistakes: ["Движене на лактите напред по време на сгъването.", "Използване на тялото за създаване на инерция."]
},
triceps: {
title: "Трицепс / Triceps",
gym: [
{ name: "Разгъване на скрипец с въже / Tricep Pushdowns", diff: 1, secondary: ["shoulders_front"] },
{ name: "Френска преса с EZ лост / Skull Crushers", diff: 2, secondary: ["chest"] },
{ name: "Лежанка с тесен хват / Close-grip Bench", diff: 3, secondary: ["chest", "shoulders_front"] }
],
home: [
{ name: "Кофички на стол / Bench Dips", diff: 1, secondary: ["chest", "shoulders_front"] },
{ name: "Диамантени лицеви опори / Diamond Push-ups", diff: 2, secondary: ["chest", "abs"] }
],
stats: { strength: 75, volume: 90 },
tips: ["Фокусирайте се върху пълното заключване на лакътя в края на движението.", "Дръжте китките прави."],
mistakes: ["Разтваряне на лактите навън при френска преса.", "Непълен обхват на движение (half-reps)."]
},
forearms: {
title: "Предмишници / Forearms",
gym: [
{ name: "Сгъване на китките с щанга / Wrist Curls", diff: 1, secondary: [] },
{ name: "Фермерска разходка / Farmer's Walk", diff: 2, secondary: ["traps", "abs", "calves"] }
],
home: [
{ name: "Висене на лост за време / Dead Hang", diff: 2, secondary: ["lats"] },
{ name: "Навиване на тежест на въже / Wrist Rollers", diff: 1, secondary: ["shoulders_front"] }
],
stats: { strength: 65, volume: 75 },
tips: ["Използвайте хват без палец (suicide grip) само когато е безопасно.", "Стискайте лоста колкото се може по-силно."],
mistakes: ["Пренебрегване на тренировките за хват.", "Използване на фитили за абсолютно всяко упражнение за гръб."]
},
quads: {
title: "Предно бедро / Quadriceps",
gym: [
{ name: "Клек с щанга на гърба / Back Squat", diff: 3, secondary: ["glutes", "lowerback", "abs", "calves"] },
{ name: "Лег преса / Leg Press", diff: 2, secondary: ["glutes"] },
{ name: "Екстензии на машина / Leg Extensions", diff: 1, secondary: [] }
],
home: [
{ name: "Български клек / Bulgarian Split Squat", diff: 3, secondary: ["glutes", "abs"] },
{ name: "Напади със собствено тегло / Lunges", diff: 2, secondary: ["glutes", "calves"] }
],
stats: { strength: 100, volume: 95 },
tips: ["Пазете гърба изправен, а гърдите повдигнати.", "Оставете коленете да минават леко пред пръстите на краката (ако нямате болки).", "Бутайте с цялото стъпало."],
mistakes: ["Събиране на коленете навътре (valgus collapse) при ставане.", "Повдигане на петите от пода.", "Много плитък клек (над паралела)."]
},
hamstrings: {
title: "Задно бедро / Hamstrings",
gym: [
{ name: "Римска мъртва тяга / RDL", diff: 3, secondary: ["glutes", "lowerback", "traps"] },
{ name: "Сгъване на машина от лег / Lying Leg Curls", diff: 1, secondary: ["calves"] }
],
home: [
{ name: "Нордик сгъване (с партньор) / Nordic Curls", diff: 3, secondary: ["glutes", "abs"] },
{ name: "Глутеус мост на един крак / Single Leg Bridge", diff: 2, secondary: ["glutes", "lowerback"] }
],
stats: { strength: 90, volume: 85 },
tips: ["Фокусът при RDL е избутването на таза назад, не пускането на щангата надолу.", "Дръжте врата в една линия с гръбнака."],
mistakes: ["Свиване на коленете прекалено много (превръща движението в клек).", "Изгърбване на кръста."]
},
glutes: {
title: "Седалище / Glutes",
gym: [
{ name: "Хип тръст с щанга / Barbell Hip Thrust", diff: 2, secondary: ["hamstrings", "abs", "quads"] },
{ name: "Отвеждане на кабел / Cable Kickbacks", diff: 1, secondary: ["hamstrings"] }
],
home: [
{ name: "Глутеус мост / Glute Bridge", diff: 1, secondary: ["hamstrings", "lowerback"] },
{ name: "Жабешки помпи / Frog Pumps", diff: 1, secondary: [] }
],
stats: { strength: 100, volume: 95 },
tips: ["При хип тръст, брадичката трябва да е прибрана към гърдите.", "Стиснете силно задните части в най-горната точка за 2 секунди."],
mistakes: ["Хиперекстензия на кръста в горна позиция.", "Избутване от пръстите вместо от петите."]
},
calves: {
title: "Прасци / Calves",
gym: [
{ name: "Повдигане от стоеж на машина / Standing Calf Raises", diff: 1, secondary: [] },
{ name: "Повдигане от седеж / Seated Calf Raises", diff: 1, secondary: [] }
],
home: [
{ name: "Повдигане на един крак на стълба / Single Leg Stairs", diff: 2, secondary: ["abs"] },
{ name: "Подскоци на въже / Jump Rope", diff: 2, secondary: ["quads", "shoulders_front", "forearms"] }
],
stats: { strength: 80, volume: 60 },
tips: ["Използвайте пълен обхват – дълбоко разтягане долу и максимално изправяне горе.", "Правете пауза от 1 сек. в долната част, за да елиминирате рефлекса на ахилеса."],
mistakes: ["Бързо и подскачащо изпълнение.", "Сгъване на коленете при упражненията от стоеж."]
},
abs: {
title: "Коремна преса / Abs & Core",
gym: [
{ name: "Повдигане на краката от вис / Hanging Leg Raises", diff: 3, secondary: ["forearms", "lats", "quads"] },
{ name: "Коремни преси на скрипец / Cable Crunches", diff: 2, secondary: ["lats"] }
],
home: [
{ name: "Планк / Plank", diff: 2, secondary: ["lowerback", "shoulders_front", "glutes"] },
{ name: "Велосипедни коремни / Bicycle Crunches", diff: 1, secondary: [] },
{ name: "V-образни преси / V-Ups", diff: 3, secondary: ["quads"] }
],
stats: { strength: 75, volume: 65 },
tips: ["Фокусът трябва да е върху 'навиването' на гръбнака (приближаване на ребрата към таза).", "Издишайте агресивно въздуха при всяко свиване на корема."],
mistakes: ["Дърпане на врата с ръце.", "Трениране на корема само с изометрични упражнения (планк) и липса на тежести.", "Извиване на кръста надолу по време на планк."]
}
};

// --- CORE LOGIC ---

function selectMuscle(mId) {
currentMuscle = mId;
updateUI();
}

function updateUI() {
const m = data[currentMuscle];
if (!m) return;

resetModelColors();  
highlightBodyParts(currentMuscle, 'active-muscle');  

// 1. Построяване на списъка с упражнения  
const exList = currentMode === 'gym' ? m.gym : m.home;  
let html = `<h1>${m.title}</h1><p style="font-size:12px;color:var(--text-secondary);margin-bottom:20px;">Кликнете върху конкретно упражнение, за да видите помагащите мускули.</p>`;  
  
exList.forEach((ex, index) => {  
    html += `<div class="exercise-item" onclick="activateSynergy(${index})">  
                <span style="font-weight: 500;">${ex.name}</span>   
                <span class="diff-badge diff-${ex.diff}" title="Трудност: ${ex.diff} от 3">${"⚡".repeat(ex.diff)}</span>  
             </div>`;  
});  
  
document.getElementById('info-card').innerHTML = html;  
  
// 2. Анимиране на баровете за капацитет  
document.getElementById('stats-container').style.display = 'block';  
  
// Ресетваме баровете до 0 за миг, за да се види анимацията при клик  
document.getElementById('bar-strength').style.width = '0%';  
document.getElementById('bar-volume').style.width = '0%';  
  
setTimeout(() => {  
    document.getElementById('bar-strength').style.width = m.stats.strength + '%';  
    document.getElementById('bar-volume').style.width = m.stats.volume + '%';  
}, 50);  

// 3. Попълване на дясната секция (Съвети и Грешки)  
document.getElementById('tips-container').innerHTML = m.tips.map(t => `<div class="tip-item">${t}</div>`).join('');  
document.getElementById('mistakes-container').innerHTML = m.mistakes.map(mis => `<div class="mistake-item"><span>❌</span> ${mis}</div>`).join('');

}

function activateSynergy(idx) {
const m = data[currentMuscle];
const ex = (currentMode === 'gym' ? m.gym : m.home)[idx];

// 1. Ресетваме всички цветове по тялото  
resetModelColors();  
  
// 2. Отново оцветяваме главния мускул  
highlightBodyParts(currentMuscle, 'active-muscle');  
  
// 3. Оцветяваме помагащите мускули за ТОВА упражнение  
if (ex.secondary && ex.secondary.length > 0) {  
    ex.secondary.forEach(synId => highlightBodyParts(synId, 'synergy-muscle'));  
}  
  
// 4. Визуално маркираме кое упражнение е цъкнато в списъка  
document.querySelectorAll('.exercise-item').forEach(el => el.classList.remove('active-ex'));  
event.currentTarget.classList.add('active-ex');

}

function highlightBodyParts(id, className) {
// Намира всички SVG пътища, чиито ID-та започват с даденото име (напр. "biceps" хваща "biceps_l" и "biceps_r")
document.querySelectorAll([id^="${id}"]).forEach(el => el.classList.add(className));
}

function resetModelColors() {
document.querySelectorAll('.muscle-segment').forEach(el => {
el.classList.remove('active-muscle', 'synergy-muscle');
});
}

function setMode(mode) {
currentMode = mode;
document.getElementById('btn-gym').classList.toggle('active', mode === 'gym');
document.getElementById('btn-home').classList.toggle('active', mode === 'home');
if (currentMuscle) updateUI();
}

function toggleTheme() {
document.body.classList.toggle('light-theme');
}

// Инициализация при зареждане на страницата
document.addEventListener("DOMContentLoaded", () => {
// По подразбиране можем да оставим празно, докато потребителят не кликне
});