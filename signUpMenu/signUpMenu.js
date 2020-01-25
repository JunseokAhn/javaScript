function join(){
	var userId = document.getElementById("userId").value
	var userPw = document.getElementById("userPw").value
	var userPw2 = document.getElementById("userPw2").value
	var userName = document.getElementById("userName").value
	var phone1 = document.getElementById("phone1").value
	var phone2 = document.getElementById("phone2").value
	var phone3 = document.getElementById("phone3").value
	
	console.log(userId, userPw, userPw2, userName, phone1, phone2, phone3)

	// 아이디:3~5 비번:3~5 비번확인
	if(userId.length<3 || userId.length>5){
		alert("3~5자리 안의 아이디를 입력해주세요")
		document.getElementById("userId").select()
		return
	}
	if(userPw.length<3 || userPw.length>5){
		alert("3~5자리 안의 패스워드를 입력해주세요")
		document.getElementById("userPw").select()
		return
	}
	if(userPw!=userPw2){
		alert("비밀번호가 비밀번호확인과 다릅니다.")
		document.getElementById("userPw2").select()
		return
	}
	// 이름notnull 전화번호 notnull,숫자
	
	if(userName.length<1){
		alert("이름을 입력해주세요")
		document.getElementById("userName").select()
		return
	}	
	var bol=0
	for(var i=0; i<userName.length; i++){
		if(!isNaN(userName[i])){
			bol=1
		}
	}
	if(bol==1){
		alert("문자만 입력하세요")
		document.getElementById("userName").select()
		return
	}
	if(phone2.length<1){
		alert("전화번호를 입력해주세요")
		document.getElementById("phone2").select()
		return
	}
	if(isNaN(phone2)){
		alert("숫자만 입력해주세요")
		document.getElementById("phone2").select()
		return
	}
	
	if(phone3.length<1){
		alert("전화번호를 입력해주세요")
		document.getElementById("phone3").select()
		return
	}
	if(isNaN(phone3)){
		alert("숫자만 입력해주세요")
		document.getElementById("phone3").select()
		return
	}
	// 성별라디오
	var res ="userId : " + userId + "<br>userPw : "+ userPw +"<br>userName : "+ userName + "<br>phone : "+ phone1 +"-"+ phone2 +"-"+ phone3
	document.getElementById("result").innerHTML = res
}

function cancle(){
	var userId = document.getElementById("userId").value = ''
	var userPw = document.getElementById("userPw").value = ''
	var userPw2 = document.getElementById("userPw2").value = ''
	var userName = document.getElementById("userName").value = ''
	var phone2 = document.getElementById("phone2").value = ''
	var phone3 = document.getElementById("phone3").value = ''
}