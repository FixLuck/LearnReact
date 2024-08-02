import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000

export default function DeleteConfirmation({ onConfirm, onCancel }) {


  useEffect(() => {
    console.log("set Time Out");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER)

    return () => { //return ở đây để ngăn chặn việc thực thi hàm trong useEffect tiếp tục xảy ra nếu DOM trong HTML bị remove
      console.log("clear setTimeOut");
      clearTimeout(timer);
    }

  }, [onConfirm]) //nếu sử dụng các prop hay state value trong useEffect, vậy thì nên set nó làm dependency, nếu có nhiều dependency, dùng dấu phẩy và thêm vào



  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER}/>
    </div>
  );
}
