const Section = ({ title, children}) => {
    return (
        <div className="section">
            <section>
                <h2 className="section-title">{title}</h2>
                {children}
            </section>
        </div>
    )
}

export default Section;