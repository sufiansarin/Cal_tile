// Initialize your app
var myApp = new Framework7({
  material: true //enable Material theme
});

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
	var tile=(width1*length1)*20;
	var adhsv=(width1*length1)*0.031;
	
	$$('#total_tile').html("<table><tr><td align='right'>Cost</td><td>&nbsp;</td><td>RM "+total.toFixed(2)+"</td></tr><tr><td align='right'>Tile</td><td>&nbsp;</td><td>"+tile.toFixed()+" pcs</td></tr><tr><td align='right'>Adhesive</td><td>&nbsp;</td><td>"+adhsv.toFixed(3)+" no</td></tr></table>");
	
});
$$('#tile_clr').on('click', function(){
		
	$$('#width1').val('');
	$$('#length1').val('');
	$$('#total_tile').html("<table><tr><td align='right'>Cost</td><td>&nbsp;</td><td>RM 0.00</td></tr><tr><td align='right'>Tile</td><td>&nbsp;</td><td>0 pcs</td></tr><tr><td align='right'>Adhesive</td><td>&nbsp;</td><td>0 no</td></tr></table>");
	
}); 
$$('#cal_tile2').on('click', function(){
	
	var width1 =$$('#width2').val();
	var length1 =$$('#length2').val();
	
	var total=(width1*length1)*19.43;
	var cement=(width1*length1)*0.141;
	var sand=(width1*length1)*0.02;
	
	$$('#total_tile2').html("<table><tr><td align='right'>Cost</td><td>&nbsp;</td><td>RM "+total.toFixed(2)+"</td></tr><tr><td align='right'>Cement Bag</td><td>&nbsp;</td><td>"+cement.toFixed(3)+" no</td></tr><tr><td align='right'>Sand</td><td>&nbsp;</td><td>"+sand.toFixed(2)+" m<sup>3</sup></td></tr></table>");
	
});
$$('#tile_clr2').on('click', function(){
		
	$$('#width2').val('');
	$$('#length2').val('');
	$$('#total_tile2').html("<table><tr><td align='right'>Cost</td><td>&nbsp;</td><td>RM 0.00</td></tr><tr><td align='right'>Cement Bag</td><td>&nbsp;</td><td>0 no</td></tr><tr><td align='right'>Sand</td><td>&nbsp;</td><td>0 m<sup>3</sup></td></tr></table>");
	
});
$$('#cal_tile3').on('click', function(){
	
	var width1 =$$('#width3').val();
	var length1 =$$('#length3').val();
	
	var total=(width1*length1)*102.78;
	var cmt=(width1*length1)*57;
	var snd=(width1*length1)*0.049;
	var agg=(width1*length1)*0.086;
	
	$$('#total_tile3').html("<table><tr><td align='right'>Cost</td><td>&nbsp;</td><td>RM "+total.toFixed(2)+"</td></tr><tr><td align='right'>Cement Bag</td><td>&nbsp;</td><td>"+cmt.toFixed()+"</td></tr><tr><td align='right'>Sand</td><td>&nbsp;</td><td>"+snd.toFixed(3)+" m<sup>3</sup></td></tr><tr><td align='right'>Aggregate</td><td>&nbsp;</td><td>"+agg.toFixed(3)+" m<sup>3</sup></td></tr></table>");
	
});
$$('#tile_clr3').on('click', function(){
		
	$$('#width3').val('');
	$$('#length3').val('');
	$$('#total_tile3').html("<table><tr><td align='right'>Cost</td><td>&nbsp;</td><td>RM 0.00</td></tr><tr><td align='right'>Cement Bag</td><td>&nbsp;</td><td>0</td></tr><tr><td align='right'>Sand</td><td>&nbsp;</td><td>0 m<sup>3</sup></td></tr><tr><td align='right'>Aggregate</td><td>&nbsp;</td><td>0 m<sup>3</sup></td></tr></table>");
	
}); 
$$('#cal_tile4').on('click', function(){
	
	var width1 =$$('#width4').val();
	var length1 =$$('#length4').val();
	
	var total=(width1*length1)*84.50;
	
	$$('#total_tile4').html("<table><tr><td align='right'>Cost</td><td>&nbsp;</td><td>RM "+total.toFixed(2)+"</td></tr></table>");
	
});
$$('#tile_clr4').on('click', function(){
		
	$$('#width4').val('');
	$$('#length4').val('');
	
	$$('#total_tile4').html("<table><tr><td align='right'>Cost</td><td>&nbsp;</td><td>RM 0.00</td></tr></table>");
	
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

