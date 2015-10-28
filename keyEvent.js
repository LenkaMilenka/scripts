		//---------------------------------Part 1
		//function processed key press
		document.getElementsByTagName('input')[0].onkeypress = function(e){
			e = e || event;
			
			if(e.ctrlKey || e.altKey || e.metaKey) return;
			
			var chr =  getChar(e);
			
			if(chr == null) return;
			
			if(chr < '0' || chr > '9') {
				return false;
			}
		}
	
		//function get char
		//@param event - event	
		function getChar(event){
			if(event.which == null){
				if(event.keyCode < 32) return null;
				return String.fromCharCode(event.keyCode)
			}
			
			if(event.which != 0 && event.charCode != 0){
				if(event.which < 32) return null;
				return String.fromCharCode(event.which)
			}
			return null;
		}
		
	//----------------------------------Part 2
	  function showCount() {
		result.innerHTML = sms.value.length;
	  }

	  sms.onkeyup = sms.oninput = showCount;
	  sms.onpropertychange = function() {
		if (event.propertyName == "value") showCount();
	  }
	  sms.oncut = function() {
		setTimeout(showCount, 0); // in the moment oncut still old value
	  };
	  
	  //---------------------------------Part 3
	  //addition script for submit