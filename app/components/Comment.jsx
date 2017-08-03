import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'
import moment from 'moment'
import AddComment from 'AddComment'


import NestedComments from 'NestedComments'


export var Comment = React.createClass({
    getInitialState () {
      return {
        reply:false
      }
    },
    upvote() {
      this.props.dispatch(actions.upvote(this.props.parentId, this.props.id));
    },
    downvote() {
      this.props.dispatch(actions.downvote(this.props.parentId, this.props.id));
    },
    toggleReply(e){
      var reply = this.state.reply;
      e.target.style.marginBottom = reply ? '0px' : '10px';
      this.setState({
        reply: !reply
      })
    },
    render() {
      var switchText = this.state.reply ? 'hide' : 'reply';
      var {text, id, createdAt, raiting, user, nested, parentId, isNested} = this.props;
      var dateUnix = moment.unix(createdAt);
      var log = moment(dateUnix).toArray();
      var date = ' ' + (moment(log).fromNow());
      var wrapClass = nested.length ? 'comment-wrapper comment-wrapper-has-reply' : 'new-class';
      var avatar = parentId ? 'http://i.playground.ru/i/00/00/00/00/user/default/icon.20x20.png' : 'http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png'
      var renderNested = () => {
        if(nested.length){
          return <NestedComments filterVal='' nested={nested}/>
        }
      };
      var renderForm = () => {
        if(this.state.reply) {
          return   <AddComment nestedId={parentId} isNested={isNested} replyTo={user} parentId={id}/>
        }
      };
        return (
          <div className={wrapClass}>
            <div className="comment-item">
              <div className="comment-header">
                <span className="comment-author">
                  <a href="#">
                    <img alt={user}
                         src={avatar}
                         className="avatar-image size32"/> {user}
                  </a>
                </span>
                <time className="comment-timestamp">{date}</time>
              </div>
              <div  className="comment-body">
                {text}
              </div>
              <div className="comment-actions">
                <div className="comment-voting">
                  <button onClick={this.upvote} className="up"></button>
                  <div className="score">{raiting}</div>
                  <button onClick={this.downvote} className="down"></button>
                </div>
                <button onClick={this.toggleReply} className="btn btn-xs btn-reply">{switchText}</button>
              </div>
              {renderForm()}
              {renderNested()}
            </div>
          </div>
        )
    }
});

export default Redux.connect()(Comment);
