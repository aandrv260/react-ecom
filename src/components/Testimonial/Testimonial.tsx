import { TestimonialType } from '../../models/testimonials';
import { getStyleClassName } from '../../utils/general';
import scss from './Testimonial.module.scss';

interface TestimonialProps {
  data: TestimonialType;
}

const Testimonial: React.FC<TestimonialProps> = ({ data: { image, name, posted, text } }) => {
  return (
    <div className={getStyleClassName(scss, 'testimonial')}>
      <header className={getStyleClassName(scss, 'testimonial__header')}>
        <div className={getStyleClassName(scss, 'testimonial__customer-box')}>
          <div className={getStyleClassName(scss, 'testimonial__img-box')}>
            <img src={image} alt={`${name}`} />
          </div>

          <span className={getStyleClassName(scss, 'testimonial__name')}>{name}</span>
        </div>

        <span className={getStyleClassName(scss, 'testimonial__time-posted')}>{posted}</span>
      </header>

      <div className={getStyleClassName(scss, 'testimonial__text-box')}>
        <p className={getStyleClassName(scss, 'testimonial__text')}>{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
