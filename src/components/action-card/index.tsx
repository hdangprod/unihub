import PomodoroTimer from "@/components/action-card/pomodoro-timer";
import BackgroundController from "@/components/action-card/background/background-controller";
import Sound from "@/components/action-card/sound";
import Todo from "@/components/action-card/todo";

interface IActionCardProps {
  menuItem: string[];
}

export default function ActionCard({ menuItem }: IActionCardProps) {
  return (
    <div className="flex h-[80vh] w-80 flex-col flex-wrap gap-7">
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
  );
}
