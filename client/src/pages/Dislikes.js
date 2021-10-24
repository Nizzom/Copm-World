import React, { useCallback, useEffect, useState } from 'react';
import {useHttp} from '../hooks/http.hook';
import Content from '../content/Content'
import Loader from '../loader/Loader'

const Dislikes = () => {
    const [data, setData] = useState(null)
    const { request, loading } = useHttp();
  
  
    const getData = useCallback(async () => {
      try {
        const fetched = await request(`/api/most/disliked`, "GET");
        setData(fetched);
      } catch (e) {}
    }, [setData, request]);
  
    useEffect(() => {
      getData();
    }, [getData]);
  
    if (loading) {
      return <Loader />;
    }
  
    return <>{!loading && data && <Content data={data} />}</>;
  

}; 
export default Dislikes;