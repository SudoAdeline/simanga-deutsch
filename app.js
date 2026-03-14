// ==========================================
// SIMANGA'S DEUTSCH TRAINER - APP
// ==========================================

// ==========================================
// VOCABULARY DATA (from Goethe A2 Wortliste)
// ==========================================
const vocabData = [
  // FAMILIE & PERSONEN
  {de:"der Bruder, Brüder",en:"brother",cat:"familie",ex:"Mein Bruder wohnt in Berlin."},
  {de:"die Schwester, -n",en:"sister",cat:"familie",ex:"Meine Schwester ist älter als ich."},
  {de:"die Eltern (Pl.)",en:"parents",cat:"familie",ex:"Meine Eltern kommen aus Südafrika."},
  {de:"das Kind, -er",en:"child",cat:"familie",ex:"Sie haben drei Kinder."},
  {de:"die Mutter, Mütter",en:"mother",cat:"familie",ex:"Meine Mutter kocht sehr gut."},
  {de:"der Vater, Väter",en:"father",cat:"familie",ex:"Mein Vater arbeitet als Lehrer."},
  {de:"die Großmutter (Oma)",en:"grandmother",cat:"familie",ex:"Meine Oma wohnt auf dem Land."},
  {de:"der Großvater (Opa)",en:"grandfather",cat:"familie",ex:"Opa erzählt gern Geschichten."},
  {de:"der Sohn, Söhne",en:"son",cat:"familie",ex:"Ihr Sohn ist zehn Jahre alt."},
  {de:"die Tochter, Töchter",en:"daughter",cat:"familie",ex:"Unsere Tochter geht in die Schule."},
  {de:"die Geschwister (Pl.)",en:"siblings",cat:"familie",ex:"Hast du Geschwister?"},
  {de:"der Cousin, -s",en:"cousin (m)",cat:"familie",ex:"Mein Cousin lebt in Hamburg."},
  {de:"die Cousine, -n",en:"cousin (f)",cat:"familie",ex:"Meine Cousine studiert Medizin."},
  {de:"der Onkel, -",en:"uncle",cat:"familie",ex:"Onkel Thomas kommt morgen."},
  {de:"die Tante, -n",en:"aunt",cat:"familie",ex:"Tante Maria hat Geburtstag."},
  {de:"die Verwandten",en:"relatives",cat:"familie",ex:"Wir besuchen unsere Verwandten."},
  {de:"der Freund, -e",en:"friend (m) / boyfriend",cat:"familie",ex:"Mein bester Freund heißt Marco."},
  {de:"die Freundin, -nen",en:"friend (f) / girlfriend",cat:"familie",ex:"Meine Freundin kommt aus Japan."},
  {de:"der Nachbar, -n",en:"neighbour",cat:"familie",ex:"Unsere Nachbarn sind sehr nett."},
  {de:"verheiratet",en:"married",cat:"familie",ex:"Sind Sie verheiratet?"},
  {de:"ledig",en:"single",cat:"familie",ex:"Er ist ledig."},
  {de:"geschieden",en:"divorced",cat:"familie",ex:"Sie ist geschieden."},

  // ESSEN & TRINKEN
  {de:"das Brot, -e",en:"bread",cat:"essen",ex:"Nimm doch noch ein Brot."},
  {de:"das Brötchen, -",en:"bread roll",cat:"essen",ex:"Möchtest du Brötchen zum Frühstück?"},
  {de:"die Butter (Sg.)",en:"butter",cat:"essen",ex:"Möchtest du Butter aufs Brot?"},
  {de:"der Käse (Sg.)",en:"cheese",cat:"essen",ex:"Ich esse gern Käse."},
  {de:"die Wurst, Würste",en:"sausage",cat:"essen",ex:"In Deutschland gibt es viele Wurstsorten."},
  {de:"das Fleisch (Sg.)",en:"meat",cat:"essen",ex:"Braten Sie das Fleisch in Öl."},
  {de:"der Fisch, -e",en:"fish",cat:"essen",ex:"Freitags essen wir Fisch."},
  {de:"das Hähnchen, -",en:"chicken",cat:"essen",ex:"Ich nehme das Hähnchen."},
  {de:"der Reis (Sg.)",en:"rice",cat:"essen",ex:"Möchten Sie Reis oder Nudeln?"},
  {de:"die Nudel, -n",en:"noodle / pasta",cat:"essen",ex:"Kinder lieben Nudeln."},
  {de:"die Kartoffel, -n",en:"potato",cat:"essen",ex:"Kartoffeln sind sehr beliebt in Deutschland."},
  {de:"das Gemüse (Sg.)",en:"vegetables",cat:"essen",ex:"Essen Sie genug Gemüse?"},
  {de:"das Obst (Sg.)",en:"fruit",cat:"essen",ex:"Obst ist gesund."},
  {de:"der Apfel, Äpfel",en:"apple",cat:"essen",ex:"Ein Kilo Äpfel, bitte."},
  {de:"die Banane, -n",en:"banana",cat:"essen",ex:"Drei Bananen, bitte!"},
  {de:"die Tomate, -n",en:"tomato",cat:"essen",ex:"Ich brauche noch Tomaten."},
  {de:"der Salat, -e",en:"salad / lettuce",cat:"essen",ex:"Möchten Sie noch etwas Salat?"},
  {de:"die Suppe, -n",en:"soup",cat:"essen",ex:"Die Suppe ist heiß."},
  {de:"der Kuchen, -",en:"cake",cat:"essen",ex:"Ich backe einen Kuchen."},
  {de:"das Eis (Sg.)",en:"ice cream / ice",cat:"essen",ex:"Möchtest du ein Eis?"},
  {de:"der Zucker (Sg.)",en:"sugar",cat:"essen",ex:"Kaffee ohne Zucker, bitte."},
  {de:"das Salz (Sg.)",en:"salt",cat:"essen",ex:"Gibst du mir bitte das Salz?"},
  {de:"das Öl, -e",en:"oil",cat:"essen",ex:"Braten Sie das Fleisch in etwas Öl."},
  {de:"das Wasser (Sg.)",en:"water",cat:"essen",ex:"Ein Glas Wasser, bitte."},
  {de:"der Kaffee, -s",en:"coffee",cat:"essen",ex:"Eine Tasse Kaffee, bitte!"},
  {de:"der Tee, -s",en:"tea",cat:"essen",ex:"Möchten Sie einen Tee?"},
  {de:"die Milch (Sg.)",en:"milk",cat:"essen",ex:"Mit Milch und Zucker?"},
  {de:"der Saft, Säfte",en:"juice",cat:"essen",ex:"Einen Orangensaft, bitte."},
  {de:"das Bier, -e",en:"beer",cat:"essen",ex:"Noch ein Bier, bitte."},
  {de:"der Wein, -e",en:"wine",cat:"essen",ex:"Ein Glas Rotwein, bitte."},
  {de:"das Frühstück, -e",en:"breakfast",cat:"essen",ex:"Was möchtest du zum Frühstück?"},
  {de:"das Mittagessen, -",en:"lunch",cat:"essen",ex:"Was gibt es zum Mittagessen?"},
  {de:"das Abendessen, -",en:"dinner",cat:"essen",ex:"Das Abendessen ist um 19 Uhr."},
  {de:"das Gericht, -e",en:"dish / meal",cat:"essen",ex:"Was ist Ihr Lieblingsgericht?"},
  {de:"das Rezept, -e",en:"recipe / prescription",cat:"essen",ex:"Hast du ein gutes Rezept?"},

  // WOHNEN & HAUS
  {de:"die Wohnung, -en",en:"apartment",cat:"wohnen",ex:"Wir haben eine kleine Wohnung."},
  {de:"das Haus, Häuser",en:"house",cat:"wohnen",ex:"Unsere Nachbarn bauen ein neues Haus."},
  {de:"das Zimmer, -",en:"room",cat:"wohnen",ex:"Die Wohnung hat vier Zimmer."},
  {de:"die Küche, -n",en:"kitchen",cat:"wohnen",ex:"Die Küche ist klein."},
  {de:"das Bad, Bäder",en:"bathroom",cat:"wohnen",ex:"Das Haus hat kein Bad."},
  {de:"das Schlafzimmer, -",en:"bedroom",cat:"wohnen",ex:"Das Schlafzimmer ist groß."},
  {de:"das Wohnzimmer, -",en:"living room",cat:"wohnen",ex:"Wir sitzen im Wohnzimmer."},
  {de:"der Balkon, -e",en:"balcony",cat:"wohnen",ex:"Die Wohnung hat einen kleinen Balkon."},
  {de:"der Garten, Gärten",en:"garden",cat:"wohnen",ex:"Wir haben einen schönen Garten."},
  {de:"die Tür, -en",en:"door",cat:"wohnen",ex:"Mach bitte die Tür zu!"},
  {de:"das Fenster, -",en:"window",cat:"wohnen",ex:"Öffne bitte das Fenster."},
  {de:"die Treppe, -n",en:"stairs",cat:"wohnen",ex:"Die Treppe ist im Flur."},
  {de:"der Aufzug, Aufzüge",en:"elevator",cat:"wohnen",ex:"Der Aufzug ist leider kaputt."},
  {de:"der Tisch, -e",en:"table",cat:"wohnen",ex:"Das Buch liegt auf dem Tisch."},
  {de:"der Stuhl, Stühle",en:"chair",cat:"wohnen",ex:"Setz dich auf den Stuhl."},
  {de:"das Bett, -en",en:"bed",cat:"wohnen",ex:"Sie muss im Bett bleiben."},
  {de:"der Schrank, Schränke",en:"wardrobe / cupboard",cat:"wohnen",ex:"Die Kleidung ist im Schrank."},
  {de:"die Lampe, -n",en:"lamp",cat:"wohnen",ex:"Die Lampe am Eingang geht nicht."},
  {de:"die Miete, -n",en:"rent",cat:"wohnen",ex:"Die Miete ist sehr hoch."},
  {de:"der Stock / das Stockwerk",en:"floor / storey",cat:"wohnen",ex:"Wir wohnen im dritten Stock."},

  // REISEN & VERKEHR
  {de:"der Bahnhof, Bahnhöfe",en:"train station",cat:"reisen",ex:"Wie komme ich zum Bahnhof?"},
  {de:"der Zug, Züge",en:"train",cat:"reisen",ex:"Der Zug kommt um 10 Uhr."},
  {de:"der Bus, -se",en:"bus",cat:"reisen",ex:"Wann kommt der nächste Bus?"},
  {de:"die Straßenbahn, -en",en:"tram",cat:"reisen",ex:"Nehmen Sie die Straßenbahn Linie 5."},
  {de:"das Auto, -s",en:"car",cat:"reisen",ex:"Er fährt mit dem Auto."},
  {de:"das Fahrrad, Fahrräder",en:"bicycle",cat:"reisen",ex:"Ich fahre gern mit dem Fahrrad."},
  {de:"das Flugzeug, -e",en:"airplane",cat:"reisen",ex:"Wir fliegen mit dem Flugzeug."},
  {de:"die Fahrkarte, -n",en:"ticket",cat:"reisen",ex:"Eine Fahrkarte nach Berlin, bitte."},
  {de:"der Fahrplan, Fahrpläne",en:"timetable",cat:"reisen",ex:"Schau mal auf den Fahrplan."},
  {de:"die Haltestelle, -n",en:"stop (bus/tram)",cat:"reisen",ex:"An der nächsten Haltestelle aussteigen."},
  {de:"der Flughafen, Flughäfen",en:"airport",cat:"reisen",ex:"Wie komme ich zum Flughafen?"},
  {de:"die Straße, -n",en:"street",cat:"reisen",ex:"Die Kinder spielen auf der Straße."},
  {de:"die Kreuzung, -en",en:"intersection",cat:"reisen",ex:"Fahren Sie an der Kreuzung nach rechts."},
  {de:"die Ampel, -n",en:"traffic light",cat:"reisen",ex:"Die Ampel ist grün."},
  {de:"die Brücke, -n",en:"bridge",cat:"reisen",ex:"Fahren Sie über die Brücke."},
  {de:"der Weg, -e",en:"way / path",cat:"reisen",ex:"Können Sie mir den Weg beschreiben?"},
  {de:"die Karte, -n",en:"map / card / ticket",cat:"reisen",ex:"Haben Sie eine Karte?"},
  {de:"der Koffer, -",en:"suitcase",cat:"reisen",ex:"Packst du den Koffer aus?"},
  {de:"der Urlaub, -e",en:"holiday / vacation",cat:"reisen",ex:"Wir machen im Juli Urlaub."},
  {de:"die Reise, -n",en:"trip / journey",cat:"reisen",ex:"Ich wünsche Ihnen eine gute Reise!"},
  {de:"der Ausflug, Ausflüge",en:"excursion / day trip",cat:"reisen",ex:"Morgen machen wir einen Ausflug."},
  {de:"der Parkplatz, Parkplätze",en:"parking space",cat:"reisen",ex:"Gibt es hier einen Parkplatz?"},

  // ARBEIT & BERUF
  {de:"die Arbeit, -en",en:"work",cat:"arbeit",ex:"Mein Bruder sucht Arbeit."},
  {de:"der Beruf, -e",en:"profession",cat:"arbeit",ex:"Was bist du von Beruf?"},
  {de:"das Büro, -s",en:"office",cat:"arbeit",ex:"Ich arbeite in einem Büro."},
  {de:"der Chef, -s",en:"boss",cat:"arbeit",ex:"Mein Chef ist sehr nett."},
  {de:"der Kollege, -n",en:"colleague (m)",cat:"arbeit",ex:"Mein Kollege hilft mir."},
  {de:"die Kollegin, -nen",en:"colleague (f)",cat:"arbeit",ex:"Meine Kollegin ist krank."},
  {de:"der Termin, -e",en:"appointment",cat:"arbeit",ex:"Ich habe morgen einen Termin."},
  {de:"die Besprechung, -en",en:"meeting",cat:"arbeit",ex:"Die Besprechung ist um 14 Uhr."},
  {de:"die Ausbildung, -en",en:"training / apprenticeship",cat:"arbeit",ex:"Ich mache eine Ausbildung."},
  {de:"der Lehrer / die Lehrerin",en:"teacher",cat:"arbeit",ex:"Sie ist Lehrerin von Beruf."},
  {de:"der Arzt / die Ärztin",en:"doctor",cat:"arbeit",ex:"Ich muss zum Arzt gehen."},
  {de:"der Verkäufer / -in",en:"salesperson",cat:"arbeit",ex:"Die Verkäuferin ist freundlich."},
  {de:"arbeitslos",en:"unemployed",cat:"arbeit",ex:"Er ist seit drei Monaten arbeitslos."},
  {de:"die Stelle, -n",en:"job / position",cat:"arbeit",ex:"Er hat eine neue Stelle gefunden."},
  {de:"die Bewerbung, -en",en:"application",cat:"arbeit",ex:"Kannst du mir bei der Bewerbung helfen?"},

  // FREIZEIT & HOBBY
  {de:"das Hobby, -s",en:"hobby",cat:"freizeit",ex:"Was sind deine Hobbys?"},
  {de:"der Sport (Sg.)",en:"sport",cat:"freizeit",ex:"Peter macht viel Sport."},
  {de:"der Fußball (Sg.)",en:"football",cat:"freizeit",ex:"Spielst du gern Fußball?"},
  {de:"schwimmen",en:"to swim",cat:"freizeit",ex:"Wir gehen heute schwimmen."},
  {de:"das Kino, -s",en:"cinema",cat:"freizeit",ex:"Gehen wir heute Abend ins Kino?"},
  {de:"das Theater, -",en:"theatre",cat:"freizeit",ex:"Wir gehen ins Theater."},
  {de:"das Konzert, -e",en:"concert",cat:"freizeit",ex:"Gehst du mit zum Konzert?"},
  {de:"die Musik (Sg.)",en:"music",cat:"freizeit",ex:"Ich höre gern Musik."},
  {de:"das Buch, Bücher",en:"book",cat:"freizeit",ex:"Ich lese gern Bücher."},
  {de:"die Zeitung, -en",en:"newspaper",cat:"freizeit",ex:"Liest du die Zeitung?"},
  {de:"der Film, -e",en:"film / movie",cat:"freizeit",ex:"Der Film war toll!"},
  {de:"das Spiel, -e",en:"game / match",cat:"freizeit",ex:"Das Spiel beginnt um 15 Uhr."},
  {de:"der Verein, -e",en:"club / association",cat:"freizeit",ex:"Ich bin im Sportverein."},
  {de:"die Party, -s",en:"party",cat:"freizeit",ex:"Kommst du zur Party?"},
  {de:"der Geburtstag, -e",en:"birthday",cat:"freizeit",ex:"Morgen habe ich Geburtstag!"},
  {de:"das Geschenk, -e",en:"gift / present",cat:"freizeit",ex:"Danke für das Geschenk!"},
  {de:"die Feier, -n",en:"celebration",cat:"freizeit",ex:"Die Feier war sehr schön."},
  {de:"fotografieren",en:"to photograph",cat:"freizeit",ex:"Ich fotografiere gern."},

  // KÖRPER & GESUNDHEIT
  {de:"der Kopf, Köpfe",en:"head",cat:"koerper",ex:"Mir tut der Kopf weh."},
  {de:"das Auge, -n",en:"eye",cat:"koerper",ex:"Er hat blaue Augen."},
  {de:"die Nase, -n",en:"nose",cat:"koerper",ex:"Meine Nase ist verstopft."},
  {de:"der Mund, Münder",en:"mouth",cat:"koerper",ex:"Machen Sie bitte den Mund auf."},
  {de:"das Ohr, -en",en:"ear",cat:"koerper",ex:"Mein Ohr tut weh."},
  {de:"der Arm, -e",en:"arm",cat:"koerper",ex:"Mein Arm tut weh."},
  {de:"das Bein, -e",en:"leg",cat:"koerper",ex:"Mein rechtes Bein tut weh."},
  {de:"der Bauch, Bäuche",en:"stomach / belly",cat:"koerper",ex:"Mir tut der Bauch weh."},
  {de:"der Rücken, -",en:"back",cat:"koerper",ex:"Ich habe Rückenschmerzen."},
  {de:"der Fuß, Füße",en:"foot",cat:"koerper",ex:"Mein Fuß tut weh."},
  {de:"die Hand, Hände",en:"hand",cat:"koerper",ex:"Gib mir bitte deine Hand."},
  {de:"der Finger, -",en:"finger",cat:"koerper",ex:"Er hat sich in den Finger geschnitten."},
  {de:"krank",en:"sick / ill",cat:"koerper",ex:"Ich bin krank."},
  {de:"gesund",en:"healthy",cat:"koerper",ex:"Obst ist gesund."},
  {de:"die Erkältung, -en",en:"cold (illness)",cat:"koerper",ex:"Ich habe eine Erkältung."},
  {de:"das Fieber (Sg.)",en:"fever",cat:"koerper",ex:"Das Kind hat Fieber."},
  {de:"die Schmerzen (Pl.)",en:"pain",cat:"koerper",ex:"Ich habe Kopfschmerzen."},
  {de:"das Medikament, -e",en:"medicine",cat:"koerper",ex:"Nehmen Sie dieses Medikament."},
  {de:"die Apotheke, -n",en:"pharmacy",cat:"koerper",ex:"Das bekommen Sie in der Apotheke."},
  {de:"das Krankenhaus, -häuser",en:"hospital",cat:"koerper",ex:"Er liegt im Krankenhaus."},

  // ALLTAG & EINKAUFEN
  {de:"das Geld (Sg.)",en:"money",cat:"alltag",ex:"Ich habe nicht genug Geld."},
  {de:"der Preis, -e",en:"price",cat:"alltag",ex:"Was ist der Preis?"},
  {de:"billig",en:"cheap",cat:"alltag",ex:"Das ist aber billig!"},
  {de:"teuer",en:"expensive",cat:"alltag",ex:"Die Miete ist sehr teuer."},
  {de:"das Geschäft, -e",en:"shop / store",cat:"alltag",ex:"Hat das Geschäft noch auf?"},
  {de:"der Supermarkt, -märkte",en:"supermarket",cat:"alltag",ex:"Ich muss zum Supermarkt."},
  {de:"die Bäckerei, -en",en:"bakery",cat:"alltag",ex:"Ich gehe zur Bäckerei."},
  {de:"der Markt, Märkte",en:"market",cat:"alltag",ex:"Samstags gehe ich auf den Markt."},
  {de:"kaufen",en:"to buy",cat:"alltag",ex:"Ich muss noch Milch kaufen."},
  {de:"bezahlen",en:"to pay",cat:"alltag",ex:"Wo kann ich bezahlen?"},
  {de:"das Angebot, -e",en:"offer / special deal",cat:"alltag",ex:"Bananen sind heute im Angebot."},
  {de:"die Kasse, -n",en:"cash register / checkout",cat:"alltag",ex:"Bitte zahlen Sie an der Kasse."},
  {de:"die Größe, -n",en:"size",cat:"alltag",ex:"Welche Größe haben Sie?"},
  {de:"die Kleidung (Sg.)",en:"clothing",cat:"alltag",ex:"Ich brauche neue Kleidung."},
  {de:"das Kleid, -er",en:"dress",cat:"alltag",ex:"Das Kleid sieht hübsch aus."},
  {de:"die Hose, -n",en:"trousers",cat:"alltag",ex:"Ich suche eine blaue Hose."},
  {de:"das Hemd, -en",en:"shirt",cat:"alltag",ex:"Er zieht ein weißes Hemd an."},
  {de:"die Jacke, -n",en:"jacket",cat:"alltag",ex:"Die Jacke gefällt mir."},
  {de:"der Schuh, -e",en:"shoe",cat:"alltag",ex:"Ich brauche neue Schuhe."},
  {de:"die Brille, -n",en:"glasses",cat:"alltag",ex:"Wo ist meine Brille?"},

  // ZEIT & WETTER
  {de:"die Uhr, -en",en:"clock / watch / o'clock",cat:"zeit",ex:"Es ist 10 Uhr."},
  {de:"die Stunde, -n",en:"hour",cat:"zeit",ex:"Wir warten schon eine Stunde."},
  {de:"die Minute, -n",en:"minute",cat:"zeit",ex:"Ich komme in fünf Minuten."},
  {de:"heute",en:"today",cat:"zeit",ex:"Heute kann ich nicht kommen."},
  {de:"morgen",en:"tomorrow",cat:"zeit",ex:"Morgen habe ich Zeit."},
  {de:"gestern",en:"yesterday",cat:"zeit",ex:"Gestern war ich im Kino."},
  {de:"jetzt",en:"now",cat:"zeit",ex:"Ich muss jetzt gehen."},
  {de:"früh",en:"early",cat:"zeit",ex:"Ich stehe früh auf."},
  {de:"spät",en:"late",cat:"zeit",ex:"Es ist schon spät."},
  {de:"das Wetter (Sg.)",en:"weather",cat:"zeit",ex:"Das Wetter ist heute schön."},
  {de:"die Sonne (Sg.)",en:"sun",cat:"zeit",ex:"Die Sonne scheint."},
  {de:"der Regen (Sg.)",en:"rain",cat:"zeit",ex:"Es gibt viel Regen."},
  {de:"der Schnee (Sg.)",en:"snow",cat:"zeit",ex:"Im Winter gibt es Schnee."},
  {de:"warm",en:"warm",cat:"zeit",ex:"Heute ist es warm."},
  {de:"kalt",en:"cold",cat:"zeit",ex:"Im Winter ist es kalt."},
  {de:"bewölkt",en:"cloudy",cat:"zeit",ex:"Heute ist es bewölkt."},

  // SCHULE & LERNEN
  {de:"die Schule, -n",en:"school",cat:"schule",ex:"Die Kinder gehen in die Schule."},
  {de:"die Universität, -en",en:"university",cat:"schule",ex:"Sie studiert an der Universität."},
  {de:"der Kurs, -e",en:"course",cat:"schule",ex:"Ich mache einen Deutschkurs."},
  {de:"die Prüfung, -en",en:"exam",cat:"schule",ex:"Ich habe die Prüfung bestanden!"},
  {de:"die Hausaufgabe, -n",en:"homework",cat:"schule",ex:"Hast du die Hausaufgaben gemacht?"},
  {de:"die Klasse, -n",en:"class",cat:"schule",ex:"In meiner Klasse sind 20 Schüler."},
  {de:"lernen",en:"to learn / study",cat:"schule",ex:"Ich lerne Deutsch."},
  {de:"üben",en:"to practice",cat:"schule",ex:"Du musst mehr üben."},
  {de:"die Sprache, -n",en:"language",cat:"schule",ex:"Welche Sprachen sprechen Sie?"},
  {de:"verstehen",en:"to understand",cat:"schule",ex:"Ich verstehe das nicht."},
  {de:"erklären",en:"to explain",cat:"schule",ex:"Können Sie das bitte erklären?"},
  {de:"das Wort, Wörter",en:"word",cat:"schule",ex:"Wie heißt das Wort auf Deutsch?"},
  {de:"der Satz, Sätze",en:"sentence",cat:"schule",ex:"Bitte schreiben Sie den Satz."},
  {de:"die Bibliothek, -en",en:"library",cat:"schule",ex:"Sie lernt in der Bibliothek."},
  {de:"der Computer, -",en:"computer",cat:"schule",ex:"Mein Computer ist schon alt."},
  {de:"das Internet (Sg.)",en:"internet",cat:"schule",ex:"Ich suche im Internet."},
];

