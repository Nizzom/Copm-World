import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHttp } from "../hooks/http.hook";
import Content from "../content/Content";
import Loader from "../loader/Loader";

const Param = () => {
  const [data, setData] = useState(null);
  const { request, loading } = useHttp();
  const id = useParams().id;

  const getData = useCallback(async () => {
    try {
      const fetched = await request(`/api/cont`, "POST", {id}, {});
      setData(fetched);
    } catch (e) {}
  }, [setData, id, request]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (loading) {
    return <Loader />;
  }
  return <>{data && <Content data={data} />}</>;
};
export default Param;
