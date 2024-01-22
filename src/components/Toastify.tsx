import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
  const Icon = "🚀";
  const notify = () =>
    toast.warning("You can provide any string", {
      icon: () => Icon,
    });

  const success = () =>
    toast.success("Success Notification", {
      icon: () => "🌟",
    });

  const error = () =>
    toast.error("Error Notification", {
      icon: () => "❌",
    });
  return (
    <>
      <div>Toastify Screen</div>
      <button
        className="bg-orange-300 px-10 py-2 rounded-full my-3"
        onClick={notify}
      >
        Notify!
      </button>
      <button
        className="bg-green-300 px-10 py-2 rounded-full my-3"
        onClick={success}
      >
        Success!
      </button>
      <button
        className="bg-red-300 px-10 py-2 rounded-full my-3"
        onClick={error}
      >
        Error!
      </button>
    </>
  );
};

export default Toastify;
