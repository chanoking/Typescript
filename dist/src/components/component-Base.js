"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
// Component Base Class
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtbeginning) {
        this.hostElement.insertAdjacentElement(insertAtbeginning ? "afterbegin" : "beforeend", this.element);
    }
}
exports.Component = Component;
