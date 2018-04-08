import React from "react";
import { IndexLink, Link } from "react-router";
const ACTIVE = {color:'red'};
 
export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
 
 
  }
 
  toggleCollapse() {
  const collapsed = !this.state.collapsed;
  this.setState({collapsed});
}
 
  render() {
 
return (
 
  <ul class="nav side-menu">
      <li>
        <IndexLink to="/"  onClick={this.toggleCollapse.bind(this)} activeStyle={ACTIVE}> <i class="fa fa-home"> </i>Dashboard</IndexLink>
      </li>
      <li>
        <Link to="/client" onClick={this.toggleCollapse.bind(this)} activeStyle={ACTIVE}> <i class="fa fa-briefcase"> </i>Clients</Link>
      </li>
    <li>
      <Link to="/metier" onClick={this.toggleCollapse.bind(this)} activeStyle={ACTIVE}> <i class="fa fa-briefcase"> </i>Metier</Link>
    </li>
    <li>
      <Link to="/journal" onClick={this.toggleCollapse.bind(this)} activeStyle={ACTIVE}> <i class="fa fa-briefcase"> </i>Journal</Link>
    </li>
   </ul>
);
}
}