import PomodoroTimer from "@/components/action-card/pomodoro-timer";
import BackgroundController from "@/components/action-card/background/background-controller";
import Sound from "@/components/action-card/sound";
import Todo from "@/components/action-card/todo";

interface IActionCardProps {
  menuItem: string[];
}

export default function ActionCard({ menuItem }: IActionCardProps) {
  return (
    <div className="h-[80vh] border border-slate-600">
      <h2>Action Card</h2>
      <div className="flex flex-col gap-7">
        {menuItem.map((item) => {
          switch (item) {
            case "timer":
              return (
                <PomodoroTimer pomodoroTime={2700} restTime={300} key={item} />
              );
            case "todo":
              return <Todo key={item} />;
            case "background-controller":
              return <BackgroundController key={item} />;
            default:
              return null;
          }
        })}
        <Sound isShow={menuItem.includes("sound-controller")} />
      </div>
    </div>
  );
}
