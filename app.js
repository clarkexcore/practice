//intial namespace
var wineApp = {};

//wineApp init
wineApp.init = function(){
	wineApp.getWine();
}

var wineAppKey = 'Token MDo5MTFjNGNlMi00NGI5LTExZTctYTg1Ni04M2EzZGQxMDM2Zjg6WUN3NUFvVFV6Qno5RzhPZW9nZFhtN05SQTR6elRTbGRVdlBY'

wineApp.getWine = function(){
	$.ajax({
		url: 'https://lcboapi.com/products',
		headers: {'Authorization': 'Token MDo5MTFjNGNlMi00NGI5LTExZTctYTg1Ni04M2EzZGQxMDM2Zjg6WUN3NUFvVFV6Qno5RzhPZW9nZFhtN05SQTR6elRTbGRVdlBY'},
		method: 'GET',
		dataType: 'jsonp'
	}).then(function(data){
		console.log(data);
	})
}

//Document Ready!!
$(function(){
	wineApp.init();
})

