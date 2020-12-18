import React, { Component } from 'react';
import './App.css';
/* imports major components into my web-app */
import Menu from './components/menu/menu.jsx';
import SideMenu from './components/menu/sideMenu.jsx';
import Backdrop from './components/menu/backdrop.jsx';
import Intro from './components/intro/intro.jsx';
import About from './components/about/about.jsx';
import Work from './components/work/work.jsx';
import Contact from './components/contact/contact.jsx';
/* react-animate-on-scroll is an importated library which allows for animation on scroll*/
import ScrollAnimation from 'react-animate-on-scroll';
/* this allows me to link ids into my menu */
import { Element } from 'react-scroll';



class App extends Component {
  state = { sideMenuOpen: false }

  handleSideMenuOpen = () => {
    this.setState({ sideMenuOpen: true })
  }

  handleSideMenuClose = () => {
    this.setState({ sideMenuOpen: false })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header" style={{marginTop: "60px", marginLeft: "9px"}}>
          
          <ScrollAnimation animateIn="fadeIn">
            <Element id="intro" name="intro"><Intro/></Element>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <Element id="about" name="about"><About/></Element>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <Element id="work" name="work"><Work/></Element>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <Element id="contact" name="contact"><Contact id="contact"/></Element>
          </ScrollAnimation>

        </header>


      {/* This my 'Menu' component, which creates my navigation bar.
          Below it is my 'SideMenu' component, which adjusts when the screen size is changed.
      */}

        <Menu open={this.handleSideMenuOpen}/>
        {this.state.sideMenuOpen ? (
          <div>
            <Backdrop close={this.handleSideMenuClose}/>
          </div>
        ): null}
        <SideMenu close={this.handleSideMenuClose}
          sideMenuOpen={this.state.sideMenuOpen}
        />

       </div>
    );
  }
}

export default App;
