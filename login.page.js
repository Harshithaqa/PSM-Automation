class Login {

    get username() {return $("//*[@class='android.widget.EditText' and ./parent::*[(./preceding-sibling::* | ./following-sibling::*)[@text='Email *']]]")};

    get password() {return $("//*[@class='android.widget.EditText' and ./parent::*[(./preceding-sibling::* | ./following-sibling::*)[@text='Password *']]]")};

    get loginbtn() {return $("//*[@text='Login' and @class='android.widget.Button']")};

    get cancel() {return $("//*[@text='CANCEL']")};

    get Dashboard() {return $("//*[@text='Dashboard']")};

    get Menu() {return $("//*[@text='menu']")};
    get Notification() {return $("//android.view.View[4]/android.view.View[1]/android.view.View/android.view.View")};
    get Balance() {return $("//android.view.View[2]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]")};
    get Selectbal() {return $("//android.widget.RadioButton[4]")};
    get Continuebtn() {return $("//android.widget.Button[@text = 'CONTINUE']")};
    get toggle() {return $("//android.view.View[3]/android.view.View[1]/android.view.View[1]/android.widget.CheckBox/android.view.View")};

    get DOM() {return $("//*[@text='Last Day']")};
    get DOMvalue() {return $("//android.widget.RadioButton[4]")};




    get Logout() {return $("//*[@text='Logout']")};
    get Profile() {return $("//*[@text='Your Profile']")};
    get EspanolProfile() {return $("//*[@text='Su perfil']")};

    get Fname() {return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText")};
    get email() {return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText")};
   // get Password() {return $("//*[@class='alert-input' and ./parent::*[(./preceding-sibling::* | ./following-sibling::*)[@text='Enter Password *']]]")};
   // get Password1() {return $("//*[@resource-id='alert-input-2-0']")};
    get Password1() {return $("//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[1]/android.view.View[1]/android.app.Dialog[1]/android.view.View[2]/android.view.View[3]/android.view.View[1]/android.widget.EditText[1]")};
//android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[1]/android.view.View[1]/android.app.Dialog[1]/android.view.View[2]/android.view.View[3]/android.view.View[1]/android.widget.EditText[1]

    //android.app.Dialog
    get Lname() {return $("//android.view.View[@index='3']")};


    get Okbtn() {return $("//*[@text='OK']")};

    get Profile() {return $("//*[@text='Your Profile']")};
    get Update() {return $("//*[@text='Update']")};
    get Language() {return $("//android.widget.Button[@text = 'globe']")};

  //  get Language() {return $("//*[@text='globe']")};
    get Espanol() {return $("//*[@text='Espanol(US)']")};
    get continue() {return $("//*[@text='CONTINUE']")};
    get Yes() {return $("//*[@text='YES']")};
    get Languagepreference() {return $("//android.view.View[@text = 'Espanol(US)']")};
    //get EspanolMenu() {return $("//*[@text=']")};



    get SecureAccount() {return $("//android.view.View[@text = 'Secure Account']")};
    get Q1() {return $("//android.view.View[5]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.view.View[2]")};
    get selectq1() {return $("//android.app.Dialog/android.view.View[1]/android.widget.Button[1]")};
    get Answer1() {return $("//android.view.View[6]//android.widget.EditText")};

    get Q2() {return $("//android.view.View[5]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.view.View[2]")};
    get selectq2() {return $("//android.app.Dialog/android.view.View[1]/android.widget.Button[1]")};
    get Answer2() {return $("//android.view.View[6]//android.widget.EditText")};

    get Q3() {return $("//android.view.View[8]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.view.View[2]")};
    get selectq3() {return $("//android.app.Dialog/android.view.View[1]/android.widget.Button[1]")};
    get Answer3() {return $("//android.view.View[9]//android.widget.EditText")};
    get Update() {return $("//android.widget.Button[@text = 'Update']")};


    open() {
        super.open('login')
    }

    submit() {
        this.loginbtn.click()
    }

    
    logout() {
        this.Logout.click()
    }

    menu() {
        this.Menu.click()
    }
}

module.exports = new Login();