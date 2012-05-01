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