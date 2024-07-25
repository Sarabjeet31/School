import './App.css';

export default function Scrolling() {
  return(
    <div>
      <div className="flex-col justify-center items-center bg-gray-100">
        <div className='pb-4 flex justify-center text-2xl font-semibold p-2'>
          Whats New
        </div>
        <div className="scrolling-box overflow-hidden relative p-4 w-80 h-40">
          <div className="scrolling-content absolute space-y-2">
            <div>Datesheet</div>
            <div>Datesheet</div>
            <div>Datesheet</div>
            <div>Datesheet</div>
          </div>
        </div>
      </div>
    </div>
  )
}