import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deleteBlog, fetchAllBlogs} from "../../redux/BlogRedux/blog.actions";
import {BLOG_FEATURE_KEY} from "../../redux/BlogRedux/blog.reducer";
import Spinner from "../spinner/Spinner";

let BlogAdmin = () => {
    let dispatch = useDispatch();

    // fetch blog info from the REDUX Store
    let blogInfo = useSelector((state) => {
        return state[BLOG_FEATURE_KEY];
    });

    // dispatch action to fetch all blogs from server
    useEffect(() => {
        dispatch(fetchAllBlogs());
    }, []);



    // delete Blog
    let clickDeleteBlog = (blogId) => {
       dispatch(deleteBlog(blogId));
    };

    return(
        <React.Fragment>
        <section className="admin-page-full">
        <section className="admin-page">
            <div className="container">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h2 text-white">Admin Blog's</p>
                        <Link to="/create-blog" className="btn btn-success btn-sm">Create Blog</Link>
                    </div>
                </div>
                {
                    blogInfo.loading ? <Spinner/> :
                        <React.Fragment>
                            <div className="row mt-3 animated zoomIn">
                                <div className="col">
                                    <div id="table-wrapper">
                                    <div id="table-scroll">
                                        <table className="table table-hover text-center table-striped table-success">
                                            <thead className="bg-dark text-white">
                                            <tr>
                                                <th>SNO</th>
                                                <th>Blog Image</th>
                                                <th>Title</th>
                                                <th>Heading</th>
                                                <th>Info</th>
                                                <th>Info URL</th>
                                                <th>Created</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                blogInfo.blogs.length > 0 ?
                                                    <React.Fragment>
                                                        {
                                                            blogInfo.blogs.map((blog) => {
                                                                return (
                                                                    <tr key={blog._id}>
                                                                        <td>{blog._id.substr(blog._id.length - 4)}</td>
                                                                        <td>
                                                                            <img src={blog.image} alt="" width="70" height="70"/>
                                                                        </td>
                                                                        <td>{blog.name}</td>
                                                                        <td>{blog.heading}</td>
                                                                        <td>{blog.info.slice(0,9)}...</td>
                                                                        <td><a href={blog.infoURL} alt="" target="_blank">Info-URL</a></td>
                                                                        <td>{blog.created}</td>
                                                                        <td>
                                                                            <Link to={`/update-blog/${blog._id}`} className="btn btn-secondary btn-sm text-white">Update</Link>
                                                                            <button onClick={clickDeleteBlog.bind(this, blog._id)} className="btn btn-danger btn-sm text-white">Delete</button>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </React.Fragment> : <React.Fragment>
                                                        <tr>
                                                            <td colSpan="6" className="text-danger font-weight-bold">------------- No BLOGS are Available ------------ </td>
                                                        </tr>
                                                    </React.Fragment>
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                }
            </div>
        </section>
        </section>
        </React.Fragment>
    )
};
export default BlogAdmin;
