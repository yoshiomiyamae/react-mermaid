Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mermaid_1 = require("mermaid");
class Mermaid extends React.Component {
    constructor(props) {
        let newProps = Object.assign({}, props, { name: props.name || 'mermaid' });
        super(newProps);
        this.state = { diagram: 'Loading diagram...' };
    }
    componentDidMount() {
        this.props.name;
        mermaid_1.mermaidAPI.render(this.props.name, this.props.children.toString(), (html) => this.setState({ diagram: html }));
    }
    render() {
        return (React.createElement("div", { className: "mermaid", dangerouslySetInnerHTML: { __html: this.state.diagram } }));
    }
}
exports.default = Mermaid;
//# sourceMappingURL=react-mermaid.js.map