// ==========================================
// VERBS DATA
// ==========================================
const verbsData = [
  {inf:"machen",en:"to do/make",type:"regular",
    praesens:["mache","machst","macht","machen","macht","machen"],
    perfekt:{aux:"haben",pp:"gemacht"},
    praeteritum:["machte","machtest","machte","machten","machtet","machten"]},
  {inf:"gehen",en:"to go",type:"irregular",
    praesens:["gehe","gehst","geht","gehen","geht","gehen"],
    perfekt:{aux:"sein",pp:"gegangen"},
    praeteritum:["ging","gingst","ging","gingen","gingt","gingen"]},
  {inf:"kommen",en:"to come",type:"irregular",
    praesens:["komme","kommst","kommt","kommen","kommt","kommen"],
    perfekt:{aux:"sein",pp:"gekommen"},
    praeteritum:["kam","kamst","kam","kamen","kamt","kamen"]},
  {inf:"haben",en:"to have",type:"irregular",
    praesens:["habe","hast","hat","haben","habt","haben"],
    perfekt:{aux:"haben",pp:"gehabt"},
    praeteritum:["hatte","hattest","hatte","hatten","hattet","hatten"]},
  {inf:"sein",en:"to be",type:"irregular",
    praesens:["bin","bist","ist","sind","seid","sind"],
    perfekt:{aux:"sein",pp:"gewesen"},
    praeteritum:["war","warst","war","waren","wart","waren"]},
  {inf:"werden",en:"to become",type:"irregular",
    praesens:["werde","wirst","wird","werden","werdet","werden"],
    perfekt:{aux:"sein",pp:"geworden"},
    praeteritum:["wurde","wurdest","wurde","wurden","wurdet","wurden"]},
  {inf:"können",en:"can / to be able to",type:"modal",
    praesens:["kann","kannst","kann","können","könnt","können"],
    perfekt:{aux:"haben",pp:"gekonnt"},
    praeteritum:["konnte","konntest","konnte","konnten","konntet","konnten"]},
  {inf:"müssen",en:"must / to have to",type:"modal",
    praesens:["muss","musst","muss","müssen","müsst","müssen"],
    perfekt:{aux:"haben",pp:"gemusst"},
    praeteritum:["musste","musstest","musste","mussten","musstet","mussten"]},
  {inf:"wollen",en:"to want",type:"modal",
    praesens:["will","willst","will","wollen","wollt","wollen"],
    perfekt:{aux:"haben",pp:"gewollt"},
    praeteritum:["wollte","wolltest","wollte","wollten","wolltet","wollten"]},
  {inf:"dürfen",en:"may / to be allowed to",type:"modal",
    praesens:["darf","darfst","darf","dürfen","dürft","dürfen"],
    perfekt:{aux:"haben",pp:"gedurft"},
    praeteritum:["durfte","durftest","durfte","durften","durftet","durften"]},
  {inf:"sollen",en:"should / to be supposed to",type:"modal",
    praesens:["soll","sollst","soll","sollen","sollt","sollen"],
    perfekt:{aux:"haben",pp:"gesollt"},
    praeteritum:["sollte","solltest","sollte","sollten","solltet","sollten"]},
  {inf:"fahren",en:"to drive/go (vehicle)",type:"irregular",
    praesens:["fahre","fährst","fährt","fahren","fahrt","fahren"],
    perfekt:{aux:"sein",pp:"gefahren"},
    praeteritum:["fuhr","fuhrst","fuhr","fuhren","fuhrt","fuhren"]},
  {inf:"essen",en:"to eat",type:"irregular",
    praesens:["esse","isst","isst","essen","esst","essen"],
    perfekt:{aux:"haben",pp:"gegessen"},
    praeteritum:["aß","aßt","aß","aßen","aßt","aßen"]},
  {inf:"trinken",en:"to drink",type:"irregular",
    praesens:["trinke","trinkst","trinkt","trinken","trinkt","trinken"],
    perfekt:{aux:"haben",pp:"getrunken"},
    praeteritum:["trank","trankst","trank","tranken","trankt","tranken"]},
  {inf:"schreiben",en:"to write",type:"irregular",
    praesens:["schreibe","schreibst","schreibt","schreiben","schreibt","schreiben"],
    perfekt:{aux:"haben",pp:"geschrieben"},
    praeteritum:["schrieb","schriebst","schrieb","schrieben","schriebt","schrieben"]},
  {inf:"lesen",en:"to read",type:"irregular",
    praesens:["lese","liest","liest","lesen","lest","lesen"],
    perfekt:{aux:"haben",pp:"gelesen"},
    praeteritum:["las","last","las","lasen","last","lasen"]},
  {inf:"sprechen",en:"to speak",type:"irregular",
    praesens:["spreche","sprichst","spricht","sprechen","sprecht","sprechen"],
    perfekt:{aux:"haben",pp:"gesprochen"},
    praeteritum:["sprach","sprachst","sprach","sprachen","spracht","sprachen"]},
  {inf:"schlafen",en:"to sleep",type:"irregular",
    praesens:["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"],
    perfekt:{aux:"haben",pp:"geschlafen"},
    praeteritum:["schlief","schliefst","schlief","schliefen","schlieft","schliefen"]},
  {inf:"finden",en:"to find",type:"irregular",
    praesens:["finde","findest","findet","finden","findet","finden"],
    perfekt:{aux:"haben",pp:"gefunden"},
    praeteritum:["fand","fandest","fand","fanden","fandet","fanden"]},
  {inf:"geben",en:"to give",type:"irregular",
    praesens:["gebe","gibst","gibt","geben","gebt","geben"],
    perfekt:{aux:"haben",pp:"gegeben"},
    praeteritum:["gab","gabst","gab","gaben","gabt","gaben"]},
  {inf:"nehmen",en:"to take",type:"irregular",
    praesens:["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"],
    perfekt:{aux:"haben",pp:"genommen"},
    praeteritum:["nahm","nahmst","nahm","nahmen","nahmt","nahmen"]},
  {inf:"kaufen",en:"to buy",type:"regular",
    praesens:["kaufe","kaufst","kauft","kaufen","kauft","kaufen"],
    perfekt:{aux:"haben",pp:"gekauft"},
    praeteritum:["kaufte","kauftest","kaufte","kauften","kauftet","kauften"]},
  {inf:"arbeiten",en:"to work",type:"regular",
    praesens:["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"],
    perfekt:{aux:"haben",pp:"gearbeitet"},
    praeteritum:["arbeitete","arbeitetest","arbeitete","arbeiteten","arbeitetet","arbeiteten"]},
  {inf:"wohnen",en:"to live (reside)",type:"regular",
    praesens:["wohne","wohnst","wohnt","wohnen","wohnt","wohnen"],
    perfekt:{aux:"haben",pp:"gewohnt"},
    praeteritum:["wohnte","wohntest","wohnte","wohnten","wohntet","wohnten"]},
  {inf:"spielen",en:"to play",type:"regular",
    praesens:["spiele","spielst","spielt","spielen","spielt","spielen"],
    perfekt:{aux:"haben",pp:"gespielt"},
    praeteritum:["spielte","spieltest","spielte","spielten","spieltet","spielten"]},
  {inf:"hören",en:"to hear / listen",type:"regular",
    praesens:["höre","hörst","hört","hören","hört","hören"],
    perfekt:{aux:"haben",pp:"gehört"},
    praeteritum:["hörte","hörtest","hörte","hörten","hörtet","hörten"]},
  {inf:"sehen",en:"to see",type:"irregular",
    praesens:["sehe","siehst","sieht","sehen","seht","sehen"],
    perfekt:{aux:"haben",pp:"gesehen"},
    praeteritum:["sah","sahst","sah","sahen","saht","sahen"]},
  {inf:"wissen",en:"to know (fact)",type:"irregular",
    praesens:["weiß","weißt","weiß","wissen","wisst","wissen"],
    perfekt:{aux:"haben",pp:"gewusst"},
    praeteritum:["wusste","wusstest","wusste","wussten","wusstet","wussten"]},
  {inf:"kennen",en:"to know (person/place)",type:"irregular",
    praesens:["kenne","kennst","kennt","kennen","kennt","kennen"],
    perfekt:{aux:"haben",pp:"gekannt"},
    praeteritum:["kannte","kanntest","kannte","kannten","kanntet","kannten"]},
  {inf:"helfen",en:"to help",type:"irregular",
    praesens:["helfe","hilfst","hilft","helfen","helft","helfen"],
    perfekt:{aux:"haben",pp:"geholfen"},
    praeteritum:["half","halfst","half","halfen","halft","halfen"]},
  {inf:"bringen",en:"to bring",type:"irregular",
    praesens:["bringe","bringst","bringt","bringen","bringt","bringen"],
    perfekt:{aux:"haben",pp:"gebracht"},
    praeteritum:["brachte","brachtest","brachte","brachten","brachtet","brachten"]},
  {inf:"anrufen",en:"to call (phone)",type:"separable",
    praesens:["rufe an","rufst an","ruft an","rufen an","ruft an","rufen an"],
    perfekt:{aux:"haben",pp:"angerufen"},
    praeteritum:["rief an","riefst an","rief an","riefen an","rieft an","riefen an"]},
  {inf:"einkaufen",en:"to shop",type:"separable",
    praesens:["kaufe ein","kaufst ein","kauft ein","kaufen ein","kauft ein","kaufen ein"],
    perfekt:{aux:"haben",pp:"eingekauft"},
    praeteritum:["kaufte ein","kauftest ein","kaufte ein","kauften ein","kauftet ein","kauften ein"]},
  {inf:"anfangen",en:"to begin/start",type:"separable",
    praesens:["fange an","fängst an","fängt an","fangen an","fangt an","fangen an"],
    perfekt:{aux:"haben",pp:"angefangen"},
    praeteritum:["fing an","fingst an","fing an","fingen an","fingt an","fingen an"]},
  {inf:"aufstehen",en:"to get up",type:"separable",
    praesens:["stehe auf","stehst auf","steht auf","stehen auf","steht auf","stehen auf"],
    perfekt:{aux:"sein",pp:"aufgestanden"},
    praeteritum:["stand auf","standest auf","stand auf","standen auf","standet auf","standen auf"]},
  {inf:"mögen",en:"to like",type:"modal",
    praesens:["mag","magst","mag","mögen","mögt","mögen"],
    perfekt:{aux:"haben",pp:"gemocht"},
    praeteritum:["mochte","mochtest","mochte","mochten","mochtet","mochten"]},
];

