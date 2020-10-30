var arrLang = {
  "en": {
    "INTRO": "About Me",
    "INTROINFO-A": "An individual software developer💻. Now using Swift⚒, Java and Python as development languages. I start to learn programming at 2018. I'm currently a student in a senconday school at Montréal, Québec, Canada.",
    "WORK": "My Projects",
    "CONTACT": "Contact Me",
    "CONTACTINFO": "If you have some questions on our projects or need support on it, please write me an email about it.",
    "COPY": "Powered by Cubik65536｜Template Design: ",
  },
  "zh": {
    "INTRO": "关于我",
    "INTROINFO-A": "一个个人开发者💻，熟悉的语言有Swift⚒，Java和Python。2018年开始学习敲代码。目前是一名中学生，坐标：加拿大魁北克省蒙特利尔。",
    "INTROINFO-B": "有时间的话会玩F1和Minecraft。目前是Minecraft服务器",
    "INTROINFO-C": "的管理组成员，负责其官网的运维。",
    "WORK": "项目展示",
    "CONTACT": "联络我",
    "CONTACTINFO": "如果您有关于我们项目的问题或者需要获得支持，请向我发送电子邮件。",
    "COPY": "由Cubik65536强力驱动｜模版设计：",
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