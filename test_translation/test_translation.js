

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return Translation.currentLang();
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log(Translation._('siteName', 'main'));
      if (Translation.currentLang() === 'en-US' || Translation.currentLang() === 'en' ) {
        Translation.currentLang('fr');
      } else {
        Translation.currentLang('en');
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
