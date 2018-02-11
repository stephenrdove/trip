import React from 'react';

export const Test = 'Hello'

const apiKey = 'AIzaSyAQanW19-11Nqln22IfAe-zQLppJ9lFd1M';

const Item = (props) => {
    return (
        <li>
            {props.name}
        </li>
    )
}

class Itinerary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            destinations: []
        }

        this.addDestination = this.addDestination.bind(this);
    }
    addDestination(dest) {
        const { destinations } = this.state;
        this.setState({ destinations: [...destinations, dest] })
    }
    render() {
        console.log(this.state);
        
        return (
            <div>
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

                    this.addDestination(this._input.value)
                    this._input.value = ''
                }}>
                    <input type="text" ref={e => this._input = e} />
                    <button type="submit">Go</button>
                </form>
                
                <ul style={{ listStyle: 'none' }}>
                    {this.state.destinations.map((dest, i) => {
                        return <Item key={i} name={dest} />
                    })}
                    {/* <Item name="Reykjavic" />
                    <Item name="Vik" /> */}
                </ul>
            </div>
        );
    }
}

export default Itinerary;