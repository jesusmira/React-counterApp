import PropTypes from 'prop-types';

const newMessage = 'Jesús'
// const newObjecto ={
//     nombre: 'Jesús',
//     message: 'Esto es un mensaje'
// }

export const FirstApp = ({title, subTitle}) => {
  return (
    <>
    {/* <h1>Hola Jesús</h1> */}
    {/* <code>{JSON.stringify(newObjecto)}</code> */}
    <h1>{title}</h1>
    <p> {subTitle + 1}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  name: 'Jesús Mira',
  subTitle: 'No hay subtítulo',
  title: 'No hay título',
}
