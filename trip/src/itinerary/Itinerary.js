import React from 'react';

export const Test = 'Hello'

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