const pronouns = ["ich","du","er/sie/es","wir","ihr","sie/Sie"];

// ==========================================
// PHRASES DATA
// ==========================================
const phrasesData = {
  greetings: [
    {de:"Guten Morgen!",en:"Good morning!",ctx:"Formal, until about 10am"},
    {de:"Guten Tag!",en:"Good day! / Hello!",ctx:"Formal, daytime"},
    {de:"Guten Abend!",en:"Good evening!",ctx:"Formal, evening"},
    {de:"Hallo!",en:"Hello!",ctx:"Informal, any time"},
    {de:"Tschüss!",en:"Bye!",ctx:"Informal"},
    {de:"Auf Wiedersehen!",en:"Goodbye!",ctx:"Formal"},
    {de:"Bis bald! / Bis später!",en:"See you soon! / See you later!",ctx:""},
    {de:"Wie geht es Ihnen?",en:"How are you? (formal)",ctx:"Use with strangers, at work"},
    {de:"Wie geht's?",en:"How are you? (informal)",ctx:"Use with friends"},
    {de:"Mir geht es gut, danke!",en:"I'm fine, thanks!",ctx:"Standard answer"},
    {de:"Freut mich!",en:"Nice to meet you!",ctx:"When meeting someone new"},
    {de:"Schönes Wochenende!",en:"Have a nice weekend!",ctx:"Friday or Saturday"},
  ],
  shopping: [
    {de:"Kann ich Ihnen helfen?",en:"Can I help you?",ctx:"Shop assistant asks this"},
    {de:"Ich suche...",en:"I'm looking for...",ctx:""},
    {de:"Was kostet das? / Wie viel kostet das?",en:"How much does it cost?",ctx:""},
    {de:"Das ist zu teuer.",en:"That's too expensive.",ctx:""},
    {de:"Haben Sie das auch in Größe M?",en:"Do you have that in size M?",ctx:""},
    {de:"Kann ich das anprobieren?",en:"Can I try it on?",ctx:""},
    {de:"Ich nehme das.",en:"I'll take it.",ctx:"When you decide to buy"},
    {de:"Kann ich mit Karte zahlen?",en:"Can I pay by card?",ctx:""},
    {de:"Wo ist die Kasse?",en:"Where is the checkout?",ctx:""},
    {de:"Haben Sie eine Tüte?",en:"Do you have a bag?",ctx:""},
  ],
  restaurant: [
    {de:"Einen Tisch für zwei, bitte.",en:"A table for two, please.",ctx:""},
    {de:"Die Speisekarte, bitte.",en:"The menu, please.",ctx:""},
    {de:"Ich hätte gern...",en:"I would like...",ctx:"Polite way to order"},
    {de:"Was empfehlen Sie?",en:"What do you recommend?",ctx:""},
    {de:"Ich nehme das Hähnchen.",en:"I'll have the chicken.",ctx:""},
    {de:"Noch ein Bier, bitte.",en:"Another beer, please.",ctx:""},
    {de:"Die Rechnung, bitte.",en:"The bill, please.",ctx:""},
    {de:"Stimmt so!",en:"Keep the change!",ctx:"When tipping"},
    {de:"Hat es geschmeckt?",en:"Did you enjoy it?",ctx:"Waiter asks this"},
    {de:"Es hat sehr gut geschmeckt!",en:"It was delicious!",ctx:""},
  ],
  directions: [
    {de:"Entschuldigung, wo ist...?",en:"Excuse me, where is...?",ctx:""},
    {de:"Wie komme ich zum Bahnhof?",en:"How do I get to the station?",ctx:""},
    {de:"Gehen Sie geradeaus.",en:"Go straight ahead.",ctx:""},
    {de:"Biegen Sie links/rechts ab.",en:"Turn left/right.",ctx:""},
    {de:"An der Kreuzung...",en:"At the intersection...",ctx:""},
    {de:"Über die Brücke...",en:"Over the bridge...",ctx:""},
    {de:"Es ist in der Nähe.",en:"It's nearby.",ctx:""},
    {de:"Es ist weit von hier.",en:"It's far from here.",ctx:""},
    {de:"Gegenüber vom Supermarkt.",en:"Opposite the supermarket.",ctx:""},
    {de:"Neben der Apotheke.",en:"Next to the pharmacy.",ctx:""},
  ],
  doctor: [
    {de:"Ich bin krank.",en:"I'm sick.",ctx:""},
    {de:"Mir tut der Kopf weh.",en:"My head hurts.",ctx:""},
    {de:"Ich habe Fieber.",en:"I have a fever.",ctx:""},
    {de:"Ich habe Husten und Schnupfen.",en:"I have a cough and a cold.",ctx:""},
    {de:"Seit wann haben Sie die Schmerzen?",en:"Since when have you had the pain?",ctx:"Doctor asks"},
    {de:"Seit gestern / seit drei Tagen.",en:"Since yesterday / for three days.",ctx:""},
    {de:"Nehmen Sie dieses Medikament.",en:"Take this medicine.",ctx:""},
    {de:"Dreimal täglich.",en:"Three times a day.",ctx:""},
    {de:"Ich brauche ein Rezept.",en:"I need a prescription.",ctx:""},
    {de:"Gute Besserung!",en:"Get well soon!",ctx:"Very common expression!"},
  ],
  phone: [
    {de:"Hallo, hier ist... / Hier spricht...",en:"Hello, this is...",ctx:""},
    {de:"Kann ich bitte mit... sprechen?",en:"Can I please speak to...?",ctx:""},
    {de:"Einen Moment, bitte.",en:"One moment, please.",ctx:""},
    {de:"Können Sie das bitte wiederholen?",en:"Can you repeat that please?",ctx:""},
    {de:"Ich rufe später nochmal an.",en:"I'll call again later.",ctx:""},
    {de:"Kann ich eine Nachricht hinterlassen?",en:"Can I leave a message?",ctx:""},
    {de:"Auf Wiederhören!",en:"Goodbye! (on phone)",ctx:"Phone-specific goodbye"},
    {de:"Die Nummer ist besetzt.",en:"The number is busy.",ctx:""},
  ],
  opinion: [
    {de:"Ich finde das gut/schlecht.",en:"I think that's good/bad.",ctx:""},
    {de:"Das gefällt mir (nicht).",en:"I (don't) like that.",ctx:""},
    {de:"Ich bin (nicht) einverstanden.",en:"I (don't) agree.",ctx:""},
    {de:"Meiner Meinung nach...",en:"In my opinion...",ctx:""},
    {de:"Ich glaube, dass...",en:"I believe that...",ctx:""},
    {de:"Das stimmt (nicht).",en:"That's (not) true.",ctx:""},
    {de:"Genau! / Richtig!",en:"Exactly! / Right!",ctx:"Agreeing"},
    {de:"Das ist eine gute Idee!",en:"That's a good idea!",ctx:""},
    {de:"Ich bin dafür / dagegen.",en:"I'm for it / against it.",ctx:""},
  ],
  smalltalk: [
    {de:"Schönes Wetter heute!",en:"Nice weather today!",ctx:""},
    {de:"Wie war dein Wochenende?",en:"How was your weekend?",ctx:""},
    {de:"Was machst du gern in der Freizeit?",en:"What do you like to do in your free time?",ctx:""},
    {de:"Hast du Pläne für heute Abend?",en:"Do you have plans for tonight?",ctx:""},
    {de:"Woher kommst du?",en:"Where do you come from?",ctx:""},
    {de:"Wie lange bist du schon hier?",en:"How long have you been here?",ctx:""},
    {de:"Das ist ja interessant!",en:"That's interesting!",ctx:""},
    {de:"Echt? / Wirklich?",en:"Really?",ctx:"Showing surprise"},
    {de:"Na ja... / Also...",en:"Well... / So...",ctx:"Filler words (very German!)"},
    {de:"Ach so!",en:"Oh, I see!",ctx:"Understanding something"},
  ],
};

