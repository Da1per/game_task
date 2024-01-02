import './Main.css'
import LeftSection from './LeftSection/LeftSection';
import MainSection from './MainSection/MainSection';
export default function Main(){
    return (
        <div className='main'>
            <LeftSection/>
            <MainSection/>
        </div>
    )
}
