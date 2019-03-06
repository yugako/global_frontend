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
      console.log(elems)
  		elems.forEach(function(elem) {
  			if (!elem.value) {
  				if (!elem.classList.contains('danger')) {
  					elem.classList.add('danger');
  				}
  			} else {
  				elem.classList.remove('danger');
  			}
  		});
  	},
  	cleanFields(name) {
  		document.forms[name].reset();
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