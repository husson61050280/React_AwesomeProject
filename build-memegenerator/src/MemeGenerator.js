import React from "react";

class MemeGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } //constructor

  //ถูกเรียกหลังจากมีการเรนเดอร์
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        //distructoring 
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      //input มากกว่า 1 ตัว
      //name = ชื่อ name ใน input , value คือ ค่าที่ป้อนเข้ามา
      [name]: value,
    });
  };

  //random picture
  handleSubmit = (event) => {
    event.preventDefault();
    //สุ่มเลขรูปภาพ
    //mathrandom (0-1) , mathfloor แปลงทศนิยมให้เป็นจำนวนเต็ม
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({
      randomImg: randMemeImg,
    });
  };

  render() {
    return (
      <div>
        <form action="" className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>GO</button>
          </form>

        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
     
      </div>
    );
  }
}

export default MemeGenerator;
