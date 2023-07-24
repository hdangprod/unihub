interface IGroupIdProps {
  params: {
    groupId: string;
  };
}

export default function GroupIdComp({ params }: IGroupIdProps) {
  return (
    <div>
      <div>hello {params.groupId}</div>
    </div>
  );
}
