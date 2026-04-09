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

  // HÖREN TEIL 1 - ORTE & ANKÜNDIGUNGEN (Q1-type: Where does something take place?)
  {de:"der Marktplatz, -plätze",en:"market square",cat:"hoeren",ex:"Das Fest findet auf dem Marktplatz statt."},
  {de:"die Halle, -n",en:"hall / arena",cat:"hoeren",ex:"Das Konzert ist in einer Halle."},
  {de:"das Festzelt, -e",en:"festival tent",cat:"hoeren",ex:"Die Feier ist im Festzelt."},
  {de:"stattfinden",en:"to take place",cat:"hoeren",ex:"Wo findet das Konzert statt?"},
  {de:"die Durchsage, -n",en:"announcement",cat:"hoeren",ex:"Achtung, eine Durchsage!"},
  {de:"die Veranstaltung, -en",en:"event",cat:"hoeren",ex:"Die Veranstaltung beginnt um 19 Uhr."},
  {de:"der Eingang, Eingänge",en:"entrance",cat:"hoeren",ex:"Der Eingang ist auf der rechten Seite."},
  {de:"der Ausgang, Ausgänge",en:"exit",cat:"hoeren",ex:"Der Ausgang ist dort hinten."},
  {de:"das Erdgeschoss",en:"ground floor",cat:"hoeren",ex:"Die Information ist im Erdgeschoss."},
  {de:"der Parkplatz, -plätze",en:"parking lot",cat:"hoeren",ex:"Der Parkplatz ist voll."},

  // HÖREN TEIL 1 - MITBRINGEN & VORBEREITEN (Q2-type: What should someone bring/do?)
  {de:"backen",en:"to bake",cat:"hoeren",ex:"Ich backe einen Kuchen für die Party."},
  {de:"das Geschenk, -e",en:"gift / present",cat:"hoeren",ex:"Soll ich ein Geschenk kaufen?"},
  {de:"die Getränke (Pl.)",en:"drinks / beverages",cat:"hoeren",ex:"Kannst du die Getränke organisieren?"},
  {de:"organisieren",en:"to organize",cat:"hoeren",ex:"Wer organisiert das Essen?"},
  {de:"mitbringen",en:"to bring along",cat:"hoeren",ex:"Was soll ich mitbringen?"},
  {de:"vorbereiten",en:"to prepare",cat:"hoeren",ex:"Ich muss alles für die Party vorbereiten."},
  {de:"besorgen",en:"to get / obtain",cat:"hoeren",ex:"Kannst du noch Getränke besorgen?"},
  {de:"die Einladung, -en",en:"invitation",cat:"hoeren",ex:"Danke für die Einladung!"},

  // HÖREN TEIL 1 - TREFFEN & VERABREDUNGEN (Q3-type: meetings, rescheduling)
  {de:"das Treffen, -",en:"meeting / get-together",cat:"hoeren",ex:"Wir verschieben das Treffen auf Sonntag."},
  {de:"verschieben",en:"to postpone / reschedule",cat:"hoeren",ex:"Können wir den Termin verschieben?"},
  {de:"verabredet sein",en:"to have plans / a date",cat:"hoeren",ex:"Meine Frau ist am Samstag verabredet."},
  {de:"absagen",en:"to cancel",cat:"hoeren",ex:"Ich muss leider absagen."},
  {de:"sich treffen",en:"to meet up",cat:"hoeren",ex:"Wann treffen wir uns?"},
  {de:"vorschlagen",en:"to suggest",cat:"hoeren",ex:"Ich schlage Samstag vor."},
  {de:"der Besuch, -e",en:"visit / visitor",cat:"hoeren",ex:"Meine Eltern kommen zu Besuch."},
  {de:"ausgehen",en:"to go out",cat:"hoeren",ex:"Er möchte mit Freunden ausgehen."},

  // HÖREN TEIL 1 - WETTER & HIMMELSRICHTUNGEN (Q4-type: weather forecast)
  {de:"der Norden",en:"north",cat:"hoeren",ex:"Im Norden wird es kalt."},
  {de:"der Süden",en:"south",cat:"hoeren",ex:"Im Süden wird es warm."},
  {de:"der Osten",en:"east",cat:"hoeren",ex:"Im Osten regnet es."},
  {de:"der Westen",en:"west",cat:"hoeren",ex:"Im Westen scheint die Sonne."},
  {de:"kühl",en:"cool (temperature)",cat:"hoeren",ex:"Morgen wird es kühl und trocken."},
  {de:"trocken",en:"dry",cat:"hoeren",ex:"Das Wetter bleibt trocken."},
  {de:"das Gewitter, -",en:"thunderstorm",cat:"hoeren",ex:"Am Nachmittag gibt es Gewitter."},
  {de:"regnen",en:"to rain",cat:"hoeren",ex:"Es regnet den ganzen Tag."},
  {de:"scheinen",en:"to shine",cat:"hoeren",ex:"Die Sonne scheint heute."},
  {de:"die Temperatur, -en",en:"temperature",cat:"hoeren",ex:"Die Temperaturen liegen bei 20 Grad."},
  {de:"der Grad",en:"degree",cat:"hoeren",ex:"Heute haben wir 25 Grad."},
  {de:"die Wolke, -n",en:"cloud",cat:"hoeren",ex:"Es gibt viele Wolken am Himmel."},

  // HÖREN TEIL 1 - VERKEHR & REISEANWEISUNGEN (Q5-type: transport instructions)
  {de:"der Fahrgast, -gäste",en:"passenger",cat:"hoeren",ex:"Alle Fahrgäste bitte einsteigen!"},
  {de:"der ICE",en:"ICE (high-speed train)",cat:"hoeren",ex:"Nehmen Sie den ICE nach Frankfurt."},
  {de:"die S-Bahn, -en",en:"suburban train",cat:"hoeren",ex:"Fahren Sie mit der S-Bahn."},
  {de:"umsteigen",en:"to change (trains)",cat:"hoeren",ex:"Sie müssen in München umsteigen."},
  {de:"einsteigen",en:"to board / get in",cat:"hoeren",ex:"Bitte einsteigen, die Türen schließen!"},
  {de:"aussteigen",en:"to get off / exit",cat:"hoeren",ex:"An der nächsten Haltestelle aussteigen."},
  {de:"das Gleis, -e",en:"platform / track",cat:"hoeren",ex:"Der Zug fährt auf Gleis 5."},
  {de:"die Verspätung, -en",en:"delay",cat:"hoeren",ex:"Der Zug hat 10 Minuten Verspätung."},
  {de:"die Verbindung, -en",en:"connection",cat:"hoeren",ex:"Es gibt eine gute Verbindung nach Berlin."},
  {de:"warten",en:"to wait",cat:"hoeren",ex:"Bitte warten Sie im Zug."},
];

// ==========================================
// VERBS DATA
// ==========================================
const verbCategories = {
  alltag: "Alltag & Grundlagen",
  bewegung: "Bewegung & Reisen",
  essen: "Essen & Trinken",
  kommunikation: "Kommunikation",
  arbeit: "Arbeit & Lernen",
  freizeit: "Freizeit & Hobbys",
  modal: "Modalverben",
  haushalt: "Haushalt & Einkaufen"
};