// ==========================================
// SENTENCES DATA
// ==========================================
const sentencePuzzles = [
  {words:["Ich","gehe","morgen","ins","Kino"],correct:"Ich gehe morgen ins Kino."},
  {words:["Morgen","gehe","ich","ins","Kino"],correct:"Morgen gehe ich ins Kino."},
  {words:["Hast","du","heute","Zeit","?"],correct:"Hast du heute Zeit?"},
  {words:["Ich","habe","gestern","einen","Film","gesehen"],correct:"Ich habe gestern einen Film gesehen."},
  {words:["Er","ist","nach","Berlin","gefahren"],correct:"Er ist nach Berlin gefahren."},
  {words:["Ich","bleibe","zu","Hause,","weil","ich","krank","bin"],correct:"Ich bleibe zu Hause, weil ich krank bin."},
  {words:["Sie","hat","ein","neues","Buch","gekauft"],correct:"Sie hat ein neues Buch gekauft."},
  {words:["Wir","müssen","morgen","früh","aufstehen"],correct:"Wir müssen morgen früh aufstehen."},
  {words:["Er","sagt,","dass","er","morgen","kommt"],correct:"Er sagt, dass er morgen kommt."},
  {words:["Kannst","du","mir","bitte","helfen","?"],correct:"Kannst du mir bitte helfen?"},
  {words:["Am","Wochenende","fahren","wir","an","die","Ostsee"],correct:"Am Wochenende fahren wir an die Ostsee."},
  {words:["Gestern","bin","ich","ins","Theater","gegangen"],correct:"Gestern bin ich ins Theater gegangen."},
];

