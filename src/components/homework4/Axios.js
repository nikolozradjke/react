import axios from 'axios'
import {useState, useEffect, useCallback} from 'react'

function Axios(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [posts, updatePost] = useState();
    const [index, change] = useState(1);
    const [post, getValue] = useState(null);

    useEffect(() => {
        axios.get(url + '/' + index).then((response) => {
            getValue(response.data);
          });
    }, [index]);

    const LoadPosts = useCallback(()=> {
        axios.get(url).then((response) => {
            updatePost(response.data);
          });
      },[])

    const handleAction = (event) => {
        change(event.target.value.length);
    }

    return (
        <div>
            <input type="text" onChange={handleAction}/>
            <p>{post ? post.title : 'not set'}</p>
            <button onClick={LoadPosts}>Show all</button>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                {posts && posts.map((item, index) => (
                    <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export default Axios;