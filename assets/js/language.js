var arrLang = {
  "en": {
    "INTRO": "Introduction",
    "WORK": "Our Projects",
    "CONTACT": "Contact Us",
    "COPY": "Powered by Cubik65536｜Template Design: ",
  },
  "zh": {
    "INTRO": "关于我们",
    "WORK": "项目展示",
    "CONTACT": "联络我们",
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