import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

// Hook to fetch all projects
export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await api.get<Project[]>("/projects");
      return data;
    },
  });
};

// Hook to fetch a single project
export const useProject = (id: string) => {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: async () => {
      const { data } = await api.get<Project>(`/projects/${id}`);
      return data;
    },
    enabled: !!id,
  });
};