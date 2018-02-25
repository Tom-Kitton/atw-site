
//Defining character object, to report//
var character = {};
character["fullName"];
character["age"];
character["occupation"];

//Listing all names in arrNames//

var arrNames = [
"tobin",
"meer",
"finn",
"Chaunsey",
"Varlette",
"Dansey",
"Meisse",
"Ding",
"Uwert",
"Meincice",
"Iovan",
"Oesgeese",
"Loesse",
"Wahler",
"Menud",
"Giselt",
"Pawren",
"Ellys",
"Denys",
"Orronomo",
"Jhieng",
"Direc",
"Jiames",
"Solomon",
"Emilie",
"Simone",
"Giscard",
"Dickery",
"Opsley",
"Peesmake",
"Eppington",
"Slater",
"Marmery",
"Lockdell",
"Go-Whitting",
"Chuckslee",
"Cooper",
"Olivet",
"Warde",
"Deckart",
"Peacher",
"Elmswood",
"Fallada",
"Giscert",
"Pickles",
"Morsley",
"Onlylle",
"Streder",
"Kade",
"Steke",
"Clere",
"Dorvey",
"Ann",
"Aura",
"Kimbo",
"Geggs",
"Maeter",
"Caesegyrt",
"Tyggs",
"Giesel",
"Derryn",
"Ilien",
"Verucia",
"Porto",
"Totian",
"Liovan",
"Merrys",
"Osmyn",
"Orhen",
"Oyzze",
"Juilliet",
"Silend",
"Dellys",
"Benet",
"Laszolo",
"Orenne",
"Limey",
"Lauret",
"Willon",
"Maisley",
"Porta",
"Teyen",
"Atillio",
"Sibilla",
"Giossa",
"Barbro",
"Ermolao",
"Boellielli",
"Detto",
"Magni",
"Corrado",
"Cecco",
"Aloian",
"Bardil",
"Croce",
"Drigo",
"Arrico",
"Dina",
"Evola",
"Garallo",
"Brunhi",
"Lussu",
"Gienna",
"Rhanca",
"Zaccaro",
"Ales",
"Zmitra",
"Zmito",
"Maksima",
"Vasil",
"Ciotko",
"Bykau",
"Barad",
"Ardulino",
"Kuzma",
"Uladz",
"Junko",
"Napaleo",
"Leu",
"Lew",
"Rhyn",
"Chanche",
"Lavazzi",
"Jaber",
"Fekyr",
"Taha",
"Tamakmul",
"Manrous",
"Ousmat",
"Toumats",
"Rifuan",
"Faruhi",
"Alit",
"Fauiz",
"Ahdat",
"Fandar",
"Chimo",
"Mohol",
"Jafiy",
"Gonles",
"Lipeng",
"Onjez",
"Inez",
"Kambul",
"Mapus",
"Rabad",
"Torsel",
"Tiers",
"Enwir",
"Woster",
"Owel",
"Eillion",
"Moship",
"Nisi",
"Derer",
"Garron",
"Moho",
"Dhev",
"Radom",
"Ethmet",
"Mehmir",
"Miccal",
"Tipper",
"Suss",
"Liesse",
"Utto",
"Leon",
"Merrin",
"Clythe",
"Charlette",
"Yvette",
"Yves",
"Merie",
"Erienne",
"Leann",
"Joan",
"Florian",
"Egwind",
"Ten",
"Vieng",
"Wilhuff",
"Orchart",
"Phoebe",
"Anise",
"Birgit",
"Enger",
"Veera",
"Hanne",
];

//Generating fullName from two passes through arrNames array//
var randomNumberFirstName = Math.floor(Math.random() * arrNames.length);
var randomNumberLastName = Math.floor(Math.random() * arrNames.length);
var characterFirstName = arrNames[randomNumberFirstName];
var characterFirstNameSpaced = characterFirstName.concat(" ") 
var characterLastName = arrNames[randomNumberLastName];
var fullName = characterFirstNameSpaced.concat(characterLastName);

//Generating age as a random number between 21 and 93//
var ageRaw = Math.floor(Math.random() * 71);
var age = ageRaw+21;

//Listing occupations in arrOccupations//

