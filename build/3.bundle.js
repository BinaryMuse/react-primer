webpackJsonp([3],{5:/*!*************************!*\
  !*** ./demo3/demo3.jsx ***!
  \*************************/
function(e,t,n){var r=n(/*! react */1),o=r.createClass({displayName:"Timer",getInitialState:function(){return{time:0}},componentDidMount:function(){this.timer=setInterval(this.tick,1e3)},componentWillUnmount:function(){this.timer&&clearInterval(this.timer)},tick:function(){this.setState({time:this.state.time+1})},render:function(){return r.createElement("div",null,"Time: ",this.state.time)}});r.render(r.createElement(o,null),document.getElementById("container"))}});
//# sourceMappingURL=3.bundle.js.map