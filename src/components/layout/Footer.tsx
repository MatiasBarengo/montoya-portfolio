import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h6 className="subtitle mb-4">Email</h6>
            <p className="text-xl">office@montoya.com</p>
          </div>
          <div className="mb-8 md:mb-0">
            <h6 className="subtitle mb-4">Address</h6>
            <p className="text-xl">35 M Str, New York, USA</p>
          </div>
          <div>
            <h6 className="subtitle mb-4">Phone</h6>
            <p className="text-xl">0040 (7763) 574-8901</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">2024 <Link href="https://www.clapat-themes.com/" className="hover:text-white">ClaPat</Link>. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <h6 className="text-sm font-medium">Follow Us</h6>
            <Link href="https://dribbble.com/" className="text-sm hover:text-white">Db</Link>
            <Link href="https://twitter.com/" className="text-sm hover:text-white">Tw</Link>
            <Link href="https://www.behance.net/" className="text-sm hover:text-white">Be</Link>
            <Link href="https://www.facebook.com/" className="text-sm hover:text-white">Fb</Link>
            <Link href="https://www.instagram.com/" className="text-sm hover:text-white">In</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
