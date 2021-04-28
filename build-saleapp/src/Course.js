import React from "react";


// component เอาไว้ใช้เช็ค การกด (active)

class Course extends React.Component {

  clicker() {
    var active = !this.state.active;
    this.setState({ active: active });
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }

  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.clicker = this.clicker.bind(this);
  }

  render() {
    return (
      <div>
        {/* ถ้ามีการกดจะสร้าง class active ใน css ละแสดงผลดังรูป */}
        <p className={this.state.active ? "active" : ""} onClick={this.clicker}>
          {this.props.name} <b>฿{this.props.price}</b> -{" "}
          <span className="duration">{this.props.duration}</span>
        </p>
      </div>
    );
  }
}

export default Course;
