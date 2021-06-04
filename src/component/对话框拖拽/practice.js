import React from "react";
import "./style.css";

class DragModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.lastX = 0;
    this.lastY = 0;
    this.x = 0;
    this.y = 0;
    this.state = {
      x: undefined,
      y: undefined,
      isMoving: false,
    };
  }
  componentDidMount() {
    document.addEventListener("mousemove", this.onDragging);
    document.addEventListener("mouseup", this.stopDrag);
  }
  startDrag = (e) => {
    console.log("startDrag");
    this.setState({
      isMoving: true,
    });
    this.x = e.clientX;
    this.y = e.clientY;
    // console.log(e.clientX - this.x + this.lastX);
  };
  onDragging = (e) => {
    console.log("onDragging");
    if (this.state.isMoving) {
      this.setState({
        x: e.clientX - this.x + this.lastX,
        y: e.clientY - this.y + this.lastY,
      });
      console.log(e.clientX - this.x + this.lastX);
    }
  };
  stopDrag = (e) => {
    console.log("stopDrag");
    this.lastX = e.clientX - this.x + this.lastX;
    this.lastY = e.clientY - this.y + this.lastY;
    this.setState({
      isMoving: false,
    });
  };
  render() {
    const { x, y } = this.state;
    return (
      <div className="mask">
        <div
          className="dragModal"
          onMouseDown={this.startDrag}
          style={x && y ? { transform: `translate(${x}px, ${y}px)` } : {}}
        >
          {this.props.title}
        </div>
      </div>
    );
  }
}
export default DragModal;
