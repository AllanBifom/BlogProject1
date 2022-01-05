import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const[data, setData] = useState(null)
    const[pending, setPending] = useState(true)
    const [error, setError] = useState(null);
    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch data')
            }
            return res.json()
        })
        .then(data =>{
            setData(data)
            setPending(false)
            setError(null)
        }).catch(err => {
            if (err.name === "AbortError"){
                console.log('fetch aborted')
            }
            setPending(false)
            setError(err.message)
        }) 
        return () => abortCont.abort();
    },[url])
    return {data, pending, error}
}

export default useFetch;