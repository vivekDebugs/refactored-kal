		// Abstract Slider

		var slideIndex = 0;
		showSlides();

		function showSlides() {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");
		  for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";  
		  }
		  slideIndex++;
		  if (slideIndex > slides.length) {slideIndex = 1}    
		  for (i = 0; i < dots.length; i++) {
		    dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";  
		  dots[slideIndex-1].className += " active";
		  setTimeout(showSlides, 3000); // Change image every 3 seconds
		}

		// Feedback Slider

		var slideIndex2 = 0;
		showSlides2();

		function showSlides2() {
		  var i2;
		  var slides2 = document.getElementsByClassName("mySlides2");
		  var dots2 = document.getElementsByClassName("dot2");
		  for (i2 = 0; i2 < slides2.length; i2++) {
		    slides2[i2].style.display = "none";  
		  }
		  slideIndex2++;
		  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
		  for (i2 = 0; i2 < dots2.length; i2++) {
		    dots2[i2].className = dots2[i2].className.replace(" active2", "");
		  }
		  slides2[slideIndex2-1].style.display = "block";  
		  dots2[slideIndex2-1].className += " active2";
		  setTimeout(showSlides2, 5000); // Change image every 5 seconds
		}