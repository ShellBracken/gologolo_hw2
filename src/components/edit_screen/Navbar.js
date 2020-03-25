import React from 'react'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  deleteCurrLogo = () => {
    const key = this.props.logo.key;
    console.log(window.localStorage['recent_work'][key.toString()])
    this.props.deleteLogo(key);
    const logoToDelete = window.localStorage.getItem('recent_work');
    window.localStorage.removeItem(logoToDelete);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <div style={ {cursor: "pointer"} }
              onClick={this.deleteCurrLogo}>
                &#128465;
            </div>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;