import {combineReducers} from "redux";
import {BLOG_FEATURE_KEY, blogReducer} from "./BlogRedux/blog.reducer";

let rootReducer = combineReducers({
    [BLOG_FEATURE_KEY] : blogReducer
});

export {rootReducer};
