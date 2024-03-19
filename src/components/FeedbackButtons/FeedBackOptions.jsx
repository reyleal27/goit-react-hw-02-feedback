

const FeedBackOptions = ({options, leaveFeedback}) => {
        return (
            <div className="button-wrapper"> 
                {options.map(option => 
                <button className="buttons" 
                key={option}
                onClick={()=>leaveFeedback(option)}
                >{option}
                </button>)}
            </div>
        )
    }
;
export default FeedBackOptions;