const verbsData = [
  // ALLTAG & GRUNDLAGEN
  {inf:"machen",en:"to do/make",type:"regular",cat:"alltag",
    praesens:["mache","machst","macht","machen","macht","machen"],
    perfekt:{aux:"haben",pp:"gemacht"},
    praeteritum:["machte","machtest","machte","machten","machtet","machten"]},
  {inf:"haben",en:"to have",type:"irregular",cat:"alltag",
    praesens:["habe","hast","hat","haben","habt","haben"],
    perfekt:{aux:"haben",pp:"gehabt"},
    praeteritum:["hatte","hattest","hatte","hatten","hattet","hatten"]},
  {inf:"sein",en:"to be",type:"irregular",cat:"alltag",
    praesens:["bin","bist","ist","sind","seid","sind"],
    perfekt:{aux:"sein",pp:"gewesen"},
    praeteritum:["war","warst","war","waren","wart","waren"]},
  {inf:"werden",en:"to become",type:"irregular",cat:"alltag",
    praesens:["werde","wirst","wird","werden","werdet","werden"],
    perfekt:{aux:"sein",pp:"geworden"},
    praeteritum:["wurde","wurdest","wurde","wurden","wurdet","wurden"]},
  {inf:"finden",en:"to find",type:"irregular",cat:"alltag",
    praesens:["finde","findest","findet","finden","findet","finden"],
    perfekt:{aux:"haben",pp:"gefunden"},
    praeteritum:["fand","fandest","fand","fanden","fandet","fanden"]},
  {inf:"geben",en:"to give",type:"irregular",cat:"alltag",
    praesens:["gebe","gibst","gibt","geben","gebt","geben"],
    perfekt:{aux:"haben",pp:"gegeben"},
    praeteritum:["gab","gabst","gab","gaben","gabt","gaben"]},
  {inf:"nehmen",en:"to take",type:"irregular",cat:"alltag",
    praesens:["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"],
    perfekt:{aux:"haben",pp:"genommen"},
    praeteritum:["nahm","nahmst","nahm","nahmen","nahmt","nahmen"]},
  {inf:"wissen",en:"to know (fact)",type:"irregular",cat:"alltag",
    praesens:["weiß","weißt","weiß","wissen","wisst","wissen"],
    perfekt:{aux:"haben",pp:"gewusst"},
    praeteritum:["wusste","wusstest","wusste","wussten","wusstet","wussten"]},
  {inf:"kennen",en:"to know (person/place)",type:"irregular",cat:"alltag",
    praesens:["kenne","kennst","kennt","kennen","kennt","kennen"],
    perfekt:{aux:"haben",pp:"gekannt"},
    praeteritum:["kannte","kanntest","kannte","kannten","kanntet","kannten"]},
  {inf:"schlafen",en:"to sleep",type:"irregular",cat:"alltag",
    praesens:["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"],
    perfekt:{aux:"haben",pp:"geschlafen"},
    praeteritum:["schlief","schliefst","schlief","schliefen","schlieft","schliefen"]},
  {inf:"aufstehen",en:"to get up",type:"separable",cat:"alltag",
    praesens:["stehe auf","stehst auf","steht auf","stehen auf","steht auf","stehen auf"],
    perfekt:{aux:"sein",pp:"aufgestanden"},
    praeteritum:["stand auf","standest auf","stand auf","standen auf","standet auf","standen auf"]},
  {inf:"anfangen",en:"to begin/start",type:"separable",cat:"alltag",
    praesens:["fange an","fängst an","fängt an","fangen an","fangt an","fangen an"],
    perfekt:{aux:"haben",pp:"angefangen"},
    praeteritum:["fing an","fingst an","fing an","fingen an","fingt an","fingen an"]},

  // BEWEGUNG & REISEN
  {inf:"gehen",en:"to go",type:"irregular",cat:"bewegung",
    praesens:["gehe","gehst","geht","gehen","geht","gehen"],
    perfekt:{aux:"sein",pp:"gegangen"},
    praeteritum:["ging","gingst","ging","gingen","gingt","gingen"]},
  {inf:"kommen",en:"to come",type:"irregular",cat:"bewegung",
    praesens:["komme","kommst","kommt","kommen","kommt","kommen"],
    perfekt:{aux:"sein",pp:"gekommen"},
    praeteritum:["kam","kamst","kam","kamen","kamt","kamen"]},
  {inf:"fahren",en:"to drive/go (vehicle)",type:"irregular",cat:"bewegung",
    praesens:["fahre","fährst","fährt","fahren","fahrt","fahren"],
    perfekt:{aux:"sein",pp:"gefahren"},
    praeteritum:["fuhr","fuhrst","fuhr","fuhren","fuhrt","fuhren"]},
  {inf:"bringen",en:"to bring",type:"irregular",cat:"bewegung",
    praesens:["bringe","bringst","bringt","bringen","bringt","bringen"],
    perfekt:{aux:"haben",pp:"gebracht"},
    praeteritum:["brachte","brachtest","brachte","brachten","brachtet","brachten"]},

  // ESSEN & TRINKEN
  {inf:"essen",en:"to eat",type:"irregular",cat:"essen",
    praesens:["esse","isst","isst","essen","esst","essen"],
    perfekt:{aux:"haben",pp:"gegessen"},
    praeteritum:["aß","aßt","aß","aßen","aßt","aßen"]},
  {inf:"trinken",en:"to drink",type:"irregular",cat:"essen",
    praesens:["trinke","trinkst","trinkt","trinken","trinkt","trinken"],
    perfekt:{aux:"haben",pp:"getrunken"},
    praeteritum:["trank","trankst","trank","tranken","trankt","tranken"]},

  // KOMMUNIKATION
  {inf:"schreiben",en:"to write",type:"irregular",cat:"kommunikation",
    praesens:["schreibe","schreibst","schreibt","schreiben","schreibt","schreiben"],
    perfekt:{aux:"haben",pp:"geschrieben"},
    praeteritum:["schrieb","schriebst","schrieb","schrieben","schriebt","schrieben"]},
  {inf:"lesen",en:"to read",type:"irregular",cat:"kommunikation",
    praesens:["lese","liest","liest","lesen","lest","lesen"],
    perfekt:{aux:"haben",pp:"gelesen"},
    praeteritum:["las","last","las","lasen","last","lasen"]},
  {inf:"sprechen",en:"to speak",type:"irregular",cat:"kommunikation",
    praesens:["spreche","sprichst","spricht","sprechen","sprecht","sprechen"],
    perfekt:{aux:"haben",pp:"gesprochen"},
    praeteritum:["sprach","sprachst","sprach","sprachen","spracht","sprachen"]},
  {inf:"anrufen",en:"to call (phone)",type:"separable",cat:"kommunikation",
    praesens:["rufe an","rufst an","ruft an","rufen an","ruft an","rufen an"],
    perfekt:{aux:"haben",pp:"angerufen"},
    praeteritum:["rief an","riefst an","rief an","riefen an","rieft an","riefen an"]},
  {inf:"helfen",en:"to help",type:"irregular",cat:"kommunikation",
    praesens:["helfe","hilfst","hilft","helfen","helft","helfen"],
    perfekt:{aux:"haben",pp:"geholfen"},
    praeteritum:["half","halfst","half","halfen","halft","halfen"]},

  // ARBEIT & LERNEN
  {inf:"arbeiten",en:"to work",type:"regular",cat:"arbeit",
    praesens:["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"],
    perfekt:{aux:"haben",pp:"gearbeitet"},
    praeteritum:["arbeitete","arbeitetest","arbeitete","arbeiteten","arbeitetet","arbeiteten"]},
  {inf:"wohnen",en:"to live (reside)",type:"regular",cat:"arbeit",
    praesens:["wohne","wohnst","wohnt","wohnen","wohnt","wohnen"],
    perfekt:{aux:"haben",pp:"gewohnt"},
    praeteritum:["wohnte","wohntest","wohnte","wohnten","wohntet","wohnten"]},

  // FREIZEIT & HOBBYS
  {inf:"spielen",en:"to play",type:"regular",cat:"freizeit",
    praesens:["spiele","spielst","spielt","spielen","spielt","spielen"],
    perfekt:{aux:"haben",pp:"gespielt"},
    praeteritum:["spielte","spieltest","spielte","spielten","spieltet","spielten"]},
  {inf:"hören",en:"to hear / listen",type:"regular",cat:"freizeit",
    praesens:["höre","hörst","hört","hören","hört","hören"],
    perfekt:{aux:"haben",pp:"gehört"},
    praeteritum:["hörte","hörtest","hörte","hörten","hörtet","hörten"]},
  {inf:"sehen",en:"to see",type:"irregular",cat:"freizeit",
    praesens:["sehe","siehst","sieht","sehen","seht","sehen"],
    perfekt:{aux:"haben",pp:"gesehen"},
    praeteritum:["sah","sahst","sah","sahen","saht","sahen"]},

  // HAUSHALT & EINKAUFEN
  {inf:"kaufen",en:"to buy",type:"regular",cat:"haushalt",
    praesens:["kaufe","kaufst","kauft","kaufen","kauft","kaufen"],
    perfekt:{aux:"haben",pp:"gekauft"},
    praeteritum:["kaufte","kauftest","kaufte","kauften","kauftet","kauften"]},
  {inf:"einkaufen",en:"to shop",type:"separable",cat:"haushalt",
    praesens:["kaufe ein","kaufst ein","kauft ein","kaufen ein","kauft ein","kaufen ein"],
    perfekt:{aux:"haben",pp:"eingekauft"},
    praeteritum:["kaufte ein","kauftest ein","kaufte ein","kauften ein","kauftet ein","kauften ein"]},

  // MODALVERBEN
  {inf:"können",en:"can / to be able to",type:"modal",cat:"modal",
    praesens:["kann","kannst","kann","können","könnt","können"],
    perfekt:{aux:"haben",pp:"gekonnt"},
    praeteritum:["konnte","konntest","konnte","konnten","konntet","konnten"]},
  {inf:"müssen",en:"must / to have to",type:"modal",cat:"modal",
    praesens:["muss","musst","muss","müssen","müsst","müssen"],
    perfekt:{aux:"haben",pp:"gemusst"},
    praeteritum:["musste","musstest","musste","mussten","musstet","mussten"]},
  {inf:"wollen",en:"to want",type:"modal",cat:"modal",
    praesens:["will","willst","will","wollen","wollt","wollen"],
    perfekt:{aux:"haben",pp:"gewollt"},
    praeteritum:["wollte","wolltest","wollte","wollten","wolltet","wollten"]},
  {inf:"dürfen",en:"may / to be allowed to",type:"modal",cat:"modal",
    praesens:["darf","darfst","darf","dürfen","dürft","dürfen"],
    perfekt:{aux:"haben",pp:"gedurft"},
    praeteritum:["durfte","durftest","durfte","durften","durftet","durften"]},
  {inf:"sollen",en:"should / to be supposed to",type:"modal",cat:"modal",
    praesens:["soll","sollst","soll","sollen","sollt","sollen"],
    perfekt:{aux:"haben",pp:"gesollt"},
    praeteritum:["sollte","solltest","sollte","sollten","solltet","sollten"]},
  {inf:"mögen",en:"to like",type:"modal",cat:"modal",
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
  // W-Fragen
  {words:["Wo","wohnst","du","?"],correct:"Wo wohnst du?"},
  {words:["Wann","hast","du","Geburtstag","?"],correct:"Wann hast du Geburtstag?"},
  {words:["Warum","lernst","du","Deutsch","?"],correct:"Warum lernst du Deutsch?"},
  {words:["Wie","lange","wohnst","du","schon","hier","?"],correct:"Wie lange wohnst du schon hier?"},
  {words:["Wohin","fährst","du","im","Urlaub","?"],correct:"Wohin fährst du im Urlaub?"},
  // TeKaMoLo
  {words:["Ich","fahre","morgen","mit","dem","Zug","nach","Berlin"],correct:"Ich fahre morgen mit dem Zug nach Berlin."},
  {words:["Er","geht","jeden","Tag","schnell","zum","Bahnhof"],correct:"Er geht jeden Tag schnell zum Bahnhof."},
  // Futur I
  {words:["Ich","werde","morgen","Deutsch","lernen"],correct:"Ich werde morgen Deutsch lernen."},
  {words:["Wir","werden","nächstes","Jahr","nach","Berlin","fahren"],correct:"Wir werden nächstes Jahr nach Berlin fahren."},
  // Modal + question
  {words:["Darf","ich","hier","sitzen","?"],correct:"Darf ich hier sitzen?"},
  {words:["Wir","wollen","am","Samstag","ins","Kino","gehen"],correct:"Wir wollen am Samstag ins Kino gehen."},
];

const grammarQuizData = [
  {q:"Welcher Satz benutzt Futur I richtig?",options:["Ich werde morgen lernen.","Ich werde morgen gelernt.","Ich werden morgen lernen.","Morgen ich werde lernen."],correct:0},
  {q:"\"Ich fahre mit ___ Bus.\" - Welcher Artikel?",options:["dem","den","der","das"],correct:0},
  {q:"\"Das Geschenk ist für ___ Lehrer.\" - Welcher Artikel?",options:["den","dem","der","des"],correct:0},
  {q:"Welches Verb benutzt \"sein\" im Perfekt?",options:["gehen","kaufen","machen","trinken"],correct:0},
  {q:"\"Ich bleibe zu Hause, weil ich krank ___.\"",options:["bin","ist","sein","bist"],correct:0},
  {q:"\"ein gut___ Freund\" - Welche Endung? (Nominativ Maskulin)",options:["-er","-e","-es","-en"],correct:0},
  {q:"\"Ich muss morgen früh ___.\"",options:["aufstehen","aufstehe","stehe auf","stehen auf"],correct:0},
  {q:"Welche Reihenfolge ist richtig? (TeKaMoLo)",options:["Ich fahre morgen mit dem Zug nach Berlin.","Ich fahre nach Berlin morgen mit dem Zug.","Ich fahre mit dem Zug nach Berlin morgen.","Nach Berlin fahre ich mit dem Zug morgen."],correct:0},
  {q:"\"Ich komme ___ der Schweiz.\" - Welche Präposition?",options:["aus","von","nach","mit"],correct:0},
  {q:"\"___ lernst du Deutsch?\" - Welches Fragewort? (= Why)",options:["Warum","Wann","Wo","Wie"],correct:0},
  {q:"\"Sie wohnt ___ einem Jahr in Berlin.\" - Welche Präposition?",options:["seit","vor","nach","für"],correct:0},
  {q:"\"das neu___ Auto\" - Welche Endung? (Nominativ, bestimmter Artikel)",options:["-e","-es","-er","-en"],correct:0},
  {q:"\"Ich ___ gestern ins Kino gegangen.\" - haben oder sein?",options:["bin","habe","ist","hat"],correct:0},
  {q:"\"Du ___ hier nicht rauchen.\" - Welches Modalverb? (= not allowed)",options:["darfst","kannst","musst","willst"],correct:0},
  {q:"\"Wir werden nächstes Jahr nach Berlin ___.\"",options:["fahren","gefahren","fährt","fuhr"],correct:0},
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
  {topic:"Geburtstag?", hints:["Wann hast du Geburtstag?","Wie feierst du deinen Geburtstag?","Was wünschst du dir zum Geburtstag?"]},
  {topic:"Wohnort?", hints:["Wo wohnst du?","Wie lange wohnst du schon dort?","Wie ist dein Wohnort?"]},
  {topic:"Beruf?", hints:["Was bist du von Beruf?","Wo arbeitest du?","Wie lange arbeitest du schon dort?"]},
  {topic:"Hobby?", hints:["Was machst du in deiner Freizeit?","Wie oft machst du das?","Seit wann machst du das?"]},
  {topic:"Familie?", hints:["Wie groß ist deine Familie?","Wo wohnt deine Familie?","Was machen deine Eltern beruflich?"]},
  {topic:"Lieblingsessen?", hints:["Was isst du am liebsten?","Wer kocht bei dir zu Hause?","Welches Restaurant magst du?"]},
  {topic:"Sprachen?", hints:["Welche Sprachen sprichst du?","Wo hast du Deutsch gelernt?","Warum lernst du Deutsch?"]},
  {topic:"Haustiere?", hints:["Hast du ein Haustier?","Welches Tier möchtest du haben?","Wie heißt dein Haustier?"]},
  {topic:"Reisen?", hints:["Wohin reist du gern?","Wann hast du die letzte Reise gemacht?","Mit wem reist du am liebsten?"]},
  {topic:"Sport?", hints:["Welchen Sport machst du?","Wie oft machst du Sport?","Wo machst du Sport?"]},
  {topic:"Musik?", hints:["Welche Musik hörst du gern?","Spielst du ein Instrument?","Wer ist dein Lieblingssänger?"]},
  {topic:"Schule/Studium?", hints:["Was studierst du? / Wo gehst du zur Schule?","Welche Fächer magst du?","Wie kommst du zur Schule?"]},
  {topic:"Freizeit?", hints:["Was machst du am Wochenende?","Mit wem verbringst du deine Freizeit?","Wie viel Freizeit hast du?"]},
  {topic:"Wohnung?", hints:["Wie ist deine Wohnung?","Wie viele Zimmer hat sie?","Was gefällt dir an deiner Wohnung?"]},
  {topic:"Morgenroutine?", hints:["Wann stehst du auf?","Was machst du morgens zuerst?","Wie kommst du zur Arbeit/Schule?"]},
  {topic:"Lieblingsfilm?", hints:["Was ist dein Lieblingsfilm?","Warum gefällt dir der Film?","Wie oft gehst du ins Kino?"]}
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
    {prompt:"Ein Freund hat am Samstag eine Party. Sie können leider nicht kommen. Schreiben Sie eine WhatsApp-Nachricht.",points:["Bedanken Sie sich für die Einladung.","Sagen Sie, dass Sie nicht kommen können, und erklären Sie warum.","Schlagen Sie ein anderes Treffen vor."],words:"20-30"},
    {prompt:"Sie haben ein Paket für Ihre Nachbarin angenommen. Schreiben Sie ihr eine SMS.",points:["Sagen Sie, dass ein Paket für sie da ist.","Fragen Sie, wann sie es abholen möchte.","Bieten Sie an, es vor die Tür zu stellen."],words:"20-30"},
    {prompt:"Sie möchten mit einer Freundin am Wochenende ins Kino gehen. Schreiben Sie ihr eine Nachricht.",points:["Fragen Sie, ob sie Zeit hat.","Schlagen Sie einen Film und eine Uhrzeit vor.","Fragen Sie, ob sie noch jemanden mitbringen möchte."],words:"20-30"},
  ],
  formal: [
    {prompt:"Ihr Chef, Herr Lehmann, hat Sie zu seiner Geburtstagsfeier eingeladen.",points:["Bedanken Sie sich und sagen Sie, dass Sie kommen.","Informieren Sie, dass Sie jemanden mitbringen.","Fragen Sie nach dem Weg."],words:"30-40"},
    {prompt:"Sie möchten einen Deutschkurs an der Volkshochschule besuchen.",points:["Fragen Sie nach den Kurszeiten.","Fragen Sie nach dem Preis.","Sagen Sie, welches Niveau Sie haben."],words:"30-40"},
    {prompt:"Sie haben eine Wohnungsanzeige gelesen und sind interessiert.",points:["Stellen Sie sich kurz vor.","Sagen Sie, warum Sie die Wohnung suchen.","Fragen Sie nach einem Besichtigungstermin."],words:"30-40"},
    {prompt:"Sie möchten Ihren Urlaub verschieben. Schreiben Sie eine E-Mail an Ihre Chefin, Frau Müller.",points:["Erklären Sie, warum Sie den Urlaub verschieben möchten.","Nennen Sie den neuen Wunschtermin.","Bitten Sie um eine Bestätigung."],words:"30-40"},
    {prompt:"Sie haben ein Produkt online bestellt, aber es ist kaputt angekommen. Schreiben Sie an den Kundenservice.",points:["Beschreiben Sie das Problem.","Sagen Sie, was Sie sich als Lösung wünschen (Umtausch/Geld zurück).","Fragen Sie, wie Sie das Produkt zurückschicken können."],words:"30-40"},
    {prompt:"Sie möchten Ihr Kind für einen Sportverein anmelden. Schreiben Sie eine E-Mail an den Verein.",points:["Stellen Sie sich und Ihr Kind kurz vor.","Fragen Sie nach den Trainingszeiten und Kosten.","Fragen Sie, ob ein Probetraining möglich ist."],words:"30-40"},
  ],
};

