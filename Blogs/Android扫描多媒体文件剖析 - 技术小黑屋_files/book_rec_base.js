var LINK_TYPE_ALIMAMA = 0;
var LINK_TYPE_AMAZON = 1;

function booksToJSON(dataSource, linkType) {
	var useAlimama = LINK_TYPE_ALIMAMA === linkType;
	var useAmazon = LINK_TYPE_AMAZON === linkType;
	var data = {};
	var book;
	var link;
	for (var index in dataSource) {
		book = dataSource[index];
		if (useAlimama) {
			link = book.getAlimamaLink();
		} else if (useAmazon) {
			link = book.getAmazonLink();
		}
		data[book.name] = link;
	}
	return data;
}


function Book(name) {
	this.name = name;
}

Book.prototype.addAlimamaLink = function(link) {
	this.alimamaLink = link;
}

Book.prototype.addAmazonLink = function(link) {
	this.amazonLink = link;
}

Book.prototype.getAlimamaLink = function() {
	if (this.alimamaLink) {
		return this.alimamaLink;
	} else {
		return this.amazonLink;
	}
}


Book.prototype.getAmazonLink = function() {
	if (this.amazonLink) {
		return this.amazonLink;
	} else {
		return this.alimamaLink;
	}
}


Book.prototype.dumpLinks = function() {
	console.info("dumpLinks alimamaLink= " + this.getAlimamaLink());
	console.info("dumpLinks amazonLink= " + this.getAmazonLink());
}
