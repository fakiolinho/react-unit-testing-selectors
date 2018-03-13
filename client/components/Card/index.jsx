import React, { Component } from 'react';

import 'tachyons/css/tachyons.min.css';

export default class Card extends Component {
  state = {
    salute: false,
    like: false,
  };

  handleSalute = () => {
    this.setState(prevState => ({
      salute: !prevState.salute,
    }));
  };

  handleLike = () => {
    this.setState(prevState => ({
      like: !prevState.like,
    }));
  };

  renderSaluteText = () => (this.state.salute ? 'You said hi' : 'Say hi');

  renderLikeText = () => (this.state.like ? 'You like it' : 'I like');

  render() {
    return (
      <article className="br2 bg-white ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <img
          src="http://placekitten.com/g/600/300"
          className="db w-100 br2 br--top"
          alt="kitten"
        />
        <div className="pa2 ph3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">Kitty</h1>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            modi omnis placeat possimus! Delectus doloremque nobis officiis
            placeat ratione rerum.
          </p>
        </div>
        <div className="pa2 tc">
          <button
            onClick={this.handleSalute}
            className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mh1 mb2 dib black"
            data-test="salute"
          >
            {this.renderSaluteText()}
          </button>
          <button
            onClick={this.handleLike}
            className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mh1 mb2 dib black"
            data-test="like"
          >
            {this.renderLikeText()}
          </button>
        </div>
      </article>
    );
  }
}
