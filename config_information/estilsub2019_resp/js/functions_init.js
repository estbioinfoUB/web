$(document).ready(function(){
	/*Afegim la capa fosca: */
	$('<div></div>', {
		'class': 'bg_gris',
	}).prependTo('.wrapper');


	/*Menú idiomes: */
	$('#top02-lang').addClass('js'); // Abans #top01 [2018-02-28].
	$('#languages li.selected').find('a').clone().prependTo('.wrapper').addClass('langhide');
	$('.langhide').click(function(){
		//$(this).addClass('active');
		$(this).toggleClass('active');
		$('#side-nav').css({'z-index':'5'});
		
		$('#top02-lang').toggleClass('open').promise().done(function(){ // Abans #top01 [2018-02-28].
			$('.bg_gris').toggleClass('active');
		});

	});

	
	/*Menú navegació: */
	/* $('#menu-nav h1').addClass('mobil');
	$('h1.mobil').click(function(){
		$('#menu-nav').css({'z-index':'20'})
		$(this).next('ul').toggleClass('open');
		$(this).toggleClass('open').promise().done(function(){
    				$('.bg_gris').toggleClass('active');
			});

	}); */
	
	$('#button').click(function(){
		$('#side-nav').css({'z-index':'10'})
		$(this).next('ul').toggleClass('open');
		$(this).toggleClass('open').promise().done(function(){
    				$('.bg_gris').toggleClass('active');
			});
		
	});
	
	/*Desabilita el fons gris: */
	$('.bg_gris').click(function(){
		$(this).toggleClass('active');
		$('h1.mobil').next('ul').removeClass('open');
		$('h1.mobil').removeClass('open');
		$('#top02-lang') .removeClass('open'); // Abans #top01 [2018-02-28].
		$('.langhide').removeClass('active');
	});
	
	/*Més info: */
	$('#info').addClass('hide');
	$('<div>',{
		id :'infomobil'
	}).appendTo('#sidebar');

	$('#info > ul').clone().prependTo('#infomobil');

	$('<a>',{
		id:'info-link',
		text: ' '
	}).insertBefore('#infomobil');
	
	$('#infomobil').hide();

	$('#info-link').click(function(){
		$('#infomobil').slideToggle();
	})
	
	
	/*ifraem transparent: */
	$('iframe').each(function(){
        var url = $(this).attr("src");
        $(this).attr("src",url+"?wmode=transparent");
    });
		
})
