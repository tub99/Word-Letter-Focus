import * as React from 'react';

import './markers.component.less';

let tabAttr = {tabIndex: 0};
export class Markers extends React.Component {

    state: {
        selectedOption: string
    };
    props: {
        setSelectedOption: Function,
        clearMarkers: Function,
        validateMarkers: Function,
        activityDone: boolean
    };

    constructor(props: any) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleMarkerClearance = this.handleMarkerClearance.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentWillMount() {
        this.setState({
            selectedOption: 'word-highlight',
            activityDone: false
        });
    }

    handleOptionChange(event: React.FormEvent<HTMLImageElement>) {

        this.setState({
            selectedOption: (event.target as HTMLImageElement).getAttribute('data-value')
        });
        this.props.setSelectedOption((event.target as HTMLImageElement).getAttribute('data-value'));
    }

    handleMarkerClearance() {
        this.props.clearMarkers();
    }

    handleValidation() {
        this.props.validateMarkers();
    }
    handleKeyPress(event: any){
        console.log('Enter pressed', event);
        if (event.key === 'Enter' || event.key ==='Space') {
          console.log('Enter pressed');
          this.handleOptionChange(event);
         
        }
      }
    render() {
        return (
            <div className="master-marker-container">
                <div className="markers-container" >
                    <div className="highlight" >
                        <img  {...tabAttr} className={this.state.selectedOption === 'word-highlight' ? 'img-highlight active' : 'img-highlight'} src="../../../assets/lamp.png" alt="Word Highlight" data-value="word-highlight"  onKeyPress={this.handleKeyPress}  onClick={this.handleOptionChange} /><br />
                        <span className="img-highlight-lbl" aria-hidden="true">Word Highlight</span>
                    </div>
                    <div className="underline" >
                        <img  {...tabAttr} className={this.state.selectedOption === 'word-underline' ? 'img-underline active' : 'img-underline'} src="../../../assets/ruler.png" alt="Word Underline" data-value="word-underline"  onKeyPress={this.handleKeyPress} onClick={this.handleOptionChange} /><br />
                        <span className="img-underline-lbl" aria-hidden="true">Word Underline</span>
                    </div>
                    <div className="color" >
                        <img  {...tabAttr} className={this.state.selectedOption === 'letter-highlight' ? 'img-color active' : 'img-color'} src="../../../assets/paintbrush.png" alt="Letter Highlight" data-value="letter-highlight"  onKeyPress={this.handleKeyPress} onClick={this.handleOptionChange} /><br />
                        <span className="img-color-lbl" aria-hidden="true">Letter Highlight</span>
                    </div>
                    <div className="divide" >
                        <img  {...tabAttr} className={this.state.selectedOption === 'letter-divide' ? 'img-divide active' : 'img-divide'} src="../../../assets/saw.png" alt="Letter Divide" data-value="letter-divide"  onKeyPress={this.handleKeyPress} onClick={this.handleOptionChange} /><br />
                        <span className="img-divide-lbl" aria-hidden="true">Divide</span>
                    </div>
                    <div className="eraser">
                        <img  {...tabAttr} className={this.state.selectedOption === 'eraser' ? 'img-eraser active' : 'img-eraser'} src="../../../assets/eraser.png" alt="Eraser" data-value="eraser"  onKeyPress={this.handleKeyPress} onClick={this.handleOptionChange} /><br />
                        <span className="img-eraser-lbl" aria-hidden="true">Eraser</span>
                    </div>
                </div>
                <div className="validators-container">
                    <button className="reset" onClick={this.handleMarkerClearance} disabled={this.props.activityDone}>Reset</button>
                    <button className="ok" onClick={this.handleValidation} disabled={this.props.activityDone}>OK</button>
                </div>
            </div>
        );
    }
}