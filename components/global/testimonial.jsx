import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalTestimonial({ block, dataBinding }) {
  let content = "";

  const projImg = {
    width: "100%",
    height: " auto",
    borderRadius: "30px",
  };
  const projImgbx = {
    position: "relative",
    borderRadius: "30px",
    // overflow: "hidden",
    marginBottom: "24px",
  };

  const projTxtx = {
    position: "fixed",
    textAlign: "center",
    // backgroundColor: "red",
    top: "65%",
    left: "50%",
    // transform: "translate(-50%, -50%)",
    transition: "0.5s ease-in-out",
    opacity: "1",
    width: "100%",
  };

  const projH4 = {
    // fontSize: "30px",
    // fontWeight: "700",
    // letterSpacing: "0.8px",
    // lineHeight: "1.1em",
    paddingTop: "20px",
    color: "black",
    textAlign: "center",
    // backgroundColor: "red",
  };

  const projH2 = {
    fontSize: "45px",
    fontWeight: "700",
    textAlign: "center",
  };

  const project = {
    padding: "80px 0",
    position: "relative",
  };

  const projectDiv = {
    display: "grid",
    gridTemplateColumns: " 600px 600px",
    columnGap: "80px",
    rowGap: "80px",
    gridTemplateRows: "300px 300px",
    paddingLeft: "100px",
    width: "100%",
  };

  if (block.reversed) {
    content = (
      <>
        {block.slider.map((project) => (
          <>
            <div style={projImgbx} key={project.key}>
              <a href={project.link}>
                <img src={project.url} style={projImg} />
                <h4 style={projH4}>{project.title}</h4>
              </a>
            </div>
          </>
        ))}
      </>
    );
  } else {
    content = <></>;
  }
  return (
    <section style={project} id="projects">
      <h2 style={projH2}>{block.title}</h2>
      <div style={projectDiv}>{content}</div>
    </section>
  );
}
