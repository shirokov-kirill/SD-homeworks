import { IoMdRefresh } from 'react-icons/io'
import './RefreshPageButton.css'

export default function RefreshPageButton({onClick}){
    return(
        <div>
            <button className="refresh-page-button" onClick={() => onClick()}>
                <IoMdRefresh color='#99A0A3'/>
            </button>
        </div>
    )
}