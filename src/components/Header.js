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
        <h1 className="text-hover text-hover-halfline-bottom-goes-left"
        onClick={(e) => this.toggleClass(e.target)} id="heading">
          Hover me
        </h1>
      </header>
    )
  }
}

export default Header;
