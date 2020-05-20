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
	return Math.floor(Math.random() * 225);
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
	[['Psalms 8:1-6'],[['O Lord, our Lord, how majestic is your name in all the earth! You have set your glory above the heavens.'], ['Out of the mouth of babies and infants, you have established strength because of your foes, to still the enemy and the avenger.'],['when I look at your heavens, the work of your fingers, the moon and the stars, which you have set in place,'], ['what is man that you are mindful of him, and the son of man that you care for him?'],['Yet you have made him a little lower than the angels and crowned him with glory and honor.'], ['You have given him dominion over the works of your hands; you have put all things under his feet.']]],
	[['Psalms 10:1-6'],[['Why, O Lord, do you stand so far away? Why do you hide yourself in times of trouble?'], ['In arrogance the wicked chase after the poor; let them be caught in the schemes they have devised.'], ['For the wicked boasts of the desires of his soul, and the one greedy for gain curses and renounces the Lord.'], ['In the pride of his face the wicked does not seek him; all his thoughts are, “There is no God.”'], ['His ways are always prosperous. your judgments are high up and out of his sight. as for all his foes, he puffs at them.'], ['He says in his heart, “I shall not be moved; throughout all my generations, I shall meet no adversary."']]],
	[['Psalms 20:4-9'],[['May he grant you your heart\'s desires and fulfill all your plans!'], ['May we shout for joy over your salvation, and in the name of our God set up our banners! May the Lord fulfill all your petitions!'], ['Now I know that the Lord saves his anointed; he will answer him from his holy heaven with the saving might of his right hand.'], ['Some trust in chariots and some in horses, but we trust in the name of the Lord our God.'], ['They collapse and fall, but we rise and stand upright.'], ['O Lord, save the king! May he answer us when we call.']]],
	[['Psalms 23'],[['The Lord is my shepherd, I shall not want.'], ['He makes me lie down in green pastures. He leads me beside still waters.'], ['He restores my soul. He leads me in paths of righteousness for his name\'s sake.'], ['Even though I walk through the valley of the shadow of death,'], ['I will fear no evil, for you are with me. Your rod and your staff, they comfort me.'], ['You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.'], ['Surely goodness and mercy shall follow me all the days of my life,'], ['and I shall dwell in the house of the Lord forever.']]],
	[['Psalms 121'],[['I lift up my eyes to the hills. From where does my help come?'], ['My help comes from the Lord, who made heaven and earth.'], ['He will not let your foot be moved; he who keeps you will not slumber.'], ['Behold, he who keeps Israel will neither slumber nor sleep.'], ['The Lord is your keeper; the Lord is your shade on your right hand.'], ['The sun shall not strike you by day, nor the moon by night.'], ['The Lord will keep you from all evil; he will keep your life.'], ['The Lord will keep your going out and your coming in from this time forth and forevermore.']]],
	[['Proverbs 2:5-8'],[['Trust in the Lord with all your heart, and do not lean on your own understanding.'], ['In all your ways acknowledge him, and he will make straight your paths.'], ['Be not wise in your own eyes; fear the Lord, and turn away from evil.'], ['It will be healing to your flesh and refreshment to your bones.']]],
	[['Proverbs 24:1-2'],[['Be not envious of evil men,'], ['nor desire to be near them,'], ['for their hearts plot only violence,'], ['and their mouths speak only ill.']]],
	[['Proverbs 24:15-16'],[['Lie not in wait as a wicked man,'], ['against the dwelling of the righteous.'], ['do no violence to his home.'], ['for the righteous falls seven times yet rises again,'], ['but the wicked stumble in times of chaos.']]],
	[['Proverbs 24:17-18'],[['Do not rejoice when your enemy falls,'], ['and let not your heart be glad when he stumbles,'], ['lest the Lord see it and be displeased,'], ['and turn his anger away from him.']]],
	[['Proverbs 25:11-14'],[['A word fitly spoken is like apples of gold in a setting of silver.'], ['Like a gold ring or ornament is a wise reprover to a listening ear.'], ['Like the cold of snow in the time of harvest is a faithful messenger to those who send him.'], ['he refreshes the soul of his master.'], ['Like clouds and wind without rain is a man who boasts of a gift he does not share.']]],
	[['Proverbs 16:1-4'],[['The plans of the heart belong to man, but the answer of the tongue is from the Lord.'], ['All the ways of a man are pure in his own eyes, but the Lord weighs the spirit.'], ['Commit your work to the Lord, and your plans will be established.'], ['The Lord has made everything for its purpose, even the wicked for the day of trouble.']]],
	[['Deuteronomy 8:2-6'],[['And you shall always remember all the ways which the Lord your God has led you these forty years in the wilderness,'], ['so that He might humble you and test you, to know what was in your heart, whether you would keep His commandments or not.'], ['He humbled you and allowed you to be hungry and fed you with manna, a substance you did not know, nor did your fathers know,'], ['so that He might make you understand that man does not live by bread alone, but man lives by every word that springs forth from the mouth of the Lord.'], ['Your clothing did not wear out, nor did your feet swell and boil these forty years.'], ['Therefore, know in your heart that the Lord your God disciplines and instructs you,'], ['just as a man disciplines and instructs his own child.']]],
	[['Isaiah 40:8'],[['The grass withers,'], [' the flower fades,'], ['but the word of our God will stand forever.']]],
	[['Isaiah 40:21-23'],[['Do you not know? Have you not heard? Has it not been told to you since the beginning?'], [' Have you not understood from the foundations of the earth?'], ['It is he who sits above the circle of the earth, and its inhabitants are like grasshoppers.'], ['It is he who stretches out the heavens like a curtain, and spreads them like a tent to dwell in,'], ['who brings princes to nothing, and makes the rulers of the earth as emptiness.']]],
	[['Isaiah 40:28-31'],[['Have you not known? Have you not heard?'], ['The Lord is the everlasting God, the Creator of the ends of the earth.'], ['He does not faint or grow weary; his understanding is unsearchable.'], ['He gives power to the weak and to him who has no might he increases their strength.'], ['Even youths shall faint and grow weary, and young men will stumble and fall;'], ['but they who wait for the Lord shall renew their strength.'], ['they shall fly on wings like eagles!'], ['they shall run and not be weary; they shall walk and not be faint.']]],
	[['Isaiah 61:1'],[['The Spirit of the Lord God is upon me,'], ['because the Lord has anointed me to bring good news to the poor.'], ['he has sent me to mend the brokenhearted,'], ['to declare freedom to those in bondage,'], ['and to open the prisons of those who are bound.']]],
	[['Isaiah 61:10-11'],[['I will greatly rejoice in the Lord; my soul shall exult in my God, for he has clothed me with the garments of salvation.'], ['he has covered me with the robe of righteousness, as a bridegroom decks himself like a priest with a beautiful headdress, and as a bride adorns herself with jewels.'], ['For as the earth brings forth its sprouts, and as a garden causes what is sown to sprout up,'], ['so the Lord God will cause righteousness and praise to sprout up before all the nations.']]],
	[['Isaiah 43:1-7'],[['“Fear not, for I have redeemed you; I have called you by name, you are mine.'], ['When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you.'], ['when you walk through fire you shall not be burned, and the flame shall not consume you.'], ['For I am the Lord your God, the Holy One of Israel, your Savior. I give Egypt as your ransom, Cush and Seba in exchange for you.'], ['Because you are precious in my eyes, and honored, and I love you, I give men in return for you, peoples in exchange for your life.'], ['Fear not, for I am with you; I will bring your offspring from the east, and from the west I will gather you.'], ['I will say to the north, Give up, and to the south, Do not withhold; bring my sons from afar and my daughters from the end of the earth,'], ['everyone who is called by my name, whom I created for my glory, whom I formed and made.”']]],
	[['Isaiah 43:18-19'],[['Remember not the former things, nor consider the things of old.'], ['Behold, for I am doing a new thing!'], ['now it springs forth, can you not feel it?'], ['I will make a path in the wilderness and run rivers through the desert.']]],	
	[['Ezekiel 34:11-13'],[['Behold, I, I myself will search for my sheep and will find them out.'], ['As a shepherd seeks out his flock when they have been scattered, so will I seek out my sheep,'], ['and I will rescue them from all the places where they have been scattered on a day of clouds as thick as darkness.'], [' And I will bring them out from the peoples and gather them from the countries, and will bring them into their own land.']]],
	[['Ezekiel 34:15-16'],[['I myself will be the shepherd of my sheep,'], ['and I myself will make them lie down, declares the Lord.'], ['I will seek the lost and I will bring back the strays.'], ['I will bind up the injured and I will strengthen the weak.']]],
	[['Psalms 37:23-26'],[['The steps of a man are established by the Lord, when he delights in his way;'], ['though he fall, he shall not be cast headlong, for the Lord upholds his hand.'], ['I have been young, and now am old,'], ['yet I have not seen the righteous forsaken nor his children begging for bread.'], ['He is ever generous and his children are a blessing.']]],
	[['Psalms 118:22-24'],[['The stone that the builders rejected has become the cornerstone.'], ['the Lord has done this, and it is a marvelous thing.'], ['The Lord has done it this very day; let us rejoice today and be glad.']]],
	[['Numbers 6:24-26'], [['The Lord bless you and keep you.'], ['the Lord make his face shine upon you and be gracious unto you.'], ['the Lord ever gaze upon you and give you peace.']]],
	[['Zephaniah 3:17'], [['The Lord your God with you, he is mighty to save.'], ['He will take great delight in you.'], ['he will quiet you with his love.'], ['He will rejoice over you with singing.']]],
	[['Zephaniah 3:20'], [['\'At that time I will bring you in, at the time when I gather you together.'], ['For I will make you renowned and praised among all the peoples of the earth,'], ['When I restore you before your very eyes,\' says the Lord.']]],
	[['Habakkuk 3:17-19'],  [['Though the fig tree should not blossom nor fruit be on the vines,'], ['the produce of the olive fail and the fields yield no food,'], ['the flock be cut off from the fold and there be no herd in the stalls,'], ['yet I will rejoice in the Lord. I will take joy in the God of my salvation.'], ['God, the Lord, is my strength.'], ['he makes my feet like a deer\'s,'], ['he makes me tread safely upon my high places.']]],
	[['Joel 2:28-29'], [['"At that time I will pour out my spirit upon all flesh.'], ['Your sons and your daughters shall prophesy,'], ['your old men shall dream dreams,'], ['and your young men shall see visions.'], ['Even on your own servants,'], ['in those days,'], ['will I pour out my spirit."']]],
    	[['Habakkuk 2:1-4'], [['I will stand at my watchpost and station myself on the rampart.'] ,['I will keep watch to see what he will say to me,'], ['and what he will answer concerning my prayer.'], ['And the Lord answered me:'], ['"Write the vision and make it plain, so he may run who reads it.'], ['For still the vision waits for its appointed time. It hastens to the end -- it will not lie.'], ['If it seems slow, wait for it. It will surely come without delay.'], ['Look at the proud one,'], ['His soul is not right within him,'], ['But the righteous will live by his faith.']]],
	[['Habakkuk 2:18-20'], [['What use is an idol once its maker has shaped it— a cast image, a teacher of lies?'], ['For its maker trusts in what has been made, though the product is only an idol that cannot speak!'], ['Alas for you who say to the wood, “Wake up!”'], ['to silent stone, “Rouse yourself!”'], ['Can it teach? See, it is gold and silver plated, and there is no breath in it at all.'], ['But the Lord is in his holy temple. Let the whole earth keep silent before him!']]],
	[['Zechariah 7:9-10'], [['Thus says the Lord: "Render true judgments, show kindness and mercy to one another.'], ['do not oppress the widow, the orphan, the foreigner, or the poor.'], ['and do not devise evil in your hearts against your neighbors."']]],
	[['Malachi 3:1'], [['“Behold, I am going to send My messenger, and he will prepare and clear the way before Me.'], ['And the Lord, whom you seek, will suddenly come to His temple'] ,['the Messenger of the covenant, in whom you delight, behold, for He is coming,”']]],
	[['Proverbs 3:3'], [['Let not kindness and mercy and truth be ever far away from you,'], ['But bind them around your neck'], [' and write them on the tablet of your heart.']]],
	[['Proverbs 4:20-27'], [['Do not let my words escape you, but Keep them in the center of your heart.'], ['For they are life to those who find them And healing to all their flesh.'], ['Watch over your heart with all diligence, For from it flow the springs of life.'], ['Put away from you crooked speech And keep devious talk far away from you.'], ['Let your eyes look directly ahead And let your gaze be fixed straight in front of you.'], ['Consider well and watch carefully the path of your feet, And all your ways will be steadfast and sure.'], ['Do not turn away, to the left nor to the right and Turn your foot far away from all evil.']]],
    	[['Psalms 51:1-2'], [['Have mercy on me, O God,'], ['according to your steadfast love,'], ['according to your abundant mercy,'], ['blot out my transgressions.'], ['Wash me thoroughly from my iniquity and cleanse me from my sin!'], ['For I know my transgressions and my sin is ever before me.'], ['Against you, and you alone, have I sinned and done that which is evil in your sight.']]],
	[['Psalms 51:9-12'], [['Hide your face from my sins and blot out all my iniquities.'], ['Create in me a clean heart, O God, and renew a right spirit within me.'], ['Cast me not away from your presence and take not your Holy Spirit from me.'], ['Restore to me the joy of your salvation and uphold within me a willing spirit.']]],
	[['Psalms 73:23-26'], [['Nevertheless, I am continually with you.'], ['you hold my hand.'], ['You guide me with your counsel and afterward you will receive me to glory.'], ['Whom have I in heaven but you? And there is nothing on earth that I desire besides you.'], ['My flesh and my heart may fail, but God is the strength of my heart and my portion forever.']]],
	[['Psalms 26:1-3'], [['Vindicate me, O Lord, for I have walked with integrity.'], ['I have trusted in the Lord without wavering and I shall not slip.'], ['Examine me, O Lord, and try me.'], ['Search my heart and my mind.'], ['For Your steadfast love is before my eyes,'], ['And I walk in Your truth.']]],
	[['Psalms 37:1-5'], [['Do not worry because of evildoers Nor be envious toward them.'], ['For they will wither quickly like the grass and fade like the green herb.'], ['Trust in the Lord and do good.'], ['Dwell in the land and live on His faithfulness.'], ['Delight yourself in the Lord,'], ['And He will give you the desires and petitions of your heart.'], ['Commit your way to the Lord.'], ['Trust in Him and He will do it.']]],	
	[['Psalms 19:12-14'], [['Declare me innocent from hidden faults.'], ['Hold back your servant from my selfish sins'],['let them not have control over me!'], ['Then I shall be blameless and innocent of great transgression.'], ['Let the words of my mouth and the meditation of my heart'], ['be acceptable in your sight,'], ['O Lord, my rock and my redeemer.']]],
	[['Jeremiah 31:33-34'], [['"For this is the covenant that I will make with the people in those days," declares the Lord.'], ['"I will place my law inside their minds and I will write it on their hearts.'], ['I will be their God, and they will be my people.'], ['And no longer shall each one tell his brother and neighbor, saying, ‘Know the Lord,’'], ['for they shall all know me, from the least of them to the greatest," declares the Lord.'], ['"For I will forgive their iniquity and I will remember their sin no more.”']]]
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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function setGradient() {
	color = [];
	setColors();
	newQuote();

	body.style.background = "linear-gradient(rgb(" + color[0] + ", " + color[1] + ", " + color[2] + "), rgb("
							+ color[3] + ", " + color[4] + ", " + color[5] + ")) no-repeat scroll 0% 0%";

	// console.log(newQuote());
	topFunction();
}

btn.addEventListener("click", setGradient);


