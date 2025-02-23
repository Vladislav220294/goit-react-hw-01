import styles from './FriendListItem.module.css';

export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <div>
  <img src={avatar} alt="Avatar" width="48" />
            <p>{ name}</p>
            {isOnline?<p className={styles.online}>Online</p>:<p className={styles.offline}>Offline</p>}
</div>

    )
}