// ==========================================
// LEVEL 2 EXERCISE DATA
// ==========================================
const level2Data = {
  negation: [
    {sentence:"Ich habe ___ Auto.", answer:"kein", options:["kein","nicht"], hint:"Auto = Nomen ohne Artikel → kein!"},
    {sentence:"Das ist ___ richtig.", answer:"nicht", options:["kein","nicht"], hint:"richtig = Adjektiv → nicht!"},
    {sentence:"Er hat ___ Geschwister.", answer:"keine", options:["keine","nicht"], hint:"Geschwister = Plural-Nomen → keine!"},
    {sentence:"Ich verstehe das ___.", answer:"nicht", options:["kein","nicht"], hint:"verstehen = Verb → nicht!"},
    {sentence:"Sie trinkt ___ Kaffee.", answer:"keinen", options:["keinen","nicht"], hint:"Kaffee = Maskulin Akkusativ ohne Artikel → keinen!"},
    {sentence:"Wir haben ___ Zeit.", answer:"keine", options:["keine","nicht"], hint:"Zeit = Feminin-Nomen ohne Artikel → keine!"},
    {sentence:"Das Essen schmeckt ___ gut.", answer:"nicht", options:["kein","nicht"], hint:"gut = Adjektiv → nicht!"},
    {sentence:"Ich kenne ___ Lehrer hier.", answer:"keinen", options:["keinen","nicht"], hint:"Lehrer = Maskulin Akkusativ → keinen!"},
    {sentence:"Er kommt heute ___.", answer:"nicht", options:["kein","nicht"], hint:"kommt = Verb wird negiert → nicht!"},
    {sentence:"Hier gibt es ___ Supermarkt.", answer:"keinen", options:["keinen","nicht"], hint:"Supermarkt = Maskulin Akk. Nomen → keinen!"},
    {sentence:"Das ist ___ mein Buch.", answer:"nicht", options:["kein","nicht"], hint:"mein = Possessiv mit bestimmtem Bezug → nicht!"},
    {sentence:"Sie hat ___ Kinder.", answer:"keine", options:["keine","nicht"], hint:"Kinder = Plural-Nomen → keine!"},
  ],
  conjunction: [
    {sentence:"Ich glaube, ___ er morgen kommt.", answer:"dass", options:["dass","wie","weil"], hint:"Meinung/Glaube weitergeben → dass"},
    {sentence:"Ich bleibe zu Hause, ___ ich krank bin.", answer:"weil", options:["dass","wie","weil"], hint:"Grund angeben → weil"},
    {sentence:"Weißt du, ___ spät es ist?", answer:"wie", options:["dass","wie","weil"], hint:"Frage nach Art/Weise → wie"},
    {sentence:"Er sagt, ___ er keine Zeit hat.", answer:"dass", options:["dass","wie","weil"], hint:"Aussage weitergeben → dass"},
    {sentence:"Ich weiß nicht, ___ das funktioniert.", answer:"wie", options:["dass","wie","weil"], hint:"Frage nach dem 'How' → wie"},
    {sentence:"___ es regnet, bleibe ich zu Hause.", answer:"Wenn", options:["Wenn","Dass","Weil"], hint:"Bedingung → wenn"},
    {sentence:"Sie lernt Deutsch, ___ sie in Berlin arbeiten möchte.", answer:"weil", options:["dass","wie","weil"], hint:"Grund/Ursache → weil"},
    {sentence:"Ich finde, ___ Deutsch eine schöne Sprache ist.", answer:"dass", options:["dass","wie","weil"], hint:"Meinung → dass"},
    {sentence:"Er ist so groß ___ sein Vater.", answer:"wie", options:["dass","wie","weil"], hint:"Vergleich (so...wie) → wie"},
    {sentence:"Ich bin froh, ___ du da bist.", answer:"dass", options:["dass","wie","weil"], hint:"Gefühl + Nebensatz → dass"},
  ],
  pronoun: [
    {sentence:"Kannst du ___ helfen? (ich)", answer:"mir", options:["mich","mir","ich"], hint:"helfen braucht Dativ → mir!"},
    {sentence:"Ich sehe ___ nicht. (du)", answer:"dich", options:["dich","dir","du"], hint:"sehen braucht Akkusativ → dich!"},
    {sentence:"Gehört das Buch ___? (er)", answer:"ihm", options:["ihn","ihm","er"], hint:"gehören braucht Dativ → ihm!"},
    {sentence:"Ich rufe ___ morgen an. (du)", answer:"dich", options:["dich","dir","du"], hint:"anrufen braucht Akkusativ → dich!"},
    {sentence:"Das Essen schmeckt ___ gut. (wir)", answer:"uns", options:["wir","uns","unser"], hint:"schmecken braucht Dativ → uns!"},
    {sentence:"Kann ich ___ etwas fragen? (Sie)", answer:"Sie", options:["Sie","Ihnen","Ihr"], hint:"fragen braucht Akkusativ → Sie!"},
    {sentence:"Ich danke ___ sehr! (Sie formal)", answer:"Ihnen", options:["Sie","Ihnen","Ihr"], hint:"danken braucht Dativ → Ihnen!"},
    {sentence:"Er gibt ___ das Buch. (sie, she)", answer:"ihr", options:["sie","ihr","ihre"], hint:"geben + Dativ (wem?) → ihr!"},
    {sentence:"Wir besuchen ___ am Sonntag. (sie, them)", answer:"sie", options:["sie","ihnen","ihr"], hint:"besuchen braucht Akkusativ → sie!"},
    {sentence:"Antworte ___ bitte! (ich)", answer:"mir", options:["mich","mir","ich"], hint:"antworten braucht Dativ → mir!"},
    {sentence:"Siehst du ___? (wir)", answer:"uns", options:["wir","uns","unser"], hint:"sehen braucht Akkusativ → uns!"},
    {sentence:"Ich schreibe ___ eine E-Mail. (er)", answer:"ihm", options:["ihn","ihm","er"], hint:"schreiben + Dativ (wem?) → ihm!"},
  ],
  possessive: [
    {sentence:"Ist das ___ Auto? (du → Sie)", informal:"dein", answer:"Ihr", hint:"du → Sie: dein → Ihr"},
    {sentence:"Ich sehe ___ Schwester. (du → Sie)", informal:"deine", answer:"Ihre", hint:"du → Sie: deine → Ihre"},
    {sentence:"Kommt ___ Mann auch? (du → Sie)", informal:"dein", answer:"Ihr", hint:"du → Sie: dein → Ihr"},
    {sentence:"Wo ist ___ Tasche? (du → Sie)", informal:"deine", answer:"Ihre", hint:"du → Sie: deine → Ihre"},
    {sentence:"Das ist ___ Bruder. (er)", answer:"sein", options:["sein","ihr","mein"], hint:"er → sein"},
    {sentence:"Ich mag ___ Hund. (sie, she)", answer:"ihren", options:["seinen","ihren","Ihren"], hint:"sie (she) + Akk. Mask. → ihren"},
    {sentence:"___ Kinder sind in der Schule. (wir)", answer:"Unsere", options:["Unsere","Eure","Ihre"], hint:"wir → unsere (Plural)"},
    {sentence:"Wo wohnen ___ Eltern? (Sie formal)", answer:"Ihre", options:["deine","Ihre","eure"], hint:"Sie (formal) → Ihre"},
    {sentence:"Er liebt ___ Familie. (er)", answer:"seine", options:["seine","ihre","meine"], hint:"er → seine (Fem.)"},
    {sentence:"Gibst du mir ___ Nummer? (du → Sie)", informal:"deine", answer:"Ihre", hint:"du → Sie: deine → Ihre"},
  ],
  reflexive: [
    {sentence:"Vielen Dank, dass Sie ___ eingeladen haben.", answer:"mich", options:["mich","mir","sich"], hint:"einladen + wen? → Akkusativ: mich. Im Nebensatz: Partizip + haben am Ende!"},
    {sentence:"Ich bin froh, dass er ___ entschuldigt hat.", answer:"sich", options:["sich","mich","ihn"], hint:"sich entschuldigen = reflexiv (er → sich). Perfekt im Nebensatz: Partizip + hat am Ende!"},
    {sentence:"Sie hat gesagt, dass sie ___ auf die Party freut.", answer:"sich", options:["sich","mich","ihr"], hint:"sich freuen auf = reflexiv (sie → sich). Nebensatz: Verb am Ende!"},
    {sentence:"Können Sie ___ bitte hier setzen?", answer:"sich", options:["sich","mich","Ihnen"], hint:"sich setzen = reflexiv. Sie (formal) → sich. Modalverb + Reflexiv + Infinitiv am Ende!"},
    {sentence:"Er hat erzählt, dass er ___ für den Kurs angemeldet hat.", answer:"sich", options:["sich","ihn","ihm"], hint:"sich anmelden = reflexiv. Perfekt im Nebensatz: sich + Partizip + hat am Ende!"},
    {sentence:"Ich möchte ___ bei Ihnen vorstellen.", answer:"mich", options:["mich","mir","sich"], hint:"sich vorstellen = reflexiv (ich → mich). Modalverb + Reflexiv + Infinitiv!"},
    {sentence:"Wissen Sie, ob er ___ schon gewaschen hat?", answer:"sich", options:["sich","ihn","ihm"], hint:"sich waschen = reflexiv. ob-Nebensatz: Verb am Ende!"},
    {sentence:"Es tut mir leid, dass ich ___ verspätet habe.", answer:"mich", options:["mich","mir","sich"], hint:"sich verspäten = reflexiv (ich → mich). Perfekt im Nebensatz: Partizip + habe am Ende!"},
    {sentence:"Weil sie ___ nicht wohl fühlt, bleibt sie zu Hause.", answer:"sich", options:["sich","ihr","sie"], hint:"sich fühlen = reflexiv. weil-Nebensatz: Verb am Ende!"},
    {sentence:"Ich bin sicher, dass wir ___ bald wiedersehen.", answer:"uns", options:["uns","sich","euch"], hint:"sich wiedersehen = reflexiv (wir → uns). Nebensatz: Verb am Ende!"},
    {sentence:"Darf ich ___ erkundigen, wann der Kurs beginnt?", answer:"mich", options:["mich","mir","sich"], hint:"sich erkundigen = reflexiv (ich → mich). Modalverb + Reflexiv + Infinitiv!"},
    {sentence:"Danke, dass Sie ___ so schnell gemeldet haben.", answer:"sich", options:["sich","mich","Ihnen"], hint:"sich melden = reflexiv (Sie → sich). Perfekt im Nebensatz: Partizip + haben am Ende!"},
    {sentence:"Wenn du ___ beeilst, schaffen wir den Zug.", answer:"dich", options:["dich","dir","sich"], hint:"sich beeilen = reflexiv (du → dich). wenn-Nebensatz: Verb am Ende!"},
    {sentence:"Er hat ___ vorgenommen, mehr Sport zu machen.", answer:"sich", options:["sich","ihn","ihm"], hint:"sich vornehmen = reflexiv (Dativ: sich). Perfekt: hat sich vorgenommen!"},
  ],
  modalverb: [
    {sentence:"Ich ___ morgen früh aufstehen. (must)", answer:"muss", options:["muss","kann","darf"], hint:"müssen = must/have to. ich muss + Infinitiv am Ende!"},
    {sentence:"___ du mir bitte helfen? (can)", answer:"Kannst", options:["Kannst","Musst","Sollst"], hint:"können = can. du kannst + Infinitiv am Ende!"},
    {sentence:"Wir ___ heute Abend ins Kino gehen. (want)", answer:"wollen", options:["wollen","sollen","dürfen"], hint:"wollen = want. wir wollen + Infinitiv am Ende!"},
    {sentence:"Er ___ hier nicht rauchen. (may not)", answer:"darf", options:["darf","kann","muss"], hint:"dürfen = may/be allowed to. er darf nicht + Infinitiv!"},
    {sentence:"Sie ___ mehr Wasser trinken. (should)", answer:"sollen", options:["sollen","wollen","können"], hint:"sollen = should. Sie sollen + Infinitiv am Ende!"},
    {sentence:"Ich ___ einen Kaffee bestellen. (would like)", answer:"möchte", options:["möchte","muss","will"], hint:"möchten = would like to. ich möchte + Infinitiv am Ende!"},
    {sentence:"Die Kinder ___ nicht so laut schreien. (should)", answer:"sollen", options:["sollen","wollen","müssen"], hint:"sollen = should. Modalverb konjugiert + Infinitiv am Ende!"},
    {sentence:"___ ich das Fenster aufmachen? (may)", answer:"Darf", options:["Darf","Muss","Will"], hint:"dürfen = may/permission. Trennbares Verb bleibt als Infinitiv zusammen: aufmachen!"},
    {sentence:"Du ___ dich beeilen, der Zug fährt gleich! (must)", answer:"musst", options:["musst","darfst","sollst"], hint:"müssen = must. du musst + sich beeilen (Reflexiv + Infinitiv am Ende)!"},
    {sentence:"Wir ___ uns morgen um 10 Uhr treffen. (can)", answer:"können", options:["können","müssen","sollen"], hint:"können = can. wir können + Reflexiv + Infinitiv am Ende!"},
    {sentence:"Er ___ seine Hausaufgaben nicht machen. (want)", answer:"will", options:["will","soll","darf"], hint:"wollen = want. er will + nicht + Infinitiv am Ende!"},
    {sentence:"___ ihr am Samstag zu uns kommen? (would like)", answer:"Möchtet", options:["Möchtet","Müsst","Könnt"], hint:"möchten = would like. ihr möchtet + Infinitiv am Ende!"},
    {sentence:"Man ___ hier nicht parken. (may not)", answer:"darf", options:["darf","kann","soll"], hint:"dürfen = be allowed to. man darf nicht + Infinitiv am Ende!"},
    {sentence:"Ich ___ Deutsch gut sprechen. (can)", answer:"kann", options:["kann","muss","will"], hint:"können = can/be able to. ich kann + Infinitiv am Ende!"},
  ],
  question: [
    {sentence:"___ heißen Sie?", answer:"Wie", options:["Wie","Was","Wo"], hint:"Name/Art → Wie"},
    {sentence:"___ kommen Sie?", answer:"Woher", options:["Woher","Wo","Wohin"], hint:"Herkunft → Woher"},
    {sentence:"___ kostet das Brot?", answer:"Wie viel", options:["Wie viel","Wie viele","Was"], hint:"Preis (uncountable) → Wie viel"},
    {sentence:"___ Sprachen sprichst du?", answer:"Wie viele", options:["Wie viel","Wie viele","Welche"], hint:"Anzahl (countable) → Wie viele"},
    {sentence:"___ gehört das Buch?", answer:"Wem", options:["Wem","Wen","Wer"], hint:"Dativ-Frage → Wem"},
    {sentence:"___ Film möchtest du sehen?", answer:"Welchen", options:["Welchen","Was","Wie"], hint:"Auswahl (Akk. Mask.) → Welchen"},
    {sentence:"___ ist dein Lieblingsessen?", answer:"Was", options:["Was","Wie","Welches"], hint:"Sache/Ding → Was"},
    {sentence:"___ fährst du im Urlaub?", answer:"Wohin", options:["Wo","Wohin","Woher"], hint:"Richtung/Ziel → Wohin"},
    {sentence:"___ lernst du Deutsch?", answer:"Warum", options:["Warum","Wie","Wann"], hint:"Grund → Warum"},
    {sentence:"___ Uhr ist es?", answer:"Wie viel", options:["Wie viel","Wie viele","Wann"], hint:"Uhrzeit → Wie viel Uhr"},
    {sentence:"___ hast du heute angerufen?", answer:"Wen", options:["Wen","Wem","Wer"], hint:"Akkusativ-Frage → Wen"},
    {sentence:"___ kommt der nächste Bus?", answer:"Wann", options:["Wann","Wie","Wo"], hint:"Zeitpunkt → Wann"},
  ],
  seinhaben: [
    {sentence:"Ich ___ müde. (sein, Präsens)", answer:"bin", hint:"ich + sein = bin"},
    {sentence:"Er ___ einen Hund. (haben, Präsens)", answer:"hat", hint:"er + haben = hat"},
    {sentence:"Wir ___ gestern im Kino. (sein, Prät.)", answer:"waren", hint:"wir + sein (Prät.) = waren"},
    {sentence:"Du ___ keine Zeit. (haben, Präsens)", answer:"hast", hint:"du + haben = hast"},
    {sentence:"Sie ___ Ärztin. (sein, Präsens)", answer:"ist", hint:"sie (she) + sein = ist"},
    {sentence:"Ihr ___ Glück gehabt! (haben, Präsens)", answer:"habt", hint:"ihr + haben = habt"},
    {sentence:"Ich ___ gestern krank. (sein, Prät.)", answer:"war", hint:"ich + sein (Prät.) = war"},
    {sentence:"Er ___ letzte Woche keine Zeit. (haben, Prät.)", answer:"hatte", hint:"er + haben (Prät.) = hatte"},
    {sentence:"___ du schon in Berlin? (sein, Präsens)", answer:"Bist", hint:"du + sein = bist"},
    {sentence:"Wir ___ zwei Katzen. (haben, Präsens)", answer:"haben", hint:"wir + haben = haben"},
    {sentence:"___ ihr gestern zu Hause? (sein, Prät.)", answer:"Wart", hint:"ihr + sein (Prät.) = wart"},
    {sentence:"Sie (formal) ___ sehr freundlich. (sein, Präsens)", answer:"sind", hint:"Sie (formal) + sein = sind"},
    {sentence:"Ich ___ früher einen Garten. (haben, Prät.)", answer:"hatte", hint:"ich + haben (Prät.) = hatte"},
    {sentence:"Du ___ gestern nicht da. (sein, Prät.)", answer:"warst", hint:"du + sein (Prät.) = warst"},
  ],
  time: [
    {sentence:"___ Montag gehe ich ins Kino. (on Monday)", answer:"Am", options:["Am","Im","Um"], hint:"Tag → am"},
    {sentence:"Ich stehe ___ 7 Uhr auf. (at 7 o'clock)", answer:"um", options:["um","am","im"], hint:"Uhrzeit → um"},
    {sentence:"___ Januar ist es kalt. (in January)", answer:"Im", options:["Im","Am","Um"], hint:"Monat → im"},
    {sentence:"Wir treffen uns ___ Abend. (in the evening)", answer:"am", options:["am","im","um"], hint:"Tageszeit → am"},
    {sentence:"___ Wochenende fahren wir weg. (on the weekend)", answer:"Am", options:["Am","Im","Um"], hint:"Wochenende → am"},
    {sentence:"Er kommt ___ Freitag. (on Friday)", answer:"am", options:["am","im","um"], hint:"Wochentag → am"},
    {sentence:"Der Kurs beginnt ___ September. (in September)", answer:"im", options:["im","am","um"], hint:"Monat → im"},
    {sentence:"Das Meeting ist ___ 14:30. (at 2:30pm)", answer:"um", options:["um","am","im"], hint:"Uhrzeit → um"},
  ],
  pronunciation: [
    {word:"Sp___l", answer:"ie", display:"Sp_el (game)", options:["ie","ei"], hint:"Spiel [ʃpiːl] = long 'ee' sound → ie"},
    {word:"kl___n", answer:"ei", display:"kl_n (small)", options:["ie","ei"], hint:"klein [klaɪn] = 'eye' sound → ei"},
    {word:"l___ben", answer:"ie", display:"l_ben (to love)", options:["ie","ei"], hint:"lieben [liːbən] = long 'ee' sound → ie"},
    {word:"schr___ben", answer:"ei", display:"schr_ben (to write)", options:["ie","ei"], hint:"schreiben [ʃʀaɪbən] = 'eye' sound → ei"},
    {word:"v___l", answer:"ie", display:"v_l (much)", options:["ie","ei"], hint:"viel [fiːl] = long 'ee' sound → ie"},
    {word:"w___l", answer:"ei", display:"w_l (because)", options:["ie","ei"], hint:"weil [vaɪl] = 'eye' sound → ei"},
    {word:"B___r", answer:"ie", display:"B_r (beer)", options:["ie","ei"], hint:"Bier [biːɐ] = long 'ee' sound → ie"},
    {word:"R___s", answer:"ei", display:"R_s (rice)", options:["ie","ei"], hint:"Reis [ʀaɪs] = 'eye' sound → ei"},
    {word:"D___nstag", answer:"ie", display:"D_nstag (Tuesday)", options:["ie","ei"], hint:"Dienstag [diːnstaːk] = long 'ee' → ie"},
    {word:"Fr___tag", answer:"ei", display:"Fr_tag (Friday)", options:["ie","ei"], hint:"Freitag [fʀaɪtaːk] = 'eye' → ei"},
    {word:"h___ßen", answer:"ei", display:"h_ßen (to be called)", options:["ie","ei"], hint:"heißen [haɪsən] = 'eye' → ei"},
    {word:"fl___gen", answer:"ie", display:"fl_gen (to fly)", options:["ie","ei"], hint:"fliegen [fliːgən] = long 'ee' → ie"},
    {word:"arb___ten", answer:"ei", display:"arb_ten (to work)", options:["ie","ei"], hint:"arbeiten [aʁbaɪtən] = 'eye' → ei"},
    {word:"w___der", answer:"ie", display:"w_der (again)", options:["ie","ei"], hint:"wieder [viːdɐ] = long 'ee' → ie"},
  ],
  errorCorrection: [
    {wrong:"Ich habe nicht Geld.", correct:"Ich habe kein Geld.", rule:"Nomen ohne Artikel → kein, nicht nicht!"},
    {wrong:"Er sagt, weil er kommt.", correct:"Er sagt, dass er kommt.", rule:"Aussage weitergeben → dass, nicht weil!"},
    {wrong:"Ich helfe dich.", correct:"Ich helfe dir.", rule:"helfen braucht Dativ → dir, nicht dich!"},
    {wrong:"Am 8 Uhr stehe ich auf.", correct:"Um 8 Uhr stehe ich auf.", rule:"Uhrzeit → um, nicht am!"},
    {wrong:"Ich werde morgen gelernt.", correct:"Ich werde morgen lernen.", rule:"Futur I = werden + Infinitiv (nicht Partizip)!"},
    {wrong:"Weil ich bin krank, bleibe ich zu Hause.", correct:"Weil ich krank bin, bleibe ich zu Hause.", rule:"Nach weil geht das Verb ans ENDE!"},
    {wrong:"Kannst du mich helfen?", correct:"Kannst du mir helfen?", rule:"helfen = Dativ-Verb → mir!"},
    {wrong:"Wie viele kostet das?", correct:"Wie viel kostet das?", rule:"Preis = uncountable → Wie viel (nicht viele)!"},
    {wrong:"Sie hat nicht Kinder.", correct:"Sie hat keine Kinder.", rule:"Plural-Nomen negieren → keine!"},
    {wrong:"Im Montag gehe ich ins Kino.", correct:"Am Montag gehe ich ins Kino.", rule:"Wochentag → am (nicht im)!"},
  ]
};