// ==========================================
// FUN DATA
// ==========================================
const funFacts = [
  "Das längste deutsche Wort im Wörterbuch war 'Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz' (63 Buchstaben!). Es bedeutete ein Gesetz über die Überwachung von Rindfleisch-Etiketten.",
  "Deutsche sagen 'Daumen drücken' (press thumbs) statt 'cross fingers' für Glück!",
  "Das Wort 'Kindergarten' kommt direkt aus dem Deutschen und wird auf der ganzen Welt benutzt!",
  "'Feierabend' ist ein typisch deutsches Konzept - es bedeutet das Ende des Arbeitstages und ist fast heilig in der deutschen Kultur.",
  "In Deutschland sagt man 'Mahlzeit!' (meal time) als Gruß zur Mittagszeit, besonders im Büro.",
  "'Schadenfreude' (Freude am Unglück anderer) ist ein deutsches Wort, das in viele Sprachen übernommen wurde.",
  "Deutsche lieben Brot! Es gibt über 3.200 anerkannte Brotsorten in Deutschland - Weltrekord!",
  "'Wanderlust' (die Lust zu wandern) ist ein weiteres deutsches Wort, das weltweit benutzt wird.",
  "In Deutschland ist es üblich, pünktlich zu sein. 'Fünf Minuten vor der Zeit ist die wahre Pünktlichkeit!'",
  "Das deutsche Wort 'Gemütlichkeit' beschreibt ein Gefühl von Wärme, Freundlichkeit und Zugehörigkeit. Es gibt keine perfekte Übersetzung!",
  "Im Deutschen gibt es drei grammatische Geschlechter: der (m), die (f), das (n). Ein Mädchen (girl) ist sächlich (neutral) - 'das Mädchen'!",
  "Deutsche stapeln gern Wörter aufeinander: Handschuh = Hand + Schuh (hand + shoe = glove)!",
  "'Ohrwurm' (Ohr + Wurm = ear + worm) bedeutet ein Lied, das du nicht aus dem Kopf bekommst!",
  "Deutsche antworten auf 'Danke' oft mit 'Bitte' oder 'Gern geschehen' (gerne gemacht).",
  "Das Wort 'Doppelgänger' (jemand der genauso aussieht) kommt auch aus dem Deutschen!",
];

