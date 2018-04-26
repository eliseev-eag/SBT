import * as React from 'react';
import '../styles/main-component.less';

export class MainComponent extends React.Component {

    getMessage() {
        return 'react + typescript demo';
    }

    render() {
        return (
            <div>
                <h1>
                    {this.getMessage()}
                </h1>
                <div className="logos">
                    <div className="react-logo" />
                </div>
            </div>
        );
    }
}