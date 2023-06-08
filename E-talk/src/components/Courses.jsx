import { courses } from '../constants';
import Buttons from './Buttons';
const CourseCard = ({ icon, title, content, footer }) => (
    <div className="justify-center mt-6 bg-white rounded-md  sm:w-72 w-80 h-80">

        <img className="pt-8 pb-4  ml-28" src={icon} />
        <h1 className="font-sans text-base font-semibold text-center">{title}</h1>
        <p className='h-16 pt-4 mb-8 ml-6 font-sans text-xs font-normal leading-6 text-center w-60 text-gray'>
            {content}
        </p>
        <button className='h-16 ml-10 text-sm font-semibold text-center border rounded-md  text-slate-500 w-52 border-purple hover:text-white hover:bg-purple'>
            {footer}
        </button>
    </div>
)

const Courses = () => {
    return (
        <section id="courses" className='bg-slate-50' >
            <div>
                <h1 className='pt-10 text-3xl font-bold text-center sm:text-4xl '>
                    Qualified lessons for students
                </h1>
                <p className="pt-6 ml-6 text-center  sm:w-full w-80">
                    A lesson or  class is a when our power of choice is untrammelled and when nothing prevents our being able to do what we like best
                </p>
                <div className='flex justify-center pt-6'>
                    <Buttons> Kindergarten</Buttons>
                    <button className="items-center h-16 text-white rounded-md bg-orange w-44">
                        High School
                    </button>
                    <Buttons>Collage</Buttons>

                </div>

            </div>
            <div className='flex flex-col items-center justify-around sm:flex-wrap sm:flex-row'>
                {courses.map((course, index) => (
                    <CourseCard key={course.id} {...course} index={index} />
                ))}
            </div>
            <div className='flex justify-center pt-6'>
                <button className='h-16 mb-2 text-sm font-semibold text-center text-white border rounded-md bg-purple sm:w-44 w-60 border-purple hover:text-purple hover:bg-white '>
                    <span>View More Courses</span>
                </button>
            </div>
        </section>
    )
}

export default Courses