// User-added vocabulary (persisted in localStorage)
let userVocab = JSON.parse(localStorage.getItem('simanga_user_vocab') || '[]');

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
  // Hook up vocab filters to refresh all vocab views
  document.getElementById('vocab-category').addEventListener('change', refreshVocabViews);
  document.getElementById('vocab-unlearned').addEventListener('change', refreshVocabViews);
  generateSpeakingCards();
  loadVerbOverview();
  newFunFact();
  newCompound();
  newMotivation();
  loadPhrases('greetings');
  loadWritingTask('informal');
  newSentencePuzzle();
  newGrammarQuiz();
  initAllLevel2();
  updateStreak();
  loadDailyReminder();
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
  // Exam tabs now use inline onclick handlers (switchExamTab)
}

function switchExamTab(tabId, btn) {
  document.querySelectorAll('.exam-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.exam-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function switchHoerenTab(tabId, btn) {
  document.querySelectorAll('.hoeren-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.hoeren-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
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

function switchGrammarTab(tabId, btn) {
  document.querySelectorAll('#grammar .grammar-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('#grammar .grammar-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
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
// DAILY PRACTICE REMINDER
// ==========================================
function loadDailyReminder() {
  const container = document.getElementById('daily-reminder');
  if (!container) return;

  const verbCats = Object.keys(verbCategories);
  const todayCat = verbCats[new Date().getDay() % verbCats.length];
  const todayCatName = verbCategories[todayCat];

  const vocabCats = ["familie","essen","wohnen","reisen","arbeit","freizeit","koerper","alltag","zeit","schule","hoeren"];
  const vocabCatNames = {familie:"Familie & Personen",essen:"Essen & Trinken",wohnen:"Wohnen & Haus",reisen:"Reisen & Verkehr",arbeit:"Arbeit & Beruf",freizeit:"Freizeit & Hobby",koerper:"Körper & Gesundheit",alltag:"Alltag & Einkaufen",zeit:"Zeit & Wetter",schule:"Schule & Lernen",hoeren:"Hören Prüfung"};
  const todayVocab = vocabCats[new Date().getDate() % vocabCats.length];
  const todayVocabName = vocabCatNames[todayVocab];

  const speakingTopicsList = [
    "Stell dich vor: Name, Alter, woher du kommst, wo du wohnst",
    "Erzähl von deiner Familie und deinen Freunden",
    "Beschreibe deinen Tagesablauf auf Deutsch",
    "Erzähl was du am Wochenende gern machst",
    "Beschreibe deine Wohnung oder dein Zimmer",
    "Erzähl von deinem Beruf oder was du studierst",
    "Was sind deine Hobbys? Was machst du in der Freizeit?"
  ];
  const todaySpeaking = speakingTopicsList[new Date().getDay() % speakingTopicsList.length];

  const greetings = [
    "Hey Simanga! Ready to crush some German today?",
    "Guten Tag, Simanga! Time to level up!",
    "Hallo! Your future self will thank you for studying today!",
    "Hey! 21 Tage left - every minute counts!",
    "Rise and grind, Simanga! Deutsch wartet auf dich!",
    "Another day, another step closer to that A2!",
    "You've got this, Simanga! Let's make today count!"
  ];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  const learned = Object.values(vocabProgress).filter(v => v >= 3).length;
  const verbsMastered = Object.values(verbProgress).filter(v => v >= 3).length;

  container.innerHTML = `
    <div class="reminder-header">
      <span class="reminder-wave">👋</span>
      <h3>${greeting}</h3>
    </div>
    <p class="reminder-subtitle">Here's your daily practice checklist - just 20 minutes can make a big difference!</p>
    <div class="reminder-tasks">
      <div class="reminder-task" onclick="document.querySelector('[data-section=verbs]').click()">
        <span class="reminder-icon">🔄</span>
        <div class="reminder-task-info">
          <strong>Verb Training (10 min)</strong>
          <p>Today's focus: <em>${todayCatName}</em> - practice conjugating these verbs!</p>
          <span class="reminder-progress">${verbsMastered} verbs mastered so far</span>
        </div>
        <span class="reminder-arrow">→</span>
      </div>
      <div class="reminder-task" onclick="document.querySelector('[data-section=vocab]').click()">
        <span class="reminder-icon">📚</span>
        <div class="reminder-task-info">
          <strong>Wortschatz (5 min)</strong>
          <p>Review flashcards for: <em>${todayVocabName}</em></p>
          <span class="reminder-progress">${learned} words learned so far</span>
        </div>
        <span class="reminder-arrow">→</span>
      </div>
      <div class="reminder-task">
        <span class="reminder-icon">🪞</span>
        <div class="reminder-task-info">
          <strong>Spiegel-Übung (5 min)</strong>
          <p>Stand in front of the mirror and: <em>${todaySpeaking}</em></p>
          <span class="reminder-progress">Speak out loud - confidence is key!</span>
        </div>
        <span class="reminder-check">✨</span>
      </div>
    </div>
  `;
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

function refreshVocabViews() {
  loadFlashcards();
  loadQuiz();
  startMatchGame();
  filterWordlist();
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
  const idx = currentFlashcardIndex % flashcardDeck.length;
  const card = flashcardDeck[idx];
  vocabProgress[card.de] = score;
  saveProgress();

  if (score >= 5) {
    // Mastered: remove from deck
    flashcardDeck.splice(idx, 1);
    if (flashcardDeck.length === 0) {
      document.getElementById('fc-word').textContent = 'Alle geschafft! 🎉';
      document.getElementById('fc-translation').textContent = '';
      document.getElementById('fc-example').textContent = '';
      document.getElementById('fc-current').textContent = '0';
      document.getElementById('fc-total').textContent = '0';
      return;
    }
    if (currentFlashcardIndex >= flashcardDeck.length) {
      currentFlashcardIndex = 0;
    }
  } else if (score <= 1) {
    // Nochmal: move card to a random position later in the deck
    flashcardDeck.splice(idx, 1);
    const insertPos = Math.min(idx + 3 + Math.floor(Math.random() * 3), flashcardDeck.length);
    flashcardDeck.splice(insertPos, 0, card);
    if (currentFlashcardIndex >= flashcardDeck.length) {
      currentFlashcardIndex = 0;
    }
  } else {
    // Okay: move to next card normally
    currentFlashcardIndex++;
    if (currentFlashcardIndex >= flashcardDeck.length) {
      currentFlashcardIndex = 0;
      flashcardDeck = shuffle(flashcardDeck.filter(c => (vocabProgress[c.de] || 0) < 5));
      if (flashcardDeck.length === 0) {
        document.getElementById('fc-word').textContent = 'Alle geschafft! 🎉';
        document.getElementById('fc-translation').textContent = '';
        document.getElementById('fc-example').textContent = '';
        return;
      }
    }
  }
  document.getElementById('fc-total').textContent = flashcardDeck.length;
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
  filterWordlist();
}

function filterWordlist() {
  const query = (document.getElementById('wordlist-search-input')?.value || '').toLowerCase();
  const cat = document.getElementById('vocab-category').value;
  const unlearnedOnly = document.getElementById('vocab-unlearned').checked;
  const list = document.getElementById('wordlist-table');
  list.innerHTML = '';
  vocabData.filter(v => {
    const matchesSearch = !query || v.de.toLowerCase().includes(query) || v.en.toLowerCase().includes(query);
    const matchesCat = cat === 'all' || v.cat === cat;
    const matchesUnlearned = !unlearnedOnly || (vocabProgress[v.de] || 0) < 3;
    return matchesSearch && matchesCat && matchesUnlearned;
  }).forEach(v => {
    const entry = document.createElement('div');
    entry.className = 'wordlist-entry';
    const progress = vocabProgress[v.de] || 0;
    const statusIcon = progress >= 5 ? ' ✅' : progress >= 3 ? ' 🟡' : '';
    entry.innerHTML = `<span class="de">${v.de}${statusIcon}</span><span class="en">${v.en}</span>`;
    list.appendChild(entry);
  });
}

// ==========================================
// VERB CONJUGATION
// ==========================================
function loadVerbExercise() {
  const tense = document.getElementById('verb-tense').value;
  const type = document.getElementById('verb-type').value;
  const category = document.getElementById('verb-category').value;

  let filtered = verbsData;
  if (category !== 'all') filtered = filtered.filter(v => v.cat === category);
  if (type !== 'all') filtered = filtered.filter(v => v.type === type);

  if (filtered.length === 0) filtered = verbsData;
  const verb = filtered[Math.floor(Math.random() * filtered.length)];

  document.getElementById('conj-infinitive').textContent = verb.inf;
  document.getElementById('conj-meaning').textContent = verb.en;
  const typeName = verb.type === 'regular' ? 'regelmäßig' :
    verb.type === 'separable' ? 'trennbar' : verb.type === 'modal' ? 'Modalverb' : 'unregelmäßig';
  const catName = verbCategories[verb.cat] || verb.cat;
  document.getElementById('conj-type-badge').textContent = `${typeName} · ${catName}`;

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
  const catFilter = document.getElementById('verb-overview-category').value;

  const filtered = catFilter === 'all' ? verbsData : verbsData.filter(v => v.cat === catFilter);

  // Group by category
  const groups = {};
  filtered.forEach(v => {
    if (!groups[v.cat]) groups[v.cat] = [];
    groups[v.cat].push(v);
  });

  Object.keys(groups).forEach(cat => {
    const catHeader = document.createElement('div');
    catHeader.className = 'verb-overview-cat-header';
    catHeader.textContent = verbCategories[cat] || cat;
    table.appendChild(catHeader);

    const header = document.createElement('div');
    header.className = 'verb-overview-row verb-overview-header';
    header.innerHTML = '<span>Infinitiv</span><span>Präsens (er)</span><span>Perfekt</span><span>Präteritum (er)</span><span>Englisch</span>';
    table.appendChild(header);

    groups[cat].forEach(v => {
      const row = document.createElement('div');
      row.className = 'verb-overview-row';
      const isIrr = v.type !== 'regular';
      const progress = verbProgress[v.inf] || 0;
      const statusIcon = progress >= 5 ? ' ✅' : progress >= 3 ? ' 🟡' : '';
      row.innerHTML = `
        <span class="${isIrr?'irregular':''}">${v.inf}${statusIcon}</span>
        <span>${v.praesens[2]}</span>
        <span>${v.perfekt.aux} ${v.perfekt.pp}</span>
        <span>${v.praeteritum[2]}</span>
        <span>${v.en}</span>
      `;
      table.appendChild(row);
    });
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
  cards.forEach(topicObj => {
    const randomHint = topicObj.hints[Math.floor(Math.random()*topicObj.hints.length)];
    const card = document.createElement('div');
    card.className = 'speaking-card';
    card.innerHTML = `
      <h4>Fragen zur Person</h4>
      <div class="card-topic">${topicObj.topic}</div>
      <div class="card-hint">${randomHint}</div>
    `;
    card.addEventListener('click', () => {
      if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        card.querySelector('.card-all-hints')?.remove();
      } else {
        card.classList.add('expanded');
        const hintsDiv = document.createElement('div');
        hintsDiv.className = 'card-all-hints';
        hintsDiv.innerHTML = topicObj.hints.map(h => `<div class="hint-item">${h}</div>`).join('');
        card.appendChild(hintsDiv);
      }
    });
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

function loadWritingTask(type, btn) {
  document.querySelectorAll('.writing-task-btn').forEach(b => b.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  } else if (event && event.target) {
    event.target.classList.add('active');
  }
  // Keep track of current type for "Neue Aufgabe"
  window._currentWritingType = type;

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
      <button class="check-btn secondary" onclick="loadWritingTask(window._currentWritingType)" style="margin-top:0.8rem">Neue Aufgabe</button>
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
// LEVEL 2 GRAMMAR TRAINER
// ==========================================
function switchGTTab(tabId, btn) {
  document.querySelectorAll('.gt-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.gt-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function loadLevel2Exercise(type) {
  if (type === 'seinhalten') type = 'seinhaben';
  const container = document.getElementById(type + '-exercise');
  if (!container) return;
  container.innerHTML = '';
  const feedbackEl = document.getElementById(type + '-feedback');
  if (feedbackEl) feedbackEl.innerHTML = '';

  if (type === 'negation') {
    const items = shuffle([...level2Data.negation]).slice(0, 5);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      const parts = item.sentence.split('___');
      div.innerHTML = `
        <span class="l2-sentence">${parts[0]}<select class="l2-select" data-idx="${i}">
          <option value="">---</option>
          ${shuffle(item.options).map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>${parts[1]}</span>
      `;
      container.appendChild(div);
    });
  }
  else if (type === 'conjunction') {
    const items = shuffle([...level2Data.conjunction]).slice(0, 5);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      const parts = item.sentence.split('___');
      div.innerHTML = `
        <span class="l2-sentence">${parts[0]}<select class="l2-select" data-idx="${i}">
          <option value="">---</option>
          ${shuffle(item.options).map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>${parts[1]}</span>
      `;
      container.appendChild(div);
    });
  }
  else if (type === 'pronoun') {
    const items = shuffle([...level2Data.pronoun]).slice(0, 5);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      const parts = item.sentence.split('___');
      div.innerHTML = `
        <span class="l2-sentence">${parts[0]}<select class="l2-select" data-idx="${i}">
          <option value="">---</option>
          ${shuffle(item.options).map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>${parts[1]}</span>
      `;
      container.appendChild(div);
    });
  }
  else if (type === 'possessive') {
    const items = shuffle([...level2Data.possessive]).slice(0, 5);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      if (item.options) {
        const parts = item.sentence.split('___');
        div.innerHTML = `
          <span class="l2-sentence">${parts[0]}<select class="l2-select" data-idx="${i}">
            <option value="">---</option>
            ${shuffle(item.options).map(o => `<option value="${o}">${o}</option>`).join('')}
          </select>${parts[1]}</span>
        `;
      } else {
        div.innerHTML = `
          <span class="l2-sentence">${item.sentence.replace('___', `<input type="text" class="l2-input" data-idx="${i}" placeholder="${item.informal} → ?" size="8">`)}</span>
          <span class="l2-informal-hint">Informell: ${item.informal}</span>
        `;
      }
      container.appendChild(div);
    });
  }
  else if (type === 'reflexive') {
    const items = shuffle([...level2Data.reflexive]).slice(0, 6);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      const parts = item.sentence.split('___');
      div.innerHTML = `
        <span class="l2-sentence">${parts[0]}<select class="l2-select" data-idx="${i}">
          <option value="">---</option>
          ${shuffle(item.options).map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>${parts[1]}</span>
      `;
      container.appendChild(div);
    });
  }
  else if (type === 'modalverb') {
    const items = shuffle([...level2Data.modalverb]).slice(0, 6);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      const parts = item.sentence.split('___');
      div.innerHTML = `
        <span class="l2-sentence">${parts[0]}<select class="l2-select" data-idx="${i}">
          <option value="">---</option>
          ${shuffle(item.options).map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>${parts[1]}</span>
      `;
      container.appendChild(div);
    });
  }
  else if (type === 'question') {
    const items = shuffle([...level2Data.question]).slice(0, 6);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      const parts = item.sentence.split('___');
      div.innerHTML = `
        <span class="l2-sentence">${parts[0]}<select class="l2-select" data-idx="${i}">
          <option value="">---</option>
          ${shuffle(item.options).map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>${parts[1]}</span>
      `;
      container.appendChild(div);
    });
  }
  else if (type === 'seinhaben') {
    const items = shuffle([...level2Data.seinhaben]).slice(0, 6);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      div.innerHTML = `
        <span class="l2-sentence">${item.sentence.replace('___', `<input type="text" class="l2-input" data-idx="${i}" placeholder="..." size="10">`)}</span>
      `;
      container.appendChild(div);
    });
  }
  else if (type === 'time') {
    const items = shuffle([...level2Data.time]).slice(0, 5);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      const parts = item.sentence.split('___');
      div.innerHTML = `
        <span class="l2-sentence">${parts[0]}<select class="l2-select" data-idx="${i}">
          <option value="">---</option>
          ${shuffle(item.options).map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>${parts[1]}</span>
      `;
      container.appendChild(div);
    });
  }
  else if (type === 'pronunciation') {
    const items = shuffle([...level2Data.pronunciation]).slice(0, 6);
    items.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'l2-exercise-item';
      div.dataset.answer = item.answer;
      div.dataset.hint = item.hint;
      div.innerHTML = `
        <span class="l2-sentence l2-pronunciation">${item.display.replace('_', `<select class="l2-select" data-idx="${i}">
          <option value="">?</option>
          ${item.options.map(o => `<option value="${o}">${o}</option>`).join('')}
        </select>`)}</span>
      `;
      container.appendChild(div);
    });

    // Add error correction bonus
    const errors = shuffle([...level2Data.errorCorrection]).slice(0, 2);
    const errorDiv = document.createElement('div');
    errorDiv.style.marginTop = '1.5rem';
    errorDiv.innerHTML = `<h4 style="margin-bottom:0.7rem">Fehlerkorrektur - Finde den Fehler!</h4>`;
    errors.forEach((err, i) => {
      const item = document.createElement('div');
      item.className = 'l2-exercise-item l2-error-item';
      item.dataset.answer = err.correct;
      item.dataset.hint = err.rule;
      item.innerHTML = `
        <span class="l2-sentence" style="color:var(--danger)">❌ ${err.wrong}</span>
        <input type="text" class="l2-input l2-error-input" data-idx="err${i}" placeholder="Korrektur..." style="width:100%;margin-top:0.4rem">
      `;
      errorDiv.appendChild(item);
    });
    container.appendChild(errorDiv);
  }
}

