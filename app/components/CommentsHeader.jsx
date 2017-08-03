import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

export var CommentsHeader = React.createClass({
  change(e){
      this.props.dispatch(actions.change(e.target.innerHTML))
  },
  render(){
    var count = () => {

      var mainArr = this.props.comments;
      var summ = mainArr.length;
      mainArr.forEach(function(item) {
        summ = summ + item.nested.length;
      });
      return summ;
      };
    return (
      <div className="comments-header">
        <div className="pull-right filters">
          <a onClick={this.change} className="text-muted">Best</a> |
          <a onClick={this.change} className="active">Newest</a> |
          <a className="text-muted">Oldest</a>
        </div>
        <b>{count()} Comments</b>
      </div>
    )
  }
});

export default Redux.connect((state) => {
  return {
    comments: state.comments
  }
})(CommentsHeader);
