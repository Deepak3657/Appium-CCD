const Sign_in = require('../page/signin-up.page.js');
const chai = require('chai');
const action = require('../support/utils.js');
const mysql = require('../support/mySQL.js');
//var random= require('random-number');
const expect = chai.expect;
const assert = chai.assert;
//var mysql = require('mysql');


const sign_in = new Sign_in();

// var randomNumberOptions = {
//   min:  3000000000,
//   max:  5999999999,
//   integer: true
// }

// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "lapptest",
//   password: "W4ut6EdAQnR",
//   port:2345,
//   database:"lapptransdb"
// })


describe('Testing signin', function () {
    const validNumber = '8095499349';
    const invalidNumber = '45637';
    const referralCode = 'DPAK75';

    // before(function(){
    //     con.connect(function(err) {
    //      if (err) throw err;
    //      console.log('connected to mySql');
    //           });
    //     });

    beforeEach(function(){
       action.appReset('in.fourthlion.ccd.mobileapp');
      });

    //   after(function(){
    //       //mysql.con.end();
    //   });

    function updateDb(randomNumberOptions) {
        var randomMobileNumber=random(randomNumberOptions);
        console.log("random mobile number is:-",randomMobileNumber)
        var sql = `update customer set mobile_number=${randomMobileNumber} where mobile_number=${8095499349}`;
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
          });
    }
 
     
    
 it('cheching for Sign-in(with referral code)', function () {
    mysql.upDate_DB(); 
    updateDb(randomNumberOptions);
    sign_in.waitForExist('#signup_ti1');
    sign_in.sign_in(validNumber);
    sign_in.login_button.click();
    sign_in.wait(1000);
    sign_in.allow_sms.click();
    sign_in.waitForExist('#ask_referCode');
    sign_in.refer_code(referralCode);
    sign_in.submitReferral_button.click();
    sign_in.waitForExist('#welcome_msg4');
    var text = sign_in.getText('#welcome_msg4');
    sign_in.welcome_button.click();
    sign_in.wait(2000);
    sign_in.allow_location.click();
    sign_in.waitForExist('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView');
    var myProfile_text = sign_in.getText('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView')
    expect(myProfile_text.replace(/(\r\n\t|\n|\r\t)/gm," ")).to.equal('Personalize offers');
  });
    
 
 it('checking for sign-in(without referral code)', function(){
   updateDb(randomNumberOptions);
   sign_in.waitForExist('#signup_ti1');
   sign_in.sign_in(validNumber);
   sign_in.login_button.click();
   sign_in.wait(1000);
   sign_in.allow_sms.click();
   sign_in.waitForExist('#ask_referCode');
   sign_in.noReferral_button.click();
   sign_in.waitForExist('#welcome_msg4');
   var text = sign_in.getText('#welcome_msg4');
   console.log(text);
   sign_in.welcome_button.click();
   sign_in.wait(2000);
   sign_in.allow_location.click();
   sign_in.waitForExist('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView');
   var myProfile_text = sign_in.getText('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView')
   expect(myProfile_text.replace(/(\r\n\t|\n|\r\t)/gm," ")).to.equal('Personalize offers');
 });
 


 it('Log-in should not happen for a invalid mobile number', function () {
     sign_in.sign_in(invalidNumber);
     action.presskey(66)
     sign_in.login_button.click();
     var text = sign_in.get_snackbar();
     console.log(text);
     expect(text).to.equal('Enter valid mobile number');
 });

 it('Do not enter mobile number', function () {
     sign_in.mobile_number_field.waitForExist()
     sign_in.login_button.click();
     var text = sign_in.get_snackbar();
     console.log(text);
     expect(text).to.equal('Enter valid mobile number');
 });

 it('checking for Terms & conditions page', function () {
     sign_in.mobile_number_field.waitForExist();
     sign_in.TnC_button.click();
     sign_in.TnC_text.waitForExist();
     var text = sign_in.TnC_text.getText();
     console.log(text);
     expect(text).to.equal('Terms and Conditions');
 });

it('un-check Terms & conditions', function () {
     sign_in.sign_in(validNumber);
     action.wait(6000);
     sign_in.TnC_checkbox.click();
     sign_in.login_button.click();
     action.wait(2000);
     var text = sign_in.get_snackbar();
     console.log(text);
     expect(text).to.equal('Check T&C to proceed');
 });


 it('checking signup/signin when there is no internet connection',function(){
    sign_in.sign_in(validNumber);
    action.dataOFF();
    sign_in.allow_SMS();
    sign_in.login_button.click();
    var text = sign_in.get_snackbar()
    console.log(text);
    action.dataON();
    expect(text).to.equal('Please check your internet connection and try again');

});

   it('Log-in should happen for a valid mobile number', function () {
     sign_in.sign_in(validNumber);
     sign_in.allow_SMS();
     for(;;){
     var welcomeBack_text = sign_in.welcome_back_text.isExisting();
     var unable_to_proceed = sign_in.unableToProceed.isExisting();
     if(welcomeBack_text===true){
     break;}
     if(unable_to_proceed===true){
       console.log('OTP not received');
       break;}
    }
    var text = sign_in.welcome_back_text.getText();
    expect(text.replace(/(\r\n\t|\n|\r\t)/gm," ")).to.equal('Welcome back!');
 });


});



