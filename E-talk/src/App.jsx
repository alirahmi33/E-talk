import styles from './style';
import { Navbar, AboutUs, Features, Articles, Courses, Reviews, ContactUs, Footer } from './components/index';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} ${styles.boxHeight}`}>
          <AboutUs />
        </div>
      </div>
      <div className={`bg-slate-50 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`bg-slate-50 ${styles.boxWidth}`}>
          <Features />
          <Articles />
          <Courses />
          <Reviews />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>

  )
}

export default App
