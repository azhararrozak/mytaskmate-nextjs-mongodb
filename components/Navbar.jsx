import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center bg-white text-black shadow-sm p-3">
      <div className="flex items-center">
        <Image src="/MyTaskMate.png" width={70} height={70} alt="MyTaskMate" />
        <h1 className="text-2xl font-bold">MyTaskMate</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="whitespace-nowrap">
          {session?.user?.fullname}
        </span>
        <Button text="Logout" onClick={() => signOut()} />
      </div>
    </div>
  );
};

export default Navbar;
