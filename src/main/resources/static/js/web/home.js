//se guia por el id de home.html "btnEmpezarS"
$(document).on("click","#btnEmpezar",function(){
	//quitamos la alerta para agregarle una alerta mejor de bootstrap llamando al id modalEmpezar
	//alert("Homa Mundo Javascript");
	//definimos variables locales con let
	let usuario = $("#txtusuario").val();
	let password = $("#txtpassword").val();
	
	$("#lbldatos").text("Usuario: " + usuario + " - Password : " + 	password );
	$("#modalEmpezar").modal("show");
})