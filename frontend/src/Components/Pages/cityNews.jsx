import React, { Component } from "react";
import NavBar from "../navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cityNews.css";
import { submitPost } from "../../services/submitPostService";
import image from "./img/user.png";
import Footer from "../HomePage/footer";
import { getPosts } from "../../services/getPostsService";
import Post from "../CityNewsComponents/PostsSubmit";

class cityNews extends Component {
  state = {
    posts: [],
    data: {
      content: "",
    },
    errors: {},
  };

  async componentDidMount() {
    try {
      const { data: posts } = await getPosts();
      this.setState({ posts });
      console.log(this.state.posts);
    } catch (ex) {
      console.log("Exception occured");
    }
  }

  async componentDidUpdate() {
    try {
      const { data: posts } = await getPosts();
      const data = { content: "" };
      this.setState({ posts });
      console.log(this.state.posts);
    } catch (ex) {
      console.log("Exception occured");
    }
  }

  onAdd = () => {
    console.log("Trying to add comment");
    // const currentPage = this.state.currentPage - 1;
    // this.setState({ currentPage });
  };

  onSubmit = async () => {
    console.log("Submit Clicked");
    const { content } = this.state.data;
    console.log(content);
    try {
      const { data: post } = await submitPost(content);

      console.log(post);
      this.setState({ data: { content: "" } });
    } catch (ex) {
      console.log("Error");
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data.content = e.currentTarget.value;
    this.setState({ data });
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <NavBar></NavBar>
        <link href="css/bootstrap.css" rel="stylesheet" />

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Wall</h3>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <textarea
                        value={this.state.data.content}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder="Write on the wall"
                      ></textarea>
                    </div>

                    <button onClick={this.onSubmit} className="btn btn-default">
                      Submit
                    </button>
                  </div>
                </div>

                {posts.map((post) => (
                  <Post
                    key={post._id}
                    content={post.content}
                    comments={post.comments}
                    userName={post.userName}
                    onAdd={this.onAdd}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default cityNews;
