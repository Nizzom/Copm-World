import React, { useCallback, useEffect, useState } from "react";
import Content from "../content/Content";
import { useHttp } from "../hooks/http.hook";
import Loader from '../loader/Loader'

const Home = () => {
  const [data, setData] = useState()
  const { request, loading } = useHttp();

  const getData = useCallback(async () => {
    try {
        const fetched = await request(`/api/cont`, "POST", {"id":"61752f6a0b39bbee4d2f3ca6"}, {});
      setData(fetched);
    } catch (e) {}
  }, [ request]);
  
  useEffect(() => {
    getData();
  }, [getData]);
  
  if (loading) {
    return <Loader />;
  }

  return <>{!loading && data && <Content data={data} />}</>;
};
export default Home;
