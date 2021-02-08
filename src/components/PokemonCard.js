import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    showingBack: false
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showingBack: !prevState.showingBack
    }))
  }
  
  render() {

    let image = this.props.pokemon.sprites
    return ( 
      <Card>
        <div>
          <div className="image" key={this.props.pokemon.id} onClick={() => this.handleClick()}>
            <img src={this.state.showingBack ? image.back : image.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
