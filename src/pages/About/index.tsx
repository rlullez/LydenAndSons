import styles from './About.module.css'
import avatar from './images/avatar.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
             
             <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>About Us</h2>

                    <p>We are <span>Lyden &amp; Sons</span> <br />
                    <strong>Fit-Out and Maintenance</strong> </p>

                    <p>
                        Lyden &amp; Sons is an Irish owned family business established in 2010. Since then,
                        Lyden &amp; Sons has become one of the most reliable and leading contractors in
                        Commercial Office Fit-Out and Maintenance in Dublin and Ireland.
                    </p>

                    <p>
                        Specialise in creating, designing, building Offices Fit-Out, Refurbishment and
                        maintaining commercial and private property, Lyden &amp; Sons has an excellent
                        reputation among its stakeholders.
                    </p>

                    <p>
                        At Lyden &amp; Sons we listen carefully to our clients to create the most innovative
                        spaces and to deliver the best quality service to attend to their unique and specific
                        needs.
                    </p>
                    
                    <p>
                        We provide a range of services from the creation and design of the plan, execution,
                        decoration, fittings to certification.
                    </p>
                    
                    <p>
                        We are highly qualified professionals, with over 30 years of experience in our field,
                        and attend to every aspect of the Fit-Out Project, from shell &amp; core to completion.
                    </p>
                    
                    <p>
                        We pride ourselves in having a great and growing relationship with our clients.
                        It is part of our job to be always on call to help and assist our customers in any matter.
                        Which creates a long-term relationship, numerals referrals and lots of repeat
                        business.
                        Since our establishment, we have had the honour in providing Commercial Office Fit-
                        Out and Maintenance to some of the Irish and International leading companies.
                        Our core values are
                        Create value to your businnes delivering modern and innovative workspace
                        Design an integrated workplace where people and business flourish and thrive
                        Build and maintain solid relationships
                        Protect the environment using the latest technology
                    </p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>
   
        </section>
    )
}

export default Sobre
