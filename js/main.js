function responsivemenu(){
				let x=document.getElementById("nav");
				let y=document.getElementById("btn");
				 if (x.className === "navbar") {
		         x.className += " responsive";
		         btn.style.transform="rotate(90deg)";
		       } else {
		         x.className = "navbar";
		         btn.style.transform="rotate(0deg)";
		          };
			};
	