const motivationalQuotes = [
  '"Jeder Experte war einmal ein Anfänger." - Helen Hayes',
  '"Übung macht den Meister!" - Deutsches Sprichwort',
  '"Der Weg ist das Ziel." - Konfuzius',
  '"Wer fremde Sprachen nicht kennt, weiß nichts von seiner eigenen." - Goethe',
  '"Sei du selbst die Veränderung, die du dir wünschst." - Gandhi',
  '"Kleine Schritte sind auch Schritte!" - Du schaffst das!',
  '"Man muss das Unmögliche versuchen, um das Mögliche zu erreichen." - Hesse',
  '"Die Grenzen meiner Sprache sind die Grenzen meiner Welt." - Wittgenstein',
  '"Erfolg ist nicht endgültig, Misserfolg nicht tödlich: Was zählt, ist der Mut weiterzumachen." - Churchill',
  '"Du bist mutiger als du glaubst, stärker als du scheinst und klüger als du denkst."',
];

const compoundWords = [
  {w1:"Haus",w2:"aufgabe",answer:"Hausaufgabe",en:"homework"},
  {w1:"Kühl",w2:"schrank",answer:"Kühlschrank",en:"refrigerator"},
  {w1:"Kranken",w2:"haus",answer:"Krankenhaus",en:"hospital"},
  {w1:"Hand",w2:"schuh",answer:"Handschuh",en:"glove"},
  {w1:"Fahr",w2:"karte",answer:"Fahrkarte",en:"ticket"},
  {w1:"Geburts",w2:"tag",answer:"Geburtstag",en:"birthday"},
  {w1:"Stadt",w2:"plan",answer:"Stadtplan",en:"city map"},
  {w1:"Wörter",w2:"buch",answer:"Wörterbuch",en:"dictionary"},
  {w1:"Schlaf",w2:"zimmer",answer:"Schlafzimmer",en:"bedroom"},
  {w1:"Wasch",w2:"maschine",answer:"Waschmaschine",en:"washing machine"},
  {w1:"Straßen",w2:"bahn",answer:"Straßenbahn",en:"tram"},
  {w1:"Mittag",w2:"essen",answer:"Mittagessen",en:"lunch"},
  {w1:"Frühstücks",w2:"radio",answer:"Frühstücksradio",en:"breakfast radio"},
];

const speakingTopics = [
  {title:"Was machen Sie mit Ihrem Geld?",prompts:["Lebensmittel, Miete?","Kleidung?","Sparen?","Reisen?"]},
  {title:"Was machen Sie oft am Wochenende?",prompts:["Sport?","Jemanden besuchen?","Mit wem?","Wo?"]},
  {title:"Was ist Ihr Lieblingsessen?",prompts:["Was kochen Sie gern?","Restaurant?","Gesundes Essen?","Süßes?"]},
  {title:"Erzählen Sie von Ihrer Familie.",prompts:["Geschwister?","Wo wohnen sie?","Was machen sie?","Treffen?"]},
  {title:"Was haben Sie letztes Wochenende gemacht?",prompts:["Samstag?","Sonntag?","Mit wem?","Wie war es?"]},
  {title:"Beschreiben Sie Ihre Wohnung.",prompts:["Wie viele Zimmer?","Garten/Balkon?","Möbel?","Miete?"]},
  {title:"Erzählen Sie von Ihrem Beruf/Studium.",prompts:["Was machen Sie?","Seit wann?","Kollegen?","Gefällt es Ihnen?"]},
  {title:"Was machen Sie in den Ferien?",prompts:["Wohin?","Mit wem?","Wie lange?","Was machen Sie dort?"]},
];

const speakingCardTopics = [
  "Geburtstag?","Wohnort?","Beruf?","Hobby?","Familie?","Lieblingsessen?",
  "Sprachen?","Haustiere?","Reisen?","Sport?","Musik?","Schule/Studium?",
  "Freizeit?","Wohnung?","Morgenroutine?","Lieblingsfilm?"
];

const planningScenarios = [
  "Ihr Freund Patrick hat Geburtstag. Sie möchten ein Geschenk für ihn kaufen. Finden Sie einen Termin.",
  "Sie und Ihr Partner möchten zusammen kochen. Planen Sie den Einkauf und das Essen.",
  "Sie möchten am Wochenende einen Ausflug machen. Planen Sie wohin und wann.",
  "Ihre Freundin hat eine neue Wohnung. Sie möchten ihr beim Umzug helfen. Planen Sie einen Tag.",
  "Sie möchten eine kleine Party organisieren. Planen Sie das Essen, die Getränke und die Musik.",
  "Sie und Ihr Freund möchten ins Kino gehen. Finden Sie einen Film und einen Termin.",
];

const writingTasks = {
  informal: [
    {prompt:"Sie sind unterwegs und schreiben eine SMS an Ihre Freundin.",points:["Entschuldigen Sie sich, dass Sie zu spät kommen.","Schreiben Sie, warum.","Nennen Sie einen neuen Ort und eine neue Uhrzeit."],words:"20-30"},
    {prompt:"Ihr Freund hat Sie zum Abendessen eingeladen. Schreiben Sie eine WhatsApp-Nachricht.",points:["Sagen Sie, dass Sie gern kommen.","Fragen Sie, was Sie mitbringen können.","Fragen Sie nach der Adresse."],words:"20-30"},
    {prompt:"Sie sind krank und können nicht zur Arbeit kommen. Schreiben Sie an einen Kollegen.",points:["Sagen Sie, dass Sie krank sind.","Bitten Sie um Information über das Meeting heute.","Sagen Sie, wann Sie wieder kommen."],words:"20-30"},
  ],
  formal: [
    {prompt:"Ihr Chef, Herr Lehmann, hat Sie zu seiner Geburtstagsfeier eingeladen.",points:["Bedanken Sie sich und sagen Sie, dass Sie kommen.","Informieren Sie, dass Sie jemanden mitbringen.","Fragen Sie nach dem Weg."],words:"30-40"},
    {prompt:"Sie möchten einen Deutschkurs an der Volkshochschule besuchen.",points:["Fragen Sie nach den Kurszeiten.","Fragen Sie nach dem Preis.","Sagen Sie, welches Niveau Sie haben."],words:"30-40"},
    {prompt:"Sie haben eine Wohnungsanzeige gelesen und sind interessiert.",points:["Stellen Sie sich kurz vor.","Sagen Sie, warum Sie die Wohnung suchen.","Fragen Sie nach einem Besichtigungstermin."],words:"30-40"},
  ],
};

// ==========================================
// STATE
// ==========================================
let currentFlashcardIndex = 0;
let flashcardDeck = [];
let quizCorrect = 0;
let quizTotal = 0;
let matchSelected = null;
let matchPairs = [];
let matchFound = 0;
let currentSentence = null;
let sentenceOrder = [];
let currentCompound = 0;
let vocabProgress = JSON.parse(localStorage.getItem('simanga_vocab') || '{}');
let verbProgress = JSON.parse(localStorage.getItem('simanga_verbs') || '{}');
let streak = parseInt(localStorage.getItem('simanga_streak') || '0');
let lastStudyDate = localStorage.getItem('simanga_lastdate') || '';

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  updateStats();
  setupNavigation();
  setupExamTabs();
  setupVocabTabs();
  setupVerbTabs();
  setupPhraseTabs();
  setupWordCounters();
  loadFlashcards();
  loadVerbExercise();
  loadQuiz();
  startMatchGame();
  loadWordlist();
  generateSpeakingCards();
  loadVerbOverview();
  newFunFact();
  newCompound();
  newMotivation();
  loadPhrases('greetings');
  loadWritingTask('informal');
  newSentencePuzzle();
  updateStreak();
  setInterval(updateCountdown, 60000);

  // Motivational quote in sidebar
  document.getElementById('motivationQuote').textContent =
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
});

// ==========================================
// NAVIGATION
// ==========================================
function setupNavigation() {
  document.querySelectorAll('.nav-section').forEach(nav => {
    nav.addEventListener('click', () => {
      document.querySelectorAll('.nav-section').forEach(n => n.classList.remove('active'));
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      nav.classList.add('active');
      document.getElementById(nav.dataset.section).classList.add('active');
    });
  });
}

function setupExamTabs() {
  document.querySelectorAll('.exam-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.exam-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.exam-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.examtab).classList.add('active');
    });
  });
}

function setupVocabTabs() {
  document.querySelectorAll('.vocab-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.vocab-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.vocab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.vocabtab).classList.add('active');
    });
  });
}

function setupVerbTabs() {
  document.querySelectorAll('.verb-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.verb-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.verb-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.verbtab).classList.add('active');
    });
  });
}

function setupPhraseTabs() {
  document.querySelectorAll('.phrase-cat').forEach(cat => {
    cat.addEventListener('click', () => {
      document.querySelectorAll('.phrase-cat').forEach(c => c.classList.remove('active'));
      cat.classList.add('active');
      loadPhrases(cat.dataset.phrasecat);
    });
  });
}

// ==========================================
// COUNTDOWN & STATS
// ==========================================
function updateCountdown() {
  const exam = new Date('2026-04-30');
  const now = new Date();
  const diff = exam - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  document.getElementById('countdown').textContent = `⏰ Noch ${days} Tage!`;
  document.getElementById('daysLeft').textContent = days;
}

function updateStats() {
  const learned = Object.values(vocabProgress).filter(v => v >= 3).length;
  document.getElementById('vocabLearned').textContent = learned;
  const verbsMastered = Object.values(verbProgress).filter(v => v >= 3).length;
  document.getElementById('verbsLearned').textContent = verbsMastered;
  document.getElementById('streakDays').textContent = streak;
}

