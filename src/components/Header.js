import React from 'react'
import { css } from '@emotion/react';
//import NotionLogo from "../images/notion_logo.png";
/** @jsxImportSource @emotion/react */

function Header() {

    const navigationWrapStyles = css`
  position: fixed;
  top: 5px;
  left: 0px;
  display: flex;
  align-items: center;
 justify-content: space-around;
  height: 60px;
  width: 100%;
  padding: 0 200px;
  background-color: #fffefc;
  z-index: 1;
`;

    const navigationStyles = css`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
font-size: 15px;
font-weight: 500;

ul,
nav {
  display: flex;
  align-items: center;
  grid-gap: 8px;
  list-style-type: none;
}

li,
span {
  padding: 0 10px 2px 25px;
}
`;


    const smallButton = css`
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  height: 35px;
  padding: 0 12px;
  color: rgb(255, 255, 255);
  background: rgb(58, 160, 218);
  border: 1px solid rgb(48, 139, 191);
  box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px;
  cursor: pointer;
`;



    return (

        <div css={navigationWrapStyles}>
            <div css={navigationStyles}>

                <div>

                    <img
                        alt="Notion app logo"
                        src="https://www.notion.so/cdn-cgi/image/w=640,q=100/front-static/shared/icons/notion-app-icon-3d.png"
                        width="80px"
                    />

                </div>


                <nav>
                    <ul>
                        <li>Product</li>
                        <li>Solutions</li>
                        <li>Resources</li>
                        <li>Download</li>
                        <li>Pricing</li>
                    </ul>
                </nav>
            </div>
            <div css={navigationStyles}>
                <nav>
                    <span>Request a Demo</span>
                    <span>Log in</span>
                    <button css={smallButton}>Try Notion free</button>
                </nav>
            </div>
        </div>

    )
}

export default Header