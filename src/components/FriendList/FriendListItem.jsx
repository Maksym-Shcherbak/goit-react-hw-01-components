export const FriendListItem = ({ status, imgSrc, friendName }) => {
  return (
    <li className="item">
      <span className="status">{status}</span>
      <img className="avatar" src={imgSrc} alt="User avatar" width="48" />
      <p className="name">{friendName}</p>
    </li>
  );
};
