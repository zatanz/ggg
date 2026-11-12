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
    for(const ref of ['./route-act1.js','./route-act2.js','./route-act3.js','./route-act4.js','./route-act5.js','./act2-advisory.js']){
      check(html.includes('src="'+ref+'"'),name+': missing '+ref)
    }
    check(html.includes('rec.id===item.id'),name+': route evidence is not tied to displayed ID');
    check(html.includes('act===3?window.ALL_EARS_ROUTE_ACT3'),name+': Act 3 source ordering not wired');
    check(html.includes('act===4?window.ALL_EARS_ROUTE_ACT4'),name+': Act 4 source ordering not wired');
    check(html.includes('act===5?window.ALL_EARS_ROUTE_ACT5'),name+': Act 5 source ordering not wired');
    check(html.includes('act!==2&&act!==3&&act!==6')&&html.includes('window.ALL_EARS_ROUTE_ACT3.notes.forEach'),name+': Act 3 critical warning not visible');
    check(html.includes('src="./act6-advisory.js"')&&html.includes('window.ALL_EARS_ACT6_ADVISORY.milestones.forEach'),name+': Act 6 historical warning not displayed');
    check(html.includes('act!==2')&&html.includes('advisory.branchRows.forEach'),name+': conditional bandit warning not displayed');
    check(html.includes('var blocked=patch!=="legacy-3.9"'),name+': unverified patches not blocked');
  }else{
    check(html.includes('p.id!=="legacy-3.9"'),name+': unverified patches not blocked');
    for(const ref of ['./route-act1.js','./route-act2.js','./route-act3.js','./route-act4.js','./route-act5.js']){
      check(html.includes('src="'+ref+'"'),name+': missing wiki route script '+ref)
    }
    check(html.includes('var wikiMeta=new Map()'),name+': source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT3'),name+': Act 3 source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT4'),name+': Act 4 source row mapping missing');
    check(html.includes('window.ALL_EARS_ROUTE_ACT5'),name+': Act 5 source row mapping missing');
    check(html.includes('wikiMeta.get(x.id)?.before'),name+': wiki missable warnings omitted');
        check(html.includes('if(!save())o.checked=previousChecked'),name+': localStorage write rollback missing');
  }
}
console.log(JSON.stringify({tested:['index.html','walkthrough.html'],errors},null,2));
if(errors.length)process.exitCode=1;
