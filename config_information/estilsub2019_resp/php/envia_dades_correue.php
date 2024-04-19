<?php
//activar per poder els errors//
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
//final activacio//


$destinatari_per_defecte = 'entorns.web@ub.edu';

$ara = getdate();
$dataAra = $ara['mday']."/".$ara['mon']."/".$ara['year']."\t".date("H:i");

//$missatge_no_alguncamp_ini ="El formulari no tÈ el camp ocult ";
//$missatge_no_nomFormulari = "nom_formulari";
//$missatge_no_correuDestinatari = "correu_destinatari";
$no_nomFormulari = false;
$no_correuDestinatari = false;

$dadesPassades = $_REQUEST;
if (!(isset($dadesPassades['nombreCampsAMostrar'])) || empty($dadesPassades['nombreCampsAMostrar']) ) {
	$dadesPassades['nombreCampsAMostrar'] = count($dadesPassades) - 4 ;
}
$nCampsAMostrar = $dadesPassades['nombreCampsAMostrar'];

if (!(isset($dadesPassades['nom_formulari'])) || empty($dadesPassades['nom_formulari']) ) {
	$no_nomFormulari = true;
	$dadesPassades['nom_formulari'] = $_SERVER['REQUEST_URI'];
}
$assumpte = 'Resposta al formulari ' . $dadesPassades['nom_formulari'];

if (!(isset($dadesPassades['correu_destinatari'])) || empty($dadesPassades['correu_destinatari']) ) {
	$no_correuDestinatari = true;
	$dadesPassades['correu_destinatari'] = $destinatari_per_defecte;
}
$perA = $dadesPassades['correu_destinatari'];

if (!(isset($dadesPassades['dades_tramesa'])) || ($dadesPassades['dades_tramesa'] != 'S') ) {
	$dtramesa = false;
} else {
	$dtramesa = true;
}

$capcaleres  = 'MIME-Version: 1.0' . "\r\n";
$capcaleres .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$missatge = $dataAra . ";/n";
//$avis = "<ul><li>" . $dataAra . "</li>\n";
$avis = "<table border='1'><tr><td align='right'><i>Tramesa</i></td><td>" . $dataAra . "</td></tr>\n";
$i = 0;

foreach ( $dadesPassades as $clau => $valor ) {
	if ($clau != "nombreCampsAMostrar") {
		//$missatge .= $clau . ": " . $valor . "\r\n";
		$missatge .= '"' . $clau . '": "' . $valor . '";';
		//$avis .= "<li>" . $clau . " => " . $valor . "</li>\n";
		if ($i < $dadesPassades['nombreCampsAMostrar'])	$avis .= "<tr><td align='right'><i>" . $clau . "&nbsp;</i></td><td>&nbsp;" . $valor . "</td></tr>\n";
	}
	$i++;
}

if ($dtramesa) {
	$missatge .= '"***Aqu&iacute; hi he de posar les dades de la tramesa***";';
}

$missatge .= '"Text final del missatge."';
//$avis .= "</ul>\n";
$avis .= "</tr></table>\n";
/*
$concert = $_REQUEST['concert'];
$nom = $_REQUEST['nom'];
$cognom = $_REQUEST['cognom'];
$email = $_REQUEST['email'];
$tlf = $_REQUEST['tlf'];
$assistents = $_REQUEST['assistents'];
$perA = 'ucc@ub.edu';
$assumpte = 'Inscripci√≥ al NeuroUB concerts - '.$concert;
$missatge = 'Concert: '.$concert.' - Nom: '.$nom.' - Cognom: '.$cognom.' - Email: '.$email.' - Telefon: '.$tlf.' - Assistents: '.$assistents;

$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
*/

$correu_dades = mail($perA, $assumpte, $missatge, $capcaleres);
if($correu_dades){
	echo "<p>La vostra petici&oacute; s&rsquo;ha enviat correctament: </p>\n";
	//var_dump($dadesPassades);
	echo $avis;
}
?>