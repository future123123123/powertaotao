function getTime(){
	let now=new Date()
	let h=now.getHours(),m=now.getMinutes(),s=now.getSeconds()
	let text=h>12? '':''
	let result=h+':'+m+':'+s+' '+text
	document.getElementById('getTime').innerText=result
	setTimeout(getTime,1000)
}
window.addEventListener('load',getTime)