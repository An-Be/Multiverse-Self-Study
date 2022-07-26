import { useEffect, useState } from "react";

const PracticeEffect = () => {

    const [comments, setComments] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await response.json();
            setComments(data[0])
        }
        getData()
            .catch(console.error)
        console.log('API WAS CALLED')
    }, [])


    return(
        <>
        <div>{comments.email}</div>
        </>
    );
}
export default PracticeEffect;