"use strict";
/// <reference path="./decorators/autobind.ts" />
/// <reference path="./model/project.ts" />
/// <reference path="./model/drag-drop.ts" />
/// <reference path="./state/project.ts" />
/// <reference path="./util/validation.ts" />
/// <reference path="./components/component-Base.ts" />
/// <reference path="./components/project-Item.ts" />
/// <reference path="./components/project-List.ts" />
/// <reference path="./components/project-Input.ts" />
var App;
(function (App) {
    new ProjectInput();
    new ProjectList("active");
    new ProjectList("finished");
})(App || (App = {}));
