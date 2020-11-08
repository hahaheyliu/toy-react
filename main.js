import { createElement, render, Component } from './toy-react';

class FirstComponent extends Component {
    render() {
        return <div>
            <h1>First Component</h1>
            {this.children}
        </div>
    }
}

render(<FirstComponent id="first-component" class="wrapper">
    <div>hello</div>
    <br />
    <div>haha</div>
    <div></div>
</FirstComponent>, document.body);