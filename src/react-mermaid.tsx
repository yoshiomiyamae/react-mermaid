import * as React from 'react';
import mermaid, {mermaidAPI} from 'mermaid';

interface MermaidProps {
  name?: string;
}

interface MermaidState {
  diagram: string;
}

class Mermaid extends React.Component<MermaidProps, MermaidState>{
  constructor (props) {
    props.name = props.name || 'mermaid';
    super(props);
    this.state = {diagram: 'Loading diagram...'};
  }

  componentDidMount () {
    this.props.name
    mermaidAPI.render(this.props.name, this.props.children.toString(), (html) => this.setState({diagram: html}));
  }

  render () {
    return (
      <div className="mermaid" dangerouslySetInnerHTML={{__html: this.state.diagram}}></div>
    )
  }
}

export default Mermaid;
