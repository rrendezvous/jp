const vocabulary = [
    // REACTIONS & IMPRESSIONS
    { j: "Mondai nai", e: "No problem", c: "reactions" },
    { j: "Subarashii", e: "Wonderful", c: "reactions" },
    { j: "Saiko", e: "Great / The Best", c: "reactions" },
    { j: "Yasashii", e: "Kind / Gentle", c: "reactions" },
    { j: "Sugoi", e: "Amazing / Wow", c: "reactions" },
    { j: "Saiko desu", e: "It's the best", c: "reactions" },
    { j: "Yokatta", e: "That's good / I'm glad", c: "reactions" },
    { j: "Ii kanji", e: "Good feeling / Looks good", c: "reactions" },
    { j: "Yoku dekita", e: "Well done", c: "reactions" },

    // UNDERSTANDING & MEMORY
    { j: "Naruhodo", e: "I see / Understood", c: "understanding" },
    { j: "Wakarimashita", e: "I understand / Understood", c: "understanding" },
    { j: "Wakarimasu", e: "Understand (Present form)", c: "understanding" },
    { j: "Sou desu ka", e: "I see / Is that so?", c: "understanding" },
    { j: "Oboete", e: "Remember / Memorize (Request)", c: "understanding" },
    { j: "Oboeteinai", e: "I don't remember", c: "understanding" },
    { j: "Wakarimasen", e: "I don't understand", c: "understanding" },
    { j: "Wakatta", e: "I got it (casual)", c: "understanding" },
    { j: "Shiranai", e: "I don't know (casual)", c: "understanding" },
    { j: "Naruhodo ne", e: "I see (casual)", c: "understanding" },

    // FREQUENCY & AMOUNT
    { j: "Sukoshi", e: "A little", c: "frequency" },
    { j: "Takusan", e: "A lot", c: "frequency" },
    { j: "Yoku", e: "Often / Well", c: "frequency" },
    { j: "Tokidoki", e: "Sometimes", c: "frequency" },
    { j: "Tamani", e: "Occasionally", c: "frequency" },
    { j: "Amari", e: "Not much (used with negative verb)", c: "frequency" },
    { j: "Amari ne", e: "Not really / Not much", c: "frequency" },
    { j: "Zenzen", e: "Not at all (with negative)", c: "frequency" },
    { j: "Chotto dake", e: "Just a little", c: "frequency" },
    { j: "Chotto", e: "A little / Wait", c: "frequency" },

    // POLITE & MANNERS
    { j: "Arigatou", e: "Thank you", c: "polite" },
    { j: "Arigatou gozaimasu", e: "Thank you (polite)", c: "polite" },
    { j: "Sumimasen", e: "Excuse me / Sorry", c: "polite" },
    { j: "Onegai shimasu", e: "Please (asking)", c: "polite" },
    { j: "Shitsurei shimasu", e: "Excuse me (polite, formal)", c: "polite" },
    { j: "Gomen", e: "Sorry (casual)", c: "polite" },
    { j: "Gomen nasai", e: "I'm sorry", c: "polite" },
    { j: "Dozo", e: "Please / Offering / Here you go", c: "polite" },
    { j: "Kochira koso", e: "Likewise / Same to you", c: "polite" },
    { j: "Dou itashimashite", e: "You're welcome", c: "polite" },
    { j: "Shouganai", e: "It can't be helped", c: "polite" },

    // GREETINGS & TIME-BASED
    { j: "Ohayou gozaimasu", e: "Good morning", c: "greetings" },
    { j: "Ohayou", e: "Good morning (casual)", c: "greetings" },
    { j: "Konnichiwa", e: "Hello", c: "greetings" },
    { j: "Konbanwa", e: "Good evening", c: "greetings" },
    { j: "Oyasumi", e: "Good night (casual)", c: "greetings" },
    { j: "Oyasumi nasai", e: "Good night (polite)", c: "greetings" },
    { j: "Hajimemashite", e: "Nice to meet you", c: "greetings" },
    { j: "Mata ne", e: "See you", c: "greetings" },
    { j: "Mata ashita", e: "See you tomorrow", c: "greetings" },
    { j: "Mata kondo", e: "See you next time", c: "greetings" },
    { j: "Sayounara", e: "Goodbye", c: "greetings" },
    { j: "Ja ne", e: "Bye (casual)", c: "greetings" },
    { j: "Mata aimashou", e: "Let's meet again", c: "greetings" },

    // EVERYDAY & HOME
    { j: "Tadaima", e: "I'm home", c: "everyday" },
    { j: "Tadaima kaerimashita", e: "I'm home (polite)", c: "everyday" },
    { j: "Okaerinasai", e: "Welcome back", c: "everyday" },
    { j: "Ittekimasu", e: "I'm leaving now", c: "everyday" },
    { j: "Itte mairimasu", e: "I'm leaving (polite)", c: "everyday" },
    { j: "Itterasshai", e: "Take care", c: "everyday" },
    { j: "Ojamashimasu", e: "Excuse me (entering)", c: "everyday" },
    { j: "Irasshaimase", e: "Welcome", c: "everyday" },
    { j: "Itadakimasu", e: "Let's eat / Thank you for the food", c: "everyday" },
    { j: "Gochisousama desu", e: "Thank you for the meal", c: "everyday" },

    // FOOD & RESTAURANTS
    { j: "Onaka ga sukimashita", e: "I'm hungry", c: "food" },
    { j: "Oishii desu", e: "It's delicious", c: "food" },
    { j: "Mazui desu", e: "It tastes bad", c: "food" },
    { j: "Mou ippai", e: "One more please", c: "food" },
    { j: "Kekkou desu", e: "No thank you", c: "food" },
    { j: "Irimasen", e: "I don't need it", c: "food" },

    // FEELINGS & STATES
    { j: "Daijoubu desu", e: "It's okay / I'm fine", c: "feelings" },
    { j: "Daijoubu", e: "Okay (casual)", c: "feelings" },
    { j: "Daijoubu dayo", e: "It's okay (casual)", c: "feelings" },
    { j: "Daijoubu sou desu", e: "Seems okay", c: "feelings" },
    { j: "Daijoubu sou", e: "Looks okay", c: "feelings" },
    { j: "Daijoubu desu ka", e: "Are you okay?", c: "feelings" },
    { j: "Daijoubu kana", e: "I wonder if it's okay", c: "feelings" },
    { j: "Ureshii", e: "Happy", c: "feelings" },
    { j: "Ureshii desu", e: "I'm happy", c: "feelings" },
    { j: "Ureshii na", e: "I'm happy (casual)", c: "feelings" },
    { j: "Kanashii", e: "Sad", c: "feelings" },
    { j: "Tsukareta", e: "I'm tired", c: "feelings" },
    { j: "Genki desu", e: "I'm fine / Healthy", c: "feelings" },
    { j: "Genki", e: "Fine / Energetic", c: "feelings" },
    { j: "Genki sou desu", e: "You look fine", c: "feelings" },
    { j: "Hima desu", e: "I'm free", c: "feelings" },
    { j: "Tanoshii", e: "Fun", c: "feelings" },
    { j: "Sabishii", e: "Lonely", c: "feelings" },
    { j: "Kowai", e: "Scary", c: "feelings" },
    { j: "Taihen desu", e: "It's tough", c: "feelings" },
    { j: "Taihen sou", e: "Looks hard", c: "feelings" },

    // CASUAL & FRIENDLY
    { j: "Yappari", e: "As I thought / As expected", c: "casual" },
    { j: "Himitsu", e: "Secret", c: "casual" },
    { j: "Himitsu dayo", e: "It's a secret", c: "casual" },
    { j: "Dame", e: "No / Bad / Forbidden", c: "casual" },
    { j: "Mochiron", e: "Of course", c: "casual" },
    { j: "Yatta", e: "I did it! / Yay!", c: "casual" },
    { j: "Yoshi", e: "Alright / Let's go", c: "casual" },
    { j: "Ganbatte", e: "Do your best / Good luck", c: "casual" },
    { j: "Ganbatta ne", e: "You did your best", c: "casual" },
    { j: "Yabai ne", e: "That's serious / Wow", c: "casual" },
    { j: "Uso", e: "Really? / No way!", c: "casual" },
    { j: "Hontou", e: "Really / True", c: "casual" },
    { j: "Sou nan da", e: "Oh, really", c: "casual" },

    // RESPONSES & AGREEMENT
    { j: "Sou desu", e: "That's right", c: "responses" },
    { j: "Sou desu ne", e: "I agree", c: "responses" },
    { j: "Ii desu", e: "Good / Okay", c: "responses" },
    { j: "Ii desu ka", e: "Is it okay?", c: "responses" },
    { j: "Ii desu ne", e: "Nice, right?", c: "responses" },
    { j: "Ii desu yo", e: "It's okay / Sure", c: "responses" },
    { j: "Ii yo", e: "Sure / Okay", c: "responses" },
    { j: "Ii kana", e: "Is it okay? (casual)", c: "responses" },
    { j: "Ii ne", e: "Nice!", c: "responses" },
    { j: "Maa maa", e: "So-so", c: "responses" },
    { j: "Chigaimasu", e: "That's wrong", c: "responses" },
    { j: "Chotto chigau", e: "A little different", c: "responses" },
    { j: "Sou ka mo", e: "Maybe", c: "responses" },
    { j: "Yorokonde", e: "With pleasure", c: "responses" },

    // WORRY & CONCERN
    { j: "Kinishinaide", e: "Don't worry (about it)", c: "concern" },
    { j: "Shinpaishinaide", e: "Don't be anxious / Don't worry", c: "concern" },
    { j: "Kamaimasen", e: "I don't mind / No problem", c: "concern" },
    { j: "Ki o tsukete", e: "Take care", c: "concern" },
    { j: "Otsukaresama desu", e: "Thank you for your hard work", c: "concern" },
    { j: "Otsukaresama deshita", e: "Thanks for your hard work (past)", c: "concern" },
    { j: "Otsukaresama desu ne", e: "You must be tired", c: "concern" },
    { j: "Otsukaresama", e: "Good job (casual)", c: "concern" },

    // TIME & STATUS
    { j: "Ima desu", e: "Now", c: "time" },
    { j: "Mada desu", e: "Not yet", c: "time" },
    { j: "Mada mada", e: "Not yet", c: "time" },
    { j: "Sugu desu", e: "Soon", c: "time" },
    { j: "Mou sugu", e: "Very soon", c: "time" },
    { j: "Jikan nai", e: "No time", c: "time" },
    { j: "Jikan aru", e: "I have time", c: "time" },

    // WAITING & PATIENCE
    { j: "Chotto matte", e: "Wait a moment", c: "patience" },
    { j: "Chotto matte kudasai", e: "Please wait", c: "patience" },
    { j: "Matte kudasai", e: "Please wait", c: "patience" },
    { j: "Chotto dake matte", e: "Wait a little", c: "patience" },
    { j: "Shou shou omachi kudasai", e: "Please wait a moment", c: "patience" },
    { j: "Omatase shimashita", e: "Sorry to keep you waiting", c: "patience" },

    // DIFFICULTY & EASE
    { j: "Muzukashii desu", e: "It's difficult", c: "difficulty" },
    { j: "Chotto muzukashii", e: "A little difficult", c: "difficulty" },
    { j: "Kantan desu", e: "It's easy", c: "difficulty" },
    { j: "Kantan da yo", e: "It's easy", c: "difficulty" },

    // DIRECTIONS & HELP
    { j: "Tasukete", e: "Help!", c: "help" },
    { j: "Tooi desu", e: "It's far", c: "help" },
    { j: "Chikai desu", e: "It's near", c: "help" },
    { j: "Koko desu", e: "It's here", c: "help" },
    { j: "Soko desu", e: "It's there", c: "help" },
    { j: "Kochira desu", e: "This way / Here", c: "help" },

    // ASKING & INQUIRY
    { j: "Chotto ii desu ka", e: "May I ask you something?", c: "inquiry" },
    { j: "Nansai desu ka", e: "How old are you?", c: "inquiry" },
    { j: "Dou shita desu ka", e: "What happened?", c: "inquiry" },
    { j: "Dou desu", e: "How is it?", c: "inquiry" },
    { j: "Yoroshiku onegaishimasu", e: "Please take care of me", c: "inquiry" },
    { j: "Mou ichido onegaishimasu", e: "Please say it again", c: "inquiry" },
    { j: "Kashikomarimashita", e: "Certainly / Understood", c: "inquiry" },
    { j: "Sensei", e: "Teacher", c: "inquiry" },

    // SPECIAL OCCASIONS
    { j: "Otanjoubi omedetou", e: "Happy birthday", c: "occasions" },
    { j: "Omedetou gozaimasu", e: "Happy birthday (polite)", c: "occasions" },
    { j: "Tsugi wa", e: "Next is... / As for the next one", c: "occasions" },
    { j: "Yamete", e: "Stop", c: "occasions" },

    // PRONOUNS
    { j: "Watashi", e: "I / Me", c: "pronouns" },
    { j: "Anata", e: "You", c: "pronouns" },
    { j: "Hito", e: "Person", c: "pronouns" },
    { j: "Kono hito", e: "This person (near speaker)", c: "pronouns" },
    { j: "Sono hito", e: "That person (near listener)", c: "pronouns" },
    { j: "Ano hito", e: "That person (far away)", c: "pronouns" },

    // GRAMMAR
    { j: "Hai", e: "Yes", c: "grammar" },
    { j: "Iie", e: "No", c: "grammar" },
    { j: "De wa arimasen", e: "Is not", c: "grammar" },

    // FAMILY
    { j: "Chichi", e: "My Father", c: "family" },
    { j: "Haha", e: "My Mother", c: "family" },
    { j: "Otousan", e: "Father (Polite)", c: "family" },
    { j: "Okaasan", e: "Mother (Polite)", c: "family" },
    { j: "Ani", e: "Older Brother", c: "family" },
    { j: "Ane", e: "Older Sister", c: "family" },
    { j: "Otouto", e: "Younger Brother", c: "family" },
    { j: "Imouto", e: "Younger Sister", c: "family" },
    { j: "Ojiisan", e: "Grandfather", c: "family" },
    { j: "Obaasan", e: "Grandmother", c: "family" },
    { j: "Kazoku", e: "Family", c: "family" },

    // BODY
    { j: "Atama", e: "Head", c: "body" },
    { j: "Kao", e: "Face", c: "body" },
    { j: "Me", e: "Eye", c: "body" },
    { j: "Mimi", e: "Ear", c: "body" },
    { j: "Hana", e: "Nose", c: "body" },
    { j: "Kuchi", e: "Mouth", c: "body" },
    { j: "Te", e: "Hand", c: "body" },
    { j: "Yubi", e: "Finger", c: "body" },
    { j: "Ude", e: "Arm", c: "body" },
    { j: "Ashi", e: "Foot/Leg", c: "body" },

    // COLORS
    { j: "Shiro", e: "White", c: "colors" },
    { j: "Kuro", e: "Black", c: "colors" },
    { j: "Aka", e: "Red", c: "colors" },
    { j: "Ao", e: "Blue", c: "colors" },
    { j: "Midori", e: "Green", c: "colors" },
    { j: "Kiiro", e: "Yellow", c: "colors" },
    { j: "Chairo", e: "Brown", c: "colors" },

    // DAYS OF THE WEEK
    { j: "Nichiyoubi", e: "Sunday", c: "days" },
    { j: "Getsuyoubi", e: "Monday", c: "days" },
    { j: "Kayoubi", e: "Tuesday", c: "days" },
    { j: "Suiyoubi", e: "Wednesday", c: "days" },
    { j: "Mokuyoubi", e: "Thursday", c: "days" },
    { j: "Kinyoubi", e: "Friday", c: "days" },
    { j: "Doyoubi", e: "Saturday", c: "days" },

    // MONTHS
    { j: "Ichigatsu", e: "January", c: "months" },
    { j: "Nigatsu", e: "February", c: "months" },
    { j: "Sangatsu", e: "March", c: "months" },
    { j: "Shigatsu", e: "April", c: "months" },
    { j: "Gogatsu", e: "May", c: "months" },
    { j: "Rokugatsu", e: "June", c: "months" },
    { j: "Shichigatsu", e: "July", c: "months" },
    { j: "Hachigatsu", e: "August", c: "months" },
    { j: "Kugatsu", e: "September", c: "months" },
    { j: "Juugatsu", e: "October", c: "months" },
    { j: "Juuichigatsu", e: "November", c: "months" },
    { j: "Juunigatsu", e: "December", c: "months" },

    // CALENDAR DATES (1-31)
    { j: "Tsuitachi", e: "1st day", c: "calendar" },
    { j: "Futsuka", e: "2nd day", c: "calendar" },
    { j: "Mikka", e: "3rd day", c: "calendar" },
    { j: "Yokka", e: "4th day", c: "calendar" },
    { j: "Itsuka", e: "5th day", c: "calendar" },
    { j: "Muika", e: "6th day", c: "calendar" },
    { j: "Nanoka", e: "7th day", c: "calendar" },
    { j: "Youka", e: "8th day", c: "calendar" },
    { j: "Kokonoka", e: "9th day", c: "calendar" },
    { j: "Tooka", e: "10th day", c: "calendar" },
    { j: "Juuichi-nichi", e: "11th day", c: "calendar" },
    { j: "Juuni-nichi", e: "12th day", c: "calendar" },
    { j: "Juusan-nichi", e: "13th day", c: "calendar" },
    { j: "Juuyon-nichi", e: "14th day", c: "calendar" },
    { j: "Juugo-nichi", e: "15th day", c: "calendar" },
    { j: "Juuroku-nichi", e: "16th day", c: "calendar" },
    { j: "Juushichi-nichi", e: "17th day", c: "calendar" },
    { j: "Juuhachi-nichi", e: "18th day", c: "calendar" },
    { j: "Juukyu-nichi", e: "19th day", c: "calendar" },
    { j: "Hatsuka", e: "20th day", c: "calendar" },
    { j: "Nijuichi-nichi", e: "21st day", c: "calendar" },
    { j: "Nijuni-nichi", e: "22nd day", c: "calendar" },
    { j: "Nijusan-nichi", e: "23rd day", c: "calendar" },
    { j: "Nijuyon-nichi", e: "24th day", c: "calendar" },
    { j: "Nijugo-nichi", e: "25th day", c: "calendar" },
    { j: "Nijuroku-nichi", e: "26th day", c: "calendar" },
    { j: "Nijushichi-nichi", e: "27th day", c: "calendar" },
    { j: "Nijuhachi-nichi", e: "28th day", c: "calendar" },
    { j: "Nijukyu-nichi", e: "29th day", c: "calendar" },
    { j: "Sanjuu-nichi", e: "30th day", c: "calendar" },
    { j: "Sanjuichi-nichi", e: "31st day", c: "calendar" },

    // HOURS
    { j: "Ichi-ji", e: "1:00", c: "hours" },
    { j: "Ni-ji", e: "2:00", c: "hours" },
    { j: "San-ji", e: "3:00", c: "hours" },
    { j: "Yo-ji", e: "4:00", c: "hours" },
    { j: "Go-ji", e: "5:00", c: "hours" },
    { j: "Roku-ji", e: "6:00", c: "hours" },
    { j: "Shichi-ji", e: "7:00", c: "hours" },
    { j: "Hachi-ji", e: "8:00", c: "hours" },
    { j: "Ku-ji", e: "9:00", c: "hours" },
    { j: "Ju-ji", e: "10:00", c: "hours" },
    { j: "Juuichi-ji", e: "11:00", c: "hours" },
    { j: "Junii-ji", e: "12:00", c: "hours" },

    // MINUTES
    { j: "Ippun", e: "1 min", c: "minutes" },
    { j: "Nifun", e: "2 min", c: "minutes" },
    { j: "Sanpun", e: "3 min", c: "minutes" },
    { j: "Yonpun", e: "4 min", c: "minutes" },
    { j: "Go-fun", e: "5 min", c: "minutes" },
    { j: "Juppun", e: "10 min", c: "minutes" },
    { j: "Juu ippun", e: "11 min", c: "minutes" },
    { j: "Juu nifun", e: "12 min", c: "minutes" },
    { j: "Sanjuu pun", e: "30 min", c: "minutes" },
    { j: "Ichi-ji ippun", e: "1:01", c: "minutes" },
    { j: "Ichi-ji juppun", e: "1:10", c: "minutes" },
    { j: "Ichi-ji juu ippun", e: "1:11", c: "minutes" },
    { j: "Ichi-ji sanjuu pun", e: "1:30", c: "minutes" },
    { j: "Ni-ji go-fun", e: "2:05", c: "minutes" },
    { j: "San-ji juugo-fun", e: "3:15", c: "minutes" },

    // MONEY
    { j: "Okane", e: "Money", c: "money" },
    { j: "Ichi en", e: "1 Yen", c: "money" },
    { j: "Go en", e: "5 Yen", c: "money" },
    { j: "Juu en", e: "10 Yen", c: "money" },
    { j: "Hyaku en", e: "100 Yen", c: "money" },
    { j: "Sen en", e: "1,000 Yen", c: "money" },
    { j: "Ichiman en", e: "10,000 Yen", c: "money" }
];

