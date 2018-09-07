var assert=require('assert');
describe('Basic Function',function(){
     it('Testing Sign-up', function(){
      browser.pause(10000);
      browser.click('#signup_ti1');
      browser.setValue('#signup_ti1', '8095499349');
      browser.pause(1000);
      browser.click('#signup_tb1')
      browser.pause(1000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]')
      //browser.click('com.android.packageinstaller:id/permission_allow_button');
      browser.pause(15000);
      browser.click('#tb5');
      browser.pause(3000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]');
      //browser.click('#android:id/button1');
    });
      
      it('Basic flow of Sit n Order',function(){
      browser.pause(9000);
      browser.click('#btnImage1_large');
      browser.pause(1000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup[1]/android.view.ViewGroup');
      browser.pause(2000);
      browser.setValue('#ti1','Test');
      browser.click('#gcbi1')
      browser.pause(2000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup');//click on paricular store in store search
      browser.pause(2000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]');//click on Alert
      browser.pause(2000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView');//click on particular sub-category menu.
      browser.pause(5000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');//click on '+' button
      browser.pause(2000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');//click on cart button from menu
      browser.pause(5000);
      //browser.scroll(663,284);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]');//click on confirm in cart page
      browser.pause(3000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]');//click on Alert in cart page 
  });
    
    it('Payment Flow',function(){
      browser.pause(6000);
       
       browser.touchAction('#wallet', [
        'press',
        { action: 'moveTo', x: 645-645, y: 333-676},
        'release'
    ])
  //   browser.touchPerform([{
  //   action: 'press',
  // }, {
  //   action: 'moveTo',
  //   options: {
  //     x: 645 - 645,
  //     y: 315 - 508
  //   },
  // }, {
  //   action: 'release',
  // }]);
//      browser.touchPerform([{
//     action: 'tap',
//     options: {
//         x: 631,
//         y: 1075
//     }
// }]);

      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[3]/android.widget.ListView/android.view.View[4]/android.view.View');//click on wallet 
      browser.pause(4000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[3]/android.widget.ListView/android.view.View[4]/android.view.View[2]/android.view.View/android.widget.Spinner');//click to select wallet
      browser.pause(1000);
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]');//select Paytm option
      browser.click('#wallet-payment');//click on "pay now"
      console.log('hi');
      browser.pause(15000);
    //  browser.click('Pay now')
      //var selector = 'new UiSelector().text("Pay now")).className("android.widget.Button")';
    //   browser.touchAction({
    //     action: 'tap', x: 334, y:886
    // });
      //browser.click('android.widget.Button');
      //browser.pause(15000);
      browser.setValue('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[4]/android.view.View/android.widget.EditText', '7777777777');
      browser.pause(1000);
      browser.back();
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[4]/android.widget.Button');//request otp button
      browser.pause(1000);
      browser.setValue('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[4]/android.view.View[1]/android.widget.EditText', '489871');
      browser.back();
      browser.click('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[4]/android.widget.Button');//login button in paytm
      browser.pause(7000);
      browser.touchAction({
       action: 'tap', x: 334, y:886
    });
    browser.pause(15000);




      
});
});

    
      












// describe('Future Feedback',function(){
//     beforeEach(function(){
//      browser.url('http://walkin-future-feedback-demo.s3-website-ap-southeast-1.amazonaws.com/?reviewCode=EASYDAY_CUSTOMER_FEEDBACK_SUNKIST_APPLE_JUICE_V3&reviewResponse=3a34ad56-44ae-4d1f-bd73-119f51515270&participant=88');
//     });
//     it('Basic test', function(){
//         browser.pause(3000);
//         browser.click('h5=xcellent');
//         browser.pause(3000);
//         browser.click('h5=Poor');
//         browser.pause(3000);
//         browser.click('h5=Price');
//         browser.pause(3000);
//         browser.click('button=DONE');
//         browser.pause(3000);
//         var title = browser.getTitle();
//         assert.equal(title, 'EasyDay - Padosan ki dukaan');
//     });

// });