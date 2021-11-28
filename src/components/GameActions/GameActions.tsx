import React from 'react';
import cn from 'classnames';
import './GameActions.scss';

const GameActions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...restProps
}) => (
  <div className={cn('game-actions', className)} {...restProps}>
    {children}
  </div>
);

export default GameActions;
