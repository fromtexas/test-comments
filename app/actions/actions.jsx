

export var addComment = (text, parentId, isNested, nestedId) => {
  return {
    type: 'ADD_COMMENT',
    text,
    parentId,
    isNested,
    nestedId
  };
};

export var change = (filterVal) => {
  return {
    type: 'CHANGE',
    filterVal
  };
};

export var upvote = (parentId, id) => {
  return {
    type: 'UPVOTE',
    id,
    parentId
  };
};

export var downvote = (parentId, id) => {
  return {
    type: 'DOWNVOTE',
    id,
    parentId
  };
};
