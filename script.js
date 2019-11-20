window.onload = function() {
function User() {
		this.name = getUserName();
		this.age = getUserAge();
		this.mail = getUserEmail(); 
	}
	function getUserName() {
		var name = document.getElementById("first").value;
		return name;
	}
	function getUserAge() {
		var age = document.getElementById("second").value;	
			return age;
	}
	function getUserEmail() {
		var mail = document.getElementById("third").value;
		return mail;
	}
/////////////////////////

	var touch = document.getElementById("touch");
	touch.addEventListener("click", buton);
	function buton() {
		var user = new User();
		var txt = JSON.stringify(user);	
		var node = document.createTextNode(txt);
		var newDiv = document.createElement("div");
		var bases = document.getElementById("bases");
		var nav = document.createElement("nav");
		bases.appendChild(nav);
		nav.innerHTML = "+";
		nav.appendChild(newDiv);
		newDiv.appendChild(node);
		newDiv.style.display="none";
		newDiv.style.color="black";
		newDiv.style.fontSize="1rem";
		var database = document.getElementsByTagName("nav");
		for (var i = 0; i < database.length; i++) {
			database[i].addEventListener("click", togl);
		}	
	}	
		function togl() {
			var database = document.getElementsByTagName("nav");
		for (var i = 0; i < database.length; i++) {
			database[i].classList.toggle("open");
		}
		var database = document.getElementsByTagName("nav");
		for (var i = 0; i < database.length; i++) {
			if ( database[i].classList.contains("open") === true ) {
				var newDiv = document.getElementsByTagName("div");
					for (var i = 0; i < newDiv.length; i++) {
						if (database[i] === event.target) {
					newDiv[i].style.display="block";
					}
				}
			} else if (database[i].classList.contains("open") === false ) {
					var newDiv = document.getElementsByTagName("div");
						for (var i = 0; i < newDiv.length; i++) {
							if (database[i] === event.target) {
						newDiv[i].style.display="none";
						}
					}
				}		
			}
		}
	}
		



			
			



		
