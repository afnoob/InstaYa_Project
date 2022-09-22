import { Footer } from '../components/Footer';
import Header from '../components/Header';
import Orderlist from '../components/Orderlist';
import './ListPackages.css';


function ListPackages() {
  return (
        <div className='ListPack'>
            <Header />
            <Orderlist />
            <Footer />
        </div>
  );
}

export default ListPackages;