// Numbers 1-10
const nums1to10 = [
    { j: "Ichi", e: "1", c: "numbers-1-10" },
    { j: "Ni", e: "2", c: "numbers-1-10" },
    { j: "San", e: "3", c: "numbers-1-10" },
    { j: "Yon", e: "4", c: "numbers-1-10" },
    { j: "Go", e: "5", c: "numbers-1-10" },
    { j: "Roku", e: "6", c: "numbers-1-10" },
    { j: "Nana", e: "7", c: "numbers-1-10" },
    { j: "Hachi", e: "8", c: "numbers-1-10" },
    { j: "Kyuu", e: "9", c: "numbers-1-10" },
    { j: "Juu", e: "10", c: "numbers-1-10" }
];
nums1to10.forEach(num => vocabulary.push(num));

// Numbers 11-20
const nums11to20 = [
    { j: "Juuichi", e: "11", c: "numbers-11-20" },
    { j: "Juuni", e: "12", c: "numbers-11-20" },
    { j: "Juusan", e: "13", c: "numbers-11-20" },
    { j: "Juuyon", e: "14", c: "numbers-11-20" },
    { j: "Juugo", e: "15", c: "numbers-11-20" },
    { j: "Juuroku", e: "16", c: "numbers-11-20" },
    { j: "Juushichi", e: "17", c: "numbers-11-20" },
    { j: "Juuhachi", e: "18", c: "numbers-11-20" },
    { j: "Juukyu", e: "19", c: "numbers-11-20" },
    { j: "Nijuu", e: "20", c: "numbers-11-20" }
];
nums11to20.forEach(num => vocabulary.push(num));

