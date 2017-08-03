import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'



export var AddComment = React.createClass({
    addSomeNewShit(e){
      var {isNested, nestedId} = this.props;
      var parentId = this.props.parentId;
      var user = this.props.replyTo ? ('@' + this.props.replyTo) : '';
      var text = this.refs.comment.value ? `${user} ${this.refs.comment.value}` : '';


      if(text) {
        this.props.dispatch(actions.addComment(text, parentId, isNested, nestedId));
        this.refs.comment.value = '';
      } else {
        this.refs.comment.focus();
      }
      e.preventDefault();
    },
    render(){
        return (
          <form  onSubmit={this.addSomeNewShit} action="" method="post">
            <div className="comment-entry">
              <div className="comment-entry-header">
                <img alt="MyNick" src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
                  className="avatar-image size32"/> MyNick
              </div>
              <div className="form-group">
                <textarea ref='comment' className="form-control" name="text" placeholder="Put your shit here..."></textarea>
              </div>
              <div className="comment-entry-footer">
                <button type="submit" className="btn btn-default btn-sm btn-block">Submit</button>
              </div>
            </div>
          </form>
        )
    }
});

export default Redux.connect()(AddComment);
