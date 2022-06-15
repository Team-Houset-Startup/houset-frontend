import {ReactComponent as HomeIcon} from './assets/Icon/icon-home.svg'
import {ReactComponent as EyeIcon} from './assets/Icon/icon-eye.svg'
import {ReactComponent as NotificationIcon} from './assets/Icon/icon-notification.svg'
import {ReactComponent as NoteIcon} from './assets/Icon/icon-note.svg'
import {ReactComponent as WishlistIcon} from './assets/Icon/icon-wishlist.svg'
import './assets/style/profile-sidebar.css'

export default function ProfileSidebar({activeSidebar,setActiveSidebar}) {

    return(
        <div className="profile-sidebar">
            <ul>
                <li className={activeSidebar === 0 ? "active" : ""} onClick={() => setActiveSidebar(0)}>
                    <button>
                        <HomeIcon />
                        <p>Akun Saya</p>
                    </button>
                </li>
                <li className={activeSidebar === 1 ? "active" : ""} onClick={() => setActiveSidebar(1)}>
                    <button>
                        <NoteIcon />
                        <p>Pesanan Saya</p>
                    </button>            
                </li>
                <li className={activeSidebar === 2 ? "active" : ""} onClick={() => setActiveSidebar(2)}>
                    <button>
                        <NotificationIcon />
                        <p>Notifikasi</p>
                    </button>                            
                </li>
                <li className={activeSidebar === 3 ? "active" : ""} onClick={() => setActiveSidebar(3)}>
                    <button>
                        <WishlistIcon />
                        <p>Wishlist</p>
                    </button>            
                </li>
            </ul>
        </div>
    )
}