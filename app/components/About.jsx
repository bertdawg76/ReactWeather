var React = require('react');
var {Link} = require('react-router');

/*About = React.createClass({
  render: function(){
    return (
      <div>
        <h3>About This Site</h3>
        <p>This Site makes an API call to the Open Weather Map API and displays the temperature.</p>
        <p>Below are links to the Open Weather Map site and to my github repo</p>
        <ol>
          <li>
            <Link to='https://github.com/bertdawg76/ReactWeather'>Github Link</Link>
          </li>
          <li>
            <Link to='http://openweathermap.org/api'>Open Weather Map API link</Link>
          </li>
        </ol>
      </div>
    )
  }
});*/

var About =  (props) => {

  return (
    <div>
      <h3 className="text-center">About This Site</h3>
      <p>This Site uses React to  makes an API call to the Open Weather Map API and displays the temperature.</p>
      <p>Below are links to the Open Weather Map site and to my github repo</p>
      <ul>
        <li>
          <a href="https://github.com/bertdawg76/ReactWeather" target="_blank">Github Link</a>
        </li>
        <li>
          <a href="http://openweathermap.org/api" target="_blank">Open Weather Map API link</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;