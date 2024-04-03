import { useCallback } from "react";
import Button from "../Button";

interface IProductCardProps {
  title: string;
  price: number;
  imgSrc: string;
  action: () => void;
  actionLabel: string;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const ProductCard: React.FC<IProductCardProps> = ({
  title,
  price,
  imgSrc,
  action,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const handleAction = useCallback(() => {
    action();
  }, [action]);

  const handleSecondaryAction = useCallback(() => {
    if (secondaryAction) {
      secondaryAction();
    }
  }, [secondaryAction]);
  return (
    <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-600 to-slate-400">
      <div>
        <img src={imgSrc} className="rounded-lg"/>
      </div>
      <h3 className="my-2 font-bold text-xl text-white">{title}</h3>
      <h5 className="mb-8 text-white font-light text-sm">$: {price}</h5>

      <div className={`${secondaryAction? 'flex justify-center items-center gap-2':''}`}>
        <Button action={handleAction} actionLabel={actionLabel} />
        {secondaryAction && (
          <Button
            action={handleSecondaryAction}
            actionLabel={secondaryActionLabel as string}
            secondary
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
