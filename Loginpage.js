"use strict";
 
var wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;

    // Setting Desired Capabilities.
var desiredCaps = {
    platformName: "Android",
    deviceName: "Mi A3",
    appPackage: "com.i3verticals.psm",
    appActivity: "com.i3verticals.psm.MainActivity",
        
};


 function testEribank() {
    //Initiating the Driver
       var driver =  new wd.Builder().usingServer("http://localhost:4723/wd/hub").withCapabilities(desiredCaps).build();
        
    // Locating the element 
        const userElement =  driver.findElement(By.xpath("//*[@class='android.widget.EditText' and ./parent::*[(./preceding-sibling::* | ./following-sibling::*)[@text='Email *']]]"));
    // Automation command.
         userElement.sendKeys("testpsm25@mailinator.com");
        var passwordElement =  driver.findElement(By.xpath("//*[@class='android.widget.EditText' and ./parent::*[(./preceding-sibling::* | ./following-sibling::*)[@text='Password *']]]"));
         passwordElement.sendKeys("Test@123");
        var loginElement =  driver.findElement(By.xpath("//*[@text='Login' and @class='android.widget.Button']"));
         loginElement.click();    
         
         driver.quit();
        }