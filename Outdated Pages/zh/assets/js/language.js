var arrLang = {
  "en": {
    "INTRO": "关于我",
    "INTROINFO-A": "嗨～ 我是Cubik，一个个人开发者💻，熟悉的语言有Swift⚒，Java和Python。2018年开始学习敲代码。目前还是一名中学生，坐标：加拿大魁北克省蒙特利尔。",
    "INTROINFO-B": "休闲的时候会玩F1和Minecraft。目前是Minecraft服务器",
    "INTROINFO-C": "的管理组成员，负责其官网的运维。",
    "INTROINFO-D": "2020年我会集中在我的iOS App《Sudoku Elves》以及该网站的维护两个项目上。",

    "INTROA": "关于该站点",
    "INTROINFOA-A": "我从小就非常喜欢计算机🧑🏻‍💻，每出现一样新技术都想试试，也一直希望自己能有个自己的网站。这个网站是为了自己搭建的，是为了自己玩，为了实现自己的梦想。同时，这个网站也是为了你们搭建的。我希望我的项目，我的想法可以被其他人看见。让我们一起，无限进步。",
    "INTROINFOA-B": "我将这个网站分为几大模块，下方是这些模块的简介：",
    "INTROINFOA-C": "我的项目：我以正式形式在例如App Store等平台上发布的项目以及一些小想法，通常是Demo或者仅仅是想法的整理。",
    "INTROINFOA-D": "我的博客：我写的文章，有可能是一些想法，报告，也有可能是一些教程。按照主题整理。",
    "INTROINFOA-E": "联系我：在其他地方找到我的途径。如果有任何疑问，或者需要项目支持，欢迎给我发邮件，我会尽快回复🙋🏻‍♂️！",

    "PROJ": "我的项目",
    "OFFICIALPROJ": "已经正式发布的项目",
    "OFFICIALPROJ-A": "当前网站 (https://www.cubik65536.top)",
    "NONOFFICIALPROJ": "我的点子/Demos",

    "BLOG": "我的博客",
    "CONTACT": "联系我",
    "FORUM": "论坛",
    "CONTACTINFO": "如果有任何疑问，或者需要项目支持，欢迎给我发邮件，我会尽快回复🙋🏻‍♂️！",
    "COPY": "Copyright © 2020 Cubik Inc. (Cubik65536)。保留一切权利。",
    "CCBY": "除非特别注明，本页内容采用以下授权方式：",
    "NAME": "由Cubik65536强力驱动｜模版设计：",
    "ONLYZH": "",
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
    "INTROINFOA-C": "我的项目：我以正式形式在例如App Store等平台上发布的项目以及一些小想法，通常是Demo或者仅仅是想法的整理。",
    "INTROINFOA-D": "我的博客：我写的文章，有可能是一些想法，报告，也有可能是一些教程。按照主题整理。",
    "INTROINFOA-E": "联系我：在其他地方找到我的途径。如果有任何疑问，或者需要项目支持，欢迎给我发邮件，我会尽快回复🙋🏻‍♂️！",

    "PROJ": "我的项目",
    "OFFICIALPROJ": "已经正式发布的项目",
    "OFFICIALPROJ-A": "当前网站 (https://www.cubik65536.top)",
    "NONOFFICIALPROJ": "我的点子/Demos",

    "BLOG": "我的博客",
    "CONTACT": "联系我",
    "FORUM": "论坛",
    "CONTACTINFO": "如果有任何疑问，或者需要项目支持，欢迎给我发邮件，我会尽快回复🙋🏻‍♂️！",
    "COPY": "Copyright © 2020 Cubik Inc. (Cubik65536)。保留一切权利。",
    "CCBY": "除非特别注明，本页内容采用以下授权方式：",
    "NAME": "由Cubik65536强力驱动｜模版设计：",
    "ONLYZH": "",
  }
};

// The default language is English
var lang = "en";
// Check for localStorage support
if ('localStorage' in window) {
  var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
  if (!Object.keys(arrLang).includes(lang)) lang = 'en';
}

$(document).ready(function () {
  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});

// get/set the selected language
$(".translate").click(function () {
  var lang = $(this).attr("id");

  // update localStorage key
  if ('localStorage' in window) {
    localStorage.setItem('lang', lang);
    console.log(localStorage.getItem('lang'));
  }

  $(".lang").each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
});