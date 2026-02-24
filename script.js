let currentMuscle = null;
let currentMode = 'gym';
let currentEquipFilter = 'all';
let currentLanguage = 'en'; // 'en' or 'bg'
let fatiguedMuscles = {}; 
let timerInterval;

// ===== TRANSLATIONS =====
const translations = {
    en: {
        'search-bar': '🔍 Search Exercise...',
        'view-front': 'Front View',
        'view-back': 'Back View',
        'tab-gym': 'GYM',
        'tab-home': 'HOME',
        'tab-info': 'ANATOMY',
        'tab-stretch': 'STRETCHING',
        'filter-all': 'All',
        'filter-barbell': '🏋️ Barbell',
        'filter-dumbbell': '💪 Dumbbell',
        'filter-machine': '⚙️ Machine',
        'filter-bodyweight': '🤸 Bodyweight',
        'filter-cable': '🔗 Cable',
        'intro-text': 'Click on a muscle in the model to view exercises, anatomy, and expert tips.',
        'capacity-title': 'MUSCLE CAPACITY',
        'label-strength': 'Strength',
        'label-hypertrophy': 'Hypertrophy',
        'calc-title': '📊 One Rep Max (1RM) Calculator',
        'calc-btn': 'CALCULATE',
        'tips-title': 'EXPERT TIPS 💡',
        'mistakes-title': 'COMMON MISTAKES ❌',
        'synergy-title': 'SYNERGY MUSCLES 🔗',
        'select-muscle': 'Select a muscle...',
        'select-exercise': 'Select an exercise...',
    },
    bg: {
        'search-bar': '🔍 Търси упражнение...',
        'view-front': 'Отпред',
        'view-back': 'Отзад',
        'tab-gym': 'ЗАЛА',
        'tab-home': 'ВКЪЩИ',
        'tab-info': 'АНАТОМИЯ',
        'tab-stretch': 'СТРЕЧИНГ',
        'filter-all': 'Всички',
        'filter-barbell': '🏋️ Лост',
        'filter-dumbbell': '💪 Дъмбели',
        'filter-machine': '⚙️ Машина',
        'filter-bodyweight': '🤸 Собствено тегло',
        'filter-cable': '🔗 Кабел',
        'intro-text': 'Кликнете върху мускул от модела, за да видите упражнения, анатомия и съвети.',
        'capacity-title': 'МУСКУЛЕН КАПАЦИТЕТ',
        'label-strength': 'Сила',
        'label-hypertrophy': 'Хипертрофия',
        'calc-title': '📊 Калкулатор Максимална Сила (1RM)',
        'calc-btn': 'СМЕТНИ',
        'tips-title': 'СЪВЕТИ ЗА ЕКСПЕРТИ 💡',
        'mistakes-title': 'ТИПИЧНИ ГРЕШКИ ❌',
        'synergy-title': 'СИНЕРГИЯ НА МУСКУЛИ 🔗',
        'select-muscle': 'Изберете мускул...',
        'select-exercise': 'Изберете упражнение...',
    }
};

