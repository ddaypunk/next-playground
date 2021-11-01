import React, { useState } from 'react';

type Props = {
    isDisabled?: boolean;
}

// From: https://reactjs.org/docs/hooks-state.html
export const CounterButton = ({
        isDisabled = false
}: Props) => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)} disabled={isDisabled}>
                Counted: {count}
            </button>
        </div>
    );
}