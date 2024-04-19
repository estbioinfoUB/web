/**
 *  @file		jquery.init_estilsub2015.js
 *  @brief		Conjunt de funcions jQuery utilitzades en les pàgines amb plantilles estilsUB2014_i18n
 *  @version	2015-05-19 <- Agrupo tots els fitxers jquery.init_
 *  @version	2015-06-10 <- Petites correccions (tabuladors) i optimització del fitxer.
 */

//*******************************************************************
//**                  jquery.init_menus.js                         **
//*******************************************************************
/** ////////////////////////////////////////////////////////////////////////////////////
 * @name		fn.prep_mnu()
 *	@Brief	Javascript per preparar i activar els menús desplegables.
				////////////////////////////////////////////////////////////////////////////
				//  Per cridar la funció, cal posar al <head> l'script:
				//
				//		$(document).ready(function(){
//				//			$('.side-nav').prep_mnu();
				//			$('.menu-nav').prep_mnu();
				//		});
				//
				////////////////////////////////////////////////////////////////////////////
 * @author	Jordi Guilleumes, Entorns Web  - Universitat de Barcelona.
 * @version	2013-04-04
 * @version	2014-04-10: Corregit problema en dobles llistes fora del menú [34 $('#menu-enll li:has(ul)')]
////////////////////////////////////////////////////////////////////////////////////////
*/
$.fn.prep_mnu = function() {
	$(this).find('ul li ul').hide();
	//$(this).find('ul li.open').removeClass('open');
	$(this).find('ul li.open ul').show();
	//$(this).find('ul li:not(:has(ul))').addClass('nosub');
	$(this).find('ul li').addClass('nosub');
	$(this).find('ul li:has(ul)').removeClass('nosub');
	$(this).find('li ul li').removeClass('nosub');
	$(this).find('ul li:has(ul li a.selected)').addClass('open');
	
	//$(this).find('li ul li').append(" <a href='#'>" + menys + " </a>");	// NO (2013-05-28).
	//$('li:has(ul)').css('cursor', 'pointer');	// Ok (2013-05-29).
	// Mostra els elements de llista que contenen una subllista com a enllaços 
	// [http://api.jquery.com/css/], 2013-05-29):
//	$('#menu-enll li:has(ul)')
	$('#side-nav li:has(ul)')
		.on("mouseenter", function() {
			$(this).css({
				"color": "#0059A2",
				/*"border-bottom": "1px dotted #0059A2",*/
				/*"text-decoration": "underline",*/
				"cursor": "pointer"
			});
		})
		.on("mouseleave", function() {
			$(this).css({
				"color": "",
				"cursor": ""
			});
		})
	
	// Mostra i oculta els menús secundaris
//	  $('#menu-enll li').click(
	$('#side-nav li').click(
	//$('.side-nav ul li:has(ul):not(.open)').click(
		function(e)
		{
			//e.preventDefault();
			$('#side-nav li ul').hide();
			$('#side-nav li').removeClass('open');
//			$('#menu-enll li').not('a.selected').removeClass('open');
//			$('#menu-enll li:not(a.selected)').removeClass('open');
			$('#side-nav li:has(li a.selected)').addClass('open');
			$(this).addClass('open');
//			$(this).find('ul').css({display: "block"});
			$('li.open ul').css({display: "block"});
		}
	);
}

/** ////////////////////////////////////////////////////////////////////////////////////
 * @name		fn.selec_mnu()
 * @brief	Javascript detectar pàgina actual i seleccionar-la en menú desplegable.
				////////////////////////////////////////////////////////////////////////////
				//  Per cridar la funció, cal posar al <head> l'script:
				//
				//		$(document).ready(function(){
				//			$().selec_mnu();
				//		});
				//
				////////////////////////////////////////////////////////////////////////////
				//		Fet a partir de "Tutorials:Auto-Selecting Navigation"
				//      [http://docs.jquery.com/Tutorials:Auto-Selecting_Navigation] @2010
				////////////////////////////////////////////////////////////////////////////
 * @author	Jordi Guilleumes, Entorns Web  - Universitat de Barcelona.
 * @date	   2013-04-24
 * @version	2018-03-02 - Canvi de classes per a plantilla responsiva 2018.
////////////////////////////////////////////////////////////////////////////////////////
*/
$.fn.selec_mnu = function() {
	var url_actual = location.pathname; // URL.
	var pag_actual = url_actual.substring(url_actual.lastIndexOf('/') + 1); // Pàgina.
	var param_actual = location.search; // Paràmetres.
	if (pag_actual) {
		// Troba l'element actual:
		// seleccionat = $('#menu-enll a[href$="' + pag_actual + param_actual + '"]');
		seleccionat = $('#side-nav a[href$="' + pag_actual + param_actual + '"]');
		// Activa la classe 'seleccionat' per a l'element actual:
//		seleccionat..addClass('selected');
		seleccionat.parent().addClass('selected');
		// Deixa obert el submenú:
		seleccionat.parent().parent().parent('li').addClass('open');
	}
}


