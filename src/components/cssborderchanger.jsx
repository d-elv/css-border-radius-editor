import React, { Component } from "react";

class CssBorderChanger extends Component {
    state = {
        allBorders: 0,
        topLeft: 0,
        topRight: 0,
        bottomLeft: 0,
        bottomRight: 0,
    };

    handleAllInput = (e) => {
        let allBorders = e.target.value;
        allBorders = this.emptyStringChecker(allBorders);
        this.setState({ allBorders });
    };
    handleTopLeftInput = (e) => {
        let topLeft = e.target.value;
        topLeft = this.emptyStringChecker(topLeft);
        this.setState({ topLeft });
    };
    handleTopRightInput = (e) => {
        let topRight = e.target.value;
        topRight = this.emptyStringChecker(topRight);
        this.setState({ topRight });
    };
    handleBottomLeftInput = (e) => {
        let bottomLeft = e.target.value;
        bottomLeft = this.emptyStringChecker(bottomLeft);
        this.setState({ bottomLeft });
    };
    handleBottomRightInput = (e) => {
        let bottomRight = e.target.value;
        bottomRight = this.emptyStringChecker(bottomRight);
        this.setState({ bottomRight });
    };
    emptyStringChecker = (value) => {
        // This function checks if the field is cleared and updates the state / border radius
        if (value === "") {
            value = 0;
        }
        return value;
    };

    clearInputs = () => {
        this.myFormRef.reset();
        this.setState({ allBorders: 0 });
        this.setState({ topLeft: 0 });
        this.setState({ topRight: 0 });
        this.setState({ bottomLeft: 0 });
        this.setState({ bottomRight: 0 });
    };

    render() {
        return (
            <div className="header">
                <h1>CSS Border Changer</h1>
                <p>
                    Input numbers into the fields below to edit the shape of the
                    box.
                </p>
                <form ref={(el) => (this.myFormRef = el)}>
                    <input
                        onChange={this.handleAllInput}
                        className="border-changer"
                        placeholder="all corners"
                        type="text"
                    />
                    <div className="input-boxes-top">
                        <input
                            onChange={this.handleTopLeftInput}
                            className="border-changer top-left"
                            placeholder="top left"
                            type="text"
                        />
                        <input
                            onChange={this.handleTopRightInput}
                            className="border-changer top-right"
                            placeholder="top right"
                            type="text"
                        />
                    </div>
                    <div className="input-boxes-bottom">
                        <input
                            onChange={this.handleBottomLeftInput}
                            className="border-changer bottom-left"
                            placeholder="bottom left"
                            type="text"
                        />
                        <input
                            onChange={this.handleBottomRightInput}
                            className="border-changer bottom-right"
                            placeholder="bottom right"
                            type="text"
                        />
                    </div>
                </form>
                <button onClick={this.clearInputs} className="clear">
                    Clear all fields
                </button>
                <div
                    className="box-to-change"
                    style={{
                        // This is the box that users can edit. borderRadius settings change depending on user input.
                        borderRadius: this.state.allBorders + "px",
                        borderTopLeftRadius: this.state.topLeft + "px",
                        borderTopRightRadius: this.state.topRight + "px",
                        borderBottomLeftRadius: this.state.bottomLeft + "px",
                        borderBottomRightRadius: this.state.bottomRight + "px",
                    }}
                />
            </div>
        );
    }
}

export default CssBorderChanger;
