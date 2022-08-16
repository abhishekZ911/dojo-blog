import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new Website', body: 'lorem ipsum...', author: 'Abhishek', id: 1},
        {title: 'My new Job', body: 'lorem ipsum...', author: 'Prachi', id: 2},
        {title: 'Dhan Ropni', body: 'lorem ipsum...', author: 'Mahto', id: 3}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by : { blog.author}</p>
                </div>
            ))}
        </div>
        
     );
}
 
export default Home;