!function (d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (!d.getElementById(id)) {
       js = d.createElement(s);
       js.id = id;
       js.src = "//platform.twitter.com/widgets.js";
       fjs.parentNode.insertBefore(js, fjs);
   }
} (document, "script", "twitter-wjs");


$("#informar_salario").click(function() {
	$('#myModal').modal({
	  keyboard: false
	});
});
$(function() {
	$("#informar_salario").click(function(e){
		$("#salary_amount").maskMoney({symbol:'R$ ', showSymbol:true, thousands:'.', decimal:',', symbolStay: true, allowZero:false, allowNegative:false})
	});
});