// Numbers 21-30
const nums21to30 = [
    { j: "Nijuichi", e: "21", c: "numbers-21-30" },
    { j: "Nijuni", e: "22", c: "numbers-21-30" },
    { j: "Nijusan", e: "23", c: "numbers-21-30" },
    { j: "Nijuyon", e: "24", c: "numbers-21-30" },
    { j: "Nijugo", e: "25", c: "numbers-21-30" },
    { j: "Nijuroku", e: "26", c: "numbers-21-30" },
    { j: "Nijushichi", e: "27", c: "numbers-21-30" },
    { j: "Nijuhachi", e: "28", c: "numbers-21-30" },
    { j: "Nijukyu", e: "29", c: "numbers-21-30" },
    { j: "Sanjuu", e: "30", c: "numbers-21-30" }
];
nums21to30.forEach(num => vocabulary.push(num));

// Numbers 31-40
const nums31to40 = [
    { j: "Sanjuichi", e: "31", c: "numbers-31-40" },
    { j: "Sanjuni", e: "32", c: "numbers-31-40" },
    { j: "Sanjusan", e: "33", c: "numbers-31-40" },
    { j: "Sanjuyon", e: "34", c: "numbers-31-40" },
    { j: "Sanjugo", e: "35", c: "numbers-31-40" },
    { j: "Sanjuroku", e: "36", c: "numbers-31-40" },
    { j: "Sanjushichi", e: "37", c: "numbers-31-40" },
    { j: "Sanjuhachi", e: "38", c: "numbers-31-40" },
    { j: "Sanjukyu", e: "39", c: "numbers-31-40" },
    { j: "Yonjuu", e: "40", c: "numbers-31-40" }
];
nums31to40.forEach(num => vocabulary.push(num));

