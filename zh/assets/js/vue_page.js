/* Powered by Cubik, 2021-2-17 */

var headerHTML = '<header id="header" class="alt">' +
    '   <h1><a href="index.html">Cubik Inc.</a></h1>' +
    '   <nav>' +
    '       <a href="#lang"><i class="fas fa-language"></i></a>' +
    '       <a href="#menu">菜单</a>' +
    '   </nav>' +
    '</header>';

var menuHTML = '<nav id="menu">' +
    '   <div class="inner">' +
    '       <h2>菜单</h2>' +
    '       <ul class="links">' +
    '           <li v-for="url in urls"><a :href="url.url">{{ url.title }}</a></li>' +
    '       </ul>' +
    '       <a href="#" class="close"></a>' +
    '   </div>' +
    '</nav>';

var langHTML = '<nav id="lang">' +
    '   <div class="inner" >' +
    '       <h2><i class="fas fa-language fa-3x"></i></h2>' +
    '       <ul class="links">' +
    '           <li><a href="../zh/index.html">简体中文</a></li>' +
    '           <li><a href="../zh-tr/index.html">繁體中文</a></li>' +
    '           <li><a href="../en/index.html">English</a></li>' +
    '       </ul>' +
    '       <a href="#" class="close"></a>' +
    '   </div >' +
    '</nav >';

var footerHTML = '<section id="footer">' +
    '   <div class="inner">' +
    '       <h2 class="major">联系我们</h2>' +
    '       <p>如果您对此页上的内容有疑问，或者需要帮助，请通过以下方式联系我们，我们会尽快回复！</p>' +
    '       <ul class="contact">' +
    '           <li class="icon solid fa-envelope"><a href="\'mailto:\' + mailTo">contact@cubik65536.top（推荐）</a></li>' +
    '           <li class="icon brands fa-github"><a href="githubLink">GitHub</a></li>' +
    '           <li class="icon brands fa-qq"><a href="qqGroupLink">Cubik Inc. 官方QQ群</a></li>' +
    '           <li class="icon brands fa-discord"><a href="">Cubik Inc. 官方 Discord（尚未开通）</a></li>' +
    '       </ul>' +
    '       <ul class="copyright" style="margin: 0 0 0.5em 0;">' +
    '           <li>Copyright &copy; 2020 - {{thisYear}} Cubik Inc. (Cubik65536) 保留所有权利。</li>' +
    '           <li>模版设计：<a href="html5upLink">HTML5 UP</a></li>' +
    '           <li>由Cubik65536强力驱动</li>' +
    '           <li><a href="githubLink"><i class="icon brands fa-github"></i></a></li>' +
    '       </ul>' +
    '   </div>' +
    '</section>';

var page = new Vue({
    el: '#page-wrapper',
    data: {
        header: headerHTML,
        menu: menuHTML,
        lang: langHTML,
        footer: footerHTML
    }
});

var menu = new Vue({
    el: '#menu',
    data: {
        title: '牛腩小镇｜NewNan City',
        urls: [
            { url: './index.html', title: '主页' },
        ]
    }
});

var footer = new Vue({
    el: '#footer',
    data: {
        thisYear: new Date().getFullYear(),
        qqGroupLink: 'https://qm.qq.com/cgi-bin/qm/qr?k=6O7qKX3pOeUvXE6lWmkexm9cIeTMzTw7&authKey=zAcRN8AqYI2qCJvUQ0Pu8XcRW3TPlqbLHBVSx4urRVTHRk2oHzPxAg4WJTXqmxDh&noverify=0',
        githubLink: 'https://github.com/NewNanCity',
        html5upLink: 'http://html5up.net',
        mailTo: 'contact@cubik65536.top'
    }
});