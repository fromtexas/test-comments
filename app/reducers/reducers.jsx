import moment from 'moment'
import uuid from 'node-uuid'

export var commentsReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
    console.log(action);
    var parentId = action.parentId ? action.parentId : undefined;
      if (!parentId) {
        return [...state, {
          user: 'User1',
          id: uuid(),
          text: action.text,
          createdAt: moment().unix(),
          parentId: parentId,
          raiting: 0,
          nested: [],
          isNested: false
         }];
      }else if (action.isNested) {
      console.log('sss');
        var newArrNest = state.map((item) => {
          if (item.id !== action.nestedId){
            return item;
          } else {
            return {
              ...item,
              nested: [...item.nested,
                {
                  user: 'User1',
                  id: uuid(),
                  text: action.text,
                  createdAt: moment().unix(),
                  parentId: action.nestedId,
                  raiting: 0,
                  nested: [],
                  isNested: true
                }
              ]
            };
          }
        });
        return newArrNest;
      } else {
        var newArr = state.map((item) => {
          if(item.id !== parentId){
            return item;
          }else{
            return {
              ...item,
              nested: [...item.nested,
                {
                  user: 'User1',
                  id: uuid(),
                  text: action.text,
                  createdAt: moment().unix(),
                  parentId: parentId,
                  raiting: 0,
                  nested: [],
                  isNested: true
                }
              ]
            };
          }
        });
        return newArr;
      };
    case 'UPVOTE':
    var parentId = action.parentId ? action.parentId : undefined;

    var newArrUp ;
      if (!parentId) {
        newArrUp = state.map((item) => {
         if(item.id !== action.id){
           return item;
         }else{
           return {
               ...item,
               raiting: item.raiting + 1
             }
         }
       });
        return newArrUp;
      } else {

         newArrUp = state.map((item) => {
          if (parentId !== item.id) {
            return  item;
          } else {

            var newSubArr = item.nested.map((nestedItem) => {

              if (nestedItem.id !== action.id) {

                return nestedItem;
              } else {
                return {
                  ...nestedItem,
                  raiting: nestedItem.raiting + 1
                }
              }
            });

            return {
              ...item,
              nested: newSubArr
            }
          }
        });
        return newArrUp;
      };
      case 'DOWNVOTE':
      var parentId = action.parentId ? action.parentId : undefined;

      var newArrUp ;
        if (!parentId) {
          newArrUp = state.map((item) => {
           if(item.id !== action.id){
             return item;
           }else{
             return {
                 ...item,
                 raiting: item.raiting - 1
               }
           }
         });
          return newArrUp;
        } else {

           newArrUp = state.map((item) => {
            if (parentId !== item.id) {
              return  item;
            } else {

              var newSubArr = item.nested.map((nestedItem) => {

                if (nestedItem.id !== action.id) {

                  return nestedItem;
                } else {
                  return {
                    ...nestedItem,
                    raiting: nestedItem.raiting - 1
                  }
                }
              });

              return {
                ...item,
                nested: newSubArr
              }
            }
          });
          return newArrUp;
        };
    default:
      return state;
  }
};

export var filterReducer = (state='', action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.filterVal;
    default:
      return state;
  }
};
