import React from "react";

const AboutUsHome = () => {
  return (
    <div id="section-1">
      <div className="mainsection">
        <div className="container row">
          <div className="col-12">
            <h1>ABOUT US</h1>
            <hr></hr>
            <p>
            If you like to play paddle tennis more competitively with your regular partner
             or you would like to participate in American wells and paddle tennis 
             tournaments but you don't have a partner, you can find what you are 
             looking for in the activities section of the app. You can sign up for
              any of our tournaments choosing for its price, its duration, its location,
               its schedule or simply for the star prizes that some tournaments offer
                to the winners, being able to win even paddle tennis rackets. All padel
                 Madrid tournaments or American wells that are available in <strong>Teammate</strong> 
                  have the professionalism of each sports center or the quality and 
                  seriousness of Padelvip Madrid. What are you waiting for to have fun
                   playing?
            </p>
            <p>
              Whether you are a beginner or a very experienced player, thanks to 
              <strong>Teammate</strong> you will be able to book your padel court in ideal
              conditions. We collaborate with the Federacion Madrileña de Padel,
              one of our official partners, in multiple tournaments, and we also
              participate in different padel events across Spain. On the other
              hand, we work so that our clubs add some kind of value to the
              players community. For example, that their services include padel
              lessons. In fact, you will see that the clubs available might be
              perfect for you in case you need a better understanding of the
              techniques used in padel.
            </p>
            <section className="three-column-images">
              <div className="container ">
                <div className="row">
                  <div className="col-xs-6 col-sm-4">
                    <img
                      src="https://res.cloudinary.com/teammatereact258/image/upload/v1620503206/1_dqyaxd.jpg"
                      className="img-thumbnail img-responsive"
                      alt="cat"
                    />
                  
                  </div>

                  <div className="col-xs-6 col-sm-4">
                    <img
                      src="https://res.cloudinary.com/teammatereact258/image/upload/v1620503207/3_cqgahc.jpg"
                      className="img-thumbnail img-responsive"
                      alt="cat"
                    />
                   
                  </div>

                  <div className="col-xs-6 col-sm-4">
                    <img
                      src="https://res.cloudinary.com/teammatereact258/image/upload/v1620503207/6_gh6zdv.jpg"
                      className="img-thumbnail img-responsive"
                      alt="cat"
                    />
                    
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
