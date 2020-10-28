import React from 'react'
import './Contact.css'
import imgcontact from './imgcontact.jpg'


export default function Contact() {
    return (
        <div>
        <section id="contact" className="section contact text-list">
        <div className="container" >
            <div className="row">
                <div className="text-center">
                    <img alt="" className="img-contact" src={imgcontact} />
                </div>
                <div className="col-sm-3">
                        <div className="adress" >
                            <p> <strong>Our Address: <br/></strong> <br/>SignToSeminarThe <br/> Green Street
                                Building 444, Road 456   <br/> <strong>Phone:</strong>  +33 588 44 22
                                <br/><strong>Email:</strong>  support@sts.com</p>
                        </div>
                </div>
                <div className="col-sm-9">
                    <div className="row" >
                        <div className="col-sm-6 form-group">
                            <input type="text" className="form-control" id="contact-name" name="name"
                                placeholder="Your Name ..." /* onkeyup='validateName()' */ />
                            <span className='error-message' id='name-error'></span>
                        </div>
                        <div className="col-sm-6">
                            <input type="email" className="form-control mail" id="contact-email" name="email"
                                placeholder="Your Email" /* onkeyup='validateEmail()' */ />
                            <span className='error-message' id='email-error'></span>
                        </div>

                    </div>
                    <textarea className="form-control" rows="6" id='contact-message' name='message'
                        placeholder="How Can We Help? We will get in touch with you shortly."
                        /* onkeyup='validateMessage()' */></textarea>
                    <span className='error-message' id='message-error'></span>
                   
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <button type="button"/*  onClick='return validateForm()' */ className="btn btn-primary btn-lg btn-indigo">Send</button>
                            <span className='error-message' id='submit-error'></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}
