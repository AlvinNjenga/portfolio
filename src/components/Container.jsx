import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <main className="px-8 max-w-[1600px] sm:px-12 md:px-24 lg:px-40">
        {children}
    </main>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;