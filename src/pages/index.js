import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../assets/images/track.jpg'
import pic02 from '../assets/images/autoclave.jpg'
import pic03 from '../assets/images/honeycomb.jpg'
import pic04 from '../assets/images/silicone.jpg'
import pic05 from '../assets/images/Picture6.jpg'
import pic06 from '../assets/images/Picture17.jpg'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Liquid Adhesives</h3>
                                <p>Full composite panel lamination</p>
                                <p>Customized open/cure rates</p>
                                <p>Customized viscosity for optimal deposition</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Contact Adhesives </h3>
                                <p>SCAQMD compliant formulations available</p>
                                <p>Low VOC formulations</p>
                                <p>High temperature resistance</p>

                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Custom Compounds</h3>
                                <p>In-house milling and calendaring</p>
                                <p>Durometer (A) to Specification</p>
                                <p>Available cured or uncured</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                
                                <h3>Silicone Products</h3>
                                <p>Industrial-Grade Reusable Vaccum Bags</p>
                                <p>Vaccum Tubes & Bladders</p>
                                <p>Extrusions, Gaskets & Pressure Intensifiers</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Sealants</h3>
                                <p>Multi substrate adhesion</p>
                                <p>Excellent anti-sag properties</p>
                                <p>High tensile strength</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Coatings & Bonds</h3>
                                <p>Maximum Substrate Adhesion</p>
                                <p>Reduce potential void or delaminations</p>
                                <p>High temperature resistance</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Specialty Formation</h2>
                            </header>
                            <p>High volume manufacturers depend on Stabond to deliver custom formulated industrial grade adhesive systems that enable increased production with time proven performance and competitive pricing. Our team of adhesive engineers can help you cut costs, increase efficiency, enhance competitiveness, and improve overall customer satisfaction.</p>
                            <p>Using our advanced facilities, our highly skilled team can custom-formulate adhesives that meet your application requirements. From Aerospace to Sporting Goods, we deliver increased production, reliability, dedicated service, and overall cost savings.</p>
                            
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get a Quote</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`