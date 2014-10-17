webpackJsonp([3],{5:/*!*************************!*\
  !*** ./demo3/demo3.jsx ***!
  \*************************/
function(e,n,t){var o=t(/*! react */1),r=o.createClass({displayName:"Timer",getInitialState:function(){return{time:0}},componentDidMount:function(){this.timer=setInterval(this.tick,1e3)},componentWillUnmount:function(){this.timer&&clearInterval(this.timer)},tick:function(){this.setState({time:this.state.time+1})},render:function(){return o.DOM.div(null,"Time: ",this.state.time)}});o.renderComponent(r(null),document.getElementById("container"))}});
//# sourceMappingURL=3.bundle.js.map