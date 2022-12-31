import PropTypes from 'prop-types';

const name = 'Jesús'
// const newObjecto ={
//     nombre: 'Jesús',
//     message: 'Esto es un mensaje'
// }

export const FirstApp = ({title, subTitle, name}) => {
  return (
    <>
    {/* <h1>Hola Jesús</h1> */}
    {/* <code>{JSON.stringify(newObjecto)}</code> */}
    <h1 data-testid = "test-title">{ title }</h1>
    <p>{ subTitle }</p>
    <p>{ subTitle }</p>
    <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  name: 'Jesús Mira',
  subTitle: 'No hay subtitulo',
 
}
