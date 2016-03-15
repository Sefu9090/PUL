require_relative './config/environment'
require_relative './models/pickup'

class App < Sinatra::Base

  get '/' do
      
    phrase1 = ["Are you an orphanage? Cause I wanna give you kids.", "I was feeling a little off today, but you definitely turned me on.", "If you were a vegetable you'd be a cute-cumber.", "I don't have a library card, but do you mind if I check you out?", "Are you religious? Because you're the answer to all my prayers.", "Do you have a map? I'm getting lost in your eyes."]
  @comedy = phrase1.shuffle.sample


    phrase2 = ["Are you a Walker? Because you just walked away with my heart.", "Hi, I'm a zombie. Mind if I take a bite out of you?", "If I turned into a walker, I'd come after you first!", "If I was a zombie, I think I would like the taste of you.", "My bites will infect you with love.", "Walkers are coming…and so am I", "Am I Daryl Dixon? Because I have an arrow and I'd like to penetrate you.", "My love for you is 99.1% pure.", "Come inside my RV and I'll show you some real chemistry.", "Girl, your eyes are bluer than Heisenberg's crystal!",
  "I like your dress, but it would look better on the floor of my meth lab.",
  "Feelin' lonely, girl? Better call Saul!",
  "Your body is a wonderland and I want to be Alice.",
  "Do you know what my shirt is made of? Boyfriend material.", "I seem to have lost my phone number. Can I have yours?",
  "Does your left eye hurt? Because you've been looking right all day.", "Are you a parking ticket? 'Cause you've got fine written all over you.", "I'm not a photographer, but I can picture me and you together.", "Are you a camera? Because every time I look at you, I smile.", "Do you have a Band-Aid? Because I just scraped my knee falling for you.", "If I were a stop light, I'd turn red every time you passed by, just so I could stare at you a bit longer.", "I wanna live in your socks so I can be with you every step of the way.", "There are people who say Disneyland is the happiest place on earth. Apparently, none of them have ever been in your arms.",
  "Call me AC/DC, because I'm gonna rock you all night long!", "You must be a choir director, because you make my heart sing!",
  "Is your name Google? Because you have everything I've been searching for.", "You had me at 'Hello World.'", "Are you a computer keyboard? Because you're my type.", "If you were a web browser, you'd be called a Fire-foxy lady", "Your beauty rivals the graphics of Call of Duty.", "You're so pretty, I wouldn't even need to use an Instagram filter if I took your photo.", "Where's the 'like' button for that smile?", "If you were an ebay auction, I'd totally 'buy it now'.", "I googled your name earlier... I clicked on 'I'm Feeling Lucky.'", "Girl, you are hotter than the bottom of my laptop.", "Is your name Wi-fi? Because I'm really feeling a connection.", "You turm my software into hardware.",
  "If you're feeling down, I can feel you up.", "Does this rag smell like chloroform to you?", "You look much more attractive in person than you do through my telescope.", "Are you a corn field, because im stalking you.", "Just say yes now and I wont have to spike your drink.", "Im throwing a house party... and the only person invited is you.", "Call the cops... see who comes first.", "If I could be anything, I'd love to be your bathwater.", "Theres a tornado, come in my basement.", "You have the cutest smile when you sleep.", "If I'd follow you home, would you keep me?", "I have a van in the back and there is free candy in it.", "Shall I wait for you in my car or will your closet do.", "Did you sit in a pile of sugar? Cause you have a pretty sweet ass.", "Is your daddy a Baker? Because you've got some nice buns!", "There is no time to explain how I got bit there, I just need someone to suck the poison out.", "There are so many things to do with the human mouth. Why waste it on talking?", "Are you an orphanage? Cause I wanna give you kids.", "I was feeling a little off today, but you definitely turned me on", "If you were a vegetable you'd be a cute-cumber.", "I don't have a library card, but do you mind if I check you out?", "Are you religious? Because you're the answer to all my prayers.", "Do you have a map? I'm getting lost in your eyes."]
    @random = phrase2.shuffle.sample

    phrase3 = ["Did you sit in a pile of sugar? Cause you have a pretty sweet ass.", "Is your daddy a Baker? Because you've got some nice buns!", "There is no time to explain how I got bit there, I just need someone to suck the poison out.", "There are so many things to do with the human mouth. Why waste it on talking?", "I might not go down in history, but I’ll go down on you!", "You know why I am like a squirrel? Cause I want to bury my nuts in you.", "Pizza is my second favourite thing to eat in bed."]

   @dirty = phrase3.shuffle.sample

    phrase4 = ["If you're feeling down, I can feel you up.", "Does this rag smell like chloroform to you?", "You look much more attractive in person than you do through my telescope.", "Are you a corn field, because im stalking you.", "Just say yes now and I wont have to spike your drink.", "Im throwing a house party... and the only person invited is you.", "Call the cops... see who comes first.", "If I could be anything, I'd love to be your bathwater.", "Theres a tornado, come in my basement.", "You have the cutest smile when you sleep.", "If I'd follow you home, would you keep me?", "I have a van in the back and there is free candy in it.", "Shall I wait for you in my car or will your closet do."]
    @creep = phrase4.shuffle.sample

   phrase5 = ["Is your name Google? Because you have everything I've been searching for.", "You had me at 'Hello World.'", "Are you a computer keyboard? Because you're my type.", "If you were a web browser, you'd be called a Fire-foxy lady", "Your beauty rivals the graphics of Call of Duty.", "You're so pretty, I wouldn't even need to use an Instagram filter if I took your photo.", "Where's the 'like' button for that smile?", "If you were an ebay auction, I'd totally 'buy it now'.", "I googled your name earlier... I clicked on 'I'm Feeling Lucky.'", "Girl, you are hotter than the bottom of my laptop.", "Is your name Wi-fi? Because I'm really feeling a connection.", "You turn my software into hardware.", "You are hotter than the bottom of my laptop.", "You look familiar, didn’t we take a class together? I could’ve sworn we had chemistry."]
    @nerdy = phrase5.shuffle.sample

    phrase6 = ["Call me AC/DC, because I'm gonna rock you all night long!", "You must be a choir director, because you make my heart sing!", "Do you like heavy metal? Cause i can teach you how to scream.", "Lets make music on my sheets.", "I wanna duet with you.", "Let's cut to the chase and duet already.", "One night with me and you'll hit all the high notes.", "Do you like Adele? Cause i can tell you like rolling in the D.", "All you need is safe sax,a reed, and me."]
    @music = phrase6.shuffle.sample

    phrase7 = ["Does your left eye hurt? Because you've been looking right all day.", "Are you a parking ticket? 'Cause you've got fine written all over you.", "I'm not a photographer, but I can picture me and you together.", "Are you a camera? Because every time I look at you, I smile.", "Do you have a Band-Aid? Because I just scraped my knee falling for you.", "If I were a stop light, I'd turn red every time you passed by, just so I could stare at you a bit longer.", "I wanna live in your socks so I can be with you every step of the way.", "There are people who say Disneyland is the happiest place on earth. Apparently, none of them have ever been in your arms.","I’m no organ donor but I’d be happy to give you my heart.", "If I were a cat i’d spend all 9 lives with you."]
    @perfect = phrase7.shuffle.sample

    phrase8 = ["Did you sit in a pile of sugar? Cause you have a pretty sweet ass.", "Is your daddy a Baker? Because you've got some nice buns!", "There is no time to explain how I got bit there, I just need someone to suck the poison out.", "There are so many things to do with the human mouth. Why waste it on talking?", "I might not go down in history, but I’ll go down on you!", "You know why I am like a squirrel? Cause I want to bury my nuts in you.", "Pizza is my second favourite thing to eat in bed."]
    @basic = phrase8.shuffle.sample

    phrase9 = ["Are you a Walker? Because you just walked away with my heart.", "Hi, I'm a zombie. Mind if I take a bite out of you?", "If I turned into a walker, I'd come after you first!", "If I was a zombie, I think I would like the taste of you.", "My bites will infect you with love.", "Walkers are coming…and so am I", "Am I Daryl Dixon? Because I have an arrow and I'd like to penetrate you." ,"My love for you is 99.1% pure.", "Come inside my RV and I'll show you some real chemistry.", "Girl, your eyes are bluer than Heisenberg's crystal!" ,"I like your dress, but it would look better on the floor of my meth lab.", "Feelin' lonely, girl? Better call Saul!", "Your body is a wonderland and I want to be Alice." ]
@tv_shows = phrase9.shuffle.sample

    erb :index
  end


end