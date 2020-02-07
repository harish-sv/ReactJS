import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   render() {
      return ( 
         <div>
            <h1> Hello, {this.props.name} </h1>
            <h3>Array: {this.props.propArray}</h3>			
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
         </div>
      );
   }
}

App.defaultProps = {
   name: 'Tutorialspoint.com',
   propBool: 234,
   propFunc: function(e) {
      return e
   },
   propNumber: 2323223,
   propString: "String value..."
}

App.propTypes = {
    name: PropTypes.string,
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.oneOf(['left', 'right']),
    propString: PropTypes.string,
 };

 
export default App;