import Banner from "../../components/java script files/Banner";
import Container from "../../layout/javascript files/Container";
import classes from "../css files/MainPageStyle.module.css";
import GDImage from "../../images/GDTrack.jpg";
import DSImage from "../../images/DSTrack.jpg";
import CSImage from "../../images/CSTrack.jpg";
import FillerImage from "../../images/FillerImage.jpg";
import TracksContainer from "../../components/java script files/TracksContainer";
import SubjectContainer from "../../components/java script files/SubjectsContainer";
import LatestPost from "../../components/java script files/LatestPost";
import data from "../../data/Subjects.json";
import data2 from "../../data/LatestPost.json";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//Contains the one page website and all its different sections and their components
function MainPage() {
  function handleClickScroll(id) {
    const element = document.getElementById(id);
    if (element !== null) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  //get data from json and map them to their respective attributes
  const latestPost = data2.LatestPost.map((data2) => {
    return (
      <LatestPost
        imageSrc={FillerImage}
        imgAlt={data2.id}
        title={data2.postTitle}
        date={data2.date}
      />
    );
  });

  const dataScience = data.DataScience.map((data) => {
    return (
      <div>
        <SubjectContainer
          key={data.id}
          imageSrc={FillerImage}
          imgAlt={data.alt}
          subjectCode={data.subjectCode}
          subjectTitle={data.subjectTitle}
        />
      </div>
    );
  });

  const coreScience = data.CoreScience.map((data) => {
    return (
      <SubjectContainer
        key={data.id}
        imageSrc={FillerImage}
        imgAlt={data.alt}
        subjectCode={data.subjectCode}
        subjectTitle={data.subjectTitle}
      />
    );
  });

  const gameDevelopment = data.GameDevelopment.map((data) => {
    return (
      <SubjectContainer
        key={data.id}
        imageSrc={FillerImage}
        imgAlt={data.alt}
        subjectCode={data.subjectCode}
        subjectTitle={data.subjectTitle}
      />
    );
  });

  //create useState to avoid refreshing page, used in the tracks section
  const [selectedSubs, setSubs] = useState(dataScience);

  //changes content based on selected button in the tracks section
  function selectTrack(selectedTrack) {
    if (selectedTrack === "DS") {
      setSubs(dataScience);
    } else if (selectedTrack === "CS") {
      setSubs(coreScience);
    } else if (selectedTrack === "GD") {
      setSubs(gameDevelopment);
    }
  }
  return (
    <div>
      {/* Hero Section */}
      <Container>
        <div className={classes.heroTitleText}>
          <h2>Lorem ipsum dolor sit amet, consectetur adi</h2>
          <p className={classes.subtitle1}>
            incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className={classes.centerContent}>
          <button
            className={classes.button}
            onClick={() => handleClickScroll("tracks")}
          >
            #tracks
          </button>
          <button
            className={classes.button}
            onClick={() => handleClickScroll("subjects")}
          >
            #subjects
          </button>
          <button
            className={classes.button}
            onClick={() => handleClickScroll("latestposts")}
          >
            #latestposts
          </button>
        </div>
      </Container>
      <div id="tracks">
        <Banner />
      </div>
      {/* Tracks Section */}
      <Container>
        <div>
          <h2>Tracks</h2>
          <div className={classes.rowContent}>
            <TracksContainer
              imageSrc={DSImage}
              imgAlt="Data Science Track"
              trackName="Data Science"
              trackInformation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula."
            />
            <TracksContainer
              imageSrc={CSImage}
              imgAlt="Core CS"
              trackName="Core Science"
              trackInformation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula."
            />
            <TracksContainer
              imageSrc={GDImage}
              imgAlt="Game Development Track"
              trackName="Game Development"
              trackInformation="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula."
            />
          </div>
        </div>
      </Container>
      <div id="subjects">
        <Banner />
      </div>
      {/* Subjects Section */}
      <Container>
        <div>
          <h2>Subjects</h2>
          <div className={classes.centerContent}>
            <button
              className={classes.buttonFocus}
              onClick={() => selectTrack("DS")}
            >
              Data Science
            </button>
            <button
              className={classes.buttonFocus}
              onClick={() => selectTrack("CS")}
            >
              Core Science
            </button>
            <button
              className={classes.buttonFocus}
              onClick={() => selectTrack("GD")}
            >
              Game Development
            </button>
          </div>
          <div className={classes.rowContent}>{selectedSubs}</div>
        </div>
      </Container>
      <div id="latestposts">
        <Banner />
      </div>
      {/* Latest Post Section */}
      <Container>
        <div>
          <h2>Latest Post</h2>
          <div className={classes.centerContent}>
            {/* Carousel of images used dependency react-multi-carousel */}
            <Carousel
              additionalTransfrom={0}
              arrows={true}
              autoPlay={true}
              autoPlaySpeed={10000}
              centerMode={true}
              containerClass={classes.carouselContainer}
              draggable={true}
              focusOnSelect={false}
              infinite={false}
              itemClass={classes.carouselItemContainer}
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover={true}
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 4,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 4,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={true}
              rewindWithAnimation={true}
              rtl={false}
              shouldResetAutoplay
              showDots={true}
              sliderClass=""
              slidesToSlide={2}
              swipeable
            >
              {latestPost}
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
