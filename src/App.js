import './App.css';
/** @jsxImportSource @emotion/react */
import Header from "./components/Header";
import { css } from '@emotion/react';
import Footer from './components/Footer';
import Tags from "./components/Tags";

import notionEmoji from './images/notion_emoji.png';

import Hero from "./images/home-hero.png";
import Amazon from "./images/amazon.png";
import Nike from "./images/nike.png";
import Pixar from "./images/pixar.png";
import Doordash from "./images/doordash.png";
import GE from "./images/General_Electric.png";
import Uber from "./images/uber.png";
import Plaid from "./images/plaid.png";
import Toyota from "./images/toyota.png";
import Snowflake from "./images/snowflake.png";
import Idea from "./images/idea.webp";
import List from "./images/list.webp";

const appStyles = css`
 
  min-height: 100vh;
`;




const mediumButton = css`
  border-radius: 3px;
  font-size: 20px;
  font-weight: 500;
  height: 45px;
  max-width: 180px;
  padding: 0 20px;
  margin: 20px 0 30px 0;
  color: white;
  background: black;
  border: 1px solid rgb(48, 139, 191);
  box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px;
  cursor: pointer;
`;

const styledMain = css`
  padding: 0 200px;
  margin-top: 80px;
`;

const styledSection = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 170px 0;
`;

const sectionLeftContainer = css`
  margin: 20px 0 20px 0;

  h1 {
    font-size: 61px;
    margin: 20px 0 0 0;
  }

  h2 {
    font-size: 24px;
   font-weight: 500;
    
  }

  span {
    font-size: 12px;
    color:black;
  }
`;

const logosSectionStyled = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  background-color: #fffefc;

  span{
    font-size:40px;
    text-align:center;
    font-weight:500;
  }
`;

const logosWrapperStyles = css`
  display: grid;
  grid-template-columns:repeat(3,1fr);
  flex-wrap:wrap;
  align-items:center;
  grid-gap:10px;
  height: 30px;
  width: 100%;
  margin-left:50px;
 padding: 20px 0;
  background-color: #fffefc;

  img {
    max-width: 60px;
  }
`;

const secondSectionLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin: 0 100px 0 0;

  h3 {
    font-size: 30px;
    font-weight: 600;
    max-width: 300px;
    margin-bottom: 10px;
  }

  p {
    font-size: 21px;
    color: #808080;
    font-weight: 500;
    max-width: 650px;
    margin-top: 0px;
  }
`;

const imageContainer = css`
  img {
    max-width: 100%;
    border-radius: 12px;
  }
`;

const testimonialsSection = css`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
  margin-bottom: 40px;

  h2 {
    font-size: 40px;
    font-weight: 600;
    max-width: 650px;
    margin-bottom: 15px;
  }

  button {
    color: rgb(4, 4, 4);
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 35px;
    padding: 0 12px;
    background: transparent;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background: rgba(55, 53, 47, 0.08);
    }
  }

  img {
    max-width: 400px;
    margin: 0 80px;
  }
`;


const centeredSection = css`
  text-align: center;
  margin: 100px 0 200px;
  position: relative;

  h1 {
    font-size: 40px;
    margin: 10px 0 0 0;
  }

  h3 {
    font-size: 20px;
    color: #808080;
    font-weight: 500;
    margin-bottom: 0px;
  }
  p {
    font-size: 18px;
    color: #808080;
    font-weight: 500;
    margin-top: 0px;
  }
`;

const positionAbsoluteImage = css`
  width: 250px;
  position: absolute;
  left: 100px;
  bottom: -180px;
`;

function App() {
  return (
    <div css={appStyles}>
      <Header />

      <main css={styledMain}>
        <section css={styledSection}>
          <div css={sectionLeftContainer}>
            <h1>
              Write, plan, share.<br></br>
              With AI at your side.
            </h1>
            <h2>
              Notion is the connected workspace where better, faster work happens.
            </h2>
            <button css={mediumButton}>Try Notion free</button>
            
              <img style={{width:"100%",height:"300px",objectFit:"contain",margin:"auto"}} alt="hero" src={Hero} />

              <Tags/>
            
          
           
          </div>

        </section>

        <section css={styledSection}>
          <div css={secondSectionLeft}>
            <h3> Team up without the chaos</h3>
            <p>
              Connect your teams, projects, and docs in Notion — so you can bust
              silos and move as one.
            </p>
          </div>

          <div css={imageContainer}>
            <img alt="notion emoji functionality" src={notionEmoji} />
          </div>
        </section>

        <div css={logosSectionStyled}>
              <span>Millions run on Notion every day</span>
              <div css={logosWrapperStyles}>
                <img alt="doordash logo" src={Doordash} />
                <img alt="pixar logo" src={Pixar} />
               <img alt="nike logo" src={Nike} />
                <img alt="amazon logo" src={Amazon} />
                <img alt="ge" src={GE}/>
                <img alt="uber" src={Uber}/>
                <img alt="Plaid" src={Plaid}/>
                <img alt="toyota" src={Toyota}/>
                <img alt="snowflake" src={Snowflake}/>
              </div>
            </div>
        {/* <section css={styledSection}>
          <div css={secondSectionLeft}>
            <h3> Never ask “What’s the context?” again</h3>
            <p>
              Stale wikis aren't helpful. Neither are floating docs. In Notion,
              your daily work and knowledge live side by side — so you never
              lose context.
            </p>
          </div>
          <div css={imageContainer}>
            <img
              alt="meeting notes functionality"
              src="https://www.notion.so/cdn-cgi/image/w=3840,q=100/front-static/pages/product/value-props/context-tile.png"
            />
          </div>
        </section> */}

        <hr />

        <section>
          <div css={testimonialsSection}>
            <div>
              <div>
                <h2>Used by the world’s most innovative teams</h2>
                <button>Read all customer stories → </button>
              </div>
            </div>

            
            <div>
              <img
                alt="team collaborating"
                src="https://www.notion.so/cdn-cgi/image/w=3840,q=100/front-static/pages/product/teams.png"
              />
            </div>
          </div>
          
          <img style={{width:"100%"}} alt="list" src={List}/>
          <img style={{width:"50%"}} alt="idea" src={Idea}/>
         
          

          
        </section>

        <hr />

        <section css={centeredSection}>
          <div>
            <div>
              <img
                alt="Notion app logo"
                src="https://www.notion.so/cdn-cgi/image/w=640,q=100/front-static/shared/icons/notion-app-icon-3d.png"
                width="80px"
              />
            </div>
            <h1>Try Notion today</h1>
            <h3>
              Get started for free.
              <br /> Add your whole team as your needs grow.
            </h3>
            <button css={mediumButton}>Try Notion free</button>
            <p>On a big team? Contact sales</p>
          </div>

          <img
            css={positionAbsoluteImage}
            alt="person sitting"
            src="https://www.notion.so/cdn-cgi/image/w=640,q=100/front-static/pages/product/sitting-character.png"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
