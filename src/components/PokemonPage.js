import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  
  state = {
    pokemons: [],
    filter: ''
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon').then(res => res.json()).then(data => this.setState({pokemons: data}))
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  addPokemon = pokemon => {
    this.setState((prevState) => ({
      pokemons: [...prevState.pokemons, pokemon]
    }))
  }

  handleSearch = e => {
      this.setState({
        filter: e.target.value
      })
  }

  pokemonsToRender = () => {
    if (this.state.filter === ''){
      return this.state.pokemons
    } else {
      return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.filter))
    }
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/> 
        <br />
        <PokemonCollection pokemons={this.pokemonsToRender()} />
      </Container>
    )
  }
}

export default PokemonPage
