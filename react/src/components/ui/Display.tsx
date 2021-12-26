import React from 'react';

export interface DisplayProps {
  value: number;
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="display">
      <p className="display__content">{value}</p>
    </div>
  );
};
