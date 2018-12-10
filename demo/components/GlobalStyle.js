
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    background: #EEE;
    line-height: 1.4rem;
    font-family: HelveticaNeue-Light,'Helvetica Neue Light','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;
  }

  h1 {
    font-size: 5em;
    margin: 0.67em 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #001A33;
  }
`
