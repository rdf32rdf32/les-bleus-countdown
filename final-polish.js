document.addEventListener('DOMContentLoaded',()=>{
  const $=id=>document.getElementById(id);
  const isFr=()=> (window.franceLang||localStorage.getItem('france_lang')||'fr')==='fr';
  const bars=[['Attack','Attaque',92,89],['Midfield','Milieu',88,94],['Defence','Défense',91,87],['Form','Forme',95,93],['Experience','Expérience',96,88]];
  function renderBars(){const box=$('teamBars');if(!box)return; box.innerHTML=bars.map(([en,fr,f,s])=>`<div class="team-bar"><div><b>${isFr()?fr:en}</b><span>🇫🇷 ${f} · ${s} 🇪🇸</span></div><div class="dual-track"><i style="width:${f}%"></i><em style="width:${s}%"></em></div></div>`).join('');}
  function patchPredictor(){
    ['extraTime','penalties'].forEach(id=>$(id)?.addEventListener('change',()=>updateExtras()));
    updateExtras();
  }
  function updateExtras(){const box=$('predictionSummary');if(!box)return; let old=box.querySelector('.prediction-extras'); if(old)old.remove(); const x=document.createElement('div');x.className='prediction-extras';x.innerHTML=`<span>⏱️ ${isFr()?'Prolongation':'Extra time'}: <b>${isFr()?($('#extraTime')?.value==='Yes'?'Oui':'Non'):($('#extraTime')?.value||'No')}</b></span><span>🥅 ${isFr()?'Tirs au but':'Penalties'}: <b>${isFr()?($('#penalties')?.value==='Yes'?'Oui':'Non'):($('#penalties')?.value||'No')}</b></span>`;box.appendChild(x);}
  function quizProgress(){const box=$('quizContainer');if(!box)return; const qs=[...box.querySelectorAll('.question')];qs.forEach((q,i)=>{if(q.querySelector('.quiz-progress-line'))return;const line=document.createElement('div');line.className='quiz-progress-line';line.innerHTML=`<span>${isFr()?'Question':'Question'} ${i+1}/5</span><i style="width:${(i+1)*20}%"></i>`;q.prepend(line);});}
  function polish(){renderBars();updateExtras();setTimeout(quizProgress,80);document.title=isFr()?'Les Bleus Countdown | Centre de match de la France':'Les Bleus Countdown | France World Cup Match Centre';}
  const mo=new MutationObserver(()=>quizProgress()); if($('quizContainer'))mo.observe($('quizContainer'),{childList:true});
  document.addEventListener('france-language-change',()=>setTimeout(polish,100));
  $('newQuiz')?.addEventListener('click',()=>setTimeout(quizProgress,100));
  patchPredictor();polish();
});
