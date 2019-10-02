import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/layouts/SearchLocation.scss";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    const arrowStyling = this.state.open ? "fa-chevron-up" : "fa-chevron-down";
    return (
      <div>
        <div onClick={e => this.togglePanel(e)} className="search-location__title">
        <h4 className="search-location__title">{this.props.title}</h4>
        <i className={`fas ${arrowStyling} arrow`} />
         
        
        </div>
        {this.state.open ? <div>{this.props.children}</div> : null}
      </div>
    );
  }
}

Collapsible.propTypes = {
  togglePanel: PropTypes.func,
  open: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Collapsible;