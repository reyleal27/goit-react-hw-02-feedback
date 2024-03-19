import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <div className="section">
            <section>
                <h2 className="section-title">{title}</h2>
                {children}
            </section>
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Section;