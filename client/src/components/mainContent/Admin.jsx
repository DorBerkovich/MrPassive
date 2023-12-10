// only admin can see this component
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Admin = () => {
  const [massages, setMassages] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    const getMassages = async () => {
      try {
        const response = await axiosPrivate.get("/admin", {
          signal: controller.signal,
        });
        console.log(response);
        isMounted && setMassages(response.data.allMassages);
      } catch (err) {
        console.error(err);
      }
    };
    getMassages();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      {massages.length ? (
        <ul>
          {massages.map((msg, i) => (
            <li key={i}>{msg.massage}</li>
          ))}
        </ul>
      ) : (
        <p>No massages to show</p>
      )}
    </article>
  );
};

export default Admin;
