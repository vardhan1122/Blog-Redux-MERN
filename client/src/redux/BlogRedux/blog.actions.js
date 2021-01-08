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

import Axios from "axios";

// FETCH ALL BLOGS
let fetchAllBlogs = () => {
    return (dispatch) => {
        dispatch({ type : FETCH_ALL_BLOGS_REQUEST});
        let dataURL = `https://blog-portal-mern-backend.herokuapp.com/api/blogs`;
        Axios.get(dataURL).then((response) => {
            dispatch({ type: FETCH_ALL_BLOGS_SUCCESS , payload : response.data });
        }).catch((error) => {
            dispatch({ type: FETCH_ALL_BLOGS_FAILURE , payload : error });
        });
    };
};

// CREATE A BLOG
let createBlog = (blog,history) => {
    return (dispatch) => {
        dispatch({ type : CREATE_BLOG_REQUEST });
        let dataURL = `https://blog-portal-mern-backend.herokuapp.com/api/blogs/`;
        Axios.post(dataURL, blog).then((response) => {
            dispatch({ type : CREATE_BLOG_SUCCESS , payload : response.data });
            // Redirecting Page
            history.push('/admin');
        }).catch((error) => {
            dispatch({ type : CREATE_BLOG_FAILURE , payload : error });
        });
    };
};

// FETCH A SINGLE BLOG
let fetchBlog = (blogId) => {
    return (dispatch) => {
        dispatch({ type : FETCH_BLOG_REQUEST });
        let dataURL = `https://blog-portal-mern-backend.herokuapp.com/api/blogs/${blogId}`;
        Axios.get(dataURL).then((response) => {
            dispatch({ type : FETCH_BLOG_SUCCESS , payload : response.data});
        }).catch((error) => {
            dispatch({ type : FETCH_BLOG_FAILURE , payload : error});
        });
    };
};

// UPDATE A BLOG FORM
let updateBlogForm = (key , value) => {
    return (dispatch) => {
        dispatch({type : UPDATE_BLOG_FORM , payload : { key , value} });
    };
};

// UPDATE BLOG
let updateBlog = (blogId, selectedBlog, history) => {
    return (dispatch) => {
        dispatch({ type : UPDATE_BLOG_REQUEST });
        let dataURL = `https://blog-portal-mern-backend.herokuapp.com/api/blogs/${blogId}`;
        Axios.put(dataURL, selectedBlog).then((response) => {
            dispatch({ type : UPDATE_BLOG_SUCCESS , payload : response.data});
            history.push('/admin');
        }).catch((error) => {
            dispatch({ type : UPDATE_BLOG_FAILURE , payload : error});
        });
    };
};

// DELETE BLOG
let deleteBlog = (blogId) => {
    return (dispatch) => {
        dispatch({type : DELETE_BLOG_REQUEST});
        let dataURL = `https://blog-portal-mern-backend.herokuapp.com/api/blogs/${blogId}`;
        Axios.delete(dataURL).then((response) => {
            dispatch({ type : DELETE_BLOG_SUCCESS , payload : response.data});
            dispatch(fetchAllBlogs()); // fetch all Blogs once delete is done
        }).catch((error) => {
            dispatch({ type : DELETE_BLOG_FAILURE , payload : error});
        });
    };
};

export {    fetchAllBlogs,
            createBlog,
            fetchBlog,
            updateBlogForm,
            updateBlog,
            deleteBlog  };
