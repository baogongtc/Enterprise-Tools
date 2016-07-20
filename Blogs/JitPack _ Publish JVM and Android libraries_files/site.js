function showError(xhr,statusMsg,errorMsg){error=errorMsg;var response={};var err=errorMsg;try{response=JSON.parse(xhr.responseText);}catch(ignored){}
if(response.message){err=response.message;}
$("#title").html('<div class="alert alert-danger">'+ err+'</div>');}
function sortByTag(relArr){return relArr.sort(function(a,b){var v1=a.tag_name||a.name;var v2=b.tag_name||b.name;return verCmp(v1,v2);}).reverse();}
function loadTags(domain,owner,project,cb){var url;var callback=cb;releaseType="tag"
url="/api/tags/"+ toGroup(domain,owner)+'/'+ project
callback=function(data){cb(data.tags);};apiCall(url,callback,function(){showBuildsView();});};function loadCommits(domain,owner,project,cb){var url="/api/commits/"+ toGroup(domain,owner)+'/'+ project;apiCall(url,function(res){cb(res.commits||[]);});};function apiCall(url,cb,errCb){var apiUrl=url;if(apiHost){apiUrl=apiHost+ url;}
ajaxCall(apiUrl,cb,errCb);}
function ajaxCall(url,cb,errCb){$.getJSON(url,{},cb).fail(errCb||showError);}
function ghUrl(ending){var url="https://api.github.com/repos/"+ owner+'/'+ project+'/'+ ending;return withToken(url);}
function withToken(url){if(token)return url+'?access_token='+ token;return url;}
function loadBuilds(domain,owner,project,cb,query){var url="/api/builds/"+ toGroup(domain,owner)+'/'+ project;if(query)url+="?"+ query;apiCall(url,cb,function(xhr,msg,errorMsg){reset();showError(xhr,msg,errorMsg);});};function loadSettings(domain,owner,project,cb){apiCall(settingsUrl(domain,owner,project),cb,function(xhr,msg,errorMsg){});};function loadStats(domain,owner,project,cb){apiCall("/api/stats/"+ toGroup(domain,owner)+'/'+ project,cb,function(xhr,msg,errorMsg){});};function loadModules(art,cb,errCb){apiCall("/api/builds/"+ art.group+'/'+ art.artifact+'/'+ art.version,cb,errCb);};function settingsUrl(domain,owner,project){return"/api/settings/"+ toGroup(domain,owner)+'/'+ project;}
function toGroup(domainStr,owner){var parts=domainStr.split(".");var ownerStr=owner?"."+ owner:"";return parts.reverse().join(".")+ ownerStr;}
function toShortGroup(domainStr,owner){if(!domainStr)return owner;return isDefaultDomain(domainStr)?owner:toGroup(domainStr,owner);}
function verCmp(a,b){if(a===b){return 0;}
var a_components=a.split(".");var b_components=b.split(".");var len=Math.min(a_components.length,b_components.length);for(var i=0;i<len;i++){var m1=a_components[i].match(/(\d+)$/);var m2=b_components[i].match(/(\d+)$/);if(!m2)return 1;if(!m1)return-1;var v1=parseInt(m1[0]);var v2=parseInt(m2[0]);if(v1>v2){return 1;}
if(v1<v2){return-1;}}
if(a_components.length>b_components.length){return 1;}
if(a_components.length<b_components.length){return-1;}
return 0;}
var owner,project,domain=defaultDomain;var releases=[];var builds={};var releaseType="release";var token,user,isAuth,viewType,intervalID;var settings={};var error="";var art={};function showReleases(allReleases){releases=allReleases||[];var i=0;var tbody=$("#versionTable tbody");tbody.empty();var statuses={};var group=toGroup(domain,owner);if(builds[group]){statuses=builds[group][project]||{};}
var snapshots={};for(var ver in statuses){var matches=ver.match(/(.*)-([a-z0-9]{8})-[0-9]+$/);if(!matches)continue;var hash=matches[2];if(matches[1]&&hash.indexOf("g")==0)
hash=hash.substring(1);snapshots[hash]=ver;}
var hasOk=false;var releaseStatuses={};for(i=0;i<releases.length;i++){var rel=releases[i];var tag=rel.tag_name||rel.name;tag=tag.replace("/","~");if(statuses[tag]){releaseStatuses[tag]=statuses[tag];if(statuses[tag]==="ok"){hasOk=true;}}}
if((releases.length==0)&&builds[group]){for(var ver in statuses){if(!releaseStatuses[ver])
releases.unshift({name:ver});}}
for(i=0;i<Math.min(releases.length,5);i++){var rel=releases[i];var tag=rel.tag_name||rel.name;tag=tag.replace("/","~");var status=statuses[tag]||"";if(tag.length==40){tag=tag.substring(0,10);status=status||statuses[tag]||"";}
var grp=toGroup(domain,owner).replace(/\./g,'/');var resolvedTag=tag;if(!status&&tag.length==10||tag==="-SNAPSHOT"){resolvedTag=snapshots[tag.substring(0,8)]||snapshots[tag.substring(0,7)]||snapshots[rel.commit];if(resolvedTag){status=statuses[resolvedTag];}else{resolvedTag=tag;}}
var coord=project+'/'+ resolvedTag;var buildLog='/'+ grp+'/'+ coord+'/build.log';var statusHtml=status||"";if(status&&status.toLowerCase().indexOf("error")>=0){var query='title='+ coord+' build&body=Log https://jitpack.io'+ buildLog;statusHtml='';statusHtml+='<a target="_blank" href="https://github.com/jitpack/jitpack.io/issues/new?'+ query+'">';statusHtml+='<button class="btn btn-default btn-xs">Report</button></a>';}else{var clazz=(status==="ok")?"success":"default";var url="#"+ owner+'/'+ coord;if(defaultDomain!=domain){url="#"+ toGroup(domain,owner)+'/'+ coord;}
statusHtml='';statusHtml+="<a href='"+ url+"'>"
statusHtml+='<button class="btn btn-'+ clazz+' btn-xs getBtn" ver="'+ tag+'">Get it</button></a>';}
var del='',log='',logIcon="fa-file-text-o";if(status==="Building")
logIcon="fa-spinner fa-spin";else if(status==="Queued")
logIcon="fa-circle-o-notch fa-spin";del+='<div class="removeCol">';if(status!==""){if(status!=="Building"){del+='<a class="removeBuild" ver="'+ resolvedTag+'"><i ver="'+ resolvedTag+'" class="fa fa-times"></a>';}
log+='<a target="_blank" href="'+ buildLog+'" class="log"><i class="fa logIcon '+ logIcon+'"></a>';}
del+='</div>';tbody.append('<tr class="verRow"><td class="verCell">'+ tag+'</td><td class="verFill"></td><td>'+ log+'</td><td class="statusCol">'+ statusHtml+'</td><td class="del">'+ del+'</td></tr>');}
var commitsLabel=viewType=="Commits"?"Releases":"Commits";tbody.append('<tr><td colspan="2"><a href="" id="commitsLink">'+ commitsLabel+'</a></td><td class="verFill"></td><td colspan="2"><a href="" id="buildsLink">Builds</a></td></tr>');if(releases.length!=0){$("#versionTable").show();}else{changeDep(curArt("-SNAPSHOT"));var msg='No releases found. Try a commit or `-SNAPSHOT`</a>';$("#title").append('<p></p>').append('<div class="alert alert-info">'+ msg+'</div>');showCommits();}
showRemoves();}
function isDefaultDomain(dmn){return defaultDomain==dmn;}
function showCommits(){viewType="Commits";loadCommits(domain,owner,project,function(r){releases=[];releases.push({"name":"-SNAPSHOT"});for(var i=0;i<Math.min(r.length,4);i++){var commit=r[i].sha.substring(0,10);if(i==0){releases[0]={"name":"-SNAPSHOT","commit":commit.substring(0,7)};}
releases.push({"name":commit});}
if(releases.length>0)
showReleases(releases);});}
function showBuildsView(){var statuses={};var group=toGroup(domain,owner);if(builds[group]){statuses=builds[group][project]||{};}
releases=[];for(var ver in statuses){var stat=statuses[ver];if("tagNotFound"!==stat)
releases.push({"name":ver});}
releases.reverse();if(releases.length>5)
releases.slice(0,4);if(releases.length>0)
showReleases(releases);}
function showBuilds(buildJson){if(JSON.stringify(builds)===JSON.stringify(buildJson))return;builds=buildJson;if(releases.length==0)return;showReleases(releases);}
function onLookup(){var url=$("#repoUrl").val();var path;if(url.indexOf('http://')==0||url.indexOf('https://')==0){var urlNoProt=url.split("://")[1];path=urlNoProt.split('/');}else{path=url.split('/')}
if(path.length==2){owner=path[0];project=path[1];domain=defaultDomain;if(owner.indexOf('.')>0){domain=path[0].split('.').reverse().join('.');owner="";}}else if(path.length>2){domain=path[0];owner=path[1];project=path[2];if(url.indexOf(defaultGitServer)==0)
domain=defaultDomain;}else{$("#title").append('<p></p>').append('<div class="alert alert-info">Expecting: https://github.com/User/Repo</div>');return;}
if(project.indexOf('.git')>0)
project=project.replace('.git','');var newHash="#"+ owner+"/"+ project;if(defaultDomain!=domain){newHash="#"+ toGroup(domain,owner)+"/"+ project;}
if(newHash===window.location.hash){lookup();}else{window.location.href=newHash;}}
function reset(){releases=[];builds={};settings={};viewType="Releases";error="";if(intervalID)clearInterval(intervalID);intervalID=0
$("#versionTable").hide();$("#statsTable").hide();$("#settings").html('');$("#modulesList").html('');$("#subprojects").hide();$("#projDetails").html('').hide();}
function lookup(){$("#title").html(toShortGroup(domain,owner)+' / '+ project);reset();loadTags(domain,owner,project,showReleases);loadBuilds(domain,owner,project,showBuilds);intervalID=setInterval(reLoadBuilds,5000);var url=owner+"/"+ project;if(defaultDomain!=domain){url=toGroup(domain,owner)+"/"+ project;}
setItem("repoUrl",url);if(user){loadSettings(domain,owner,project,showSettings);loadStats(domain,owner,project,showStats);}else if(defaultAuth){loadSettings(domain,owner,project,showSettings);}
if(ga)ga('send','event','lookup','click');}
function reLoadBuilds(){loadBuilds(domain,owner,project,showBuilds,"reload");}
function showSettings(response){if(response.needAuth){settings=response;showLock();}else if(response.isAdmin){settings.isAdmin=true;}else{settings={};}
showRemoves();}
function showStats(response){if(response.week&&response.month){$("#weekDl").html(response.week||"");$("#monthDl").html(response.month||"");$("#statsTable").show();}}
function showRemoves(){if(settings.isAdmin){$('.verRow').addClass('showRemoveBuild');}}
function showLock(){var isPublic=settings["public"]||false;var title=isPublic?"public":"private";var icon=isPublic?"unlock":"lock";$("#settings").html('<button title="Now '+ title+'" class="btn btn-conf lock"><i class="fa fa-'+ icon+'"></i></button>'
+'<button title="Settings" class="btn btn-conf" id="settingsBtn"><i class="fa fa-cog"></i></button>');}
function toggleLock(){var isPublic=settings["public"]||false;var data={"public":!isPublic};updateSettings(data,showLock);}
function updateSettings(data,cb){var url=settingsUrl(domain,owner,project);var jsonstr=JSON.stringify(data);$.ajax({url:url,data:jsonstr,dataType:"json",type:"PUT",error:showError,success:function(res){$.extend(settings,data);cb(res);}});}
function changeDepCode(dep,art,selector){var d=dep.replace(/\$owner/m,art.group);d=d.replace(/\$project/m,art.artifact);d=d.replace(/\$tag/m,art.version);d=d.replace(/\$pkgType/m,art.type);$(selector).html(d);Prism.highlightElement($(selector)[0]);}
function showModuleDep(tag,pkgType){art=curArt(tag,pkgType);$("#subprojects").hide();changeDep(art);loadModules(art,function(res){if(res.modules&&res.modules[0]){var mod=res.modules[0];art.group=art.group+'.'+ art.artifact;art.artifact=mod;$("#modulesList").html('');for(var i=0;i<res.modules.length;i++){mod=res.modules[i];$("#modulesList").append('<li><a href="#">'+ mod+'</a></li>');}
$("#subprojects").show();}
changeDep(art);},function(){changeDep(art);});}
function onModuleChange(module){art.artifact=module;changeDep(art);}
function curArt(tag,pkgType){var art={};art.group=toGroup(domain,owner);art.artifact=project;art.version=tag;if(pkgType)art.type=pkgType;return art;}
function changeDep(art,e){var tag=art.version;changeDepCode(dep,art,"#depCode");changeDepCode(depSbt,art,"#depCodeSbt");changeDepCode(depLein,art,"#depCodeLein");changeDepCode(depGradle,art,"#depCodeGradle");$("#shareDiv").show();var url="#"+ owner+"/"+ project+"/"+ tag;var badgeSvg="/v/"+ toShortGroup(domain,owner)+"/"+ project+".svg";$("#badge").attr('src',badgeSvg);var badge=badgeMd.replace(/\$owner/mg,toShortGroup(domain,owner)).replace(/\$project/mg,project);$("#badgeMarkdown").html(badge);$("#twitterDiv").html('')
$("#twitterDiv").append('<a id="share" href="https://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a>');$("#share").attr('data-url','http://jitpack.io/'+ url);$("#share").attr('data-text','Version '+ tag+' of '+ project+' is now available on ');$("#versionA").attr('href',url);if(twttr.widgets)
twttr.widgets.load();}
var delete_cookie=function(name){document.cookie=name+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';};function loadFromUrl(){var hash=window.location.hash||" ";hash=hash.substring(1);var parts=hash.split("/");if(parts.length>1){owner=parts[0];if(owner.indexOf('.')>=0){var grpParts=owner.split('.');owner=grpParts[grpParts.length-1];domain=grpParts.slice(0,grpParts.length-1).reverse().join('.');}
project=parts[1];var tag=parts[2];var type=parts[3];var url=(domain?domain+'.':'')+ owner+"/"+ project
if(domain===defaultDomain){url=owner+"/"+ project;}
$("#repoUrl").val(parts[0]+'/'+ parts[1]);if(tag){showModuleDep(tag,type);$('html, body').animate({scrollTop:$("#howto").offset().top});}else{lookup();}}
if(hash==="logout"){logout();}
if(hash==="success"){$("#subLink").html('Completed!');}
if(hash==="loggedIn"){}}
var dep="\t&lt;dependency>\n"+"\t    &lt;groupId>$owner&lt;/groupId>\n"+"\t    &lt;artifactId>$project&lt;/artifactId>\n"+"\t    &lt;version>$tag&lt;/version>\n"+"\t&lt;/dependency>\n";var depSbt="\t\n\t"+'libraryDependencies += "$owner" % "$project" % "$tag"'+"\t\n";var depLein="\t\n\t"+':dependencies [[$owner/$project "$tag"]]'+"\t\n";var depGradle="\tdependencies {\n"+"\t        compile '$owner:$project:$tag'\n"+"\t}\n";var badgeMd="[![](https://jitpack.io/v/$owner/$project.svg)](https://jitpack.io/#$owner/$project)";function getItem(item){if(localStorage)return localStorage.getItem(item);}
function setItem(item,val){if(localStorage){try{localStorage.setItem(item,val);}catch(e){}}}
function logout(){token=null;user=null;isAuth=null;window.location.href="/logout";}
function login(){if(getItem("isAuth")=="true"||window.location.href.indexOf("/private")>-1)
window.location.href="/auth";else
window.location.href="/login";}
function subscribe(e){var plan=$(e.target).attr('value');$("#os0").attr('value',plan);if(user)$("#gitOwnerUrl").val('https://github.com/'+ user);$('#accounts').load("/private/accounts.html",function(){$(".subDetails").show();$(".startTrial").focus();});}
function startTrial(e){var gitOwnerUrl=$("#gitOwnerUrl").val();var plan=$("#os0").attr('value');var url="/api/service/trial?gitOwnerUrl="+ gitOwnerUrl+"&login="+ user+"&plan="+ plan;apiCall(url,trialCallback,trialCallback);}
function paypalPay(e){var gitOwnerUrl=$("#gitOwnerUrl").val();$("#os1").attr('value',gitOwnerUrl);$("#custom").attr('value',user||"");$('.subForm').submit();if(ga)ga('send','event','subscribe','click');}
function authorize(){delete_cookie("sessionId");window.location.href="/auth";}
function goToPrivate(){window.location.href="/private#auth";}
function getRandomPage(){return Math.floor(0.5+ Math.random())+ 1;}
function removeBuild(version,element){var url="/api/builds/"+ toGroup(domain,owner)+'/'+ project+'/'+ version;var cb=function(data){var group=toGroup(domain,owner);delete builds[group][project][version];showReleases(releases);if(intervalID)clearInterval(intervalID);};$.ajax({url:url,dataType:"json",type:"DELETE",success:cb,error:showError});}
function init(){}
function toggleCollab(){if($('#projDetails').is(":visible")){$('#projDetails').slideToggle();return;}
showCollab(function(){$('#projDetails').slideToggle();});}
function showCollab(cb){$.get("/w/templates/settings.tpl",function(template){var compiled=Handlebars.compile(template);var rendered=compiled(settings);$('#projDetails').html(rendered);if(cb)cb();});}
$(function(){$("#lookupBtn").on('click',onLookup);$("#privateBtn").on('click',goToPrivate);$("#settings").on('click','#settingsBtn',toggleCollab);$("#projDetails").on('click',"#addCollab",function(){var collab=$("#collabTxt").val();if(!collab)return;var collabs=settings.collaborators||[];collabs.push({"login":collab});updateSettings({"collaborators":collabs},showCollab);});$("#projDetails").on('click','.removeCollab',function(e){var collab=$(e.target).attr('login');var collabs=$.grep(settings.collaborators,function(col){return col.login!=collab;});updateSettings({"collaborators":collabs},showCollab);});$("#versionTable").hide();$("#versionTable").on('click','.getBtn',function(){$('html, body').animate({scrollTop:$("#howto").offset().top},1000);ga('send','event','getit','click');});$("#versionTable").on('click','.removeBuild',function(e){var ver=$(e.target).attr('ver');removeBuild(ver);});$("#settings").on('click','.lock',function(){toggleLock();});if(getItem("repoUrl")){$("#repoUrl").val(getItem("repoUrl"));}
$("#repoUrl").keypress(function(e){if(e.which==13){onLookup();}});$(".dep").on('click',function(e){var type=$(e.target).attr("href").substring(1);$(".depTab").removeClass('active');$("."+ type).addClass('active');setItem("depType",type);});if(getItem("depType")){$("a[href='#"+ getItem("depType")+"']").tab('show');$(".depTab").removeClass('active');$("."+ getItem("depType")).addClass('active');}
$(".subscribeBtn").on('click',subscribe);var tweetPage=getRandomPage();$('#quote-carousel').load("w/tweets"+ tweetPage+".html?v=3",function(){$('#quote-carousel').carousel({pause:true,interval:5000});});$('#lookupForm').submit(function(evt){evt.preventDefault();});$("#signOut").on('click',logout);$("#signIn").on('click',login);$("#authBtn").on('click',authorize);$("#versionTable").on('click','#commitsLink',function(evt){evt.preventDefault();viewType=="Commits"?lookup():showCommits();});$("#versionTable").on('click','#buildsLink',function(evt){evt.preventDefault();showBuildsView();});$('#modulesList').on('click','li a',function(e){onModuleChange($(this).text());e.preventDefault();return true;});$(".nolink").click(function(e){e.preventDefault();});ajaxCall("/user.json",function(data){if(data.attributes){var attrs=data.attributes;token=attrs.access_token;user=attrs.login;isAuth=data.isAuth;setItem("isAuth",isAuth);setItem("user",user);if(attrs.email){$("#entEmailText").val(attrs.email);}
$("#username").html(user);$("#signIn").hide();if($("#authGradle").length>0&&isAuth){$("#tokenPar").html(token);var html=$("#authGradle").html().replace('AUTHENTICATION_TOKEN',token);$("#authGradle").html(html);html=$("#authMvn").html().replace('AUTHENTICATION_TOKEN',token);$("#authMvn").html(html);$("#ghUser").val(user);}
$("#authToken").html(token);$("#signOut").show();}else{$("#signOut").hide();}
if("https://jitpack.io"!==window.location.origin){$("code").each(function(){var code=$(this).html();code=code.replace("https://jitpack.io",window.location.origin);badgeMd=badgeMd.replace(/https:\/\/jitpack.io/g,window.location.origin);$(this).html(code);})}
loadFromUrl();window.onhashchange=loadFromUrl;});});