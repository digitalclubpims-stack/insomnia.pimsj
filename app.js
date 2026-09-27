// Paste your final links here. The two buttons on the home page use these values.
const BROCHURE_URL=''; // Google Drive brochure link
const DEVELOPER_INSTAGRAM_URL=''; // Add the developer's Instagram profile URL here
const EVENT_REGISTRATION_URL='https://docs.google.com/spreadsheets/d/1ll3WSmmYoMrOaPJMRCKyGCP9Z8eD9Tfo/edit?usp=drivesdk&ouid=113367413386334836636&rtpof=true&sd=true';

const categories=[
 {slug:'literary',name:'LITERARY',desc:'Literary League, PIMS Villa, Medical MedMaster, Cinema Clash & MBBS Through Ages.',color:'yellow',icon:'book'},
 {slug:'cultural',name:'CULTURAL',desc:'Singing Competition, Dancing Competition, PIMS Villa & MBBS Through Ages.',color:'pink',icon:'mask'},
 {slug:'arts',name:'ARTS',desc:'Inkverse, Flavor Without Fire, T Volution & Rangoli.',color:'purple',icon:'palette'},
 {slug:'digital',name:'DIGITAL',desc:'AI Prompt Battle, A Day in the Life of MBBS & Digital Poster Making.',color:'orange',icon:'monitor'},
 {slug:'clinical',name:'MEDXPLORE CLINICAL',desc:'Cut to Closure Workshop, Materna MiniMed Workshop & Clinexcel Workshop.',color:'pink',icon:'medical'},
 {slug:'social',name:'SOCIAL',desc:'MUN, Recraft and Repurpose & Canvas for a Change.',color:'yellow',icon:'heart'},
 {slug:'fandom',name:'FANDOM',desc:'Murder Mystery & PIMS Roadies.',color:'cyan',icon:'film'},
 {slug:'e-sports',name:'ESPORTS',desc:'Clash Royale & BGMI.',color:'orange',icon:'game'},
 {slug:'photography',name:'PHOTOGRAPHY',desc:'Unposed, Behind the Scenes & Bloom Flower Bouquet.',color:'cream',icon:'camera'}
];
const specialEvent={slug:'mr-miss-insomnia',name:'MR & MISS INSOMNIA',desc:'The flagship Insomnia stage competition.',color:'purple',icon:'crown',special:true};
const eventData={
 literary:[['LITERARY LEAGUE','A literary showdown built around wit, language, ideas and fast thinking.'],['PIMS VILLA','Step into the villa, meet the characters and play your way through the chaos.'],['MEDICAL MEDMASTER','Put your medical knowledge, recall and clinical thinking to the test.'],['CINEMA CLASH','A celebration of cinema, scenes, characters and the moments every movie lover remembers.'],['MBBS THROUGH AGES','Travel through the eras of MBBS in a creative journey through medicine and student life.']],
 cultural:[['SINGING COMPETITION','Take the mic, own the moment and bring your voice to the Insomnia stage.'],['DANCING COMPETITION','Bring your rhythm, energy and signature moves to the dance floor.'],['PIMS VILLA','Step into the villa, meet the characters and play your way through the chaos.'],['MBBS THROUGH AGES','Travel through the eras of MBBS in a creative journey through medicine and student life.']],
 arts:[['INKVERSE','Turn ideas into visual expression through ink, line and imagination.'],['FLAVOR WITHOUT FIRE','Create something delicious and creative without conventional cooking.'],['T VOLUTION','Transform, create and compete in a hands-on art challenge.'],['RANGOLI','Turn colour, pattern and precision into a visual masterpiece.']],
 digital:[['AI PROMPT BATTLE','Craft precise prompts, think creatively and see how far your imagination can take AI.'],['A DAY IN THE LIFE OF MBBS','Capture the chaos, humour and reality of a day in medical student life.'],['DIGITAL POSTER MAKING','Design a poster that communicates an idea clearly, creatively and memorably.']],
 clinical:[['CUT TO CLOSURE WORKSHOP','A practical suturing workshop focused on technique, precision and confidence.'],['MATERNA MINIMED WORKSHOP','Hands-on learning around maternal and paediatric clinical skills.'],['CLINEXCEL WORKSHOP','Build essential clinical skills through practical, focused training.']],
 social:[['MUN','Step into diplomacy, debate policy and represent your country in a simulated United Nations.'],['RECRAFT AND REPURPOSE','Turn discarded materials into something creative, useful and worth displaying.'],['CANVAS FOR A CHANGE','Use art as a medium for expression, awareness and positive social impact.']],
 fandom:[['MURDER MYSTERY','Follow the clues, interrogate the suspects and crack the case before the killer gets away.'],['PIMS ROADIES','A high-energy challenge of personality, teamwork, grit and unexpected tasks.']],
 'e-sports':[['CLASH ROYALE','Compete head-to-head, build your strategy and outplay the competition.'],['BGMI','Squad up, survive the battlefield and fight your way to the top.']],
 photography:[['UNPOSED','Capture authentic moments, expressions and stories without staged poses.'],['BEHIND THE SCENES','Find the moments that happen away from the spotlight and turn them into a story.'],['BLOOM FLOWER BOUQUET','Create a visually striking floral arrangement through composition, colour and creativity.']]
};
const specialEventData=[['MR & MISS INSOMNIA','The flagship Insomnia stage competition — confidence, personality, presence and performance.']];
const iconPaths={book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 5.5v15A2.5 2.5 0 0 1 6.5 18H20"/>',mask:'<path d="M4 6h16v7c0 4-3.6 7-8 7s-8-3-8-7z"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>',palette:'<circle cx="12" cy="12" r="9"/><circle cx="8" cy="9" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="9" r="1"/>',camera:'<path d="M4 7h4l2-2h4l2 2h4v12H4z"/><circle cx="12" cy="13" r="4"/>',monitor:'<rect x="3" y="4" width="18" height="13" rx="1"/><path d="M8 21h8M12 17v4"/>',film:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 5v14M16 5v14M4 9h4M16 9h4M4 15h4M16 15h4"/>',game:'<path d="M7 9h10a4 4 0 0 1 3.5 6l-1 2a2 2 0 0 1-3.4.4L14.5 16h-5l-1.6 1.4A2 2 0 0 1 4.5 17l-1-2A4 4 0 0 1 7 9z"/><path d="M8 12v4M6 14h4M16 13h.01M18 15h.01"/>',heart:'<path d="M20 12c0 5-8 9-8 9s-8-4-8-9a4.5 4.5 0 0 1 8-2.6A4.5 4.5 0 0 1 20 12z"/>',medical:'<path d="M12 4v5M9.5 6.5h5"/><path d="M7 9h10v8a5 5 0 0 1-10 0z"/>',crown:'<path d="m4 7 3 4 5-6 5 6 3-4-1 12H5z"/>'};
function $(q,s=document){return s.querySelector(q)} function $$(q,s=document){return [...s.querySelectorAll(q)]}
function categoryIcon(key){return `<span class="category-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[key]||iconPaths.book}</svg></span>`}
function makeCategoryCard(c,i){const count=c.special?specialEventData.length:(eventData[c.slug]?.length||0);return `<a class="category-card ${c.color} tilt-${i%2?'l':'r'} reveal" href="events.html?category=${encodeURIComponent(c.slug)}"><div class="card-top">${categoryIcon(c.icon)}<span class="count">${count} ${count===1?'EVENT':'EVENTS'}</span></div><h3>${c.name}</h3><p>${c.desc}</p><span class="card-arrow">SEE EVENTS <b>↗</b></span><span class="card-glow"></span></a>`}
function renderCategories(){const el=$('#homeCategories');if(!el)return;el.innerHTML=categories.map((c,i)=>makeCategoryCard(c,i)).join('')+makeCategoryCard(specialEvent,categories.length).replace('category-card purple','category-card purple special-category-card')}
function setupNav(){const nav=$('#nav');if(nav){const f=()=>nav.classList.toggle('scrolled',scrollY>50);f();addEventListener('scroll',f,{passive:true})}$$("[data-menu-open]").forEach(b=>b.onclick=()=>{$('#menuOverlay')?.classList.add('open');$('#menuOverlay')?.setAttribute('aria-hidden','false')});$("[data-menu-close]")?.addEventListener('click',closeMenu);$('#menuOverlay')?.addEventListener('click',e=>{if(e.target.id==='menuOverlay')closeMenu()});$$('#menuOverlay a').forEach(a=>a.addEventListener('click',closeMenu))}
function closeMenu(){$('#menuOverlay')?.classList.remove('open');$('#menuOverlay')?.setAttribute('aria-hidden','true')}
function setupPass(){const link=$('[data-pass-link]');if(link)link.addEventListener('click',e=>{if(!EVENT_REGISTRATION_URL){e.preventDefault();alert('Add your Google registration URL in app.js → EVENT_REGISTRATION_URL.')}})}
function setupExternalLinks(){const links=$$('[data-external-link]');links.forEach(link=>{const type=link.dataset.externalLink;const url=type==='brochure'?BROCHURE_URL:EVENT_REGISTRATION_URL;if(url)link.href=url;else link.addEventListener('click',e=>{e.preventDefault();alert(type==='brochure'?'Add your Google Drive brochure URL in app.js → BROCHURE_URL.':'Add your Google registration URL in app.js → EVENT_REGISTRATION_URL.')})})}
function setupDeveloperInstagram(){const link=$('[data-developer-instagram]');if(!link)return;if(DEVELOPER_INSTAGRAM_URL){link.href=DEVELOPER_INSTAGRAM_URL}else{link.addEventListener('click',e=>{e.preventDefault();alert('Add the developer Instagram URL in app.js → DEVELOPER_INSTAGRAM_URL.')})}}
function setupSpotlightCarousel(){const carousel=$('#mainSpotlightCarousel');if(!carousel)return;const slides=$$('.spotlight-slide',carousel);if(slides.length<2)return;const second=slides[1]?.querySelector('img');if(!second)return;const start=()=>{let index=0;const show=next=>{index=next%slides.length;slides.forEach((slide,i)=>slide.classList.toggle('is-active',i===index))};setInterval(()=>show(index+1),5000)};if(second.complete){if(second.naturalWidth>0)start()}else{second.addEventListener('load',start,{once:true})}}
const EVENT_DETAILS={
  /* Final logistics can be filled here later without changing card geometry. */
};
function eventDetails(title,index){
  const d=EVENT_DETAILS[title]||{};
  return {
    date:d.date||'TBA', time:d.time||'TBA', venue:d.venue||d.location||'TBA',
    teamSize:d.teamSize||d.format||'TBA', prize:d.prize||'TBA',
    registration:d.registration||'#'
  };
}
function slugifyEvent(title){return title.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function renderEventCard(e,i,categorySlug){
  const d=eventDetails(e.title,i);
  const reg=d.registration==='#'?'javascript:void(0)':d.registration;
  const poster=`assets/posters/${slugifyEvent(e.title)}.jpg`;
  const specialClass=e.title==='MR & MISS INSOMNIA'?'special-event-card':'';
  return `<article class="event-card ${specialClass} ${i%2?'tilt-left':'tilt-right'} reveal">
    <div class="poster-box" aria-label="3:4 poster slot for ${e.title}"><img src="${poster}" alt="${e.title} poster" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="poster-word" style="display:none">POSTER<small>3 : 4 • ${slugifyEvent(e.title)}</small></div></div>
    <div class="event-info">
      <div class="event-label">${categorySlug==='mr-miss-insomnia'?'SPECIAL EVENT':'EVENT '+String(i+1).padStart(2,'0')}</div>
      <h3>${e.title}</h3><p>${e.desc||''}</p>
      <div class="event-meta-grid"><div><b>DATE</b><span>${d.date}</span></div><div><b>TIME</b><span>${d.time}</span></div><div><b>VENUE</b><span>${d.venue}</span></div><div><b>TEAM SIZE</b><span>${d.teamSize}</span></div><div><b>PRIZE</b><span>${d.prize}</span></div></div>
      <a class="register-btn ${d.registration==='#'?'is-disabled':''}" href="${reg}" ${d.registration==='#'?'aria-disabled="true"':''}>REGISTER <span>↗</span></a>
    </div></article>`;
}
function renderEventsPage(){
  const tabs=$('#tabs'); if(!tabs)return;
  const selected=new URLSearchParams(location.search).get('category')||'all';
  const allCats=[{slug:'all',name:'ALL',icon:'crown'},...categories,specialEvent];
  tabs.innerHTML=allCats.map(c=>`<a class="category-tab ${selected===c.slug?'active':''}" href="${c.slug==='all'?'events.html':'events.html?category='+encodeURIComponent(c.slug)}">${c.name}</a>`).join('');
  let list=[];
  if(selected==='all'){const seen=new Set();[...Object.values(eventData).flat(),...specialEventData].forEach(([title,desc])=>{if(!seen.has(title)){seen.add(title);list.push({title,desc})}})}
  else if(selected===specialEvent.slug){list=specialEventData.map(([title,desc])=>({title,desc}))}
  else list=(eventData[selected]||[]).map(([title,desc])=>({title,desc}));
  const cat=allCats.find(c=>c.slug===selected)||allCats[0];
  $('#categoryTitle').textContent=cat.name; $('#eventCount').textContent=`${list.length} ${list.length===1?'EVENT':'EVENTS'}`; $('#categoryIcon').innerHTML=categoryIcon(cat.icon);
  $('#eventGrid').innerHTML=list.map((e,i)=>renderEventCard(e,i,selected)).join('');
  setupAnimations();
}
function setupParallax(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const layers=$$('.layer');if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);layers.forEach(l=>{const s=parseFloat(l.dataset.speed||0);gsap.to(l,{y:()=>innerHeight*s*2, ease:'none',scrollTrigger:{trigger:l.closest('.scene'),start:'top bottom',end:'bottom top',scrub:.7}})})}else{addEventListener('scroll',()=>{const y=scrollY;layers.forEach(l=>{const s=parseFloat(l.dataset.speed||0);l.style.transform=`translate3d(0,${y*s}px,0)`})},{passive:true})}}
function setupAnimations(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){$$('.reveal').forEach(e=>e.classList.add('visible'));return}
  if(window.gsap&&window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    $$('.reveal').forEach((el,i)=>{
      gsap.fromTo(el,
        {y:55,opacity:0},
        {y:0,opacity:1,duration:.9,ease:'power3.out',delay:Math.min(i*.025,.16),scrollTrigger:{trigger:el,start:'top 90%',once:true}}
      );
    });
    $$('.category-card').forEach((c,i)=>{
      gsap.fromTo(c,
        {x:i%2?42:-42,y:26,rotate:i%2?3.2:-3.2,scale:.975,opacity:0},
        {x:0,y:0,rotate:i%2?-1.15:1.15,scale:1,opacity:1,duration:1.0,ease:'power4.out',scrollTrigger:{trigger:c,start:'top 92%',once:true}}
      );
    });
    $$('.event-card').forEach((c,i)=>{
      const fromX=i%2?70:-70;
      const fromR=i%2?4.5:-4.5;
      const toR=i%2?-1.15:1.15;
      gsap.fromTo(c,
        {x:fromX,y:48,rotate:fromR,scale:.965,opacity:0},
        {x:0,y:0,rotate:toR,scale:1,opacity:1,duration:1.0,ease:'power4.out',delay:Math.min(i*.045,.18),scrollTrigger:{trigger:c,start:'top 92%',once:true}}
      );
    });
    $$('.display').forEach(h=>gsap.fromTo(h,{scale:.88,y:55,opacity:0},{scale:1,y:0,opacity:1,ease:'power3.out',scrollTrigger:{trigger:h,start:'top 88%',end:'top 55%',scrub:.9}}));
    $$('.section-head').forEach(h=>gsap.fromTo(h,{x:-55,opacity:0},{x:0,opacity:1,duration:.95,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 87%',once:true}}));
    $$('.night-placard').forEach((c,i)=>gsap.fromTo(c,{y:48,opacity:0,scale:.975},{y:0,opacity:1,scale:1,duration:1.05,delay:i*.06,ease:'power3.out',scrollTrigger:{trigger:c,start:'top 90%',once:true}}));
    $$('.insomnia-night-title').forEach((h)=>gsap.fromTo(h,{x:-35,opacity:0},{x:0,opacity:1,duration:1.0,ease:'power3.out',scrollTrigger:{trigger:h,start:'top 90%',once:true}}));
  }else{
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
    $$('.reveal').forEach(e=>io.observe(e));
  }
}

function setupCinematicMotion(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  if(!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);

  $$('.spotlight-feature').forEach(el=>{
    gsap.fromTo(el,{y:55,scale:.97},{y:-18,scale:1,ease:'none',
      scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:.75}});
  });

  $$('.closing-inner').forEach(el=>{
    gsap.fromTo(el,{y:35,opacity:.65},{y:-25,opacity:1,ease:'none',
      scrollTrigger:{trigger:el.closest('.closing'),start:'top bottom',end:'bottom top',scrub:.7}});
  });
}

function init(){setupNav();renderCategories();setupPass();setupExternalLinks();setupDeveloperInstagram();setupSpotlightCarousel();setupAnimations();setupParallax();setupCinematicMotion();if($('#eventGrid'))renderEventsPage()}
document.addEventListener('DOMContentLoaded',init);
