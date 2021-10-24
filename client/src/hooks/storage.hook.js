import { useCallback } from "react";
import { useHttp } from "./http.hook";

export const Storage = () => {
    const { request } = useHttp();
    const likeIt = useCallback(async (action,type,id) => {
        try {
         const fetched = await request(
            `/api/${type}`,
            "POST",
            {id},
            {}
          );
         if (fetched[type]) {
            action[type] = true
            localStorage.removeItem(action)
            localStorage.setItem(action)
         }
        } catch (e) {}
      }, [request]);

      return {likeIt}
}