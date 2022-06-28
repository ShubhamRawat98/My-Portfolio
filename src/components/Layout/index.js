import './index.scss';
import Sidebar from '../SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () =>{
    return(
    <div className="App">
    <Sidebar/>
    <div className='page'>
        <span className='tags top-html-tag'>&lt;html&gt;</span>
        <span className='tags top-body-tag'>&lt;body&gt;</span>
    </div>
    <Outlet/>
        <span className='tags bottom-body-tag'>&lt;body&gt;</span>
        <span className='tags bottom-html-tag'>&lt;html&gt;</span>

 
    </div>
    )
}

export default Layout;