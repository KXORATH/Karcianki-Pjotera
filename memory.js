
var randomInts = [];
while(randomInts.length < 12){
    var r = Math.floor(Math.random() * 12);
    if(randomInts.indexOf(r) === -1) randomInts.push(r);
}

var cards1 = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

var cards = [];

for (i=0; i<12; i++)
{
	cards.push(cards1[randomInts[i]]);
}

//zmiana na potrzebę gita

var c0 = document.getElementById('c'+randomInts[0]);
var c1 = document.getElementById('c'+randomInts[1]);
var c2 = document.getElementById('c'+randomInts[2]);
var c3 = document.getElementById('c'+randomInts[3]);

var c4 = document.getElementById('c'+randomInts[4]);
var c5 = document.getElementById('c'+randomInts[5]);
var c6 = document.getElementById('c'+randomInts[6]);
var c7 = document.getElementById('c'+randomInts[7]);

var c8 = document.getElementById('c'+randomInts[8]);
var c9 = document.getElementById('c'+randomInts[9]);
var c10 = document.getElementById('c'+randomInts[10]);
var c11 = document.getElementById('c'+randomInts[11]);

c0.addEventListener("click", function() { revealCard(randomInts[0]); });
c1.addEventListener("click", function() { revealCard(randomInts[1]); });
c2.addEventListener("click", function() { revealCard(randomInts[2]); });
c3.addEventListener("click", function() { revealCard(randomInts[3]); });

c4.addEventListener("click", function() { revealCard(randomInts[4]); });
c5.addEventListener("click", function() { revealCard(randomInts[5]); });
c6.addEventListener("click", function() { revealCard(randomInts[6]); });
c7.addEventListener("click", function() { revealCard(randomInts[7]); });

c8.addEventListener("click", function() { revealCard(randomInts[8]); });
c9.addEventListener("click", function() { revealCard(randomInts[9]); });
c10.addEventListener("click", function() { revealCard(randomInts[10]); });
c11.addEventListener("click", function() { revealCard(randomInts[11]); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;

function revealCard(nr)
{
	//alert(nr);
	
	var opacityValue = $('#c'+nr).css('opacity');
	
	//alert(opacityValue);
	
	if (opacityValue != 0 && lock == false)
	{
		lock = true;
		
		var obraz = "url(img/"+cards[nr]+")";
	
		$('#c'+nr).addClass("cardA");
		//$('#c'+nr).removeClass("card");
		$('#c'+nr).css('background-image', obraz);
		$('#c'+nr).css("transform-style", "preserve-3d");
		
		if (oneVisible == false)
		{
			visible_nr = nr;
			// first card
			oneVisible = true;
			lock = false;
		}
		
		else
		{
			// second card
			
			if(cards[visible_nr] == cards[nr])
			{
				//alert("para");
				setTimeout(function() { hide2Cards(nr, visible_nr) }, 750);
			}
			
			else
			{
				//alert("pudło");
				
				setTimeout(function() { restore2Cards(nr, visible_nr) }, 1000);

			}
			
			turnCounter++;
			$('.score').html("Licznik ruchów: "+turnCounter);
			oneVisible = false;
		}
	}
	
	
}

function hide2Cards(nr1, nr2)
{
	$('#c'+nr1).css("opacity", "0");
	$('#c'+nr2).css("opacity", "0");
	
	pairsLeft--;
	
	if(pairsLeft == 0)
	{
		$('.board').html('<h2>Wygrałeś!<br>Zrobiłeś to w '+turnCounter+' ruchach</h2><span style="margin-right: 10px;"><a href="">Jeszcze raz?</a></span><span><a href="file:///C:/Users/minec/Desktop/Web-projekty/Memory/kurs_js5/poczatek%20pracy/index.html">Menu główne</a></span>');
	}
	
	lock = false;
}

function restore2Cards(nr1, nr2)
{
	$('#c'+nr1).removeClass("cardA");
	$('#c'+nr1).css('background-image', 'url(img/karta.png)');
	
	$('#c'+nr2).removeClass("cardA");
	$('#c'+nr2).css('background-image', 'url(img/karta.png)');
	
	lock = false;
}




