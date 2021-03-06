import React, { Component } from 'react';
import ImageEncoder from '../utils/ImageEncoder';

class ResultCanvas extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        var dataURL = ImageEncoder.encode(this.props.result);
        this.setState({dataURL: dataURL});
    }

    componentWillReceiveProps(newProps) {
        var dataURL = ImageEncoder.encode(newProps.result);
        this.setState({dataURL: dataURL});
    }

    render() {
        return (
            <div className="result-canvas">
                {this.state.dataURL && <img src={this.state.dataURL} alt="result" />}
            </div>
        );
    }
}

export default ResultCanvas;