function checkLevel2Exercise(type) {
  if (type === 'seinhalten') type = 'seinhaben';
  const container = document.getElementById(type + '-exercise');
  if (!container) return;
  const items = container.querySelectorAll('.l2-exercise-item');
  let correct = 0;
  let total = 0;
  const hints = [];

  items.forEach(item => {
    const answer = item.dataset.answer;
    if (!answer) return;
    const select = item.querySelector('.l2-select');
    const input = item.querySelector('.l2-input');
    const userAnswer = select ? select.value : (input ? input.value.trim() : '');
    total++;

    item.classList.remove('l2-correct', 'l2-wrong');

    // Handle error correction items differently
    if (item.classList.contains('l2-error-item')) {
      const errInput = item.querySelector('.l2-error-input');
      if (errInput && errInput.value.trim().toLowerCase() === answer.toLowerCase()) {
        item.classList.add('l2-correct');
        correct++;
      } else {
        item.classList.add('l2-wrong');
        hints.push(item.dataset.hint);
      }
      return;
    }

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      item.classList.add('l2-correct');
      correct++;
    } else {
      item.classList.add('l2-wrong');
      hints.push(item.dataset.hint);
    }
  });

  const feedbackEl = document.getElementById(type + '-feedback');
  if (!feedbackEl) return;
  let html = `<strong>${correct}/${total} richtig!</strong> ${correct === total ? '🎉 Super!' : ''}`;
  if (hints.length > 0) {
    html += `<div class="l2-hints"><h4>💡 Tipps:</h4><ul>${hints.map(h => `<li>${h}</li>`).join('')}</ul></div>`;
  }
  feedbackEl.innerHTML = html;
  feedbackEl.style.color = correct === total ? 'var(--success)' : 'var(--dark)';
}

