import React from "react";
import "./DiscriptionBox.css";

const DiscriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox_navigator">
        <div className="descriptionBox_nav_box">Description</div>

        <div className="descriptionBox_nav_box fade">Reviews (122) </div>
      </div>
      <div className="descriptionBox_description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
          harum magni! Numquam, debitis. Et eum doloremque molestiae rem ut
          soluta sed porro, fugiat delectus commodi autem reprehenderit impedit
          laboriosam nobis. Delectus facilis nam maxime, voluptate nobis
          necessitatibus minima alias repellat?
        </p>
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque est,
          quia fugiat repellendus odit repudiandae provident omnis facilis
          facere voluptate?
        </p> */}
      </div>
    </div>
  );
};

export default DiscriptionBox;
