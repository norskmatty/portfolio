$(document).ready(function() {
	$('#tictactoe').mouseenter(function() {
		tictacmouseover();
	})

	$('#tictactoe').mouseleave(function() {
		tictacmouseout();
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

	$('#streetfighter').mouseenter(function() {
		sfmouseover();
	})

	$('#streetfighter').mouseleave(function() {
		sfmouseout();
	})
	
})


function tictacmouseover() {
	$('#tictactoenormal').hide(400);
	$('#tictactoehover').show(400);
}

function tictacmouseout() {
	$('#tictactoehover').hide(400);
	$('#tictactoenormal').show(400);
}

function topsifymouseover() {
	$('#topsifynormal').hide(400);
	$('#topsifyhover').show(400);
}

function topsifymouseout() {
	$('#topsifyhover').hide(400);
	$('#topsifynormal').show(400);
}

function shoppingmouseover() {
	$('#shoppingnormal').hide(400);
	$('#shoppinghover').show(400);
}

function shoppingmouseout() {
	$('#shoppinghover').hide(400);
	$('#shoppingnormal').show(400);
}

function hotorcoldmouseover() {
	$('#hotorcoldnormal').hide(400);
	$('#hotorcoldhover').show(400);
}

function hotorcoldmouseout() {
	$('#hotorcoldhover').hide(400);
	$('#hotorcoldnormal').show(400);
}

function quizmouseover() {
	$('#quiznormal').hide(400);
	$('#quizhover').show(400);
}

function quizmouseout() {
	$('#quizhover').hide(400);
	$('#quiznormal').show(400);
}

function sfmouseover() {
	$('#sfnormal').hide(400);
	$('#sfhover').show(400);
}

function sfmouseout() {
	$('#sfhover').hide(400);
	$('#sfnormal').show(400);
}