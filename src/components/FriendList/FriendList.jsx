import FriendListItem from "../FriendListItem//FriendListItem.jsx";
import styles from './FriendList.module.css';


export default function FriendList ({ friends })  {
  return (
    <ul className={styles.friendsList}>
	{friends.map(el => (<li key={el.id}>
              <FriendListItem avatar={el.avatar } name={el.name } isOnline={el.isOnline } />
	</li>) )}
	
</ul>

  );
}