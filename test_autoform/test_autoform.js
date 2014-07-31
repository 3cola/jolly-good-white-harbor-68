Books = new Meteor.Collection("books", {
   schema: {
        title: {
            type: String,
            label: "Title",
            max: 200
        },
        author: {
            type: String,
            label: "Author"
        },
        copies: {
            type: Number,
            label: "Number of copies",
            min: 0
        },
        lastCheckedOut: {
            type: Date,
            label: "Last date this book was checked out",
            optional: true
        },
        summary: {
            type: String,
            label: "Brief summary",
            optional: true,
            max: 1000
        }
    }
});



if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to test_autoform.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
  
  Template.leaderboard.Books = function () {
    return Books.find();
  };
  
  
  
  Template.updateBookForm.editingDoc = function () {
    return Books.findOne({_id: Session.get("selectedDocId")});
  };

  


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    
    


  });
}
