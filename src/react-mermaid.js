var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mermaid_1 = require("mermaid");
var Mermaid = (function (_super) {
    __extends(Mermaid, _super);
    function Mermaid(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { diagram: 'Loading diagram...' };
        return _this;
    }
    Mermaid.prototype.componentDidMount = function () {
        var _this = this;
        this.props.name;
        mermaid_1.mermaidAPI.render(this.props.name, this.props.children.toString(), function (html) { return _this.setState({ diagram: html }); });
    };
    Mermaid.prototype.render = function () {
        return (React.createElement("div", { className: "mermaid", dangerouslySetInnerHTML: { __html: this.state.diagram } }));
    };
    Mermaid.defaultProps = { name: 'mermaid' };
    return Mermaid;
}(React.Component));
exports.default = Mermaid;
//# sourceMappingURL=react-mermaid.js.map