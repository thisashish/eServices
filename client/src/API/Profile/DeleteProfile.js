import axios from "axios";

export const DeleteProfile = async (c) => {
  const res1 = await axios.post(
    "http://localhost:4001/profile/delete/one/byid",
    { id: c }
  );
  if (res1.status === 200) {
    window.location.reload();
  }
};
