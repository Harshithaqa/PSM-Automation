
describe('login form', () => {

    const Login = require('E:/Automation Testing - PSM/CY1_2021_P1/pageobjects/login.page.js');
    var using = require("jasmine-data-provider");
    var d=  require("E:/Automation Testing - PSM/CY1_2021_P1/data.js");


    using(d.DatadrivenLogin, function(data, description) {
    
        it('should allow access with correct creds', () => {
    
            Login.username.setValue(data.email);
            Login.password.setValue(data.password);
            Login.submit();
    
         //   Login.cancel.click();    
    
          //  Login.cancel.click();  
            
            
            driver.pause(5000);
    
    
          //  Login.menu();   
    
           /* driver.touchAction([
                { action: 'press',x: 500, y: 1400 },
                { action: 'moveTo',x: 500, y: 300 },
                'release'
    
            ])*/
           // Login.logout();
    
            driver.saveScreenshot('./screenshots/Loggedin.png');
    
        })
    })
    
    })
    module.exports = function LoginPage() {
        return "Hello World";
    }
    
    
    