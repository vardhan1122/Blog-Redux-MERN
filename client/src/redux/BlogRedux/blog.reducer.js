import {
    CREATE_BLOG_FAILURE,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS, DELETE_BLOG_FAILURE, DELETE_BLOG_REQUEST, DELETE_BLOG_SUCCESS,
    FETCH_ALL_BLOGS_FAILURE,
    FETCH_ALL_BLOGS_REQUEST,
    FETCH_ALL_BLOGS_SUCCESS,
    FETCH_BLOG_FAILURE,
    FETCH_BLOG_REQUEST,
    FETCH_BLOG_SUCCESS, UPDATE_BLOG_FAILURE,
    UPDATE_BLOG_FORM,
    UPDATE_BLOG_REQUEST, UPDATE_BLOG_SUCCESS
} from "./blog.actionTypes";

export const BLOG_FEATURE_KEY =  'blogRedux';

let initialState = {
    loading : false,
    blogs : [],
    selectedBlog : {},
    errorMessage : ''
};

let blogReducer = (state = initialState , action) => {
    let { type , payload} = action;
    switch(type) {
        // REQUEST BLOG
        case FETCH_ALL_BLOGS_REQUEST:
        case CREATE_BLOG_REQUEST:
        case FETCH_BLOG_REQUEST :
        case UPDATE_BLOG_REQUEST:
        case DELETE_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ALL_BLOGS_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: payload
            };

        // CREATE A BLOG
        case  CREATE_BLOG_SUCCESS :
            return  {
                ...state,
                loading: false
            };

        // FETCH A SINGLE BLOG
        case FETCH_BLOG_SUCCESS :
            return  {
                ...state,
                loading: false,
                selectedBlog: payload
            };

        // UPDATE A BLOG FORM
        case UPDATE_BLOG_FORM:
            return  {
                ...state,
                loading: false,
                selectedBlog : {
                    ...state.selectedBlog,
                    [payload.key] : payload.value
                }
            };
        // UPDATE BLOG
        case UPDATE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false
            };
        // DELETE BLOG
        case DELETE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false
            };

        // FAILURE BLOG
        case FETCH_ALL_BLOGS_FAILURE:
            case CREATE_BLOG_FAILURE:
            case FETCH_BLOG_FAILURE:
            case UPDATE_BLOG_FAILURE:
            case DELETE_BLOG_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };

        default : return state;
    }
};
export {blogReducer};
