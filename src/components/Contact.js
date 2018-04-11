import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="field half first">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" />
                    </div>
                    <div className="field half">
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" id="company" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
           
                        <a href="#">sales@stabondco.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>

                        <span><strong>Toll Free</strong> +1 (800) STABOND <br />
                        <strong>Office</strong> +1 (310) 380-6168 <br />
                        <strong>Fax</strong> +1 (310) 329-2729</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                   
                        <span>Stabond Corporation<br />
                        1722 West 139th Street<br />
                        Gardena, CA 90249<br />
                        United States of America</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
