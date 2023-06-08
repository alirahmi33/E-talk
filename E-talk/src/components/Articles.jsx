import { articles } from '../constants';
import { Link } from 'react-router-dom';

const ArticleCard = ({ icon, title, content, footer }) => (
    <div className="pl-6 mt-6 bg-white rounded-md sm:w-96 w-80 h-72 ">
        <img className="pt-10 pb-8" src={icon} />
        <h1 className="font-sans text-base font-semibold">{title}</h1>
        <p className='pt-4 mb-4 font-sans text-xs font-normal leading-6 text-gray'>
            {content}
        </p>
        <Link to='#' className='text-sm font-semibold'>{footer}</Link>
    </div>
)
const Articles = () => {
    return (
        <section id='articles' className='h-screen bg-slate-50'>
            <h1 className="pt-10 pb-10 font-serif text-3xl font-bold text-center sm:text-4xl">
                How Is Out Tutoring Service?
            </h1>
            <div className='flex flex-col items-center justify-around space-y-6 sm:flex-row '>
                {articles.map((article, index) => (
                    <ArticleCard key={article.id} {...article} index={index} />
                ))}
            </div>
        </section>
    )
}

export default Articles