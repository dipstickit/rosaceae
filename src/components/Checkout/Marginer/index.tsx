import React from 'react';

export interface IMarginerProps {
  margin: number | string;
  direction?: 'horizontal' | 'vertical';
}

const Marginer: React.FC<IMarginerProps> = ({ margin, direction = 'horizontal' }) => {
  const style = direction === 'horizontal'
    ? { marginLeft: typeof margin === 'string' ? margin : `${margin}px` }
    : { marginTop: typeof margin === 'string' ? margin : `${margin}px` };

  return <div style={style} />;
};

export { Marginer };
