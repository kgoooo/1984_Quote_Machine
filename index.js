var quotes = [
	['BIG BROTHER IS WATCHING YOU', 'Part 1, Chapter 1, pg. 3'],
	['WAR IS PEACE - FREEDOM IS SLAVERY - IGNORANCE IS STRENGTH.', 'Part 1, Chapter 1, pg. 6']
	["A hideous ecstasy of fear and vindictiveness, a desire to kill, to torture, to smash faces in with a sledgehammer, seemed to flow through the whole group of people like an electric current, turning one even against one's will into a grimacing, screaming lunatic.", 'Part 1, Chapter 1, pg. 16'],
	["one of those completely unquestioning, devoted drudges on whom, more even than on the Thought Police, the stability of the Party depended.", 'Part 1, Chapter 2, pg. 23'],
	["We shall meet in the place where there is no darkness.", 'Part 1, Chapter 2, pg. 27'],
	["The past was dead, the future was unimaginable", 'Part 1, Chapter 2, pg. 28'],
	["With its grace and carelessness it seemed to annihilate a whole culture, a whole system of thought, as though Big Brother and the Party and the Thought Police could all be swept into nothingness by a single splendid movement of the arm.", 'Part 1, Chapter 3, pg. 33'],
	["'Who controls the past', ran the Party slogan, 'controls the future: who controls the present controls the past.'", 'Part 1, Chapter 3, pg. 37'],
	["Comrade Ogilvy, who had never existed in the present, now existed in the past, and when once the act of forgery was forgotten, he would exist just as authentically, and upon the same evidence, as Charlemagne or Julius Caesar.", 'Part 1, Chapter 4, pg. 50'],
	["Your worst enemy, he reflected, was your own nervous system. At any moment the tension inside you was liable to translate itself into some visible symptom.", 'Part 1, Chapter 6, pg. 64'],
	["She had not a thought in her head that was not a slogan, and there was no imbecility, absolutely none, that she was not capable of swallowing if the Party handed it out to her.", 'Part 1, Chapter 6, pg. 67'],
	["They were born, they grew up in the gutters, they went to work at twelve, they passed through a brief blossoming period of beauty and sexual desire, they married at twenty, they were middle-aged at thirty, they died, for the most part, at sixty. Heavy physical work, the care of home and children, petty quarrels with neighbors, films, football, beer, and, above all, gambling filled up the horizon of their minds.", 'Part 1, Chapter 7, pg. 71'],
	["If there is hope, wrote Winston, it lies in the proles.", 'Part 1, Chapter 7, pg. 72'],
	["Until they become conscious they will never rebel, and until after they have rebelled they cannot become conscious.", 'Part 1, Chapter 7, pg. 74'],
	["a nation of warriors and fanatics, marching forward in perfect unity, all thinking the same thoughts and shouting the same slogans, perpetually working, fighting, triumphing, persecuting - three hundred million people all with the same face.", 'Part 1, Chapter 7, pg. 77'],
	["Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.", 'Part 1, Chapter 7, pg. 84'],
	["It seemed to him that he knew exactly what it felt like to sit in a room like this, in an armchair beside an open fire with your feet in the fender and a kettle on the hob: utterly alone, utterly secure, with nobody watching you, no voice pursuing you, no sound except the singing of the kettle and the friendly ticking of the clock.", 'Part 1, Chapter 8, pg. 100'],
	["Oranges and lemons, say the bells of St Clement's, You owe me three farthings, say the bells of St Martin's.", 'Part 1, Chapter 8, pg. 103'],
	["At the sight of the words I love you the desire to stay alive had welled up in him, and the taking of minor risks suddenly seemed stupid.", 'Part 2, Chapter 1, pg. 110-11'],
	["by degrees the flood of music drove all speculations out of his mind. It was as though it were a kind of liquid stuff that poured all over him and got mixed up with the sunlight that filtered through the leaves.", 'Part 2, Chapter 2, pg. 125'],
	["Not merely the love of one person, but the animal instinct, the simple undifferentiated desire: that was the force that would tear the Party to pieces.", 'Part 2, Chapter 2, pg. 127'],
	["What was more important was that sexual privation induced hysteria, which was desirable because it could be transformed into war fever and leader worship.", 'Part 2, Chapter 3, pg. 134'],
	["She did not understand that there was no such thing as happiness, that the only victory lay in the far future, long after you were dead, that from the moment of declaring war on the Party it was better to think of yourself as a corpse. 'We are the dead,' he said.", 'Part 2, Chapter 3, pg. 137'],
	["The smell of her hair, the taste of her mouth, the feeling of her skin seemed to have got inside him, or into the air all around him. She had become a physical necessity.", 'Part 2, Chapter 4, pg. 140'],
	["The proles, normally apathetic about the war, were being lashed into one of their periodical frenzies of patriotism.", 'Part 2, Chapter 5, pg. 150'],
	["So long as they were actually in this room, they both felt, no harm could come to them.", 'Part 2, Chapter 5, pg. 152'],
	["Even the one plan that was practicable, suicide, they had no intention of carrying out. To hang on from day to day and from week to week, spinning out a present that had no future, seemed an unconquerable instinct, just as one's lungs will always draw the next breath so long as there is air available.", 'Part 2, Chapter 5, pg. 153'],
	["she only questioned the teachings of the Party when they in some way touched upon her own life. Often she was ready to accept the official mythology, simply because the difference between truth and falsehood did not seem important to her.", "Part 2, Chapter 5, pg. 154"],
	["He had the sensation of stepping into the dampness of a grave, and it was not much better because he had always known that the grave was there and waiting for him.", 'Part 2, Chapter 6, pg. 160'],
	["The terrible thing that the Party had done was to persuade you that mere impulses, mere feelings, were of no account, while at the same time robbing you of all power over the material world.", 'Part 2, Chapter 7, pg. 165'],
	["It's the one thing they can't do. They can make you say anything - anything - but they can't make you believe it. They can't get inside you.", 'Part 2, Chapter 7, pg. 167'],
	["You will work for a while, you will be caught, you will confess, and then you will die... There is no possibility that any perceptible change will happen within our own lifetime. We are the dead.", 'Part 2, Chapter 8, pg. 177'],
	["The primary aim of modern warfare Part 1n accordance with the principles of doublethink, this aim is simultaneously recognized and not recognized by the directing brains of the Inner Party is to use up the products of the machine without raising the general standard of living.", 'Part 2, Chapter 9, pg. 189'],
	["the consciousness of being at war, and therefore in danger, makes the handing-over of all power to a small caste seem the natural, unavoidable condition of survival.", 'Part 2, Chapter 9, pg. 192'],
	["It was the product of a mind similar to his own, but enormously more powerful, more systematic, less fear-ridden. The best books, he perceived, are those that tell you what you know already.", 'Part 2, Chapter 9, pg. 201'],
	["Even the Catholic Church of the Middle Ages was tolerant by modern standards. Part of the reason for this was that in the past no government had the power to keep its citizens under constant surveillance. The invention of print, however, made it easier to manipulate public opinion, and the film and the radio carried the process further. With the development of television, and the technical advance which made it possible to receive and transmit simultaneously on the same instrument, private life came to an end.", 'Part 2, Chapter 9, pg. 206-7'],
	["There were times when it went on and on until the cruel, wicked, unforgivable thing seemed to him not that the guards continued to beat him but that he could not force himself into losing consciousness.", 'Part 3, Chapter 2, pg. 244'],
	["'Do you remember writing in your diary,' he said, 'that it did not matter whether I was a friend or an enemy, since I was at least a person who understood you and could be talked to? You were right. I enjoy talking to you. Your mind appeals to me. It resembles my own mind except that you happen to be insane.'", 'Part 3, Chapter 2, pg. 271'],
	["It was like swimming against a current that swept you backwards however hard you struggled, and then suddenly deciding to turn round and go with the current instead of opposing it. Nothing had changed except your own attitude; the predestined thing happened in any case.", 'Part 3, Chapter 4, pg. 280'],
	["For the first time he perceived that if you want to keep a secret you must also hide it from yourself.", 'Part 3, Chapter 4, pg. 283'],
	["But it was all right, everything was all right, the struggle was finished. He had won the victory over himself. He loved Big Brother.", 'Part 3, Chapter 6, pg. 300'],
	["The purpose of Newspeak was not only to provide a medium of expression for the world-view and mental habits proper to the devotees of Ingsoc, but to make all other modes of thought impossible.", 'Appendix, pg. 303']
];
// 41 quotes

var quoteNumb = () => Math.floor(Math.random() * 41) +1;
var num = quoteNumb();
var quoteInsert = quotes[num][0];
var locInsert = quotes[num][1];


var initialize = () =>{
	$("#quote").append(quoteInsert);
	$("#location").append(locInsert);
}

$("#btn").on('click', () => {
	var newNum = quoteNumb();
	var newQuoteIns = quotes[newNum][0];
	var newLocIns = quotes[newNum][1];
	$("#quote").text(newQuoteIns);
	$("#location").text(newLocIns);
})

initialize();