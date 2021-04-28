import React from "react";
import Course from "./Course";

//component คำนวณราคา Courses

class CourseSales extends React.Component {
  sumPrice(price) {
    this.setState({ total: this.state.total + price });
  }

  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };

    this.sumPrice = this.sumPrice.bind(this);
  }

  render() {
    var courses = this.props.items.map((item, index) => {
        return (
            <Course
              name={item.name}
              price={item.price}
              duration={item.duration}
              key={index}
              sumPrice={this.sumPrice}
              active={item.active}
            />
          );
    });

    
    return (
      <div>
        <br/>
        <h2>Click to add to your Total</h2>
        <br/>
        <div id="courses">
            {courses}
            <p id="total">Total : <b>฿{this.state.total}</b> </p>
        </div>
      </div>
    );
  }
}

export default CourseSales;
