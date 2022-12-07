import toast from "react-hot-toast";

const notifyError = (error) => {
  toast.error(`${error?.response?.data?.error} - ${error?.response?.status}`, {
    style: { border: "1px solid var(--red)", textAlign: "center" },
    duration: 3000,
  });
};

const notifySuccess = (data) => {
  toast.success(data?.message, {
    style: { border: "1px solid var(--green)", textAlign: "center" },
    duration: 3000,
  });
};

export { notifyError, notifySuccess };
