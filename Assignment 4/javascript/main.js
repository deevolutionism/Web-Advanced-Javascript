//var Noun = ['crack','beer','rectum'];
var AbstractNoun1 = ['abhorrence','acceptance','affliction','ambiguity','assimilation','boredom','bliss','beggary','boredom','burdon','boldness','chaos', 'comtempt','death','dependance','despair','enmity','error','eventuality','exuberance','fake','felicity','finality','frugality','gallantry','guilt','grace','help','humility','hype','ignorance,', 'impulse','insinserity','irritation','joke','justification','killer','laziness','legacy','loan','loathing','loot','luxury','medeocrocy','might','mission','monotomy','mortality','normalcy','obligation','fornication','necrophilia'];
var AbstractNoun2 = ['abhorrence','acceptance','affliction','ambiguity','assimilation','boredom','bliss','beggary','boredom','burdon','boldness','chaos', 'comtempt','death','dependance','despair','enmity','error','eventuality','exuberance','fake','felicity','finality','frugality','gallantry','guilt','grace','help','humility','hype','ignorance,', 'impulse','insinserity','irritation','joke','justification','killer','laziness','legacy','loan','loathing','loot','luxury','medeocrocy','might','mission','monotomy','mortality','normalcy','obligation','fornication','necrophilia'];
var AbstractNoun3 = ['abhorrence','acceptance','affliction','ambiguity','assimilation','boredom','bliss','beggary','boredom','burdon','boldness','chaos', 'comtempt','death','dependance','despair','enmity','error','eventuality','exuberance','fake','felicity','finality','frugality','gallantry','guilt','grace','help','humility','hype','ignorance,', 'impulse','insinserity','irritation','joke','justification','killer','laziness','legacy','loan','loathing','loot','luxury','medeocrocy','might','mission','monotomy','mortality','normalcy','obligation','fornication','necrophilia'];
var AbstractNoun4 = ['abhorrence','acceptance','affliction','ambiguity','assimilation','boredom','bliss','beggary','boredom','burdon','boldness','chaos', 'comtempt','death','dependance','despair','enmity','error','eventuality','exuberance','fake','felicity','finality','frugality','gallantry','guilt','grace','help','humility','hype','ignorance,', 'impulse','insinserity','irritation','joke','justification','killer','laziness','legacy','loan','loathing','loot','luxury','medeocrocy','might','mission','monotomy','mortality','normalcy','obligation','fornication','necrophilia'];
var AbstractNoun5 = ['abhorrence','acceptance','affliction','ambiguity','assimilation','boredom','bliss','beggary','boredom','burdon','boldness','chaos', 'comtempt','death','dependance','despair','enmity','error','eventuality','exuberance','fake','felicity','finality','frugality','gallantry','guilt','grace','help','humility','hype','ignorance,', 'impulse','insinserity','irritation','joke','justification','killer','laziness','legacy','loan','loathing','loot','luxury','medeocrocy','might','mission','monotomy','mortality','normalcy','obligation','fornication','necrophilia'];
var AbstractNoun6 = ['abhorrence','acceptance','affliction','ambiguity','assimilation','boredom','bliss','beggary','boredom','burdon','boldness','chaos', 'comtempt','death','dependance','despair','enmity','error','eventuality','exuberance','fake','felicity','finality','frugality','gallantry','guilt','grace','help','humility','hype','ignorance,', 'impulse','insinserity','irritation','joke','justification','killer','laziness','legacy','loan','loathing','loot','luxury','medeocrocy','might','mission','monotomy','mortality','normalcy','obligation','fornication','necrophilia'];
var Nation = ['Uranus','the Sewer','your Mother', 'Foolistan','Georgebushistan','Hoth','Orbit','Springfield','America','Earth'];

var constitution = document.querySelector('.madlibs');
//var constitutionText = constitution.innerHTML

var generate = document.querySelector('.button');

generate.addEventListener('click', function (event){
	generateRandomWord();
});






function generateRandomWord() {

	//var generateNoun = Math.floor(Math.random()* Noun.length);
	var generateAbstractNoun1 = Math.floor(Math.random()*AbstractNoun1.length);
	var generateAbstractNoun2 = Math.floor(Math.random()*AbstractNoun2.length);
	var generateAbstractNoun3 = Math.floor(Math.random()*AbstractNoun3.length);
	var generateAbstractNoun4 = Math.floor(Math.random()*AbstractNoun4.length);
	var generateAbstractNoun5 = Math.floor(Math.random()*AbstractNoun5.length);
	var generateAbstractNoun6 = Math.floor(Math.random()*AbstractNoun5.length);
	var generateNation = Math.floor(Math.random()*Nation.length);

	//var randomNoun = Noun[generateNoun];
	var randomAbstractNoun1 = AbstractNoun1[generateAbstractNoun1];
	var randomAbstractNoun2 = AbstractNoun2[generateAbstractNoun2];
	var randomAbstractNoun3 = AbstractNoun3[generateAbstractNoun3];
	var randomAbstractNoun4 = AbstractNoun4[generateAbstractNoun4];
	var randomAbstractNoun5 = AbstractNoun5[generateAbstractNoun5];
	var randomAbstractNoun6 = AbstractNoun5[generateAbstractNoun6];
	var randomNation = Nation[generateNation]

	constitution.innerHTML = "We the people of <span>" + randomNation + "</span>, in order to form a more perfect <span>" + randomAbstractNoun1 + "</span>, establish <span>" + randomAbstractNoun6 + "</span>, insure domestic <span>" + randomAbstractNoun2 + "</span>, provide for the common <span>" + randomAbstractNoun3 + "</span>, promote the general <span>" + randomAbstractNoun4 + "</span>, and secure the blessings of <span>" + randomAbstractNoun5 + "</span> to ourselves and our posterity, do ordain and establish this Constitution for the State of <span>" + randomNation + "</span>.";

}