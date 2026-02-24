// === COMPLETE DATABASE ===
const data = {
    chest: {
        en: {
            title: "Chest (Pectoralis Major)",
            desc: "Primary muscle group for horizontal pushing movements. Largest upper body muscle. Essential for pressing strength."
        },
        bg: {
            title: "Гърди (Pectoralis Major)",
            desc: "Основна мускулна група за хоризонтално бутане. Най-големият мускул на горната част на тялото, ключов за силата в пресите."
        },
        risk: "Medium Risk | Среден риск",
        gym: [
            { en: "Barbell Bench Press", bg: "Бенч преса с лост", equip: "barbell", diff: 3, secondary: ["triceps", "shoulders_front"] },
            { en: "Incline Barbell Bench Press", bg: "Наклонена бенч преса с лост", equip: "barbell", diff: 3, secondary: ["shoulders_front"] },
            { en: "Decline Barbell Bench Press", bg: "Спадаща бенч преса с лост", equip: "barbell", diff: 2, secondary: ["triceps"] },
            { en: "Dumbbell Bench Press", bg: "Бенч преса с дъмбели", equip: "dumbbell", diff: 2, secondary: ["triceps"] },
            { en: "Incline Dumbbell Press", bg: "Наклонена преса с дъмбели", equip: "dumbbell", diff: 2, secondary: ["shoulders_front"] },
            { en: "Decline Dumbbell Press", bg: "Спадаща преса с дъмбели", equip: "dumbbell", diff: 2, secondary: ["triceps"] },
            { en: "Dumbbell Flyes", bg: "Разтваряне с дъмбели", equip: "dumbbell", diff: 2, secondary: [] },
            { en: "Cable Crossover (High to Low)", bg: "Кросоувър горе–долу", equip: "cable", diff: 1, secondary: [] },
            { en: "Cable Crossover (Low to High)", bg: "Кросоувър долу–горе", equip: "cable", diff: 1, secondary: [] },
            { en: "Chest Press Machine", bg: "Машина преса за гърди", equip: "machine", diff: 1, secondary: [] },
            { en: "Pec Deck Machine", bg: "Машина Pec Deck", equip: "machine", diff: 1, secondary: [] },
            { en: "Smith Machine Bench Press", bg: "Бенч преса на машина Смит", equip: "machine", diff: 1, secondary: ["triceps"] }
        ],
        home: [
            { en: "Standard Push-ups", bg: "Класически лицеви опори", equip: "bodyweight", diff: 1, secondary: ["triceps"] },
            { en: "Wide Push-ups", bg: "Широки лицеви опори", equip: "bodyweight", diff: 2, secondary: [] },
            { en: "Close-Grip Push-ups", bg: "Тесни лицеви опори", equip: "bodyweight", diff: 2, secondary: ["triceps"] },
            { en: "Decline Push-ups (Feet Elevated)", bg: "Спадащи опори (повдигнати крака)", equip: "bodyweight", diff: 3, secondary: [] },
            { en: "Incline Push-ups (Hands Elevated)", bg: "Наклонени опори (повдигнати ръце)", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Archer Push-ups", bg: "Стрелец лицеви опори", equip: "bodyweight", diff: 3, secondary: [] },
            { en: "Resistance Band Push-ups", bg: "Опори с ластик", equip: "bodyweight", diff: 2, secondary: [] }
        ],
        stretching: [
            { en: "Chest Doorway Stretch", bg: "Разтягане на гърди на каса", goal: "30–45 sec | 30–45 сек" },
            { en: "Lying Chest Stretch", bg: "Лежащо разтягане на гърди", goal: "30 sec | 30 сек" },
            { en: "Wall Chest Stretch", bg: "Разтягане на гърди до стена", goal: "30 sec | 30 сек" }
        ],
        stats: { strength: 90, volume: 85 },
        tips_en: [
            "Retract and depress the scapula before every rep.",
            "Keep elbows around 30–45° from the torso to protect shoulders.",
            "Control the eccentric phase, do not bounce off the chest.",
            "Use a stable leg drive and tight core for heavy sets.",
            "Stop 1–3 reps before failure on most working sets."
        ],
        tips_bg: [
            "Събирай и сваляй лопатките преди всяко повторение.",
            "Дръж лактите на 30–45° от тялото за здрави рамене.",
            "Контролирай спускането, без подскачане от гърдите.",
            "Използвай стабилна опора от краката и стегнат корем при тежки серии.",
            "Спирай 1–3 повторения преди отказ в повечето серии."
        ],
        mistakes_en: [
            "Bouncing the bar or dumbbells off the chest.",
            "Excessive elbow flare putting stress on shoulders.",
            "Half reps without full range of motion.",
            "Loose upper back and no scapular control.",
            "Hips lifting off the bench on heavy attempts."
        ],
        mistakes_bg: [
            "Отскачане на лоста или дъмбелите от гърдите.",
            "Прекалено разперени лакти и напрежение в раменете.",
            "Полу-повторения без пълен обхват.",
            "Разхлабен гръб и липса на контрол върху лопатките.",
            "Повдигане на таза от лежанката при тежки опити."
        ]
    },

    traps: {
        en: {
            title: "Trapezius",
            desc: "Large upper back muscle with upper, middle and lower fibers. Important for scapular elevation and stability."
        },
        bg: {
            title: "Трапец",
            desc: "Голям мускул на горната част на гърба с горни, средни и долни влакна. Важен за повдигане и стабилизиране на лопатките."
        },
        risk: "Low Risk | Нисък риск",
        gym: [
            { en: "Barbell Shrugs", bg: "Повдигане на рамене с лост", equip: "barbell", diff: 1, secondary: [] },
            { en: "Dumbbell Shrugs", bg: "Повдигане на рамене с дъмбели", equip: "dumbbell", diff: 1, secondary: [] },
            { en: "Smith Machine Shrugs", bg: "Повдигане на рамене на Смит", equip: "machine", diff: 1, secondary: [] },
            { en: "Behind-the-Back Barbell Shrugs", bg: "Повдигане на рамене с лост зад гърба", equip: "barbell", diff: 2, secondary: [] },
            { en: "Farmer's Walk", bg: "Фермерска разходка", equip: "dumbbell", diff: 2, secondary: ["forearms"] },
            { en: "Cable Shrugs", bg: "Повдигане на рамене на скрипец", equip: "cable", diff: 1, secondary: [] },
            { en: "Upright Row (Barbell)", bg: "Вертикално гребане с лост", equip: "barbell", diff: 2, secondary: ["shoulders_side"] },
            { en: "Upright Row (Cable)", bg: "Вертикално гребане на скрипец", equip: "cable", diff: 1, secondary: ["shoulders_side"] }
        ],
        home: [
            { en: "Backpack Shrugs", bg: "Повдигане на рамене с раница", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Towel Isometric Shrugs", bg: "Изометрични шрагове с кърпа", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Resistance Band Shrugs", bg: "Шрагове с ластик", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Upper Trap Stretch (Side Neck)", bg: "Разтягане на горен трапец (страничен врат)", goal: "20–30 sec | 20–30 сек" },
            { en: "Levator Scapulae Stretch", bg: "Разтягане на повдигач на лопатката", goal: "20–30 sec | 20–30 сек" }
        ],
        stats: { strength: 80, volume: 70 },
        tips_en: [
            "Move straight up and down, avoid rolling the shoulders.",
            "Pause for 1–2 seconds at peak contraction.",
            "Use straps if grip fails before traps.",
            "Keep neck neutral, do not look up excessively."
        ],
        tips_bg: [
            "Движи раменете право нагоре и надолу, без въртене.",
            "Задръж 1–2 секунди горе в контракция.",
            "Използвай каиши, ако хватът отказва преди трапеца.",
            "Дръж врата неутрален, без прекалено отмятане назад."
        ],
        mistakes_en: [
            "Rolling the shoulders in circles.",
            "Using too much momentum and leg drive.",
            "Shrugging with bent elbows like an upright row.",
            "Letting the bar drift too far from the body."
        ],
        mistakes_bg: [
            "Въртене на раменете в кръг.",
            "Прекален импулс и помощ от краката.",
            "Повдигане с много свити лакти (като гребане).",
            "Оставяне на тежестта да се отдалечи от тялото."
        ]
    },

    shoulders_front: {
        en: {
            title: "Front Deltoid",
            desc: "Front head of the deltoid, heavily involved in pressing and front raising movements."
        },
        bg: {
            title: "Предно рамо",
            desc: "Предната глава на делтовидния мускул, основно активна при преси и повдигане напред."
        },
        risk: "Medium Risk | Среден риск",
        gym: [
            { en: "Barbell Overhead Press", bg: "Раменна преса с лост", equip: "barbell", diff: 3, secondary: ["triceps", "shoulders_side"] },
            { en: "Seated Barbell Press", bg: "Седнала раменна преса с лост", equip: "barbell", diff: 3, secondary: ["triceps"] },
            { en: "Dumbbell Shoulder Press", bg: "Раменна преса с дъмбели", equip: "dumbbell", diff: 2, secondary: ["triceps"] },
            { en: "Arnold Press", bg: "Арнолд преса", equip: "dumbbell", diff: 3, secondary: ["triceps"] },
            { en: "Machine Shoulder Press", bg: "Машина преса за рамо", equip: "machine", diff: 1, secondary: [] },
            { en: "Smith Machine Shoulder Press", bg: "Раменна преса на Смит", equip: "machine", diff: 1, secondary: [] },
            { en: "Barbell Front Raise", bg: "Повдигане напред с лост", equip: "barbell", diff: 2, secondary: [] },
            { en: "Dumbbell Front Raise", bg: "Повдигане напред с дъмбели", equip: "dumbbell", diff: 1, secondary: [] },
            { en: "Cable Front Raise", bg: "Повдигане напред на скрипец", equip: "cable", diff: 1, secondary: [] }
        ],
        home: [
            { en: "Pike Push-ups", bg: "Пайк лицеви опори", equip: "bodyweight", diff: 2, secondary: [] },
            { en: "Elevated Pike Push-ups", bg: "Пайк опори с повдигнати крака", equip: "bodyweight", diff: 3, secondary: [] },
            { en: "Wall Handstand Hold", bg: "Задържане на стойка на ръце до стена", equip: "bodyweight", diff: 3, secondary: ["triceps"] },
            { en: "Resistance Band Front Raise", bg: "Повдигане напред с ластик", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Doorway Shoulder Stretch", bg: "Разтягане на рамо на каса", goal: "30 sec | 30 сек" },
            { en: "Overhead Triceps & Shoulder Stretch", bg: "Надглавно разтягане на рамо и трицепс", goal: "30 sec | 30 сек" }
        ],
        stats: { strength: 85, volume: 80 },
        tips_en: [
            "Keep ribs down and core tight to avoid excessive lower back arch.",
            "Control the bar path slightly in front of the head.",
            "Use full range of motion unless pain limits it.",
            "Warm up rotator cuff before heavy overhead pressing."
        ],
        tips_bg: [
            "Дръж ребрата надолу и корема стегнат, за да не прегъваш кръста.",
            "Контролирай пътя на лоста леко пред главата.",
            "Използвай пълен обхват, освен ако има болка.",
            "Загрявай ротаторния маншон преди тежки преси над глава."
        ],
        mistakes_en: [
            "Overarching the lower back under heavy loads.",
            "Pressing too far in front of the body.",
            "Lowering only halfway and missing shoulder activation.",
            "Using too much leg drive in a strict press variation."
        ],
        mistakes_bg: [
            "Прекалено прегъване в кръста при тежки килограми.",
            "Преса твърде напред пред тялото.",
            "Спускане само наполовина и слаб стимул за раменете.",
            "Прекалено много помощ от краката при стриктна преса."
        ]
    },

    shoulders_side: {
        en: {
            title: "Lateral Deltoid",
            desc: "Side head of the deltoid that builds shoulder width, best targeted by lateral raises."
        },
        bg: {
            title: "Странично рамо",
            desc: "Страничната глава на делтовидния мускул, отговорна за визуалната ширина на раменете."
        },
        risk: "Medium Risk | Среден риск",
        gym: [
            { en: "Dumbbell Lateral Raise", bg: "Странично повдигане с дъмбели", equip: "dumbbell", diff: 1, secondary: [] },
            { en: "Cable Lateral Raise", bg: "Странично повдигане на скрипец", equip: "cable", diff: 1, secondary: [] },
            { en: "Machine Lateral Raise", bg: "Машина за странично рамо", equip: "machine", diff: 1, secondary: [] },
            { en: "Seated Dumbbell Lateral Raise", bg: "Седнало странично повдигане", equip: "dumbbell", diff: 1, secondary: [] },
            { en: "Leaning Cable Lateral Raise", bg: "Наклонено странично повдигане на скрипец", equip: "cable", diff: 2, secondary: [] },
            { en: "One-Arm Lateral Raise", bg: "Едностранно странично повдигане", equip: "dumbbell", diff: 1, secondary: [] }
        ],
        home: [
            { en: "Resistance Band Lateral Raise", bg: "Странично повдигане с ластик", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Water Bottle Lateral Raise", bg: "Странично повдигане с бутилки вода", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Partial Lateral Raise Holds", bg: "Задържане в полу-странично повдигане", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Cross-Body Shoulder Stretch", bg: "Хоризонтално разтягане на рамо", goal: "30 sec | 30 сек" }
        ],
        stats: { strength: 70, volume: 75 },
        tips_en: [
            "Lead with the elbows, not the hands.",
            "Maintain a slight bend in the elbows throughout.",
            "Stop just below shoulder pain range if there is discomfort.",
            "Think of pushing the dumbbells outward, not upward."
        ],
        tips_bg: [
            "Води движението с лактите, не с китките.",
            "Поддържай леко свити лакти през цялото време.",
            "Спирай малко под болезнения обхват, ако има дискомфорт.",
            "Мисли, че избутваш дъмбелите навън, не само нагоре."
        ],
        mistakes_en: [
            "Swinging the torso for momentum.",
            "Using very heavy weights with poor control.",
            "Turning the thumbs too far down and stressing the joint.",
            "Not reaching at least parallel to the floor for most reps."
        ],
        mistakes_bg: [
            "Люлеене на тялото за инерция.",
            "Прекалено тежки дъмбели без контрол.",
            "Прекалено завъртане на палците надолу и натоварване на ставата.",
            "Липса на достигане поне до паралел с пода при повечето повторения."
        ]
    },

    shoulders_rear: {
        en: {
            title: "Rear Deltoid",
            desc: "Rear head of the deltoid, crucial for posture, shoulder balance and pulling strength."
        },
        bg: {
            title: "Задно рамо",
            desc: "Задната глава на делтовидния мускул, важна за постура, баланс на раменете и сила в дърпащите движения."
        },
        risk: "Low Risk | Нисък риск",
        gym: [
            { en: "Reverse Pec Deck", bg: "Обратна Pec Deck машина", equip: "machine", diff: 1, secondary: [] },
            { en: "Bent-Over Dumbbell Raise", bg: "Наклонено повдигане с дъмбели", equip: "dumbbell", diff: 1, secondary: [] },
            { en: "Cable Reverse Fly", bg: "Обратни разтваряния на скрипец", equip: "cable", diff: 1, secondary: [] },
            { en: "Face Pulls", bg: "Дърпане към лице", equip: "cable", diff: 1, secondary: ["traps"] },
            { en: "Incline Bench Rear Delt Raise", bg: "Повдигане за задно рамо на наклонена лежанка", equip: "dumbbell", diff: 2, secondary: [] }
        ],
        home: [
            { en: "Reverse Snow Angels", bg: "Обратни снежни ангели", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Band Pull-Aparts", bg: "Разтваряне с ластик пред гърди", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Prone Y-T Raises", bg: "Повдигане в Y и T позиция по очи", equip: "bodyweight", diff: 2, secondary: [] }
        ],
        stretching: [
            { en: "Horizontal Rear Delt Stretch", bg: "Хоризонтално разтягане за задно рамо", goal: "30 sec | 30 сек" }
        ],
        stats: { strength: 65, volume: 70 },
        tips_en: [
            "Pull with the elbows rather than the hands.",
            "Keep scapulae moving but controlled, no jerking.",
            "Avoid shrugging the shoulders up into the ears.",
            "Use higher reps and strict form for best mind-muscle connection."
        ],
        tips_bg: [
            "Дърпай с лактите, не с китките.",
            "Движи лопатките контролирано, без резки движения.",
            "Не повдигай раменете към ушите.",
            "Използвай по-високи повторения и стриктна техника за по-добра активация."
        ],
        mistakes_en: [
            "Turning the movement into a row instead of a fly.",
            "Using too much weight and momentum.",
            "Letting the lower back arch excessively when bent over.",
            "No squeeze at the end of range."
        ],
        mistakes_bg: [
            "Превръщане на упражнението в гребане вместо разтваряне.",
            "Прекалено голяма тежест и инерция.",
            "Прекалено прегъване в кръста при наклонени варианти.",
            "Липса на свиване в крайната позиция."
        ]
    },

    biceps: {
        en: {
            title: "Biceps Brachii",
            desc: "Two-headed elbow flexor responsible for curling and supinating the forearm."
        },
        bg: {
            title: "Бицепс",
            desc: "Двуглав мишничен мускул, основен за сгъване в лакътя и супинация на предмишницата."
        },
        risk: "Low Risk | Нисък риск",
        gym: [
            { en: "Standing Barbell Curl", bg: "Прав стоеж сгъване с лост", equip: "barbell", diff: 2, secondary: ["forearms"] },
            { en: "EZ-Bar Curl", bg: "Сгъване с EZ лост", equip: "barbell", diff: 2, secondary: ["forearms"] },
            { en: "Seated Dumbbell Curl", bg: "Седнало сгъване с дъмбели", equip: "dumbbell", diff: 1, secondary: [] },
            { en: "Incline Dumbbell Curl", bg: "Наклонено сгъване с дъмбели", equip: "dumbbell", diff: 2, secondary: [] },
            { en: "Preacher Curl Machine", bg: "Машина проповедник сгъване", equip: "machine", diff: 1, secondary: [] },
            { en: "Cable Curl", bg: "Сгъване на скрипец", equip: "cable", diff: 1, secondary: [] },
            { en: "Hammer Curl", bg: "Чуково сгъване", equip: "dumbbell", diff: 1, secondary: ["forearms"] },
            { en: "Concentration Curl", bg: "Концентрирано сгъване", equip: "dumbbell", diff: 1, secondary: [] }
        ],
        home: [
            { en: "Resistance Band Curl", bg: "Сгъване с ластик", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Towel Curl (Partner or Fixed)", bg: "Сгъване с кърпа (с партньор или фиксирана)", equip: "bodyweight", diff: 2, secondary: [] },
            { en: "Backpack Curl", bg: "Сгъване с раница", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Isometric Curl Against Doorframe", bg: "Изометрично сгъване в касата на вратата", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Biceps Wall Stretch", bg: "Разтягане на бицепс на стена", goal: "20–30 sec | 20–30 сек" }
        ],
        stats: { strength: 60, volume: 75 },
        tips_en: [
            "Keep elbows close to the body, avoid letting them drift forward.",
            "Control the eccentric for maximum hypertrophy.",
            "Do not fully relax at the bottom; keep tension.",
            "Use a variety of grip widths and angles across the week."
        ],
        tips_bg: [
            "Дръж лактите близо до тялото, без да избутваш напред.",
            "Контролирай спускането за максимална хипертрофия.",
            "Не отпускай напълно долу; поддържай напрежение.",
            "Използвай различни хватове и ъгли през седмицата."
        ],
        mistakes_en: [
            "Excessive swinging with the lower back.",
            "Moving the elbows forward to cheat the weight up.",
            "Using only partial range of motion.",
            "Gripping the bar too hard and over-fatiguing forearms."
        ],
        mistakes_bg: [
            "Прекалено люлеене с кръста.",
            "Избутване на лактите напред за да се „измами“ тежестта.",
            "Полу-повторения без пълен обхват.",
            "Прекалено силен хват и бързо изморяване на предмишниците."
        ]
    },

    triceps: {
        en: {
            title: "Triceps Brachii",
            desc: "Three-headed muscle on the back of the upper arm, responsible for elbow extension."
        },
        bg: {
            title: "Трицепс",
            desc: "Триглав мишничен мускул от задната страна на ръката, отговорен за разгъване в лакътя."
        },
        risk: "Medium Risk | Среден риск",
        gym: [
            { en: "Close-Grip Bench Press", bg: "Тясна бенч преса", equip: "barbell", diff: 3, secondary: ["chest", "shoulders_front"] },
            { en: "EZ-Bar Skull Crushers", bg: "Френско разгъване с EZ лост", equip: "barbell", diff: 2, secondary: [] },
            { en: "Cable Push-down (Straight Bar)", bg: "Кофички на скрипец с права дръжка", equip: "cable", diff: 1, secondary: [] },
            { en: "Rope Push-down", bg: "Разгъване на скрипец с въже", equip: "cable", diff: 1, secondary: [] },
            { en: "Dumbbell Overhead Extension", bg: "Надглавно разгъване с дъмбел", equip: "dumbbell", diff: 2, secondary: [] },
            { en: "Machine Dip", bg: "Машинни кофички", equip: "machine", diff: 1, secondary: ["chest"] },
            { en: "Bench Dips (with load)", bg: "Кофички между пейки с тежест", equip: "bodyweight", diff: 3, secondary: ["chest"] }
        ],
        home: [
            { en: "Bench Dips (Bodyweight)", bg: "Кофички на пейка със собствено тегло", equip: "bodyweight", diff: 2, secondary: ["chest"] },
            { en: "Diamond Push-ups", bg: "Диамантени лицеви опори", equip: "bodyweight", diff: 2, secondary: ["chest"] },
            { en: "Chair Close-Grip Push-ups", bg: "Тесни опори на столове", equip: "bodyweight", diff: 2, secondary: [] },
            { en: "Overhead Band Extension", bg: "Надглавно разгъване с ластик", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Overhead Triceps Stretch", bg: "Надглавно разтягане на трицепс", goal: "20–30 sec | 20–30 сек" }
        ],
        stats: { strength: 80, volume: 70 },
        tips_en: [
            "Keep elbows pointed up and as fixed as possible.",
            "Do not let shoulders roll forward on skull crushers.",
            "Lock out under control, avoid snapping the elbow.",
            "Use both heavy low-rep and lighter high-rep work."
        ],
        tips_bg: [
            "Дръж лактите насочени нагоре и максимално неподвижни.",
            "Не позволявай раменете да се завъртат напред при френско разгъване.",
            "Разгъвай под контрол, без заключване със „щракване“ в лакътя.",
            "Комбинирай тежки ниски повторения и по-леки високи."
        ],
        mistakes_en: [
            "Letting the elbows flare excessively to the sides.",
            "Dropping the bar behind the head without control.",
            "Cutting the range of motion short.",
            "Using only isolation work and neglecting pressing compounds."
        ],
        mistakes_bg: [
            "Прекалено разтваряне на лактите встрани.",
            "Пускане на тежестта зад главата без контрол.",
            "Съкратен обхват на движение.",
            "Само изолиращи упражнения без тежки преси."
        ]
    },

    forearms: {
        en: {
            title: "Forearms",
            desc: "Muscles of the lower arm responsible for grip, wrist flexion/extension and forearm size."
        },
        bg: {
            title: "Предмишници",
            desc: "Мускулите на долната част на ръката, отговорни за хвата и сгъване/разгъване в китката."
        },
        risk: "Low Risk | Нисък риск",
        gym: [
            { en: "Barbell Wrist Curl", bg: "Сгъване в китката с лост", equip: "barbell", diff: 1, secondary: [] },
            { en: "Reverse Barbell Wrist Curl", bg: "Обратни сгъвания в китката с лост", equip: "barbell", diff: 1, secondary: [] },
            { en: "Dumbbell Hammer Curl", bg: "Чуково сгъване с дъмбели", equip: "dumbbell", diff: 1, secondary: ["biceps"] },
            { en: "Farmer's Walk", bg: "Фермерска разходка", equip: "dumbbell", diff: 2, secondary: ["traps"] },
            { en: "Plate Pinch Hold", bg: "Захват с дискове (щипка)", equip: "dumbbell", diff: 2, secondary: [] },
            { en: "Towel Pull-up", bg: "Набирания с кърпа", equip: "bodyweight", diff: 3, secondary: ["lats", "biceps"] }
        ],
        home: [
            { en: "Towel Wrist Curl Over Knee", bg: "Сгъване в китка с кърпа върху коляно", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Static Bucket Hold", bg: "Статичен хват на кофа/тежък предмет", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Finger Tip Push-ups (Regressed)", bg: "Лицеви опори на пръсти (регресирани)", equip: "bodyweight", diff: 3, secondary: [] }
        ],
        stretching: [
            { en: "Wrist Flexor Stretch", bg: "Разтягане на сгъвачите на китката", goal: "20–30 sec | 20–30 сек" },
            { en: "Wrist Extensor Stretch", bg: "Разтягане на разгъвачите на китката", goal: "20–30 sec | 20–30 сек" }
        ],
        stats: { strength: 60, volume: 65 },
        tips_en: [
            "Do not overdo direct forearm work; much is hit from other lifts.",
            "Use slow eccentrics on wrist curls for tendon strength.",
            "Train grip with both thick and normal handles across the week."
        ],
        tips_bg: [
            "Не прекалявай с директна работа за предмишници – много се натоварват и от други упражнения.",
            "Използвай бавно спускане при сгъванията в китката за здрави сухожилия.",
            "Тренирай хвата и с дебел, и с нормален хват през седмицата."
        ],
        mistakes_en: [
            "Using way too much weight with tiny range of motion.",
            "Ignoring pain around the elbows (possible tendinitis).",
            "Training forearms to failure right before heavy pulling days."
        ],
        mistakes_bg: [
            "Твърде голяма тежест с минимален обхват.",
            "Игнориране на болка около лакътя (възможен тендинит).",
            "Тренировка до отказ непосредствено преди тежки дърпащи тренировки."
        ]
    },

    lats: {
        en: {
            title: "Latissimus Dorsi (Lats)",
            desc: "Largest back muscle, responsible for vertical pulling, shoulder adduction and back width."
        },
        bg: {
            title: "Широк гръбен мускул (Lats)",
            desc: "Най-големият мускул на гърба, отговорен за вертикално дърпане и ширина на гърба."
        },
        risk: "Low Risk | Нисък риск",
        gym: [
            { en: "Pull-ups", bg: "Набирания широк хват", equip: "bodyweight", diff: 3, secondary: ["biceps"] },
            { en: "Chin-ups", bg: "Набирания подхват", equip: "bodyweight", diff: 3, secondary: ["biceps"] },
            { en: "Weighted Pull-ups", bg: "Набирания с тежест", equip: "bodyweight", diff: 4, secondary: ["biceps"] },
            { en: "Lat Pulldown (Wide Grip)", bg: "Гребане отгоре широк хват", equip: "machine", diff: 1, secondary: ["biceps"] },
            { en: "Lat Pulldown (Neutral Grip)", bg: "Горен скрипец неутрален хват", equip: "machine", diff: 1, secondary: ["biceps"] },
            { en: "Seated Cable Row", bg: "Седнало гребане на скрипец", equip: "cable", diff: 1, secondary: ["biceps", "traps"] },
            { en: "One-Arm Dumbbell Row", bg: "Едностранно гребане с дъмбел", equip: "dumbbell", diff: 2, secondary: ["biceps"] },
            { en: "T-Bar Row", bg: "Гребане на T-бар", equip: "barbell", diff: 3, secondary: ["biceps", "traps"] },
            { en: "Chest-Supported Row", bg: "Гребане с опора за гърди", equip: "machine", diff: 2, secondary: ["biceps", "traps"] }
        ],
        home: [
            { en: "Australian Pull-ups (Body Row)", bg: "Хоризонтални набирания (body row)", equip: "bodyweight", diff: 2, secondary: ["biceps"] },
            { en: "Doorframe Row (Cautious)", bg: "Гребане на касата на вратата (внимателно)", equip: "bodyweight", diff: 2, secondary: ["biceps"] },
            { en: "Resistance Band Lat Pulldown", bg: "Горен скрипец с ластик", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Overhead Lat Stretch on Bar", bg: "Надглавно разтягане на латовете на лост", goal: "30 sec | 30 сек" },
            { en: "Child's Pose Lat Focus", bg: "Детска поза с акцент върху лат", goal: "30–45 sec | 30–45 сек" }
        ],
        stats: { strength: 85, volume: 80 },
        tips_en: [
            "Think of driving the elbows down towards the hips.",
            "Keep chest up and avoid excessive swinging.",
            "Use straps if grip is limiting back work.",
            "Control the stretch at the top for more hypertrophy."
        ],
        tips_bg: [
            "Мисли, че дърпаш лактите надолу към таза.",
            "Дръж гърдите високо и избягвай люлеене.",
            "Използвай каиши, ако хватът те ограничава преди гърба.",
            "Контролирай разтягането горе за по-силен стимул."
        ],
        mistakes_en: [
            "Turning rows into a lower-back movement with too much momentum.",
            "Letting the shoulders roll excessively forward.",
            "Pulling with the arms only instead of initiating with the back."
        ],
        mistakes_bg: [
            "Превръщане на гребането в движение за кръста с прекалена инерция.",
            "Прекалено завъртане и „увисване“ на раменете напред.",
            "Дърпане само с ръце вместо с активен гръб."
        ]
    },

    lowerback: {
        en: {
            title: "Lower Back (Erector Spinae)",
            desc: "Spinal erectors responsible for extension and stability of the lumbar spine."
        },
        bg: {
            title: "Долен гръб (Erector Spinae)",
            desc: "Изправящи гръбначни мускули, отговорни за разгъване и стабилност на кръста."
        },
        risk: "Higher Risk | По-висок риск",
        gym: [
            { en: "Barbell Deadlift", bg: "Мъртва тяга с лост", equip: "barbell", diff: 4, secondary: ["glutes", "hamstrings"] },
            { en: "Romanian Deadlift", bg: "Румънска тяга", equip: "barbell", diff: 3, secondary: ["glutes", "hamstrings"] },
            { en: "Rack Pulls", bg: "Тяга от стойки", equip: "barbell", diff: 3, secondary: ["traps", "glutes"] },
            { en: "Back Extension Machine", bg: "Машина за хиперекстензии", equip: "machine", diff: 1, secondary: ["glutes", "hamstrings"] },
            { en: "Good Mornings", bg: "Гууд морнинг с лост", equip: "barbell", diff: 3, secondary: ["hamstrings"] }
        ],
        home: [
            { en: "Bodyweight Hip Extensions (Floor)", bg: "Повдигане на таз от пода", equip: "bodyweight", diff: 1, secondary: ["glutes"] },
            { en: "Superman Hold", bg: "Супермен задържане", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Bird Dog", bg: "Упражнение „птица-куче“", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Child's Pose", bg: "Детска поза", goal: "30–60 sec | 30–60 сек" },
            { en: "Knees to Chest Stretch", bg: "Привличане на коленете към гърди", goal: "20–30 sec | 20–30 сек" }
        ],
        stats: { strength: 75, volume: 65 },
        tips_en: [
            "Prioritise technique over load; neutral spine is mandatory.",
            "Brace the core and think of spreading the floor with your feet.",
            "Increase volume slowly to avoid overloading the spine."
        ],
        tips_bg: [
            "Техниката е по-важна от тежестта; неутрален гръб е задължителен.",
            "Стягай корема и мисли, че „разпъваш“ пода с ходилата.",
            "Повишавай обема постепенно, за да не претовариш кръста."
        ],
        mistakes_en: [
            "Rounding the lower back under load.",
            "Jerking the bar off the floor instead of building tension.",
            "Too frequent heavy deadlifts with no recovery."
        ],
        mistakes_bg: [
            "Заобляне на кръста под товар.",
            "Рязко дръпване на лоста от пода вместо плавно напъване.",
            "Твърде чести тежки тяги без достатъчно възстановяване."
        ]
    },

    glutes: {
        en: {
            title: "Glutes",
            desc: "Primary hip extensors, crucial for athleticism, posture and lower body strength."
        },
        bg: {
            title: "Глутеуси",
            desc: "Основните разгъвачи на тазобедрената става, важни за атлетичност, постура и сила в долната част."
        },
        risk: "Low Risk | Нисък риск",
        gym: [
            { en: "Barbell Hip Thrust", bg: "Хип тръст с лост", equip: "barbell", diff: 3, secondary: ["hamstrings"] },
            { en: "Glute Bridge (Barbell)", bg: "Мост с лост", equip: "barbell", diff: 2, secondary: ["hamstrings"] },
            { en: "Romanian Deadlift", bg: "Румънска тяга", equip: "barbell", diff: 3, secondary: ["hamstrings", "lowerback"] },
            { en: "Bulgarian Split Squat", bg: "Български клек с опора", equip: "dumbbell", diff: 3, secondary: ["quads"] },
            { en: "Cable Pull-Through", bg: "Теглене през краката на скрипец", equip: "cable", diff: 2, secondary: ["hamstrings"] },
            { en: "Smith Machine Squat (Glute Focus)", bg: "Клек на Смит с акцент глутеус", equip: "machine", diff: 2, secondary: ["quads"] }
        ],
        home: [
            { en: "Bodyweight Hip Thrust", bg: "Хип тръст без тежест", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Single-Leg Glute Bridge", bg: "Едностранен глутеус мост", equip: "bodyweight", diff: 2, secondary: [] },
            { en: "Step-ups", bg: "Качване на пейка/стъпало", equip: "bodyweight", diff: 2, secondary: ["quads"] },
            { en: "Donkey Kicks", bg: "Ритници назад на четири опори", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Figure-4 Glute Stretch", bg: "Фигура 4 разтягане на глутеус", goal: "30–45 sec | 30–45 сек" },
            { en: "Pigeon Pose", bg: "Гълъб поза", goal: "30–60 sec | 30–60 сек" }
        ],
        stats: { strength: 80, volume: 80 },
        tips_en: [
            "Tuck the ribs down and avoid over-arching during hip thrusts.",
            "Push through the heels and keep shins vertical at the top.",
            "Pause briefly in peak contraction for better glute activation."
        ],
        tips_bg: [
            "Дръж ребрата надолу и не прегъвай кръста при хип тръст.",
            "Натискай през петите и дръж подбедрицата почти вертикална горе.",
            "Задръж кратко в горната позиция за по-силна активация."
        ],
        mistakes_en: [
            "Overextending the lower back instead of extending at the hips.",
            "Letting knees cave in during heavy sets.",
            "Using too short range of motion just for heavier weights."
        ],
        mistakes_bg: [
            "Преразгъване в кръста вместо в тазобедрената става.",
            "Свиване на коленете навътре при тежки серии.",
            "Намален обхват само заради по-големи килограми."
        ]
    },

    quads: {
        en: {
            title: "Quadriceps",
            desc: "Four-headed muscle group on the front of the thigh, responsible for knee extension."
        },
        bg: {
            title: "Квадрицепс",
            desc: "Четириглав бедрен мускул, основен разгъвач в коляното."
        },
        risk: "Medium Risk | Среден риск",
        gym: [
            { en: "Back Squat", bg: "Клек с щанга на гръб", equip: "barbell", diff: 4, secondary: ["glutes"] },
            { en: "Front Squat", bg: "Клек с щанга отпред", equip: "barbell", diff: 4, secondary: ["glutes"] },
            { en: "Hack Squat Machine", bg: "Хак клек на машина", equip: "machine", diff: 2, secondary: ["glutes"] },
            { en: "Leg Press", bg: "Лег преса", equip: "machine", diff: 2, secondary: ["glutes"] },
            { en: "Leg Extension Machine", bg: "Машина за разгъване в коляно", equip: "machine", diff: 1, secondary: [] },
            { en: "Walking Lunges", bg: "Ходещи напади", equip: "dumbbell", diff: 3, secondary: ["glutes"] }
        ],
        home: [
            { en: "Bodyweight Squats", bg: "Клекове със собствено тегло", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Split Squats", bg: "Напади на място", equip: "bodyweight", diff: 2, secondary: ["glutes"] },
            { en: "Wall Sit", bg: "Седеж на стена", equip: "bodyweight", diff: 2, secondary: [] },
            { en: "Jump Squats", bg: "Скокови клекове", equip: "bodyweight", diff: 3, secondary: [] }
        ],
        stretching: [
            { en: "Standing Quad Stretch", bg: "Разтягане на квадрицепс прав", goal: "20–30 sec | 20–30 сек" },
            { en: "Lying Quad Stretch", bg: "Разтягане на квадрицепс легнал настрани", goal: "20–30 sec | 20–30 сек" }
        ],
        stats: { strength: 90, volume: 80 },
        tips_en: [
            "Keep knees tracking over toes, not collapsing inward.",
            "Use full depth that your mobility allows without pain.",
            "Control both descent and ascent, avoid bouncing in the hole."
        ],
        tips_bg: [
            "Дръж коленете да следват посоката на пръстите, без да падат навътре.",
            "Ползвай дълбочина според подвижността ти, без болка.",
            "Контролирай слизането и качването, без подскачане от дъното."
        ],
        mistakes_en: [
            "Allowing heels to lift off the floor.",
            "Letting the bar drift too far forward in squats.",
            "Neglecting warm-up and mobility work for hips and ankles."
        ],
        mistakes_bg: [
            "Отлепяне на петите от пода.",
            "Оставяне на лоста да се изнесе прекалено напред при клек.",
            "Пренебрегване на загрявката и мобилността в таз и глезени."
        ]
    },

    hamstrings: {
        en: {
            title: "Hamstrings",
            desc: "Group of muscles at the back of the thigh responsible for knee flexion and hip extension."
        },
        bg: {
            title: "Задно бедро",
            desc: "Група мускули в задната част на бедрото, участващи в сгъване на коляното и разгъване в тазобедрената става."
        },
        risk: "Medium Risk | Среден риск",
        gym: [
            { en: "Romanian Deadlift", bg: "Румънска тяга", equip: "barbell", diff: 3, secondary: ["glutes", "lowerback"] },
            { en: "Lying Leg Curl Machine", bg: "Машина за сгъване от лег", equip: "machine", diff: 1, secondary: [] },
            { en: "Seated Leg Curl Machine", bg: "Машина за сгъване седнал", equip: "machine", diff: 1, secondary: [] },
            { en: "Good Mornings", bg: "Гууд морнинг", equip: "barbell", diff: 3, secondary: ["lowerback"] },
            { en: "Glute-Ham Raise", bg: "Повдигане на глутеус–задно бедро", equip: "machine", diff: 3, secondary: ["glutes"] }
        ],
        home: [
            { en: "Single-Leg Romanian Deadlift (Bodyweight)", bg: "Едностранна румънска тяга без тежест", equip: "bodyweight", diff: 2, secondary: ["glutes"] },
            { en: "Hamstring Walkouts", bg: "Изплъзвания за задно бедро", equip: "bodyweight", diff: 2, secondary: [] },
            { en: "Nordic Curl (Assisted)", bg: "Нордически сгъвания с помощ", equip: "bodyweight", diff: 3, secondary: [] }
        ],
        stretching: [
            { en: "Standing Hamstring Stretch", bg: "Разтягане на задно бедро прав", goal: "20–30 sec | 20–30 сек" },
            { en: "Seated Hamstring Stretch", bg: "Седнало разтягане на задно бедро", goal: "20–30 sec | 20–30 сек" }
        ],
        stats: { strength: 80, volume: 75 },
        tips_en: [
            "Maintain a slight knee bend in hip-hinge movements.",
            "Push hips back instead of simply leaning forward.",
            "Do not bounce at the bottom of stretches or RDLs."
        ],
        tips_bg: [
            "Поддържай леко свити колене при тазобедрени наклони.",
            "Отдръпвай таза назад, вместо просто да се навеждаш напред.",
            "Не подскачай в долна позиция при разтягания или RDL."
        ],
        mistakes_en: [
            "Rounding the back significantly in hip hinge patterns.",
            "Using too much weight on leg curls with zero control.",
            "Ignoring hamstring work compared to quads."
        ],
        mistakes_bg: [
            "Силно заобляне на гърба при наклон.",
            "Твърде голяма тежест на машини за сгъване без контрол.",
            "Пренебрегване на задното бедро спрямо квадрицепса."
        ]
    },

    calves: {
        en: {
            title: "Calves",
            desc: "Gastrocnemius and soleus muscles responsible for plantar flexion and ankle stability."
        },
        bg: {
            title: "Прасци",
            desc: "Гастрокнемиус и солеус – мускулите на прасеца, отговорни за повдигане на петата и стабилност на глезена."
        },
        risk: "Low Risk | Нисък риск",
        gym: [
            { en: "Standing Calf Raise Machine", bg: "Повдигане на пръсти прав на машина", equip: "machine", diff: 1, secondary: [] },
            { en: "Seated Calf Raise Machine", bg: "Повдигане на пръсти седнал", equip: "machine", diff: 1, secondary: [] },
            { en: "Donkey Calf Raises", bg: "Повдигане на пръсти „магаре“", equip: "machine", diff: 2, secondary: [] },
            { en: "Smith Machine Calf Raise", bg: "Повдигане на пръсти на Смит", equip: "machine", diff: 1, secondary: [] }
        ],
        home: [
            { en: "Single-Leg Calf Raises on Step", bg: "Едностранни повдигания на пръсти на ръб", equip: "bodyweight", diff: 2, secondary: [] },
            { en: "Two-Leg Calf Raises", bg: "Двустранни повдигания на пръсти", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Isometric Calf Hold (Top Position)", bg: "Статично задържане на пръсти горе", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Wall Calf Stretch (Straight Leg)", bg: "Разтягане на прасец до стена (изпънат крак)", goal: "20–30 sec | 20–30 сек" },
            { en: "Wall Calf Stretch (Bent Knee)", bg: "Разтягане на прасец до стена (сгънато коляно)", goal: "20–30 sec | 20–30 сек" }
        ],
        stats: { strength: 65, volume: 80 },
        tips_en: [
            "Use full range of motion – full stretch and full contraction.",
            "Train calves 2–3 times per week for best growth.",
            "Pause for 1–2 seconds at the bottom to remove bounce."
        ],
        tips_bg: [
            "Работи в пълен обхват – пълно разтягане и пълна контракция.",
            "Тренирай прасците 2–3 пъти седмично за най-добър растеж.",
            "Прави кратка пауза долу, за да избегнеш подскачане."
        ],
        mistakes_en: [
            "Very fast partial reps with huge loads.",
            "Neglecting seated variations and soleus work.",
            "Inconsistent training frequency."
        ],
        mistakes_bg: [
            "Много бързи частични повторения с огромни килограми.",
            "Пренебрегване на седналите варианти и солеуса.",
            "Непостоянна честота на тренировка."
        ]
    },

    abs: {
        en: {
            title: "Abdominals",
            desc: "Rectus abdominis and surrounding core muscles responsible for trunk flexion and stability."
        },
        bg: {
            title: "Коремни мускули",
            desc: "Прав и напречен коремен мускул, както и околни стабилизатори, отговорни за сгъване и стабилност на торса."
        },
        risk: "Low Risk | Нисък риск",
        gym: [
            { en: "Cable Crunch", bg: "Коремно сгъване на скрипец", equip: "cable", diff: 2, secondary: [] },
            { en: "Hanging Leg Raise", bg: "Повдигане на крака от вис", equip: "bodyweight", diff: 3, secondary: ["hipflexors"] },
            { en: "Decline Bench Sit-up", bg: "Коремни преси на наклонена лежанка", equip: "machine", diff: 2, secondary: [] },
            { en: "Ab Wheel Rollout", bg: "Рол-аут с коремно колело", equip: "bodyweight", diff: 3, secondary: ["shoulders_front"] }
        ],
        home: [
            { en: "Crunches", bg: "Класически коремни преси", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Reverse Crunches", bg: "Обратни коремни преси", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Plank", bg: "Планк", equip: "bodyweight", diff: 1, secondary: [] },
            { en: "Side Plank", bg: "Страничен планк", equip: "bodyweight", diff: 2, secondary: [] },
            { en: "Dead Bug", bg: "Упражнение „мъртъв бръмбар“", equip: "bodyweight", diff: 1, secondary: [] }
        ],
        stretching: [
            { en: "Cobra Stretch", bg: "Кобра разтягане", goal: "20–30 sec | 20–30 сек" },
            { en: "Standing Side Bend Stretch", bg: "Разтягане на страничен корем прав", goal: "20–30 sec | 20–30 сек" }
        ],
        stats: { strength: 70, volume: 70 },
        tips_en: [
            "Focus on bracing, not just crunching – core must stabilise the spine.",
            "Train abs 2–4 times per week rather than daily high volume.",
            "Use both anti-extension (planks) and flexion (crunch) patterns."
        ],
        tips_bg: [
            "Фокусирай се върху „стягане“ на корема, не само върху сгъване.",
            "Тренирай корем 2–4 пъти седмично, а не всеки ден с огромен обем.",
            "Комбинирай анти-разгъващи упражнения (планк) и сгъвания (преси)."
        ],
        mistakes_en: [
            "Doing hundreds of fast crunches with poor form.",
            "Ignoring progressive overload (more resistance, not just more reps).",
            "Training abs only for aesthetics, neglecting core strength."
        ],
        mistakes_bg: [
            "Стотици бързи коремни преси с лоша техника.",
            "Липса на прогресивно натоварване (повече съпротивление, не само повторения).",
            "Фокус само върху визията, без грижа за силата в ядрото."
        ]
    }
};

// === GLOBAL STATE ===
let currentMuscle = null;
let currentMode = "gym";
let currentEquipFilter = "all";
let currentLanguage = "en";

// === TRANSLATIONS ===
const translations = {
    en: {
        "search-bar": "🔍 Search Exercise...",
        "view-front": "Front View",
        "view-back": "Back View",
        "tab-gym": "GYM",
        "tab-home": "HOME",
        "tab-info": "ANATOMY",
        "tab-stretch": "STRETCHING",
        "filter-all": "All",
        "filter-barbell": "🏋️ Barbell",
        "filter-dumbbell": "💪 Dumbbell",
        "filter-machine": "⚙️ Machine",
        "filter-bodyweight": "🤸 Bodyweight",
        "filter-cable": "🔗 Cable",
        "intro-text":
            "Click on a muscle in the model to view exercises, anatomy, and expert tips.",
        "capacity-title": "MUSCLE CAPACITY",
        "label-strength": "Strength",
        "label-hypertrophy": "Hypertrophy",
        "calc-title": "📊 One Rep Max (1RM) Calculator",
        "calc-btn": "CALCULATE",
        "tips-title": "EXPERT TIPS 💡",
        "mistakes-title": "COMMON MISTAKES ❌",
        "synergy-title": "SYNERGY MUSCLES 🔗",
        "select-muscle": "Select a muscle...",
        "select-exercise": "Select an exercise..."
    },
    bg: {
        "search-bar": "🔍 Търси упражнение...",
        "view-front": "Отпред",
        "view-back": "Отзад",
        "tab-gym": "ЗАЛА",
        "tab-home": "ВКЪЩИ",
        "tab-info": "АНАТОМИЯ",
        "tab-stretch": "СТРЕЧИНГ",
        "filter-all": "Всички",
        "filter-barbell": "🏋️ Лост",
        "filter-dumbbell": "💪 Дъмбели",
        "filter-machine": "⚙️ Машина",
        "filter-bodyweight": "🤸 Собствено тегло",
        "filter-cable": "🔗 Кабел",
        "intro-text":
            "Кликнете върху мускул от модела, за да видите упражнения, анатомия и съвети.",
        "capacity-title": "МУСКУЛЕН КАПАЦИТЕТ",
        "label-strength": "Сила",
        "label-hypertrophy": "Хипертрофия",
        "calc-title": "📊 Калкулатор Максимална Сила (1RM)",
        "calc-btn": "СМЕТНИ",
        "tips-title": "СЪВЕТИ НА ЕКСПЕРТИ 💡",
        "mistakes-title": "ТИПИЧНИ ГРЕШКИ ❌",
        "synergy-title": "СИНЕРГИЯ НА МУСКУЛИ 🔗",
        "select-muscle": "Изберете мускул...",
        "select-exercise": "Изберете упражнение..."
    }
};

// === HELPERS ===
// map muscle key -> SVG segment ids
const muscleToSegments = {
    chest: ["chest"],
    traps: ["traps", "traps_front"],
    shoulders_front: ["shoulders_front_l", "shoulders_front_r"],
    shoulders_side: ["shoulders_side_l", "shoulders_side_r"],
    shoulders_rear: ["shoulders_rear_l", "shoulders_rear_r"],
    biceps: ["biceps_l", "biceps_r"],
    triceps: ["triceps_l", "triceps_r"],
    forearms: ["forearms_l", "forearms_r"],
    abs: ["abs"],
    quads: ["quads_l", "quads_r"],
    hamstrings: ["hamstrings_l", "hamstrings_r"],
    calves: ["calves_l", "calves_r", "calves_back_l", "calves_back_r"],
    lats: ["lats_l", "lats_r"],
    lowerback: ["lowerback"],
    glutes: ["glutes"]
};

function clearAllHighlights() {
    const segments = document.querySelectorAll(".muscle-segment");
    segments.forEach((seg) => {
        seg.classList.remove("active-muscle");
        seg.classList.remove("synergy-muscle");
    });
}

function highlightMuscles(muscleKeys, className) {
    muscleKeys.forEach((key) => {
        const ids = muscleToSegments[key] || [];
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.classList.add(className);
        });
    });
}

function getText(key) {
    const dict = translations[currentLanguage] || translations.en;
    return dict[key] || (translations.en && translations.en[key]) || "";
}

function applyTranslations() {
    const langDict = translations[currentLanguage] || translations.en;
    Object.keys(langDict).forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        if (id === "search-bar") {
            el.placeholder = getText(id);
        } else if (id === "calc-btn") {
            el.textContent = getText(id);
        } else {
            el.textContent = getText(id);
        }
    });

    const tipsContainer = document.getElementById("tips-container");
    const mistakesContainer = document.getElementById("mistakes-container");
    const synergyContainer = document.getElementById("synergy-container");

    if (tipsContainer && !currentMuscle)
        tipsContainer.textContent = getText("select-muscle");
    if (mistakesContainer && !currentMuscle)
        mistakesContainer.textContent = getText("select-muscle");
    if (synergyContainer && !currentMuscle)
        synergyContainer.textContent = getText("select-exercise");
}

function renderStats(muscle) {
    const statsBox = document.getElementById("stats-container");
    if (!statsBox || !muscle || !muscle.stats) {
        if (statsBox) statsBox.style.display = "none";
        return;
    }

    statsBox.style.display = "block";
    const strengthBar = document.getElementById("bar-strength");
    const volumeBar = document.getElementById("bar-volume");

    if (strengthBar)
        strengthBar.style.width = (muscle.stats.strength || 0) + "%";
    if (volumeBar) volumeBar.style.width = (muscle.stats.volume || 0) + "%";
}

function renderSidebars(muscle) {
    const tipsContainer = document.getElementById("tips-container");
    const mistakesContainer = document.getElementById("mistakes-container");
    const synergyContainer = document.getElementById("synergy-container");

    if (!muscle) {
        if (tipsContainer) tipsContainer.textContent = getText("select-muscle");
        if (mistakesContainer)
            mistakesContainer.textContent = getText("select-muscle");
        if (synergyContainer)
            synergyContainer.textContent = getText("select-exercise");
        return;
    }

    const tips =
        currentLanguage === "bg" ? muscle.tips_bg || [] : muscle.tips_en || [];
    const mistakes =
        currentLanguage === "bg"
            ? muscle.mistakes_bg || []
            : muscle.mistakes_en || [];

    if (tipsContainer) {
        if (tips.length) {
            tipsContainer.innerHTML =
                "<ul>" + tips.map((t) => `<li>${t}</li>`).join("") + "</ul>";
        } else {
            tipsContainer.textContent = getText("select-muscle");
        }
    }

    if (mistakesContainer) {
        if (mistakes.length) {
            mistakesContainer.innerHTML =
                "<ul>" + mistakes.map((t) => `<li>${t}</li>`).join("") + "</ul>";
        } else {
            mistakesContainer.textContent = getText("select-muscle");
        }
    }

    if (synergyContainer) {
        synergyContainer.textContent = getText("select-exercise");
    }
}

function renderExercises() {
    const extraInfo = document.getElementById("extra-info");
    if (!extraInfo) return;

    if (!currentMuscle || !data[currentMuscle]) {
        extraInfo.style.display = "none";
        return;
    }

    const muscle = data[currentMuscle];
    let list = [];

    if (currentMode === "gym") {
        list = muscle.gym || [];
    } else if (currentMode === "home") {
        list = muscle.home || [];
    } else if (currentMode === "stretch") {
        list = muscle.stretching || [];
    }

    if (
        (currentMode === "gym" || currentMode === "home") &&
        currentEquipFilter !== "all"
    ) {
        list = list.filter((ex) => ex.equip === currentEquipFilter);
    }

    extraInfo.style.display = "block";

    if (!list.length) {
        extraInfo.innerHTML = `<p>${getText("select-exercise")}</p>`;
        const synergyContainer = document.getElementById("synergy-container");
        if (synergyContainer) {
            synergyContainer.textContent = getText("select-exercise");
        }
        return;
    }

    let titleText = "";
    if (currentMode === "gym") titleText = getText("tab-gym");
    else if (currentMode === "home") titleText = getText("tab-home");
    else if (currentMode === "stretch") titleText = getText("tab-stretch");

    let html = `<h3>${titleText}</h3><ul class="exercise-list">`;
    list.forEach((ex) => {
        const name = currentLanguage === "bg" ? ex.bg : ex.en;
        const secondary = (ex.secondary || []).join(",");
        const diff = ex.diff || 1;
        html += `<li class="exercise-item" data-secondary="${secondary}" data-diff="${diff}">
            <span class="exercise-name">${name}</span>
            <span class="tag">${ex.equip}</span>
            <span class="difficulty">D${diff}</span>
        </li>`;
    });
    html += "</ul>";
    extraInfo.innerHTML = html;

    const items = extraInfo.querySelectorAll(".exercise-item");
    const synergyContainer = document.getElementById("synergy-container");
    items.forEach((item) => {
        item.addEventListener("click", () => {
            if (!synergyContainer) return;

            // визуален активен exercise
            items.forEach((i) => i.classList.remove("active-ex"));
            item.classList.add("active-ex");

            // оцветяване на синергичните мускули
            clearAllHighlights();
            if (currentMuscle) {
                highlightMuscles([currentMuscle], "active-muscle");
            }

            const secondary = item.getAttribute("data-secondary") || "";
            const muscles = secondary
                .split(",")
                .map((m) => m.trim())
                .filter(Boolean);
            if (!muscles.length) {
                synergyContainer.textContent = getText("select-exercise");
            } else {
                synergyContainer.textContent = muscles.join(", ");
                highlightMuscles(muscles, "synergy-muscle");
            }
        });
    });
}

// === EVENT HANDLERS CALLED FROM HTML ===
function selectMuscle(muscleKey) {
    if (!data[muscleKey]) return;
    currentMuscle = muscleKey;

    // highlight избрания мускул и чистим синергиите
    clearAllHighlights();
    highlightMuscles([muscleKey], "active-muscle");

    const muscle = data[muscleKey];
    const infoCard = document.getElementById("info-card");
    if (infoCard) {
        const langBlock =
            muscle[currentLanguage] || muscle.en || muscle.bg || {};
        const title = langBlock.title || "";
        const desc = langBlock.desc || "";
        const risk = muscle.risk || "";
        infoCard.innerHTML = `<h1>${title}</h1><p>${desc}</p><p>${risk}</p>`;
    }

    renderStats(muscle);
    renderSidebars(muscle);
    renderExercises();
}

function setMode(mode) {
    currentMode = mode;

    const btnGym = document.getElementById("btn-gym");
    const btnHome = document.getElementById("btn-home");
    const btnInfo = document.getElementById("btn-info");
    const btnStretch = document.getElementById("btn-stretch");

    [btnGym, btnHome, btnInfo, btnStretch].forEach((btn) => {
        if (btn) btn.classList.remove("active");
    });

    if (mode === "gym" && btnGym) btnGym.classList.add("active");
    if (mode === "home" && btnHome) btnHome.classList.add("active");
    if (mode === "info" && btnInfo) btnInfo.classList.add("active");
    if (mode === "stretch" && btnStretch) btnStretch.classList.add("active");

    const filters = document.getElementById("equipment-filters");
    const calc = document.getElementById("calculator-container");
    const extraInfo = document.getElementById("extra-info");

    if (filters) {
        filters.style.display =
            mode === "gym" || mode === "home" ? "flex" : "none";
    }
    if (calc) {
        calc.style.display = mode === "gym" ? "block" : "none";
    }

    if (mode === "info") {
        if (extraInfo) {
            extraInfo.style.display = "block";
            extraInfo.innerHTML = `<p>${getText("intro-text")}</p>`;
        }
    } else if (currentMuscle) {
        renderExercises();
    }
}

function filterEquip(equip) {
    currentEquipFilter = equip;

    const ids = [
        "filter-all",
        "filter-barbell",
        "filter-dumbbell",
        "filter-machine",
        "filter-bodyweight",
        "filter-cable"
    ];
    ids.forEach((id) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.classList.remove("active");
    });

    const activeId = "filter-" + equip;
    const activeBtn = document.getElementById(activeId);
    if (activeBtn) activeBtn.classList.add("active");

    if (currentMuscle) {
        renderExercises();
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "bg" : "en";
    applyTranslations();

    if (currentMuscle && data[currentMuscle]) {
        const muscle = data[currentMuscle];
        renderStats(muscle);
        renderSidebars(muscle);
        renderExercises();
    }
}

function toggleTheme() {
    const body = document.body;
    if (!body) return;
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
}

function calculate1RM() {
    const weightInput = document.getElementById("calc-weight");
    const repsInput = document.getElementById("calc-reps");
    const resultEl = document.getElementById("1rm-result");
    if (!weightInput || !repsInput || !resultEl) return;

    const weight = parseFloat(weightInput.value);
    const reps = parseInt(repsInput.value, 10);
    if (!weight || !reps || reps <= 0) {
        const baseText =
            currentLanguage === "bg"
                ? "Вашият 1RM: -- кг"
                : "Your 1RM: -- kg";
        resultEl.textContent = baseText;
        return;
    }

    const oneRM = Math.round(weight * (1 + reps / 30));
    const label = currentLanguage === "bg" ? "Вашият 1RM:" : "Your 1RM:";
    resultEl.textContent = `${label} ${oneRM} kg`;
}

function searchExercises() {
    const searchInput = document.getElementById("search-bar");
    const extraInfo = document.getElementById("extra-info");
    if (!searchInput || !extraInfo) return;

    const term = searchInput.value.trim().toLowerCase();
    if (!term) {
        if (currentMuscle) {
            renderExercises();
        } else {
            extraInfo.style.display = "none";
        }
        return;
    }

    const results = [];
    Object.keys(data).forEach((muscleKey) => {
        const muscle = data[muscleKey];
        ["gym", "home"].forEach((mode) => {
            (muscle[mode] || []).forEach((ex) => {
                const enName = (ex.en || "").toLowerCase();
                const bgName = (ex.bg || "").toLowerCase();
                if (enName.includes(term) || bgName.includes(term)) {
                    results.push({ muscleKey, mode, ex });
                }
            });
        });
    });

    extraInfo.style.display = "block";

    if (!results.length) {
        extraInfo.innerHTML =
            currentLanguage === "bg"
                ? "<p>Няма намерени упражнения.</p>"
                : "<p>No exercises found.</p>";
        return;
    }

    let html =
        currentLanguage === "bg"
            ? '<h3>Резултати от търсене</h3><ul class="exercise-list">'
            : '<h3>Search Results</h3><ul class="exercise-list">';

    results.forEach((r) => {
        const name = currentLanguage === "bg" ? r.ex.bg : r.ex.en;
        html += `<li>${name} <span class="tag">${r.mode}</span></li>`;
    });
    html += "</ul>";
    extraInfo.innerHTML = html;
}

// === INITIALISE ON LOAD ===
document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    const calc = document.getElementById("calculator-container");
    if (calc) calc.style.display = "block";
});
