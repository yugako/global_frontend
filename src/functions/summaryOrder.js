export default {
	
	validationFields(name) {
  		let elems = [...document.forms[name].elements];
  		let result = elems.every((elem) => {
  			return elem.value;
  		});
  		return result;
  	},
  	lightInputs(name) {
  		let elems = [...document.forms[name].elements];

  		elems.forEach(function(elem) {
  			if (!elem.value) {
  				if (!elem.classList.contains('border-danger')) {
  					elem.classList.add('border-danger');
  				}
  				
  			} else {
  				elem.classList.remove('border-danger');
  			}
  		});
  	},
  	cleanFields(name) {
  		let elems = [...document.forms[name].elements];
  		elems.forEach(function(elem) {
  			elem.value = '';
  		});
  	},
  	pickValues(name) {
  		let elems = [...document.forms[name].elements];
  		console.log(elems);
  		let values = elems.map(function(elem) {
  			return {[elem.getAttribute('name')]: elem.value};
  		});
  		return values;
  	},
  	toggleMessage() {
  		this.disabled = true;
  		setTimeout(() => {this.disabled = false;}, 1500)
  	},
  	 
}