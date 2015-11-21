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
 document.write('    <a class="navbar-brand" href="/"><img src="/static/images/sglogo.png" height="140%"></a>'); 
 document.write('</div>'); 
 document.write('<!-- Top Menu Items -->'); 
 document.write('<ul class="nav navbar-right top-nav">'); 
 document.write('    '); 
 document.write('    <li class="dropdown">'); 
 document.write('        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i>&nbsp;'+ authorusername+ '&nbsp;<b class="caret"></b></a>'); 
 document.write('        <ul class="dropdown-menu">'); 
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
 
 

 document.write('</div>'); 
 document.write('<!-- /.navbar-collapse -->');
 document.write('        </nav>');