var arrOccupation= [
"Architect",
"Chandler",
"shipwright",
"clerk",
"magistrate",
"broker",
"weaver",
"carrier",
"carter",
"engineer",
"cleric",
"guard",
"messsenger",
"advocate",
"writ-carrier",
"speaker",
"herald",
"journalist",
"tanner",
"dyer",
"Hawker",
"Tinker",
"Labourer",
"Musician",
"Assassin",
"Cook",
"Sailor",
"miner",
"housekeeper",
"domestic",
"servant",
"factory worker",
"investor",
"landowner",
"nobleperson",
"beadle",
"deacon",
"shopkeeper",
"fishmonger",
"slaughterperson",
"farmer",
"woodcutter",
"charcoal burner",
"customs agent",
"politician",
"iron monger",
"clock maker",
"paper maker",
"bookbinder",
"printer",
"brickmaker",
"potter",
"silverworker",
"wetnurse",
"doctor",
"glass-breaker",
"spiritualist",
"apothecary",
"barber",
"animalist",
"zoo-keeper",
"internist",
"speaker to ghosts",
"rogue",
"gigolo",
"sex-worker",
"radical",
"teacher",
"lecturer",
"childminder",
"sweetmaker",
"bacterist",
"charlatan",
"coffee roaster",
"brewer",
"winemaker",
"smokehouser",
"chancellor",
"clerk",
"auditor",
"dunghauler",
"Costermonger",
"Carpenter",
"Thatcher",
"Tiler",
"Mosaic Artist",
"Vexatious Litigant",
"Water Diviner",
"Ganrdener",
"Arborist",
"Herbalist",
"Cottager",
"Crofter",
"Sherpherd",
"Bird Catcher",
"Angler",
"Eel Seller",
"Temple Guardian",
"Sin Eater",
"Shaman",
"Priest",
"Incense Grinder",
"Spice Taster",
"Sommelier",
"Assayer of gems and metals",
"Taster",
"Printer's assistant",
"Copyist",
"Editor",
"Joiner",
"Woodturner",
"Nail Cutter",
"Smith",
"Miller",
"Grocer",
"Draper",
"Milliner",
"Furrier",
"Auctioneer",
"Bookkeeper",
"gambling house keeper",
"Tavern Keeper",
"Smuggler",
"Vagabond",
"Baker",
"Pastry Cook",
"Bailiff",
"Reeve at Arms",
"Watch Keeper",
"Place Holder",
"Landlord",
"Hired Thug",
"Gunsmith",
"Fletcher",
"Armourer",
"Cannon Founder",
"Foundry worker",
"Coal-stoker",
"Place-filler",
"Dancer",
"Beggar",
"Gleaner",
"Muck Dragger",
"Dredge Trawler",
"Lumber seller",
"Basket weaver",
"Censor",
"Dog catcher",
"Refuse collector",
"Night soil carrier",
"Midwife",
"Nurse",
"Lady's companion",
"Gin steamer",
"Druggist",
"Drug house keeper",
"Griddle cleaner",
"Street sweeper",
"Grass mower",
"Dog trainer",
"Circus worker",
"Cog founder",
"Carnival operator",
"Sugarplum maker",
"Book reviewer",
"Crepe seller",
"Florist",
"Posy-seller",
"Match-seller",
"Ink-seller",
"Pan-repairer",
"Ostler",
"Carriage repairer",
"Groom",
"Sandwich seller",
"Advertiser",
"Poster sticker",
"Ice seller",
"Prize fighter",
"Knife Sharpener",
"Cobbler",
"Spectacle Maker",
"Bellringer",
"Housedresser",
"Estate Agent",
"Chorister",
"Ammanuensis",
"Docent",
"Fry cook",
"Pork roaster",
"Wheelwright",
"Gravedigger",
"Professional mourner",
"Mason",
"Clothes launderer",
"Banker",
"Beekeeper",
"Aviarist",
"Gosherd",
"Swineherd",
"Trinketeer",
"Engraver",
"Illustrator",
"Muralist",
"Juggler",
"Sculptor",
"Oil skimmer",
"Wagoneer",
"Maker of paper dolls",
"Kite seller",
"Doll maker",
"Toy soldier founder",
"Card shark",
"Shell diver",
"Tide picker",
"Chartier",
"Mapmaker",
"Surveyor",
"Flag embroiderer",
"Paint seller",
"Furniture seller",
"Butler",
"Valet",
"Organ grinder",
"Bear dancer",
"Monkey trainer",
"Vote faker",
"House steward",
"Bowyer",
"Cooper",
"Soapmaker",
"Storyteller",
"Interpreter",
"Translator",
"Tout",
"Fence",
"Counterfeiter",
"Mancatcher",
"Bounty agent",
"Astronomer",
"Card oracle",
"Salted piglet man",
"Squid catcher",
"Picture hanger",
"paper hanger",
"Rat Catcher",
"Calendarist",
"Calculator",
"Dramatist",
"Actor",
"Lifeboat rower",
"Barge puller",
"Deckhand",
"Dockhand",
"Doctor's fetchling",
"Water seller",
"Tattooist",
"Storyteller",
"Puppet maker",
"Puppetteer",
"Street painter",
"Chalk artist",
"Diplomat",
"Fortuner teller",
"Palmist",
"Distiller",
"Masseuse",
"Bone setter",
"Consulting linguist",
"Seal setter",
"Seal carver",
"Glazier",
"Layabout",
"Lounger",
"Idler",
"Scraper",
"Bootbrush",
"Coatchecker",
"Wool brusher",
"Yarn twister",
"Loom setter",
"Lens Grinder",
"Microscopist",
"Bowel washer",
"Vote-getter",
"Doorman",
"Archivist",
"Librarian",
"House mover",
"Bracefitter",
"Corsetiere",
"Lingeriere",
"Lacemaker",
"Crocheter",
"Agronomist",
"Hermit",
"Reasoner",
"Lighthouse Keeper",
"Lamplighter",
"Tootchcaster",
"Weatherwatcher",
"Place-keeper",
"Night cart puller",
"Paid agitator",
"trinketeer"
];

//Generating occupation from arrOccupation array//
var randomNumberOccupation = Math.floor(Math.random() * arrOccupation.length);
var occupationIndex = randomNumberOccupation;
var occupation = arrOccupation[occupationIndex]; 

//Defining character object, to report//
var character = {};
character["fullName"]=fullName;
character["age"]=age;
character["occupation"]=occupation;

//alerting the character object on button click//

var myButton=document.getElementById('randomCharacter');
function handleClick(){
	alert(character.fullName + ", aged " + character.age + ", is a " + character.occupation);
}
myButton.addEventListener("click", handleClick, false);