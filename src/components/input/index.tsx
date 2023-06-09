interface IInputProps {
  label: string;
  id: string;
  className?: string;
  type?: string;
  value?: string;
  error?: string;
  handleOnKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  id,
  className,
  type,
  value,
  error,
  handleOnKeyDown,
  handleOnChange,
}: IInputProps) {
  return (
    <div className="relative mx-1 block">
      <input
        className={`placeholder-shown:ring-none focus:border-primary focus:ring-primary peer rounded-xl p-3 placeholder-transparent ring-1 ring-slate-300 placeholder-shown:bg-slate-100 placeholder-shown:ring-0 hover:ring-1 hover:ring-slate-300 focus:bg-white focus:outline-none focus:ring-2 ${
          className || ""
        }`}
        type={type}
        value={value}
        placeholder={label}
        autoComplete="none"
        id={id}
        onChange={handleOnChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleOnKeyDown && handleOnKeyDown(e);
          }
        }}
      />
      <label
        htmlFor={id}
        className="absolute -top-3 left-2 bg-white px-2 text-xs text-slate-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-slate-100 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-2 peer-focus:bg-white peer-focus:text-xs peer-focus:text-slate-800"
      >
        {label}
      </label>
      {error && <p className="ml-2 mt-2 text-xs text-slate-400">{error}</p>}
    </div>
  );
}
