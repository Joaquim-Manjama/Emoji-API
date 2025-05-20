const emoji_map = {
    // 🧠 Work / Office / Productivity
    "email": "📧", "emails": "📧", "meeting": "📅", 
    "meet": "📅", "zoom": "💻", "call": "📞", 
    "phone": "📞", "submit": "📤", "deadline": "⏰", 
    "due": "⏰", "project": "📁", "presentation": "🖥️", 
    "slides": "🖥️", "report": "📄", "write": "✍️", 
    "draft": "✍️", "notes": "🗒️", "interview": "🎙️",
    "plan": "🗓️", "reminder": "🔔", "alarm": "⏰",
    "schedule": "📅", "calendar": "📅", "agenda": "🗒️",
    "task": "📝", "tasks": "📝", "todo": "📝",
    "checklist": "✅", "check": "✅",
    
    // 📚 School / Learning / Study
    "study": "📚", "read": "📖", "reading": "📖",
    "homework": "📝", "exam": "🧠", "test": "🧪", 
    "quiz": "🧪", "class": "🏫", "lecture": "🎓", 
    "assignment": "📎", "research": "🔍", "math": "✖️",
    "mathematics": "➗", "geometry": "📐", "calculus": "➗",
    "statistics": "➗", "english": "📖", "algebra": "🟰", 
    "science": "🔬", "biology": "🧬", "physics": "⚛️", 
    "geology": "🪨", "geophysics": "🌍", "chemistry": "⚗️", 
    "history": "🏛️", "geography": "🗺️",  "language": "🈷️", 
    "bible" : "📖", "maths": "✖️", "revision": "📚",
    "revise": "📖", "learn": "📚",

    // 🛒 Errands / Home / Chores
    "buy": "🛒", "purchase": "💳", "order": "📦",
    "deliver": "📦", "delivery": "📦", "pick": "🚗",
    "shopping": "🛍️", "groceries": "🥦", "supermarket": "🛒",
    "store": "🏪", "market": "🛒", "mall": "🏬",
    "clean": "🧹", "tidy": "🧽", "vacuum": "🧼",
    "dust": "🧽", "organize": "📦", "arrange": "📦",   
    "laundry": "🧺", "wash": "🧼", "clothes": "👕",
    "dish": "🍽️", "dishes": "🍽️", "cleaning": "🧼",
    "dishes": "🍽️", "kitchen": "🍴", "cook": "🍳",
    "cooking": "🍳", "prep": "🍽️", "grocery": "🛒", 
    "food": "🍔", "plants": "🪴", "dog": "🐕",
    "pet": "🐾", "pets": "🐾", "feed": "🍽️",
    "cat": "🐈", "fish": "🐟", "bird": "🐦",
    "hamster": "🐹", "rabbit": "🐇", "turtle": "🐢",
    "lizard": "🦎", "snake": "🐍", "reptile": "🐍",
    "snack": "🍿", "snacks": "🍿", "recipe": "📖",
    "meal": "🍽️", "recipe": "📖", "fix": "🔧", 
    "repair": "🛠️", "maintenance": "🔩", "water": "💧",
    "mop": "🧼", "sweep": "🧹", "payment": "💸",
    "yard": "🌳", "lawn": "🌱", "grass": "🌱", 
    "garden": "🌱", "plant": "🪴", "pay": "💸",
    "bill": "💳", "invoice": "🧾", "trash": "🗑️",
    "garbage": "🗑️", "recycling": "♻️", "bathe": "🛁",
    "recycle": "♻️", "shower": "🚿", "bath": "🛁",
    "bed": "🛏️", "eat": "🍴",

    // 💪 Health / Self-Care
    "exercise": "💪", "workout": "🏋️", "gym": "🏋️",
    "run": "🏃", "jog": "🏃", "walk": "🚶",
    "bike": "🚴", "meditate": "🧘", "relax": "🛀",
    "sleep": "😴", "nap": "🛌", "rest": "🛌",
    "doctor": "🩺", "dentist": "🦷", "hospital": "🏥",
    "appointment": "📋", "checkup": "👨‍⚕️", "medicine": "💊", 
    "pill": "💊", "therapy": "🧠", "football": "⚽", 
    "soccer": "⚽", "basketball": "🏀", "tennis": "🎾",
    "baseball": "⚾", "golf": "⛳", "swim": "🏊", 
    "swimming": "🏊", "walking": "🚶", "cycling": "🚴", 
    "biking": "🚴", "volleyball": "🏐", "cricket": "🏏",
    "rugby": "🏉", "hockey": "🏒", "ski": "🎿", 
    "skiing": "🎿", "snowboard": "🏂", "surf": "🏄", 
    "surfing": "🏄", "yoga": "🧘", "stretch": "🧘",
    "gym": "🏋️", "workout": "🏋️", "training": "🏋️",
    "weight": "🏋️", "lifting": "🏋️", "climb": "🧗", 
    "climbing": "🧗", "karate": "🥋", "martial": "🥋",
    "fencing": "🤺", "archery": "🏹", "skate": "🛹", 
    "skating": "⛸️", "rollerblade": "🛼", "dance": "💃", 
    "dancing": "💃", "horse": "🏇", "riding": "🏇",
    "ping": "🏓", "pong": "🏓", "bowling": "🎳", 
    "boxing": "🥊", "wrestling": "🤼","parkour": "🤸",
    

    // 🎉 Social / Personal / Events
    "birthday": "🎂", "party": "🥳", "hangout": "🧑‍🤝‍🧑",
    "celebrate": "🎉", "celebration": "🎉", "gathering": "🧑‍🤝‍🧑",
    "friends": "👫", "family": "👪", "friend": "👫",
    "event": "🎉", "festival": "🎊", "concert": "🎶",
    "show": "🎤", "performance": "🎭", "exhibition": "🖼️",
    "art": "🎨", "artwork": "🖼️", "exhibit": "🖼️",
    "dinner": "🍽️", "lunch": "🥗", "breakfast": "🥞",
    "movie": "🎬", "cinema": "🎥", "tv": "📺",
    "date": "💖", "love": "❤️", "romantic": "💘",
    "relationship": "💑", "couple": "👩‍❤️‍👨", "visiting": "🚗",
    "travel": "✈️", "trip": "🧳", "vacation": "🏖️",
    "holiday": "🏖️", "adventure": "🗺️", "explore": "🗺️",
    "flight": "🛫", "hotel": "🏨", "visit": "🚗",
    "meetup": "🧑‍🤝‍🧑", "together": "🧑‍🤝‍🧑", "chess": "♟️",
    

    // 💻 Tech / Programming / Digital Tasks
    "code": "💻", "coding": "💻", "program": "💻",
    "programming": "💻", "software": "💻", "hardware": "🖥️",
    "debug": "🪲", "fix bug": "🪲", "backup": "💾",
    "restore": "💾", "update": "🔄", "upgrade": "⬆️",
    "deploy": "🚀", "launch": "🚀", "test": "🧪",
    "testing": "🧪", "debugging": "🪲", "script": "📜",
    "build": "🧱", "design": "🎨", "figma": "🎨",
    "photoshop": "🖼️", "illustrator": "🎨", "adobe": "🎨",
    "edit": "✏️", "video": "🎥", "photo": "📸",
    "upload": "⬆️", "download": "⬇️", "save": "💾",
    "share": "🔗", "link": "🔗", "connect": "🔗",
    "image": "🖼️",
    

    // 📱 Digital Habits / Online
    "social media": "📱", "post": "📤", "tweet": "🐦", 
    "twitter": "🐦", "facebook": "📘", "linkedin": "🔗",
    "snapchat": "👻", "tiktok": "🎵", "whatsapp": "💬",
    "messenger": "💬", "discord": "💬", "reddit": "👾",
    "telegram": "💬", "signal": "🔒", "sms": "💬",
    "instagram": "📸", "dm": "📩", "blog": "✍️",
    "vlog": "📹", "content": "🎥", "creator": "🎨", 
    "content": "🧾", "profile": "👤", "game": "🕹️", 
    "gaming": "🎮", "stream": "📺", "videocall": "💻",
    "chat": "💻", "streaming": "📺", "live": "📺",
    "games": "🎮", "movie": "🍿", "movies": "🍿",
    "cinema": "🍿", "park": "🏞️", "nature": "🌳",
    "music": "🎧", "song": "🎶", "playlist": "▶️",
    "album": "🎵", "band": "🎸",
    "singer": "🎤", "musician": "🎸", "artist": "🎨",
    "drawing": "🖌️", "sketch": "✏️", "listen": "🎧",
 
    // 💬 Communication
    "text": "💬", "message": "💬", "chat": "🗨️",
    "emoji": "😊", "emojis": "😀", "mao": "😸", 
    "meow": "🐈", "time": "⏲️", "clock": "🕒", 
    "think": "🧠", "brainstorm": "🧠", "idea": "💡",
    "ideas": "💡", "objective": "🎯", "objectives": "🎯",
    "locate": "📍", "location": "📍", "pin": "📌",
    "target": "🎯", "timer": "⏲️", "1": "🥇",
    "2": "🥈", "3": "🥉", "4": "4️⃣", 
    "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", 
    "8": "🎱", "9": "9️⃣", "10": "🔟",

    // 🌀 Misc / Unknown
    "default": ["📝", "🛠️", "🎯", "⚙️", "💡", "📍", "📌"]
}

export const getEmoji = (sentence='') => {
    for (let word of sentence.toLowerCase().split(' ')) {
        if (emoji_map[word]) return {"emoji": emoji_map[word]};
    }

    return {"emoji": emoji_map['default'][Math.floor(Math.random() * 7)]};
}
