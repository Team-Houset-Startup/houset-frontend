import React, { Component } from "react";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users/?results=10")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id}`,
            firstName: `${data.name}`,
            lastName: `${data.username}`,
            location: `${data.address.street}`,

          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {items } = this.state;
        return (
          <div className="boxWhite">
            <h2>Random User</h2>
            {
              items.length > 0 ? items.map(item => {
              const {id, firstName, lastName, location} = item;
               return (

               <div key={id} className="bgCircle">
               {/* <center><img src={thumbnail} alt={firstName} className="circle"/> </center><br /> */}
               <div className="ctr">
                  {firstName} {lastName}<br />
                  {location}
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Home;