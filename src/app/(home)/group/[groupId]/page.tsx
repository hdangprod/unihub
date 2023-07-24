import GroupIdComp from "@/components/groupid";

interface IGroupIdProps {
  params: {
    groupId: string;
  };
}

export default function GroupId({ params }: IGroupIdProps) {
  return (
    <div>
      <div>
        <GroupIdComp params={params} />
      </div>
    </div>
  );
}
