import React, { Component } from 'react';

import './style.scss';

export default class Options extends Component {
  handleAdd = () => {
    console.log('add');
  };

  handleEdit = () => {
    console.log('edit');
  };

  handleDelete = () => {
    console.log('delete');
  };

  render() {
    return (
      <ul>
        <li>
          <button onClick={this.handleAdd} data-test="add">
            Add
          </button>
        </li>
        <li>
          <button onClick={this.handleEdit} data-test="edit">
            Edit
          </button>
        </li>
        <li>
          <button onClick={this.handleDelete} data-test="delete">
            Delete
          </button>
        </li>
      </ul>
    );
  }
}
