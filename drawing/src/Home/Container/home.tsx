import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import CompHome from '../Component/home';

const Home: React.FC = () => {
  const [isMax, setIsMax] = useState<boolean>(false);

  const getMember = async () => {
    let unmounted = false;
    const entoryMembersRef = db.collection('entryMembers').doc('entryNumber');
    await entoryMembersRef
      .get()
      .then((doc) => {
        if (!unmounted) {
          if (doc.exists) {
            const getData: any = doc.data();
            if (getData.maximum) {
              setIsMax(true);
            } else {
              setIsMax(false);
            }
          } else {
            setIsMax(false);
          }
        }
      })
      .catch((error) => {
        console.log('Error getting document', error);
      });
    return () => {
      unmounted = true;
    };
  };

  useEffect(() => {
    getMember();
  }, []);

  return <CompHome isMax={isMax} setIsMax={setIsMax} />;
};

export default Home;
