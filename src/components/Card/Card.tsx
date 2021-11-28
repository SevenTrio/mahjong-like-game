import React from 'react';
import cn from 'classnames';
import './Card.scss';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  isActive?: boolean;
  isGuessed?: boolean;
}

const Card: React.FC<ICardProps> = ({
  children,
  isVisible = false,
  isActive = false,
  isGuessed = false,
  ...restProps
}) => {
  const shouldDisplayContent = isVisible || isActive || isGuessed;

  return (
    <div
      className={cn('card', {
        card_active: isActive,
        card_guessed: isGuessed,
      })}
      {...restProps}
    >
      {shouldDisplayContent && (
        <span className="card__content">{children}</span>
      )}
    </div>
  );
};

export default Card;
