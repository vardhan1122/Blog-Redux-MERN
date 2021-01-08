import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {createBlog} from "../../redux/BlogRedux/blog.actions";

let CreateBlog = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let [blog , setBlog] = useState({
        name : '',
        image : '',
        heading : '',
        info : '',
        infoURL : ''
    });

 // change Blog Input(edit Blog Data)
    let changeInput = (event) => {
        setBlog({
            ...blog,
            [event.target.name] : event.target.value
        });
    };

      // change Image (Convert to base64 Format)
    let changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if(reader.result){
                setBlog({
                    ...blog,
                    image : reader.result
                });
            }
            else {
                alert('Error Occurred');
            }
        });
    };

    // submit Blog
    let submitBlog = (event) => {
        event.preventDefault();
        dispatch(createBlog(blog , history));
    };

    return(
        <React.Fragment>
        <section className="create-page">
            <div className="container">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h2 text-black">Create Blog</p>
                    </div>
                </div>
                <div className="row animated flipInY delay-1s">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <p className="h4">Create Blog</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitBlog}>
                                    <div className="form-group">
                                        <input required
                                               name="name"
                                               value={blog.name}
                                               onChange={changeInput}
                                               type="text" className="form-control"
                                               placeholder="Blog Name"/>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-file">
                                            <input required
                                                   onChange={changeImage}
                                                   type="file" className="custom-file-input"
                                                   id="customFile"/>
                                            <label className="custom-file-label" htmlFor="customFile">Blog
                                                Image</label>
                                            {
                                                blog.image &&
                                                <img src={blog.image} alt="" width="20"
                                                     height="20"/>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input required
                                               name="heading"
                                               value={blog.heading}
                                               onChange={changeInput}
                                               type="string" className="form-control" placeholder="Heading.."/>
                                    </div>
                                    <div className="form-group">
                                        <textarea required
                                               name="info"
                                               value={blog.info}
                                               onChange={changeInput}
                                               type="string" className="form-control" rows="3"
                                               placeholder="Information.."/>
                                    </div>
                                    <div className="form-group">
                                            <input required
                                                      name="infoURL"
                                                      value={blog.infoURL}
                                                      onChange={changeInput}
                                                      className="form-control"  placeholder="Info URL"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-dark btn-sm"
                                               value="Create Blog"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginBottom : '100px'}}/>
        </section>
        </React.Fragment>
    )
};
export default CreateBlog;
