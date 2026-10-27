(function(){var ID='G-TP9M8RKELC',K='ej-consent';
function load(){if(window.__ga)return;window.__ga=1;window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
gtag('js',new Date());gtag('config',ID,{anonymize_ip:true});
var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(s);}
function ev(n,p){if(window.gtag)gtag('event',n,p||{});}
function bar(){if(document.getElementById('cc'))return;var d=document.createElement('div');d.id='cc';d.className='cc';d.setAttribute('role','dialog');d.setAttribute('aria-label','Souhlas s cookies');
d.innerHTML='<p>Web používá analytické cookies Google Analytics, abych věděl, kolik lidí ho navštěvuje. Bez vašeho souhlasu se nic neměří. <a href="cookies.html">Více</a></p><div class="cc-b"><button type="button" class="btn btn-o" data-c="0">Odmítnout</button><button type="button" class="btn btn-y" data-c="1">Přijmout</button></div>';
d.addEventListener('click',function(e){var c=e.target.getAttribute('data-c');if(c===null)return;try{localStorage.setItem(K,c)}catch(x){}d.remove();if(c==='1')load();});
document.body.appendChild(d);}
window.ejCookies=function(){try{localStorage.removeItem(K)}catch(x){}bar();};
var v=null;try{v=localStorage.getItem(K)}catch(x){}
if(v==='1')load();
document.addEventListener('DOMContentLoaded',function(){if(v===null)bar();
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="tel:"]');if(a)ev('phone_click',{link_url:a.href,page:location.pathname});});
var f=document.getElementById('poptavka');if(f)f.addEventListener('submit',function(){ev('generate_lead',{method:'formular'});});});
})();
