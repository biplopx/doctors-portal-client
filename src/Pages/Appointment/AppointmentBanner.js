import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chiar from '../../assets/images/chair.png';
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <>
      <div className="bg-[url('/src/assets/images/bg.png')] hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chiar} className="max-w-sm shadow-2xl m-0" alt='chair' />
          <div>
            <DayPicker mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentBanner;