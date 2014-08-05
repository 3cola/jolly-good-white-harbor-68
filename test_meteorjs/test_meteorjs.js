if (Meteor.isClient) {
  
  Template.hello.greeting = function () {
    return "Welcome to test_meteorjs.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      


    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Users = new Meteor.Collection("Users");
    Users.insert({text: "Hello"});
  });
}
