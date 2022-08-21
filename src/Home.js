import { useState, useEffect } from "react";
import BlogList from './blogList';

const Home = () => {
 // Used in blogList.js component
    const [blogs, setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);



useEffect(() => {
    setTimeout( () => {
        fetch('http://localhost:8000/blogs')
        .then((res)=> {
            if(!res.ok){
                throw Error(' error : Resource could not be located.');
            }
            return res.json();
        })
        .then((data) => {
            setBlogs(data);
            setisPending(false);
            setError(null);
        })
        .catch(err => {
            setisPending(false);
            setError(err.message);
        })
    }, 1000);   
}, [])

return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
);
}
 
export default Home;