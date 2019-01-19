import React from "react";
const effects = require("../effects.json")
const arr = effects["effects"];
const nameOfTheGroups = [];
for(var i = 0; i < arr.length; i++) {
 nameOfTheGroups.push(Object.keys(arr[i])[0]);
}

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.onEffectClick = this.onEffectClick.bind(this);
  }
  onEffectClick(e) {
    const heading = document.getElementById("heading");
    heading.className += "";
    heading.className += `text-hover text-hover-${e}`
 }

  render() {
      return(
        <div className="wrapper">
          {nameOfTheGroups.map((group, i) =>
            <section key={i} className={group}>
              <h2>{group} </h2>
              <div className="section-container">
                {arr[i][group].map((effect, i) =>
                  <span className="effect" key={i} onClick={(e) => this.onEffectClick(e.target.id)} id={effect}>{effect}</span>
                )}
              </div>
            </section>
          )}
        </div>
      )
    }
}

export default Section;
