interface IAuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="flex flex-row">
      <div className="basis-4/12 bg-red-300">{children}</div>
      <div className="basis-6/12 bg-cyan-200">hello</div>
    </div>
  );
}
