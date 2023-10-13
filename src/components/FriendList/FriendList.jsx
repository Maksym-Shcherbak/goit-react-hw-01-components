import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            status={friend.isOnline}
            imgSrc={friend.avatar}
            friendName={friend.name}
          />
        );
      })}
    </ul>
  );
};
