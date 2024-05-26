import { DirectoryCreateForm } from "@/components/directory-create-form";
import { MessageList } from "@/components/message-list";

export default function Home() {
  return (
    <>
      {/* Background SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(59 130 246)"
          fillOpacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      {/* Main content */}
      <main className="w-full flex flex-row p-8">
        {/* Directory Create Form */}
        <div className="w-1/2">
          <DirectoryCreateForm />
        </div>

        {/* Divider */}
        <div className="border-l-2 border-blue mx-6 h-96"></div>

        {/* Message List */}
        <div className="w-1/2">
          <MessageList />
        </div>
      </main>
    </>
  );
}