// Numbers 41-50
const nums41to50 = [
    { j: "Yonjuichi", e: "41", c: "numbers-41-50" },
    { j: "Yonjuni", e: "42", c: "numbers-41-50" },
    { j: "Yonjusan", e: "43", c: "numbers-41-50" },
    { j: "Yonjuyon", e: "44", c: "numbers-41-50" },
    { j: "Yonjugo", e: "45", c: "numbers-41-50" },
    { j: "Yonjuroku", e: "46", c: "numbers-41-50" },
    { j: "Yonjushichi", e: "47", c: "numbers-41-50" },
    { j: "Yonjuhachi", e: "48", c: "numbers-41-50" },
    { j: "Yonjukyu", e: "49", c: "numbers-41-50" },
    { j: "Gojuu", e: "50", c: "numbers-41-50" }
];
nums41to50.forEach(num => vocabulary.push(num));

// Numbers 51-60
const nums51to60 = [
    { j: "Gojuichi", e: "51", c: "numbers-51-60" },
    { j: "Gojuni", e: "52", c: "numbers-51-60" },
    { j: "Gojusan", e: "53", c: "numbers-51-60" },
    { j: "Gojuyon", e: "54", c: "numbers-51-60" },
    { j: "Gojugo", e: "55", c: "numbers-51-60" },
    { j: "Gojuroku", e: "56", c: "numbers-51-60" },
    { j: "Gojushichi", e: "57", c: "numbers-51-60" },
    { j: "Gojuhachi", e: "58", c: "numbers-51-60" },
    { j: "Gojukyu", e: "59", c: "numbers-51-60" },
    { j: "Rokujuu", e: "60", c: "numbers-51-60" }
];
nums51to60.forEach(num => vocabulary.push(num));

