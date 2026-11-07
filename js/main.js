var lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('.card img').forEach(function(i){i.parentNode.onclick=function(){li.src=i.src;li.alt=i.alt;lb.classList.add('on')}});
lb.onclick=function(){lb.classList.remove('on')};
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
// Palitan ang email sa baba ng totoong email mo
var EMAIL='youremail@example.com';
document.getElementById('f').onsubmit=function(e){e.preventDefault();var d=new FormData(e.target);
location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Message from '+d.get('name'))+'&body='+encodeURIComponent(d.get('msg')+'\n\n'+d.get('email'))};

document.querySelectorAll('[data-n]').forEach(function(e){var n=+e.dataset.n,i=0,t=setInterval(function(){e.textContent=++i;if(i>=n)clearInterval(t)},120)});
document.querySelectorAll('.tabs button').forEach(function(b){b.onclick=function(){document.querySelectorAll('.tabs button').forEach(function(x){x.setAttribute('aria-selected',x===b)});document.querySelectorAll('.panel').forEach(function(p){p.hidden=p.id!==b.dataset.t})}});
var cl=document.getElementById('cl'),C=[];try{C=JSON.parse(localStorage.getItem('cm')||'[]')}catch(e){}
function draw(){cl.innerHTML='';C.forEach(function(c){var li=document.createElement('li'),b=document.createElement('b');b.textContent=c.n;li.appendChild(b);li.appendChild(document.createTextNode(': '+c.t));cl.appendChild(li)})}draw();
document.getElementById('cf').onsubmit=function(e){e.preventDefault();C.push({n:cn.value,t:ct.value});try{localStorage.setItem('cm',JSON.stringify(C))}catch(x){}draw();e.target.reset()};

var id=document.querySelector('.id');
if(id&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
id.addEventListener('pointermove',function(e){var r=id.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;id.classList.add('live');id.style.transform='perspective(700px) rotateY('+(x*24)+'deg) rotateX('+(-y*24)+'deg) scale(1.04)'});
id.addEventListener('pointerleave',function(){id.classList.remove('live');id.style.transform=''});}

if(id){function fl(){id.classList.toggle('flipped')}id.addEventListener('click',fl);id.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fl()}})}

var bk=document.querySelector('.back'),bi=bk&&bk.querySelector('img');
if(bi){function ok(){if(bi.naturalWidth)bk.classList.add('has-img')}bi.addEventListener('load',ok);if(bi.complete)ok()}
