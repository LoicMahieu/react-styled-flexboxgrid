
export default function createProps (propTypes, props) {
  const newProps = {}

  Object.keys(props)
    .filter(key => (~['children'].indexOf(key) || !propTypes[key]))
    .forEach(key => (newProps[key] = props[key]))

  return newProps
}
