import React, { Fragment } from "react";
import "./BlogSidebar.css";
import blogSidebarGirl from "../../../assets/blog-girl.jpg";
import blogSideBarBoy from "../../../assets/blog-male.jpg";
import blogSidebarbell from "../../../assets/gallery9.jpg";
import blogSidebarpush from "../../../assets/side-bar-pushup.jpg";
import blogSidebarbody from "../../../assets/side-bar-body.jpg";
const BlogSidebar = () => {
  return (
    <Fragment>
      <div className="blog-main_sidebar">
        <div className="blog-sidbar_container">
          <h1>RECENT POSTS</h1>
          <img src={blogSidebarGirl} alt="blogSidebarGirl" />
          <p>
            THE MOST COMMON MISTAKES WHEN{<br />} MANAGING PERSONAL FINANCES
          </p>
        </div>
        <div className="blog-sidbar_container">
          <h1>RECENT POSTS</h1>
          <img src={blogSideBarBoy} alt="blogSideBarBoy" />
          <p>
            THE MOST COMMON MISTAKES WHEN{<br />} MANAGING PERSONAL FINANCES
          </p>
        </div>
        <div className="blog-sidbar_container">
          <h1>RECENT POSTS</h1>
          <img src={blogSidebarbell} alt="blogSidebarbell" />
          <p>
            THE MOST COMMON MISTAKES WHEN{<br />} MANAGING PERSONAL FINANCES
          </p>
        </div>
        <div className="blog-sidbar_container">
          <h1>RECENT POSTS</h1>
          <img src={blogSidebarpush} alt="blogSidebarbell" />
          <p>
            THE MOST COMMON MISTAKES WHEN{<br />} MANAGING PERSONAL FINANCES
          </p>
        </div>
        <div className="blog-sidbar_container">
          <h1>RECENT POSTS</h1>
          <img src={blogSidebarbody} alt="blogSidebarbell" />
          <p>
            THE MOST COMMON MISTAKES WHEN{<br />} MANAGING PERSONAL FINANCES
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogSidebar;
