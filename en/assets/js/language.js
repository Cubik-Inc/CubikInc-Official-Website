var arrLang = {
  "en": {
    "INTRO": "About Me",
    "INTROINFO-A": "Hi~ I'm Cubik, an individual software developer💻. Currently using Swift⚒, Java and Python as development languages. I start to learn programming in 2018. I'm also a student in a secondary school at Montréal, Québec, Canada.",
    "INTROINFO-B": "I play F1 and Minecraft as my pastime. I'm currently a member of the management team of the Minecraft Server",
    "INTROINFO-C": "(Website only available in Chinese), responsible for the web operations.",
    "INTROINFO-D": "2020, I'm focusing on two projects : my iOS App Sudoku Elves\" and the maintenance of this website.",
    
    "INTROA": "About This Site",
    "INTROINFOA-A": "Since I was young, I was very interested in computers🧑🏻‍💻, I want to try every new technology, and I always hope that I can have my website. This website is built for myself, for realizing my dream. At the same time, this website is also built for you. I hope that my project and my ideas can be seen by others. Let us make progress together.",
    "INTROINFOA-B": "I separated the contents of this website into different modules and here a briefing of these modules :",
    "INTROINFOA-C": "My Projects: My Apps who have been released officially on platforms like the App Store and some of my ideas which are usually a demo or just a brief of my idea.",
    "INTROINFOA-D": "My Blog: My texts. It will probably be some of my ideas or reports. It could also be some tutorial. I will class them with different themes.",
    "INTROINFOA-E": "Contact Me：Somewhere else you can find me. If you have any questions or need support on my project, feel free to send me an email🙋🏻‍♂️. I will respond to it as quickly as possible.",

    "PROJ": "My Projects",
    "OFFICIALPROJ": "officially released",
    "OFFICIALPROJ-A": "Current website (https://www.cubik65536.top)",
    "NONOFFICIALPROJ": "my ideas/demos",

    "BLOG": "My Blog",
    "CONTACT": "Contact Me",
    "FORUM": "Forum",
    "CONTACTINFO": "If you have any question, or need support on my project, feel free to send me an email🙋🏻‍♂️. I will respond to it as quickly as possible.",
    "COPY": "Copyright © 2020 Cubik Inc. (Cubik65536). All Rights Reserved.",
    "CCBY": "All contents under: ",
    "NAME": "Powered by Cubik65536｜Template Design: ",
    "ONLYZH": "(CURRENTLY ONLY AVAILABLE IN CHINESE)",
  },
  "zh": {
    "INTRO": "About Me",
    "INTROINFO-A": "Hi~ I'm Cubik, an individual software developer💻. Currently using Swift⚒, Java and Python as development languages. I start to learn programming in 2018. I'm also a student in a secondary school at Montréal, Québec, Canada.",
    "INTROINFO-B": "I play F1 and Minecraft as my pastime. I'm currently a member of the management team of the Minecraft Server",
    "INTROINFO-C": "(Website only available in Chinese), responsible for the web operations.",
    "INTROINFO-D": "2020, I'm focusing on two projects : my iOS App Sudoku Elves\" and the maintenance of this website.",
    
    "INTROA": "About This Site",
    "INTROINFOA-A": "Since I was young, I was very interested in computers🧑🏻‍💻, I want to try every new technology, and I always hope that I can have my website. This website is built for myself, for realizing my dream. At the same time, this website is also built for you. I hope that my project and my ideas can be seen by others. Let us make progress together.",
    "INTROINFOA-B": "I separated the contents of this website into different modules and here a briefing of these modules :",
    "INTROINFOA-C": "My Projects: My Apps who have been released officially on platforms like the App Store and some of my ideas which are usually a demo or just a brief of my idea.",
    "INTROINFOA-D": "My Blog: My texts. It will probably be some of my ideas or reports. It could also be some tutorial. I will class them with different themes.",
    "INTROINFOA-E": "Contact Me：Somewhere else you can find me. If you have any questions or need support on my project, feel free to send me an email🙋🏻‍♂️. I will respond to it as quickly as possible.",

    "PROJ": "My Projects",
    "OFFICIALPROJ": "officially released",
    "OFFICIALPROJ-A": "Current website (https://www.cubik65536.top)",
    "NONOFFICIALPROJ": "my ideas/demos",

    "BLOG": "My Blog",
    "CONTACT": "Contact Me",
    "FORUM": "Forum",
    "CONTACTINFO": "If you have any question, or need support on my project, feel free to send me an email🙋🏻‍♂️. I will respond to it as quickly as possible.",
    "COPY": "Copyright © 2020 Cubik Inc. (Cubik65536). All Rights Reserved.",
    "CCBY": "All contents under: ",
    "NAME": "Powered by Cubik65536｜Template Design: ",
    "ONLYZH": "(CURRENTLY ONLY AVAILABLE IN CHINESE)",
  }
};

// The default language is English
var lang = "en";
// Check for localStorage support
if('localStorage' in window){
   var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
   if (!Object.keys(arrLang).includes(lang)) lang = 'en';
}

$(document).ready(function() {
  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".translate").click(function() {
  var lang = $(this).attr("id");

  // update localStorage key
  if('localStorage' in window){
    localStorage.setItem('lang', lang);
    console.log( localStorage.getItem('lang') );
  }

  $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});