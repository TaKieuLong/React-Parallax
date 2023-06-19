import { Parallax } from 'react-parallax';
import Thomas from '../imgs/thomas.jpg'
const ImageTwo = () => (
    <Parallax className='image' bgImage={Thomas} strength={800}>
       <div className='content'>
        <span className='img-txt'>a trip to space</span>
       </div>
    </Parallax>
);
export default ImageTwo;