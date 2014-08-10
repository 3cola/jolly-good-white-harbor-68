Meteor.startup(function() {
  Celestial.init();
  Celestial.ViewController.register("View1", View1);
  Celestial.ViewController.register("View2", View2);
  Celestial.ViewController.register("View3", View3);
  //Celestial.ViewController.show("View1");
});
      