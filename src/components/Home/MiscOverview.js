import React, { useState, useEffect } from 'react';

const MiscOverview = () => {
	const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
	return (
		<>
			<p className="text-2xl text-blue-base">Updates</p>
			<hr />
			<div className="flex  h-10">
				<p className="text-center">{seconds} seconds have elapsed since mounting.</p>
			</div>
		</>
	)
}

export default MiscOverview
