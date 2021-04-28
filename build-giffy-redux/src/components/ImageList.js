import React from "react";

const ImageList = ({ urlList }) => {
  const list = urlList.map((url) => {
    return (
      <li className="item " key={url}>
        <img src={url} alt="giphy image" className="image" />
      </li>
    );
  });

  return <ul className="list">{list}</ul>;
};

export default ImageList;