// Numbers 61-70
const nums61to70 = [
    { j: "Rokujuichi", e: "61", c: "numbers-61-70" },
    { j: "Rokujuni", e: "62", c: "numbers-61-70" },
    { j: "Rokujusan", e: "63", c: "numbers-61-70" },
    { j: "Rokujuyon", e: "64", c: "numbers-61-70" },
    { j: "Rokujugo", e: "65", c: "numbers-61-70" },
    { j: "Rokujuroku", e: "66", c: "numbers-61-70" },
    { j: "Rokujushichi", e: "67", c: "numbers-61-70" },
    { j: "Rokujuhachi", e: "68", c: "numbers-61-70" },
    { j: "Rokujukyu", e: "69", c: "numbers-61-70" },
    { j: "Nanajuu", e: "70", c: "numbers-61-70" }
];
nums61to70.forEach(num => vocabulary.push(num));

// Numbers 71-80
const nums71to80 = [
    { j: "Nanajuichi", e: "71", c: "numbers-71-80" },
    { j: "Nanajuni", e: "72", c: "numbers-71-80" },
    { j: "Nanajusan", e: "73", c: "numbers-71-80" },
    { j: "Nanajuyon", e: "74", c: "numbers-71-80" },
    { j: "Nanajugo", e: "75", c: "numbers-71-80" },
    { j: "Nanajuroku", e: "76", c: "numbers-71-80" },
    { j: "Nanajushichi", e: "77", c: "numbers-71-80" },
    { j: "Nanajuhachi", e: "78", c: "numbers-71-80" },
    { j: "Nanajukyu", e: "79", c: "numbers-71-80" },
    { j: "Hachijuu", e: "80", c: "numbers-71-80" }
];
nums71to80.forEach(num => vocabulary.push(num));

// Numbers 81-90
const nums81to90 = [
    { j: "Hachijuichi", e: "81", c: "numbers-81-90" },
    { j: "Hachijuni", e: "82", c: "numbers-81-90" },
    { j: "Hachijusan", e: "83", c: "numbers-81-90" },
    { j: "Hachijuyon", e: "84", c: "numbers-81-90" },
    { j: "Hachijugo", e: "85", c: "numbers-81-90" },
    { j: "Hachijuroku", e: "86", c: "numbers-81-90" },
    { j: "Hachijushichi", e: "87", c: "numbers-81-90" },
    { j: "Hachijuhachi", e: "88", c: "numbers-81-90" },
    { j: "Hachijukyu", e: "89", c: "numbers-81-90" },
    { j: "Kyujuu", e: "90", c: "numbers-81-90" }
];
nums81to90.forEach(num => vocabulary.push(num));

// Numbers 91-100
const nums91to100 = [
    { j: "Kyujuichi", e: "91", c: "numbers-91-100" },
    { j: "Kyujuni", e: "92", c: "numbers-91-100" },
    { j: "Kyujusan", e: "93", c: "numbers-91-100" },
    { j: "Kyujuyon", e: "94", c: "numbers-91-100" },
    { j: "Kyujugo", e: "95", c: "numbers-91-100" },
    { j: "Kyujuroku", e: "96", c: "numbers-91-100" },
    { j: "Kyujushichi", e: "97", c: "numbers-91-100" },
    { j: "Kyujuhachi", e: "98", c: "numbers-91-100" },
    { j: "Kyujukyu", e: "99", c: "numbers-91-100" },
    { j: "Hyaku", e: "100", c: "numbers-91-100" }
];
nums91to100.forEach(num => vocabulary.push(num));

// Hundreds (100-900)
const numHundreds = [
    { j: "Hyaku", e: "100", c: "numbers-hundreds" },
    { j: "Nihyaku", e: "200", c: "numbers-hundreds" },
    { j: "Sanbyaku", e: "300", c: "numbers-hundreds" },
    { j: "Yonhyaku", e: "400", c: "numbers-hundreds" },
    { j: "Gohyaku", e: "500", c: "numbers-hundreds" },
    { j: "Roppyaku", e: "600", c: "numbers-hundreds" },
    { j: "Nanahyaku", e: "700", c: "numbers-hundreds" },
    { j: "Happyaku", e: "800", c: "numbers-hundreds" },
    { j: "Kyuhyaku", e: "900", c: "numbers-hundreds" }
];
numHundreds.forEach(num => vocabulary.push(num));

// Thousands (1000-10000)
const numThousands = [
    { j: "Sen", e: "1,000", c: "numbers-thousands" },
    { j: "Nisen", e: "2,000", c: "numbers-thousands" },
    { j: "Sanzen", e: "3,000", c: "numbers-thousands" },
    { j: "Yonsen", e: "4,000", c: "numbers-thousands" },
    { j: "Gosen", e: "5,000", c: "numbers-thousands" },
    { j: "Rokusen", e: "6,000", c: "numbers-thousands" },
    { j: "Shichisen", e: "7,000", c: "numbers-thousands" },
    { j: "Hassen", e: "8,000", c: "numbers-thousands" },
    { j: "Kyusen", e: "9,000", c: "numbers-thousands" },
    { j: "Ichiman", e: "10,000", c: "numbers-thousands" }
];
numThousands.forEach(num => vocabulary.push(num));

// Very Large Numbers
const numLarge = [
    { j: "Zero / Rei", e: "0", c: "numbers-large" },
    { j: "Hyaku Ichi", e: "101", c: "numbers-large" },
    { j: "Sen Ichi", e: "1,001", c: "numbers-large" },
    { j: "Ichiman Ichi", e: "10,001", c: "numbers-large" },
    { j: "Niman", e: "20,000", c: "numbers-large" },
    { j: "Sanman", e: "30,000", c: "numbers-large" },
    { j: "Yonman", e: "40,000", c: "numbers-large" },
    { j: "Goman", e: "50,000", c: "numbers-large" },
    { j: "Rokuman", e: "60,000", c: "numbers-large" },
    { j: "Nanaman", e: "70,000", c: "numbers-large" },
    { j: "Hachiman", e: "80,000", c: "numbers-large" },
    { j: "Kyuman", e: "90,000", c: "numbers-large" },
    { j: "Hyakuman", e: "1,000,000", c: "numbers-large" },
    { j: "Oku", e: "100,000,000", c: "numbers-large" }
];
numLarge.forEach(num => vocabulary.push(num));

