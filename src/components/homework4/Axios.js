import axios from 'axios'
import {useState, useEffect, useCallback} from 'react'

function Axios(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [posts, updatePosts] = useState();
    const [index, change] = useState(1);
    const [post, getValue] = useState(null);



    useEffect(() => {
        async function getOneRow(){
            const response = await axios.get(url + '/' + index);
            getValue(response.data);
        }
        getOneRow();
    }, [index]);

    const LoadPosts = useCallback(()=> {
        async function getAllData(){
            const response = await axios.get(url);
            updatePosts(response.data);
        }
        getAllData();
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