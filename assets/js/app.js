(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return a})),n.d(t,"isMobile",(function(){return o})),n.d(t,"isDarkMode",(function(){return i})),n.d(t,"formatDate",(function(){return s})),n.d(t,"getParameterByName",(function(){return r})),n.d(t,"adjustImageGallery",(function(){return c})),n.d(t,"managePostImages",(function(){return l})),n.d(t,"makeImagesZoomable",(function(){return d}));var a=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},i=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},s=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},r=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},c=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var a=e[t].closest(".kg-gallery-image"),o=e[t].attributes.width.value/e[t].attributes.height.value;a.style.flex="".concat(o," 1 0%")}},l=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable");var t=e(this).parent().find("figcaption");t?e(this).attr("alt",t.text()):e(this).attr("alt","")}))},d=function(e,t){t(".js-zoomable")}},13:function(e,t,n){e.exports=n(14)},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),s=n.n(i),r=n(2),c=n(6),l=n(3),d=n(10),u=n.n(d),h=n(11),m=n(1);o()(document).ready((function(){Object(m.isRTL)()&&o()("html").attr("dir","rtl").addClass("rtl");var e,t,n=o()("body"),a=o()(".js-header"),i=o()(".js-open-menu"),d=o()(".js-close-menu"),f=o()(".js-menu"),g=o()(".js-toggle-submenu"),p=o()(".js-submenu-option")[0],v=o()(".js-submenu"),w=o()(".js-recent-slider"),b=o()(".js-open-secondary-menu"),j=o()(".js-open-search"),k=o()(".js-close-search"),y=o()(".js-search"),C=o()(".js-input-search"),O=o()(".js-search-results"),T=o()(".js-no-results"),S=o()(".js-toggle-darkmode"),M=o()(".js-notification-close"),x=o()(".js-main-nav"),_=o()(".js-main-nav-left"),I=localStorage.getItem("theme"),L=null,A=!1,D=null,B=function(){a.removeClass("submenu-is-active"),g.removeClass("active"),v.removeClass("opened").addClass("closed")},E=function(){n.toggleClass("no-scroll-y")},H=function(e,t){var n=new GhostContentAPI({url:e,key:t,version:"v2"}),a=[],o={shouldSort:!0,ignoreLocation:!0,findAllMatches:!0,includeScore:!0,minMatchCharLength:2,keys:["title","custom_excerpt","tags.name"]};n.posts.browse({limit:"all",include:"tags",fields:"id, title, url, published_at, custom_excerpt"}).then((function(e){for(var t=0,n=e.length;t<n;t++)a.push(e[t]);L=new h.a(a,o)})).catch((function(e){console.log(e)}))},P=function(e){var t=o()('.js-alert[data-notification="'.concat(e,'"]'));t.addClass("opened"),setTimeout((function(){R(t)}),5e3)},R=function(e){e.removeClass("opened");var t=window.location.toString();if(t.indexOf("?")>0){var n=t.substring(0,t.indexOf("?"));window.history.replaceState({},document.title,n)}},V=function(e){Object(m.isMobile)()||(e?(x.addClass("toggle-overflow"),_.addClass("toggle-overflow")):(x.removeClass("toggle-overflow"),_.removeClass("toggle-overflow")))};(i.click((function(){a.addClass("mobile-menu-opened"),f.addClass("opened"),E()})),d.click((function(){a.removeClass("mobile-menu-opened"),f.removeClass("opened"),E()})),g.click((function(){(A=!A)?(a.addClass("submenu-is-active"),g.addClass("active"),v.removeClass("closed").addClass("opened")):B()})),j.click((function(){y.addClass("opened"),setTimeout((function(){C.focus()}),400),E()})),k.click((function(){C.blur(),y.removeClass("opened"),E()})),C.keyup((function(){if(C.val().length>0&&L){var e=L.search(C.val()).filter((function(e){if(e.score<=.5)return e})),t="";if(e.length>0){for(var n=0,a=e.length;n<a;n++)t+='\n          <article class="m-result">            <a href="'.concat(e[n].item.url,'" class="m-result__link">              <h3 class="m-result__title">').concat(e[n].item.title,'</h3>              <span class="m-result__date">').concat(Object(m.formatDate)(e[n].item.published_at),"</span>            </a>          </article>");T.hide(),O.html(t),O.show()}else O.html(""),O.hide(),T.show()}else O.html(""),O.hide(),T.hide()})),S.change((function(){S.is(":checked")?(o()("html").attr("data-theme","dark"),localStorage.setItem("theme","dark")):(o()("html").attr("data-theme","light"),localStorage.setItem("theme","light"))})),S.hover((function(){V(!0)}),(function(){V(!1)})),M.click((function(){R(o()(this).parent())})),o()(window).click((function(e){A&&p&&!p.contains(e.target)&&(A=!1,B())})),o()(document).keyup((function(e){"Escape"===e.key&&y.hasClass("opened")&&k.click()})),I?(o()("html").attr("data-theme",I),"dark"===I&&S.attr("checked",!0)):Object(m.isDarkMode)()&&S.attr("checked",!0),a.length>0)&&new s.a(a[0],{tolerance:{down:10,up:20},offset:15,onUnpin:function(){if(!Object(m.isMobile)()&&D){var e=D[0];e&&e.state.isVisible&&e.hide()}}}).init();if(w.length>0){var N=new r.d(".js-recent-slider",{type:"slider",rewind:!1,perView:4,swipeThreshold:!1,dragThreshold:!1,gap:0,direction:Object(m.isRTL)()?"rtl":"ltr",breakpoints:{1024:{perView:3,swipeThreshold:80,dragThreshold:120},768:{perView:2,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}},568:{perView:1,swipeThreshold:80,dragThreshold:120,peek:{before:0,after:115}}}});N.on("mount.after",(function(){Object(l.a)(".js-recent-article-title",50)})),N.mount({Swipe:r.c,Breakpoints:r.a})}if("undefined"!=typeof disableFadeAnimation&&disableFadeAnimation?o()("[data-aos]").addClass("no-aos-animation"):u.a.init({once:!0,startEvent:"DOMContentLoaded"}),b.length>0){var q=document.getElementById("secondary-navigation-template");D=Object(c.a)(".js-open-secondary-menu",{content:q.innerHTML,allowHTML:!0,arrow:!0,trigger:"click",interactive:!0,onShow:function(){V(!0)},onHidden:function(){V(!1)}})}Object(c.a)(".js-tooltip"),Object(l.a)(".js-article-card-title",100),Object(l.a)(".js-article-card-title-no-image",250),e=Object(m.getParameterByName)("action"),t=Object(m.getParameterByName)("stripe"),"subscribe"===e&&P("subscribe"),"signup"===e&&(window.location="".concat(ghostHost,"/signup/?action=checkout")),"checkout"===e&&P("signup"),"signin"===e&&P("signin"),"success"===t&&P("checkout"),"undefined"!=typeof ghostSearchApiKey?H(ghostHost,ghostSearchApiKey):(j.css("visibility","hidden"),k.remove(),y.remove())}))}},[[13,0,1]]]);