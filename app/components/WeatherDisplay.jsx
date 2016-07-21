var React = require('react');

/*var WeatherDisplay = React.createClass({
  render: function(){
    var temp = this.props.temp;
    var location = this.props.location;
    return (

      <h3>Here is the Weather: {temp} in {location}</h3>
    );
  }
});*/

var WeatherDisplay = ({temp, location}) => {

  return (

    <h3>Here is the Weather: {temp} in {location}</h3>
  );

};

module.exports = WeatherDisplay;