/**
 * All our configurable data is kept or looked up  here 
 */

var config = {};

config.app = {};


// check if application is being run in Bluemix
if (process.env.VCAP_SERVICES) {

  config.app.port = process.env.VCAP_APP_PORT ;
  config.app.host = process.env.VCAP_APP_HOST ;
  

}
else {
   
	config.app.port = 3000;
    config.app.host = 'localhost';
	 
}

module.exports = config;
