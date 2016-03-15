var comedy = [
  "Are you an orphanage? Cause I wanna give you kids.", "I was feeling a little off today, but you definitely turned me on.", "If you were a vegetable you'd be a cute-cumber.", "I don't have a library card, but do you mind if I check you out?", "Are you religious? Because you're the answer to all my prayers.", "Do you have a map? I'm getting lost in your eyes."
];

var getcomedy = function() {
  return comedy[Math.floor(Math.random() * comedy.length)];
};

$('#theButton').click(function() {
  $('.comedy').html(getcomedy());
});
///////////////////////////////////////
var random = [
  "Are you a Walker? Because you just walked away with my heart.", "Hi, I'm a zombie. Mind if I take a bite out of you?", "If I turned into a walker, I'd come after you first!", "If I was a zombie, I think I would like the taste of you.", "My bites will infect you with love.", "Walkers are coming…and so am I", "Am I Daryl Dixon? Because I have an arrow and I'd like to penetrate you.", "My love for you is 99.1% pure.", "Come inside my RV and I'll show you some real chemistry.", "Girl, your eyes are bluer than Heisenberg's crystal!" , 
  "I like your dress, but it would look better on the floor of my meth lab.",
  "Feelin' lonely, girl? Better call Saul!",
  "Your body is a wonderland and I want to be Alice.",
  "Do you know what my shirt is made of? Boyfriend material.", "I seem to have lost my phone number. Can I have yours?",
  "Does your left eye hurt? Because you've been looking right all day.", "Are you a parking ticket? 'Cause you've got fine written all over you.", "I'm not a photographer, but I can picture me and you together.", "Are you a camera? Because every time I look at you, I smile.", "Do you have a Band-Aid? Because I just scraped my knee falling for you.", "If I were a stop light, I'd turn red every time you passed by, just so I could stare at you a bit longer.", "I wanna live in your socks so I can be with you every step of the way.", "There are people who say Disneyland is the happiest place on earth. Apparently, none of them have ever been in your arms.",
  "Call me AC/DC, because I'm gonna rock you all night long!", "You must be a choir director, because you make my heart sing!",
  "Is your name Google? Because you have everything I've been searching for.", "You had me at 'Hello World.'", "Are you a computer keyboard? Because you're my type.", "If you were a web browser, you'd be called a Fire-foxy lady", "Your beauty rivals the graphics of Call of Duty.", "You're so pretty, I wouldn't even need to use an Instagram filter if I took your photo.", "Where's the 'like' button for that smile?", "If you were an ebay auction, I'd totally 'buy it now'.", "I googled your name earlier... I clicked on 'I'm Feeling Lucky.'", "Girl, you are hotter than the bottom of my laptop.", "Is your name Wi-fi? Because I'm really feeling a connection.", "You turm my software into hardware.",
  "If you're feeling down, I can feel you up.", "Does this rag smell like chloroform to you?", "You look much more attractive in person than you do through my telescope.", "Are you a corn field, because im stalking you.", "Just say yes now and I wont have to spike your drink.", "Im throwing a house party... and the only person invited is you.", "Call the cops... see who comes first.", "If I could be anything, I'd love to be your bathwater.", "Theres a tornado, come in my basement.", "You have the cutest smile when you sleep.", "If I'd follow you home, would you keep me?", "I have a van in the back and there is free candy in it.", "Shall I wait for you in my car or will your closet do.", "Did you sit in a pile of sugar? Cause you have a pretty sweet ass.", "Is your daddy a Baker? Because you've got some nice buns!", "There is no time to explain how I got bit there, I just need someone to suck the poison out.", "There are so many things to do with the human mouth. Why waste it on talking?", "Are you an orphanage? Cause I wanna give you kids.", "I was feeling a little off today, but you definitely turned me on.", "If you were a vegetable you'd be a cute-cumber.", "I don't have a library card, but do you mind if I check you out?", "Are you religious? Because you're the answer to all my prayers.", "Do you have a map? I'm getting lost in your eyes."
];

var getrandom = function() {
  return random[Math.floor(Math.random() * random.length)];
};

$('#theButton2').click(function() {
  $('.random').html(getrandom());
});
//////////////////////////////////////
var creep = [
  "If you're feeling down, I can feel you up.", "Does this rag smell like chloroform to you?", "You look much more attractive in person than you do through my telescope.", "Are you a corn field, because im stalking you.", "Just say yes now and I wont have to spike your drink.", "Im throwing a house party... and the only person invited is you.", "Call the cops... see who comes first.", "If I could be anything, I'd love to be your bathwater.", "Theres a tornado, come in my basement.", "You have the cutest smile when you sleep.", "If I'd follow you home, would you keep me?", "I have a van in the back and there is free candy in it.", "Shall I wait for you in my car or will your closet do."
];

var getcreep = function() {
  return creep[Math.floor(Math.random() * creep.length)];
};