function updateStreak() {
  const today = new Date().toDateString();
  if (lastStudyDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastStudyDate === yesterday) {
    streak++;
  } else if (lastStudyDate !== today) {
    streak = 1;
  }
  lastStudyDate = today;
  localStorage.setItem('simanga_streak', streak);
  localStorage.setItem('simanga_lastdate', today);
  updateStats();
}

function saveProgress() {
  localStorage.setItem('simanga_vocab', JSON.stringify(vocabProgress));
  localStorage.setItem('simanga_verbs', JSON.stringify(verbProgress));
  updateStats();
}

// ==========================================
// EXAM FUNCTIONS
// ==========================================
function checkExamAnswers(containerId) {
  const container = document.getElementById(containerId);
  const questions = container.querySelectorAll('.question');
  let correct = 0;
  let total = questions.length;

  questions.forEach(q => {
    const correctAnswer = q.dataset.correct;
    const selected = q.querySelector('input:checked');
    q.classList.remove('correct', 'wrong');

    if (selected && selected.value === correctAnswer) {
      q.classList.add('correct');
      correct++;
    } else {
      q.classList.add('wrong');
    }
  });

  const resultEl = container.nextElementSibling?.nextElementSibling ||
                   document.getElementById(containerId.replace('questions','result'));
  if (resultEl && resultEl.classList.contains('result-display')) {
    resultEl.textContent = `${correct}/${total} richtig! ${correct === total ? 'Super gemacht! 🎉' : 'Weiter üben! 💪'}`;
    resultEl.style.color = correct === total ? 'var(--success)' : correct >= total/2 ? 'var(--warning)' : 'var(--danger)';
  }
}

function toggleExample(id, btn) {
  const el = document.getElementById(id);
  el.classList.toggle('hidden');
  btn.textContent = el.classList.contains('hidden') ? 'Beispiel zeigen' : 'Beispiel verstecken';
}

// ==========================================
// FLASHCARDS
// ==========================================
function getFilteredVocab() {
  const cat = document.getElementById('vocab-category').value;
  const unlearnedOnly = document.getElementById('vocab-unlearned').checked;
  let filtered = cat === 'all' ? [...vocabData] : vocabData.filter(v => v.cat === cat);
  if (unlearnedOnly) {
    filtered = filtered.filter(v => (vocabProgress[v.de] || 0) < 3);
  }
  return filtered;
}

function loadFlashcards() {
  flashcardDeck = shuffle([...getFilteredVocab()]);
  currentFlashcardIndex = 0;
  document.getElementById('fc-total').textContent = flashcardDeck.length;
  showFlashcard();
}

function showFlashcard() {
  if (flashcardDeck.length === 0) return;
  const card = flashcardDeck[currentFlashcardIndex % flashcardDeck.length];
  document.getElementById('fc-word').textContent = card.de.split(',')[0];
  document.getElementById('fc-translation').textContent = card.en;
  document.getElementById('fc-example').textContent = card.ex || '';
  document.getElementById('fc-current').textContent = (currentFlashcardIndex % flashcardDeck.length) + 1;
  document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function rateCard(score) {
  if (flashcardDeck.length === 0) return;
  const card = flashcardDeck[currentFlashcardIndex % flashcardDeck.length];
  vocabProgress[card.de] = score;
  saveProgress();
  currentFlashcardIndex++;
  if (currentFlashcardIndex >= flashcardDeck.length) {
    currentFlashcardIndex = 0;
    flashcardDeck = shuffle(flashcardDeck.filter(c => (vocabProgress[c.de] || 0) < 5));
    if (flashcardDeck.length === 0) {
      document.getElementById('fc-word').textContent = 'Alle geschafft! 🎉';
      return;
    }
  }
  showFlashcard();
}

// ==========================================
// QUIZ
// ==========================================
function loadQuiz() {
  const filtered = getFilteredVocab();
  if (filtered.length < 4) return;
  const correct = filtered[Math.floor(Math.random() * filtered.length)];
  const wrongPool = filtered.filter(v => v !== correct);
  const wrongs = shuffle(wrongPool).slice(0, 3);
  const options = shuffle([correct, ...wrongs]);

  document.getElementById('quiz-prompt').textContent = `Was bedeutet "${correct.de.split(',')[0]}"?`;
  const optionsEl = document.getElementById('quiz-options');
  optionsEl.innerHTML = '';
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-next').style.display = 'none';

  options.forEach(opt => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    div.textContent = opt.en;
    div.addEventListener('click', () => {
      if (optionsEl.querySelector('.correct,.wrong')) return;
      quizTotal++;
      if (opt === correct) {
        div.classList.add('correct');
        quizCorrect++;
        document.getElementById('quiz-feedback').textContent = 'Richtig! ✅';
        document.getElementById('quiz-feedback').style.color = 'var(--success)';
        vocabProgress[correct.de] = Math.min((vocabProgress[correct.de]||0) + 1, 5);
        saveProgress();
      } else {
        div.classList.add('wrong');
        optionsEl.querySelectorAll('.quiz-option').forEach(o => {
          if (o.textContent === correct.en) o.classList.add('correct');
        });
        document.getElementById('quiz-feedback').textContent = `Falsch! Die richtige Antwort ist: ${correct.en}`;
        document.getElementById('quiz-feedback').style.color = 'var(--danger)';
      }
      document.getElementById('quiz-correct').textContent = quizCorrect;
      document.getElementById('quiz-total').textContent = quizTotal;
      document.getElementById('quiz-next').style.display = 'inline-block';
    });
    optionsEl.appendChild(div);
  });
}

function nextQuizQuestion() { loadQuiz(); }

// ==========================================
// MATCH GAME
// ==========================================
function startMatchGame() {
  const filtered = shuffle(getFilteredVocab()).slice(0, 6);
  matchPairs = filtered.map((v, i) => ({id: i, de: v.de.split(',')[0], en: v.en}));
  matchSelected = null;
  matchFound = 0;
  document.getElementById('match-found').textContent = 0;
  document.getElementById('match-total').textContent = matchPairs.length;

  const cards = [];
  matchPairs.forEach(p => {
    cards.push({id: p.id, text: p.de, type: 'de'});
    cards.push({id: p.id, text: p.en, type: 'en'});
  });

  const shuffled = shuffle(cards);
  const game = document.getElementById('match-game');
  game.innerHTML = '';

  shuffled.forEach(card => {
    const div = document.createElement('div');
    div.className = 'match-card';
    div.textContent = card.text;
    div.dataset.id = card.id;
    div.dataset.type = card.type;
    div.addEventListener('click', () => handleMatchClick(div));
    game.appendChild(div);
  });
}

function handleMatchClick(div) {
  if (div.classList.contains('matched') || div.classList.contains('selected')) return;

  if (!matchSelected) {
    matchSelected = div;
    div.classList.add('selected');
  } else {
    if (matchSelected.dataset.id === div.dataset.id && matchSelected.dataset.type !== div.dataset.type) {
      matchSelected.classList.remove('selected');
      matchSelected.classList.add('matched');
      div.classList.add('matched');
      matchFound++;
      document.getElementById('match-found').textContent = matchFound;
    } else {
      matchSelected.classList.remove('selected');
    }
    matchSelected = null;
  }
}

// ==========================================
// WORDLIST
// ==========================================
function loadWordlist() {
  const list = document.getElementById('wordlist-table');
  list.innerHTML = '';
  vocabData.forEach(v => {
    const entry = document.createElement('div');
    entry.className = 'wordlist-entry';
    entry.innerHTML = `<span class="de">${v.de}</span><span class="en">${v.en}</span>`;
    list.appendChild(entry);
  });
}

function filterWordlist() {
  const query = document.getElementById('wordlist-search-input').value.toLowerCase();
  const list = document.getElementById('wordlist-table');
  list.innerHTML = '';
  vocabData.filter(v => v.de.toLowerCase().includes(query) || v.en.toLowerCase().includes(query))
    .forEach(v => {
      const entry = document.createElement('div');
      entry.className = 'wordlist-entry';
      entry.innerHTML = `<span class="de">${v.de}</span><span class="en">${v.en}</span>`;
      list.appendChild(entry);
    });
}

// ==========================================
// VERB CONJUGATION
// ==========================================
function loadVerbExercise() {
  const tense = document.getElementById('verb-tense').value;
  const type = document.getElementById('verb-type').value;

  let filtered = type === 'all' ? verbsData :
    type === 'separable' ? verbsData.filter(v => v.type === 'separable') :
    type === 'modal' ? verbsData.filter(v => v.type === 'modal') :
    type === 'regular' ? verbsData.filter(v => v.type === 'regular') :
    verbsData.filter(v => v.type === 'irregular');

  if (filtered.length === 0) filtered = verbsData;
  const verb = filtered[Math.floor(Math.random() * filtered.length)];

  document.getElementById('conj-infinitive').textContent = verb.inf;
  document.getElementById('conj-meaning').textContent = verb.en;
  document.getElementById('conj-type-badge').textContent = verb.type === 'regular' ? 'regelmäßig' :
    verb.type === 'separable' ? 'trennbar' : verb.type === 'modal' ? 'Modalverb' : 'unregelmäßig';

  const table = document.getElementById('conj-table');
  table.innerHTML = '';
  table.dataset.verb = verb.inf;
  table.dataset.tense = tense;

  if (tense === 'perfekt') {
    const row = document.createElement('div');
    row.className = 'conj-row';
    row.style.gridColumn = '1 / -1';
    row.style.marginBottom = '0.5rem';
    row.innerHTML = `<span style="font-size:0.85rem;color:var(--gray-500)">Hilfsverb: <strong>${verb.perfekt.aux}</strong> + Partizip II: <strong>${verb.perfekt.pp}</strong></span>`;
    table.appendChild(row);
  }

  pronouns.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'conj-row';

    let correctAnswer;
    if (tense === 'praesens') correctAnswer = verb.praesens[i];
    else if (tense === 'perfekt') {
      const auxForms = verb.perfekt.aux === 'haben' ?
        ['habe','hast','hat','haben','habt','haben'] :
        ['bin','bist','ist','sind','seid','sind'];
      correctAnswer = auxForms[i] + ' ' + verb.perfekt.pp;
    } else {
      correctAnswer = verb.praeteritum[i];
    }

    row.innerHTML = `
      <span class="conj-pronoun">${p}</span>
      <input type="text" class="conj-input" data-correct="${correctAnswer}" placeholder="...">
    `;
    table.appendChild(row);
  });
}

