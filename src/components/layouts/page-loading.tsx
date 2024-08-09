import { cn } from "@/lib/utils";
import "./page-loading.css";

const LayoutLoading = ({ isOverlay = false }: { isOverlay?: boolean }) => {
  return (
    <div className={cn("loader", isOverlay && "loader-overlay")}>
      <div className="square" id="sq1"></div>
      <div className="square" id="sq2"></div>
      <div className="square" id="sq3"></div>
      <div className="square" id="sq4"></div>
      <div className="square" id="sq5"></div>
      <div className="square" id="sq6"></div>
      <div className="square" id="sq7"></div>
      <div className="square" id="sq8"></div>
      <div className="square" id="sq9"></div>
    </div>
  );
};

export default LayoutLoading;
