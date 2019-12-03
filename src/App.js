import React, { Component } from "react";
import "./App.css";
import { ControlButton } from "./Components/controlButton.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            timer: 0,
            isRunning: false
        };
    }

    handleCounter = () => {
        this.setState({
            isRunning: !this.state.isRunning
        });

        if (this.state.isRunning) {
            clearInterval(this.myInterval);
        } else {
            this.myInterval = setInterval(
                () =>
                    this.setState({
                        timer: this.state.timer + 1
                    }),
                1000
            );
        }
    };

    handleReset = () => {
        this.setState({
            timer: 0,
            isRunning: false
        });
        clearInterval(this.myInterval);
    };

    render() {
        return (
            <div className="app">
                {/* <h1>hello world</h1> */}
                <div className="main">{this.state.timer}</div>

                <div className="control-panel">
                    <ControlButton
                        name={this.state.isRunning ? "STOP" : "START"}
                        handleEvent={this.handleCounter}
                    ></ControlButton>
                    <ControlButton
                        name="RESET"
                        handleEvent={this.handleReset}
                    ></ControlButton>
                </div>
            </div>
        );
    }
}

export default App;