// Scenarios
const scenarios = [
    {
        title: "Okaasan (Mother)",
        question: "Kono hito wa watashi no okaasan desu ka?",
        questionEN: "Is this person my mother?",
        pos: "Hai, sono hito wa anata no okaasan desu.",
        posEN: "Yes, that person is your mother.",
        neg: "Iie, sono hito wa anata no okaasan de wa arimasen.",
        negEN: "No, that person is not your mother."
    },
    {
        title: "Tomodachi (Friend)",
        question: "Sono hito wa watashi no tomodachi desu ka?",
        questionEN: "Is that person my friend?",
        pos: "Hai, kono hito wa anata no tomodachi desu.",
        posEN: "Yes, this person is your friend.",
        neg: "Iie, kono hito wa anata no tomodachi de wa arimasen.",
        negEN: "No, this person is not your friend."
    },
    {
        title: "Senpai (Senior)",
        question: "Ano hito wa watashi no senpai desu ka?",
        questionEN: "Is that person my senior?",
        pos: "Hai, ano hito wa anata no senpai desu.",
        posEN: "Yes, that person is your senior.",
        neg: "Iie, ano hito wa anata no senpai de wa arimasen.",
        negEN: "No, that person is not your senior."
    },
    {
        title: "Kore/Sore (Things)",
        question: "Kore wa nan desu ka?",
        questionEN: "What is this?",
        pos: "Sore wa pen desu.",
        posEN: "That is a pen.",
        neg: "Sore wa pen de wa arimasen.",
        negEN: "That is not a pen."
    },
    {
        title: "Koko/Soko (Place)",
        question: "Koko wa toire desu ka?",
        questionEN: "Is this place a toilet/restroom?",
        pos: "Hai, soko wa toire desu.",
        posEN: "Yes, that place is a toilet/restroom.",
        neg: "Iie, soko wa toire de wa arimasen.",
        negEN: "No, that place is not a toilet/restroom."
    }
];

let flashMode = 'JtoE';
let quizMode = 'JtoE';
let quizPool = [];
let quizIndex = 0;

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    const isOpen = menu.classList.contains('menu-open');

    if (isOpen) {
        // Close menu
        menu.classList.remove('menu-open');
        overlay.classList.remove('overlay-visible');
    } else {
        // Open menu
        overlay.classList.add('overlay-visible');
        menu.classList.add('menu-open');
    }
}



function switchTab(t) {
    document.getElementById('flashcards-section').classList.toggle('hidden', t !== 'flashcards');
    document.getElementById('quiz-section').classList.toggle('hidden', t !== 'quiz');
    document.getElementById('dialogue-section').classList.toggle('hidden', t !== 'dialogue');

    // Update desktop tabs styling
    const desktopFlashcardsTab = document.getElementById('tab-flashcards');
    const desktopQuizTab = document.getElementById('tab-quiz');
    const desktopDialogueTab = document.getElementById('tab-dialogue');

    if (desktopFlashcardsTab && desktopQuizTab && desktopDialogueTab) {
        desktopFlashcardsTab.className = t === 'flashcards' ? 'tab-active pb-2 transition-all duration-200 border-b-2' : 'pb-2 opacity-60 hover:opacity-100 transition-all duration-200 border-b-2 border-transparent';
        desktopQuizTab.className = t === 'quiz' ? 'tab-active pb-2 transition-all duration-200 border-b-2' : 'pb-2 opacity-60 hover:opacity-100 transition-all duration-200 border-b-2 border-transparent';
        desktopDialogueTab.className = t === 'dialogue' ? 'tab-active pb-2 transition-all duration-200 border-b-2' : 'pb-2 opacity-60 hover:opacity-100 transition-all duration-200 border-b-2 border-transparent';
    }

    // Update mobile tabs styling
    const mobileFlashcardsTab = document.getElementById('mobile-tab-flashcards');
    const mobileQuizTab = document.getElementById('mobile-tab-quiz');
    const mobileDialogueTab = document.getElementById('mobile-tab-dialogue');

    if (mobileFlashcardsTab && mobileQuizTab && mobileDialogueTab) {
        mobileFlashcardsTab.classList.toggle('active', t === 'flashcards');
        mobileQuizTab.classList.toggle('active', t === 'quiz');
        mobileDialogueTab.classList.toggle('active', t === 'dialogue');
    }

    if (t === 'dialogue') renderDialogue();
    if (t === 'quiz') resetQuiz();
}

function toggleMode() {
    flashMode = flashMode === 'JtoE' ? 'EtoJ' : 'JtoE';

    // Update labels
    const label = flashMode === 'JtoE' ? 'JP ⇄ EN' : 'EN ⇄ JP';
    const desktopLabel = document.getElementById('modeLabel');
    const mobileLabel = document.getElementById('mobile-modeLabel');

    if (desktopLabel) desktopLabel.textContent = label;
    if (mobileLabel) mobileLabel.textContent = label;

    filterCards();
}

function setQuizMode(m) {
    quizMode = m;
    const btnJ = document.getElementById('qModeJtoE');
    const btnE = document.getElementById('qModeEtoJ');

    // Reset styles
    btnJ.style.color = '';
    btnE.style.color = '';

    if (m === 'JtoE') {
        btnJ.className = 'flex-1 px-4 py-2 text-xs font-semibold rounded-md transition-all duration-200 bg-indigo-600 text-white border border-indigo-600/50';
        btnE.className = 'flex-1 px-4 py-2 text-xs font-semibold rounded-md transition-all duration-200 opacity-60 hover:opacity-100';
        btnE.style.color = 'var(--text-secondary)';
    } else {
        btnJ.className = 'flex-1 px-4 py-2 text-xs font-semibold rounded-md transition-all duration-200 opacity-60 hover:opacity-100';
        btnJ.style.color = 'var(--text-secondary)';
        btnE.className = 'flex-1 px-4 py-2 text-xs font-semibold rounded-md transition-all duration-200 bg-indigo-600 text-white border border-indigo-600/50';
    }
}

