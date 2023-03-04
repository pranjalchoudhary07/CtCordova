document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById("onUser").addEventListener("click", onUser);
document.getElementById("eventpush").addEventListener("click", eventPush);
document.getElementById("productpush").addEventListener("click", productView);
document.getElementById("showinbox").addEventListener("click", showInbox);
document.getElementById("charge").addEventListener("click", charge);
document.getElementById("shownative").addEventListener("click", nativeDisplay);

function onDeviceReady() {
  CleverTap.setDebugLevel(3);
  // Cordova is now initialized. Have fun!
  document.getElementById('deviceready').classList.add('ready');
  // document.getElementById("eventpush").addEventListener("click", eventPush, false);
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

  CleverTap.createNotificationChannel("P01", "First Push", "This is my first push channel try", 3, true);
  CleverTap.recordEventWithName("Cordova");
  document.addEventListener('onPushNotification', this.onPushNotification, false);
  CleverTap.registerPush();
  CleverTap.initializeInbox();
}
  function onUser(){
      CleverTap.onUserLogin ({
        'Name': 'Priyal',
        "Phone": "+913216549870",
        'Email': 'priyalchoudhary@gmail.com',
        'Identity':'8523','Gender':'F'});
  }
  function eventPush(){
    CleverTap.recordEventWithName("Cordova Push");
  }
  function productView(){
    CleverTap.recordEventWithNameAndProps("Corodva Product View", {"Name":"Oneplus"});
    CleverTap.getAllInboxMessages(function(val) {console.log("Inbox messages are "+val);});
  }
  function showInbox(){
    CleverTap.showInbox({"navBarTitle":"CT App Inbox","navBarColor":"#FF5B5B"});
  }
  function charge(){
    CleverTap.recordEventWithName("Cordova Charge");
//    var chargeDetails = { 'totalValue': 20,
//                          'category': 'books',
//                          'purchase_date': new Date()
//                        }
//    var items = [
//    { 'title': 'book1', 'published_date': new Date('2010-12-12T06:35:31'), 'author': 'ABC' },
//    { 'title': 'book2', 'published_date': new Date('2020-12-12T06:35:31'), 'author': 'DEF') },
//    { 'title': 'book3', 'published_date': new Date('2000-12-12T06:35:31'), 'author': 'XYZ' }]
//
//    CleverTap.recordChargedEventWithDetailsAndItems(chargeDetails, items);
  }
  function nativeDisplay(){
    CleverTap.recordEventWithName("Cordova Native");
    CleverTap.getAllDisplayUnits(function(val) {
    document.getElementById("nativemsg").innerHTML =JSON.stringify(val[0].content[0].message.text).replace(/['"]+/g, '');
    document.getElementById("nativetitle").innerHTML =JSON.stringify(val[0].content[0].title.text).replace(/['"]+/g, '');
    console.log("Native haha Display units are "+JSON.stringify(val[0].content[0].message.text));
    });
  }