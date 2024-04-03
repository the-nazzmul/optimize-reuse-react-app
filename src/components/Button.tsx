interface IButtonProps {
  action: () => void;
  actionLabel: string;
  secondary?: boolean;
}

const Button: React.FC<IButtonProps> = ({ action, actionLabel, secondary }) => {
  return (
    <button
      onClick={action}
      className={`p-2 rounded-xl border-[1px] w-full ${
        secondary
          ? "bg-white border-black text-black"
          : "bg-black border-black text-white"
      }`}
    >
      {actionLabel}
    </button>
  );
};

export default Button;
