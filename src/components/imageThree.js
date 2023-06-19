import { Parallax } from 'react-parallax';
import Perkin from '../imgs/perkin.jpg'
const ImageThree = () => (
    <Parallax className='image' bgImage={Perkin} strength={800}>
       <div className='content'>
        <span className='img-txt'>a trip to space</span>
       </div>
    </Parallax>
);
export default ImageThree;