

   function scroll(x_start,y_start,x_end,y_end){
     browser.touchAction([
        { action: 'press', x: x_start, y: y_start },
        { action: 'moveTo', x: x_end, y: y_end },
        'release'
    ])

   };

   function tapByCordinates(x_cordinate,y_cordinate){
      browser.touchAction({
        action: 'tap', x:x_cordinate, y:y_cordinate
    })
   };

   function startActivity(){
      browser.startActivity('in.fourthlion.ccd.mobileapp','in.fourthlion.ccd.mobileapp.MainActivity');
  };

  function wait(seconds){
      browser.pause(seconds);
    };

  function presskey(value){
    browser.pressKeycode(value);
      };  
   
   function dataOFF() {
        return browser.setNetworkConnection(0);
    };
   
  function dataON(){
    return browser.setNetworkConnection(6);
  };
  
  function appReset(packageName) {  
        return browser.reset(packageName); 
    };

   function back() {
        return browser.back();
    }



//   export function swipe(from, to) {
//   const screenSize = device.windowHandleSize().value;
//   const pressOptions = getDeviceScreenCoordinates(screenSize, from);
//   const moveToScreenCoordinates = getDeviceScreenCoordinates(screenSize, to);

//   device.touchPerform([{
//     action: 'press',
//     options: pressOptions,
//   }, {
//     action: 'moveTo',
//     options: {
//       x: moveToScreenCoordinates.x - pressOptions.x,
//       y: moveToScreenCoordinates.y - pressOptions.y
//     },
//   }, {
//     action: 'release',
//   }]);
//   device.pause(1000);
// }

// /**
//  * Swipe down
//  */
// export function swipeDown() {
//   swipe(SWIPE_DIRECTION.down.start, SWIPE_DIRECTION.down.end);
// }

// /**
//  * Swipe Up
//  */
// export function swipeUp() {
//   swipe(SWIPE_DIRECTION.up.start, SWIPE_DIRECTION.up.end);
// }

// /**
//  * Swipe left
//  */
// export function swipeLeft() {
//   swipe(SWIPE_DIRECTION.left.start, SWIPE_DIRECTION.left.end);
// }

// /**
//  * Swipe right
//  */
// export function swipeRight() {
//   swipe(SWIPE_DIRECTION.right.start, SWIPE_DIRECTION.right.end);
// }


module.exports = {
    scroll:scroll,
    startActivity:startActivity,
    wait:wait,
    tapByCordinates:tapByCordinates,
    presskey:presskey,
    dataOFF:dataOFF,
    dataON:dataON,
    appReset:appReset,
    back:back,
}