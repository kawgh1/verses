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

var verses = [
	[['Psalms 1'], [['Blessed is the man who walks not in the counsel of the wicked,'], ['nor stands in the path of sinners, nor sits in the seat of scoffers;'], ['but his delight is in the law of the Lord, and on his law he meditates day and night.'], ['He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither.'], ['In all that he does, he prospers.'], ['The wicked are not so, but are like chaff that the wind drives away.'], ['Therefore the wicked will not stand in the judgment, nor sinners in the congregation of the righteous;'], ['for the Lord knows the way of the righteous, but the way of the wicked will perish.']]],
	[['Psalms 8:1-6'],[['O Lord, our Lord, how majestic is your name in all the earth! You have set your glory above the heavens.'], ['Out of the mouth of babies and infants, you have established strength because of your foes, to still the enemy and the avenger.'],['when I look at your heavens, the work of your fingers, the moon and the stars, which you have set in place,'], ['what is man that you are mindful of him, and the son of man that you care for him?'],['Yet you have made him a little lower than the heavenly beings and crowned him with glory and honor.'], ['You have given him dominion over the works of your hands; you have put all things under his feet.']]],
	[['Psalms 10:1-6'],[['Why, O Lord, do you stand so far away? Why do you hide yourself in times of trouble?'], ['In arrogance the wicked chase after the poor; let them be caught in the schemes they have devised.'], ['For the wicked boasts of the desires of his soul, and the one greedy for gain curses and renounces the Lord.'], ['In the pride of his face the wicked does not seek him; all his thoughts are, “There is no God.”'], ['His ways are always prosperous. your judgments are high up and out of his sight. as for all his foes, he puffs at them.'], ['He says in his heart, “I shall not be moved; throughout all my generations, I shall meet no adversary."']]],
	[['Psalms 20:4-9'],[['May he grant you your heart\'s desires and fulfill all your plans!'], ['May we shout for joy over your salvation, and in the name of our God set up our banners! May the Lord fulfill all your petitions!'], ['Now I know that the Lord saves his anointed; he will answer him from his holy heaven with the saving might of his right hand.'], ['Some trust in chariots and some in horses, but we trust in the name of the Lord our God.'], ['They collapse and fall, but we rise and stand upright.'], ['O Lord, save the king! May he answer us when we call.']]],
	[['Psalms 23'],[['The Lord is my shepherd; I shall not want.'], ['He makes me lie down in green pastures. He leads me beside still waters.'], ['He restores my soul. He leads me in paths of righteousness for his name\'s sake.'], ['Even though I walk through the valley of the shadow of death,'], ['I will fear no evil, for you are with me; your rod and your staff, they comfort me.'], ['You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.'], ['Surely goodness and mercy shall follow me all the days of my life,'], ['and I shall dwell in the house of the Lord forever.']]],
	[['Psalms 121'],[['I lift up my eyes to the hills. From where does my help come?'], ['My help comes from the Lord, who made heaven and earth.'], ['He will not let your foot be moved; he who keeps you will not slumber.'], ['Behold, he who keeps Israel will neither slumber nor sleep.'], ['The Lord is your keeper; the Lord is your shade on your right hand.'], ['The sun shall not strike you by day, nor the moon by night.'], ['The Lord will keep you from all evil; he will keep your life.'], ['The Lord will keep your going out and your coming in from this time forth and forevermore.']]],
	[['Proverbs 2:5-8'],[['Trust in the Lord with all your heart, and do not lean on your own understanding.'], ['In all your ways acknowledge him, and he will make straight your paths.'], ['Be not wise in your own eyes; fear the Lord, and turn away from evil.'], ['It will be healing to your flesh and refreshment to your bones.']]],
	[['Proverbs 24:1-2'],[['Be not envious of evil men,'], ['nor desire to be near them,'], ['for their hearts plot only violence,'], ['and their mouths speak only ill.']]],
	[['Proverbs 24:15-16'],[['Lie not in wait as a wicked man,'], ['against the dwelling of the righteous.'], ['do no violence to his home.'], ['for the righteous falls seven times yet rises again,'], ['but the wicked stumble in times of chaos.']]],
	[['Proverbs 24:17-18'],[['Do not rejoice when your enemy falls,'], ['and let not your heart be glad when he stumbles,'], ['lest the Lord see it and be displeased,'], ['and turn his anger away from him.']]],
	[['Proverbs 25:11-14'],[['A word fitly spoken is like apples of gold in a setting of silver.'], ['Like a gold ring or ornament is a wise reprover to a listening ear.'], ['Like the cold of snow in the time of harvest is a faithful messenger to those who send him.'], ['he refreshes the soul of his lord.'], ['Like clouds and wind without rain is a man who boasts of a gift he does not share.']]],
	[['Proverbs 16:1-4'],[['The plans of the heart belong to man, but the answer of the tongue is from the Lord.'], ['All the ways of a man are pure in his own eyes, but the Lord weighs the spirit.'], ['Commit your work to the Lord, and your plans will be established.'], ['The Lord has made everything for its purpose, even the wicked for the day of trouble.']]],
	[['Deuteronomy 8:2-6'],[['And you shall always remember all the ways which the Lord your God has led you these forty years in the wilderness,'], ['so that He might humble you and test you, to know what was in your heart, whether you would keep His commandments or not.'], ['He humbled you and allowed you to be hungry and fed you with manna, a substance you did not know, nor did your fathers know,'], ['so that He might make you understand that man does not live by bread alone, but man lives by every word that springs forth from the mouth of the Lord.'], ['Your clothing did not wear out, nor did your feet swell and boil these forty years.'], ['Therefore, know in your heart that the Lord your God disciplines and instructs you,'], ['just as a man disciplines and instructs his own child.']]],
	[['Isaiah 40:8'],[['The grass withers,'], [' the flower fades,'], ['but the word of our God will stand forever.']]],
	[['Isaiah 40:21-23'],[['Do you not know? Have you not heard? Has it not been told to you since the beginning?'], [' Have you not understood from the foundations of the earth?'], ['It is he who sits above the circle of the earth, and its inhabitants are like grasshoppers.'], ['It is he who stretches out the heavens like a curtain, and spreads them like a tent to dwell in,'], ['who brings princes to nothing, and makes the rulers of the earth as emptiness.']]],
	[['Isaiah 40:28-31'],[['Have you not known? Have you not heard?'], ['The Lord is the everlasting God, the Creator of the ends of the earth.'], ['He does not faint or grow weary; his understanding is unsearchable.'], ['He gives power to the weak and to him who has no might he increases their strength.'], ['Even youths shall faint and grow weary, and young men will stumble and fall;'], ['but they who wait for the Lord shall renew their strength.'], ['they shall fly with wings like eagles!'], ['they shall run and not be weary; they shall walk and not be faint.']]],
	[['Isaiah 61:1'],[['The Spirit of the Lord God is upon me,'], ['because the Lord has anointed me to bring good news to the poor.'], ['he has sent me to mend the brokenhearted,'], ['to declare freedom to those in bondage,'], ['and open the prisons of those who are bound.']]],
	[['Isaiah 61:10-11'],[['I will greatly rejoice in the Lord; my soul shall exult in my God, for he has clothed me with the garments of salvation.'], ['he has covered me with the robe of righteousness, as a bridegroom decks himself like a priest with a beautiful headdress, and as a bride adorns herself with jewels.'], ['For as the earth brings forth its sprouts, and as a garden causes what is sown to sprout up,'], ['so the Lord God will cause righteousness and praise to sprout up before all the nations.']]],
	[['Isaiah 43:1-7'],[['“Fear not, for I have redeemed you; I have called you by name, you are mine.'], ['When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you.'], ['when you walk through fire you shall not be burned, and the flame shall not consume you.'], ['For I am the Lord your God, the Holy One of Israel, your Savior. I give Egypt as your ransom, Cush and Seba in exchange for you.'], ['Because you are precious in my eyes, and honored, and I love you, I give men in return for you, peoples in exchange for your life.'], ['Fear not, for I am with you; I will bring your offspring from the east, and from the west I will gather you.'], ['I will say to the north, Give up, and to the south, Do not withhold; bring my sons from afar and my daughters from the end of the earth,'], ['everyone who is called by my name, whom I created for my glory, whom I formed and made.”']]],
	[['Isaiah 43:18-19'],[['“Remember not the former things, nor consider the things of old.'], ['Behold, for I am doing a new thing!'], ['now it springs forth, can you not feel it?'], ['I will make a path in the wilderness and run rivers in the desert.']]],	
	[['Ezekiel 34:11-13'],[['Behold, I, I myself will search for my sheep and will find them out.'], ['As a shepherd seeks out his flock when they have been scattered, so will I seek out my sheep,'], ['and I will rescue them from all the places where they have been scattered on a day of clouds as thick as darkness.'], [' And I will bring them out from the peoples and gather them from the countries, and will bring them into their own land.']]],
	[['Ezekiel 34:15-16'],[['I myself will be the shepherd of my sheep,'], ['and I myself will make them lie down, declares the Lord.'], ['I will seek the lost and I will bring back the strays.'], ['I will bind up the injured and I will strengthen the weak.']]],
	[['Psalms 37:23-26'],[['The steps of a man are established by the Lord, when he delights in his way;'], ['though he fall, he shall not be cast headlong, for the Lord upholds his hand.'], ['I have been young, and now am old,'], ['yet I have not seen the righteous forsaken nor his children begging for bread.'], ['He is ever generous and his children are a blessing.']]],
	[['Psalms 118:22-24'],[['The stone that the builders rejected has become the cornerstone;'], ['the Lord has done this, and it is a marvelous thing.'], ['The Lord has done it this very day; let us rejoice today and be glad.']]],
	[['Numbers 6:24-26'], [['The Lord bless you and keep you.'], ['the Lord make his face shine upon you and be gracious unto you;'], ['the Lord ever gaze upon you and give you peace.']]]
]

function newQuote(){

	// clear p tags of any values in the plist
	for(var i=0; i < plist.length; i++){
		plist[i].textContent = '';
	}
	var randomNumber = Math.floor(Math.random() * (verses.length));
	verse.textContent = verses[randomNumber][0];

	for(var i=0; i < verses[randomNumber][1].length; i++){
		plist[i].textContent = verses[randomNumber][1][i];
	}
		// css.textContent = css.textContent.split('~').join(' <br> ');

}
// initial verse and background, new for each visitor not static	
setGradient();

function setGradient() {
	color = [];
	setColors();
	newQuote();

	body.style.background = "linear-gradient(rgb(" + color[0] + ", " + color[1] + ", " + color[2] + "), rgb("
							+ color[3] + ", " + color[4] + ", " + color[5] + ")) no-repeat scroll 0% 0%";

	// console.log(newQuote())
}

btn.addEventListener("click", setGradient);


