Router.map(function() {

  this.route("view1", {
    path: "/",
    template: "blank",
    onBeforeAction: function() {
      Celestial.ViewController.show("View1");
    }
  });

  this.route("view2", {
    path: "/view2",
    template: "blank",
    onBeforeAction: function() {
      Celestial.ViewController.show("View2");
    }
  });
  
  this.route("view3", {
    path: "/view3",
    template: "blank",
    onBeforeAction: function() {
      Celestial.ViewController.show("View3");
    }
  });

  this.route("translation_admin", {
    path: "/translation",
    template: "translation_admin"
  });

});