function addUserVocab() {
  const de = document.getElementById('uv-german').value.trim();
  const en = document.getElementById('uv-english').value.trim();
  const ex = document.getElementById('uv-example').value.trim();
  if (!de || !en) return;
  userVocab.push({de, en, ex: ex || ''});
  localStorage.setItem('simanga_user_vocab', JSON.stringify(userVocab));
  document.getElementById('uv-german').value = '';
  document.getElementById('uv-english').value = '';
  document.getElementById('uv-example').value = '';
  renderUserVocab();
}

function deleteUserVocab(index) {
  userVocab.splice(index, 1);
  localStorage.setItem('simanga_user_vocab', JSON.stringify(userVocab));
  renderUserVocab();
}

function renderUserVocab() {
  const list = document.getElementById('user-vocab-list');
  if (!list) return;
  if (userVocab.length === 0) {
    list.innerHTML = '<p style="color:var(--gray-400);font-size:0.85rem;padding:1rem">Noch keine eigenen Wörter. Füge oben welche hinzu!</p>';
    return;
  }
  list.innerHTML = userVocab.map((v, i) => `
    <div class="uv-item">
      <span class="uv-de">${v.de}</span>
      <span class="uv-en">${v.en}</span>
      ${v.ex ? `<span class="uv-ex">${v.ex}</span>` : ''}
      <button class="uv-delete" onclick="deleteUserVocab(${i})">✕</button>
    </div>
  `).join('');
}

