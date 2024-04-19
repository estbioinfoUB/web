<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ca" lang="ca">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title>Popup amb formulari</title>
	<link rel="stylesheet" type="text/css" href="../../plantilles/php/css/styles-ub.css" />
	<script type="text/javascript" src="../../plantilles/php/js/jquery-1.8.2.js"></script>
	<script type="text/javascript" src="../../plantilles/php/js/jquery.form.js"></script>
	<script type="text/javascript" src="../../plantilles/php/js/jquery.validate.js"></script> 
	<script type="text/javascript" language="javascript">
		$(document).ready(function(){
			$('#inscripcio').validate({
			submitHandler: function(form) {
				$(form).ajaxSubmit({
						target: "#resultat"
					});
				}
			});		
		});
	
		$(document).ajaxComplete(function(){
			$('#resultat').show();
			$('#inscripcio').hide();
		});
	</script>
	
</head>
<body>

	<!-- Inici 'popup'-->
	<div id="popup" style="width:400px; height:450px">

	<div id="resultat"></div>
		
	
		<form  method="post" id="inscripcio" action="enviar_form.php">
			<fieldset>
				<h3>Enviar la inscripci&oacute;</h3>
				<dl class="form-vert">
					<dt><label for="nom">Nom:</label></dt>
						<dd>
							<input type="text" id="nom" name="nom" class="required"/></dd>
							
					<dt><label for="nom">Cognoms:</label></dt>
						<dd>
							<input type="text" id="cognom" name="cognom" class="required"/></dd>
					
					<dt><label for="email">Adre&ccedil;a de correu electr&ograve;nic:</label></dt>
						<dd>
							<input id="email" type="text" name="email" class="required email"/></dd>
					
					<dt><label for="tlf">Tel&egrave;fon de contacte:</label></dt>
						<dd>
							<input id="tlf" type="text" name="tlf"/></dd>

					<dt><label for="assistents">Nombre d'assistents:</label></dt>
						<dd><input type="text" name="assistents" class="required number"/></dd>
						
					<input type="hidden" name="concert"  id="concert" value="<?php echo $_REQUEST['concert']; ?>"/>
				</dl>
			</fieldset>
			
			<div class="submit">
				<input type="submit" name="input" value="Envia-ho" class="button" />
			</div>
			
		</form>
		
	</div>
	<!-- Final 'popup' -->
	
</body>
</html>
