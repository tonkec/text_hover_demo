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
    this.state = {
      effectTrigger: 'hover',
      active: false,
      error: ""
    };

    this.changeText = this.changeText.bind(this);
  }

  handleSelect(e) {
    this.setState({effectTrigger: e},() => {
      this.changeText();
    });
  }

  changeText() {
    const heading = document.getElementById("heading");
    const newHeadingText = this.state.effectTrigger;
    heading.innerText = newHeadingText.charAt(0).toUpperCase() + newHeadingText.slice(1) + " me";
    let headingClass = heading.classList[1];
    let clickRegex = /text-click-(.*)/;
    let hoverRegex = /text-hover-(.*)/;
    let id = "";
    if (headingClass.match(clickRegex)) {
      id = headingClass.match(clickRegex)[1];
      this.applyEffect(id);
    } else if (headingClass.match(hoverRegex)) {
      id = headingClass.match(hoverRegex)[1];
      this.applyEffect(id);
    } else {
      this.setState({error: "Uh, oh, I messed up :("})
    }
  }

  applyEffect(id) {
    // reset state from section component
    const allEffects = document.getElementsByClassName("effect");
    for (var i = 0; i < allEffects.length; i++) {
      allEffects[i].classList.remove('active');
    }
    document.getElementById(id).classList += " active";
    const heading = document.getElementById("heading");
    heading.classList = "";
    heading.classList = `text-${this.state.effectTrigger} text-${this.state.effectTrigger}-${id}`;
  }

  render() {
      return(
        <div className="wrapper">
          <div className="select-wrapper">
            <select
              value={this.state.effectTrigger}
              onChange={(e) => this.handleSelect(e.target.value)}
              className="select"
              >
              <option value="hover"> Hover </option>
              <option value="click"> Click </option>
            </select>
          </div>
          {this.state.error && <h2> {this.state.error} </h2>}
          {nameOfTheGroups.map((group, i) =>
            <section key={i} className={group}>
              <h2>{group} </h2>
              <div className="section-container">
                {arr[i][group].map((effect, i) =>

                  <span className="effect" key={i} id={effect} onClick={(e) => this.applyEffect(e.target.id)}>
                    {effect}
                  </span>
                )}
              </div>
            </section>
          )}
        </div>
      )
    }
}

export default Section;
