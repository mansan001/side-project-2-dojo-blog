import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json() // transform the data into json, res means response.
            })
            .then(data => {
                setIsPending(false);
                setError(null);
                setBlogs(data); // set the data
            }) 
            .catch(err => { //error catching functionality 
                if(err.name === 'AbortError') {
                    console.log('fetch aborted');
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        }, 1000);
        return () => abortCont.abort();

    }, [url]); // This empty array is a dependency array. <= (old comment) -- UseEffect is triggered when a change happened in the [url]

    return {data, isPending, error};
}

export default useFetch;