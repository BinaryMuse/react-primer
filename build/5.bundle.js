webpackJsonp([5],{7:/*!*************************!*\
  !*** ./demo5/demo5.jsx ***!
  \*************************/
function(e,t,n){var o=n(/*! react */1),i={componentWillMount:function(){this.intervals=[]},setInterval:function(){this.intervals.push(setInterval.apply(null,arguments))},componentWillUnmount:function(){this.intervals.forEach(clearInterval)}},r=o.createClass({displayName:"Timer",mixins:[i],getInitialState:function(){return{time:0}},componentDidMount:function(){this.setInterval(this.tick,1e3)},tick:function(){this.setState({time:this.state.time+1})},render:function(){return o.DOM.div(null,"Time: ",this.state.time)}});o.renderComponent(r(null),document.getElementById("container"))}});
//# sourceMappingURL=5.bundle.js.map