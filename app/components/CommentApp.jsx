import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

import AddComment from 'AddComment'
import CommentsList from 'CommentsList'



export var CommentApp = React.createClass({

    render(){
        return (
        <div className="comments-container">
          <div id="comments">
            <AddComment/>
            <CommentsList/>
          </div>
        </div>
        )
    }
});

export default Redux.connect()(CommentApp);
