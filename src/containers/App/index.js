import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadItems } from '../../actions/items.actions';
import { loadConditions } from '../../actions/conditions.actions';
import { loadUsers } from '../../actions/users.actions';
import { loadStatuses } from '../../actions/statuses.actions';
import { loadCategories } from '../../actions/categories.actions';
import Nav from '../../components/nav.components';
import ItemList from '../../components/itemlist.components';
//CONTAINERS------------------
import Register from '../Register';
import Login from '../LogIN';
import Logout from '../LogOUT';
import NewItem from '../NewItem/';
import SingleItemView from '../SingleItemView';
//----------------------------
class App extends Component {
  componentDidMount(){
    this.props.loadItems();
    this.props.loadCategories();
    this.props.loadConditions();
    this.props.loadUsers();
    this.props.loadStatuses();
  }

  render() {
    return (
      <div id="app">
        <Nav />
        <NewItem />
        <ItemList items={this.props.items} />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items : state.itemList, // makes it this.props.items
    categories : state.categoryList,
    conditions : state.conditionList,
    statuses : state.statusList,
    users : state.userList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      dispatch(loadItems());
    },
    loadCategories: () => {
      dispatch(loadCategories());
    },
    loadConditions: () => {
      dispatch(loadConditions());
    },
    loadStatuses: () => {
      dispatch(loadStatuses());
    },
    loadUsers: () => {
      dispatch(loadUsers());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
