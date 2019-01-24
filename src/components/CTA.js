import React from "react";

class CTA extends React.Component {
  render() {
    return (
      <section className="github-cta">
        <iframe src="https://ghbtns.com/github-btn.html?user=tonkec&repo=text_hover_effects&type=star&count=true&size=large" frameborder="0" scrolling="0" width="130px" height="50px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=tonkec&repo=text_hover_effects&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="130px" height="50px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=tonkec&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="250px" height="50px"></iframe>
      </section>
    )
  }
}

export default CTA;
