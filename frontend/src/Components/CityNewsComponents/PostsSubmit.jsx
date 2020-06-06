import React, { Component } from "react";
import image from "../Pages/img/user.png";
import { addComment } from "../../services/addCommentService";

class Post extends Component {
  state = {
    data: {
      comment: "",
    },
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data.comment = e.currentTarget.value;
    this.setState({ data });
  };

  onAdd = async (postId) => {
    // console.log("Trying to add comment");

    const { comment } = this.state.data;
    // console.log(comment);
    try {
      console.log("Trying to call comment Service");
      const { data: post } = await addComment(comment, postId);

      console.log("About to set state");
      // console.log(post);
      this.setState({ data: { comment: "" } });
    } catch (ex) {
      console.log("Error");
    }
  };

  render() {
    const { content, comments, userName, postId } = this.props;
    return (
      <div className="panel panel-default post">
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-2">
              <a className="post-avatar thumbnail" href="profile.html">
                <img src={image} />
                <div className="text-center">{userName}</div>
              </a>
              <div className="likes text-center">7 Likes</div>
            </div>
            {/* <!-- col-sm-2 end --> */}
            <div className="col-sm-10">
              <div className="bubble">
                <div className="pointer">
                  <p>{content}</p>
                </div>
                <div className="pointer-border"></div>
              </div>
              {/* <!-- bubble end --> */}
              <p className="post-actions">
                <a href="#">Comment</a> - <a href="#">Like</a> -{" "}
                <a href="#">Follow</a> - <a href="#">Share</a>{" "}
              </p>
              <div className="comment-form">
                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.data.comment}
                    onChange={this.handleChange}
                    className="form-control"
                    id="exampleInputName2"
                    placeholder="Enter Comment"
                  />
                </div>
                <button
                  onClick={() => this.onAdd(postId)}
                  className="btn btn-default"
                >
                  Add
                </button>
              </div>
              {/* <!-- comment form end --> */}

              <div className="clearfix"></div>

              <div className="comments">
                {comments.map((comment) => (
                  <div key={comment._id}>
                    <div className="comment">
                      <a className="comment-avatar pull-left" href="#">
                        <img src={image} />
                        <div className="text-center">{comment.userName}</div>
                      </a>
                      <div className="comment-text">
                        <p>{comment.content}</p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
