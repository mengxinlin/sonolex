(function(root){
  'use strict';
  const DAY=86400000;
  function dayKey(t=Date.now()){const d=new Date(t);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
  function schedule(old={},grade,now=Date.now()){
    let reps=old.reps||0, interval=old.interval||0, ease=old.ease||2.5;
    if(grade==='again'){return {...old,reps:0,interval:0,ease:Math.max(1.3,ease-.2),due:now+60000,lapses:(old.lapses||0)+1,last:now,status:'learning'};}
    if(grade==='hard'){interval=interval?Math.max(1,interval*1.2):.25;ease=Math.max(1.3,ease-.15);}
    else if(grade==='good'){interval=reps===0?1:reps===1?3:interval*ease;}
    else if(grade==='easy'){interval=reps===0?4:Math.max(4,interval*ease*1.3);ease+=.15;}
    else throw new Error('Unknown grade');
    reps++; interval=Math.min(365,Math.round(interval*100)/100);
    return {...old,reps,interval,ease,due:now+interval*DAY,last:now,status:interval>=21?'mastered':'learning',lapses:old.lapses||0};
  }
  function parseCSV(input){
    let rows=[],row=[],cell='',quoted=false; const str=input.replace(/^\uFEFF/,'');
    for(let i=0;i<str.length;i++){let c=str[i];if(c==='"'){if(quoted&&str[i+1]==='"'){cell+='"';i++;}else quoted=!quoted;}else if(c===','&&!quoted){row.push(cell);cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&str[i+1]==='\n')i++;row.push(cell);if(row.some(x=>x.trim()))rows.push(row);row=[];cell='';}else cell+=c;}
    if(quoted)throw new Error('CSV 引号未闭合'); row.push(cell);if(row.some(x=>x.trim()))rows.push(row);return rows;
  }
  function dailyPlan(words,progress,day={},settings={},now=Date.now()){
    const newIds=new Set(day.newIds||[]),reviewedIds=new Set(day.reviewIds||(day.ids||[]).filter(id=>!newIds.has(id)));
    const pool=words.filter(w=>!settings.book||settings.book==='all'||settings.book==='merged'&&w.book!=='custom'||w.book===settings.book);
    const oldWords=words.filter(w=>progress[w.id]&&!newIds.has(w.id));
    const reviewGoal=settings.reviewGoal||20,reviewTarget=Math.min(reviewGoal,oldWords.length);
    const reviewDone=oldWords.filter(w=>reviewedIds.has(w.id)).length;
    const candidates=oldWords.filter(w=>!reviewedIds.has(w.id)).sort((a,b)=>{
      const pa=progress[a.id],pb=progress[b.id],ad=pa.due<=now,bd=pb.due<=now;
      if(ad!==bd)return ad?-1:1;
      return ad?pa.due-pb.due:(pa.practicedAt||pa.last||0)-(pb.practicedAt||pb.last||0);
    });
    return {reviewGoal,reviewTarget,reviewDone,reviewWords:candidates.slice(0,Math.max(0,reviewTarget-reviewDone)),newWords:pool.filter(w=>!progress[w.id]).slice(0,Math.max(0,(settings.goal||15)-newIds.size))};
  }
  const api={DAY,dayKey,schedule,parseCSV,dailyPlan}; if(typeof module!=='undefined')module.exports=api; else root.Learning=api;
})(typeof window!=='undefined'?window:globalThis);
