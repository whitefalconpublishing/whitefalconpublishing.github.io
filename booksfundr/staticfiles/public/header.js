var buttonlabel = document.getElementById("buttonlabel").value;

document.write('<header id="header" class="alt">');
document.write('				<h1><a href="/"><img src="http://www.self-publish.in/scholargram/staticfiles/public/images/sglogo.png" height="95%"></a></h1>');
document.write('				<div id="ctaa">');
document.write('				<form class="form-horizontal" action="/search/" method="post" role="form" >');
document.write('							<input type="text" name="query" id="query" placeholder="Search" />');
document.write('				</form>');
document.write('			</div>');				
document.write('				<nav id="nav">');
document.write('					<ul>');
document.write('						<li><a href="/">Home</a></li>');
document.write('						<li><a href="/catalog/">Books</a></li>');
document.write('						<li><a href="/process/">Process</a></li>');
document.write('								<li><a href="/distribution/">Distribution</a></li>');	
document.write('<li>');
document.write('<a href="">Resources</a>');
document.write('<ul>');
document.write('						<li><a href="/services/">Services</a></li>');	
document.write('								<li><a href="/faq/">FAQ</a></li>');
document.write('</ul>');
document.write('</li>');
					
								


document.write('						<li><a href="/contact/">Contact</a></li>');
document.write('						<li><a href="/dashboard/" class="button">'+buttonlabel+'</a></li>');
document.write('					</ul>');
document.write('				</nav>');		
document.write('			</header>');
