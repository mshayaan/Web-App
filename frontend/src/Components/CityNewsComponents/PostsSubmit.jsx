import React, { Component } from 'react'
import image from "../Pages/img/user.png"

 class Posts extends Component {
     state = {  }
     render() { 
         return (  <div class="panel panel-default post">
         <div class="panel-body">
           <div class="row">
             <div class="col-sm-2">
               <a class="post-avatar thumbnail" href="profile.html">
                 <img src={image} />
                 <div class="text-center">DevUser1</div>
               </a>
               <div class="likes text-center">7 Likes</div>
             </div>
             {/* <!-- col-sm-2 end --> */}
             <div class="col-sm-10">
               <div class="bubble">
                 <div class="pointer">
                   <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing
                     elit. In tincidunt eget ante eget feugiat.
                     Praesent adipiscing tortor eu tincidunt tempus.
                     Sed convallis est in ante sodales, sit amet
                     consectetur leo commodo.{" "}
                   </p>
                 </div>
                 <div class="pointer-border"></div>
               </div>
               {/* <!-- bubble end --> */}
               <p class="post-actions">
                 <a href="#">Comment</a> - <a href="#">Like</a> -{" "}
                 <a href="#">Follow</a> - <a href="#">Share</a>{" "}
               </p>
               <div class="comment-form">
                 <form class="form-inline">
                   <div class="form-group">
                     <input
                       type="text"
                       class="form-control"
                       id="exampleInputName2"
                       placeholder="Enter Comment"
                     />
                   </div>
                   <button type="submit" class="btn btn-default">
                     Add
                   </button>
                 </form>
               </div>
               {/* <!-- comment form end --> */}

               <div class="clearfix"></div>

               <div class="comments">
                 <div class="comment">
                   <a class="comment-avatar pull-left" href="#">
                     <img src={image} />
                   </a>
                   <div class="comment-text">
                     <p>
                       Sed convallis est in ante sodales, sit amet
                       consectetur leo commodo.
                     </p>
                   </div>
                 </div>
                 <div class="clearfix"></div>

                 <div class="comment">
                   <a class="comment-avatar pull-left" href="#">
                     <img src={image} />
                   </a>
                   <div class="comment-text">
                     <p>
                       Sed convallis est in ante sodales, sit amet
                       consectetur leo commodo.
                     </p>
                   </div>
                 </div>
                 <div class="clearfix"></div>
               </div>
             </div>
           </div>
         </div>
       </div> );
     }
 }
  
 export default Posts;