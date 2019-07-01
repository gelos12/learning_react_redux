export default (state = {title: '제목없음'}, action) => {
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}