import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import NotFound from "../pages/NotFound";
import JobPage, { jobLoader } from "../pages/JobPage";
import AddJobPage, { TNewJobData } from "../pages/AddJobPage";
import EditJobPage from "../pages/EditJobPage";

export type TNewJobParams = {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
};

const addJob = async (newJob: TNewJobData) => {
  try {
    await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  } catch (error) {
    console.log(error);
  }
};

const deleteJob = async (id: string) => {
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const updateJob = async (data: TNewJobData, id: string) => {
  await fetch(`/api/jobs/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-jobs" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route
        path="/jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />
      <Route
        path="/jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />
      <Route
        path="/edit-jobs/:id"
        element={<EditJobPage updateJob={updateJob} />}
        loader={jobLoader}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Router;
