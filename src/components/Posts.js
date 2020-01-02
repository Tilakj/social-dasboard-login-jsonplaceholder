import React from 'react'
import Axios from 'axios'

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            isLoading: true
        }
    }
    componentDidMount = () => {
        Axios.get(`http://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const posts = res.data.filter(post => post.userId === JSON.parse(localStorage.getItem('user')).id)
                this.setState({ posts, isLoading: false })
            })
            .catch(err => {
                alert(err)
            })
    }
    render() {
        const { posts, isLoading } = this.state
        if (isLoading) return <h2>Loading...</h2>
        return (
            <div className="posts">
                {posts.map(post => {
                    return (
                        <div key={post.id} className="post">
                            <h3>{post.title}</h3>
                            <h4>{post.body}</h4>
                        </div>
                    )
                })}
            </div >
        )
    }
}
export default Posts
