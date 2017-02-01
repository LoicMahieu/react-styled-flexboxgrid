import React from 'react'
import styled from 'styled-components'

const Markdown = props => {
  const html = {
    __html: props.html
  }

  return (
    <article className={props.className} dangerouslySetInnerHTML={html} />
  )
}

Markdown.propTypes = {
  html: React.PropTypes.string,
  className: React.PropTypes.string
}

export default styled(Markdown)`
  display: block;
  max-height: 100%;
  flex-grow: 1;
  padding-bottom: 1rem;
  overflow-y: scroll;
  font-size: 1.6rem;
  color: #212121;
`