//*******************************************************************
//**                  jquery.init_taules.js                        **
//*******************************************************************
/** ////////////////////////////////////////////////////////////////////////////////////
 * @name		destacaFilaActual()
 * @brief	Javascript per activar el destacat ('highlight') de la fila actual de taules tipus 'zebra'.
				////////////////////////////////////////////////////////////////////////////
				//  Per cridar la funció, cal posar al <head> l'script:
				//
				//		$(document).ready(function(){
				//			destacaFilaActual();
				//		});
				//
				////////////////////////////////////////////////////////////////////////////
				//		Fet a partir de "Survey"
				//      [http://access2learn.com/survey1/quest3.php] 
				////////////////////////////////////////////////////////////////////////////
 * @author	Jordi Guilleumes, Entorns Web  - Universitat de Barcelona.
 * @version	2013-04-30
////////////////////////////////////////////////////////////////////////////////////////
*/
function destacaFilaActual() {
	$('.destacafilaact  tbody tr').hover(function() { $(this).addClass('fila_destacada'); }, function() { $(this).removeClass('fila_destacada'); });
}



//*******************************************************************
//**                   jquery.init_tabs.js                         **
//*******************************************************************
/** ////////////////////////////////////////////////////////////////////////////////////
 * @name		destacaFilaActual()
 * @brief	Javascript per preparar i activar els tabuladors auto-ocults.
				////////////////////////////////////////////////////////////////////////////
				//  Per cridar la funció, cal posar al <head> l'script:
				//
				//		$(document).ready(function(){
				//			$('#tabs').tabs();
				//		});
				//
				////////////////////////////////////////////////////////////////////////////
 * @author	Marcel Safont, Entorns Web  - Universitat de Barcelona.
 * @version	2013-03-12
////////////////////////////////////////////////////////////////////////////////////////
*/
$.fn.tabs = function(){
	
	/*variables inicials*/
	/*Percentatge d'amplada segons nombre de tabuladors:*/
	// var nombre_tabs = $(this).find('.paginador li').length;
	// var percentatge = 100/nombre_tabs+"%";

	/*Amaguem tots els divs excepte el primer:*/
	$(this).find('div.contingut-tabulador').hide();
	$(this).find('div.contingut-tabulador').eq(0).show();
	// $(this).find('.paginador li').css({'width':percentatge});
	$(this).find('.paginador li').eq(0).addClass('active');

	/*Programem el clic als enllacos:*/
	$(this).find('.paginador a').click(function(event){
		event.preventDefault();
		var num = $(this).parent().index();
		$('ul.paginador li').removeClass('active');
		$(this).parent().addClass('active');
		$('#tabs').find('div.contingut-tabulador').hide();
		$('#tabs').find('div.contingut-tabulador').eq(num).show();
	});

	//Agafa el paràmetre passat i obre el tabulador: 
	// (Cal passar solament el número de tabulador (p.ex.: "...html?3"))
	var url = window.location.search;
	var parametre = url.split('?');
	var num_tabulador = parametre[1];
	if (num_tabulador) {
		$().selec_mnu();
		num_tabulador -=1;
		$('html, body').animate({
			 scrollTop: $("#tabs").offset().top
		}, 300);
		if (num_tabulador<=4) {
			$('.paginador').find('li').removeClass('active');
			$('.paginador').find('li').eq(num_tabulador).addClass('active');
			$('#tabs').find('div.contingut-tabulador').hide();
			$('#tabs').find('div.contingut-tabulador').eq(num_tabulador).show();
		}
	}
}


//*******************************************************************
//**            jquery.init_expandir_contreure.js                  **
//*******************************************************************
/** ////////////////////////////////////////////////////////////////////////////////////
 * @name		fn.contreureCaixa()
 * @brief	Javascript per contreure-expandir una caixa de text.
				////////////////////////////////////////////////////////////////////////////
				//  Per cridar la funció, cal posar al <head> l'script:
				//
				//		$(document).ready(function(){
				//		   	// Crida al programa per contreure-expandir caixes:
				//		   	// Cal posar al <head> l'script <script type="text/javascript" src="jquery.init_expandir_contreure.js"></script>:
				//			$('.titol-desplegable').contreureCaixa();
				//		});
				//
///////////////////////////////////////////////////////////////////////////////////////
 * @author	Marcel Safont, Entorns Web  - Universitat de Barcelona.
 * @version	2013-04-16
 * @author	Jordi Guilleumes, Entorns Web - Universitat de Barcelona
 * @version	2015-12-04
	/////////////////////////////////////////////////////////////////////////////////////
 */
