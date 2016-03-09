function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function makeTrackableUrl(url, droidRefer) {
    var referPrefix = "?droid_refer=";
    if (-1 !== url.indexOf(referPrefix)) {
    	return url;
    }
    
    if (!endsWith(url, '/')) {
        url = url + '/'
    }
    
    url = url +  referPrefix + droidRefer;
    return url;
}

function makeBatchUrlTrackable(batchUrls, droidRefer) {
    var trackableUrls = {};
    for (var key in batchUrls) {
     	trackableUrls[key] =   makeTrackableUrl(batchUrls[key], droidRefer);  
    }
    return trackableUrls;
}

function sortJsonData(rawData) {
	var sortedPosts = {};
    var keys = Object.keys(rawData);
    var sortedKeys = keys.sort(function(a, b){
  		return  getUTF8ByteLength(a) - getUTF8ByteLength(b); // ASC -> a - b; DESC -> b - a
	});
    for (var index in sortedKeys) {
        var key = sortedKeys[index];
        sortedPosts[key] = rawData[key];
    }
    return sortedPosts;
}


function getUTF8ByteLength(s) {
    return unescape(encodeURIComponent(s)).length;
}
