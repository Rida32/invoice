import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Apiis = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ title: "", body: "", userId: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;


  const getdata = async () => {
 
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("data", res.data);
      setData(res.data);
    } catch (error) {
      console.log("api call arror", error);
    } finally {
      setIsTableLoading(false); 
    }
  };

  const postdata = async () => {
    if (!formData.title || !formData.body) {
      alert("Please fill in both Title and Body fields.");
      return;
    }
    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
      formData
      );
      console.log("data", res.data);

   
      setFormData({ title: "", body: "" });
      getdata();
    } catch (error) {
      console.log("api call arror", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getdata();
    },  2000);

    return () => {};
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const displayedData = data.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="container my-5 d-flex flex-column align-items-center justify-content-center">
        <div className="container mt-5">
          <h1 className="text-center mb-4">Form</h1>
          <div className="mb-3 mx-auto" style={{ maxWidth: "600px" }}>
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 mx-auto" style={{ maxWidth: "600px" }}>
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <input
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          
          <button
            className="btn btn-primary" onClick={postdata} disabled={isLoading}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",}}>
            {isLoading ? (
              <>
                <div className="loader" role="status"></div>
                Posting...
              </>) : ("post")}
          </button>

        </div>

        <div>
          <h1>Table</h1>
        </div>
        <table
          border="table table-bordered" 
          style={{ borderCollapse: "collapse", width: "70%" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
           <tr ><td colSpan={12}>{ isTableLoading && <div className="loadertwo" role="status" ></div>}</td></tr>
          
            {displayedData.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.title}</td>
                <td>{record.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="page mt-3">
          <span
            className=" me-2"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            style={{cursor:"pointer"}}
          >
            Prev
          </span>
          <span
            className=""
            onClick={handleNext}
            disabled={currentPage === totalPages}
            style={{cursor:"pointer"}}
          >
            Next
          </span>
        </div>
      </div>
    </>
  );
};

export default Apiis;
