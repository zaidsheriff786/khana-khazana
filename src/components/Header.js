import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { TbDiscount2 } from 'react-icons/tb';
import { MdShoppingCart } from 'react-icons/md';

const Title = () => {
  return (
    <div>
      <Link to='/'>
        <img className='h-16' src={logo} alt='logo' />
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className='sticky top-0 z-10'>
      <div className='flex justify-between w-full h-20 py-2 px-4 bg-white shadow-lg shadow-gray-500/50'>
        <Title />
        <div className='flex'>
          <ul className='flex py-4 font-bold'>
            <li className='py-1 px-2'>
              <Link className='hover:text-[#fc8019]' to='/'>
                Home
              </Link>
            </li>
            <li className='py-1 px-2'>
              <div>
                <Link
                  className='flex items-center hover:text-[#fc8019]'
                  to='/offers'
                >
                  <span className='mr-1'>
                    <TbDiscount2 fontSize='large' />
                  </span>
                  <span>Offers</span>
                </Link>
              </div>
            </li>
            <li className='py-1 px-2'>
              <MdShoppingCart fontSize='24px' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
