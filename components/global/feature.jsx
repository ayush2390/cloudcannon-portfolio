import Link from "next/link";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function GlobalFeature({ block, dataBinding }) {
  let content = "";
  const skillSlider = {
    width: "80%",
    margin: "0 auto",
    position: "relative",
  };

  const slidingImages = {
    width: "200px",
  };

  const skill = {
    padding: "0 0 50px 0",
    position: "relative",
  };

  const skillBox = {
    borderRadius: "64px",
    textAlign: "center",
    padding: "60px 50px",
    marginTop: "-60px",
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  if (block.reversed) {
    content = (
      <>
        <section style={skill} id="skills">
          <div style={skillBox}>
            <h2>Skills</h2>
            <Carousel
              responsive={responsive}
              infinite={true}
              style={skillSlider}
            >
              {block.slider.map((image) => (
                <div key={image.key}>
                  <img src={image.src} alt={image.name} style={slidingImages} />
                  <p> {image.name}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </>
    );
  } else {
    content = (
      <>
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">
              <h2 className="pe-xl-0">{block.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              <div className="Learn-more">
                {block.button && (
                  <Link href={block.button.link}>
                    {block.button.text}
                    <i className="ph-arrow-right"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="feature-item-banner mb-sm-8 mb-lg-10 mb-xxl-15 mb-7">
              <div className="card-image">
                <img src={block.image} alt={block.image_alt} loading="lazy" />
              </div>
              <div className="effect-two"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <section
        className="feature pt-sm-10 pt-5 pb-4"
        data-cms-bind={dataBinding}
      >
        <div className="container">{content}</div>
      </section>
    </>
  );
}
