// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

//calculate tile
$$(document).on('pageInit', function() {
$$('#cal_tile').on('click', function(){
	
	var width1 =$$('#width1').val();
	var length1 =$$('#length1').val();
	
	var total=(width1*length1)*92.76;
	
	$$('#total_tile').html('<h3>TOTAL COST : RM '+total.toFixed(2)+'</h3>');
	
});
$$('#tile_clr').on('click', function(){
		
	$$('#width1').val('');
	$$('#length1').val('');
	$$('#total_tile').html('<h3>TOTAL COST : RM 0.00</h3>');
	
}); 
$$('#cal_tile2').on('click', function(){
	
	var width1 =$$('#width2').val();
	var length1 =$$('#length2').val();
	
	var total=(width1*length1)*19.43;
	
	$$('#total_tile2').html('<h3>TOTAL COST : RM '+total.toFixed(2)+'</h3>');
	
});
$$('#tile_clr2').on('click', function(){
		
	$$('#width2').val('');
	$$('#length2').val('');
	$$('#total_tile2').html('<h3>TOTAL COST : RM 0.00</h3>');
	
});
$$('#cal_tile3').on('click', function(){
	
	var width1 =$$('#width3').val();
	var length1 =$$('#length3').val();
	
	var total=(width1*length1)*102.78;
	
	$$('#total_tile3').html('<h3>TOTAL COST : RM '+total.toFixed(2)+'</h3>');
	
});
$$('#tile_clr3').on('click', function(){
		
	$$('#width3').val('');
	$$('#length3').val('');
	$$('#total_tile3').html('<h3>TOTAL COST : RM 0.00</h3>');
	
}); 
$$('#cal_tile4').on('click', function(){
	
	var width1 =$$('#width4').val();
	var length1 =$$('#length4').val();
	
	var total=(width1*length1)*84.50;
	
	$$('#total_tile4').html('<h3>TOTAL COST : RM '+total.toFixed(2)+'</h3>');
	
});
$$('#tile_clr4').on('click', function(){
		
	$$('#width4').val('');
	$$('#length4').val('');
	$$('#total_tile4').html('<h3>TOTAL COST : RM 0.00</h3>');
	
}); 
});


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