// ===== COMPLETE BILINGUAL DATABASE =====
const data = {
    chest: {
        en: {
            title: "Chest (Pectoralis Major)",
            desc: "Primary muscle group for horizontal pushing movements. Largest upper body muscle. Essential for pressing strength.",
        },
        bg: {
            title: "Гърди (Pectoralis Major)",
            desc: "Основна мускулна група за хоризонтално бутане. Най-голям мускул на горната част на тялото.",
        },
        risk: "Medium Risk | Среден Риск",
        gym: [
            { 
                en: "Barbell Bench Press",
                bg: "Бенч преса с лост",
                equip: "barbell", diff: 3, secondary: ["triceps", "shoulders_front"] 
            },
            { 
                en: "Incline Barbell Press",
                bg: "Наклонена бенч преса с лост",
                equip: "barbell", diff: 3, secondary: ["shoulders_front"] 
            },
            { 
                en: "Decline Barbell Press",
                bg: "Спадаща бенч преса с лост",
                equip: "barbell", diff: 2, secondary: ["triceps"] 
            },
            { 
                en: "Dumbbell Bench Press",
                bg: "Бенч преса с дъмбели",
                equip: "dumbbell", diff: 2, secondary: ["triceps"] 
            },
            { 
                en: "Incline Dumbbell Press",
                bg: "Наклонена бенч преса с дъмбели",
                equip: "dumbbell", diff: 2, secondary: ["shoulders_front"] 
            },
            { 
                en: "Dumbbell Flyes",
                bg: "Разтваряне с дъмбели",
                equip: "dumbbell", diff: 2, secondary: [] 
            },
            { 
                en: "Chest Press Machine",
                bg: "Машина за гръди преса",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Cable Crossover",
                bg: "Кросоувър на скрипец",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Pec Deck Machine",
                bg: "Машина Pec Deck",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Smith Machine Press",
                bg: "Преса на машина Смит",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Machine Chest Fly",
                bg: "Машинно разтваряне на гърди",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Isometric Chest Press",
                bg: "Изометрична преса на гърди",
                equip: "cable", diff: 2, secondary: [] 
            },
            { 
                en: "Plate-Loaded Press",
                bg: "Преса със стаклени дискове",
                equip: "machine", diff: 2, secondary: [] 
            },
            { 
                en: "Barbell Floor Press",
                bg: "Преса на пода с лост",
                equip: "barbell", diff: 3, secondary: [] 
            },
            { 
                en: "Board Press",
                bg: "Преса със дъска",
                equip: "barbell", diff: 2, secondary: [] 
            },
        ],
        home: [
            { 
                en: "Standard Push-ups",
                bg: "Стандартни кофички",
                equip: "bodyweight", diff: 1, secondary: ["triceps"] 
            },
            { 
                en: "Wide Push-ups",
                bg: "Широки кофички",
                equip: "bodyweight", diff: 2, secondary: [] 
            },
            { 
                en: "Narrow Push-ups",
                bg: "Тесни кофички",
                equip: "bodyweight", diff: 2, secondary: ["triceps"] 
            },
            { 
                en: "Archer Push-ups",
                bg: "Асиметрични кофички",
                equip: "bodyweight", diff: 3, secondary: [] 
            },
            { 
                en: "Incline Push-ups",
                bg: "Наклонени кофички",
                equip: "bodyweight", diff: 1, secondary: [] 
            },
            { 
                en: "Decline Push-ups",
                bg: "Спадащи кофички",
                equip: "bodyweight", diff: 3, secondary: [] 
            },
        ],
        stretching: [
            { 
                en: "Chest Doorway Stretch",
                bg: "Разтягане на каса на врата",
                goal: "30 sec | 30 сек" 
            },
            { 
                en: "Reverse Chest Stretch",
                bg: "Обратно разтягане на гърди",
                goal: "45 sec | 45 сек" 
            },
            { 
                en: "Lying Chest Stretch",
                bg: "Разтягане на гърди в лежачо положение",
                goal: "30 sec | 30 сек" 
            },
        ],
        stats: { strength: 90, volume: 85 },
        tips_en: [
            "Retract and depress scapula during movement.",
            "Keep elbows at 45 degrees from body.",
            "Maintain full range of motion.",
            "Control the eccentric (lowering) phase.",
            "Mind the bar path - should be vertical."
        ],
        tips_bg: [
            "Събирайте лопатките и спускайте ги по време на движение.",
            "Держите лактите под ъгъл от 45 градуса от тялото.",
            "Поддържайте пълния обсег на движението.",
            "Контролирайте еденцентричната (спускащата) фаза.",
            "Следете пътя на лоста - трябва да бъде вертикален."
        ],
        mistakes_en: [
            "Bouncing the bar off chest.",
            "Flaring elbows excessively.",
            "Lack of control during descent.",
            "Insufficient range of motion.",
            "Uneven shoulder height during press."
        ],
        mistakes_bg: [
            "Отскачане на лоста от гърди.",
            "Прекалено разтворени лакти.",
            "Липса на контрол при спускането.",
            "Недостатъчен обсег на движението.",
            "Неравна височина на раменете по време на преса."
        ]
    },

    traps: {
        en: {
            title: "Trapezius",
            desc: "Large muscle group on upper back. Consists of three parts: upper, middle, and lower trapezius. Important for shoulder stability.",
        },
        bg: {
            title: "Трапец",
            desc: "Голяма мускулна група на горния гръб. Состои се от три части: горен, среден и долен трапец.",
        },
        risk: "Low Risk | Нисък Риск",
        gym: [
            { 
                en: "Barbell Shrugs",
                bg: "Повдигане на рамене с лост",
                equip: "barbell", diff: 1, secondary: [] 
            },
            { 
                en: "Dumbbell Shrugs",
                bg: "Повдигане на рамене с дъмбели",
                equip: "dumbbell", diff: 1, secondary: [] 
            },
            { 
                en: "Machine Shrugs",
                bg: "Повдигане на машина",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Smith Machine Shrugs",
                bg: "Повдигане на машина Смит",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Hanging Shrugs",
                bg: "Повдигане в висене",
                equip: "bodyweight", diff: 2, secondary: ["forearms"] 
            },
            { 
                en: "Farmer's Walk",
                bg: "Фермерска разходка",
                equip: "dumbbell", diff: 1, secondary: ["forearms"] 
            },
            { 
                en: "Cable Shrugs",
                bg: "Повдигане със скрипец",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Trap Bar Deadlift",
                bg: "Мъртва тяга със специална щанга",
                equip: "barbell", diff: 2, secondary: ["lowerback"] 
            },
            { 
                en: "Shoulder Shrug Machine",
                bg: "Специална машина за трапец",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Upright Rows",
                bg: "Вертикално гребане",
                equip: "barbell", diff: 2, secondary: ["biceps"] 
            },
            { 
                en: "Cable Upright Rows",
                bg: "Вертикално гребане със скрипец",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Single-Arm Dumbbell Shrugs",
                bg: "Повдигане на едно рамо с дъмбел",
                equip: "dumbbell", diff: 1, secondary: [] 
            },
            { 
                en: "Lateral Shrugs",
                bg: "Странични повдигания",
                equip: "dumbbell", diff: 1, secondary: ["shoulders_side"] 
            },
        ],
        home: [
            { 
                en: "Loaded Backpack Shrugs",
                bg: "Повдигане на раница",
                equip: "bodyweight", diff: 1, secondary: [] 
            },
            { 
                en: "Resistance Band Shrugs",
                bg: "Повдигане със еластична лента",
                equip: "bodyweight", diff: 1, secondary: [] 
            },
        ],
        stretching: [
            { 
                en: "Neck Side Stretch",
                bg: "Разтягане на врата встрани",
                goal: "20 sec | 20 сек" 
            },
            { 
                en: "Cross-Body Trap Stretch",
                bg: "Разтягане на трапец попречно",
                goal: "30 sec | 30 сек" 
            },
        ],
        stats: { strength: 80, volume: 70 },
        tips_en: [
            "Move vertically, do not rotate shoulders.",
            "Hold for a second at the top contraction.",
            "Use full range of motion.",
            "Keep shoulders relaxed in the stretched position.",
            "Avoid using momentum."
        ],
        tips_bg: [
            "Движете се вертикално, не въртете раменете.",
            "Задържете за секунда в горната позиция.",
            "Използвайте пълен обсег на движението.",
            "Держите раменете разслабени в разтегнатата позиция.",
            "Избягвайте използване на импулс."
        ],
        mistakes_en: [
            "Using excessive weight with poor form.",
            "Rotating shoulders - invalid technique.",
            "Insufficient contraction at the top.",
            "Using momentum instead of control.",
            "Uneven shoulder height."
        ],
        mistakes_bg: [
            "Използване на прекалено голяма тежест с лоша техника.",
            "Въртене на раменете - невалидна техника.",
            "Недостатъчна контракция в горната позиция.",
            "Използване на импулс вместо контрол.",
            "Неравна височина на раменете."
        ]
    },

    shoulders_front: {
        en: {
            title: "Front Deltoid",
            desc: "Front part of the deltoid muscle. Active in pressing movements and front raises. Key for shoulder width and pressing power.",
        },
        bg: {
            title: "Предно рамо",
            desc: "Предната част на делтавидния мускул. Активна при бутащи движения и повдигания напред.",
        },
        risk: "Medium Risk | Среден Риск",
        gym: [
            { 
                en: "Military Press",
                bg: "Военна преса",
                equip: "barbell", diff: 3, secondary: ["triceps", "shoulders_side"] 
            },
            { 
                en: "Dumbbell Military Press",
                bg: "Военна преса с дъмбели",
                equip: "dumbbell", diff: 2, secondary: ["triceps"] 
            },
            { 
                en: "Shoulder Press Machine",
                bg: "Машина за преса на рамене",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Cable Shoulder Press",
                bg: "Преса на рамене със скрипец",
                equip: "cable", diff: 2, secondary: [] 
            },
            { 
                en: "Barbell Front Raise",
                bg: "Повдигане напред с лост",
                equip: "barbell", diff: 2, secondary: [] 
            },
            { 
                en: "Dumbbell Front Raise",
                bg: "Повдигане напред с дъмбели",
                equip: "dumbbell", diff: 1, secondary: [] 
            },
            { 
                en: "Cable Front Raise",
                bg: "Повдигане напред със скрипец",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Machine Front Raise",
                bg: "Повдигане напред на машина",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Kettlebell Thruster",
                bg: "Плаче с гиря",
                equip: "dumbbell", diff: 3, secondary: ["quads"] 
            },
            { 
                en: "Landmine Press",
                bg: "Преса на Landmine машина",
                equip: "barbell", diff: 2, secondary: [] 
            },
            { 
                en: "Smith Machine Shoulder Press",
                bg: "Преса на машина Смит",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Incline Barbell Press",
                bg: "Наклонена преса с лост",
                equip: "barbell", diff: 3, secondary: ["chest"] 
            },
            { 
                en: "Plate Loaded Shoulder Press",
                bg: "Преса със стаклени дискове",
                equip: "machine", diff: 2, secondary: [] 
            },
        ],
        home: [
            { 
                en: "Pike Push-ups",
                bg: "Пийк опори",
                equip: "bodyweight", diff: 2, secondary: [] 
            },
            { 
                en: "Bodyweight Shoulder Press",
                bg: "Преса със собствено тегло",
                equip: "bodyweight", diff: 2, secondary: [] 
            },
            { 
                en: "Wall-Assisted Push-ups",
                bg: "Кофички с помощ на стена",
                equip: "bodyweight", diff: 1, secondary: [] 
            },
        ],
        stretching: [
            { 
                en: "Hands Behind Back Stretch",
                bg: "Ръце зад гърба разтягане",
                goal: "30 sec | 30 сек" 
            },
            { 
                en: "Overhead Shoulder Stretch",
                bg: "Разтягане над главата",
                goal: "30 sec | 30 сек" 
            },
        ],
        stats: { strength: 85, volume: 80 },
        tips_en: [
            "Engage core for stability.",
            "Press fully overhead until elbows lock out.",
            "Control the descent phase.",
            "Keep shoulders packed and engaged.",
            "Maintain neutral spine throughout."
        ],
        tips_bg: [
            "Включете корема за стабилност.",
            "Преса напълно над главата до блокиране на лактите.",
            "Контролирайте фазата на спускане.",
            "Держите раменете събрани и включени.",
            "Поддържайте неутрална позиция на гръбнака."
        ],
        mistakes_en: [
            "Arching the back excessively.",
            "Insufficient depth in movement.",
            "Using too much weight.",
            "Pressing forward instead of straight up.",
            "Poor core engagement."
        ],
        mistakes_bg: [
            "Прекалено дугинаване на кръста.",
            "Недостатъчна дълбочина на движението.",
            "Използване на прекалено голяма тежест.",
            "Преса напред вместо прави нагоре.",
            "Слаб ангажман на корема."
        ]
    },

    shoulders_side: {
        en: {
            title: "Lateral Deltoid",
            desc: "Side part of the deltoid. Responsible for shoulder width. Most isolated by lateral raise variations.",
        },
        bg: {
            title: "Странично рамо",
            desc: "Страничната част на делтавидния мускул. Отговорна за ширина на раменете.",
        },
        risk: "Medium Risk | Среден Риск",
        gym: [
            { 
                en: "Dumbbell Lateral Raise",
                bg: "Странично повдигане с дъмбели",
                equip: "dumbbell", diff: 1, secondary: [] 
            },
            { 
                en: "Cable Lateral Raise",
                bg: "Странично повдигане със скрипец",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Machine Lateral Raise",
                bg: "Машина за странично повдигане",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Smith Machine Lateral Raise",
                bg: "Странично повдигане на машина Смит",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Plate Lateral Raise",
                bg: "Странично повдигане със стаклен диск",
                equip: "dumbbell", diff: 2, secondary: [] 
            },
            { 
                en: "Lever Machine Lateral Raise",
                bg: "Странично повдигане на машина Lever",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Barbell Lateral Raise",
                bg: "Странично повдигане с лост",
                equip: "barbell", diff: 2, secondary: [] 
            },
            { 
                en: "Single-Arm Cable Raise",
                bg: "Едностранно повдигане със скрипец",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Resistance Band Lateral Raise",
                bg: "Странично повдигане със еластична лента",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Pendulum Lateral Raise",
                bg: "Маятниково странично повдигане",
                equip: "machine", diff: 1, secondary: [] 
            },
        ],
        home: [
            { 
                en: "Resistance Band Lateral Raise",
                bg: "Странично повдигане със еластична лента",
                equip: "bodyweight", diff: 1, secondary: [] 
            },
            { 
                en: "Dumbbell Lateral Raise (Home)",
                bg: "Странично повдигане с дъмбели (Дома)",
                equip: "bodyweight", diff: 1, secondary: [] 
            },
        ],
        stretching: [
            { 
                en: "Overhead Shoulder Stretch",
                bg: "Разтягане над главата",
                goal: "30 sec | 30 сек" 
            },
        ],
        stats: { strength: 70, volume: 75 },
        tips_en: [
            "Slight bend in elbows (about 15 degrees).",
            "Elbows should reach higher than hands.",
            "Control the eccentric phase.",
            "Feel the squeeze at the top.",
            "No momentum - strict form."
        ],
        tips_bg: [
            "Лекко сгъване на лактите (около 15 градуса).",
            "Лактите трябва да бъдат по-високо от ръцете.",
            "Контролирайте еденцентричната фаза.",
            "Почувствайте свиването в горната позиция.",
            "Без импулс - строга техника."
        ],
        mistakes_en: [
            "Using back instead of shoulders.",
            "Using excessive weight.",
            "Insufficient range of motion.",
            "Momentum-driven movement.",
            "Elbows too high or too low."
        ],
        mistakes_bg: [
            "Използване на гръб вместо рамене.",
            "Използване на прекалено голяма тежест.",
            "Недостатъчен обсег на движението.",
            "Движение с импулс.",
            "Лактите твърде високо или твърде ниско."
        ]
    },

    shoulders_rear: {
        en: {
            title: "Rear Deltoid",
            desc: "Back part of the deltoid. Important for shoulder balance and posture. Often underdeveloped muscle.",
        },
        bg: {
            title: "Задно рамо",
            desc: "Задната част на делтавидния мускул. Важна за баланс на раменете и постура.",
        },
        risk: "Low Risk | Нисък Риск",
        gym: [
            { 
                en: "Reverse Pec Deck",
                bg: "Обратна Pec Deck машина",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Bent-Over Dumbbell Raise",
                bg: "Наклонено повдигане с дъмбели",
                equip: "dumbbell", diff: 1, secondary: [] 
            },
            { 
                en: "Cable Reverse Flyes",
                bg: "Обратни разтваряния със скрипец",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Bent-Over Barbell Raise",
                bg: "Наклонено повдигане с лост",
                equip: "barbell", diff: 2, secondary: [] 
            },
            { 
                en: "Machine Rear Delt Fly",
                bg: "Машина за задно рамо разтваряние",
                equip: "machine", diff: 1, secondary: [] 
            },
            { 
                en: "Single-Arm Cable Rear Raise",
                bg: "Едностранно повдигане със скрипец",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Incline Dumbbell Raise",
                bg: "Наклонено повдигане с дъмбели",
                equip: "dumbbell", diff: 2, secondary: [] 
            },
            { 
                en: "Face Pulls",
                bg: "Дърпане към лице",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Resistance Band Pull-Apart",
                bg: "Дърпане на еластична лента поотделно",
                equip: "cable", diff: 1, secondary: [] 
            },
            { 
                en: "Smith Machine Rear Raise",
                bg: "Задно повдигане на машина Смит",
                equip: "machine", diff: 1, secondary: [] 
            },
        ],
        home: [
            { 
                en: "Reverse Flyes (Bodyweight)",
                bg: "Обратни разтваряния (със собствено тегло)",
                equip: "bodyweight", diff: 2, secondary: [] 
            },
            { 
                en: "Resistance Band Pull-Apart",
                bg: "Дърпане със еластична лента",
                equip: "bodyweight", diff: 1, secondary: [] 
            },
        ],
        stretching: [
            { 
                en: "Horizontal Shoulder Stretch",
                bg: "Хоризонтално разтягане на рамене",
                goal: "30 sec | 30 сек" 
            },
        ],
        stats: { strength: 65, volume: 70 },
        tips_en: [
            "Elbows at shoulder height.",
            "Focus on scapula retraction.",
            "Control the movement throughout.",
            "Squeeze rear delts at the top.",
            "Avoid using traps."
        ],
        tips_bg: [
            "Лактите на височина на раменете.",
            "Фокусирайте се на събиране на лопатките.",
            "Контролирайте движението.",
            "Свивайте задния делт в горната позиция.",
            "Избягвайте използване на трапец."
        ],
        mistakes_en: [
            "Using shoulders instead of elbows.",
            "Using momentum.",
            "Too much weight.",
            "Not achieving full contraction.",
            "Rounding the back."
        ],
        mistakes_bg: [
            "Използване на рамене вместо лакти.",
            "Използване на импулс.",
            "Твърде голяма тежест.",
            "Не достигане на пълна контракция.",
            "Закръгляне на гръба."
        ]
    },

    lats: {
        en: {
            title: "Latissimus Dorsi (Lats)",
            desc: "Largest back muscle. Responsible for vertical pulling and arm adduction. Critical for lat width and strength.",
        },
        bg: {
            title: "Широк мускул (Lats)",
            desc: "Най-голямо мускул на гърба. Отговорен за вертикално дърпане и приведение на ръката.",
        },
        risk: "Low Risk | Нисък Риск",
        gym: [
            { 
                en: "Pull-ups",
                bg: "Набирания",
                equip: "bodyweight", diff: 3, secondary: ["biceps"] 
            },
            { 
                en: "Weighted Pull-ups",
                bg: "Набирания с утежняване",
                equip: "bodyweight", diff: 4, secondary: ["biceps"] 
            },
            { 
