import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { getCharacters } from '../actions/index';
import Loader from 'react-loader-spinner';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return (
        <div>
          <h3>Targeting Star Wars Characters...hold...hold...</h3>
          {this.props.isFetching && (
            <Loader type='Bars' color='#somecolor' height={80} width={80} />
          )}
        </div>
      );
    }
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isFetching: state.charsReducer.isFetching
  };
};
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  { getCharacters } /* action creators go here */
)(CharacterListView);
