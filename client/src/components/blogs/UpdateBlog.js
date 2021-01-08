import React, {useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchBlog, updateBlog, updateBlogForm} from "../../redux/BlogRedux/blog.actions";
import {BLOG_FEATURE_KEY} from "../../redux/BlogRedux/blog.reducer";

let UpdateBlog = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    // Selected Blog ID
    let [blogId , setBlogId] = useState(useParams().id);

    // get selected Blog from REDUX Store
    let selectedBlogInfo = useSelector((state) => {
        return state[BLOG_FEATURE_KEY];
    });

      // dispatch action to fetch all blogs from server
    useEffect(() => {
        dispatch(fetchBlog(blogId));
    }, [blogId]);

    // change Blog Input(edit Blog Data)
    let changeInput = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        dispatch(updateBlogForm(key , value));
    };

    // change Image (Convert to base64 Format)
    let changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if(reader.result){
                let key = 'image';
                let value = reader.result;
                dispatch(updateBlogForm(key , value));
            }
            else {
                alert('Error Occurred');
            }
        });
    };

    // submit Blog
    let submitBlog = (event) => {
        event.preventDefault();
        dispatch(updateBlog(blogId, selectedBlogInfo.selectedBlog , history));
    };

    return(
        <React.Fragment>
        <section className="update-page">
            <div className="container">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h2 text-white">Update Blog</p> 
                    </div>
                </div>
                <div className="row animated flipInY delay-1s">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Update Blog</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitBlog}>
                                    <div className="form-group">
                                        <input
                                            name="name"
                                            value={selectedBlogInfo.selectedBlog.name}
                                            onChange={changeInput}
                                            type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-file">
                                            <input
                                                onChange={changeImage}
                                                type="file" className="custom-file-input" id="customFile"/>
                                            <label className="custom-file-label" htmlFor="customFile">Product
                                                Image</label>
                                            {
                                                selectedBlogInfo.selectedBlog.image &&
                                                <img src={selectedBlogInfo.selectedBlog.image} alt=""
                                                     width="20" height="20"/>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            name="heading"
                                            value={selectedBlogInfo.selectedBlog.heading}
                                            onChange={changeInput}
                                            type="string" className="form-control" placeholder="Heading.."/>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="info"
                                            value={selectedBlogInfo.selectedBlog.info}
                                            onChange={changeInput}
                                            type="string" className="form-control" rows="3" placeholder="Information.."/>
                                    </div>
                                    <div className="form-group">
                                           <input
                                               name="infoURL"
                                               value={selectedBlogInfo.selectedBlog.infoURL}
                                               onChange={changeInput}
                                               className="form-control"  placeholder="Info URL"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-secondary btn-sm"
                                               value="Update Blog"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom : '50px'}}/>
        </section>
        </React.Fragment>
    )
};
export default UpdateBlog;
