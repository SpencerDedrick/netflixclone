import React, { Component } from 'react'
import Sidebar from "react-sidebar"

import './list.css'

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: true
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
  
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
  
    render() {
      return (
        <Sidebar
        className="list"
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ 
            sidebar: { 
            background: "black" }, 
            content: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            transition: "left .3s ease-out, right .3s ease-out"
          },
          overlay: {
            zIndex: 5,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
            visibility: "hidden",
            transition: "opacity .3s ease-out, visibility .3s ease-out",
            backgroundColor: "rgba(0,0,0,.3)"
          },
          dragHandle: {
            zIndex: 1,
            position: "fixed",
            top: 0,
            bottom: 0
          } }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </Sidebar>
      );
    }
  }
  
  export default List;