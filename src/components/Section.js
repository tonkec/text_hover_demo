import React from "react";
const effects = require("../effects.json")
const arr = effects["effects"];
const nameOfTheGroups = [];
for(var i = 0; i < arr.length; i++) {
 nameOfTheGroups.push(Object.keys(arr[i])[0]);
}

class Section extends React.Component {
  render() {
      return(
        <div className="wrapper">
          {nameOfTheGroups.map((group, i) =>
            <section key={i} className={group}>
              <h2>{group} </h2>
              <div className="section-container">
                {arr[i][group].map((effect, i) =>
                  <span className="effect" key={i}>{effect}</span>
                )}
              </div>
            </section>
          )}
        </div>
      )
    }
}

export default Section;