$.fn.contreureCaixa = function(){
 	this.each(function(){
		
		//$(this).next('.contingut-desplegable').hide();
		//$(this).addClass('plegat');
		//manejador deventos al click del titol
		$(this).click(function(){
			//amaguem tots els divs amb contingut desplegable
			$('.contingut-desplegable').hide();
			$('.titol-desplegable').removeClass('desplegat');
			$('.titol-desplegable').addClass('plegat');
			
			//event.preventDefault();
			$(this).next('div.contingut-desplegable').slideToggle();
			$(this).toggleClass('desplegat', 'plegat');
		})
	});
}
/* $.fn.contreureCaixa = function(){
	this.each(function(){
		//amaguem tots els divs amb contingut
		$(this).next('.contingut-desplegable').hide();
		$(this).addClass('plegat');
		//manejador deventos al click del titol
		$(this).click(function(){
			//event.preventDefault();
			$(this).next('div.contingut-desplegable').slideToggle();
			$(this).toggleClass('desplegat', 'plegat');
		})
	});

} */

/** ////////////////////////////////////////////////////////////////////////////////////
 * @name		fn.contreureText()
 * @brief	Javascript per contreure-expandir blocs de text ("(+) Més").
				////////////////////////////////////////////////////////////////////////////
				//  Per cridar la funció, cal posar al <head> l'script:
				//
				//		$(document).ready(function(){
				//			// Crida al programa per contreure-expandir blocs de text ("(+) Més"):
				//			// Cal posar al <head> l'script <script type="text/javascript" src="jquery.init_expandir_contreure.js"></script>:
				//			$('.contret').contreureText(0);
				//		});
				//
				///////////////////////////////////////////////////////////////////////////
 * @author	Marcel Safont, Entorns Web  - Universitat de Barcelona.
 * @version	2013-04-16
 * @version	2013-05-08 -> Canviada comprovació arguments passats (error en IE i Chrome). Jordi Guilleumes.
	////////////////////////////////////////////////////////////////////////////////////
*/
$.fn.contreureText = function(num, mes, menys){ 
	if ( arguments.length < 3 ) {
		menys = "Veure&apos;n menys"
	}
	if ( arguments.length < 2 ) {
		mes = "Veure&apos;n m&eacute;s"
	}
	this.each(function(){
		$(this).find('p').hide();
		$(this).find('ul').hide();
		$(this).find('ol').hide();
		//$(this).find('p').eq(num).show().append("<span class='text_dreta'><a href='#' class='obrir'> [+] " + mes + " </a></span>");
		//$(this).last('p').last().append("<span class='text_dreta'> <a href='#' class='tancar'> [-] " + menys + " </a></span>");
		$(this).find('p').eq(num).show().append("<p class='obrir'> <a href='#'> [+] " + mes + " </a> </p>");
		$(this).last('p').last().append("<p class='tancar'>  <a href='#'> [-] " + menys + " </a> </p>");
		$('.tancar').hide();
		$('.obrir').click(function(event){
			event.preventDefault();
			$(this).parent().parent().find('p').show();
			$(this).parent().parent().find('ul').show();
			$(this).parent().parent().find('ol').show();
			$(this).parent().parent().find('.obrir').hide();
			$(this).parent().parent().find('.tancar').show();
		});
		$('.tancar').click(function(event){
			event.preventDefault();
			$(this).parent().find('p').hide();
			$(this).parent().find('ul').hide();
			$(this).parent().find('ol').hide();
			$(this).parent().find('p').eq(num).show();
			$(this).hide();
			$(this).parent().parent().find('.obrir').show();			
		})
	});
};

/** ////////////////////////////////////////////////////////////////////////////////////
 * @name		fn.contreureText()
 * @brief	Javascript que activa la contracció/expansió de blocs i de text.
				////////////////////////////////////////////////////////////////////////////
				//  Per cridar la funció, cal posar al <head>:
				//
				//		<script type="text/javascript" src="jquery.init_expandir_contreure.js"></script> 
				//
				////////////////////////////////////////////////////////////////////////////
 * @author	Jordi Guilleumes, Entorns Web  - Universitat de Barcelona.
 * @version	2013-04-16
	/////////////////////////////////////////////////////////////////////////////////////
 */
$(document).ready(function(){
	/* $().selec_mnu();	// selecciona l'element de menú actual.
	$('.side-nav').prep_mnu();	// prepara els menús desplegables. */
	$().selec_mnu();	// selecciona l'element de menú actual.
	/* $('#side-nav').prep_mnu();	// prepara els menús desplegables. */ // Desactivat x plantilles 2018 [2018-04-05].
	
	//$(".zebra tr:even td").addClass("senar");	// Per tal que s'apliqui l'estil, cal definir la taula amb la classe 'zebra'. <-- Obsolet: posat ja per CSS '.zebra tr:nt-child(even)' (2013-05-22). 
	destacaFilaActual();	// Activa el destacat de la fila de la taula on hi ha 'hover'.
	
	$('#tabs').tabs();	// prepara els tabuladors.

	// Crida al programa per contreure-expandir caixes:
	// Cal posar al <head> l'script <script type="text/javascript" src="jquery.init_expandir_contreure.js"></script>:
	$('.titol-desplegable').contreureCaixa();
	// Crida al programa per contreure-expandir blocs de text ("(+) Més"):
	// Cal posar al <head> l'script <script type="text/javascript" src="../../plantilles/js/jquery.contreureTexta.js"></script>:
	$('.contret').contreureText(0);

})