function filterCards() {
    const catValue = document.getElementById('catValue');
    const cat = catValue ? catValue.value : 'all';
    const termInput = document.getElementById('termSearch');
    const term = termInput ? termInput.value.trim().toLowerCase() : '';
    const grid = document.getElementById('card-grid');
    grid.innerHTML = '';
    const filtered = (cat === 'all' ? vocabulary : vocabulary.filter(v => v.c === cat)).filter(v => {
        if (!term) return true;
        const text = flashMode === 'JtoE' ? v.j : v.e;
        return text.toLowerCase().includes(term);
    });
    document.getElementById('card-count').innerText = `${filtered.length} CARDS`;

    filtered.forEach(item => {
        const f = flashMode === 'JtoE' ? item.j : item.e;
        const b = flashMode === 'JtoE' ? item.e : item.j;
        const card = document.createElement('div');
        card.className = 'perspective-1000 h-24';
        card.innerHTML = `
            <div class="flip-card-inner" onclick="this.classList.toggle('is-flipped')">
                <div class="flip-card-front text-center">
                    <p class="text-sm font-semibold tracking-tight" style="color: var(--text-primary);">${f}</p>
                </div>
                <div class="flip-card-back text-center">
                    <p class="text-sm font-bold uppercase" style="color: var(--accent-primary);">${b}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initCategoryDropdown() {
    const toggle = document.getElementById('catToggle');
    const menu = document.getElementById('catDropdown');
    const value = document.getElementById('catValue');
    const label = document.querySelector('.category-label-text');
    const options = Array.from(document.querySelectorAll('.category-option'));

    if (!toggle || !menu || !value || !label || options.length === 0) return;

    const closeMenu = () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
        menu.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
    };

    const setActive = (option) => {
        options.forEach(o => o.classList.remove('active'));
        option.classList.add('active');
    };

    const selectOption = (option) => {
        const text = option.textContent.trim();
        const val = option.getAttribute('data-value');
        value.value = val;
        label.textContent = text;
        setActive(option);
        filterCards();
        closeMenu();
    };

    toggle.addEventListener('click', () => {
        if (menu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    options.forEach(option => {
        option.addEventListener('click', () => selectOption(option));
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Default selection
    const defaultOption = options.find(o => o.getAttribute('data-value') === value.value) || options[0];
    setActive(defaultOption);
    label.textContent = defaultOption.textContent.trim();
}

function resetQuiz() {
    document.getElementById('quiz-setup').classList.remove('hidden');
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');

    const cats = [...new Set(vocabulary.map(v => v.c))];
    const container = document.getElementById('quiz-categories');
    container.innerHTML = '';

    cats.forEach(cat => {
        const label = document.createElement('label');
        label.className = 'flex items-center p-3 rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.02] border hover:shadow-sm';
        label.style.cssText = "background-color: var(--bg-tertiary); border-color: var(--border-color);";

        // Format label text: "numbers-1-10" -> "Numbers 1-10"
        let displayText = cat.replace(/_/g, ' ');
        if (displayText.startsWith('numbers-')) {
            // Keep the hyphen for ranges like 1-10, but replace for words
            const suffix = displayText.replace('numbers-', '');
            // Check if suffix starts with a digit (e.g. 1-10), if so keep hyphen, else space
            if (/^\d/.test(suffix)) {
                displayText = `Numbers ${suffix}`;
            } else {
                displayText = `Numbers ${suffix.replace('-', ' ')}`;
            }
        }

        // Use theme variables and consistent typography
        // For numbers categories, add responsive line break
        let labelHTML;
        if (displayText.startsWith('Numbers ')) {
            const range = displayText.replace('Numbers ', '');
            labelHTML = `
                <input type="checkbox" value="${cat}" checked class="quiz-checkbox">
                <span class="text-xs font-bold uppercase tracking-wide" style="color: var(--text-secondary);">Numbers<br class="sm:hidden"> ${range}</span>
            `;
        } else {
            labelHTML = `
                <input type="checkbox" value="${cat}" checked class="quiz-checkbox">
                <span class="text-xs font-bold uppercase tracking-wide" style="color: var(--text-secondary);">${displayText}</span>
            `;
        }
        label.innerHTML = labelHTML;
        container.appendChild(label);
    });
}

function selectAllCategories() {
    document.querySelectorAll('#quiz-categories input[type="checkbox"]').forEach(cb => cb.checked = true);
}

function deselectAllCategories() {
    document.querySelectorAll('#quiz-categories input[type="checkbox"]').forEach(cb => cb.checked = false);
}

function startQuiz() {
    const selectedCats = Array.from(document.querySelectorAll('#quiz-categories input:checked')).map(i => i.value);
    if (selectedCats.length === 0) return;

    quizPool = vocabulary.filter(v => selectedCats.includes(v.c)).sort(() => Math.random() - 0.5);
    quizIndex = 0;

    if (quizPool.length === 0) return;

    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-active').classList.remove('hidden');
    updateQuizCard();
}

function updateQuizCard() {
    const item = quizPool[quizIndex];
    const card = document.getElementById('quiz-card');
    card.classList.remove('is-flipped');

    const fText = quizMode === 'JtoE' ? item.j : item.e;
    const bText = quizMode === 'JtoE' ? item.e : item.j;

    document.getElementById('quiz-front-text').innerText = fText;
    document.getElementById('quiz-back-text').innerText = bText;
    document.getElementById('quiz-progress').innerText = `${quizIndex + 1} / ${quizPool.length}`;
    updateNavButtons();
}

function nextQuizCard() {
    quizIndex++;
    if (quizIndex >= quizPool.length) {
        document.getElementById('quiz-active').classList.add('hidden');
        document.getElementById('quiz-result').classList.remove('hidden');
    } else {
        updateQuizCard();
    }
}

function prevQuizCard() {
    if (quizIndex > 0) {
        quizIndex--;
        updateQuizCard();
        updateNavButtons();
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    prevBtn.disabled = quizIndex === 0;
}

function endQuiz() {
    switchTab('quiz');
}

let perspectiveMode = 'kono'; // 'kono' (Speaker->Listener) or 'sono' (Listener->Speaker)

function togglePerspective() {
    perspectiveMode = perspectiveMode === 'kono' ? 'sono' : 'kono';

    // Update UI
    const labelKono = document.getElementById('label-kono');
    const labelSono = document.getElementById('label-sono');
    const icon = document.getElementById('perspective-icon');

    if (perspectiveMode === 'kono') {
        // Speaker View (Pink Gradient)
        labelKono.textContent = 'Kono';
        labelSono.textContent = 'Sono';
        icon.style.transform = 'rotate(0deg)';
        document.getElementById('perspective-bg').style.background = 'var(--gradient-speaker)';
    } else {
        // Listener View (Blue Gradient)
        labelKono.textContent = 'Sono';
        labelSono.textContent = 'Kono';
        icon.style.transform = 'rotate(180deg)';
        document.getElementById('perspective-bg').style.background = 'var(--gradient-listener)';
    }

    renderDialogue();
}

// Helper for bidirectional swapping
function swapPerspectiveText(text) {
    if (!text) return text;

    // Map of swappable terms
    const map = {
        'Kono': 'Sono', 'Sono': 'Kono',
        'kono': 'sono', 'sono': 'kono',
        'Kore': 'Sore', 'Sore': 'Kore',
        'kore': 'sore', 'sore': 'kore',
        'Koko': 'Soko', 'Soko': 'Koko',
        'koko': 'soko', 'soko': 'koko'
    };

    // We look for whole words matching our keys
    return text.replace(/\b(Kono|Sono|kono|sono|Kore|Sore|kore|sore|Koko|Soko|koko|soko)\b/g, (match) => {
        return map[match] || match;
    });
}

function swapEnglishPerspective(text, jpText) {
    if (!text) return text;

    // If Japanese text contains "Ano", "Are", or "Asoko", 
    // it refers to something far from *both* speaker and listener.
    // In this case, "That" (English) should logically remain "That" and NOT swap to "This".
    if (jpText && (jpText.includes('Ano') || jpText.includes('Are') || jpText.includes('Asoko') ||
        jpText.includes('ano') || jpText.includes('are') || jpText.includes('asoko'))) {
        return text;
    }

    // Simple swap for English context: This <-> That
    // Case insensitive but preserve case for replacement
    const map = {
        'This': 'That', 'That': 'This',
        'this': 'that', 'that': 'this'
    };
    return text.replace(/\b(This|That|this|that)\b/g, (match) => {
        return map[match] || match;
    });
}

function renderDialogue() {
    const list = document.getElementById('dialogue-list');
    list.innerHTML = '';
    scenarios.forEach((s, i) => {
        let question, questionEN, pos, posEN, neg, negEN;
        if (perspectiveMode === 'kono') {
            // Speaker View (Default)
            question = s.question;
            questionEN = s.questionEN;
            pos = s.pos;
            posEN = s.posEN;
            neg = s.neg;
            negEN = s.negEN;
        } else {
            // Listener View: Swap perspectives (only Japanese swaps text, English stays same meaning but context might change - for now keep EN static or should we swap 'this/that'?)
            // Actually, if we swap 'Kono' to 'Sono', the English 'This' should become 'That'.
            // Let's swap the English pronouns too for consistency.
            question = swapPerspectiveText(s.question);
            questionEN = swapEnglishPerspective(s.questionEN, s.question);
            pos = swapPerspectiveText(s.pos);
            posEN = swapEnglishPerspective(s.posEN, s.pos);
            neg = swapPerspectiveText(s.neg);
            negEN = swapEnglishPerspective(s.negEN, s.neg);
        }

        const div = document.createElement('div');
        div.className = "rounded-xl p-6 shadow-sm transition-colors duration-300";
        div.style.cssText = "background-color: var(--bg-secondary); border: 1.5px solid var(--border-color);";
        div.innerHTML = `
            <h3 class="text-xs font-semibold uppercase tracking-widest mb-3" style="color: var(--text-muted);">${s.title}</h3>
            <p class="text-lg font-semibold mb-1" style="color: var(--text-primary);">Q: ${question}</p>
            <p class="text-sm italic opacity-70 mb-6" style="color: var(--text-secondary);">${questionEN}</p>
            <div class="grid grid-cols-2 gap-3 mb-6">
                <button onclick="toggleD('p${i}')" class="text-xs font-semibold uppercase py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]" style="background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2);">Positive</button>
                <button onclick="toggleD('n${i}')" class="text-xs font-semibold uppercase py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]" style="background: rgba(244, 63, 94, 0.1); color: #f43f5e; border: 1px solid rgba(244, 63, 94, 0.2);">Negative</button>
            </div>
            <div id="p${i}" class="reveal-section p-4 rounded-lg border-l-4 mb-2" style="background: var(--bg-tertiary); border-left-color: #10b981;">
                <p class="text-sm font-medium" style="color: var(--text-primary);">${pos}</p>
                <p class="text-xs italic opacity-70 mt-1" style="color: var(--text-secondary);">${posEN}</p>
            </div>
            <div id="n${i}" class="reveal-section p-4 rounded-lg border-l-4" style="background: var(--bg-tertiary); border-left-color: #f43f5e;">
                <p class="text-sm font-medium" style="color: var(--text-primary);">${neg}</p>
                <p class="text-xs italic opacity-70 mt-1" style="color: var(--text-secondary);">${negEN}</p>

            </div>
        `;
        list.appendChild(div);
    });
}

function toggleD(id) {
    const target = document.getElementById(id);
    const parent = target.parentElement; // div.grid.grid-cols-2... NO wait.
    // DOM structure correction:
    // div.rounded-xl 
    //   h3
    //   p
    //   div.grid (buttons)
    //   div#pi
    //   div#ni

    // In original code: const parent = target.parentElement; meant the Grid?
    // No, toggleD is called by button in grid.
    // Wait, the toggleD logic: `const parent = target.parentElement;`
    // `target` is the `div#p${i}` or `div#n${i}` which are SIBLINGS of the grid.
    // Ah, `toggleD` argument is the ID of the reveal section.
    // So `target` is the reveal section.
    // Its parent is the `div.rounded-xl`.
    // Correct.

    // BUT in the button onclick: `toggleD('p${i}')`
    // The previous implementation:
    // `const parent = target.parentElement;` -> Correct (the card container).
    // `parent.querySelectorAll('.reveal-section')` -> finds both p and n.
    // `if (s.id !== id) s.classList.remove('active');` -> closes the other one.
    // `target.classList.toggle('active');` -> toggles current.

    // This logic is correct. I will preserve it exactly.

    const container = target.parentElement;
    container.querySelectorAll('.reveal-section').forEach(s => {
        if (s.id !== id) s.classList.remove('active');
    });
    target.classList.toggle('active');
}

function toggleTheme(event) {
    if (!document.startViewTransition) {
        updateTheme();
        return;
    }

    document.startViewTransition(() => updateTheme()); return;
    /*
    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : window.innerHeight / 2;
    const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => updateTheme());

    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
        ];

        document.documentElement.animate(
            {
                clipPath: clipPath
            },
            {
                duration: 500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)'
            }
        );
    });
    */
}

function updateTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark-mode');

    if (isDark) {
        html.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        document.getElementById('theme-icon').innerText = '🌙';
    } else {
        html.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-icon').innerText = '☀️';
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;

    if (savedTheme === 'dark') {
        html.classList.add('dark-mode');
        document.getElementById('theme-icon').innerText = '☀️';
    } else {
        html.classList.remove('dark-mode');
        document.getElementById('theme-icon').innerText = '🌙';
    }
}

window.onload = function () {
    initTheme();
    initCategoryDropdown();
    const termInput = document.getElementById('termSearch');
    if (termInput) {
        termInput.addEventListener('input', filterCards);
    }
    filterCards();
};

// Scroll to Top Logic
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Scroll Button
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if (btn) {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }
});
