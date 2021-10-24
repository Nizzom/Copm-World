import React, { useCallback, useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import {useHttp} from '../hooks/http.hook'
import { CatList } from './CatList'

export const Categories = () => {
    const {request, loading} = useHttp()
    const {cat, setCat} = useState(null)

    const getCategories = useCallback( async () => {
        try {
            const fetched = await request('/api/cat', 'GET', null, {})
            setCat(fetched)
        } catch (e) {}
    }, [request,setCat])

    useEffect(() => {
        getCategories()
    }, [getCategories])

    if (loading) {
        return <p>Loading...</p>
    }

    console.log(cat)

  return (
    <>
        {!loading && cat && <CatList cat={cat} />}
    </>
  )
}