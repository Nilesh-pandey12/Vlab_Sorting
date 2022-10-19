import vlab from '../Header/vlab.jpg';
import college from '../Header/LOGO.png';
import { Link } from 'react-router-dom';
const ExperimentHeader=(props)=>{
    return (
        
            <div className=' bg-gradient-to-r from-sky-300 to-indigo-200'>
            <div className='flex justify-between py-3 px-14 mx-3'><img className='h-16 w-24' src={vlab} alt="Can't load."></img>
             <img className='h-16' src={college} alt="Can't load."></img>
            </div>
            <div>
                <ul className='check flex justify-center space-x-12 font-bold items-center'>
                <Link to='/'> <li className=''>Home</li></Link>
                <Link to='/Experiment/InsertionSort/Aim'><li className={props.stl}>Aim</li></Link>
                  <Link to='/Experiment/InsertionSort/Theory'> <li className={props.th}>Theory</li></Link>
                    <Link to='/Experiment/InsertionSort/Practice'><li className={props.pr}>Practice</li></Link>
                    <Link to='/Experiment/InsertionSort/Procedure'><li className={props.pc}>Procedure</li></Link>
                    <Link to='/Experiment/InsertionSort/Simulation'><li className={props.sml}>Simulation</li></Link>
                    <Link to='/Experiment/InsertionSort/Posttest'><li className={props.pst}>Posttest</li></Link>

                    <Link to='/Experiment/InsertionSort/References'><li className={props.rf}>References</li></Link>

                </ul>
                <hr></hr>
                
            </div>
            </div>
               
    );
}
export default ExperimentHeader;