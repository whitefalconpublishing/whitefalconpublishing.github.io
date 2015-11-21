var authorusername = document.getElementById("authorusername").value;

document.write('<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">'); 
 document.write('<!-- Brand and toggle get grouped for better mobile display -->'); 
 document.write('<div class="navbar-header">'); 
 document.write('    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">'); 
 document.write('        <span class="sr-only">Toggle navigation</span>'); 
 document.write('        <span class="icon-bar"></span>'); 
 document.write('        <span class="icon-bar"></span>'); 
 document.write('        <span class="icon-bar"></span>'); 
 document.write('    </button>'); 
 document.write('    <a class="navbar-brand" href="/"><img src="http://www.self-publish.in/scholargram/staticfiles/images/sglogo.png" height="140%"></a>'); 
 document.write('</div>'); 
 document.write('<!-- Top Menu Items -->'); 
 document.write('<ul class="nav navbar-right top-nav">'); 
 document.write('    '); 
 document.write('    <li class="dropdown">'); 
 document.write('        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i>&nbsp;'+ authorusername+ '&nbsp;<b class="caret"></b></a>'); 
 document.write('        <ul class="dropdown-menu">'); 
 document.write('            <li>'); 
 document.write('                <a href="/profile"><i class="fa fa-fw fa-user"></i> My Profile</a>'); 
 document.write('            </li>'); 
 document.write('            <li class="divider"></li>'); 
 document.write('            <li>'); 
 document.write('                <a href="/logout"><i class="fa fa-fw fa-power-off"></i> Log Out</a>'); 
 document.write('            </li>'); 
 document.write('        </ul>'); 
 document.write('    </li>'); 
 document.write('</ul>'); 
 document.write('<!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->'); 
 document.write('<div class="collapse navbar-collapse navbar-ex1-collapse">'); 
 document.write('    <ul class="nav navbar-nav side-nav">'); 
 document.write('        <li >'); 
 document.write('            <a href="/dashboard/"><i class="fa fa-fw fa-dashboard"></i> Dashboard Home</a>'); 
 document.write('        </li>'); 
 
 
 document.write('<li>');
document.write('<a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-book"></i> ');
document.write('Book Projects <i class="fa fa-fw fa-caret-down"></i>');
document.write('</a>');
document.write('<ul id="demo" class="collapse in">');
document.write('        <li>'); 
 document.write('            <a href="/books/"><i class="fa fa-fw fa-book"></i> View Books</a>'); 
 document.write('        </li>');
 
 document.write('        <li>'); 
 document.write('            <a href="/book/add/"><i class="fa fa-fw fa-plus-square"></i> Add Book</a>'); 
 document.write('        </li>');
 
  document.write('        <li>'); 
 document.write('            <a href="/book/order/"><i class="fa fa-fw fa-cart-plus"></i> Order Author Copies</a>'); 
 document.write('        </li>');
 
   document.write('        <li>'); 
 document.write('            <a href="/book/services/"><i class="fa fa-fw fa-star"></i> Premium Services</a>'); 
 document.write('        </li>');

document.write('</ul>');
document.write('</li>');


 
 
document.write('<li>');
document.write('<a href="javascript:;" data-toggle="collapse" data-target="#demo1"><i class="fa fa-fw fa-inr"></i> ');
document.write('Sales & Royalty <i class="fa fa-fw fa-caret-down"></i>');
document.write('</a>');
document.write('<ul id="demo1" class="collapse">');
 document.write('        <li>'); 
 document.write('            <a href="/royalty/"><i class="fa fa-fw fa-inr"></i> Royalty Summary</a>'); 
 document.write('        </li>'); 
document.write('        <li>'); 
 document.write('            <a href="/payments/"><i class="fa fa-fw fa-inr"></i> Payments Received</a>'); 
 document.write('        </li>'); 
 
 document.write('        <li>'); 
 document.write('            <a href="/sales/"><i class="fa fa-fw fa-shopping-cart"></i> Sales Report</a>'); 
 document.write('        </li>'); 

document.write('</ul>');
document.write('</li>');

 
document.write('<li>');
document.write('<a href="javascript:;" data-toggle="collapse" data-target="#demo2"><i class="fa fa-fw fa-wrench"></i> ');
document.write('Tools <i class="fa fa-fw fa-caret-down"></i>');
document.write('</a>');
document.write('<ul id="demo2" class="collapse">');
 document.write('        <li>'); 
 document.write('            <a href="/royalty/calculator"><i class="fa fa-fw fa-calculator"></i> Royalty Calculator</a>'); 
 document.write('        </li>'); 
 
 document.write('        <li>'); 
 document.write('            <a href="/cover/template"><i class="fa fa-fw fa-file-pdf-o"></i> Cover Template Generator</a>'); 
 document.write('        </li>'); 

 document.write('        <li>'); 
 document.write('            <a href="/cover/creator"><i class="fa fa-fw fa-file-pdf-o"></i> Cover Creator</a>'); 
 document.write('        </li>'); 

document.write('</ul>');
document.write('</li>');


document.write('<li>');
document.write('<a href="javascript:;" data-toggle="collapse" data-target="#demo3"  ><i class="fa fa-fw fa-gear"></i> ');
document.write('Account <i class="fa fa-fw fa-caret-down"></i>');
document.write('</a>');
document.write('<ul id="demo3" class="collapse" >');
 document.write('        <li>'); 
 document.write('            <a href="/royalty/account"><i class="fa fa-fw fa-inr"></i> Royalty Account</a>'); 
 document.write('        </li>'); 
 
document.write('        <li>'); 
 document.write('            <a href="/profile/"><i class="fa fa-fw fa-user"></i> Profile</a>'); 
 document.write('        </li>'); 
document.write('</ul>');
document.write('</li>');




 document.write('    </ul>'); 
 document.write('</div>'); 
 document.write('<!-- /.navbar-collapse -->');
 document.write('        </nav>');
