import user from '../data/user.json';
import { Profile } from './Profile/Profile';

import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '15px',
        fontSize: 40,
        color: '#010101',
        background: 'linear-gradient(45deg, #49a09d, #5f2c82',
      }}
    >
      <Profile
        userName={user.username}
        tagName={user.tag}
        location={user.location}
        imgUrl={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
