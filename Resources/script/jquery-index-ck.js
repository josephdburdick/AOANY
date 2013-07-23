/*
 *      AOANY
 *      by Joey Labs
 *      joeylabs.com  
 *
 */function cufon(){var e=["#sidebar .gallery-list li a"],t=["#main-contact a"],n=["#main-body h2, #main-date, #main-contact, #main-body > p,"],r=["#sidebar h3,#sidebar h4,.gallery-list li, p.small, #joey"];Cufon.replace(t,{fontFamily:"Century Gothic",hover:{color:"#FF0000"}});Cufon.replace(e,{fontFamily:"Century Gothic Bold",hover:{color:"#ffffff"}});Cufon.replace(n,{fontFamily:"Century Gothic",hover:!0});Cufon.replace(r,{fontFamily:"Century Gothic Bold",hover:!0});$(n.toString()).css("visibility","visible");$(r.toString()).css("visibility","visible");$(e.toString()).css("visibility","visible")}function listHover(){$("#gallery-list li").hover(function(){var e=$(this).html();$(this).html()})}$(window).load(function(){$("#sidebar").load("sidebar.html",function(){cufon();$("#body-container").transition({opacity:"1"},300)});$("#bg-slideshow").cycle({duration:2e3})});