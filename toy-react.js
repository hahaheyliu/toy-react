class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }

    appendChild(element) {
        this.root.appendChild(element.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }

}

class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
    }
    setAttribute(name, value) {
        this.props[name] = value;
    }

    appendChild(component) {
        this.children.push(component);
    }

    get root() {
        if (!this._root) {
            this._root = this.render().root;
            return this._root;
        }
    }
}

function createElement(type, attributes, ...children) {
    let el;
    if (typeof type === 'string') {
        el = new ElementWrapper(type);
    } else {
        el = new type;
    }
    for (let name in attributes) {
        el.setAttribute(name, attributes[name]);
    }
    let insertChildren = (children) => {
        for (let child of children) {
            if (typeof child === 'string') {
                child = new TextWrapper(child);
            }
            if ((typeof child === 'object') && (child instanceof Array)) {
                insertChildren(child);
            } else {
                el.appendChild(child);
            }
        }
    }
    insertChildren(children);
    return el;
}

function render(component, parentElement) {
    parentElement.appendChild(component.root);
}

export {
    createElement,
    Component,
    render,
}