import React, { Fragment } from "react";
import "./Blog.css";
import blogFemale from "../../assets/blog-girl.jpg";
import blogMale from "../../assets/blog-male.jpg";
import blogGirl from "../../assets/blogGallery9.jpg";
import Hero from "../Hero";
import BlogSidebar from "./blog-sidebar/BlogSidebar";
const Blog = () => {
  return (
    <Fragment>
      <Hero />

      <div className="blog-main_container">
        <div className="blog-female_container">
          <div className="blog-female_plan">
            <div className="female-blog">
              <h1>THE MOST COMMON MISTAKES WHEN MANAGING PERSONAL FINANCES</h1>
              <p>
                {" "}
                <i className="fa-regular fa-calendar fa-bounce"></i> 27.04.2016
              </p>
              <img src={blogFemale} alt="blogFemale" />
              <p>
                The ability to manage money competently is especially valuable
                quality in the conditions of financial crisis, when the
                purchasing power of the population is shrinking, inflation is
                rising, and currency exchange rates are completely
                unpredictable. Below are the common mistakes related to money
                affairs along with financial planning advice to help manage your
                own finances properly.
              </p>
            </div>
            <div className="female-blog">
              <h1>METHODS OF THE RECRUITMENT</h1>
              <p>
                {" "}
                <i className="fa-regular fa-calendar fa-bounce"></i> 27.04.2016
              </p>
              <img src={blogMale} alt="blogFemale" />
              <p>
                Search of staff is not an easy task. According to the
                departmental heads' of personnel management words, in order to
                find a personnel who will correspond to the relevant customer
                needs and requirements, it is necessary to carry out a great
                job.
              </p>
            </div>
            <div className="female-blog">
              <h1>OVERALLS WITH LOGO AS A METHOD OF ADVERTISING</h1>
              <p>
                {" "}
                <i className="fa-regular fa-calendar fa-bounce"></i> 27.04.2016
              </p>
              <img src={blogGirl} alt="blogFemale" />
              <p>
                Overalls bearing the company's logo are related to economy and
                practicality. A preference of corporate style involves a
                significant increase of costs for development of design
                solutions, customized tailoring, selection of necessary
                materials and so on.
              </p>
            </div>
          </div>
        </div>

        <div className="side-bar_wraper">
          <BlogSidebar />
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
