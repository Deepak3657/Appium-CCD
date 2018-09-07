const action=require('../support/utils.js');

class My_Profile{
    /**
     * define elements
     */
   get screen_name(){ return browser.element('#txtHeaderTitleText'); }
   get Mr_profile (){ return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView'); }
   get Ms_profile () { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView');}
   get name_field () { return browser.element('#ti1'); }
   get dob_field () { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.widget.TextView');}
   get previous_month () { return browser.element('#Previous month'); }
   get select_year () { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView[1]'); }
   get select_2017() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.ViewAnimator/android.widget.ListView/android.widget.TextView[6]'); }
   get calender_ok() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]'); }
   get calender_ok_id(){ return browser.element('android:id/button1'); }
   get state_field() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]'); }
   get select_karnataka() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[9]/android.widget.TextView'); }
   get select_andhraPradesh() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView'); }
   get select_veg() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup'); } 
   get select_non_veg() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup');}
   get email_id() { return browser.element('//android.widget.EditText[@content-desc="ti3"]'); }
   get profile_saveButton() { return browser.element('#tb1'); }
   get burgerMenu (){ return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup'); }
   get personalizeOffers() { return browser.element('#burgerMenuItemOfferPreferencesText'); } ////android.widget.TextView[@content-desc="burgerMenuItemOfferPreferencesText"]
   get sit_n_order() { return browser.element('#btnImage1_large'); }
   get snackbar() { return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.widget.TextView'); }
   get state(){return browser.element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.widget.TextView')}
     /**
     * define methods
     */

   
   getText_snackbar(){
        action.scroll(643,1014,0,-160);
        this.profile_saveButton.click();
        this.snackbar.waitForExist();
        return this.snackbar.getText();
       }
   
   goTo_personalizeOffers(){
    this.sit_n_order.waitForExist();
    this.burgerMenu.click();
    this.personalizeOffers.click();
    this.name_field.waitForExist();
    return this.screen_name.getText(); 
     }

    set_personalizeOffers_name(name){
        this.name_field.setValue(name);
        action.presskey(66);
        action.wait(1000);
        return this.getText_snackbar()
    }

   myProfile_email(email_id){
      action.scroll(643,1014,0,-160);
      this.email_id.setValue(email_id);
      action.presskey(66);
      action.wait(1000);
      this.profile_saveButton.click();
      this.snackbar.waitForExist();
      return this.snackbar.getText();
   }
    
    set_DateField(){
     this.dob_field.click();
     action.wait(500);
     this.select_year.click();
     this.select_2017.click();
     action.wait(1000);
     action.tapByCordinates(356,632);
     action.wait(300);
     action.tapByCordinates(552,1053)
     action.wait(2000);
     return this.getText_snackbar();
    }

//   snackbar(){
//         var promise1 = new Promise(function(resolve, reject) {
//           browser.waitForExist('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.widget.TextView')
//           var text= browser.getText('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.widget.TextView');
//          //console.log("wait",text);
//           resolve(text);
//           });
//         return promise1;
//   }



          // this.sit_n_order.waitForExist();
          // this.burgerMenu.click();
          // this.personalizeOffers.click();
          // this.Mr_profile.waitForExist();
          // this.set_myProfile_name();
  
    //  promise1.then(function(value) {
    //     }).catch(err=>{
    //     console.log("error is",err);
    // })
//     setTimeout(function(){
//     //console.log("text",get_function);
//     text=get_function;
// });

        

}


module.exports = My_Profile;
