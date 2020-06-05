import React, { Component } from "react";
import image from "../Pages/img/user.png";

class Post extends Component {
  state = {};

  render() {
    const { content, comments, userName, onAdd } = this.props;
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
                    className="form-control"
                    id="exampleInputName2"
                    placeholder="Enter Comment"
                  />
                </div>
                <button onClick={onAdd} className="btn btn-default">
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
