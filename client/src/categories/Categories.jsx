import React, { useCallback, useEffect, useState } from "react";
import "./categories.css";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import Loader from "../loader/Loader";

const Categories = ({ menuOpen }) => {
  const [cat, setCat] = useState([]);
  const { loading, request } = useHttp();

  const fetchCat = useCallback(async () => {
    try {
      const fetched = await request("/api/cat", "GET", null, {});
      setCat(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchCat();
  }, [fetchCat]);
  const history = useHistory();

  if (loading) {
    return <Loader />;
  }

  const handler = (e) => {
    if (
      e.target.nextElementSibling &&
      e.target.nextElementSibling.classList.contains("div")
    )
      e.target.nextElementSibling.classList.toggle("none");
  };

  const getContent = (id) => {
    history.push(`/content/${id}`);
  };

  return (
    <div className={"categor " + (menuOpen && "active1")}>
      <p className="categor__p">Categories</p>
      <div className="scroll">
        {cat.map((item, key) => {
          return (
            <div className="categor__Bx" key={`d${key}`}>
              <p key={`pe${key}`} className="categor__name" onClick={handler}>
                {item.category.text}
              </p>
              <div key={`rt${key}`} className="none div">
                {item.childern.map((child, key) => {
                  if (child == null) {
                    return <></>;
                  }
                  return (
                    <>
                      <p
                        key={`p${key}`}
                        onClick={handler}
                        className="categor__p1"
                      >
                        {child.subCategory.text}
                      </p>
                      <div key={`dv${key}`} className="none div">
                        {child.childern.map((val) => {
                          if (val == null) {
                            return <></>;
                          }
                          return (
                            <p
                              onClick={() => getContent(val.id)}
                              key={val.id}
                              className="categor__p2"
                            >
                              {val.text}
                            </p>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
