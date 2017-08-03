import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

import Comment from 'Comment'
import CommentsHeader from 'CommentsHeader'
import * as API from 'API'

export var CommentsList = React.createClass({
    getInitialState () {
      return {
        isLoading: false
      }
    },
    loadMore(){
      this.setState({
        isLoading: true
      })
    },
    render(){
      var {comments, filterVal } = this.props;
      var renderComments = () => {
          var filteredComments = API.filteredComments(comments, filterVal);
          if(filteredComments.length === 0){
            return (<p className='message text-center'>There are no comments...</p>)
          }
            return filteredComments.map((comment) => {
                return (
                <Comment key={comment.id} {...comment}/>
                )
            })
        };
        var renderMore = () => {
          if(this.state.isLoading){
           return  <p className='text-center'>Loading...</p>
          }
        };

        return (
          <div className="comments-flow">
            <CommentsHeader/>
            {renderComments()}
            {renderMore()}
            <button onClick={this.loadMore} className="btn btn-block">More...</button>
          </div>

        )
    }
});

export default Redux.connect((state) => {
  return {
    comments: state.comments,
    filterVal: state.filterVal
  }
})(CommentsList);