function initAllLevel2() {
  loadLevel2Exercise('negation');
  loadLevel2Exercise('conjunction');
  loadLevel2Exercise('pronoun');
  loadLevel2Exercise('possessive');
  loadLevel2Exercise('question');
  loadLevel2Exercise('seinhaben');
  loadLevel2Exercise('time');
  loadLevel2Exercise('pronunciation');
  renderUserVocab();
}

// ==========================================
// GRAMMAR QUIZ
// ==========================================
function newGrammarQuiz() {
  const quiz = grammarQuizData[Math.floor(Math.random() * grammarQuizData.length)];
  document.getElementById('grammar-quiz-prompt').textContent = quiz.q;
  const optionsEl = document.getElementById('grammar-quiz-options');
  optionsEl.innerHTML = '';
  document.getElementById('grammar-quiz-feedback').textContent = '';

  const shuffledIndices = shuffle([0,1,2,3]);
  const correctAnswer = quiz.options[quiz.correct];

  shuffledIndices.forEach(i => {
    const div = document.createElement('div');
    div.className = 'quiz-option';
    div.textContent = quiz.options[i];
    div.addEventListener('click', () => {
      if (optionsEl.querySelector('.correct,.wrong')) return;
      if (quiz.options[i] === correctAnswer) {
        div.classList.add('correct');
        document.getElementById('grammar-quiz-feedback').textContent = 'Richtig! ✅';
        document.getElementById('grammar-quiz-feedback').style.color = 'var(--success)';
      } else {
        div.classList.add('wrong');
        optionsEl.querySelectorAll('.quiz-option').forEach(o => {
          if (o.textContent === correctAnswer) o.classList.add('correct');
        });
        document.getElementById('grammar-quiz-feedback').textContent = `Falsch! Richtig: ${correctAnswer}`;
        document.getElementById('grammar-quiz-feedback').style.color = 'var(--danger)';
      }
    });
    optionsEl.appendChild(div);
  });
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
