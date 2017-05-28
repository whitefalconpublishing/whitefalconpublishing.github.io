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
document.write("								<li id=\"home-menu\"><a href=\"\/\"><i class=\"icon-home4\"><\/i> <span>Dashboard<\/span><\/a><\/li>");
document.write("								<li >");
document.write("									<a href=\"#\"><i class=\"icon-books\"><\/i> <span>Books<\/span><\/a>");
document.write("									<ul>");
document.write("										<li id=\"viewbooks-menu\" ><a href=\"\/all-book\">View Books<\/a><\/li>");
document.write("									<\/ul>");
document.write("								<\/li>");

document.write("								<li>");
document.write("									<a href=\"#\"><i class=\"icon-coins\"><\/i> <span>Sales & Royalty<\/span><\/a>");
document.write("									<ul>");
document.write("										<li id=\"royaltysummary-menu\"><a href=\"\/royalty_summary\" >Royalty Summary<\/a><\/li>");
document.write("										<li id=\"salesreport-menu\"><a href=\"\/salesreport\" >Sales & Royalty Report<\/a><\/li>");
document.write("										<li id=\"paymenthistory-menu\"><a href=\"\/payment_history\" >Royalty Payment Summary<\/a><\/li>");
document.write("									<\/ul>");
document.write("								<\/li>");


document.write("								<li>");
document.write("									<a href=\"#\"><i class=\"icon-chart\"><\/i> <span>Analytics<\/span><\/a>");
document.write("									<ul>");
document.write("										<li id=\"salesanalytics-menu\"><a href=\"\/sales-analytics\" >Sales Analytics<\/a><\/li>");
document.write("										<li id=\"royaltyanalytics-menu\"><a href=\"\/royalty-analytics\" >Royalty Analytics<\/a><\/li>");
document.write("									<\/ul>");
document.write("								<\/li>");


document.write("								<li>");
document.write("									<a href=\"#\"><i class=\"icon-cog\"><\/i> <span>Account<\/span><\/a>");
document.write("									<ul>");
document.write("										<li id=\"profile-menu\"><a href=\"\/edit_profile\" >Profile<\/a><\/li>");
document.write("										<li id=\"royaltyaccount-menu\"><a href=\"\/royalty_account\" >Royalty Payment Account<\/a><\/li>");
document.write("										<li id=\"accountsettings-menu\"><a href=\"\/account_settings\" >Account Settings<\/a><\/li>");
document.write("									<\/ul>");
document.write("								<\/li>");

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
