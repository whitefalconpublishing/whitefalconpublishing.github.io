document.write("<!-- Main sidebar -->");
document.write("			<div class=\"sidebar sidebar-main\">");
document.write("				<div class=\"sidebar-content\">");
document.write("");
document.write("					<!-- Main navigation -->");
document.write("					<div class=\"sidebar-category sidebar-category-visible\">");
document.write("						<div class=\"category-content no-padding\">");
document.write("							<ul class=\"navigation navigation-main navigation-accordion\">");
document.write("");
document.write("								<!-- Main -->");
document.write("								<li id=\"home-menu\"><a href=\"\/\"><i class=\"icon-home4\"><\/i> <span>All Books<\/span><\/a><\/li>");
document.write("								<li id=\"income-menu\"><a href=\"\/income-report\"><i class=\"icon-cash4\"><\/i> <span>Income Report Generator<\/span><\/a><\/li>");
document.write("								<li id=\"expense-menu\"><a href=\"\/expense-report\"><i class=\"icon-cash2\"><\/i> <span>Expense Report Generator<\/span><\/a><\/li>");
document.write("								<li id=\"royalty-update-checker-menu\"><a href=\"\/royalty-update-checker\"><i class=\"icon-download\"><\/i> <span>Royalty Update Checker<\/span><\/a><\/li>");
document.write("								<li id=\"royalty-updater-menu\"><a href=\"\/royalty-updater\"><i class=\"icon-database-upload\"><\/i> <span>Royalty Updater Tool<\/span><\/a><\/li>");
document.write("								<li id=\"return-update-checker-menu\"><a href=\"\/return-update-checker\"><i class=\"icon-download\"><\/i> <span>Return Update Checker<\/span><\/a><\/li>");
document.write("								<li id=\"return-updater-menu\"><a href=\"\/return-updater\"><i class=\"icon-database-upload\"><\/i> <span>Return Updater Tool<\/span><\/a><\/li>");
document.write("								<li id=\"isbngenerator-menu\"><a href=\"\/isbn-generator\"><i class=\"icon-book\"><\/i> <span>ISBN Generator<\/span><\/a><\/li>");
document.write("								<li id=\"covertemplate-menu\"><a href=\"\/cover-template\"><i class=\"icon-book\"><\/i> <span>Cover Template Generator<\/span><\/a><\/li>");
document.write("								<li id=\"pdffixer-menu\"><a href=\"\/pdf-fixer\"><i class=\"icon-book\"><\/i> <span>PDF Fixer for Duplex Print<\/span><\/a><\/li>");
document.write("                                <li id=\"blockchain-dapp\"><a href=\"\/blockchain-dapp\"><i class=\"icon-download\"><\/i> <span>Blockchain Certify Dapp<\/span><\/a><\/li>");

document.write("									<\/ul>");
document.write("								<\/li>");
document.write("");
document.write("							<\/ul>");
document.write("						<\/div>");
document.write("					<\/div>");
document.write("					<!-- \/main navigation -->");
document.write("");
document.write("				<\/div>");
document.write("			<\/div>");
document.write("			<!-- \/main sidebar -->");

var menuitemactive = $('#menuitem').val();
$(menuitemactive).addClass('active');
//console.log(menuitemactive);
