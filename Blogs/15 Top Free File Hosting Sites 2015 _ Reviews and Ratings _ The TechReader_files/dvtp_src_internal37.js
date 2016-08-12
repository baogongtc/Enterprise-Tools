function dv_rolloutManager(handlersDefsArray, baseHandler) {
    this.handle = function () {
        var errorsArr = [];

        var handler = chooseEvaluationHandler(handlersDefsArray);
        if (handler) {
            var errorObj = handleSpecificHandler(handler);
            if (errorObj === null)
                return errorsArr;
            else {
                var debugInfo = handler.onFailure();
                if (debugInfo) {
                    for (var key in debugInfo) {
                        if (debugInfo.hasOwnProperty(key)) {
                            if (debugInfo[key] !== undefined || debugInfo[key] !== null) {
                                errorObj[key] = encodeURIComponent(debugInfo[key]);
                            }
                        }
                    }
                }
                errorsArr.push(errorObj);
            }
        }

        var errorObjHandler = handleSpecificHandler(baseHandler);
        if (errorObjHandler) {
            errorObjHandler['dvp_isLostImp'] = 1;
            errorsArr.push(errorObjHandler);
        }
        return errorsArr;
    }

    function handleSpecificHandler(handler) {
        var url;
        var errorObj = null;

        try {
            url = handler.createRequest();
            if (url) {
                if (!handler.sendRequest(url))
                    errorObj = createAndGetError('sendRequest failed.',
                        url,
                        handler.getVersion(),
                        handler.getVersionParamName(),
                        handler.dv_script);
            } else
                errorObj = createAndGetError('createRequest failed.',
                    url,
                    handler.getVersion(),
                    handler.getVersionParamName(),
                    handler.dv_script,
                    handler.dvScripts,
                    handler.dvStep,
                    handler.dvOther
                    );
        }
        catch (e) {
            errorObj = createAndGetError(e.name + ': ' + e.message, url, handler.getVersion(), handler.getVersionParamName(), (handler ? handler.dv_script : null));
        }

        return errorObj;
    }

    function createAndGetError(error, url, ver, versionParamName, dv_script, dvScripts, dvStep, dvOther) {
        var errorObj = {};
        errorObj[versionParamName] = ver;
        errorObj['dvp_jsErrMsg'] = encodeURIComponent(error);
        if (dv_script && dv_script.parentElement && dv_script.parentElement.tagName && dv_script.parentElement.tagName == 'HEAD')
            errorObj['dvp_isOnHead'] = '1';
        if (url)
            errorObj['dvp_jsErrUrl'] = url;
        if (dvScripts) {
            var dvScriptsResult = '';
            for (var id in dvScripts) {
                if (dvScripts[id] && dvScripts[id].src) {
                    dvScriptsResult += encodeURIComponent(dvScripts[id].src) + ":" + dvScripts[id].isContain + ",";
                }
            }
            //errorObj['dvp_dvScripts'] = encodeURIComponent(dvScriptsResult);
           // errorObj['dvp_dvStep'] = dvStep;
           // errorObj['dvp_dvOther'] = dvOther;
        }
        return errorObj;
    }

    function chooseEvaluationHandler(handlersArray) {
        var config = window._dv_win.dv_config;
        var index = 0;
        var isEvaluationVersionChosen = false;
        if (config.handlerVersionSpecific) {
            for (var i = 0; i < handlersArray.length; i++) {
                if (handlersArray[i].handler.getVersion() == config.handlerVersionSpecific) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }
        else if (config.handlerVersionByTimeIntervalMinutes) {
            var date = config.handlerVersionByTimeInputDate || new Date();
            var hour = date.getUTCHours();
            var minutes = date.getUTCMinutes();
            index = Math.floor(((hour * 60) + minutes) / config.handlerVersionByTimeIntervalMinutes) % (handlersArray.length + 1);
            if (index != handlersArray.length) //This allows a scenario where no evaluation version is chosen
                isEvaluationVersionChosen = true;
        }
        else {
            var rand = config.handlerVersionRandom || (Math.random() * 100);
            for (var i = 0; i < handlersArray.length; i++) {
                if (rand >= handlersArray[i].minRate && rand < handlersArray[i].maxRate) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }

        if (isEvaluationVersionChosen == true && handlersArray[index].handler.isApplicable())
            return handlersArray[index].handler;
        else
            return null;
    }    
}

function getCurrentTime() {
    "use strict";
    if (Date.now) {
        return Date.now();
    }
    return (new Date()).getTime();
}

function doesBrowserSupportHTML5Push() {
    "use strict";
    return typeof window.parent.postMessage === 'function' && window.JSON;
}

function dv_GetParam(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS, 'i');
    var results = regex.exec(url);
    if (results == null)
        return null;
    else
        return results[1];
}

function dv_GetKeyValue(url) {
    var keyReg = new RegExp(".*=");
    var keyRet = url.match(keyReg)[0];
    keyRet = keyRet.replace("=", "");

    var valReg = new RegExp("=.*");
    var valRet = url.match(valReg)[0];
    valRet = valRet.replace("=", "");

    return { key: keyRet, value: valRet };
}

function dv_Contains(array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

function dv_GetDynamicParams(url, prefix) {
    try {
        prefix = (prefix != undefined && prefix != null) ? prefix : 'dvp';
        var regex = new RegExp("[\\?&](" + prefix + "_[^&]*=[^&#]*)", "gi");
        var dvParams = regex.exec(url);

        var results = [];
        while (dvParams != null) {
            results.push(dvParams[1]);
            dvParams = regex.exec(url);
        }
        return results;
    }
    catch (e) {
        return [];
    }
}

function dv_createIframe() {
    var iframe;
    if (document.createElement && (iframe = document.createElement('iframe'))) {
        iframe.name = iframe.id = 'iframe_' + Math.floor((Math.random() + "") * 1000000000000);
        iframe.width = 0;
        iframe.height = 0;
        iframe.style.display = 'none';
        iframe.src = 'about:blank';
    }

    return iframe;
}

function dv_GetRnd() {
    return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 16);
}

function dv_SendErrorImp(serverUrl, errorsArr) {

    for (var j = 0; j < errorsArr.length; j++) {
        var errorObj = errorsArr[j];
        var errorImp = dv_CreateAndGetErrorImp(serverUrl, errorObj);
        dv_sendImgImp(errorImp);
    }
}

function dv_CreateAndGetErrorImp(serverUrl, errorObj) {
    var errorQueryString = '';
    for (var key in errorObj) {
        if (errorObj.hasOwnProperty(key)) {
            if (key.indexOf('dvp_jsErrUrl') == -1) {
                errorQueryString += '&' + key + '=' + errorObj[key];
            } else {
                var params = ['ctx', 'cmp', 'plc', 'sid'];
                for (var i = 0; i < params.length; i++) {
                    var pvalue = dv_GetParam(errorObj[key], params[i]);
                    if (pvalue) {
                        errorQueryString += '&dvp_js' + params[i] + '=' + pvalue;
                    }
                }
            }
        }
    }

    var windowProtocol = 'http:';
    var sslFlag = '&ssl=0';
    if (window._dv_win.location.protocol === 'https:') {
        windowProtocol = 'https:';
        sslFlag = '&ssl=1';
    }

    var errorImp = windowProtocol + '//' + serverUrl + sslFlag + errorQueryString;
    return errorImp;
}

function dv_sendImgImp(url) {
    (new Image()).src = url;
}

function dv_getPropSafe(obj, propName) {
    try {
        if (obj)
            return obj[propName];
    } catch (e) {
    }
}

function dvType() {
    var that = this;
    var eventsForDispatch = {};
    this.t2tEventDataZombie = {};

    this.processT2TEvent = function (data, tag) {
        try {
            if (tag.ServerPublicDns) {
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;

                if (!tag.uniquePageViewId) {
                    tag.uniquePageViewId = data.uniquePageViewId;
                }

                tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
                $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
            }
        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tProcess=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (ex) {
            }
        }
    };

    this.processTagToTagCollision = function (collision, tag) {
        var i;
        for (i = 0; i < collision.eventsToFire.length; i++) {
            this.pubSub.publish(collision.eventsToFire[i], tag.uid);
        }
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        tpsServerUrl += '&colltid=' + collision.allReasonsForTagBitFlag;

        for (i = 0; i < collision.reasons.length; i++) {
            var reason = collision.reasons[i];
            tpsServerUrl += '&' + reason.name + "ms=" + reason.milliseconds;
        }

        if (collision.thisTag) {
            tpsServerUrl += '&tlts=' + collision.thisTag.t2tLoadTime;
        }
        if (tag.uniquePageViewId) {
            tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
        }
        $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    this.processBSIdFound = function (bsID, tag) {
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        tpsServerUrl += '&bsimpid=' + bsID;
        if (tag.uniquePageViewId) {
            tpsServerUrl += '&upvid=' + tag.uniquePageViewId;
        }
        $dv.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    this.processBABSVerbose = function (verboseReportingValues, tag) {
        var queryString = "";
        //get each frame, translate


        var dvpPrepend = "&dvp_BABS_";
        queryString += dvpPrepend + 'NumBS=' + verboseReportingValues.bsTags.length;

        for (var i = 0; i < verboseReportingValues.bsTags.length; i++) {
            var thisFrame = verboseReportingValues.bsTags[i];

            queryString += dvpPrepend + 'GotCB' + i + '=' + thisFrame.callbackReceived;
            queryString += dvpPrepend + 'Depth' + i + '=' + thisFrame.depth;

            if (thisFrame.callbackReceived) {
                if (thisFrame.bsAdEntityInfo && thisFrame.bsAdEntityInfo.comparisonItems) {
                    for (var itemIndex = 0; itemIndex < thisFrame.bsAdEntityInfo.comparisonItems.length; itemIndex++) {
                        var compItem = thisFrame.bsAdEntityInfo.comparisonItems[itemIndex];
                        queryString += dvpPrepend + "tag" + i + "_" + compItem.name + '=' + compItem.value;
                    }
                }
            }
        }

        if (queryString.length > 0) {
            var tpsServerUrl = '';
            if (tag) {
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
            }
            var requestString = tpsServerUrl + queryString;
            $dv.domUtilities.addImage(requestString, tag.tagElement.parentElement);
        }
    };

    var messageEventListener = function (event) {
        try {
            var timeCalled = getCurrentTime();
            var data = window.JSON.parse(event.data);
            if (!data.action) {
                data = window.JSON.parse(data);
            }
            var myUID;
            var visitJSHasBeenCalledForThisTag = false;
            if ($dv.tags) {
                for (var uid in $dv.tags) {
                    if ($dv.tags.hasOwnProperty(uid) && $dv.tags[uid] && $dv.tags[uid].t2tIframeId === data.iFrameId) {
                        myUID = uid;
                        visitJSHasBeenCalledForThisTag = true;
                        break;
                    }
                }
            }

            var tag;
            switch (data.action) {
                case 'uniquePageViewIdDetermination':
                    if (visitJSHasBeenCalledForThisTag) {
                        $dv.processT2TEvent(data, $dv.tags[myUID]);
                        $dv.t2tEventDataZombie[data.iFrameId] = undefined;
                    }
                    else {
                        data.wasZombie = 1;
                        $dv.t2tEventDataZombie[data.iFrameId] = data;
                    }
                    break;
                case 'maColl':
                    tag = $dv.tags[myUID];
                    if (!tag.uniquePageViewId) {
                        tag.uniquePageViewId = data.uniquePageViewId;
                    }
                    data.collision.commonRecievedTS = timeCalled;
                    $dv.processTagToTagCollision(data.collision, tag);
                    break;
                case 'bsIdFound':
                    tag = $dv.tags[myUID];
                    if (!tag.uniquePageViewId) {
                        tag.uniquePageViewId = data.uniquePageViewId;
                    }
                    $dv.processBSIdFound(data.id, tag);
                    break;
                case 'babsVerbose':
                    try {
                        tag = $dv.tags[myUID];
                        $dv.processBABSVerbose(data, tag);
                    } catch (err) {
                    }
                    break;
            }

        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tListener=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (ex) {
            }
        }
    };

    if (window.addEventListener)
        addEventListener("message", messageEventListener, false);
    else
        attachEvent("onmessage", messageEventListener);

    this.pubSub = new function () {
        var subscribers = [];
        var prerenderHistory={};

        var publishRtnEvent = function(eventName,uid){
            var actionsResults = [];
            if (subscribers[eventName + uid] instanceof Array)
                for (var i = 0; i < subscribers[eventName + uid].length; i++) {
                    var funcObject = subscribers[eventName + uid][i];
                    if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                        var isSucceeded = runSafely(function () {
                            return funcObject.Func(uid);
                        });
                        actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                    }
                }
            return actionsResults;
        }

        this.publishHistoryRtnEvent = function (uid) {
            var actionsResults = [];

            if (prerenderHistory && prerenderHistory[uid]){
                for (var key in prerenderHistory[uid]){
                    if (prerenderHistory[uid][key])
                        actionsResults.push.apply(actionsResults,publishRtnEvent(prerenderHistory[uid][key],uid));
                }
                prerenderHistory[uid]=[];
            }

            return actionsResults;
        };

        this.subscribe = function (eventName, uid, actionName, func) {
            if (!subscribers[eventName + uid])
                subscribers[eventName + uid] = [];
            subscribers[eventName + uid].push({Func: func, ActionName: actionName});
        };

        this.publish = function (eventName, uid) {
            var actionsResults = [];
            if (eventName && uid){
                if (that.isEval == undefined) {
                    actionsResults = publishRtnEvent(eventName, uid);
                }
                else {
                    if ($dv && $dv.tags[uid] && $dv.tags[uid].prndr) {
                        prerenderHistory[uid] = prerenderHistory[uid] || [];
                        prerenderHistory[uid].push(eventName);
                    }
                    else {
                        actionsResults.push.apply(actionsResults, this.publishHistoryRtnEvent(uid));
                        actionsResults.push.apply(actionsResults, publishRtnEvent(eventName, uid));
                    }
                }
            }

            return actionsResults.join('&');
        };
    };

    this.domUtilities = new function () {
        function getDefaultParent() {
            return document.body || document.head || document.documentElement;
        }

        this.addImage = function (url, parentElement) {
            parentElement = parentElement || getDefaultParent();
            var image = parentElement.ownerDocument.createElement("img");
            image.width = 0;
            image.height = 0;
            image.style.display = 'none';
            image.src = appendCacheBuster(url);
            parentElement.insertBefore(image, parentElement.firstChild);

        };

        this.addScriptResource = function (url, parentElement) {
            parentElement = parentElement || getDefaultParent();
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.src = appendCacheBuster(url);
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addScriptCode = function (srcCode, parentElement) {
            parentElement = parentElement || getDefaultParent();
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.innerHTML = srcCode;
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addHtml = function (srcHtml, parentElement) {
            parentElement = parentElement || getDefaultParent();
            var divElem = parentElement.ownerDocument.createElement("div");
            divElem.style = "display: inline";
            divElem.innerHTML = srcHtml;
            parentElement.insertBefore(divElem, parentElement.firstChild);
        }
    };

    this.resolveMacros = function (str, tag) {
        var viewabilityData = tag.getViewabilityData();
        var viewabilityBuckets = viewabilityData && viewabilityData.buckets ? viewabilityData.buckets : {};
        var upperCaseObj = objectsToUpperCase(tag, viewabilityData, viewabilityBuckets);
        var newStr = str.replace('[DV_PROTOCOL]', upperCaseObj.DV_PROTOCOL);
        newStr = newStr.replace('[PROTOCOL]', upperCaseObj.PROTOCOL);
        newStr = newStr.replace(/\[(.*?)\]/g, function (match, p1) {
            var value = upperCaseObj[p1];
            if (value === undefined || value === null)
                value = '[' + p1 + ']';
            return encodeURIComponent(value);
        });
        return newStr;
    };

    this.settings = new function () {
    };

    this.tagsType = function () {
    };

    this.tagsPrototype = function () {
        this.add = function (tagKey, obj) {
            if (!that.tags[tagKey])
                that.tags[tagKey] = new that.tag();
            for (var key in obj)
                that.tags[tagKey][key] = obj[key];
        }
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () {
    }
    this.tagPrototype = function () {
        this.set = function (obj) {
            for (var key in obj)
                this[key] = obj[key];
        };

        this.getViewabilityData = function () {
        };
    };

    this.tag.prototype = new this.tagPrototype();
    this.tag.prototype.constructor = this.tag;

    this.registerEventCall = function (impressionId, eventObject, timeoutMs, isRegisterEnabled) {
        if (typeof isRegisterEnabled !== 'undefined' && isRegisterEnabled === true) {
            addEventCallForDispatch(impressionId, eventObject);

            if (typeof timeoutMs === 'undefined' || timeoutMs == 0 || isNaN(timeoutMs))
                dispatchEventCallsNow(impressionId, eventObject);
            else {
                if (timeoutMs > 2000)
                    timeoutMs = 2000;

                var that = this;
                setTimeout(
                    function () {
                        that.dispatchEventCalls(impressionId);
                    }, timeoutMs);
            }

        } else {
            var url = this.tags[impressionId].protocol + '//' + this.tags[impressionId].ServerPublicDns + "/event.gif?impid=" + impressionId + '&' + createQueryStringParams(eventObject);
            this.domUtilities.addImage(url, this.tags[impressionId].tagElement.parentNode);
        }
    };
    var mraidObjectCache;
    this.getMraid = function () {
        var context = window._dv_win || window;
        var iterationCounter = 0;
        var maxIterations = 20;

        function getMraidRec (context) {
            iterationCounter++;
            var isTopWindow = context.parent == context;
            if (context.mraid || isTopWindow) {
                return context.mraid;
            } else {
                return ( iterationCounter <= maxIterations ) && getMraidRec(context.parent);
            }
        }

        try {
            return mraidObjectCache = mraidObjectCache || getMraidRec(context);
        } catch (e) {
        }
    };

    var dispatchEventCallsNow = function (impressionId, eventObject) {
        addEventCallForDispatch(impressionId, eventObject);
        dispatchEventCalls(impressionId);
    };

    var addEventCallForDispatch = function (impressionId, eventObject) {
        for (var key in eventObject) {
            if (typeof eventObject[key] !== 'function' && eventObject.hasOwnProperty(key)) {
                if (!eventsForDispatch[impressionId])
                    eventsForDispatch[impressionId] = {};
                eventsForDispatch[impressionId][key] = eventObject[key];
            }
        }
    };

    this.dispatchRegisteredEventsFromAllTags = function () {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] !== 'function' && typeof this.tags[impressionId] !== 'undefined')
                this.dispatchEventCalls(impressionId);
        }
    };

    this.dispatchEventCalls = function (impressionId) {
        if (typeof eventsForDispatch[impressionId] !== 'undefined' && eventsForDispatch[impressionId] != null) {
            var url = this.tags[impressionId].protocol + '//' + this.tags[impressionId].ServerPublicDns + "/event.gif?impid=" + impressionId + '&' + createQueryStringParams(eventsForDispatch[impressionId]);
            this.domUtilities.addImage(url, this.tags[impressionId].tagElement.parentElement);
            eventsForDispatch[impressionId] = null;
        }
    };


    if (window.addEventListener) {
        window.addEventListener('unload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.addEventListener('beforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.attachEvent('onbeforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else {
        window.document.body.onunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
        window.document.body.onbeforeunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
    }

    var createQueryStringParams = function (values) {
        var params = '';
        for (var key in values) {
            if (typeof values[key] !== 'function') {
                var value = encodeURIComponent(values[key]);
                if (params === '')
                    params += key + '=' + value;
                else
                    params += '&' + key + '=' + value;
            }
        }

        return params;
    };

    this.Enums = {
        BrowserId: {Others: 0, IE: 1, Firefox: 2, Chrome: 3, Opera: 4, Safari: 5},
        TrafficScenario: {OnPage: 1, SameDomain: 2, CrossDomain: 128}
    };

    this.CommonData = {};

    var runSafely = function (action) {
        try {
            var ret = action();
            return ret !== undefined ? ret : true;
        } catch (e) {
            return false;
        }
    };

    var objectsToUpperCase = function () {
        var upperCaseObj = {};
        for (var i = 0; i < arguments.length; i++) {
            var obj = arguments[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    upperCaseObj[key.toUpperCase()] = obj[key];
                }
            }
        }
        return upperCaseObj;
    };

    var appendCacheBuster = function (url) {
        if (url !== undefined && url !== null && url.match("^http") == "http") {
            if (url.indexOf('?') !== -1) {
                if (url.slice(-1) == '&')
                    url += 'cbust=' + dv_GetRnd();
                else
                    url += '&cbust=' + dv_GetRnd();
            }
            else
                url += '?cbust=' + dv_GetRnd();
        }
        return url;
    };
}

function dv_baseHandler(){function Wa(){try{return{vdcv:8,vdcd:eval(function(a,d,b,f,i,A){i=function(a){return(a<d?"":i(parseInt(a/d)))+(35<(a%=d)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;b--;)A[i(b)]=f[b]||i(b);f=[function(a){return A[a]}];i=function(){return"\\w+"};b=1}for(;b--;)f[b]&&(a=a.replace(RegExp("\\b"+i(b)+"\\b","g"),f[b]));return a}("(v(){1i{m Q=[1h];1i{m 6=1h;2n(6!=6.1Q&&6.1k.2i.2h){Q.1l(6.1k);6=6.1k}}1f(e){}v 1m(H){1i{W(m i=0;i<Q.1j;i++){11(H(Q[i]))b Q[i]==1h.1Q?-1:1}b 0}1f(e){b 1g}}v 1G(K){b 1m(v(6){b 6[K]!=1g})}v 3i(6,1E,H){W(m K 2F 6){11(K.1N(1E)>-1&&(!H||H(6[K])))b 3x}b 2R}v g(s){m h=\"\",t=\"36.;j&38}3d/0:31'32=B(30-2Z!,2X)2Y\\\\{ >33+34\\\"39<\";W(i=0;i<s.1j;i++)f=s.1R(i),e=t.1N(f),0<=e&&(f=t.1R((e+41)%37)),h+=f;b h}m c=['35\"18-2W\"2V\"2K','p','l','2L&p','p','{','-5,!u<}\"2J}\"','p','J','-2I}\"<2G','p','=o',':<2H}T}<\"','p','h','\\\\<}4-2}\"E(d\"G}8?\\\\<}4-2}\"E(d\"1w<N\"[1d*1t\\\\\\\\1s-2N<1r\"1n\"2O]V}C\"O','e','2T','\"1o\\\\<}1u\"I<-2U\"1p\"5\"2S}1x<}2P\"1o\\\\<}10}1a>19-13}2}\"1p\"5\"2Q}1x<}3a','e','=J','17}U\"<5}3b\"y}F\\\\<}[3v}3w:3u]9}7\\\\<}[t:1P\"3t]9}7\\\\<}[3r})5-u<}t]9}7\\\\<}[3s]9}7\\\\<}[3y}3C]9}3B','e','3z',':3A}<\"D-3q/2M','p','3p','\\\\<}w<U/X}7\\\\<}w<U/!9}8','e','=l','\\\\<}1q!3g\\\\<}1q!3h)p?\"k','e','3f','3e:,','p','3c','17}U\"<5}1S:3j\\\\<}4-2}\"3o\".42-2}\"3n-3m<N\"3k<3l<3E}C\"3H<2B<23[<]E\"27\"18}\"2}\"1W[<]E\"27\"18}\"2}\"E<}1e&1U\"1\\\\<}14\\\\1X\\\\<}14\\\\10}1a>19-13}2}\"z<26-2}\"22\"2.42-2}\"1Z=20\"y}24\"y}P=25','e','x','1Y)','p','+','\\\\<}1y)u\"28\\\\<}1y)u\"1V?\"k','e','21','\\\\<}4-2}\"E(d\"G}8?\\\\<}4-2}\"E(d\"2E<:[\\\\2v}}2M][\\\\2u,5}2]2t}C\"O','e','2q',':2r<Z','p','2w','\\\\<}E\"2x\\\\<}E\"2C-29?\"k','e','2A','1D\\\\<}2y:,2z}U\"<5}2p\"y}2o<2e<2g}2d','e','2c','\\\\<}w<U/2a&1K\"E/1O\\\\<}w<U/2b}C\"1T\\\\<}w<U/f[&1K\"E/1O\\\\<}w<U/2m[S]]1u\"2l}8?\"k','e','2j','2k}3D}43>2s','p','4Y','\\\\<}16:<15}s<55}7\\\\<}16:<15}s<4U<}f\"u}1I\\\\<}1J\\\\<}16:<15}s<C[S]E:1P\"X}8','e','l{','4G\\'<}14\\\\T}4B','p','==','\\\\<}E\"2f\"4A\\\\<}4H<4I?\"k','e','o{',' &D)&4K','p','4F','\\\\<}E.:2}\"c\"<4M}7\\\\<}4L}7\\\\<}4J<}f\"u}1I\\\\<}1J\\\\<}10:}\"9}8','e','3F','\\\\<}4-2}\"E(d\"G}8?\\\\<}4-2}\"E(d\"1w<N\"[1d*1t\\\\\\\\1s-1r\"1n/4O<4S]V}C\"O','e','4R',')4Q!4P}s<C','p','4z','\\\\<}1z.L>g;D\\'T)Y.4y\\\\<}1z.L>g;4x&&4C>D\\'T)Y.I?\"k','e','l=','D:<Z<:5','p','4E','\\\\<}9\\\\<}E\"4D\\\\<}n\"<5}1v\"1F}/1B\\\\<}4-2}\"1M<}1e&4T\\\\<}n\"<5}1c\"}u-54=?17}U\"<5}1S\"51\"y}52\\\\<}4Z}\"n\"<5}50\"4X\"y}F\"4V','e','4W','53-N:4v','p','3X','\\\\<}1b\"3W\\\\<}1b\"3V\"<5}3U\\\\<}1b\"3Y||\\\\<}3Z?\"k','e','h+','\\\\<}n\"<5}1c\"}u-45\\\\<}10}1a>19-13}2}\"q\\\\<}n\"<5}1c\"}u-2D','e','=S','c>A','p','=','\\\\<}4-2}\"E(d\"G}8?\\\\<}4-2}\"E(d\"1A<:[<Z*1t:Z,1C]F:<44[<Z*4w]V}C\"O','e','h=','40-2}\"n\"<5}9}8','e','3T','\\\\<}4-2}\"E(d\"G}8?\\\\<}4-2}\"E(d\"1A<:[<Z*3S}1C]R<-C[1d*3L]V}C\"O','e','3K','1D\\\\<}1H\"\\\\3J\\\\<}1H\"\\\\3G','e','3I','\\\\<}3M}Z<}3N}7\\\\<}3R<f\"9}7\\\\<}3Q/<}C!!3P<\"42.42-2}\"X}7\\\\<}3O\"<5}9}8?\"k','e','46','T>;47\"<4f','p','h{','\\\\<}4o\\\\<}4n}<(4m?\"k','e','4l','\\\\<}4p<4q a}4u}7\\\\<}E}4t\"4s 4r- X}8','e','4k','4j\\\\<}n\"<5}4b}4a\"49&M<C<}48}C\"1T\\\\<}n\"<5}1v\"1F}/1B\\\\<}4-2}\"4c\\\\<}4-2}\"1M<}1e&4d[S]4i=?\"k','e','l+'];m 12=[];W(m j=0;j<c.1j;j+=3){m r=c[j+1]=='p'?1G(g(c[j])):1m(v(6){b 4h(g(c[j]))});11(r>0||r<0)12.1l(r*1L(g(c[j+2])));4g 11(r==1g)12.1l(-4e*1L(g(c[j+2])))}b 12}1f(e){b[-4N]}})();",
62,316,"    EZ5Ua  win a44OO a44 P1  return  a2MQ0242U       Ma2vsu4f2  var E45Uu        function EBM  aM     _   5ML44P1 func   prop    3RSvsu4f2  wins     WDE42 for fP1   E2 if results N5 Z5 ZU5 E_ qsa g5 Tg5 U5Z2c EuZ E35f fMU Z27 catch null window try length parent push ch MuU QN25sF ENM5 E_Y kN7 BuZfEU5  Ef2 E3M2sP1tuB5a 5ML44qWfUM Z2s EufB EcIT_0 5ML44qWZ tOO _t U5q str vB4u ex zt__ U25sF ELMMuQOO BV2U parseInt EM2s2MM2ME indexOf 2Qfq uf top charAt qD8 3RSOO sqt ujuM OO2 E2fUuN2z21 Ld0 tDRm DM2 oo EUM2u sq2 PSHM2 HnDqD 1Z5Ua  u_Z2U5Z2OO NTZ fOO fDE42 lJ a44nD f32M_faB  ZP1 href location ox M2 aNP1 fD while F5ENaB4 q5D8M2 eS u_faB  tDE42 Um UmBu hJ UIuCTZOO zt_M tzsa oJ 99D UT  5ML44qtZ in u4f ZBu fgM2Z2 g5a Q42 60  kUM EVft 2ZtOO QN2P1ta false QN211ta eo 25a 2Z0 Na LnG 5r uic2EHVO Q6T s7 Kt NhCZ lkSvfxWX C2 Ue 82 PzA 1bqyJIma 2Zt qD8M2 he YDoMw8FRp3gd94 _M lS AOO AEBuf2g co uMF21 tDHs5Mq 1SH 2qtfUM fbQIuCpu EC2 ho uM tUZ tUBt r5Z2t 24t tf5a ZA2 true tB ee u_a a44nDqD LMMt 5IMu i2E42 ll B_UB_tD  lh B__tDOOU5q oe 1tNk4CEN3Nt E4u CcM4P1 Eu445Uu gI ENuM Ef2A 1tB2uU5 eh OOq CfEf2U CfOO le CfE35aMfUuN E35aMfUuND Z5Ua   fY45 Z25 2P1 lo _c fzuOOuE42 5M U2f Eu EM2s2MM2MOO squ 100  else eval D11m u1 lx ol a2TZ E_NUCEYp_c E_NUCOO EUuU 4Zf M5 5M2f _f UP1 _ZBf 1tfMmN4uQ2Mt _I IOO oh fNNOO s5 AbL 5NOO hh hl UufUuZ2 E0N2U u4buf2Jl ErF rLTp ErP1 4P1 999 kZ 4Qg5 2u4 eJ fN4uQLZfEVft sq CF Ma2nnDqDvsu4f2 oS U3q2D8M2 hx ENuM2 E3M2szsu4f2nUu MQ8M2 FN1 ___U 2DRm CP1".split(" "),
0,{}))}}catch(d){return{vdcv:8,vdcd:"0"}}}function ea(d){if(window._dv_win.document.body)return window._dv_win.document.body.insertBefore(d,window._dv_win.document.body.firstChild),!0;var a=0,e=function(){if(window._dv_win.document.body)try{window._dv_win.document.body.insertBefore(d,window._dv_win.document.body.firstChild)}catch(b){}else a++,150>a&&setTimeout(e,20)};setTimeout(e,20);return!1}function fa(d){var a;if(document.createElement&&(a=document.createElement("iframe")))a.name=a.id=window._dv_win.dv_config.emptyIframeID||
"iframe_"+Math.floor(1E12*(Math.random()+"")),a.width=0,a.height=0,a.style.display="none",a.src=d;return a}function za(d){var a={};try{for(var e=RegExp("[\\?&]([^&]*)=([^&#]*)","gi"),b=e.exec(d);null!=b;)"eparams"!==b[1]&&(a[b[1]]=b[2]),b=e.exec(d);return a}catch(f){return a}}function Xa(d){try{if(1>=d.depth)return{url:"",depth:""};var a,e=[];e.push({win:window._dv_win.top,depth:0});for(var b,f=1,i=0;0<f&&100>i;){try{if(i++,b=e.shift(),f--,0<b.win.location.toString().length&&b.win!=d)return 0==b.win.document.referrer.length||
0==b.depth?{url:b.win.location,depth:b.depth}:{url:b.win.document.referrer,depth:b.depth-1}}catch(A){}a=b.win.frames.length;for(var B=0;B<a;B++)e.push({win:b.win.frames[B],depth:b.depth+1}),f++}return{url:"",depth:""}}catch(G){return{url:"",depth:""}}}function ga(d){var a=String(),e,b,f;for(e=0;e<d.length;e++)f=d.charAt(e),b="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(f),0<=b&&(f="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((b+
47)%94)),a+=f;return a}function Ya(){try{if("function"===typeof window.callPhantom)return 99;try{if("function"===typeof window.top.callPhantom)return 99}catch(d){}if(void 0!=window.opera&&void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(!0==document.webkitHidden||
!1==document.webkitHidden))return 3;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&
window.document.updateSettings&&"function"==typeof window.document.updateSettings)return 1;var a=!1;try{var e=document.createElement("p");e.innerText=".";e.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";a=void 0!=e.style.textShadow}catch(b){}return 0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&a&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(f){return 0}}this.createRequest=function(){var d,a,e;window._dv_win.$dv.isEval=1;window._dv_win.$dv.DebugInfo=
{};var b=!1,f=window._dv_win,i=0,A=!1,B=getCurrentTime();window._dv_win.t2tTimestampData=[{dvTagCreated:B}];var G;try{for(G=0;10>=G;G++)if(null!=f.parent&&f.parent!=f)if(0<f.parent.location.toString().length)f=f.parent,i++,b=!0;else{b=!1;break}else{0==G&&(b=!0);break}}catch(lb){b=!1}var H;0==f.document.referrer.length?H=f.location:b?H=f.location:(H=f.document.referrer,A=!0);var Aa="",ha=null,ia=null;try{window._dv_win.external&&(ha=void 0!=window._dv_win.external.QueuePageID?window._dv_win.external.QueuePageID:
null,ia=void 0!=window._dv_win.external.CrawlerUrl?window._dv_win.external.CrawlerUrl:null)}catch(mb){Aa="&dvp_extErr=1"}if(!window._dv_win._dvScriptsInternal||!window._dv_win.dvProcessed||0==window._dv_win._dvScriptsInternal.length)return null;var O=window._dv_win._dvScriptsInternal.pop(),C=O.script;this.dv_script_obj=O;this.dv_script=C;window._dv_win.t2tTimestampData[0].dvWrapperLoadTime=O.loadtime;window._dv_win.dvProcessed.push(O);var c=C.src;if(void 0!=window._dv_win.$dv.CommonData.BrowserId&&
void 0!=window._dv_win.$dv.CommonData.BrowserVersion&&void 0!=window._dv_win.$dv.CommonData.BrowserIdFromUserAgent)d=window._dv_win.$dv.CommonData.BrowserId,a=window._dv_win.$dv.CommonData.BrowserVersion,e=window._dv_win.$dv.CommonData.BrowserIdFromUserAgent;else{for(var Ba=dv_GetParam(c,"useragent"),Ca=Ba?decodeURIComponent(Ba):navigator.userAgent,D=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/",verRegex:"(MSIE |rv:| Edge/)"},{id:2,
brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}],ja=0,Da="",u=0;u<D.length;u++)if(null!=Ca.match(RegExp(D[u].brRegex))){ja=D[u].id;if(null==
D[u].verRegex)break;var ka=Ca.match(RegExp(D[u].verRegex+"[0-9]*"));if(null!=ka)var Za=ka[0].match(RegExp(D[u].verRegex)),Da=ka[0].replace(Za[0],"");break}var Ea=Ya();d=Ea;a=Ea===ja?Da:"";e=ja;window._dv_win.$dv.CommonData.BrowserId=d;window._dv_win.$dv.CommonData.BrowserVersion=a;window._dv_win.$dv.CommonData.BrowserIdFromUserAgent=e}var v,$a="https:"===window._dv_win.location.protocol?"https:":"http:",la=!0,ma=window.parent.postMessage&&window.JSON,Fa=!1;if("0"==dv_GetParam(c,"t2te")||window._dv_win.dv_config&&
!0===window._dv_win.dv_config.supressT2T)Fa=!0;if(ma&&!1===Fa&&5!=window._dv_win.$dv.CommonData.BrowserId)try{v=fa(window._dv_win.dv_config.t2turl||"https://cdn3.doubleverify.com/t2tv7.html"),la=ea(v)}catch(nb){}window._dv_win.$dv.DebugInfo.dvp_HTML5=ma?"1":"0";var P=dv_GetParam(c,"region")||"",na="http:",Ga="0";"https"==c.match("^https")&&"https"==window._dv_win.location.toString().match("^https")&&(na="https:",Ga="1");try{for(var ab=f,oa=f,pa=0;10>pa&&oa!=window._dv_win.top;)pa++,oa=oa.parent;ab.depth=
pa;var Ha=Xa(f);dv_aUrlParam="&aUrl="+encodeURIComponent(Ha.url);dv_aUrlDepth="&aUrlD="+Ha.depth;dv_referrerDepth=f.depth+i;A&&f.depth--}catch(ob){dv_aUrlDepth=dv_aUrlParam=dv_referrerDepth=f.depth=""}for(var Ia=dv_GetDynamicParams(c,"dvp"),Q=dv_GetDynamicParams(c,"dvpx"),R=0;R<Q.length;R++){var Ja=dv_GetKeyValue(Q[R]);Q[R]=Ja.key+"="+encodeURIComponent(Ja.value)}"41"==P&&(P=50>100*Math.random()?"41":"8",Ia.push("dvp_region="+P));var Ka=Ia.join("&"),La=Q.join("&"),bb=window._dv_win.dv_config.tpsAddress||
"tps"+P+".doubleverify.com",I="visit.js";switch(dv_GetParam(c,"dvapi")){case "1":I="dvvisit.js";break;case "5":I="query.js";break;default:I="visit.js"}window._dv_win.$dv.DebugInfo.dvp_API=I;for(var S="ctx cmp ipos sid plc adid crt btreg btadsrv adsrv advid num pid crtname unit chnl uid scusrid tagtype sr dt isdvvid dup".split(" "),qa=[],n=0;n<S.length;n++){var ra=dv_GetParam(c,S[n])||"";qa.push(S[n]+"="+ra);""!==ra&&(window._dv_win.$dv.DebugInfo["dvp_"+S[n]]=ra)}for(var sa="turl icall dv_callback useragent xff timecheck".split(" "),
n=0;n<sa.length;n++){var Ma=dv_GetParam(c,sa[n]);null!=Ma&&qa.push(sa[n]+"="+(Ma||""))}var cb=qa.join("&"),w;var db=function(){try{return!!window.sessionStorage}catch(a){return!0}},eb=function(){try{return!!window.localStorage}catch(a){return!0}},fb=function(){var a=document.createElement("canvas");if(a.getContext&&a.getContext("2d")){var c=a.getContext("2d");c.textBaseline="top";c.font="14px 'Arial'";c.textBaseline="alphabetic";c.fillStyle="#f60";c.fillRect(0,0,62,20);c.fillStyle="#069";c.fillText("!image!",
2,15);c.fillStyle="rgba(102, 204, 0, 0.7)";c.fillText("!image!",4,17);return a.toDataURL()}return null};try{var p=[];p.push(["lang",navigator.language||navigator.browserLanguage]);p.push(["tz",(new Date).getTimezoneOffset()]);p.push(["hss",db()?"1":"0"]);p.push(["hls",eb()?"1":"0"]);p.push(["odb",typeof window.openDatabase||""]);p.push(["cpu",navigator.cpuClass||""]);p.push(["pf",navigator.platform||""]);p.push(["dnt",navigator.doNotTrack||""]);p.push(["canv",fb()]);var k=p.join("=!!!=");if(null==
k||""==k)w="";else{for(var J=function(c){for(var a="",d,b=7;0<=b;b--)d=c>>>4*b&15,a+=d.toString(16);return a},gb=[1518500249,1859775393,2400959708,3395469782],k=k+String.fromCharCode(128),x=Math.ceil((k.length/4+2)/16),y=Array(x),j=0;j<x;j++){y[j]=Array(16);for(var z=0;16>z;z++)y[j][z]=k.charCodeAt(64*j+4*z)<<24|k.charCodeAt(64*j+4*z+1)<<16|k.charCodeAt(64*j+4*z+2)<<8|k.charCodeAt(64*j+4*z+3)}y[x-1][14]=8*(k.length-1)/Math.pow(2,32);y[x-1][14]=Math.floor(y[x-1][14]);y[x-1][15]=8*(k.length-1)&4294967295;
for(var T=1732584193,U=4023233417,V=2562383102,W=271733878,X=3285377520,l=Array(80),E,m,r,s,Y,j=0;j<x;j++){for(var h=0;16>h;h++)l[h]=y[j][h];for(h=16;80>h;h++)l[h]=(l[h-3]^l[h-8]^l[h-14]^l[h-16])<<1|(l[h-3]^l[h-8]^l[h-14]^l[h-16])>>>31;E=T;m=U;r=V;s=W;Y=X;for(h=0;80>h;h++){var Na=Math.floor(h/20),hb=E<<5|E>>>27,F;c:{switch(Na){case 0:F=m&r^~m&s;break c;case 1:F=m^r^s;break c;case 2:F=m&r^m&s^r&s;break c;case 3:F=m^r^s;break c}F=void 0}var ib=hb+F+Y+gb[Na]+l[h]&4294967295;Y=s;s=r;r=m<<30|m>>>2;m=E;
E=ib}T=T+E&4294967295;U=U+m&4294967295;V=V+r&4294967295;W=W+s&4294967295;X=X+Y&4294967295}w=J(T)+J(U)+J(V)+J(W)+J(X)}}catch(pb){w=null}w=null!=w?"&aadid="+w:"";var Oa=c,c=(window._dv_win.dv_config.visitJSURL||na+"//"+bb+"/"+I)+"?"+cb+"&dvtagver=6.1.src&srcurlD="+f.depth+"&curl="+(null==ia?"":encodeURIComponent(ia))+"&qpgid="+(null==ha?"":ha)+"&ssl="+Ga+"&refD="+dv_referrerDepth+"&htmlmsging="+(ma?"1":"0")+w+Aa,t=window._dv_win.$dv.getMraid();t&&(c+="&ismraid=1");var ta;a:{try{if("object"==typeof window.$ovv||
"object"==typeof window.parent.$ovv){ta=!0;break a}}catch(qb){}ta=!1}ta&&(c+="&isovv=1");var jb=c,g="";try{var q=window._dv_win.parent,g=g+("&chro="+(void 0===q.chrome?"0":"1")),g=g+("&hist="+(q.history?q.history.length:"")),g=g+("&winh="+q.innerHeight),g=g+("&winw="+q.innerWidth),g=g+("&wouh="+q.outerHeight),g=g+("&wouw="+q.outerWidth);q.screen&&(g+="&scah="+q.screen.availHeight,g+="&scaw="+q.screen.availWidth)}catch(rb){}c=jb+(g||"");"http:"==c.match("^http:")&&"https"==window._dv_win.location.toString().match("^https")&&
(c+="&dvp_diffSSL=1");var Pa=C&&C.parentElement&&C.parentElement.tagName&&"HEAD"===C.parentElement.tagName;if(!1===la||Pa)c+="&dvp_isBodyExistOnLoad="+(la?"1":"0"),c+="&dvp_isOnHead="+(Pa?"1":"0");Ka&&(c+="&"+Ka);La&&(c+="&"+La);var K="srcurl="+encodeURIComponent(H);window._dv_win.$dv.DebugInfo.srcurl=H;var Z;var $=window._dv_win[ga("=@42E:@?")][ga("2?46DE@C~C:8:?D")];if($&&0<$.length){var ua=[];ua[0]=window._dv_win.location.protocol+"//"+window._dv_win.location.hostname;for(var aa=0;aa<$.length;aa++)ua[aa+
1]=$[aa];Z=ua.reverse().join(",")}else Z=null;Z&&(K+="&ancChain="+encodeURIComponent(Z));var L=dv_GetParam(c,"uid");null==L?(L=dv_GetRnd(),c+="&uid="+L):(L=dv_GetRnd(),c=c.replace(/([?&]uid=)(?:[^&])*/i,"$1"+L));var va=4E3;/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&7>=new Number(RegExp.$1)&&(va=2E3);var Qa=navigator.userAgent.toLowerCase();if(-1<Qa.indexOf("webkit")||-1<Qa.indexOf("chrome")){var Ra="&referrer="+encodeURIComponent(window._dv_win.location);c.length+Ra.length<=va&&(c+=Ra)}dv_aUrlParam.length+
dv_aUrlDepth.length+c.length<=va&&(c+=dv_aUrlDepth,K+=dv_aUrlParam);var Sa=Wa(),c=c+("&vavbkt="+Sa.vdcd),c=c+("&lvvn="+Sa.vdcv),c=c+("&"+this.getVersionParamName()+"="+this.getVersion()),c=c+("&eparams="+encodeURIComponent(ga(K))),c=c+("&brid="+d+"&brver="+a+"&bridua="+e);window._dv_win.$dv.DebugInfo.dvp_BRID=d;window._dv_win.$dv.DebugInfo.dvp_BRVR=a;window._dv_win.$dv.DebugInfo.dvp_BRIDUA=e;var M;void 0!=window._dv_win.$dv.CommonData.Scenario?M=window._dv_win.$dv.CommonData.Scenario:(M=this.getTrafficScenarioType(window._dv_win),
window._dv_win.$dv.CommonData.Scenario=M);c+="&tstype="+M;window._dv_win.$dv.DebugInfo.dvp_TS=M;var ba="";try{window.top==window?ba="1":window.top.location.host==window.location.host&&(ba="2")}catch(sb){ba="3"}var ca=window._dv_win.document.visibilityState,Ta=function(){var a=!1;try{a=t&&"function"===typeof t.getState&&"loading"===t.getState()}catch(d){c+="&dvp_mrgsf=1"}return a},wa=Ta();if("prerender"===ca||wa)c+="&prndr=1",wa&&(c+="&dvp_mrprndr=1");var Ua="dvCallback_"+(window._dv_win.dv_config&&
window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():dv_GetRnd()),kb=this.dv_script;window._dv_win[Ua]=function(a,d,b,e){var f=getCurrentTime();d.$uid=b;d=za(Oa);a.tags.add(b,d);d=za(c);a.tags[b].set(d);a.tags[b].beginVisitCallbackTS=f;a.tags[b].set({tagElement:kb,dv_protocol:na,protocol:$a,uid:b});a.tags[b].ImpressionServedTime=getCurrentTime();a.tags[b].getTimeDiff=function(){return(new Date).getTime()-this.ImpressionServedTime};try{"undefined"!=typeof e&&null!==e&&(a.tags[b].ServerPublicDns=
e),a.tags[b].adServingScenario=ba,a.tags[b].t2tIframeCreationTime=B,a.tags[b].t2tProcessed=!1,a.tags[b].t2tIframeId=v.id,a.tags[b].t2tIframeWindow=v.contentWindow,$dv.t2tEventDataZombie[v.id]&&(a.tags[b].uniquePageViewId=$dv.t2tEventDataZombie[v.id].uniquePageViewId,$dv.processT2TEvent($dv.t2tEventDataZombie[v.id],a.tags[b]))}catch(h){}if("prerender"===ca)if("prerender"!==window._dv_win.document.visibilityState&&"unloaded"!==visibilityStateLocal)a.tags[b].set({prndr:0}),a.registerEventCall(b,{prndr:0}),
a&&a.pubsub&&a.pubsub.publishHistoryRtnEvent(b);else{var g;"undefined"!==typeof window._dv_win.document.hidden?g="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?g="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?g="msvisibilitychange":"undefined"!==typeof window._dv_win.document.webkitHidden&&(g="webkitvisibilitychange");var i=function(){var c=window._dv_win.document.visibilityState;"prerender"===ca&&("prerender"!==c&&"unloaded"!==c)&&(ca=c,a.tags[b].set({prndr:0}),
a.registerEventCall(b,{prndr:0}),a&&a.pubsub&&a.pubsub.publishHistoryRtnEvent(b),window._dv_win.document.removeEventListener(g,i))};window._dv_win.document.addEventListener(g,i,!1)}else if(wa){var j=function(){"function"===typeof t.removeEventListener&&t.removeEventListener("ready",j);a.tags[b].set({prndr:0});a.registerEventCall(b,{prndr:0});a&&a.pubsub&&a.pubsub.publishHistoryRtnEvent(b)};Ta()?"function"===typeof t.addEventListener&&t.addEventListener("ready",j):(a.tags[b].set({prndr:0}),a.registerEventCall(b,
{prndr:0}),a&&a.pubsub&&a.pubsub.publishHistoryRtnEvent(b))}};for(var Va,da="auctionid vermemid source buymemid anadvid ioid cpgid cpid sellerid pubid advcode iocode cpgcode cpcode pubcode prcpaid auip auua".split(" "),xa=[],N=0;N<da.length;N++){var ya=dv_GetParam(Oa,da[N]);null!=ya&&(xa.push("dvp_"+da[N]+"="+ya),xa.push(da[N]+"="+ya))}(Va=xa.join("&"))&&(c+="&"+Va);return c+"&jsCallback="+Ua};this.sendRequest=function(d){var a;a=this.getVersionParamName();var e=this.getVersion(),b={};b[a]=e;b.dvp_jsErrUrl=
d;b.dvp_jsErrMsg=encodeURIComponent("Error loading visit.js");window._dv_win.dv_config=window._dv_win.dv_config||{};window._dv_win.dv_config.tpsErrAddress=window._dv_win.dv_config.tpsAddress||"tps30.doubleverify.com";a='try{ script.onerror = function(){ try{(new Image()).src = "'+dv_CreateAndGetErrorImp(window._dv_win.dv_config.tpsErrAddress+"/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1",b)+'";}catch(e){}}}catch(e){}';a='<html><head></head><body><script id="TPSCall" type="text/javascript" src="'+
d+'"><\/script><script type="text/javascript">var script = document.getElementById("TPSCall"); if (script && script.readyState) { script.onreadystatechange = function() { if (script.readyState == "complete") document.close(); }; if(script.readyState == "complete") document.close(); } else document.close(); '+a+"<\/script></body></html>";e=fa("about:blank");this.dv_script.id=e.id.replace("iframe","script");dv_GetParam(d,"uid");ea(e);d=dv_getPropSafe(e,"contentDocument")||dv_getPropSafe(dv_getPropSafe(e,
"contentWindow"),"document")||dv_getPropSafe(window._dv_win.frames[e.name],"document");window._dv_win.t2tTimestampData.push({beforeVisitCall:getCurrentTime()});if(d){d.open();if(e=e.contentWindow||window._dv_win.frames[e.name])e.$dv=window._dv_win.$dv;d.write(a)}else d=a.replace(/'/g,"\\'"),d='javascript: (function(){document.open(); document.domain="'+window.document.domain+"\"; window.$dv = window.parent.$dv; document.write('"+encodeURIComponent(d)+"');})()",e=fa(d),this.dv_script.id=e.id.replace("iframe",
"script"),ea(e);return!0};this.isApplicable=function(){return!0};this.onFailure=function(){window._dv_win._dvScriptsInternal.unshift(this.dv_script_obj);var d=window._dv_win.dvProcessed,a=this.dv_script_obj;null!=d&&(void 0!=d&&a)&&(a=d.indexOf(a),-1!=a&&d.splice(a,1));return window._dv_win.$dv.DebugInfo};this.getTrafficScenarioType=function(d){var d=d||window,a=d._dv_win.$dv.Enums.TrafficScenario;try{if(d.top==d)return a.OnPage;for(var e=0;d.parent!=d&&1E3>e;){if(d.parent.document.domain!=d.document.domain)return a.CrossDomain;
d=d.parent;e++}return a.SameDomain}catch(b){}return a.CrossDomain};this.getVersionParamName=function(){return"jsver"};this.getVersion=function(){return"80"}};


function dv_src_main(dv_baseHandlerIns, dv_handlersDefs) {

    this.baseHandlerIns = dv_baseHandlerIns;
    this.handlersDefs = dv_handlersDefs;

    this.exec = function () {
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dv = (window._dv_win.$dv || new dvType());

            window._dv_win.dv_config = window._dv_win.dv_config || {};
            window._dv_win.dv_config.tpsErrAddress = window._dv_win.dv_config.tpsAddress || 'tps30.doubleverify.com';

            var errorsArr = (new dv_rolloutManager(this.handlersDefs, this.baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src', errorsArr);
        }
        catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_isLostImp=1', { dvp_jsErrMsg: encodeURIComponent(e) });
            } catch (e) { }
        }
    }
}

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];
    (new dv_src_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
} catch (e) { }

