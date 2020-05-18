// var css = document.querySelector("h3");
var btn = document.querySelector(".btn");
var body = document.getElementById("gradient");
var verse = document.getElementById("verse");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var p8 = document.getElementById("p8");

var plist = [p1, p2, p3, p4, p5, p6, p7, p8];



var color = [];

function getRGBvalue() {
	return Math.floor(Math.random() * 256);
	
}


function setColors(){
	
	color.push(getRGBvalue());
	color.push(getRGBvalue());
	color.push(getRGBvalue());
	color.push(getRGBvalue());
	color.push(getRGBvalue());
	color.push(getRGBvalue());
};


	// color.push(getRGBvalue());
	// color.push(getRGBvalue());
	// color.push(getRGBvalue());
	// color.push(getRGBvalue());
	// color.push(getRGBvalue());
	// color.push(getRGBvalue());

var verses = [
	[['Psalms 1'], [['Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers;'], ['but his delight is in the law of the Lord, and on his law he meditates day and night.'], ['He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither.'], ['In all that he does, he prospers.'], ['The wicked are not so, but are like chaff that the wind drives away.'], ['Therefore the wicked will not stand in the judgment, nor sinners in the congregation of the righteous;'], ['for the Lord knows the way of the righteous, but the way of the wicked will perish.']]],
	[['Psalms 8:1-6'],[['O Lord, our Lord, how majestic is your name in all the earth! You have set your glory above the heavens.'], ['Out of the mouth of babies and infants, you have established strength because of your foes, to still the enemy and the avenger.'],['when I look at your heavens, the work of your fingers, the moon and the stars, which you have set in place,'], ['what is man that you are mindful of him, and the son of man that you care for him?'],['Yet you have made him a little lower than the heavenly beings and crowned him with glory and honor.'], ['You have given him dominion over the works of your hands; you have put all things under his feet.']]],
	[['Psalms 10:1-6'],[['Why, O Lord, do you stand far away? Why do you hide yourself in times of trouble?'], ['In arrogance the wicked hotly pursue the poor; let them be caught in the schemes that they have devised.'], ['For the wicked boasts of the desires of his soul, and the one greedy for gain curses and renounces the Lord.'], ['In the pride of his face the wicked does not seek him; all his thoughts are, “There is no God.”'], ['His ways prosper at all times; your judgments are on high, out of his sight; as for all his foes, he puffs at them.'], ['He says in his heart, “I shall not be moved; throughout all generations I shall not meet adversity.']]],
	[['Psalms 20:4-9'],[['May he grant you your heart\'s desires and fulfill all your plans!'], ['May we shout for joy over your salvation, and in the name of our God set up our banners! May the Lord fulfill all your petitions!'], ['Now I know that the Lord saves his anointed; he will answer him from his holy heaven with the saving might of his right hand.'], ['Some trust in chariots and some in horses, but we trust in the name of the Lord our God.'], ['They collapse and fall, but we rise and stand upright.'], ['O Lord, save the king! May he answer us when we call.']]],
	[['Psalms 23'],[['The Lord is my shepherd; I shall not want.'], ['He makes me lie down in green pastures. He leads me beside still waters.'], ['He restores my soul. He leads me in paths of righteousness for his name\'s sake.'], ['Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.'], ['You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.'], [,'Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.']]],
	[['Psalms 121'],[['I lift up my eyes to the hills. From where does my help come?'], ['My help comes from the Lord, who made heaven and earth.'], ['He will not let your foot be moved; he who keeps you will not slumber.'], ['Behold, he who keeps Israel will neither slumber nor sleep.'], ['The Lord is your keeper; the Lord is your shade on your right hand.'], ['The sun shall not strike you by day, nor the moon by night.'], ['The Lord will keep you from all evil; he will keep your life.'], ['The Lord will keep your going out and your coming in from this time forth and forevermore.']]],
	[['Proverbs 2:5-8'],[['Trust in the Lord with all your heart, and do not lean on your own understanding.'], ['In all your ways acknowledge him, and he will make straight your paths.'], ['Be not wise in your own eyes; fear the Lord, and turn away from evil.'], ['It will be healing to your flesh and refreshment to your bones.']]],
	[['Proverbs 24:1-2'],[['Be not envious of evil men, nor desire to be with them,'], ['for their hearts devise violence, and their lips talk of trouble.']]],
	[['Proverbs 24:15-16'],[['Lie not in wait as a wicked man against the dwelling of the righteous; do no violence to his home;'], ['for the righteous falls seven times and rises again, but the wicked stumble in times of calamity.']]],
	[['Proverbs 24:17-18'],[['Do not rejoice when your enemy falls, and let not your heart be glad when he stumbles,'], ['lest the Lord see it and be displeased, and turn away his anger from him.']]],
	[['Proverbs 25:11-14'],[['A word fitly spoken is like apples of gold in a setting of silver.'], ['Like a gold ring or ornament is a wise reprover to a listening ear.'], ['Like the cold of snow in the time of harvest is a faithful messenger to those who send him; he refreshes the soul of his master.'], ['Like clouds and wind without rain is a man who boasts of a gift he does not give.']]],
	[['Proverbs 16:1-4'],[['The plans of the heart belong to man, but the answer of the tongue is from the Lord.'], ['All the ways of a man are pure in his own eyes, but the Lord weighs the spirit.'], ['Commit your work to the Lord, and your plans will be established.'], ['The Lord has made everything for its purpose, even the wicked for the day of trouble.']]],
]



function newQuote(){

	// clear p tags of any values in the plist
	for(var i=0; i < plist.length; i++){
		plist[i].textContent = '';
	}

	

	var randomNumber = Math.floor(Math.random() * (verses.length));
	verse.textContent = verses[randomNumber][0];

	// verses[randomNumber][1].forEach(item => p1.textContent = item);
	// p2.textContent = verses[randomNumber][1];
	
	for(var i=0; i < verses[randomNumber][1].length; i++){

		// p1.textContent = verses[randomNumber][1][i];
		// verses[randomNumber][1].forEach(item => plist[i].textContent = item);
		plist[i].textContent = verses[randomNumber][1][i];
	}
	
	// css.textContent = css.textContent.split('~').join(' <br> ');

}
	
setGradient();

// color = setColors();



function setGradient() {
	color = [];
	setColors();
	newQuote();

	body.style.background = "linear-gradient(rgb(" 
							+ color[0] + ", "
							+ color[1] + ", "
							+ color[2] + "), rgb("

							+ color[3] + ", "
							+ color[4] + ", "
							+ color[5] + ")) no-repeat scroll 0% 0%";

							// body.style.background = "linear-gradient('red', 'blue');"
							// css.textContent = body.style.background + ";";
							// console.log('css.textContent =', body.style.background + ";");

	console.log("you're retarded");
	console.log(color[0]);
	// console.log(newQuote())

}


// btn.addEventListener("click", setGradient);



btn.addEventListener("click", setGradient);


