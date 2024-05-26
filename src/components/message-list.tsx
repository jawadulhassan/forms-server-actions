import { getMessages } from "@/app/actions";

const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0]; // Converts date to 'YYYY-MM-DD' format
};

const MessageList: React.FC = async () => {
  const directories = await getMessages();

  return (
    <>
      <h3 className="font-sans text-lg">Employees Directories</h3>
      <hr className="my-3" />
      <ul className="overflow-y-auto h-80">
        {directories.map((directory) => (
          <div key={directory.id}>
            <ListItem label="Name" value={directory.name} />
            <ListItem label="Employee ID" value={directory.employeeId} />
            <ListItem label="Contact Number" value={directory.contactNo} />
            <ListItem
              label="Date Of Joining"
              value={formatDate(directory.dateOfJoining)}
            />
            <hr className="my-2" />
          </div>
        ))}
      </ul>
    </>
  );
};

type ListItemProps = {
  label: string;
  value: string | Date;
};

const ListItem: React.FC<ListItemProps> = ({ label, value }) => (
  <li className="p-1">
    {label}: {typeof value === "string" ? value : formatDate(value)}
  </li>
);

export { MessageList };
