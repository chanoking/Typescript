"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project_Input_1 = require("./components/project-Input");
const project_List_1 = require("./components/project-List");
var App;
(function (App) {
    new project_Input_1.ProjectInput();
    new project_List_1.ProjectList("active");
    new project_List_1.ProjectList("finished");
})(App || (App = {}));
