/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
//import NotionLogo from "../images/notion_logo.png";

const styledMain = css`
  padding: 0 200px;
  margin-top: 80px;
`;

const footerStyled = css`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 20px;

  span {
    font-weight: 700;
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    color: #808080;
  }

  li {
    margin: 8px 0px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Footer = () => (
  <footer css={styledMain}>
    <hr />
    <div>
      <nav css={footerStyled}>
        <div>
          <div>
          
            <img
                alt="Notion app logo"
                src="https://www.notion.so/cdn-cgi/image/w=640,q=100/front-static/shared/icons/notion-app-icon-3d.png"
                width="80px"
              />
            
          </div>
        </div>
        <div>
          <span>Product</span>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Customer stories</li>
            <li>Desktop apps</li>
            <li>Mobile apps</li>
            <li>Web Clipper</li>
          </ul>
        </div>
        <div>
          <span>Notion for</span>
          <ul>
            <li>Enterprise</li>
            <li>Small businesses</li>
            <li>Personal use</li>
            <li>Remote work</li>
            <li>Startups</li>
            <li>Education</li>
            <li>Engineering</li>
            <li>Product</li>
            <li>Design</li>
          </ul>
        </div>
        <div>
          <span>Resources</span>
          <ul>
            <li>Blog</li>
            <li>Guides & tutorials</li>
            <li>Help center</li>
            <li>Webinars</li>
            <li>Template gallery</li>
            <li>Community</li>
            <li>What's new</li>
            <li>Find a consultant</li>
            <li>API docs</li>
            <li>Switch from Evernote</li>
            <li>Switch from Confluence</li>
          </ul>
        </div>
        <div>
          <span>Templates</span>
          <ul>
            <li>Company home</li>
            <li>Meeting notes</li>
            <li>To-dos</li>
            <li>Weekly agenda</li>
            <li>Docs</li>
            <li>Roadmap</li>
            <li>Design system</li>
            <li>Employee onboarding</li>
            <li>Product wiki</li>
            <li>Content calendar</li>
          </ul>
        </div>
        <div>
          <span>Company</span>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>To-dos</li>
            <li>Media kit</li>
            <li>Contact sales</li>
            <li>Contact support</li>
            <li>Email us</li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
);

export default Footer;
