import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllBlogs} from "../../redux/BlogRedux/blog.actions";
import {BLOG_FEATURE_KEY} from "../../redux/BlogRedux/blog.reducer";
import Spinner from "../spinner/Spinner";

import dateFormat from 'dateformat';

let BlogList = () => {
    let dispatch = useDispatch();

    // fetch Blog info from the REDUX Store
    let blogInfo = useSelector((state) => {
        return state[BLOG_FEATURE_KEY];
    });

    // dispatch an action to fetch all Blogs from server
    useEffect(() => {
        dispatch(fetchAllBlogs());
    }, []);

    return(
        <React.Fragment>
        <section className="blog-page-full">
        <section className="blog-page">
            <div className="container">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h2 text-black">Blog's Details</p>
    
                    </div>
                </div>
                {/* Checking Data is fetching / Not */}
            {/* <pre>{JSON.stringify(blogInfo.blogs)}</pre> */}
                {
                    // Spinner is running when Loading the data
                    blogInfo.loading ? <Spinner/> :
                        <React.Fragment>
                            <div className="row animated zoomIn">
                                {
                                    blogInfo.blogs.length > 0 ?
                                        <React.Fragment>
                                            {
                                                blogInfo.blogs.map((blog) => {
                                                    return (

                                                        <div className="col-md-12" key={blog._id}>

                                                    <div className="card mt-3">
                                                        
                                                        <div className="card-header text-center bg-warning text-white">
                                                            <div> <span className="topic">Topic</span> : <span className="topic-text">{blog.name}</span></div>
                                                        </div>

                                                        <div className="card-body bg-info text-white">
                                                            {/* <div className="container-fluid"> */}
                                                                <div className="row flex-column-reverse flex-md-row">
                                                                    <div className="col-md-7">
                                                                    <span><span className="heading">Heading</span> : <span className="heading-text">{blog.heading}</span></span><br/>
                                                                    <span className="info">Info</span> : <span className="info-text">{blog.info}</span>
                                                                    </div>

                                                                    <div className="col-md-5">
                                                                    <img className="img-fluid blog-image" src={blog.image} alt="" width="400" height="250"/>
                                                                    </div>
                                                                </div>
                                                            {/* </div> */}
                                                        </div>

                                                        <div className="card-footer bg-success text-white">
                                                           <a className="infoURL" href = {blog.infoURL} alt="" target="_blank">continue reading..</a>
                                                             <span className="float-right"><span className="created">Created at</span> : <span className="created-text"> {dateFormat(blog.created,"mmm dS, yyyy, hh:mm:ss TT")}</span></span>
                                                        </div>

                                                    </div>
                                                </div>
                          
                                                )
                                            })
                                        }
                                        </React.Fragment> : <React.Fragment>
                                            <div>
                                                <p className="h5 text-danger">---------------- No BLOG'S are Available --------------</p>
                                            </div>
                                        </React.Fragment>
                                }
                            </div>
                        </React.Fragment>
                }
            </div>
            <div style={{paddingBottom : '50px'}}/>
        </section>
        </section>
        
        </React.Fragment>
    )
};
export default BlogList;
