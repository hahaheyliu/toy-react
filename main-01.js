import { createElement, render, Component } from './toy-react-01';

class FirstComponent extends Component {
    constructor() {
        super();
        this.state = {
            descript: 1,
        }
    }

    render() {
        const { descript } = this.state;
        console.log(this.children);
        return <div>
            <h1>First Component</h1>
            <h2>{descript.toString()}</h2>
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