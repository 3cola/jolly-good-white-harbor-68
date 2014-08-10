var Surface = famous.core.Surface,
      View = famous.core.View,
      Transform = famous.core.Transform,
      StateModifier = famous.modifiers.StateModifier,
      Easing = famous.transitions.Easing;

var template = document.createElement("div");
UI.insert(UI.render(Template["view2"]), template);
var surface = new Surface({
  size: [undefined, undefined],
  content: template,
  classes: ["view2"]
});

var viewModifier = new StateModifier({
  transform: Transform.translate(0, 0, 0)
});

View2 = new View();
View2.add(viewModifier).add(surface);

this.View2 = View2;