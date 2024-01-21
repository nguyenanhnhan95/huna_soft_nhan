/**
 * 
 */

toastr.options = {
  	"closeButton": true,
  	"debug": false,
  	"newestOnTop": false,
  	"progressBar": false,
  	"positionClass": "toast-top-right",
  	"preventDuplicates": true,
  	"onclick": null,
  	"showDuration": "300",
  	"hideDuration": "1000",
  	"timeOut": "5000",
  	"extendedTimeOut": "1000",
  	"showEasing": "swing",
  	"hideEasing": "linear",
  	"showMethod": "fadeIn",
  	"hideMethod": "fadeOut"
};
function toastrSuccess(str, title) {
	toastr.success(str, title);
};
function toastrInfo(str, title) {
	toastr.info(str, title);
};
function toastrWarning(str, title) {
	toastr.warning(str, title);
};
function toastrError(str, title) {
	toastr.error(str, title);
};

window.onscroll = function() {
	var scrollLimit = 40;
	var actions = $(".form-action");
	var headerNav = $("nav.header-navbar .navbar-container");
	if (window.scrollY >= scrollLimit) {
		if (actions && !actions.hasClass("fixed")) {
			actions.addClass("fixed");
			actions.width(headerNav.outerWidth());
			actions.height(headerNav.outerHeight());
		}
	} else {
		if (actions && actions.hasClass("fixed")) {
			actions.removeClass("fixed");
			actions.removeAttr( 'style' );
		}
	}
};

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

function printElement(elemId)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(elemId).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}

/**
 * position: fixed; top: 20px; z-index: 12; width: calc(100% - 317px);
 */