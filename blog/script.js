var opener2

window.onload = function() {
	opener2 =window.opener;
}

function signUp() {
	var userId = document.getElementById("userId").value
	var userPw = document.getElementById("userPw").value
	var userPw2 = document.getElementById("userPw2").value
	var userName = document.getElementById("userName").value
	var g = document.getElementsByName("gender")
	for (var i = 0; i < g.length; i++) {
		if (g[i].checked)
			gender = g[i].value
	}
	var area = document.getElementById("area").value
	var address = document.getElementById("address").value
	var h = document.getElementsByName("취미")
	var hobby=''
	for(var i=0; i<h.length; i++){
		if(h[i].checked){
			hobby+=h[i].value+' '
		}
	}
	console.log(userId, userPw, userName, gender, area, address, hobby)


	/*if(userName.length<1){
		alert("이름을 입력해주세요")
		document.getElementById("userName").select()
		return
		
	}
	if(userPw.length<1){
		alert("비밀번호를 입력해주세요")
		document.getElementById("userPw").select()
		return
		
	}if(userPw2.length<1){
		alert("비밀번호를 확인해주세요")
		document.getElementById("userPw2").select()
		return
		
	}
	if(userPw!==userPw2){
		alert("비밀번호를 확인해주세요")
		document.getElementById("userPw2").select()
		return
	}
	var flag=1
	for(var i=0; i<userId.length; i++){
		if(isNaN(userId[i]))
			flag=0
		
	}
	if(flag===1){
		alert("문자를 하나이상 입력해주세요")
		document.getElementById("userId").select()
		return
	}
	
	flag=1
	for(var i=0; i<userName.length; i++){
		if(!isNaN(userName[i]))
			flag=0
	}
	if(flag===0){
		alert("문자만 입력해주세요")
		document.getElementById("userName").select()
		return
	}
	
	if(address.length<1){
		alert("주소를 입력해주세요")
		document.getElementById("address").select()
	}
	*/
	var arr = userId +" "+ userPw+" "+ userName+" "+gender+" "+area+" "+address+" "+hobby
	console.log(opener2);
	opener2.document.getElementById("result").innerHTML = arr
	
	document.userInput.submit()

	
}

function redo() {
	document.getElementById("userId").value = ''
	document.getElementById("userPw").value = ''
	document.getElementById("userName").value = ''
	document.getElementById("area").value = '서울'
	document.getElementById("address").value = ''

}
function closeWindow(){
	this.window.close("signUp.html")
}
