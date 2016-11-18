var App = React.createClass({

  getInitialState: function() {
    return {
      cars:[]
    }
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest = 
      axios
        .get(this.props.data_source)
        .then(function (result) { 
          _this.setState({
            cars: result.data.Cars
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {this.state.cars.map(function(car) {
          return (
            <div key={car.item_number}>

                <div className='header-bar'>
                  <div className='orange-button'><img src='images/placeholder.png'></img></div>
                  <div className='orange-button'><img src='images/phone-call.png'></img></div>
                  <div className='orange-button'><img src='images/time.png'></img></div>
                  <img src='images/search.png' className='search-image'></img>
                </div>

                <div className='top-bar'>
                  <div className='image-container'>
                    <img id='emphasized-image' src='images/1.jpg'></img>
                  </div>

                  <div className='high-description'>

                    <h4 className='car-title'>{car.name}</h4>

                    <h4 className='sub-title'>Year</h4>
                      <h4 className='sub-info'>{car.year}</h4>
                    <h4 className='sub-title'> Price Range </h4>
                      <h4 className='sub-info'> $ {car.lower_price} - $ {car.higher_price} </h4>
                    <h4 className='sub-title'> Mileage </h4>
                      <h4 className='sub-info'>{car.mileage}</h4>
                    <div className='identifiers'>
                      <h4>Item Number: {car.item_number}</h4>
                      <h4>VID: {car.VID}</h4>
                    </div>
                  </div>
                </div>

                <div className='lower-images'> <img className='sub-image' src='images/1.jpg'></img> <img className='sub-image' src='images/2.jpg'></img> <img className='sub-image' src='images/3.jpg'></img> <img className='sub-image' src='images/4.jpg'></img> <img className='sub-image' src='images/5.jpg'></img> <img className='sub-image' src='images/6.jpg'></img> </div>

                <div className='detail-description' id='exterior'>

                  <h4 className='lower-title'> EXTERIOR </h4>

                  <h4 className='lower-sub-title'>Cylinders</h4>
                    <h4 className='lower-sub-info'>{car.cylinders}</h4>
                  <div className='horizontal-divide-line'></div>
                  <h4 className='lower-sub-title'>City MPG</h4>
                    <h4 className='lower-sub-info'>{car.city_mpg} MPG </h4>
                    <div className='horizontal-divide-line'></div>
                  <h4 className='lower-sub-title'>Highway MPG</h4>
                    <h4 className='lower-sub-info'>{car.highway_mpg} MPG </h4>
                    <div className='horizontal-divide-line'></div>
                  <h4 className='lower-sub-title'>Engine</h4>
                    <h4 className='lower-sub-info'>{car.engine} </h4>
                  <div className='bottom-regulator'></div>
                </div>

                <div className='detail-description' id='performance'>

                  <h4 className='lower-title'> PERFORMANCE </h4>

                  <h4 className='lower-sub-title'>Cylinders</h4>
                    <h4 className='lower-sub-info'>{car.cylinders}</h4> <br/>
                  <div className='horizontal-divide-line'></div>
                  <h4 className='lower-sub-title'>City MPG</h4>
                    <h4 className='lower-sub-info'>{car.city_mpg} MPG </h4>
                  <div className='horizontal-divide-line'></div>
                  <h4 className='lower-sub-title'>Highway MPG</h4>
                    <h4 className='lower-sub-info'>{car.highway_mpg} MPG </h4>
                  <div className='horizontal-divide-line'></div>
                  <h4 className='lower-sub-title'>Engine</h4>
                    <h4 className='lower-sub-info'>{car.engine} </h4>
                  <div className='bottom-regulator'></div>
                </div>

            </div>

          );
        })}

      </div>
    )
  }
});

React.render(<App data_source="http://localhost:3000/api/cars/1395P" />, document.body);