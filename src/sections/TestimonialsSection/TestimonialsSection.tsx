import scss from './TestimonialsSection.module.scss';
import { generateId, getStyleClassName } from '../../utils/general';

import testimonialImage from '../../assets/images/testimonials/ben.jpg';
import Testimonial from '../../components/Testimonial/Testimonial';
import { TestimonialType } from '../../models/testimonials';

const initialTestimonialsContent: TestimonialType[] = [
  {
    name: 'John D.',
    image: testimonialImage,
    posted: '3 minutes ago',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita deserunt eligendi fugiat natus non beatae voluptatem itaque distinctio odio nulla numquam totam, eos molestias temporibus facere similique? Dolorum officiis neque placeat veritatis ducimus quod ipsam obcaecati aliquid hic nulla! Voluptatibus amet rem exercitationem ducimus! Quo nisi iure impedit quos.',
  },

  {
    name: 'John D.',
    image: testimonialImage,
    posted: '3 minutes ago',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita deserunt eligendi fugiat natus non beatae voluptatem itaque distinctio odio nulla numquam totam, eos molestias temporibus facere similique? Dolorum officiis neque placeat veritatis ducimus quod ipsam obcaecati aliquid hic nulla! Voluptatibus amet rem exercitationem ducimus! Quo nisi iure impedit quos.',
  },

  {
    name: 'John D.',
    image: testimonialImage,
    posted: '3 minutes ago',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita deserunt eligendi fugiat natus non beatae voluptatem itaque distinctio odio nulla numquam totam, eos molestias temporibus facere similique? Dolorum officiis neque placeat veritatis ducimus quod ipsam obcaecati aliquid hic nulla! Voluptatibus amet rem exercitationem ducimus! Quo nisi iure impedit quos.',
  },

  {
    name: 'John D.',
    image: testimonialImage,
    posted: '3 minutes ago',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita deserunt eligendi fugiat natus non beatae voluptatem itaque distinctio odio nulla numquam totam, eos molestias temporibus facere similique? Dolorum officiis neque placeat veritatis ducimus quod ipsam obcaecati aliquid hic nulla! Voluptatibus amet rem exercitationem ducimus! Quo nisi iure impedit quos.',
  },
];

const TestimonialsSection = () => {
  return (
    <section>
      <div className={`${getStyleClassName(scss, 'testimonials')} container`}>
        {initialTestimonialsContent.map(testimonial => (
          <Testimonial data={testimonial} key={generateId()} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
