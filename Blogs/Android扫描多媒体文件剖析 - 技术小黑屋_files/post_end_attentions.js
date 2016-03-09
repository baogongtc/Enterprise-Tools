function shouldDisplayAttention() {
		return isDesktop();
}
	
	function getAttentions() {
		return "读者止步";
	}

	function dumpAdAttentions() {
		var attentions = getAttentions();
        var outputHtml = '<div id="below_attention">';
		
		for (var index in attentions) {
            //console.info(index);
			myWord = attentions[index];
            var myWord;
            //console.info(myWord);
            if (isNumeric(index)) {
            	outputHtml = outputHtml + '<p>' + myWord + '</p>';	
            }
		}
        //console.info(outputHtml);
		document.write(outputHtml + '</div>');
	}
	if (shouldDisplayAttention()) {
		//dumpAdAttentions();
	}
