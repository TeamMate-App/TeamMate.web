import React from "react";
import "./SectionHome.css";

const SectionHome = () => {
  return (
    <div className="mainsection1">
      <section class="web-design">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center pb-20 mt-20">
              <h2 class="title-underline">
                What we focus on for Website Development?
              </h2>
            </div>
          </div>

          <div class="blog-inner">
            <div class="blog-slider">
              <div class="blog-slider__item">
                <div class="blog-slider__img">
                  <img
                    alt="Design"
                    class="finbyz-zoomin"
                    src="https://finbyz.tech/files/design.svg"
                    title="Design"
                  />
                </div>

                <div class="blog-slider__content">
                  <div class="blog-slider__title finbyz-fadeinup">Design</div>

                  <div class="blog-slider__text finbyz-fadeinup">
                    <p>
                      We offer you a comprehensive design for your website with
                      impressive layouts. Unlike many other website development
                      companies, we don’t use themes, but we create a website
                      from scratch to ensure uniqueness of design aesthetics. By
                      following the client’s requirements and ongoing market
                      trends, we give you a user-friendly solution which depicts
                      your own brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="blog-slider pt-200">
              <div class="blog-slider__item ">
                <div class="blog-slider__img">
                  <img
                    alt="Content"
                    class="finbyz-zoomin"
                    src="https://finbyz.tech/files/content.svg"
                    title="Content"
                  />
                </div>

                <div class="blog-slider__content">
                  <div class="blog-slider__title finbyz-fadeinup">Content</div>

                  <div class="blog-slider__text finbyz-fadeinup">
                    <p>
                      Content is the key element that attracts the attention of
                      the customers, we provide you with a relevant and strong
                      creative content that speaks aloud for your operations and
                      expertise. Giving attention to details we structure the
                      content to highlight key pointers to readers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="blog-slider pt-200">
              <div class="blog-slider__item ">
                <div class="blog-slider__img">
                  <img
                    alt="Graphics"
                    class="finbyz-zoomin"
                    src="https://finbyz.tech/files/graphics.svg"
                    title="Graphics"
                  />
                </div>

                <div class="blog-slider__content">
                  <div class="blog-slider__title finbyz-fadeinup">Graphics</div>

                  <div class="blog-slider__text finbyz-fadeinup">
                    <p>
                      Instead of images and icons we prefer to use premium
                      vector graphics for a website wherever it’s possible.
                      These are robust and scalable light-weight image types,
                      which remain crystal clear irrespective of screen size. We
                      combine these advanced technologies with the user-friendly
                      interface to create robust, scalable and multifunctional
                      websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHome;
