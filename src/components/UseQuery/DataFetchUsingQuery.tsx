import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const DataFetchUsingQuery = () => {
  const [postData, setPostData] = useState({ name: "", salary: "", age: "" });

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  /* useQuery FUnction */
  const { data, isLoading, status } = useQuery({
    queryKey: ["fetchData"],
    queryFn: FetchData,
  });

  /* useQuery Mutation */
  const mutation = useMutation({
    mutationFn: AddPost,
    onSuccess: () => {
      // Reset the form and invalidate the "fetchData" query
      queryClient.invalidateQueries({
        queryKey: ["fetchData"],
        exact: true,
      });
    },
  });

  const addPost = (e: any) => {
    console.log(postData);
    e.preventDefault();
    mutation.mutate(postData);
  };

  const handleInput = (e: any) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        {mutation.isPending ? (
          "Adding Post..."
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Employee added!</div> : null}
          </>
        )}
      </div>
      <div>
        <p>Post Data Form</p>
        <form onSubmit={addPost}>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            placeholder="Name"
          />
          <input
            type="text"
            name="salary"
            onChange={handleInput}
            placeholder="Salary"
          />
          <input
            type="text"
            name="age"
            onChange={handleInput}
            placeholder="Age"
          />
          <button type="submit">Add Post</button>
        </form>
      </div>
      <div>
        <h1>Employees Name</h1>
        {isLoading
          ? "Loading..."
          : data?.data.map((employee: any) => (
              <div key={employee.id}>
                <p>{employee.employee_name}</p>
              </div>
            ))}
      </div>
    </>
  );
};

const FetchData = async () => {
  const response = await fetch(
    "https://dummy.restapiexample.com/api/v1/employees"
  );
  const data = await response.json();
  return data;
};

const AddPost = async (post: any) => {
  const response = await fetch(
    "https://dummy.restapiexample.com/api/v1/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add post");
  }

  return response.json();
};

export default DataFetchUsingQuery;
