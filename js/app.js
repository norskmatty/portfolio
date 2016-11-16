$(document).ready(function() {
	$('#stocksgame').mouseenter(function() {
		stocksgamemouseover();
	})

	$('#stocksgame').mouseleave(function() {
		stocksgamemouseout();
	})

	$('#topsify').mouseenter(function() {
		topsifymouseover();
	})

	$('#topsify').mouseleave(function() {
		topsifymouseout();
	})

	$('#shopping').mouseenter(function() {
		shoppingmouseover();
	})

	$('#shopping').mouseleave(function() {
		shoppingmouseout();
	})

	$('#hotorcold').mouseenter(function() {
		hotorcoldmouseover();
	})

	$('#hotorcold').mouseleave(function() {
		hotorcoldmouseout();
	})

	$('#quiz').mouseenter(function() {
		quizmouseover();
	})

	$('#quiz').mouseleave(function() {
		quizmouseout();
	})

	$('#drawforme').mouseenter(function() {
		dfmmouseover();
	})

	$('#drawforme').mouseleave(function() {
		dfmmouseout();
	})
	
})


function stocksgamemouseover() {
	$('#stocksnormal').hide();
	$('#stockshover').show();
}

function stocksgamemouseout() {
	$('#stockshover').hide();
	$('#stocksnormal').show();
}

function topsifymouseover() {
	$('#topsifynormal').hide();
	$('#topsifyhover').show();
}

function topsifymouseout() {
	$('#topsifyhover').hide();
	$('#topsifynormal').show();
}

function shoppingmouseover() {
	$('#shoppingnormal').hide();
	$('#shoppinghover').show();
}

function shoppingmouseout() {
	$('#shoppinghover').hide();
	$('#shoppingnormal').show();
}

function hotorcoldmouseover() {
	$('#hotorcoldnormal').hide();
	$('#hotorcoldhover').show();
}

function hotorcoldmouseout() {
	$('#hotorcoldhover').hide();
	$('#hotorcoldnormal').show();
}

function quizmouseover() {
	$('#quiznormal').hide();
	$('#quizhover').show();
}

function quizmouseout() {
	$('#quizhover').hide();
	$('#quiznormal').show();
}

function dfmmouseover() {
	$('#dfmnormal').hide();
	$('#dfmhover').show();
}

function dfmmouseout() {
	$('#dfmhover').hide();
	$('#dfmnormal').show();
}