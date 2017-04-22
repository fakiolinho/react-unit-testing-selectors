import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getRepo from 'services/repo/actions';
import Logo from './components/Logo';
import './style.scss';

export class Main extends Component {
  static propTypes = {
    repo: PropTypes.shape({
      stargazers_count: PropTypes.number,
    }).isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    getRepo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getRepo('facebook', 'react');
  }

  render() {
    const { repo, isLoading, error } = this.props;

    return (
      <main>
        <Logo />
        {(() => {
          if ('stargazers_count' in repo) {
            return <h3>Stars: {repo.stargazers_count}</h3>;
          }

          return isLoading ? <p>...loading</p> : <p>{error}</p>;
        })()}
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  repo: state.repo.data,
  isLoading: state.repo.isLoading,
  error: state.repo.error,
});

const mapDispatchToProps = dispatch => ({
  getRepo: bindActionCreators(getRepo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
