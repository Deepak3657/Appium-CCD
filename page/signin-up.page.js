const action=require('../support/utils.js');

class Sign_in {
   //var LoginPage = Object.create({
   //username: function () { return browser.element('#username'); }
    /**
     * define elements
     */
   
    //  constructor(){
    //      this.mobile_number_feild=browser.element('#signup_ti1');
    //  }
    
    //get mobile_number_field () { return browser.element('#signup_ti1');}
    get mobile_number_field() { return browser.element('#signup_ti1'); }
    get login_button () { return browser.element('#signup_tb1'); }
    get TnC_button () { return browser.element('#tnc_tb1'); }
    get TnC_checkbox () { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]'); }
    get TnC_text() {return browser.element('hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[2]');}
    get allow_sms() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'); }
    get deny_sms() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[1]'); }
    get welcomeback_button() { return browser.element('#tb5'); }
    get allow_location () { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]'); }
    get deny_location() { return browser.element('com.android.packageinstaller:id/permission_deny_button'); }
    get referralCode_field () { return browser.element('#referCode_ti1'); }
    get submitReferral_button () { return browser.element('#submitReferralCode_tb1'); }
    get noReferral_button() { return browser.element('#noReferralCode_tb1'); }
    get welcome_back_text(){ return browser.element('#welcome_back'); }
    get snackbar() {return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.widget.TextView');}
    get unableToProceed(){ return browser.element('#whatsHappeningTxtView3');}
    //get welcome_button() { return browser.element('#tb5'); }
    
   
    /**
     * define methods
     */

    sign_in(mobile_number) {
       this.mobile_number_field.waitForExist();
       this.mobile_number_field.setValue(mobile_number);
       //action.wait(3000);
    };

   allow_SMS(){
          this.login_button.click();
          action.wait(1000);
          this.allow_sms.click();
   };
    
    refer_code(referral_code){
        this.referralCode_field.setValue(referral_code);
    }


    // back() {
    //     return browser.back();
    // }

    // appReset() {  
    //     return browser.reset('in.fourthlion.ccd.mobileapp'); 
    // }

    // setNetworkConnection(value) {
    //     return browser.setNetworkConnection(value)
    // }
    
    submit(){
        this.login_button.click();
    }

    get_snackbar(){
     this.snackbar.waitForExist();
     return this.snackbar.getText();
     }

}



// Sign_in.prototype.back() = function(){
//     return browser.back();
// }


module.exports = Sign_in;

