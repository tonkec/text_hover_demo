import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass(e) {
    const headingFirstClass = e.classList[0];
    if (headingFirstClass.includes("click")) {
      if (e.classList[2]){
        e.classList.remove("active");
      } else {
        e.classList += " active";
      }
    }
  };

  render() {
    return(
      <header className="header">
        <a href="https://github.com/tonkec/text_hover_effects" target="_blank" className="github-fork">
          <img src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
        </a>
        <h1 className="text-hover text-hover-halfline-bottom-goes-left"
        onClick={(e) => this.toggleClass(e.target)} id="heading">
          Hover me
        </h1>
      </header>
    )
  }
}

export default Header;
