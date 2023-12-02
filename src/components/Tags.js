import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Tags() {

 
const peopleQuotes = css`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 60px;
margin-top: 60px;
margin-bottom: 100px;

`;

const individualTestimonial = css`
max-width: 400px;
border-radius:20px;
background-color:grey;
`;

const personTestimonialQuote = css`
img {
  max-height: 30px;
}

p {
  font-size: 15px;
  font-weight: 300;
  color:black;
  text-align:center;
}
`;



  return (

    <div css={peopleQuotes}>
            <div css={individualTestimonial}>
              <div css={personTestimonialQuote}>
                <div>
                  <img
                    alt="lattice logo"
                    src="https://www.notion.so/front-static/shared/logos/color/lattice.png"
                  />
                </div>
                <div>
                  <p>
                    Ask literally Anything
                  </p>
                </div>
              </div>
              
            </div>
            <div css={individualTestimonial}>
              <div css={personTestimonialQuote}>
                <div>
                  <img
                    alt="Loom logo"
                    src="https://www.notion.so/front-static/shared/logos/color/loom.png"
                  />
                </div>
                <div>
                  <p>
                     Centralize your knowledge. <br></br> No more hunting for Answers.
                  </p>
                </div>
              </div>
              
            </div>
            <div css={individualTestimonial}>
              <div css={personTestimonialQuote}>
                <div>
                  <img
                    alt="Figma logo"
                    src="https://www.notion.so/front-static/shared/logos/color/figma.png"
                  />
                </div>
                <div>
                  <p>
                   Manage complex project without chaos.
                  </p>
                </div>
              </div>
              
            </div>

            <div css={individualTestimonial}>
              <div css={personTestimonialQuote}>
                <div>
                  <img
                    alt="Figma logo"
                    src="https://www.notion.so/front-static/shared/logos/color/figma.png"
                  />
                </div>
                <div>
                  <p>
                 Simple,powerful next gen Docs
                  </p>
                </div>
              </div>
              
            </div>
          </div>
  )
}

export default Tags