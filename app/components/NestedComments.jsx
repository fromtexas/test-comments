import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'
import Comment from 'Comment'
import * as API from 'API'

export var NestedComments = React.createClass({
  render(){
    var {nested, filterVal } = this.props;
    
    var renderComments = () => {
        var filteredComments = API.filteredComments(nested, filterVal);
          return filteredComments.map((comment) => {
              return (
              <Comment key={comment.id} {...comment}/>
              )
          })
      };
    return (
      <div className="comment-reply">
        {renderComments()}
      </div>

    )
  }
});

export default Redux.connect()(NestedComments);
