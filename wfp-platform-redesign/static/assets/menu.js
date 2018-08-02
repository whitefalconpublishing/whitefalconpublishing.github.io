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
document.write("									<a href=\"#\"><i class=\"icon-books\"><\/i> <span>Published Books<\/span><\/a>");
document.write("									<ul>");
document.write("										<li id=\"viewbooks-menu\" ><a href=\"\/all-book\"><i class=\"icon-folder-open\"><\/i> View Books<\/a><\/li>");
document.write("									<\/ul>");
document.write("								<\/li>");

document.write("                                <li >");
document.write("                                    <a href=\"#\"><i class=\"icon-books\"><\/i> <span>Free Publishing<\/span><\/a>");
document.write("                                    <ul>");
document.write("                                        <li id=\"addbook-menu\" ><a href=\"\/add-book\"><i class=\"icon-book\"><\/i> Add Book<\/a><\/li>");
document.write("                                        <li id=\"viewsubmittedbooks-menu\" ><a href=\"\/view-books\"><i class=\"icon-folder-open\"><\/i> View Submitted Books<\/a><\/li>");
document.write("                                <li id=\"covercreator-menu\"><a href=\"\/cover-creator\"><i class=\"icon-book3\"><\/i> <span>Cover Creator<\/span><\/a><\/li>");
document.write("                                <li id=\"covertemplate-menu\"><a href=\"\/cover-template\"><i class=\"icon-book2\"><\/i> <span>Cover Template Generator<\/span><\/a><\/li>");

document.write("                                    <\/ul>");
document.write("                                <\/li>");

document.write("								<li>");
document.write("									<a href=\"#\"><i class=\"icon-coins\"><\/i> <span>Sales & Royalty<\/span><\/a>");
document.write("									<ul>");
document.write("										<li id=\"royaltysummary-menu\"><a href=\"\/royalty_summary\" ><i class=\"icon-list\"><\/i> Royalty Summary<\/a><\/li>");
document.write("										<li id=\"salesreport-menu\"><a href=\"\/salesreport\" ><i class=\"icon-file-spreadsheet\"><\/i> Sales & Royalty Report<\/a><\/li>");
document.write("										<li id=\"paymenthistory-menu\"><a href=\"\/payment_history\" ><i class=\"icon-file-text2\"><\/i> Royalty Payment Summary<\/a><\/li>");
document.write("									<\/ul>");
document.write("								<\/li>");


document.write("								<li>");
document.write("									<a href=\"#\"><i class=\"icon-chart\"><\/i> <span>Analytics<\/span><\/a>");
document.write("									<ul>");
document.write("										<li id=\"salesanalytics-menu\"><a href=\"\/sales-analytics\" ><i class=\"icon-stats-bars\"><\/i> Sales Analytics<\/a><\/li>");
document.write("										<li id=\"royaltyanalytics-menu\"><a href=\"\/royalty-analytics\" ><i class=\"icon-stats-dots\"><\/i> Royalty Analytics<\/a><\/li>");
document.write("									<\/ul>");
document.write("								<\/li>");


document.write("								<li>");
document.write("									<a href=\"#\"><i class=\"icon-cog\"><\/i> <span>Account<\/span><\/a>");
document.write("									<ul>");
document.write("										<li id=\"profile-menu\"><a href=\"\/edit_profile\" ><i class=\"icon-profile\"><\/i> Profile<\/a><\/li>");
document.write("										<li id=\"royaltyaccount-menu\"><a href=\"\/royalty_account\" ><i class=\"icon-library2\"><\/i> Royalty Payment Account<\/a><\/li>");
document.write("										<li id=\"accountsettings-menu\"><a href=\"\/account_settings\" ><i class=\"icon-cog2\"><\/i> Account Settings<\/a><\/li>");
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
