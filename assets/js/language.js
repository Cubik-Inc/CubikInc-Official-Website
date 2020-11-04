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
    "INTROINFOA-C": "My Projects: My Apps who have been released officially on platforms like the App Store. Most of them are closed source. Only a few of them will be open-sourced.",
    "INTROINFOA-D": "My Ideas: A few ideas who appears in my head. Most of them will be just a demo or a record of my idea. And there will be a few completed projects. Everything is open-sourced on GitHub, let's discuss together.",
    "INTROINFOA-E": "My Blog: My texts. It will probably be some of my ideas or reports. It could also be some tutorial. I will class them with different themes.",
    "INTROINFOA-F": "My list: A complete list contains things I'm going to do.",
    "INTROINFOA-G": "Contact Me：Somewhere else you can find me. If you have any questions or need support on my project, feel free to send me an email🙋🏻‍♂️. I will respond to it as quickly as possible.",
    

    "PROJ": "My Projects",
    "IDEA": "My Ideas",
    "BLOG": "My Blog",
    "LIST": "My List",
    "CONTACT": "Contact Me",
    "CONTACTINFO": "If you have any question, or need support on my project, feel free to send me an email🙋🏻‍♂️. I will respond to it as quickly as possible.",
    "COPY": "Copyright © 2020 Cubik65536. All Rights Reserved.",
    "CCBY": "All contents under: ",
    "NAME": "Powered by Cubik65536｜Template Design: ",
  },
  "zh": {
    "INTRO": "关于我",
    "INTROINFO-A": "嗨～ 我是Cubik，一个个人开发者💻，熟悉的语言有Swift⚒，Java和Python。2018年开始学习敲代码。目前还是一名中学生，坐标：加拿大魁北克省蒙特利尔。",
    "INTROINFO-B": "休闲的时候会玩F1和Minecraft。目前是Minecraft服务器",
    "INTROINFO-C": "的管理组成员，负责其官网的运维。",
    "INTROINFO-D": "2020年我会集中在我的iOS App《Sudoku Elves》以及该网站的维护两个项目上。",

    "INTROA": "关于该站点",
    "INTROINFOA-A": "我从小就非常喜欢计算机🧑🏻‍💻，每出现一样新技术都想试试，也一直希望自己能有个自己的网站。这个网站是为了自己搭建的，是为了自己玩，为了实现自己的梦想。同时，这个网站也是为了你们搭建的。我希望我的项目，我的想法可以被其他人看见。让我们一起，无限进步。",
    "INTROINFOA-B": "我将这个网站分为几大模块，下方是这些模块的简介：",
    "INTROINFOA-C": "我的项目：以正式形式在例如App Store等平台上发布的项目，大多数闭源，仅有少数会开源。",
    "INTROINFOA-D": "我的想法：突然蹦出来的小点子，大多数只是Demo或者被记录下来的想法，也会有一部分完善的项目。全部在GitHub上开源，欢迎大家一起来讨论。",
    "INTROINFOA-E": "我的博客：我写的文章，有可能是一些想法，报告，也有可能是一些教程。按照主题整理。",
    "INTROINFOA-F": "我的清单：多份详细的列表，接下来会做的事情之类的。",
    "INTROINFOA-G": "联系我：在其他地方找到我的途径。如果有任何疑问，或者需要项目支持，欢迎给我发邮件，我会尽快回复🙋🏻‍♂️！",
    
    "PROJ": "我的项目",
    "IDEA": "我的想法",
    "BLOG": "我的博客",
    "LIST": "我的清单",
    "CONTACT": "联系我",
    "CONTACTINFO": "如果有任何疑问，或者需要项目支持，欢迎给我发邮件，我会尽快回复🙋🏻‍♂️！",
    "COPY": "Copyright © 2020 Cubik65536。保留一切权利。",
    "CCBY": "除非特别注明，本页内容采用以下授权方式：",
    "NAME": "由Cubik65536强力驱动｜模版设计：",
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