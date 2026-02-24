let currentMuscle = null;
let currentMode = 'gym';
let currentEquipFilter = 'all';
let fatiguedMuscles = {}; 
let timerInterval;

// ===== COMPLETE DATABASE WITH ALL EXERCISES IN ENGLISH =====
const data = {
    chest: {
        title: "Chest (Pectoralis Major)",
        desc: "Primary muscle group for horizontal pushing movements. Consists of Pectoralis Major and Pectoralis Minor. Essential for upper body strength and power.",
        risk: "Medium Risk",
        gym: [
            { name: "Barbell Bench Press", equip: "barbell", diff: 3, secondary: ["triceps", "shoulders_front"] },
            { name: "Incline Barbell Press", equip: "barbell", diff: 3, secondary: ["shoulders_front"] },
            { name: "Decline Barbell Press", equip: "barbell", diff: 2, secondary: ["triceps"] },
            { name: "Dumbbell Bench Press", equip: "dumbbell", diff: 2, secondary: ["triceps"] },
            { name: "Incline Dumbbell Press", equip: "dumbbell", diff: 2, secondary: ["shoulders_front"] },
            { name: "Dumbbell Flyes", equip: "dumbbell", diff: 2, secondary: [] },
            { name: "Chest Press Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Cable Crossover", equip: "cable", diff: 1, secondary: [] },
            { name: "Pec Deck Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Push-ups", equip: "bodyweight", diff: 2, secondary: ["triceps", "shoulders_front"] },
            { name: "Incline Push-ups", equip: "bodyweight", diff: 1, secondary: [] },
            { name: "Decline Push-ups", equip: "bodyweight", diff: 3, secondary: [] },
            { name: "Cable Machine Squeeze", equip: "cable", diff: 2, secondary: [] },
        ],
        home: [
            { name: "Standard Push-ups", equip: "bodyweight", diff: 1, secondary: ["triceps"] },
            { name: "Wide Push-ups", equip: "bodyweight", diff: 2, secondary: [] },
            { name: "Narrow Push-ups", equip: "bodyweight", diff: 2, secondary: ["triceps"] },
            { name: "Archer Push-ups", equip: "bodyweight", diff: 3, secondary: [] },
        ],
        stretching: [
            { name: "Chest Doorway Stretch", goal: "30 sec" },
            { name: "Reverse Chest Stretch", goal: "45 sec" },
        ],
        stats: { strength: 90, volume: 85 },
        tips: [
            "Retract and depress scapula during movement.",
            "Keep elbows at 45 degrees from body.",
            "Maintain full range of motion.",
            "Control the eccentric (lowering) phase.",
            "Mind the bar path - should be vertical."
        ],
        mistakes: [
            "Bouncing the bar off chest.",
            "Flaring elbows excessively.",
            "Lack of control during descent.",
            "Insufficient range of motion.",
            "Uneven shoulder height during press."
        ]
    },

    traps: {
        title: "Trapezius",
        desc: "Large muscle group on upper back, consisting of three parts: upper, middle, and lower trapezius. Important for shoulder stability and posture.",
        risk: "Low Risk",
        gym: [
            { name: "Barbell Shrugs", equip: "barbell", diff: 1, secondary: [] },
            { name: "Dumbbell Shrugs", equip: "dumbbell", diff: 1, secondary: [] },
            { name: "Machine Shrugs", equip: "machine", diff: 1, secondary: [] },
            { name: "Hanging Shrugs", equip: "bodyweight", diff: 2, secondary: ["forearms"] },
            { name: "Farmer's Walk", equip: "dumbbell", diff: 1, secondary: ["forearms"] },
            { name: "Lateral Dumbbell Raise", equip: "dumbbell", diff: 1, secondary: ["shoulders_side"] },
            { name: "Smith Machine Shrugs", equip: "machine", diff: 1, secondary: [] },
        ],
        home: [
            { name: "Loaded Backpack Shrugs", equip: "bodyweight", diff: 1, secondary: [] },
        ],
        stretching: [
            { name: "Neck Side Stretch", goal: "20 sec" },
            { name: "Cross-Body Trap Stretch", goal: "30 sec" },
        ],
        stats: { strength: 80, volume: 70 },
        tips: [
            "Move vertically, do not rotate shoulders.",
            "Hold for a second at the top contraction.",
            "Use full range of motion.",
            "Keep shoulders relaxed in the stretched position."
        ],
        mistakes: [
            "Using excessive weight with poor form.",
            "Rotating shoulders - invalid technique.",
            "Insufficient contraction at the top.",
            "Using momentum instead of control."
        ]
    },

    shoulders_front: {
        title: "Front Deltoid",
        desc: "Front part of the deltoid muscle. Active in pressing movements and front raises. Key for shoulder width and pressing power.",
        risk: "Medium Risk",
        gym: [
            { name: "Military Press", equip: "barbell", diff: 3, secondary: ["triceps", "shoulders_side"] },
            { name: "Dumbbell Military Press", equip: "dumbbell", diff: 2, secondary: ["triceps"] },
            { name: "Shoulder Press Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Cable Shoulder Press", equip: "cable", diff: 2, secondary: [] },
            { name: "Barbell Front Raise", equip: "barbell", diff: 2, secondary: [] },
            { name: "Dumbbell Front Raise", equip: "dumbbell", diff: 1, secondary: [] },
            { name: "Cable Front Raise", equip: "cable", diff: 1, secondary: [] },
            { name: "Machine Front Raise", equip: "machine", diff: 1, secondary: [] },
            { name: "Kettlebell Thruster", equip: "dumbbell", diff: 3, secondary: ["quads"] },
        ],
        home: [
            { name: "Pike Push-ups", equip: "bodyweight", diff: 2, secondary: [] },
            { name: "Bodyweight Shoulder Press", equip: "bodyweight", diff: 2, secondary: [] },
        ],
        stretching: [
            { name: "Hands Behind Back Stretch", goal: "30 sec" },
            { name: "Overhead Shoulder Stretch", goal: "30 sec" },
        ],
        stats: { strength: 85, volume: 80 },
        tips: [
            "Engage core for stability.",
            "Press fully overhead until elbows lock out.",
            "Control the descent phase.",
            "Keep shoulders packed and engaged.",
            "Maintain neutral spine throughout."
        ],
        mistakes: [
            "Arching the back excessively.",
            "Insufficient depth in movement.",
            "Using too much weight.",
            "Pressing forward instead of straight up.",
            "Poor core engagement."
        ]
    },

    shoulders_side: {
        title: "Lateral Deltoid",
        desc: "Side part of the deltoid. Responsible for shoulder width. Most isolated by lateral raise variations.",
        risk: "Medium Risk",
        gym: [
            { name: "Dumbbell Lateral Raise", equip: "dumbbell", diff: 1, secondary: [] },
            { name: "Cable Lateral Raise", equip: "cable", diff: 1, secondary: [] },
            { name: "Machine Lateral Raise", equip: "machine", diff: 1, secondary: [] },
            { name: "Smith Machine Lateral Raise", equip: "machine", diff: 1, secondary: [] },
            { name: "Plate Lateral Raise", equip: "dumbbell", diff: 2, secondary: [] },
        ],
        home: [
            { name: "Resistance Band Lateral Raise", equip: "bodyweight", diff: 1, secondary: [] },
        ],
        stretching: [
            { name: "Overhead Shoulder Stretch", goal: "30 sec" },
        ],
        stats: { strength: 70, volume: 75 },
        tips: [
            "Slight bend in elbows (about 15 degrees).",
            "Elbows should reach higher than hands.",
            "Control the eccentric phase.",
            "Feel the squeeze at the top.",
            "No momentum - strict form."
        ],
        mistakes: [
            "Using back instead of shoulders.",
            "Using excessive weight.",
            "Insufficient range of motion.",
            "Momentum-driven movement.",
            "Elbows too high or too low."
        ]
    },

    shoulders_rear: {
        title: "Rear Deltoid",
        desc: "Back part of the deltoid. Important for shoulder balance and posture. Often underdeveloped.",
        risk: "Low Risk",
        gym: [
            { name: "Reverse Pec Deck", equip: "machine", diff: 1, secondary: [] },
            { name: "Bent-Over Dumbbell Raise", equip: "dumbbell", diff: 1, secondary: [] },
            { name: "Cable Reverse Flyes", equip: "cable", diff: 1, secondary: [] },
            { name: "Bent-Over Barbell Raise", equip: "barbell", diff: 2, secondary: [] },
            { name: "Machine Rear Delt Fly", equip: "machine", diff: 1, secondary: [] },
        ],
        home: [
            { name: "Reverse Flyes (Bodyweight)", equip: "bodyweight", diff: 2, secondary: [] },
        ],
        stretching: [
            { name: "Horizontal Shoulder Stretch", goal: "30 sec" },
        ],
        stats: { strength: 65, volume: 70 },
        tips: [
            "Elbows at shoulder height.",
            "Focus on scapula retraction.",
            "Control the movement throughout.",
            "Squeeze rear delts at the top.",
            "Avoid using traps."
        ],
        mistakes: [
            "Using shoulders instead of elbows.",
            "Using momentum.",
            "Too much weight.",
            "Not achieving full contraction.",
            "Rounding the back."
        ]
    },

    lats: {
        title: "Latissimus Dorsi (Lats)",
        desc: "Largest back muscle. Responsible for vertical pulling and arm adduction. Critical for lat width and strength.",
        risk: "Low Risk",
        gym: [
            { name: "Pull-ups", equip: "bodyweight", diff: 3, secondary: ["biceps"] },
            { name: "Weighted Pull-ups", equip: "bodyweight", diff: 4, secondary: ["biceps"] },
            { name: "Chin-ups", equip: "bodyweight", diff: 2, secondary: ["biceps"] },
            { name: "Lat Pulldown", equip: "cable", diff: 1, secondary: ["biceps"] },
            { name: "Machine Pulldown", equip: "machine", diff: 1, secondary: [] },
            { name: "Single-Arm Dumbbell Row", equip: "dumbbell", diff: 2, secondary: [] },
            { name: "Barbell Bent-Over Row", equip: "barbell", diff: 3, secondary: ["lowerback"] },
            { name: "Machine Row", equip: "machine", diff: 1, secondary: [] },
            { name: "Seated Cable Row", equip: "cable", diff: 1, secondary: [] },
            { name: "T-Bar Row", equip: "barbell", diff: 2, secondary: ["lowerback"] },
            { name: "Incline Machine Row", equip: "machine", diff: 1, secondary: [] },
            { name: "Underhand Lat Pulldown", equip: "cable", diff: 1, secondary: ["biceps"] },
        ],
        home: [
            { name: "Inverted Row", equip: "bodyweight", diff: 2, secondary: [] },
        ],
        stretching: [
            { name: "Child's Pose", goal: "60 sec" },
            { name: "Latissimus Stretch", goal: "45 sec" },
        ],
        stats: { strength: 95, volume: 90 },
        tips: [
            "Pull with elbows, not hands.",
            "Retract scapula at the end of movement.",
            "Control the eccentric phase.",
            "Full range of motion is essential.",
            "Feel the stretch at the top."
        ],
        mistakes: [
            "Swinging the body.",
            "Pulling with hands instead of elbows.",
            "Insufficient contraction.",
            "Using arms too much.",
            "Not achieving full range."
        ]
    },

    lowerback: {
        title: "Erector Spinae (Lower Back)",
        desc: "Muscles that extend the spine. Important for stability and proper posture. High injury risk if done incorrectly.",
        risk: "High Risk",
        gym: [
            { name: "Romanian Deadlift", equip: "barbell", diff: 3, secondary: ["hamstrings"] },
            { name: "Dumbbell Romanian Deadlift", equip: "dumbbell", diff: 2, secondary: ["hamstrings"] },
            { name: "Back Extension Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Hyperextension", equip: "machine", diff: 2, secondary: ["hamstrings"] },
            { name: "Good Morning", equip: "barbell", diff: 3, secondary: ["hamstrings"] },
            { name: "Rack Pulls", equip: "barbell", diff: 2, secondary: ["hamstrings"] },
        ],
        home: [
            { name: "Superman Hold", equip: "bodyweight", diff: 1, secondary: [] },
            { name: "Single-Leg Glute Bridge", equip: "bodyweight", diff: 2, secondary: ["glutes"] },
        ],
        stretching: [
            { name: "Seated Forward Fold", goal: "45 sec" },
            { name: "Cat-Cow Stretch", goal: "30 sec" },
        ],
        stats: { strength: 80, volume: 70 },
        tips: [
            "NEUTRAL SPINE POSITION - CRITICAL!",
            "Proper breathing during effort.",
            "Avoid rounded back at all costs.",
            "Hinge at hips, not lower back.",
            "Start light to master form."
        ],
        mistakes: [
            "ROUNDED BACK - MOST CRITICAL ERROR!",
            "Using too much weight.",
            "Fast movements without control.",
            "Poor breathing pattern.",
            "Allowing knees to extend excessively."
        ]
    },

    biceps: {
        title: "Biceps",
        desc: "Primary elbow flexor muscle. Consists of two heads. Aesthetic muscle that also contributes to pulling strength.",
        risk: "Low Risk",
        gym: [
            { name: "EZ Bar Curl", equip: "barbell", diff: 2, secondary: [] },
            { name: "Dumbbell Curl", equip: "dumbbell", diff: 1, secondary: [] },
            { name: "Cable Curl", equip: "cable", diff: 1, secondary: [] },
            { name: "Hammer Curl", equip: "dumbbell", diff: 1, secondary: ["forearms"] },
            { name: "Scott Bench Curl", equip: "barbell", diff: 2, secondary: [] },
            { name: "Reverse Curl", equip: "barbell", diff: 2, secondary: ["forearms"] },
            { name: "Cable Concentration Curl", equip: "cable", diff: 1, secondary: [] },
            { name: "Machine Bicep Curl", equip: "machine", diff: 1, secondary: [] },
            { name: "Incline Dumbbell Curl", equip: "dumbbell", diff: 2, secondary: [] },
        ],
        home: [
            { name: "Resistance Band Curl", equip: "bodyweight", diff: 1, secondary: [] },
        ],
        stretching: [
            { name: "Bicep Wall Stretch", goal: "30 sec" },
        ],
        stats: { strength: 65, volume: 95 },
        tips: [
            "Keep elbows fixed to sides.",
            "Full range of motion essential.",
            "Control the eccentric phase.",
            "Feel the contraction at the top.",
            "No swinging or momentum."
        ],
        mistakes: [
            "Using back for momentum.",
            "Elbows away from body.",
            "Insufficient range of motion.",
            "Too much weight.",
            "Partial reps."
        ]
    },

    triceps: {
        title: "Triceps",
        desc: "Primary elbow extensor. Makes up 2/3 of arm mass. Three heads: long, lateral, and medial.",
        risk: "Low Risk",
        gym: [
            { name: "French Press", equip: "barbell", diff: 2, secondary: [] },
            { name: "Dumbbell French Press", equip: "dumbbell", diff: 2, secondary: [] },
            { name: "Rope Pushdown", equip: "cable", diff: 1, secondary: [] },
            { name: "Tricep Dips", equip: "bodyweight", diff: 2, secondary: ["chest"] },
            { name: "Weighted Dips", equip: "bodyweight", diff: 3, secondary: ["chest"] },
            { name: "Overhead Dumbbell Extension", equip: "dumbbell", diff: 2, secondary: [] },
            { name: "Tricep Rope Extension", equip: "cable", diff: 1, secondary: [] },
            { name: "Machine Tricep Extension", equip: "machine", diff: 1, secondary: [] },
            { name: "Close Grip Bench Press", equip: "barbell", diff: 3, secondary: ["chest"] },
            { name: "Skull Crushers", equip: "barbell", diff: 2, secondary: [] },
        ],
        home: [
            { name: "Diamond Push-ups", equip: "bodyweight", diff: 2, secondary: ["chest"] },
            { name: "Tricep Chair Dips", equip: "bodyweight", diff: 2, secondary: [] },
        ],
        stretching: [
            { name: "Overhead Tricep Stretch", goal: "30 sec" },
        ],
        stats: { strength: 75, volume: 90 },
        tips: [
            "Keep elbows tucked to body.",
            "Full range of motion.",
            "Control the movement.",
            "Squeeze triceps at the top.",
            "No flaring elbows."
        ],
        mistakes: [
            "Elbows flaring out.",
            "Using momentum.",
            "Too much weight.",
            "Insufficient contraction.",
            "Elbows moving away from body."
        ]
    },

    forearms: {
        title: "Forearms",
        desc: "Muscles of forearm flexors and extensors. Important for grip strength and wrist stability. Often overlooked.",
        risk: "Low Risk",
        gym: [
            { name: "Farmer's Walk", equip: "dumbbell", diff: 1, secondary: ["traps"] },
            { name: "Wrist Curl", equip: "dumbbell", diff: 1, secondary: [] },
            { name: "Reverse Wrist Curl", equip: "dumbbell", diff: 1, secondary: [] },
            { name: "Cable Wrist Curl", equip: "cable", diff: 1, secondary: [] },
            { name: "Dead Hang", equip: "bodyweight", diff: 1, secondary: ["lats", "biceps"] },
            { name: "Barbell Wrist Curl", equip: "barbell", diff: 1, secondary: [] },
            { name: "Plate Pinch Hold", equip: "dumbbell", diff: 2, secondary: [] },
        ],
        home: [
            { name: "Pull-up Bar Hang", equip: "bodyweight", diff: 1, secondary: [] },
        ],
        stretching: [
            { name: "Forearm Stretch (Palms Down)", goal: "20 sec" },
            { name: "Forearm Stretch (Palms Up)", goal: "20 sec" },
        ],
        stats: { strength: 70, volume: 60 },
        tips: [
            "Squeeze hard for extended time.",
            "Full range of motion.",
            "Consistent practice for grip development.",
            "Gradual progression.",
            "Endurance training for forearms."
        ],
        mistakes: [
            "Wrist strain from overload.",
            "Insufficient range.",
            "Ignoring grip strength.",
            "Too much too soon.",
            "Improper wrist position."
        ]
    },

    abs: {
        title: "Abdominals",
        desc: "Core muscles including rectus abdominis and transverse abdominis. Responsible for flexion and rotation. Essential for stability.",
        risk: "Low Risk",
        gym: [
            { name: "Cable Crunch", equip: "cable", diff: 1, secondary: [] },
            { name: "Ab Crunch Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Hanging Leg Raise", equip: "bodyweight", diff: 3, secondary: [] },
            { name: "Cable Wood Chop", equip: "cable", diff: 2, secondary: [] },
            { name: "Ab Wheel Rollout", equip: "machine", diff: 3, secondary: [] },
            { name: "Rope Crunch", equip: "cable", diff: 1, secondary: [] },
            { name: "Machine Ab Crunch", equip: "machine", diff: 1, secondary: [] },
        ],
        home: [
            { name: "Crunches", equip: "bodyweight", diff: 1, secondary: [] },
            { name: "Plank", equip: "bodyweight", diff: 1, secondary: [] },
            { name: "Vertical Leg Raise", equip: "bodyweight", diff: 2, secondary: [] },
            { name: "Russian Twists", equip: "bodyweight", diff: 2, secondary: [] },
            { name: "Bicycle Crunches", equip: "bodyweight", diff: 2, secondary: [] },
        ],
        stretching: [
            { name: "Cobra Pose", goal: "30 sec" },
        ],
        stats: { strength: 80, volume: 75 },
        tips: [
            "Breathe during flexion and exhalation.",
            "Avoid pulling on the neck.",
            "Focus on contraction.",
            "Slow and controlled movements.",
            "Full range of motion."
        ],
        mistakes: [
            "Pulling on neck.",
            "Too fast movement.",
            "Using momentum.",
            "Insufficient range.",
            "Not breathing properly."
        ]
    },

    quads: {
        title: "Quadriceps",
        desc: "Four muscles on front of thigh. Largest leg muscle group. Crucial for leg strength and athletic performance.",
        risk: "High Risk",
        gym: [
            { name: "Barbell Back Squat", equip: "barbell", diff: 3, secondary: ["glutes"] },
            { name: "Barbell Front Squat", equip: "barbell", diff: 3, secondary: [] },
            { name: "Leg Press", equip: "machine", diff: 2, secondary: ["glutes"] },
            { name: "Bulgarian Split Squat", equip: "dumbbell", diff: 2, secondary: ["glutes"] },
            { name: "Leg Extension Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Goblet Squat", equip: "dumbbell", diff: 2, secondary: [] },
            { name: "Smith Machine Squat", equip: "machine", diff: 2, secondary: [] },
            { name: "V-Squat Machine", equip: "machine", diff: 2, secondary: [] },
            { name: "Hack Squat", equip: "machine", diff: 2, secondary: [] },
        ],
        home: [
            { name: "Bodyweight Squat", equip: "bodyweight", diff: 1, secondary: [] },
            { name: "Pistol Squat", equip: "bodyweight", diff: 4, secondary: ["hamstrings"] },
            { name: "Step-ups", equip: "bodyweight", diff: 2, secondary: ["glutes"] },
        ],
        stretching: [
            { name: "Quadriceps Stretch", goal: "45 sec" },
            { name: "Butterfly Stretch", goal: "60 sec" },
        ],
        stats: { strength: 100, volume: 95 },
        tips: [
            "Pressure through entire foot.",
            "Knees should not exceed toes significantly.",
            "Full range of motion.",
            "Chest up, neutral spine.",
            "Control the descent."
        ],
        mistakes: [
            "Knees caving inward.",
            "Rounded back.",
            "Weight on toes instead of heels.",
            "Insufficient depth.",
            "Poor knee alignment."
        ]
    },

    glutes: {
        title: "Glutes",
        desc: "Largest muscle in the body. Responsible for hip extension and jumping. Key for performance and aesthetics.",
        risk: "Low Risk",
        gym: [
            { name: "Barbell Hip Thrust", equip: "barbell", diff: 2, secondary: ["hamstrings"] },
            { name: "Dumbbell Hip Thrust", equip: "dumbbell", diff: 2, secondary: [] },
            { name: "Hip Thrust Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Barbell Romanian Deadlift", equip: "barbell", diff: 3, secondary: ["hamstrings"] },
            { name: "Dumbbell Romanian Deadlift", equip: "dumbbell", diff: 2, secondary: [] },
            { name: "Leg Press", equip: "machine", diff: 2, secondary: ["quads"] },
            { name: "Hip Abduction Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Cable Kickback", equip: "cable", diff: 1, secondary: [] },
            { name: "Smith Machine Squat", equip: "machine", diff: 2, secondary: ["quads"] },
        ],
        home: [
            { name: "Glute Bridge", equip: "bodyweight", diff: 1, secondary: [] },
            { name: "Single-Leg Glute Bridge", equip: "bodyweight", diff: 2, secondary: [] },
            { name: "Step-ups", equip: "bodyweight", diff: 2, secondary: ["quads"] },
            { name: "Donkey Kicks", equip: "bodyweight", diff: 1, secondary: [] },
        ],
        stretching: [
            { name: "Pigeon Pose", goal: "45 sec" },
            { name: "Glute Stretch (Sitting)", goal: "30 sec" },
        ],
        stats: { strength: 100, volume: 85 },
        tips: [
            "Squeeze hard at the top.",
            "Full hip extension.",
            "Feel the burn in glutes.",
            "Control the movement.",
            "Mind the tempo."
        ],
        mistakes: [
            "Excessive lower back arch.",
            "Using quads instead of glutes.",
            "Insufficient contraction.",
            "Too much weight too soon.",
            "Poor mind-muscle connection."
        ]
    },

    hamstrings: {
        title: "Hamstrings",
        desc: "Back of thigh muscles. Critical for leg balance, knee stability, and injury prevention. Often underdeveloped.",
        risk: "Medium Risk",
        gym: [
            { name: "Romanian Deadlift", equip: "barbell", diff: 3, secondary: ["lowerback"] },
            { name: "Leg Curl Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Lying Leg Curl", equip: "machine", diff: 1, secondary: [] },
            { name: "Seated Leg Curl", equip: "machine", diff: 1, secondary: [] },
            { name: "Nordic Hamstring Curl", equip: "bodyweight", diff: 3, secondary: [] },
            { name: "Dumbbell Romanian Deadlift", equip: "dumbbell", diff: 2, secondary: [] },
            { name: "Good Morning", equip: "barbell", diff: 3, secondary: ["lowerback"] },
            { name: "Glute-Ham Raise", equip: "machine", diff: 3, secondary: [] },
        ],
        home: [
            { name: "Nordic Curl (Assisted)", equip: "bodyweight", diff: 2, secondary: [] },
        ],
        stretching: [
            { name: "Forward Bend", goal: "45 sec" },
            { name: "Seated Hamstring Stretch", goal: "45 sec" },
        ],
        stats: { strength: 85, volume: 80 },
        tips: [
            "Push hips back - key for proper form.",
            "Maintain neutral spine.",
            "Control the eccentric.",
            "Full range of motion.",
            "Proper breathing."
        ],
        mistakes: [
            "Rounding the back.",
            "Using lower back instead of hamstrings.",
            "Insufficient range.",
            "Too much weight.",
            "Poor knee position."
        ]
    },

    calves: {
        title: "Calves",
        desc: "Muscles on back of lower leg. Two main muscles: gastrocnemius and soleus. Often requires high reps for growth.",
        risk: "Low Risk",
        gym: [
            { name: "Calf Press Machine", equip: "machine", diff: 1, secondary: [] },
            { name: "Standing Calf Raise", equip: "machine", diff: 1, secondary: [] },
            { name: "Seated Calf Raise", equip: "machine", diff: 1, secondary: [] },
            { name: "Dumbbell Calf Raise", equip: "dumbbell", diff: 1, secondary: [] },
            { name: "Barbell Calf Raise", equip: "barbell", diff: 1, secondary: [] },
            { name: "Smith Machine Calf Raise", equip: "machine", diff: 1, secondary: [] },
            { name: "Leg Press Calf Raise", equip: "machine", diff: 1, secondary: [] },
        ],
        home: [
            { name: "Bodyweight Calf Raise", equip: "bodyweight", diff: 1, secondary: [] },
            { name: "Single-Leg Calf Raise", equip: "bodyweight", diff: 2, secondary: [] },
        ],
        stretching: [
            { name: "Wall Calf Stretch", goal: "30 sec" },
            { name: "Stair Calf Stretch", goal: "30 sec" },
        ],
        stats: { strength: 70, volume: 50 },
        tips: [
            "Full range of motion is critical.",
            "High reps and volume for growth.",
            "Hold peak contraction.",
            "Control the descent.",
            "Stretch between sets."
        ],
        mistakes: [
            "Bouncing/using momentum.",
            "Insufficient range of motion.",
            "Too low volume.",
            "Not achieving deep stretch.",
            "Poor mind-muscle connection."
        ]
    }
};

// --- CORE FUNCTIONS ---

function selectMuscle(mId) {
    currentMuscle = mId;
    updateUI();
}

function updateUI() {
    const m = data[currentMuscle];
    if (!m) return;

    resetModelColors();
    applyFatigueStyles();
    highlightBodyParts(currentMuscle, 'active-muscle');

    const calcContainer = document.getElementById('calculator-container');
    if (calcContainer) {
        calcContainer.style.display = (currentMode === 'gym') ? 'block' : 'none';
    }

    const infoCard = document.getElementById('info-card');
    const extraCard = document.getElementById('extra-info');
    const statsCard = document.getElementById('stats-container');
    const riskBadge = document.getElementById('risk-badge');

    infoCard.style.display = 'none';
    extraCard.style.display = 'none';
    statsCard.style.display = 'none';

    riskBadge.innerText = m.risk;
    riskBadge.style.background = m.risk.includes("High") ? "#ff4
