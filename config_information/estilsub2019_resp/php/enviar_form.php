<?php
error_reporting(E_ALL);
$concert = $_REQUEST['concert'];
$nom = $_REQUEST['nom'];
$cognom = $_REQUEST['cognom'];
$email = $_REQUEST['email'];
$tlf = $_REQUEST['tlf'];
$assistents = $_REQUEST['assistents'];
$perA = 'ucc@ub.edu';
$assumpte = 'Inscripció al NeuroUB concerts - '.$concert;
$missatge = 'Concert: '.$concert.' - Nom: '.$nom.' - Cognom: '.$cognom.' - Email: '.$email.' - Telefon: '.$tlf.' - Assistents: '.$assistents;

$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";


$mail = mail($perA, $assumpte, $missatge, $cabeceras);
if($mail){
	echo "La teva petició s'ha enviat correctament";
}
?>