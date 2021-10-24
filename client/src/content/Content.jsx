import React, { useContext, useState } from "react";
import "./content.css";
import { ModeContext } from "../context/ModeContext";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDown from "@mui/icons-material/ThumbDown";
import { useCheck } from "../hooks/check.hook";

const Content = ({ data }) => {
  const { action, like } = useCheck();
  const [liked, setLiked] = useState(action.liked)
  const [disliked, setDisliked] = useState(action.disliked)
  const mode = useContext(ModeContext);

  const likeHandler = (type) => {
    if (type === "liked") {
      setLiked(true)
    } else {
      setDisliked(true)
    }
    like(data._id, type)
  }
  return (
    <div className={"content " + (mode && "active")}>
      <div className="part__1">

       <img alt="" src={data.img} />
      </div>
      <h1 className="title">{data.title}</h1>
      <div className="header__1">
        <p>{data.header}</p>
      </div>
      <div className="ads__2">
        <img alt="" src="/w_ad.png"/>
      </div>
      <div className="part__1">
        <h1 className="title__2">{data.part_1.header}</h1>
        <p className="info">{data.part_1.text}</p>
        <img alt="" src={data.part_1.img} />
        <p className="img__source">
          <span>Img Source:&nbsp;</span>
          {data.part_1.img_source}
        </p>
      </div>
      <div className="ads__2">
        <img alt="" src="/w_ad.png"/>
      </div>
      <div className="part__1">
        <h1 className="title__2">{data.part_2.header}</h1>
        <p className="info">{data.part_2.text}</p>
        <img alt="" src={data.part_2.img} />
        <p className="img__source">
          <span>Img Source:&nbsp;</span>
          {data.part_2.img_source}
        </p>
      </div>
      <div className="ads__2">
      <img alt="" src="/w_ad.png"/>
      </div>
      <div className="part__1">
        <h1 className="title__2">{data.part_3.header}</h1>
        <p className="info">{data.part_3.text}</p>
        <img alt="" src={data.part_3.img} />
        <p className="img__source">
          <span>Img Source:&nbsp;</span>
          {data.part_3.img_source}
        </p>
      </div>
      <div className="ads__2">
        <img alt="" src="/w_ad.png"/>
      </div>
      <div className="icon__Box">
        <div className="eye__box">
          <VisibilityOutlinedIcon />
          <p className="p">&nbsp;{data.views}</p>
        </div>
        <div className={"like__box " + (liked && "like")}>
          <ThumbUpIcon onClick={() => likeHandler("liked")} />
          <p className="p">&nbsp;{data.likes}</p>
        </div>
        <div className={"dislike__box " + (disliked && "like")}>
          <ThumbDown onClick={() => likeHandler("disliked")} />
          <p className="p">&nbsp;{data.dislikes}</p>
        </div>
      </div>
      <div className="footer">
        <a href="/#" className="a">
          Support &amp; Donate
        </a>
        <p className="back">Give Feedback: comp.world@bx.ru</p>
        <p className="copy">&copy; 2021</p>
      </div>
    </div>
  );
};
export default Content;
