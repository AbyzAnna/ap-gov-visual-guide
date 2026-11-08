function store(){try{return JSON.parse(localStorage.getItem('apgov-done')||'{}')}catch(e){return {}}}
function save(d){try{localStorage.setItem('apgov-done',JSON.stringify(d))}catch(e){}}
function refresh(){var d=store();document.querySelectorAll('[data-done]').forEach(function(e){e.classList.toggle('y',!!d[e.dataset.done])});
document.querySelectorAll('[data-mark]').forEach(function(e){e.checked=!!d[e.dataset.mark]});
var n=Object.keys(d).filter(function(k){return d[k]}).length,f=document.getElementById('pfill'),t=document.getElementById('ptext');
if(f)f.style.width=(100*n/window.TOTAL)+'%';if(t)t.textContent=n+' / '+window.TOTAL+' topics studied'}
document.addEventListener('change',function(e){if(e.target.dataset&&e.target.dataset.mark){var d=store();d[e.target.dataset.mark]=e.target.checked;save(d);refresh()}});
function pick(b){var q=b.closest('.q');if(q.classList.contains('ans'))return;q.classList.add('ans');
q.querySelectorAll('button').forEach(function(x){if(x.dataset.ok==='1')x.classList.add('ok')});if(b.dataset.ok!=='1')b.classList.add('no')}
function toggleTheme(){var r=document.documentElement,cur=r.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'),n=cur==='dark'?'light':'dark';r.dataset.theme=n;try{localStorage.setItem('apgov-theme',n)}catch(e){}}
(function(){try{var t=localStorage.getItem('apgov-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}refresh();
var on=document.querySelector('.side a.on');if(on)on.scrollIntoView({block:'center'});
document.querySelectorAll('.side a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('navopen')})})})();
