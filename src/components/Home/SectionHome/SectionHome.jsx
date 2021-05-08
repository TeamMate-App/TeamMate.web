import React from "react";
import "./SectionHome.css";

const SectionHome = () => {
  return (
    <div id="section-2" className="mainsection1">
      <section className="web-design">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pb-20 mt-20">
              <h1 className="title-underline pt-4">
              The most sought after sports facilities
              </h1>
            </div>
          </div>

          <div className="blog-inner">
            <div className="blog-slider">
              <div className="blog-slider__item">
                <div className="blog-slider__img">
                  <img
                    alt="Design"
                    className="finbyz-zoomin"
                    src="https://res.cloudinary.com/teammatereact258/image/upload/v1620503206/5_rxueuz.jpg"
                    title="Design"
                  />
                </div>

                <div className="blog-slider__content">
                  <div className="blog-slider__title finbyz-fadeinup">Discover what is Teammate</div>

                  <div className="blog-slider__text finbyz-fadeinup">
                    <p>
                    <strong>Teammate</strong> is the largest platform to reserve tennis and paddle courts
                      or soccer fields throughout Spain. Our sports philosophy led us
                       to understand the need that exists in the habitual player for wanting
                       reserve tracks online through our app or website. In this way,
                        we challenge conventional field or track rental processes
                        so that thousands of players have the possibility to practice their sport
                         favorite more conveniently and quickly. If you are trying to improve your
                          paddle tennis, soccer or tennis technique and you love sport, this is your place.
                           We take care of managing the entire reservation process for
                           clues so you don't have to worry about a thing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-slider pt-200">
              <div className="blog-slider__item ">
                <div className="blog-slider__img">
                  <img
                    alt="Content"
                    className="finbyz-zoomin"
                    src="https://res.cloudinary.com/teammatereact258/image/upload/v1620503206/2_y7cocg.jpg"
                    title="Content"
                  />
                </div>

                <div className="blog-slider__content">
                  <div className="blog-slider__title finbyz-fadeinup">Health</div>

                  <div className="blog-slider__text finbyz-fadeinup">
                    <p>
                    <strong>Teammate</strong> helps you with your health, any body movement that involves energy 
                    expenditure is called physical activity. Any action that requires an energy 
                    expenditure above basal metabolism, which is the energy necessary for the 
                    body to perform basic functions. In this way, Teammate makes it easy for you 
                    to practice your favorite sport.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-slider pt-200">
              <div className="blog-slider__item ">
                <div className="blog-slider__img">
                  <img
                    alt="Graphics"
                    className="finbyz-zoomin"
                    src="https://res.cloudinary.com/teammatereact258/image/upload/v1620503206/4_uhalyg.jpg"
                    title="Graphics"
                  />
                </div>

                <div className="blog-slider__content">
                  <div className="blog-slider__title finbyz-fadeinup">Friends</div>

                  <div className="blog-slider__text finbyz-fadeinup">
                    <p>
                    Playing sports as a team encourages socialization, since new people
                     are met and a series of memories and experiences shared with the other
                      are generated. Improve self-esteem. Feeling the support of others can
                       help you overcome your fears and, consequently, feel comforted.
                        Promotes health.
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
