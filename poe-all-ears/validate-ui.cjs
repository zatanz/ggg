/* Dependency-free static UI quality gate. Run: node poe-all-ears/validate-ui.cjs */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const dir=__dirname,errors=[];
function check(cond,reason){if(!cond)errors.push(reason)}
for(const name of ['index.html','walkthrough.html']){
  const html=fs.readFileSync(path.join(dir,name),'utf8');
  const tags=[...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  check(tags.length>=2,name+': no script tags');
  for(const [i,tag] of tags.entries()){
    const attrs=tag[1],src=attrs.match(/\bsrc=["']([^"']+)["']/i);
    if(src){const rel=src[1];check(rel.startsWith('./')&&fs.existsSync(path.join(dir,rel)),name+': missing script '+rel);}
    else if(tag[2].trim()){
      try{new vm.Script(tag[2],{filename:name+'#inline-'+(i+1)})}
      catch(e){errors.push(name+': JavaScript syntax error '+e.message)}
    }
  }
  if(name==='walkthrough.html'){
    for(const ref of ['./route-act1.js','./route-act2.js','./route-act3.js','./route-act4.js','./route-act5.js','./route-act6.js','./route-act7.js','./route-act8.js','./route-act9.js','./route-act10.js','./act2-advisory.js']){
      check(html.includes('src="'+ref+'"'),name+': missing '+ref)
    }
    check(html.includes('rec.id===item.id'),name+': route evidence is not tied to displayed ID');
    check(html.includes('act===3?window.ALL_EARS_ROUTE_ACT3'),name+': Act 3 source ordering not wired');
    check(html.includes('act===4?window.ALL_EARS_ROUTE_ACT4'),name+': Act 4 source ordering not wired');
    check(html.includes('act===5?window.ALL_EARS_ROUTE_ACT5'),name+': Act 5 source ordering not wired');
    check(html.includes('act===6?window.ALL_EARS_ROUTE_ACT6'),name+': Act 6 source ordering not wired');
    check(html.includes('act===7?window.ALL_EARS_ROUTE_ACT7'),name+': Act 7 source ordering not wired');
    check(html.includes('act===8?window.ALL_EARS_ROUTE_ACT8'),name+': Act 8 source ordering not wired');
    check(html.includes('act===9?window.ALL_EARS_ROUTE_ACT9')&&html.includes('act===10?window.ALL_EARS_ROUTE_ACT10'),name+': Act 9–10 source ordering not wired');
    check(html.includes('act!==2&&act!==3&&act!==6&&act!==9&&act!==10')&&html.includes('window.ALL_EARS_ROUTE_ACT3.notes.forEach'),name+': Act 3 critical warning not visible');
    check(html.includes('src="./act10-advisory.js"')&&html.includes('window.ALL_EARS_ACT10_ADVISORY.milestones.forEach'),name+': Act 10 historical checkpoints not displayed');
    check(html.includes('src="./act9-advisory.js"')&&html.includes('window.ALL_EARS_ACT9_ADVISORY.milestones.forEach'),name+': Act 9 historical warnings not displayed');
    check(html.includes('src="./act6-advisory.js"')&&html.includes('window.ALL_EARS_ACT6_ADVISORY.milestones.forEach'),name+': Act 6 historical warning not displayed');
    check(html.includes('act!==2')&&html.includes('advisory.branchRows.forEach'),name+': conditional bandit warning not displayed');
    check(html.includes('var blocked=patch!=="legacy-3.9"'),name+': unverified patches not blocked');
  }else{
    check(html.includes('p.id!=="legacy-3.9"'),name+': unverified patches not blocked');
    for(const ref of ['./route-act1.js','./route-act2.js','./route-act3.js','./route-act4.js','./route-act5.js','./route-act6.js','./route-act7.js','./route-act8.js','./route-act9.js','./route-act10.js']){
      check(html.includes('src="'+ref+'"'),name+': missing wiki route script '+ref)
    }
    check(html.includes('var wikiMeta=new Map()'),name+': source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT3'),name+': Act 3 source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT4'),name+': Act 4 source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT5'),name+': Act 5 source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT6'),name+': Act 6 source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT7'),name+': Act 7 source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT8'),name+': Act 8 source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT9')&&html.includes('window.ALL_EARS_ROUTE_ACT10'),name+': Act 9–10 source row mapping missing');
    check(html.includes('wikiMeta.get(x.id)?.before'),name+': wiki missable warnings omitted');
        check(html.includes('if(!save())o.checked=previousChecked'),name+': localStorage write rollback missing');
  }
}
const hubSource=fs.readFileSync(path.join(dir,'hub.js'),'utf8');
try{new vm.Script(hubSource,{filename:'hub.js'})}catch(e){errors.push('hub.js: '+e.message)}
const index=fs.readFileSync(path.join(dir,'index.html'),'utf8');
check(index.includes('href="./campaign.css"')&&fs.existsSync(path.join(dir,'campaign.css')),'guided campaign stylesheet must load');
check(index.indexOf('src="./approved-guidance.js"')>=0&&index.indexOf('src="./approved-guidance.js"')<index.indexOf('src="./guide-descriptions.js"'),'approved copy must load before its route and item consumers');
check(index.includes('src="./lore-data.js"')&&index.includes('src="./extra-data.js"')&&index.includes('src="./hub.js"')&&index.includes('href="./hub.css"'),'unified hub dependencies not loaded');
check(index.includes('window.POE_HUB_BRIDGE')&&index.includes('mark:function(id,done)'),'legacy progress bridge unavailable');
check(index.includes('function referencePreviewActive()')&&index.includes('selectedPatch==="3.30"&&historicalReferencePreview'),'3.30 historical reference preview must be strictly scoped to the selected current patch');
check(index.includes('historicalReferenceEnabled:function()')&&index.includes('enableHistoricalReference:function(enabled)'),'opt-in historical preview controls must be shared across native and guided checklists');
check(index.includes('PATCH_CHOICE_KEY')&&index.includes('REFERENCE_PREVIEW_KEY'),'patch selection and reference consent must persist in separate device keys');
check(hubSource.includes('data-patch-reference')===false&&hubSource.includes('notice.dataset.patchReference="3.30"')&&hubSource.includes('notice.setAttribute("role","status")'),'active 3.30 historical view must have an always-on accessible source label');
check(hubSource.includes('button.dataset.patchPreviewAction=currentPatch==="3.30"?"enable":"legacy"')&&hubSource.includes('B.enableHistoricalReference(false)'),'3.30 reference consent must be explicit and reversible');
check(hubSource.includes('poe-unified-companion')&&hubSource.includes('function renderRoute')&&hubSource.includes('function reviewPanel'),'unified route/review/backup missing');
// Regress source-risk disclosures: visible at decision points, bilingual and source-linked.
const hubCSS=fs.readFileSync(path.join(dir,'hub.css'),'utf8');
check(hubSource.includes('function routeEvidencePanel(act)')&&hubSource.includes('const evidence=routeEvidencePanel(act)')&&hubSource.includes('panel.insertBefore(evidence,reference)'),'source conflicts not surfaced in active Act route');
check(hubSource.includes('hubGlobalEvidence')&&hubSource.includes('https://www.poewiki.net/wiki/Waypoint')&&hubSource.includes('https://www.poewiki.net/wiki/Vaal_side_area'),'global waypoint and source-backed Vaal evidence notices missing');
check(hubSource.includes('Source disagreement · verify before advancing')&&hubSource.includes('Original Thai source note'),'bilingual source comparison / inspectable original missing');
check(hubSource.includes('Bandits / The Darkness')&&hubSource.includes('Irasha / Tasuni branch'),'critical quest disagreement indicators missing');
check(hubCSS.includes('.hubEvidencePanel>summary:focus-visible')&&hubCSS.includes('@media(max-width:600px)'),'source panel focus / responsive styles missing');
const walkSection=hubSource.slice(hubSource.indexOf('function actSteamGuide('),hubSource.indexOf('function renderRoute('));
check(walkSection.indexOf('const actions=el("ol"')>=0&&walkSection.indexOf('const actions=el("ol"')<walkSection.indexOf('const taskNav=el('),'what-to-do instructions should precede detailed checklist navigation');
check(hubSource.includes('const manageTitle=document.querySelector("#hubManage>summary")')&&hubSource.includes('const notice=document.querySelector(".hubDataNotice")'),'legacy help and patch label not updated on language switch');
// The live route and review use the same checkbox handler and canonical IDs.
check(hubSource.includes('const mark=el("label",undefined,"hubInlineMark")')&&hubSource.includes('if(current?.type===type&&current.id===id)continue;'),'active quest checkbox must have a label and appear once in its stage');
check(hubSource.includes('itemCheckbox(current.type,item,false,details,')&&hubSource.includes('writeMarks(previous.type,previous.id,false)'),'inline mark and undo must share canonical persistence');
check(hubSource.includes('const shelf=el("details",undefined,"hubWalkArchive")')&&hubSource.includes('if(node.querySelector("input"))shelf.append(node);'),'historical per-category checklist must remain accessible under one disclosure');
check(hubSource.includes('advance.dataset.inlineAdvance="true"')&&hubSource.includes('advance.onclick=()=>goto(chosen+1,true,"task")'),'fully marked quest step must offer a next-step action');
check(hubCSS.includes('.hubInlineCurrentChecklist .hubInlineMark')&&hubCSS.includes('.hubWalkArchive>summary'),'inline confirmation and optional archive need accessible styles');
console.log(JSON.stringify({tested:['index.html','walkthrough.html'],errors},null,2));
if(errors.length)process.exitCode=1;
