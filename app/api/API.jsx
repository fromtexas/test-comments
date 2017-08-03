export var filteredComments = (comments, filterVal) => {
  var commentsArr = comments;

  if (filterVal === 'Best') {
    commentsArr.sort((a, b) => {
      if (a.raiting > b.raiting) {
        return -1;
      } else if (a.raiting < b.raiting) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    commentsArr.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else if (a.createdAt < b.createdAt) {
        return -1;
      } else {
        return 0;
      }
    });
  }



  return commentsArr;

};
