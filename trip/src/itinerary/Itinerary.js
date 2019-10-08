import React from 'react';
import 'whatwg-fetch'
import './Itinerary.css';
import SortableList from './SortableList'

export const Test = 'Hello'

//const apiKey = 'AIzaSyAQanW19-11Nqln22IfAe-zQLppJ9lFd1M';
const apiKey = 'AIzaSyA9O2LK0b3E7n-21E73qthzFinwsXV3XAU'

const Item = (props) => {
    return (
        <li>
            {props.name}
        </li>
    )
};
  

class Itinerary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            destinations: [],
            predictions: [],
            places: {},
            query: "",
            items: []
        }

        this.addDestination = this.addDestination.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
    }
    componentDidMount() {
    }
    addDestination(dest) {

        const { destinations,places,items } = this.state;
        places[dest.place_id] = dest;
        this.setState({ destinations: [...destinations, dest.description],
            places: {...places},
            items: [...items,dest.place_id] })
        console.log(this.state);
    }
    updateQuery(event) {
        const { value } = event.target;
        this.setState(prevState => ({ ...prevState, query: value }), () => {
            const encodedQuery = encodeURI(this.state.query); 
            // console.log(encodedQuery, this.state.query);
            // const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodedQuery}&types=establishment&location=42.36,-71.044&radius=500&key=${apiKey}`

            // fetch({
            //     url,
            //     method: 'GET',
            //     'no-cors': true
            // })
            const url = `http://localhost:5000/search?q=${encodedQuery}`;
                fetch(url)
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then((json) => {
                    console.log(json);
                    this.setState({predictions: json.predictions});
                });

            // var output = window.google.maps.places.Autocomplete(this.state.query);
        });
    }

    render() {
        console.log(this.state);
        
        return (
            <div className="itin">
                <form onSubmit={e => {
                    e.preventDefault();

                    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&q=test`;

                    // fetch(url, {

                    // }).then(response => {
                    //     console.log(response);
                    //     return response.json();
                    // })
                    // .then(json => {
                    //     console.log(json);
                        
                    // });
                    
                    //this.addDestination(this._input.value)
                    this._input.value = ''
                }}
                >
                    <div className="autocomplete" style={{width:300+'px'}}>
                        <input className="searchbox" type="text" value={this.state.query} onChange={this.updateQuery} />
                        <ul className="suggest">
                            {this.state.predictions.map((prediction, i) => (
                                <li className="suggest-item" key={i} onClick={() => {
                                    this.addDestination(prediction);
                                }} >{prediction.description}</li>
                            ))}
                        </ul>
                    </div>
                    <input type="submit" />
                </form>
                {/*
                <div className="autocomplete suggest" style={{width:300+'px'}}>
                    <ul>
                        {this.state.predictions.map((prediction, i) => (
                            <li className="autocomplete" key={i} onClick={() => {
                                this.addDestination(prediction);
                            }} >{prediction.description}</li>
                        ))}
                    </ul>
                </div>
                        */}
                {/*<ul style={{ listStyle: 'none' }}>
                    {this.state.destinations.map((dest, i) => {
                        return <Item key={i} name={dest} />
                    })}
                    {/* <Item name="Reykjavic" />
                    <Item name="Vik" /> 
                </ul>*/}

                              
                <SortableList
                    items={this.state.items}
                    places={this.state.places}
                    onChange={(items) => {
                        this.setState({ items });
                    }}
                    className="itinList"
                >
                </SortableList>


                
            </div>
        );
    }
}

export default Itinerary;