function checkConjugation() {
  const inputs = document.querySelectorAll('#conj-table .conj-input');
  let allCorrect = true;
  inputs.forEach(input => {
    const correct = input.dataset.correct.toLowerCase().trim();
    const answer = input.value.toLowerCase().trim();
    input.classList.remove('correct', 'wrong');
    if (answer === correct) {
      input.classList.add('correct');
    } else {
      input.classList.add('wrong');
      allCorrect = false;
    }
  });
  if (allCorrect) {
    const verb = document.getElementById('conj-table').dataset.verb;
    verbProgress[verb] = (verbProgress[verb] || 0) + 1;
    saveProgress();
  }
}

function showConjugation() {
  document.querySelectorAll('#conj-table .conj-input').forEach(input => {
    input.value = input.dataset.correct;
    input.classList.add('correct');
  });
}

// ==========================================
// VERB OVERVIEW
// ==========================================
function loadVerbOverview() {
  const table = document.getElementById('verb-overview-table');
  table.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'verb-overview-row';
  header.innerHTML = '<span>Infinitiv</span><span>Präsens (er)</span><span>Perfekt</span><span>Präteritum (er)</span><span>Englisch</span>';
  table.appendChild(header);

  verbsData.forEach(v => {
    const row = document.createElement('div');
    row.className = 'verb-overview-row';
    const isIrr = v.type !== 'regular';
    row.innerHTML = `
      <span class="${isIrr?'irregular':''}">${v.inf}</span>
      <span>${v.praesens[2]}</span>
      <span>${v.perfekt.aux} ${v.perfekt.pp}</span>
      <span>${v.praeteritum[2]}</span>
      <span>${v.en}</span>
    `;
    table.appendChild(row);
  });
}

// ==========================================
// SENTENCE BUILDER
// ==========================================
function newSentencePuzzle() {
  currentSentence = sentencePuzzles[Math.floor(Math.random() * sentencePuzzles.length)];
  sentenceOrder = [];
  const puzzle = document.getElementById('sentence-puzzle');
  const answer = document.getElementById('sentence-answer');
  answer.innerHTML = '';
  puzzle.innerHTML = '';

  const shuffled = shuffle([...currentSentence.words]);
  shuffled.forEach(word => {
    const span = document.createElement('span');
    span.className = 'puzzle-word';
    span.textContent = word;
    span.addEventListener('click', () => {
      if (span.classList.contains('placed')) {
        span.classList.remove('placed');
        sentenceOrder = sentenceOrder.filter(w => w !== word);
      } else {
        span.classList.add('placed');
        sentenceOrder.push(word);
      }
      renderSentenceAnswer();
    });
    puzzle.appendChild(span);
  });
}

function renderSentenceAnswer() {
  const answer = document.getElementById('sentence-answer');
  answer.innerHTML = sentenceOrder.map(w =>
    `<span class="puzzle-word placed">${w}</span>`
  ).join('');
}

function checkSentence() {
  const answer = document.getElementById('sentence-answer');
  const userAnswer = sentenceOrder.join(' ');
  const correct = currentSentence.correct.replace(/[.?!]$/, '');
  const userClean = userAnswer.replace(/[.?!,]$/g, '').replace(/,/g, '');
  const correctClean = correct.replace(/,/g, '');

  if (userClean.toLowerCase() === correctClean.toLowerCase()) {
    answer.style.borderColor = 'var(--success)';
    answer.style.background = '#d1fae5';
  } else {
    answer.style.borderColor = 'var(--danger)';
    answer.style.background = '#fee2e2';
    setTimeout(() => {
      answer.innerHTML += `<div style="width:100%;margin-top:0.5rem;font-size:0.82rem;color:var(--gray-600)">Richtig: ${currentSentence.correct}</div>`;
    }, 500);
  }
}

// ==========================================
// PHRASES
// ==========================================
function loadPhrases(category) {
  const display = document.getElementById('phrases-display');
  const phrases = phrasesData[category] || [];
  display.innerHTML = '';
  phrases.forEach(p => {
    const item = document.createElement('div');
    item.className = 'phrase-item';
    item.innerHTML = `
      <span class="phrase-de">${p.de}</span>
      <span class="phrase-en">${p.en}</span>
      ${p.ctx ? `<span class="phrase-context">${p.ctx}</span>` : ''}
    `;
    display.appendChild(item);
  });
}

// ==========================================
// SPEAKING
// ==========================================
function generateSpeakingCards() {
  const cards = shuffle([...speakingCardTopics]).slice(0, 4);
  const container = document.getElementById('speaking-cards-1');
  container.innerHTML = '';
  const hints = ["Wann...?","Wo...?","Was...?","Wie oft...?","Warum...?","Welche...?"];
  cards.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'speaking-card';
    card.innerHTML = `
      <h4>Fragen zur Person</h4>
      <div class="card-topic">${topic}</div>
      <div class="card-hint">${hints[Math.floor(Math.random()*hints.length)]}</div>
    `;
    container.appendChild(card);
  });
}

function newSpeakingTopic() {
  const topic = speakingTopics[Math.floor(Math.random() * speakingTopics.length)];
  document.getElementById('speaking-topic-title').textContent = topic.title;
  const prompts = document.querySelector('.topic-prompts');
  prompts.innerHTML = topic.prompts.map(p => `<span class="topic-prompt">${p}</span>`).join('');
}

function newPlanningScenario() {
  const scenario = planningScenarios[Math.floor(Math.random() * planningScenarios.length)];
  document.querySelector('#planning-scenario p strong').parentElement.innerHTML =
    `<strong>Situation:</strong> ${scenario}`;
}

// ==========================================
// WRITING
// ==========================================
function setupWordCounters() {
  ['schreiben-t1','schreiben-t2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        const words = el.value.trim().split(/\s+/).filter(w => w.length > 0).length;
        document.getElementById('wc-' + id.split('-')[1]).textContent = words;
      });
    }
  });
}

function loadWritingTask(type) {
  document.querySelectorAll('.writing-task-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  const tasks = writingTasks[type];
  const task = tasks[Math.floor(Math.random() * tasks.length)];
  const display = document.getElementById('writing-task-display');

  display.innerHTML = `
    <div class="exam-exercise">
      <div class="exercise-header">
        <h3>${type === 'informal' ? 'Schreiben Teil 1 - Informell' : 'Schreiben Teil 2 - Formell'}</h3>
        <span class="difficulty">${task.words} Wörter</span>
      </div>
      <div class="writing-prompt">
        <p><strong>Aufgabe:</strong> ${task.prompt}</p>
        <ul>${task.points.map(p => `<li>${p}</li>`).join('')}</ul>
        <p class="writing-rule">Schreiben Sie zu allen drei Punkten!</p>
      </div>
      <textarea class="writing-area" placeholder="Schreibe hier..." rows="6" oninput="countWords(this)"></textarea>
      <div class="word-counter">Wörter: <span class="wc-dynamic">0</span> / ${task.words}</div>
      ${type === 'formal' ? `<div class="tip-box"><h4>💡 Formelle E-Mail</h4><p>Anrede: "Sehr geehrter Herr/Frau..." | Schluss: "Mit freundlichen Grüßen" | Immer "Sie" benutzen!</p></div>` : `<div class="tip-box"><h4>💡 Informelle Nachricht</h4><p>Anrede: "Hallo/Hey/Liebe(r)..." | Schluss: "Tschüss/Bis bald/LG" | Du-Form!</p></div>`}
    </div>
  `;
}

function countWords(el) {
  const words = el.value.trim().split(/\s+/).filter(w => w.length > 0).length;
  el.parentElement.querySelector('.wc-dynamic').textContent = words;
}

// ==========================================
// FUN ZONE
// ==========================================
function newFunFact() {
  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
  document.getElementById('fun-facts').textContent = fact;
}

function newCompound() {
  const cw = compoundWords[Math.floor(Math.random() * compoundWords.length)];
  currentCompound = cw;
  document.getElementById('compound-word-1').textContent = cw.w1;
  document.getElementById('compound-word-2').textContent = cw.w2;
  document.getElementById('compound-answer').value = '';
  document.getElementById('compound-result').textContent = '';
}

function checkCompound() {
  const answer = document.getElementById('compound-answer').value.trim();
  const result = document.getElementById('compound-result');
  if (answer.toLowerCase() === currentCompound.answer.toLowerCase()) {
    result.textContent = `Richtig! ✅ ${currentCompound.answer} = ${currentCompound.en}`;
    result.style.color = 'var(--success)';
  } else {
    result.textContent = `Fast! Die Antwort ist: ${currentCompound.answer} (${currentCompound.en})`;
    result.style.color = 'var(--danger)';
  }
}

function newMotivation() {
  document.getElementById('big-quote').textContent =
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

// ==========================================
// UTILITIES
// ==========================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
