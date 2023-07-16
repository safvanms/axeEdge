import React from 'react'
import './uiSec.css'
import IMG1 from '../../assets/webDesign2.jpg'

export default function UiSec() {
  return (
    <div id="uiSec">
      <div className="uiSec">
        <content className="uiClass__content">
          <h1>web <span>Design</span></h1>
          <h2>
            Web design plays a crucial role in creating an engaging and
            user-friendly website. It encompasses various aspects, including
            visual aesthetics, user experience, and functionality
          </h2>
        </content>

        <div>
          <div className="ui__left__sec">
            <div className="web__design__contents web1"> Visual Appeal </div>
            <div className="web__design__contents web2">
              Consistent Branding
            </div>
            <div className="web__design__contents web3">
              User-Friendly Navigation
            </div>
            <div className="web__design__contents web4">Responsive Design</div>
            <div className="web__design__contents web5">
              Whitespace and Layout
            </div>
            <div className="web__design__contents web6">Page Load Speed</div>
            <div className="web__design__contents web7">
              Call-to-Action (CTA) Buttons
            </div>
            <div className="web__design__contents web8">Accessibility</div>
            <div className="web__design__contents web9">
              Cross-Browser Compatibility
            </div>
          </div>

          <div className="ui__right__sec">
            <div className="ui__box box1"></div>
            <div className="ui__box box2"></div>
            <div className="ui__box box3"></div>
            <div className="ui__box box4"></div>
            <div className="ui__box box5"></div>
            <div className="ui__box box6"></div>
            <div className="ui__box box7"></div>
            <div className="ui__box box8"></div>
            <div className="ui__box box9"></div>
          </div>
        </div>
      </div>

      <div className="web__sec__2">
        <h2>How we do your favour ?!</h2>
        <div className="web__sec__2__content">
          <img src={IMG1} alt="" />
          <div className="web__sec__2__right">
            <h2>Custom Web Design :</h2>
            <p>
              Emphasize your ability to create unique and custom-designed
              websites tailored to the specific needs and goals of your clients.
              Highlight your expertise in creating visually appealing and
              user-friendly interfaces that align with their brand identity.
            </p>
            <h2>Responsive and Mobile-Friendly Design :</h2>
            <p>
              Highlight your expertise in developing websites that are fully
              responsive and optimized for seamless viewing across various
              devices, including desktops, laptops, tablets, and smartphones.
              Showcase your commitment to providing an excellent user experience
              across different screen sizes.
            </p>
            <h2>User Experience (UX) Design :</h2>
            <p>
              Showcase your focus on user-centered design principles and your
              ability to create intuitive and engaging user experiences.
              Emphasize your expertise in designing intuitive navigation, clear
              calls-to-action, and content organization that maximizes usability
              and encourages conversions.
            </p>
            <h2>Search Engine Optimization (SEO) : </h2>
            <p>
              {' '}
              Demonstrate your understanding of the importance of SEO in web
              design. Showcase your knowledge and skills in implementing SEO
              best practices, such as optimizing website structure, meta tags,
              and content to improve search engine visibility. Highlight your
              ability to create SEO-friendly websites that have a solid
              foundation for search engine rankings.
            </p>
            <h2>Content Management Systems (CMS) :</h2>
            <p>
              Showcase your proficiency in working with popular CMS platforms
              like WordPress, Drupal, or Joomla. Highlight your ability to
              develop websites using these platforms, allowing clients to easily
              manage and update their website content without technical
              expertise.
            </p>
            <h2>E-commerce Solutions : </h2>
            <p>
              Highlight your expertise in developing e-commerce websites that
              drive online sales. Showcase your ability to integrate secure
              payment gateways, manage product catalogs, and provide seamless
              shopping experiences for customers.
            </p>
            <h2>Website Maintenance and Support :</h2>
            <p>
              Offer ongoing maintenance and support services to ensure that
              clients' websites are up-to-date, secure, and perform optimally.
              Highlight your commitment to providing timely updates, security
              patches, and technical support to address any issues that may
              arise.
            </p>
            <h2>Strong Portfolio and Testimonials :</h2>
            <p>
              Showcase a diverse portfolio of successful web design projects to
              demonstrate your expertise and track record. Include client
              testimonials and case studies to provide social proof of your
              capabilities and client satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
