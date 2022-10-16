import './card.styles.css';

const Card = ({course}) => {
    const {courseID, courseName, courseRate, courseProfessor} = course;
    return (
        <div className='card-container' key={courseID}>
        <img
            alt={`course ${courseName}`}

            //Image Source needs to be filled with mock data
            src={}
        />
        <h5>{courseName}</h5>
        <h6>{courseRate}</h6>
        <h6>{courseProfessor}</h6>
        </div>
    )};

export default Card;