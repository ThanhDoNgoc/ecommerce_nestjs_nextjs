import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            <Image src={logo} height={40} width={40} alt="Flowmazon logo" />
            Cuutui
          </Link>
        </div>
        <div className="flex-none gap-2">
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input-bordered input w-full min-w-[100px]"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
