import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/HomeComponent";
import Project from "@/components/ProjectComponent";
import Blog from "@/components/BlogComponent";
import NotFound from "@/components/NotFoundComponent";
import ProjectDetails from "@/components/ProjectDetailsComponent";
import BlogDetails from "@/components/BlogDetailsComponent";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/project-details",
    name: "ProjectDetails",
    component: ProjectDetails,
  },
  {
    path: "/blog-details",
    name: "BlogDetails",
    component: BlogDetails,
  },
  {
    path: "/:CatchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