$('#theButton3').click(function() {
  $('.creep').html(getcreep());
});
//////////////////////////////////////
var nerdy = [
  "Is your name Google? Because you have everything I've been searching for.", "You had me at 'Hello World.'", "Are you a computer keyboard? Because you're my type.", "If you were a web browser, you'd be called a Fire-foxy lady", "Your beauty rivals the graphics of Call of Duty.", "You're so pretty, I wouldn't even need to use an Instagram filter if I took your photo.", "Where's the 'like' button for that smile?", "If you were an ebay auction, I'd totally 'buy it now'.", "I googled your name earlier... I clicked on 'I'm Feeling Lucky.'", "Girl, you are hotter than the bottom of my laptop.", "Is your name Wi-fi? Because I'm really feeling a connection.", "You turm my software into hardware.", "You are hotter than the bottom of my laptop.", "You look familiar, didn’t we take a class together? I could’ve sworn we had chemistry."
];

var getnerdy = function() {
  return nerdy[Math.floor(Math.random() * nerdy.length)];
};

$('#theButton4').click(function() {
  $('.nerdy').html(getnerdy());

});
/////////////////////////////////////
var music = [
  "Call me AC/DC, because I'm gonna rock you all night long!", "You must be a choir director, because you make my heart sing!", "Do you like heavy metal? Cause i can teach you how to scream.", "Lets make music on my sheets.", "I wanna duet with you.", "Let's cut to the chase and duet already.", "One night with me and you'll hit all the high notes.", "Do you like Adele? Cause i can tell you like rolling in the D.", "All you need is safe sax,a reed, and me."
];

var getmusic = function() {
  return music[Math.floor(Math.random() * music.length)];
};

$('#theButton6').click(function() {
  $('.music').html(getmusic());

});
////////////////////////////////
var perfect = [
  "Does your left eye hurt? Because you've been looking right all day.", "Are you a parking ticket? 'Cause you've got fine written all over you.", "I'm not a photographer, but I can picture me and you together.", "Are you a camera? Because every time I look at you, I smile.", "Do you have a Band-Aid? Because I just scraped my knee falling for you.", "If I were a stop light, I'd turn red every time you passed by, just so I could stare at you a bit longer.", "I wanna live in your socks so I can be with you every step of the way.", "There are people who say Disneyland is the happiest place on earth. Apparently, none of them have ever been in your arms.", "I’m no organ donor but I’d be happy to give you my heart.", "If I were a cat i’d spend all 9 lives with you."
];

var getperfect = function() {
  return perfect[Math.floor(Math.random() * perfect.length)];
};

$('#theButton6').click(function() {
  $('.perfect').html(getperfect());

});
///////////////////////////////
var basic = [
  "Do you know what my shirt is made of? Boyfriend material.", "I seem to have lost my phone number. Can I have yours?", "Your so cute its distracting.", "Is that a mirror in your pocket? Cause I can see myself in your pants!", "Smile, if you want to have sex with me.", "I don’t believe in love at first sight, but I’m willing to make an exception in your case.", "There’s only one thing I want to change about you. Your last name.", "Are you a magician? Because whenever I look at you everyone else disappears.", "I used to be a Gambler, but then I realized that all I needed was the Queen of my Heart"
];

var getbasic = function() {
  return basic[Math.floor(Math.random() * basic.length)];
};

$('#theButton7').click(function() {
  $('.basic').html(getbasic());
});
////////////////////////////////////
var dirty = [
  "Did you sit in a pile of sugar? Cause you have a pretty sweet ass.", "Is your daddy a Baker? Because you've got some nice buns!", "There is no time to explain how I got bit there, I just need someone to suck the poison out.", "There are so many things to do with the human mouth. Why waste it on talking?", "I might not go down in history, but I’ll go down on you!", "You know why I am like a squirrel? Cause I want to bury my nuts in you.", "Pizza is my second favourite thing to eat in bed."
];

var getdirty = function() {
  return dirty[Math.floor(Math.random() * dirty.length)];
};

$('#theButton8').click(function() {
  $('.dirty').html(getdirty());
});
///////////////////////////////////
var tvshows = ["Are you a Walker? Because you just walked away with my heart.", "Hi, I'm a zombie. Mind if I take a bite out of you?", "If I turned into a walker, I'd come after you first!", "If I was a zombie, I think I would like the taste of you.", "My bites will infect you with love.", "Walkers are coming…and so am I", "Am I Daryl Dixon? Because I have an arrow and I'd like to penetrate you.", "My love for you is 99.1% pure.", "Come inside my RV and I'll show you some real chemistry.", "Girl, your eyes are bluer than Heisenberg's crystal!", "I like your dress, but it would look better on the floor of my meth lab.", "Feelin' lonely, girl? Better call Saul!", "Your body is a wonderland and I want to be Alice."];

var gettvshows = function() {
  return tvshows[Math.floor(Math.random() * tvshows.length)];
};

$('#theButton9').click(function() {
  $('.tvshows').html(gettvshows());
});