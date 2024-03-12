const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('QNOVSjIWww', uuidlib.v4());
	}

module.exports = generateId
