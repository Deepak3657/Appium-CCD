const MyProfile = require('../page/myProfile.page.js');
const action=require('../support/utils.js');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const myProfile = new MyProfile();



describe('Testing MyProfile', function(){
   const validName='AutomationTesting';
   const invalidName='@#$%^$*(%';
   const valid_EmailId='chandras.deepak@gmail.com';
   const invalid_EmailId='1!$%^@gmail.com';


 beforeEach(function(){
       action.startActivity();
  });


 it('Testing My profile with valid name',function(){
  var screen = myProfile.goTo_personalizeOffers();
  if(screen==='Personalize offers'){
      console.log('Am into Personalize offers screen');
      var text = myProfile.set_personalizeOffers_name(validName);
    }
  expect(text).to.equal('Your preferences have been saved');
   });

 
 it('Testing My profile with Invalid name',function(){
    var screen = myProfile.goTo_personalizeOffers();
   if(screen==='Personalize offers'){
       console.log('Am into Personalize offers screen');
       var text = myProfile.set_personalizeOffers_name(invalidName);
   }
   expect(text).to.equal('Sorry, only letters in Name, no special symbols');
   });

 
 it('setting the date field',function(){
     var screen = myProfile.goTo_personalizeOffers();
     if(screen==='Personalize offers'){
         console.log('Am into personalize offers screen');
         var text = myProfile.set_DateField();
     }
     expect(text).to.equal('Your preferences have been saved');
   });

 
 it('checking for KARNATAKA state',function(){
      var screen = myProfile.goTo_personalizeOffers();
      if(screen==='Personalize offers'){
          console.log('Am into personalize offers screen');
          var state_text = myProfile.state_field.getText();
             if(state_text==='Karnataka'){
                 action.scroll(643,1014,0,-160);
                 myProfile.profile_saveButton.click();
                 myProfile.snackbar.waitForExist();
                 var text = myProfile.snackbar.getText();
            }
        }
      expect(text).to.equal('Your preferences have been saved');
    });


it('checking with Valid email-id',function(){
   var screen = myProfile.goTo_personalizeOffers();
    if (screen==='Personalize offers'){
    console.log('Am into Personalize offers screen');
    var text = myProfile.myProfile_email(valid_EmailId);
     }
     expect(text).to.equal('Your preferences have been saved');
 });


it('checking with Invalid email-id',function(){
   var screen = myProfile.goTo_personalizeOffers();
    if (screen==='Personalize offers'){
    console.log('Am into Personalize offers screen');
    var text = myProfile.myProfile_email(invalid_EmailId);
     }
     expect(text).to.equal('Please enter a valid email address');
 });
  

it('checking when no internet is connected',function(){
    var screen = myProfile.goTo_personalizeOffers();
    if (screen==='Personalize offers'){
         console.log('Am into Personalize offers screen');
         action.dataOFF();
         var text = myProfile.getText_snackbar();
     }
          action.dataON();
          expect(text).to.equal('Check your internet connection');
 });

})