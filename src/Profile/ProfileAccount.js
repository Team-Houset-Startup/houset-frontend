import ProfileInfo from "./ProfileInfo";
import ProfileAddress from "./ProfileAddress";
import UpdatePassword from "./UpdatePassword";

export default function ProfileAccount({ activeDropdown }) {
  switch (activeDropdown) {
    case 1:
      // Daftar alamat will be shown
      return  <ProfileAddress />
    case 2:
      // Ubah Password will be shown
      return <UpdatePassword />
    default:
      // profil saya will be shown
      return <ProfileInfo />
  }
}
