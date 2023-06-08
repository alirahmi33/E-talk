import { Reviews } from '../constants';

const ReviewCard = ({ title, content, student, level, image, icon }) => (
    <div className="flex mt-4 ml-2 border-2 border-solid rounded-md h-80 sm:w-5/12 sm:ml-4">
        <div className="mt-4 ml-4 rounded-md sm:w-52 w-80 h-72 bg-rose-300">
            <img src={image} alt="" className="pt-4 bg-center bg-contain h-72" />
        </div>
        <div>
            <img src={icon} alt="" className="w-40 pt-6 pl-4 sm:w-30 h-30 " />
            <h1 className="pt-2 pl-6 text-sm font-bold sm:text-base sm:pl-4">{title}</h1>
            <p className="pt-8 pl-6 text-sm sm:w-80 sm:pl-4 sm:text-base text-gray">{content}</p>
            <h1 className="pt-8 pl-6 text-sm font-bold sm:text-base sm:pl-4">{student}</h1>
            <h1 className="pl-6 text-sm font-normal sm:text-base sm:pl-4 text-gray">{level}</h1>
        </div>
    </div>
)
const StudentsReview = () => {
    return (
        <section id="reviews" className='pb-10  bg-slate-50'>
            <div>
                <h1 className="pt-8 text-4xl font-bold text-center">
                    People Says About Courses
                </h1>
                <p className="pt-6 text-base text-center text-gray">
                    Elearn is a Global Training demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                </p>
            </div>
            <div className="flex flex-col justify-around pt-10 sm:flex-row">
                {Reviews.map((review, index) => (
                    <ReviewCard key={review.id} {...review} index={index} />
                ))}

            </div>

        </section>

    )
}

export default StudentsReview