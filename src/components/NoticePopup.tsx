import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

interface NoticePopupProps {
  imageUrl: string;
  eventUrl: string;
}

const NoticePopup = ({ imageUrl, eventUrl }: NoticePopupProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 bg-transparent border-0 max-w-xs sm:max-w-md w-full shadow-none">
        <div className="relative aspect-square">
          <Link to={eventUrl} className="block w-full h-full" onClick={() => setIsOpen(false)}>
            <img src={imageUrl} alt="Notice" className="w-full h-full object-cover rounded-lg" />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoticePopup;
