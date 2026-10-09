(function(){
  document.getElementById('year')?.replaceChildren(String(new Date().getFullYear()));
  const header=document.querySelector('.site-header');
  document.querySelector('.menu-toggle')?.addEventListener('click',()=>header.classList.toggle('nav-open'));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  // Soft pointer parallax and image drift inspired by the original supplied animation code.
  const hero=document.querySelector('.hero'), photo=document.querySelector('.hero-photo');
  if(hero&&photo&&matchMedia('(pointer:fine)').matches){hero.addEventListener('mousemove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;photo.style.transform=`scale(1.07) translate(${x*-10}px,${y*-10}px)`});hero.addEventListener('mouseleave',()=>photo.style.transform='scale(1.04)')}
  document.querySelectorAll('.menu-tabs a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('nav-open')));
})();
