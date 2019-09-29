window.onload =()=> {
	if (typeof(browser) == undefined){
		console.log("no storage mechanism")
		return
	}

	//window.location = "http://www.google.com"

	if (localStorage.getItem("hist_xxx") == null) {
		var empty_hist = document.createElement('div') 
		empty_hist.innerHTML = "no prev data"
		document.body.appendChild(empty_hist)
	} else {
		//showing
		// getbtn.click()
	}
	var input = document.getElementById("input")
	var setbtn = document.getElementById("setbtn")
	var getbtn = document.getElementById("getbtn")
	var clear = document.getElementById("clear")
	var history = document.getElementById("history")

	setbtn.onclick =()=>{	 
		var prev_hist = localStorage.getItem("hist_xxx")
		localStorage.setItem("hist_xxx",prev_hist +","+input.value)
		// window.location = "http://www.google.com/search?q=" + input.value	 
	}

	getbtn.onclick =()=>{	 
		while (history.firstChild){
			history.removeChild(history.firstChild)
		}
		var hist =  localStorage.getItem("hist_xxx").split(",")
		for (var i=1;i<hist.length;i++){
			var div = document.createElement('div')
			div.innerHTML = "<a href=http://www.google.com/search?q="+hist[i]+">"+hist[i]+"</a>"
			history.appendChild(div)
		}
	}	
 
	clear.onclick =()=>{
		localStorage.removeItem("hist_xxx")
	}
}

